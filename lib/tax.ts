// Personal income tax reliefs and rates for tax residents in Malaysia, Year of Assessment (YA) 2024 to 2027.
// Sources (checked 2026-10-15):
// - YA 2024 and 2025: LHDN's tax relief tables, https://www.hasil.gov.my/en/individual/individual-life-cycle/income-declaration/tax-reliefs/
// - YA 2026: Budget 2026, made law by the Finance Act 2025 (Act 874), gazetted 31 Dec 2025.
// - YA 2027: Budget 2027, tabled 9 Oct 2026. Proposed only until the Finance Act is gazetted; from EY and PwC's
//   Budget 2027 notes. Update this file when the Act is out.
// The names and notes for each relief are in content/tools/*.ts under tax.reliefs, with the same keys.

export const years = [2024, 2025, 2026, 2027] as const;
export type Year = (typeof years)[number];
/** Years whose reliefs are still proposals (tabled in a Budget, not yet law). */
export const proposed: Year[] = [2027];

/** How a relief is claimed: `auto` everyone gets; `check` a fixed amount if it applies; `count` per child; `amount`
 *  what was spent, up to the limit. */
export type Kind = "auto" | "check" | "count" | "amount";

export const reliefKeys = [
  "self", "disabledSelf", "spouse", "disabledSpouse",
  "childU18", "childPreU", "childTertiary", "disabledChild", "disabledChildTertiary",
  "childcare", "breastfeeding", "sspn",
  "parents", "equipment", "medical", "vaccination", "dental", "checkup", "learning", "postnatal",
  "lifestyle", "sports", "tourism", "greenHome",
  "education", "upskilling", "courses",
  "epf", "life", "prs", "insurance", "socso", "socsoVoluntary",
  "housing",
] as const;
export type ReliefKey = (typeof reliefKeys)[number];

export const groups = ["family", "health", "lifestyle", "education", "savings", "home"] as const;
export type Group = (typeof groups)[number];

/** Shared limits: reliefs with the same `cap` count together towards it. */
export type CapKey = "medical" | "epfLife" | "education";

type Def = { group: Group; kind: Kind; cap?: CapKey };
export const defs: Record<ReliefKey, Def> = {
  self: { group: "family", kind: "auto" },
  disabledSelf: { group: "family", kind: "check" },
  spouse: { group: "family", kind: "check" },
  disabledSpouse: { group: "family", kind: "check" },
  childU18: { group: "family", kind: "count" },
  childPreU: { group: "family", kind: "count" },
  childTertiary: { group: "family", kind: "count" },
  disabledChild: { group: "family", kind: "count" },
  disabledChildTertiary: { group: "family", kind: "count" },
  childcare: { group: "family", kind: "amount" },
  breastfeeding: { group: "family", kind: "amount" },
  sspn: { group: "family", kind: "amount" },
  parents: { group: "health", kind: "amount" },
  equipment: { group: "health", kind: "amount" },
  medical: { group: "health", kind: "amount", cap: "medical" },
  vaccination: { group: "health", kind: "amount", cap: "medical" },
  dental: { group: "health", kind: "amount", cap: "medical" },
  checkup: { group: "health", kind: "amount", cap: "medical" },
  learning: { group: "health", kind: "amount", cap: "medical" },
  postnatal: { group: "health", kind: "amount", cap: "medical" },
  lifestyle: { group: "lifestyle", kind: "amount" },
  sports: { group: "lifestyle", kind: "amount" },
  tourism: { group: "lifestyle", kind: "amount" },
  greenHome: { group: "lifestyle", kind: "amount" },
  education: { group: "education", kind: "amount", cap: "education" },
  upskilling: { group: "education", kind: "amount", cap: "education" },
  courses: { group: "education", kind: "amount", cap: "education" },
  epf: { group: "savings", kind: "amount", cap: "epfLife" },
  life: { group: "savings", kind: "amount", cap: "epfLife" },
  prs: { group: "savings", kind: "amount" },
  insurance: { group: "savings", kind: "amount" },
  socso: { group: "savings", kind: "amount" },
  socsoVoluntary: { group: "savings", kind: "amount" },
  housing: { group: "home", kind: "amount" },
};

/** The limit of each relief in each year (per child for `count` reliefs). A relief missing from a year can't be
 *  claimed that year. */
