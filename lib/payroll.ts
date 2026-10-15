// Malaysia payroll for one employee and one month: EPF, SOCSO (with LINDUNG 24 Jam), EIS, PCB and the HRD Corp levy.
// Rules as of October 2026 (researched 2026-10-15):
// - EPF: Third Schedule from 1 Oct 2025, kwsp.gov.my. Part A citizens and PRs under 60 (11% / 13%, employer 12% above
//   RM 5,000), Part C PRs 60+ (5.5% / 6.5% or 6%), Part E citizens 60+ (0% / 4%), Part F foreign workers (2% / 2% of
//   the actual wage, at least the minimum wage). Up to RM 20,000 the share is worked out on the top of the wage band
//   (RM 20 bands to RM 5,000, then RM 100 bands) and rounded up to the ringgit.
// - SOCSO Act 4 and LINDUNG 24 Jam (SKBBK, from 1 Jun 2026) and EIS Act 800, perkeso.gov.my: worked out on the middle of
//   each wage band, up to RM 6,000, rounded to 5 sen (a half goes to the even 5 sen, which matches PERKESO's table).
//   Category 1 under 60: employer 1.75%, employee 0.5%. Category 2 (60+): employer 1.25%. SKBBK: employee 0.75%.
//   EIS 0.2% each, not for 60+ or foreign workers.
// - PCB: LHDN's computerised calculation (MTD) specification for 2026; the formula is unchanged from 2025.
// - HRD Corp levy: 1% (10+ Malaysia employees) or 0.5% (5 to 9, optional), Malaysia employees only.

export type Citizenship = "citizen" | "pr" | "foreign";
export type EarningType = "basic" | "allowance" | "overtime" | "commission" | "bonus" | "claim" | "unpaid";
export type TaxCategory = 1 | 2 | 3;

/** What each kind of pay counts towards. Overtime isn't EPF wages; a bonus isn't SOCSO wages; claims are neither and
 *  aren't taxed; unpaid leave comes off all of them. */
export const earningRules: Record<EarningType, { epf: boolean; socso: boolean; tax: "normal" | "additional" | false; hrd: boolean }> = {
  basic: { epf: true, socso: true, tax: "normal", hrd: true },
  allowance: { epf: true, socso: true, tax: "normal", hrd: true },
  overtime: { epf: false, socso: true, tax: "normal", hrd: false },
  commission: { epf: true, socso: true, tax: "normal", hrd: false },
  bonus: { epf: true, socso: false, tax: "additional", hrd: false },
  claim: { epf: false, socso: false, tax: false, hrd: false },
  unpaid: { epf: true, socso: true, tax: "normal", hrd: true },
};

export const minimumWage = 1700;

const ceilRM = (x: number) => Math.ceil(Math.round(x * 1e6) / 1e6);

/** The statutory EPF rates (%) for this worker: [employee, employer]. `normalWage` decides the employer's 13% or 12%
 *  (a bonus doesn't move a RM 5,000 earner to 12%). */
export function epfRates(normalWage: number, opts: { citizenship: Citizenship; age60: boolean }): [number, number] {
  if (opts.citizenship === "foreign") return [2, 2];
  const low = normalWage <= 5000;
  return opts.age60 && opts.citizenship === "citizen" ? [0, 4] : opts.age60 ? [5.5, low ? 6.5 : 6] : [11, low ? 13 : 12];
}

/** EPF for one month. The statutory amounts follow the Third Schedule's wage bands; a rate the employer or employee
 *  chose instead (`rates`, in %) is worked on the actual wage and rounded up to the ringgit, as EPF does for
 *  contributions above the schedule. */
