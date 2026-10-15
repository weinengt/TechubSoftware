"use client";

import { forwardRef, useMemo, useRef, type CSSProperties } from "react";
import { docLabels, type DocLang } from "@/content/tools/docs";
import type { ToolsDict } from "@/content/tools";
import { amountInWords, money, num } from "@/lib/money";
import { payroll, type Citizenship, type EarningType, type PayResult, type TaxCategory } from "@/lib/payroll";
import { fileName } from "@/lib/pdf";
import { A4Preview, Area, ExportBar, IconButton, LogoPicker, Panel, Plus, Select, Text, Trash, inputClass, useSaved } from "./ui";

/* Free payroll calculator and payslip for Malaysia: EPF, SOCSO (with LINDUNG 24 Jam), EIS and PCB worked out by the
   rules in lib/payroll.ts, on a payslip laid out like an enterprise payroll system's. Everything stays in the browser. */

type T = ToolsDict["payroll"];
type Marital = "single" | "spouseHome" | "spouseWorks" | "singleParent";
type State = {
  docLang: DocLang; color: string; logo: string;
  coName: string; coReg: string; coAddress: string; coNos: string;
  name: string; ic: string; staffNo: string; position: string; department: string; epfNo: string; socsoNo: string; taxNo: string; bank: string;
  period: string; payDate: string; since: string;
  citizenship: Citizenship; age60: boolean; skbbk: boolean; resident: boolean; marital: Marital; children: string; socsoRelief: boolean; hrd: string;
  earnings: { type: EarningType; label: string; amount: string }[];
  deductions: { label: string; amount: string }[];
  zakat: string; pcbManual: string;
};

const types: EarningType[] = ["basic", "allowance", "overtime", "commission", "bonus", "claim", "unpaid"];
const colors = ["#0278b4", "#0f766e", "#334155", "#111827", "#7c3aed", "#be185d"];
const category: Record<Marital, TaxCategory> = { single: 1, spouseHome: 2, spouseWorks: 3, singleParent: 3 };