const y2024: Partial<Record<ReliefKey, number>> = {
  self: 9000, disabledSelf: 6000, spouse: 4000, disabledSpouse: 5000,
  childU18: 2000, childPreU: 2000, childTertiary: 8000, disabledChild: 6000, disabledChildTertiary: 8000,
  childcare: 3000, breastfeeding: 1000, sspn: 8000,
  parents: 8000, equipment: 6000, medical: 10000, vaccination: 1000, dental: 1000, checkup: 1000, learning: 4000,
  lifestyle: 2500, sports: 1000, greenHome: 2500,
  education: 7000, upskilling: 2000,
  epf: 4000, life: 3000, prs: 3000, insurance: 3000, socso: 350,
};
const y2025 = { ...y2024, disabledSelf: 7000, disabledSpouse: 6000, disabledChild: 8000, learning: 6000, insurance: 4000, housing: 7000 };
const y2026 = { ...y2025, learning: 10000, tourism: 1000 };
const y2027: Partial<Record<ReliefKey, number>> = { ...y2026, self: 12000, postnatal: 3000, upskilling: 3000, courses: 2000, socsoVoluntary: 150 };
// Budget 2027 moves breastfeeding equipment inside the RM 10,000 health limit.

export const limits: Record<Year, Partial<Record<ReliefKey, number>>> = { 2024: y2024, 2025: y2025, 2026: y2026, 2027: y2027 };

export const capLimits: Record<CapKey, number> = { medical: 10000, epfLife: 7000, education: 7000 };
/** Reliefs that count towards a shared limit only in some years. */
export const capOf = (k: ReliefKey, year: Year): CapKey | undefined => (k === "breastfeeding" && year === 2027 ? "medical" : defs[k].cap);

/** Tax bands: [up to this chargeable income, rate %]. The last band has no top. */
const rates2024: [number, number][] = [
  [5000, 0], [20000, 1], [35000, 3], [50000, 6], [70000, 11], [100000, 19], [400000, 25], [600000, 26], [2000000, 28], [Infinity, 30],
];
const rates2027: [number, number][] = [
  [5000, 0], [20000, 1], [35000, 3], [50000, 6], [70000, 11], [100000, 18], [150000, 24], [400000, 25], [600000, 26], [1000000, 28], [Infinity, 30],
];
export const rates: Record<Year, [number, number][]> = { 2024: rates2024, 2025: rates2024, 2026: rates2024, 2027: rates2027 };

/** Tax on a chargeable income, before rebates. */
export function taxOn(chargeable: number, year: Year) {
  let tax = 0, from = 0;
  for (const [to, r] of rates[year]) {
    if (chargeable <= from) break;
    tax += (Math.min(chargeable, to) - from) * (r / 100);
    from = to;
  }
  return Math.round(tax * 100) / 100;
}

export const rebateLimit = 35000;
export const rebate = 400;

export type Claims = Partial<Record<ReliefKey, number | boolean>>;

/** Each relief allowed, after its own limit and any shared limit, and the total. */
export function allowed(claims: Claims, year: Year) {
  const lim = limits[year];
  const out: Partial<Record<ReliefKey, number>> = {};
  const used: Record<CapKey, number> = { medical: 0, epfLife: 0, education: 0 };
  for (const k of reliefKeys) {
    const max = lim[k];
    if (max === undefined) continue;
    const c = claims[k];
    const d = defs[k];
    let v = 0;
    if (d.kind === "auto") v = max;
    else if (d.kind === "check") v = c ? max : 0;
    else if (d.kind === "count") v = Math.max(0, Math.floor(Number(c) || 0)) * max;
    else v = Math.min(Math.max(0, Number(c) || 0), max);
    // A disabled spouse's extra relief needs the spouse relief; the extra for a disabled child in higher education
    // can't be more children than the disabled child count.
    if (k === "disabledSpouse" && !claims.spouse) v = 0;
    if (k === "disabledChildTertiary") v = Math.min(v, (Math.floor(Number(claims.disabledChild) || 0)) * max);
    const cap = capOf(k, year);
    if (cap) {
      v = Math.min(v, capLimits[cap] - used[cap]);
      used[cap] += v;
    }
    out[k] = v;
  }
  const total = Object.values(out).reduce((a, b) => a + (b ?? 0), 0);
  return { each: out, total };
}

/** Tax for the year: chargeable income, tax, the RM 400 rebate, zakat (up to the tax) and what is left to pay. */
export function computeTax(opts: { income: number; claims: Claims; year: Year; zakat: number; pcb: number }) {
  const relief = allowed(opts.claims, opts.year);
  const chargeable = Math.max(0, Math.floor(opts.income - relief.total));
  const tax = taxOn(chargeable, opts.year);
  const rebateAmt = chargeable <= rebateLimit ? Math.min(rebate, tax) : 0;
  const zakat = Math.min(Math.max(0, opts.zakat), tax - rebateAmt);
  const payable = Math.max(0, Math.round((tax - rebateAmt - zakat) * 100) / 100);
  return { relief, chargeable, tax, rebate: rebateAmt, zakat, payable, balance: Math.round((payable - Math.max(0, opts.pcb)) * 100) / 100 };
}