export function epf(wage: number, opts: { citizenship: Citizenship; age60: boolean; normalWage?: number; rates?: { ee?: number; er?: number } }) {
  if (wage <= 10) return { ee: 0, er: 0 };
  const [eeRate, erRate] = epfRates(opts.normalWage ?? wage, opts);
  const foreign = opts.citizenship === "foreign";
  const base = foreign ? Math.max(wage, minimumWage) : wage;
  const top = foreign || wage > 20000 ? base : wage <= 20 ? 20 : wage <= 5000 ? Math.ceil(wage / 20) * 20 : Math.ceil(wage / 100) * 100;
  const share = (rate: number, chosen?: number) =>
    chosen === undefined || chosen === rate ? ceilRM(top * (rate / 100)) : ceilRM(base * (Math.max(0, chosen) / 100));
  return { ee: share(eeRate, opts.rates?.ee), er: share(erRate, opts.rates?.er) };
}

/** Rounds to 5 sen, a half going to the even 5 sen. */
const round5 = (rm: number) => {
  const units = Math.round(rm * 100 * 1e4) / 1e4 / 5;
  const f = Math.floor(units), d = units - f;
  const r = d > 0.5 + 1e-9 ? f + 1 : d < 0.5 - 1e-9 ? f : f % 2 === 0 ? f : f + 1;
  return (r * 5) / 100;
};

/** The middle of PERKESO's wage band, up to the RM 6,000 ceiling. */
function bandMiddle(wage: number) {
  if (wage > 6000) return 5950;
  const edges = [30, 50, 70, 100, 140, 200, 300];
  let lo = 0;
  for (const e of edges) {
    if (wage <= e) return (lo + e) / 2;
    lo = e;
  }
  const top = Math.ceil(wage / 100) * 100;
  return top - 50;
}

/** SOCSO (Act 4 and LINDUNG 24 Jam) and EIS for one month. */
export function socso(wage: number, opts: { citizenship: Citizenship; age60: boolean; skbbk: boolean }) {
  if (wage <= 0) return { er: 0, ee: 0, skbbk: 0, eisEr: 0, eisEe: 0 };
  let er: number, ee: number, all: number;
  if (wage <= 30) {
    // PERKESO's first row doesn't follow the middle-of-band rule.
    [er, ee, all] = opts.age60 ? [0.3, 0, 0.5] : [0.4, 0.1, 0.7];
    return { er, ee, skbbk: opts.skbbk ? 0.2 : 0, eisEr: 0, eisEe: 0 };
  }
  const mid = bandMiddle(wage);
  if (opts.age60) {
    er = round5(mid * 0.0125);
    ee = 0;
  } else {
    ee = round5(mid * 0.005);
    er = round5(mid * 0.0225) - ee;
  }
  const skbbk = opts.skbbk ? round5(mid * (opts.age60 ? 0.0075 : 0.0125)) - ee : 0;
  const eis = !opts.age60 && opts.citizenship !== "foreign" ? round5(mid * 0.002) : 0;
  return { er: fix(er), ee: fix(ee), skbbk: fix(skbbk), eisEr: eis, eisEe: eis };
}

const fix = (n: number) => Math.round(n * 100) / 100;

/* ---------- PCB (monthly tax deduction) ---------- */

/** [up to P, M, R %, B for categories 1 and 3, B for category 2] from LHDN's MTD table for 2025 and 2026. */
const mrb: [number, number, number, number, number][] = [
  [5000, 0, 0, 0, 0],
  [20000, 5000, 1, -400, -800],
  [35000, 20000, 3, -250, -650],
  [50000, 35000, 6, 600, 600],
  [70000, 50000, 11, 1500, 1500],
  [100000, 70000, 19, 3700, 3700],
  [400000, 100000, 25, 9400, 9400],
  [600000, 400000, 26, 84400, 84400],
  [2000000, 600000, 28, 136400, 136400],
  [Infinity, 2000000, 30, 528400, 528400],
];

/** Tax for the year on P, with the rebates in B; never below zero. */
function yearTax(P: number, cat: TaxCategory) {
  if (P <= 5000) return 0;
  const row = mrb.find((r) => P <= r[0])!;
  const t = (P - row[1]) * (row[2] / 100) + (cat === 2 ? row[4] : row[3]);
  return Math.max(0, trunc2(t));
}