const thisMonth = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
};
const lastDay = (period: string) => {
  const [y, m] = period.split("-").map(Number);
  const d = new Date(y, m, 0);
  return `${y}-${String(m).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

function initial(t: T, lang: DocLang): State {
  const e = t.example;
  const period = thisMonth();
  return {
    docLang: lang, color: colors[0], logo: "",
    coName: e.coName, coReg: e.coReg, coAddress: e.coAddress, coNos: "",
    name: e.name, ic: e.ic, staffNo: "E001", position: e.position, department: e.department, epfNo: "", socsoNo: "", taxNo: "", bank: "",
    period, payDate: lastDay(period), since: "1",
    citizenship: "citizen", age60: false, skbbk: true, resident: true, marital: "single", children: "0", socsoRelief: true, hrd: "0",
    earnings: [
      { type: "basic", label: "", amount: "4500" },
      { type: "allowance", label: e.allowance, amount: "300" },
      { type: "overtime", label: "", amount: "" },
    ],
    deductions: [],
    zakat: "", pcbManual: "",
  };
}

const fmtPeriod = (period: string, lang: DocLang) => {
  const [y, m] = period.split("-").map(Number);
  if (!y || !m) return period;
  if (lang === "zh") return `${y}年${m}月`;
  return new Date(y, m - 1, 1).toLocaleDateString(lang === "ms" ? "ms-MY" : "en-GB", { month: "long", year: "numeric" });
};
const fmtDate = (iso: string, lang: DocLang) => {
  const d = new Date(`${iso}T00:00:00`);
  if (!iso || Number.isNaN(d.getTime())) return iso;
  if (lang === "zh") return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  return d.toLocaleDateString(lang === "ms" ? "ms-MY" : "en-GB", { day: "2-digit", month: "short", year: "numeric" });
};

function compute(s: State): PayResult {
  const month = Number(s.period.split("-")[1]) || 1;
  return payroll({
    month,
    since: Number(s.since) || 1,
    earnings: s.earnings.map((l) => ({ type: l.type, label: l.label, amount: num(l.amount) })),
    deductions: s.deductions.map((d) => ({ label: d.label, amount: num(d.amount) })),
    zakat: num(s.zakat),
    citizenship: s.citizenship,
    age60: s.age60,
    skbbk: s.skbbk || s.citizenship === "foreign",
    tax: { category: category[s.marital], children: s.marital === "single" ? 0 : Math.max(0, Math.floor(num(s.children))), resident: s.resident, socsoRelief: s.socsoRelief },
    hrd: num(s.hrd),
    pcbOverride: s.pcbManual.trim() === "" ? undefined : num(s.pcbManual),
  });
}

export default function PayrollTool({ t, ex, lang }: { t: T; ex: ToolsDict["export"]; lang: DocLang }) {
  const start = useMemo(() => initial(t, lang), [t, lang]);
  const [s, setS] = useSaved<State>("techub-payroll-v1", start);
  const docRef = useRef<HTMLDivElement>(null);
  const set = <K extends keyof State>(k: K, v: State[K]) => setS((o) => ({ ...o, [k]: v }));
  const r = compute(s);
  const L = docLabels[s.docLang].payslip;
  const f = t.form;
  const month = Number(s.period.split("-")[1]) || 1;

  const setEarning = (i: number, k: "type" | "label" | "amount", v: string) =>
    setS((o) => ({ ...o, earnings: o.earnings.map((l, j) => (j === i ? { ...l, [k]: v } : l)) }));
  const setDeduction = (i: number, k: "label" | "amount", v: string) =>
    setS((o) => ({ ...o, deductions: o.deductions.map((l, j) => (j === i ? { ...l, [k]: v } : l)) }));

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="space-y-5 lg:col-span-5">
        <Panel n={1} title={f.pay}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Text label={f.period} type="month" value={s.period} onChange={(v) => setS((o) => ({ ...o, period: v, payDate: o.payDate === lastDay(o.period) ? lastDay(v) : o.payDate }))} />
            <Text label={f.payDate} type="date" value={s.payDate} onChange={(v) => set("payDate", v)} />
          </div>
          <ol className="mt-4 space-y-2.5">
            {s.earnings.map((l, i) => (
              <li key={i} className="flex items-start gap-2 rounded-xl bg-slate-50 p-2.5 ring-1 ring-slate-200">
                <div className="grid min-w-0 flex-1 grid-cols-2 gap-2">
                  <select className={`${inputClass} !px-2`} aria-label={f.type} value={l.type} onChange={(e) => setEarning(i, "type", e.target.value)}>
                    {types.map((ty) => <option key={ty} value={ty}>{docLabels[lang].payslip.types[ty]}</option>)}
                  </select>
                  <div className="relative">
                    <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-sm text-slate-400">RM</span>
                    <input className={`${inputClass} pl-10 text-right`} inputMode="decimal" aria-label={f.amount} placeholder="0.00" value={l.amount} onChange={(e) => setEarning(i, "amount", e.target.value)} />
                  </div>
                  <input className={`${inputClass} col-span-2 !py-2 !text-sm`} aria-label={f.label} placeholder={f.label} value={l.label} onChange={(e) => setEarning(i, "label", e.target.value)} />
                </div>
                <IconButton label={f.remove} onClick={() => setS((o) => ({ ...o, earnings: o.earnings.filter((_, j) => j !== i) }))}><Trash /></IconButton>
              </li>
            ))}
          </ol>
          <button type="button" onClick={() => setS((o) => ({ ...o, earnings: [...o.earnings, { type: "allowance", label: "", amount: "" }] }))}
            className="mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50">
            <Plus /> {f.addEarning}
          </button>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">{f.typesHint}</p>
        </Panel>

        <Panel n={2} title={f.employee}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Text label={f.name} value={s.name} onChange={(v) => set("name", v)} className="sm:col-span-2" />
            <Select label={f.citizenship} value={s.citizenship} onChange={(v) => set("citizenship", v)}
              options={(["citizen", "pr", "foreign"] as Citizenship[]).map((c) => ({ value: c, label: f.citizenships[c] }))} />
            <Select label={f.age} value={s.age60 ? "60" : "u60"} onChange={(v) => set("age60", v === "60")}
              options={[{ value: "u60", label: f.under60 }, { value: "60", label: f.over60 }]} />
            <Select label={f.marital} value={s.marital} onChange={(v) => set("marital", v)}
              options={(["single", "spouseHome", "spouseWorks", "singleParent"] as Marital[]).map((m) => ({ value: m, label: f.maritals[m] }))} />
            {s.marital !== "single" && <Text label={f.children} hint={f.childrenHint} inputMode="numeric" value={s.children} onChange={(v) => set("children", v.replace(/\D/g, ""))} />}
          </div>
          <div className="mt-4 grid gap-2.5">
            <Check label={f.skbbk} hint={s.citizenship === "foreign" ? f.skbbkForeign : f.skbbkHint} checked={s.skbbk || s.citizenship === "foreign"} disabled={s.citizenship === "foreign"} onChange={(v) => set("skbbk", v)} />
            <Check label={f.resident} hint={f.residentHint} checked={s.resident} onChange={(v) => set("resident", v)} />
          </div>
          <details className="mt-4 rounded-xl ring-1 ring-slate-200 [&_summary::-webkit-details-marker]:hidden">
            <summary className="cursor-pointer list-none px-3 py-2.5 text-sm font-semibold text-brand-700">+ {f.moreDetails}</summary>
            <div className="grid gap-4 border-t border-slate-100 p-3 sm:grid-cols-2">
              <Text label={f.ic} value={s.ic} onChange={(v) => set("ic", v)} />
              <Text label={f.staffNo} value={s.staffNo} onChange={(v) => set("staffNo", v)} />
              <Text label={f.position} value={s.position} onChange={(v) => set("position", v)} />
              <Text label={f.department} value={s.department} onChange={(v) => set("department", v)} />
              <Text label={f.epfNo} value={s.epfNo} onChange={(v) => set("epfNo", v)} />
              <Text label={f.socsoNo} value={s.socsoNo} onChange={(v) => set("socsoNo", v)} />
              <Text label={f.taxNo} value={s.taxNo} onChange={(v) => set("taxNo", v)} />
              <Text label={f.bank} value={s.bank} onChange={(v) => set("bank", v)} />
            </div>
          </details>
        </Panel>

        <Panel n={3} title={f.deductionsTitle}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Text label={f.zakat} inputMode="decimal" value={s.zakat} onChange={(v) => set("zakat", v)} placeholder="0.00" />
            <Text label={f.pcbManual} hint={`${f.pcbAuto} RM ${money(r.autoPcb)}`} inputMode="decimal" value={s.pcbManual} onChange={(v) => set("pcbManual", v)} placeholder={money(r.autoPcb)} />
          </div>
          {s.deductions.length > 0 && (
            <ol className="mt-4 space-y-2.5">
              {s.deductions.map((d, i) => (
                <li key={i} className="flex items-center gap-2">
                  <input className={inputClass} aria-label={f.label} placeholder={f.deductionLabel} value={d.label} onChange={(e) => setDeduction(i, "label", e.target.value)} />
                  <input className={`${inputClass} !w-32 text-right`} inputMode="decimal" aria-label={f.amount} placeholder="0.00" value={d.amount} onChange={(e) => setDeduction(i, "amount", e.target.value)} />
                  <IconButton label={f.remove} onClick={() => setS((o) => ({ ...o, deductions: o.deductions.filter((_, j) => j !== i) }))}><Trash /></IconButton>
                </li>
              ))}
            </ol>
          )}
          <button type="button" onClick={() => setS((o) => ({ ...o, deductions: [...o.deductions, { label: "", amount: "" }] }))}
            className="mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50">
            <Plus /> {f.addDeduction}
          </button>
          <div className="mt-4 grid gap-4 border-t border-slate-100 pt-4 sm:grid-cols-2">
            <Select label={f.since} hint={f.sinceHint} value={s.since} onChange={(v) => set("since", v)}
              options={Array.from({ length: month }, (_, i) => ({ value: String(i + 1), label: fmtPeriod(`${s.period.split("-")[0]}-${String(i + 1).padStart(2, "0")}`, lang) }))} />
            <Select label={f.hrd} value={s.hrd} onChange={(v) => set("hrd", v)}
              options={[{ value: "0", label: f.hrdNone }, { value: "1", label: "1%" }, { value: "0.5", label: "0.5%" }]} />
          </div>
          <div className="mt-3">
            <Check label={f.socsoRelief} hint={f.socsoReliefHint} checked={s.socsoRelief} onChange={(v) => set("socsoRelief", v)} />
          </div>
        </Panel>

        <Panel n={4} title={f.company}>
          <div className="grid gap-4">
            <LogoPicker value={s.logo} onChange={(v) => set("logo", v)} t={f} />
            <Text label={f.coName} value={s.coName} onChange={(v) => set("coName", v)} />
            <Text label={f.coReg} value={s.coReg} onChange={(v) => set("coReg", v)} />
            <Area label={f.coAddress} value={s.coAddress} onChange={(v) => set("coAddress", v)} rows={2} />
            <Text label={f.coNos} value={s.coNos} onChange={(v) => set("coNos", v)} placeholder="EPF 012345678 · SOCSO B3201234567X · E 1234567890" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Select label={f.docLang} value={s.docLang} onChange={(v) => set("docLang", v)}
                options={[{ value: "en", label: "English" }, { value: "ms", label: "Bahasa Melayu" }, { value: "zh", label: "中文" }]} />
              <div>
                <span className="mb-1.5 block text-[13px] font-semibold text-slate-700">{f.color}</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {colors.map((c) => (
                    <button key={c} type="button" onClick={() => set("color", c)} aria-label={c} aria-pressed={s.color === c}
                      className={`h-8 w-8 rounded-full ring-offset-2 transition ${s.color === c ? "ring-2 ring-brand-500" : "ring-1 ring-slate-200"}`} style={{ background: c }} />
                  ))}
                </div>
              </div>
            </div>
            <button type="button" className="w-fit text-sm font-semibold text-slate-500 hover:text-red-600" onClick={() => setS(start)}>{f.reset}</button>
            <p className="text-xs text-slate-500">{f.saved}</p>
          </div>
        </Panel>
      </div>

      <div className="lg:col-span-7">
        <div className="lg:sticky lg:top-24">
          <dl className="mb-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {[
              [f.gross, r.gross, "text-slate-900"],
              [f.deducted, r.totalDeductions, "text-red-600"],
              [f.net, r.net, "text-emerald-700"],
              [f.cost, r.costToEmployer, "text-brand-700"],
            ].map(([k, v, c]) => (
              <div key={k as string} className="card px-3 py-2.5">
                <dt className="text-[11px] font-semibold text-slate-500 uppercase">{k}</dt>
                <dd className={`text-base font-extrabold tabular-nums ${c}`}>RM {money(v as number)}</dd>
              </div>
            ))}
          </dl>
          <A4Preview docRef={docRef}>
            <Payslip ref={docRef} s={s} r={r} L={L} />
          </A4Preview>
          <ExportBar className="mt-4" docRef={docRef} t={ex} filename={fileName(docLabels.en.payslip.title, s.name, s.period)} title={`${L.title} ${s.name} ${fmtPeriod(s.period, s.docLang)}`} />
          <p className="mt-3 text-xs leading-relaxed text-slate-500">{f.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}

function Check({ label, hint, checked, onChange, disabled }: { label: string; hint?: string; checked: boolean; onChange: (v: boolean) => void; disabled?: boolean }) {
  return (
    <label className={`flex gap-3 ${disabled ? "opacity-70" : "cursor-pointer"}`}>
      <input type="checkbox" className="mt-0.5 h-5 w-5 shrink-0 accent-brand-600" checked={checked} disabled={disabled} onChange={(e) => onChange(e.target.checked)} />
      <span>
        <span className="block text-sm font-semibold text-slate-800">{label}</span>
        {hint && <span className="block text-xs leading-relaxed text-slate-500">{hint}</span>}
      </span>
    </label>
  );
}

/* ---------- The payslip (inline styles in hex colours, so the PDF looks the same as the preview) ---------- */

const font = 'Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Noto Sans CJK SC", sans-serif';
const line = "#cbd5e1";

type PL = (typeof docLabels)["en"]["payslip"];

export const Payslip = forwardRef<HTMLDivElement, { s: State; r: PayResult; L: PL }>(function Payslip({ s, r, L }, ref) {
  const lt = tint(s.color);
  const head: CSSProperties = { background: lt, fontWeight: 700, fontSize: 10.5, letterSpacing: 0.5, padding: "7px 10px", color: "#1e293b", borderBottom: `1px solid ${line}` };
  const row: CSSProperties = { display: "flex", justifyContent: "space-between", gap: 12, padding: "6px 10px", borderBottom: "1px solid #eef2f6" };
  const earnings = s.earnings.filter((l) => num(l.amount) !== 0);
  const deductions: [string, number][] = [
    [L.epf, r.epf.ee],
    [L.socso, r.socso.ee],
    ...(r.socso.skbbk ? [[L.skbbk, r.socso.skbbk] as [string, number]] : []),
    ...(r.socso.eisEe ? [[L.eis, r.socso.eisEe] as [string, number]] : []),
    [L.pcb, r.pcb],
    ...(r.zakat ? [[L.zakat, r.zakat] as [string, number]] : []),
    ...s.deductions.filter((d) => num(d.amount) > 0).map((d) => [d.label || "—", num(d.amount)] as [string, number]),
  ];
  const info: [string, string][] = [
    [L.name, s.name], [L.ic, s.ic], [L.staffNo, s.staffNo], [L.position, s.position], [L.department, s.department],
    [L.epfNo, s.epfNo], [L.socsoNo, s.socsoNo], [L.taxNo, s.taxNo], [L.bank, s.bank],
  ].filter(([, v]) => v) as [string, string][];
  const employer: [string, number][] = [[L.epf, r.employer.epf], [L.socso, r.employer.socso], [L.eis, r.employer.eis], ...(r.employer.hrd ? [[L.hrd, r.employer.hrd] as [string, number]] : [])];
  const ytd: [string, number][] = [[L.gross, r.ytd.gross], [L.epf, r.ytd.epf], [`${L.socso} + ${L.eis}`, r.ytd.socso], [L.pcb, r.ytd.pcb]];
  return (
    <div ref={ref} lang={s.docLang === "zh" ? "zh-Hans" : s.docLang}
      style={{ width: 794, minHeight: 1123, padding: "44px 46px 30px", background: "#fff", color: "#0f172a", fontFamily: font, fontSize: 11.5, lineHeight: 1.45, display: "flex", flexDirection: "column", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 24, paddingBottom: 16, borderBottom: `3px solid ${s.color}` }}>
        <div style={{ display: "flex", gap: 16, minWidth: 0, flex: 1 }}>
          {s.logo && <img src={s.logo} alt="" style={{ width: 80, height: 80, objectFit: "contain", flexShrink: 0 }} />}
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 17, fontWeight: 700 }}>
              {s.coName || "—"} {s.coReg && <span style={{ fontSize: 10.5, fontWeight: 400, color: "#334155" }}>({s.coReg})</span>}
            </div>
            {s.coAddress && <div style={{ marginTop: 4, whiteSpace: "pre-line", color: "#334155", maxWidth: 330 }}>{s.coAddress}</div>}
            {s.coNos && <div style={{ marginTop: 4, color: "#334155", fontSize: 10.5 }}>{L.employerNos}: {s.coNos}</div>}
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: s.docLang === "zh" ? 8 : 5, color: s.color }}>{L.title}</div>
          <div style={{ marginTop: 8, color: "#334155" }}>{L.period}: <b style={{ color: "#0f172a" }}>{fmtPeriod(s.period, s.docLang)}</b></div>
          <div style={{ color: "#334155" }}>{L.payDate}: <b style={{ color: "#0f172a" }}>{fmtDate(s.payDate, s.docLang)}</b></div>
        </div>
      </div>

      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 24, rowGap: 4, padding: "10px 12px", background: "#f8fafc", border: `1px solid ${line}` }}>
        {info.map(([k, v]) => (
          <div key={k} style={{ display: "flex", gap: 8 }}>
            <span style={{ width: 118, flexShrink: 0, color: "#64748b" }}>{k}</span>
            <span style={{ fontWeight: k === L.name ? 700 : 400 }}>{v}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" }}>
        <div style={{ border: `1px solid ${line}` }}>
          <div style={{ ...head, display: "flex", justifyContent: "space-between" }}><span>{L.earnings}</span><span>{L.amount}</span></div>
          {earnings.map((l, i) => (
            <div key={i} style={row}>
              <span>{l.label ? `${L.types[l.type]} · ${l.label}` : L.types[l.type]}</span>
              <span style={{ whiteSpace: "nowrap" }}>{l.type === "unpaid" ? `(${money(Math.abs(num(l.amount)))})` : money(num(l.amount))}</span>
            </div>
          ))}
          <div style={{ ...row, borderBottom: "none", fontWeight: 700, background: "#f8fafc" }}><span>{L.gross}</span><span>{money(r.gross)}</span></div>
        </div>
        <div style={{ border: `1px solid ${line}` }}>
          <div style={{ ...head, display: "flex", justifyContent: "space-between" }}><span>{L.deductions}</span><span>{L.amount}</span></div>
          {deductions.map(([k, v], i) => (
            <div key={i} style={row}><span>{k}</span><span>{money(v)}</span></div>
          ))}
          <div style={{ ...row, borderBottom: "none", fontWeight: 700, background: "#f8fafc" }}><span>{L.totalDeductions}</span><span>{money(r.totalDeductions)}</span></div>
        </div>
      </div>

      <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "12px 14px", background: s.color, color: "#fff" }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>{L.net}</div>
          <div style={{ fontSize: 9.5, opacity: 0.9, marginTop: 2 }}>{amountInWords(r.net)}</div>
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, whiteSpace: "nowrap" }}>RM {money(r.net)}</div>
      </div>

      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" }}>
        <div style={{ border: `1px solid ${line}` }}>
          <div style={head}>{L.employer}</div>
          {employer.map(([k, v]) => <div key={k} style={row}><span>{k}</span><span>{money(v)}</span></div>)}
        </div>
        <div style={{ border: `1px solid ${line}` }}>
          <div style={head}>{L.ytd}</div>
          {ytd.map(([k, v]) => <div key={k} style={row}><span>{k}</span><span>{money(v)}</span></div>)}
        </div>
      </div>

      <div style={{ marginTop: "auto", paddingTop: 24 }}>
        <div style={{ borderTop: "1px solid #0f172a", paddingTop: 7, textAlign: "center", fontSize: 9.5, color: "#334155" }}>
          {[L.footer, s.coName].filter(Boolean).join("  |  ")}
        </div>
      </div>
    </div>
  );
});

function tint(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const mix = (c: number) => Math.round(c + (255 - c) * 0.88);
  return `rgb(${mix((n >> 16) & 255)}, ${mix((n >> 8) & 255)}, ${mix(n & 255)})`;
}