const trunc2 = (n: number) => Math.floor(Math.round(n * 1e6) / 1e4) / 100;
/** Up to the next 5 sen: 287.02 is 287.05. */
const up5 = (n: number) => Math.ceil(Math.round(n * 100 * 1e4) / 1e4 / 5) * 5 / 100;

export type TaxProfile = { category: TaxCategory; children: number; resident: boolean; socsoRelief: boolean };

type Ytd = { Y: number; K: number; X: number; Z: number; LP: number };

/** PCB for one month by LHDN's formula. `Y1` and `K1` are this month's normal pay and EPF, `Yt` and `Kt` the bonus and
 *  its EPF, `LP1` this month's SOCSO and EIS relief. */
function mtd(month: number, ytd: Ytd, cur: { Y1: number; K1: number; Yt: number; Kt: number; LP1: number; zakat: number }, p: TaxProfile) {
  const n = 12 - month;
  const D = 9000;
  const S = p.category === 2 ? 4000 : 0;
  const QC = p.category === 1 ? 0 : 2000 * p.children;
  const K1 = Math.min(cur.K1, Math.max(0, 4000 - ytd.K));
  const reliefs = D + S + QC + ytd.LP + cur.LP1;

  // Normal pay first.
  const K2a = n ? Math.max(0, Math.min(trunc2((4000 - (ytd.K + K1)) / n), K1)) : 0;
  const Pa = trunc2(ytd.Y - ytd.K + (cur.Y1 - K1) + (cur.Y1 - K2a) * n - reliefs);
  let normal = up5(Math.max(0, trunc2((yearTax(Pa, p.category) - (ytd.Z + ytd.X)) / (n + 1))));
  if (normal < 10) normal = 0;
  const net = Math.max(0, up5(normal - cur.zakat));

  // Then the bonus, taxed in full this month.
  let extra = 0;
  if (cur.Yt > 0) {
    const Kt = Math.min(cur.Kt, Math.max(0, 4000 - ytd.K - K1));
    const K2b = n ? Math.max(0, Math.min(trunc2((4000 - (ytd.K + K1 + Kt)) / n), K1)) : 0;
    const Pb = trunc2(ytd.Y - ytd.K + (cur.Y1 - K1) + (cur.Y1 - K2b) * n + (cur.Yt - Kt) - reliefs);
    extra = up5(Math.max(0, yearTax(Pb, p.category) - (ytd.Z + ytd.X + normal * (n + 1))));
    if (extra < 10) extra = 0;
  }
  return { pcb: fix(net + extra), normal, extra, K1 };
}

export type Line = { type: EarningType; label: string; amount: number };

export type PayInput = {
  month: number; // 1 to 12
  /** The month this pay started; earlier months of the year are left out of the year-to-date figures. */
  since: number;
  earnings: Line[];
  deductions: { label: string; amount: number }[];
  zakat: number;
  citizenship: Citizenship;
  age60: boolean;
  skbbk: boolean;
  tax: TaxProfile;
  /** HRD Corp levy rate: 0, 0.5 or 1 (%). */
  hrd: number;
  /** EPF rates (%) chosen instead of the statutory ones; leave out to use the statutory rates. */
  epfRates?: { ee?: number; er?: number };
};

/** One month's pay, with pay this month and the same normal pay assumed for each earlier month since `since`. */
export function payroll(input: PayInput) {
  const sum = (pick: (t: EarningType) => boolean | string) =>
    input.earnings.reduce((a, l) => (pick(l.type) ? a + (l.type === "unpaid" ? -Math.abs(l.amount) : l.amount) : a), 0);
  const gross = fix(sum(() => true));
  const epfWage = Math.max(0, sum((t) => earningRules[t].epf));
  const epfNormal = Math.max(0, sum((t) => earningRules[t].epf && t !== "bonus"));
  const socsoWage = Math.max(0, sum((t) => earningRules[t].socso));
  const normalPay = Math.max(0, sum((t) => earningRules[t].tax === "normal"));
  const bonus = Math.max(0, sum((t) => earningRules[t].tax === "additional"));
  const hrdWage = Math.max(0, sum((t) => earningRules[t].hrd));

  const who = { citizenship: input.citizenship, age60: input.age60 };
  const e = epf(epfWage, { ...who, normalWage: epfNormal, rates: input.epfRates });
  const eNormal = epf(epfNormal, { ...who, rates: input.epfRates });
  const s = socso(socsoWage, { ...who, skbbk: input.skbbk });
  const socsoEe = s.ee + s.skbbk + s.eisEe;

  // Earlier months this year at the same normal pay, to carry the year-to-date figures into the formula.
  const ytd: Ytd = { Y: 0, K: 0, X: 0, Z: 0, LP: 0 };
  const lp = (have: number) => (input.tax.socsoRelief ? Math.min(socsoEe, Math.max(0, 350 - have)) : 0);
  const zakat = Math.max(0, input.zakat);
  const resident = input.tax.resident;
  const months = [] as { gross: number; epf: number; socso: number; pcb: number; zakat: number }[];
  for (let m = Math.max(1, Math.min(input.since, input.month)); m < input.month; m++) {
    const r = mtd(m, ytd, { Y1: normalPay, K1: eNormal.ee, Yt: 0, Kt: 0, LP1: lp(ytd.LP), zakat }, input.tax);
    const pcb = resident ? r.pcb : up5(normalPay * 0.3);
    months.push({ gross: normalPay + Math.max(0, gross - normalPay - bonus), epf: eNormal.ee, socso: socsoEe, pcb, zakat });
    ytd.Y += normalPay; ytd.K += r.K1; ytd.X += resident ? r.normal : 0; ytd.Z += zakat; ytd.LP += lp(ytd.LP);
  }
  const now = mtd(input.month, ytd, { Y1: normalPay, K1: eNormal.ee, Yt: bonus, Kt: Math.max(0, e.ee - eNormal.ee), LP1: lp(ytd.LP), zakat }, input.tax);
  const autoPcb = resident ? now.pcb : up5((normalPay + bonus) * 0.3);
  const pcb = autoPcb;

  const others = input.deductions.reduce((a, d) => a + Math.max(0, d.amount), 0);
  const totalDeductions = fix(e.ee + s.ee + s.skbbk + s.eisEe + pcb + zakat + others);
  const net = fix(gross - totalDeductions);
  const hrd = input.citizenship === "foreign" ? 0 : fix(hrdWage * (input.hrd / 100));
  const employer = { epf: e.er, socso: s.er, eis: s.eisEr, hrd, total: fix(e.er + s.er + s.eisEr + hrd) };

  const before = months.reduce(
    (a, m) => ({ gross: a.gross + m.gross, epf: a.epf + m.epf, socso: a.socso + m.socso, pcb: a.pcb + m.pcb, zakat: a.zakat + m.zakat }),
    { gross: 0, epf: 0, socso: 0, pcb: 0, zakat: 0 },
  );
  const ytdOut = {
    gross: fix(before.gross + gross),
    epf: fix(before.epf + e.ee),
    socso: fix(before.socso + socsoEe),
    pcb: fix(before.pcb + pcb),
    zakat: fix(before.zakat + zakat),
  };

  return {
    gross, epfWage, socsoWage,
    epf: e, socso: s, pcb, autoPcb, pcbParts: { normal: now.normal, bonus: now.extra }, zakat, others,
    totalDeductions, net, employer, ytd: ytdOut, costToEmployer: fix(gross + employer.total),
  };
}

export type PayResult = ReturnType<typeof payroll>;
