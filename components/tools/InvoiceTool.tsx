"use client";

import { forwardRef, useMemo, useRef, type CSSProperties } from "react";
import { docLabels, type DocLang } from "@/content/tools/docs";
import type { ToolsDict } from "@/content/tools";
import { amountInWords, money, num, sen } from "@/lib/money";
import { fileName } from "@/lib/pdf";
import { A4Preview, Area, ExportBar, IconButton, LogoPicker, Panel, Plus, Select, Text, Trash, inputClass, useSaved } from "./ui";

/* Free invoice, receipt and quotation maker. Everything stays in the visitor's browser: their details are kept in
   localStorage for next time, and the PDF is drawn on their device. The layout follows a common invoice in Malaysia:
   business and logo top left, the document's number, date and payment top right, then the customer, the items, the
   amount in words beside the totals, and notes. */

type T = ToolsDict["invoice"];
type Kind = "invoice" | "receipt" | "quotation";
type Item = { desc: string; note: string; qty: string; price: string; tax: string };
type State = {
  kind: Kind; docLang: DocLang; color: string; logo: string;
  bizName: string; bizReg: string; bizAddress: string; bizPhone: string; bizEmail: string; bizTax: string;
  number: string; date: string; due: string; payment: string;
  custName: string; custAddress: string; custContact: string;
  items: Item[]; discount: string; notes: string;
};

const colors = ["#475569", "#0278b4", "#0f766e", "#111827", "#be185d", "#b45309"];
const taxRates = ["0", "5", "6", "8", "10"];

const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};
const prefix: Record<Kind, string> = { invoice: "INV", receipt: "RCP", quotation: "QT" };
const autoNumber = (kind: Kind, date: string) => `${prefix[kind]}-${date.replace(/-/g, "")}-001`;

function initial(t: T, lang: DocLang): State {
  const e = t.example;
  const date = today();
  return {
    kind: "invoice", docLang: "en", color: colors[0], logo: "",
    bizName: e.bizName, bizReg: e.bizReg, bizAddress: e.bizAddress, bizPhone: e.bizPhone, bizEmail: e.bizEmail, bizTax: "",
    number: autoNumber("invoice", date), date, due: "", payment: e.payment,
    custName: e.custName, custAddress: "", custContact: "",
    items: e.items.map((i) => ({ ...i, tax: "0" })), discount: "", notes: t.defaultNotes,
  };
}

/** Line amounts, tax (on the amount after its share of the discount) and totals. */
function totals(s: State) {
  const lines = s.items.map((i) => sen(num(i.qty) * num(i.price)));
  const subtotal = sen(lines.reduce((a, b) => a + b, 0));
  const discount = Math.min(Math.max(num(s.discount), 0), subtotal);
  const share = subtotal ? 1 - discount / subtotal : 1;
  const taxes = s.items.map((i, k) => sen(lines[k] * share * (num(i.tax) / 100)));
  const tax = sen(taxes.reduce((a, b) => a + b, 0));
  return { lines, taxes, subtotal, discount, tax, total: sen(subtotal - discount + tax) };
}

const fmtDate = (iso: string, lang: DocLang) => {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  if (lang === "zh") return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  return d.toLocaleDateString(lang === "ms" ? "ms-MY" : "en-GB", { day: "2-digit", month: "short", year: "numeric" });
};

export default function InvoiceTool({ t, ex, lang }: { t: T; ex: ToolsDict["export"]; lang: DocLang }) {
  const start = useMemo(() => initial(t, lang), [t, lang]);
  const [s, setS] = useSaved<State>("techub-invoice-v3", start);
  const docRef = useRef<HTMLDivElement>(null);
  const set = <K extends keyof State>(k: K, v: State[K]) => setS((o) => ({ ...o, [k]: v }));
  const setItem = (i: number, k: keyof Item, v: string) => setS((o) => ({ ...o, items: o.items.map((it, j) => (j === i ? { ...it, [k]: v } : it)) }));
  const tot = totals(s);
  const L = docLabels[s.docLang].invoice;

  const setKind = (kind: Kind) =>
    setS((o) => ({ ...o, kind, number: o.number === autoNumber(o.kind, o.date) || !o.number ? autoNumber(kind, o.date) : o.number }));
  const setDate = (date: string) =>
    setS((o) => ({ ...o, date, number: o.number === autoNumber(o.kind, o.date) ? autoNumber(o.kind, date) : o.number }));

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="space-y-5 lg:col-span-5">
        <Panel n={1} title={t.form.business}>
          <div className="grid gap-4">
            <LogoPicker value={s.logo} onChange={(v) => set("logo", v)} t={t.form} />
            <Text label={t.form.bizName} value={s.bizName} onChange={(v) => set("bizName", v)} />
            <div className="grid gap-4 sm:grid-cols-2">
              <Text label={t.form.bizReg} value={s.bizReg} onChange={(v) => set("bizReg", v)} />
              <Text label={t.form.bizTax} value={s.bizTax} onChange={(v) => set("bizTax", v)} />
            </div>
            <Area label={t.form.bizAddress} value={s.bizAddress} onChange={(v) => set("bizAddress", v)} rows={2} />
            <div className="grid gap-4 sm:grid-cols-2">
              <Text label={t.form.bizPhone} value={s.bizPhone} onChange={(v) => set("bizPhone", v)} inputMode="tel" />
              <Text label={t.form.bizEmail} value={s.bizEmail} onChange={(v) => set("bizEmail", v)} inputMode="email" />
            </div>
          </div>
        </Panel>

        <Panel n={2} title={t.form.document}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Select label={t.form.kind} value={s.kind} onChange={setKind}
              options={(["invoice", "receipt", "quotation"] as Kind[]).map((k) => ({ value: k, label: t.form.kinds[k] }))} />
            <Text label={t.form.number} value={s.number} onChange={(v) => set("number", v)} />
            <Text label={t.form.date} type="date" value={s.date} onChange={setDate} />
            {s.kind !== "receipt" && (
              <Text label={s.kind === "quotation" ? t.form.valid : t.form.due} type="date" value={s.due} onChange={(v) => set("due", v)} />
            )}
            <Text label={t.form.payment} value={s.payment} onChange={(v) => set("payment", v)} list="techub-payments" className="sm:col-span-2" />
            <datalist id="techub-payments">
              {t.form.payments.map((p) => <option key={p} value={p} />)}
            </datalist>
          </div>
        </Panel>

        <Panel n={3} title={t.form.customer}>
          <div className="grid gap-4">
            <Text label={t.form.custName} value={s.custName} onChange={(v) => set("custName", v)} />
            <Area label={t.form.custAddress} value={s.custAddress} onChange={(v) => set("custAddress", v)} rows={2} />
            <Text label={t.form.custContact} value={s.custContact} onChange={(v) => set("custContact", v)} />
          </div>
        </Panel>

        <Panel n={4} title={t.form.items}>
          <ol className="space-y-3">
            {s.items.map((it, i) => (
              <li key={i} className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
                <div className="flex items-start gap-2">
                  <span className="mt-2.5 w-5 shrink-0 text-center text-xs font-bold text-slate-400">{i + 1}</span>
                  <div className="grid min-w-0 flex-1 gap-2">
                    <input className={inputClass} aria-label={t.form.desc} placeholder={t.form.desc} value={it.desc} onChange={(e) => setItem(i, "desc", e.target.value)} />
                    <input className={`${inputClass} !py-2 pointer-fine:sm:!text-sm`} aria-label={t.form.note} placeholder={t.form.note} value={it.note} onChange={(e) => setItem(i, "note", e.target.value)} />
                    <div className="grid grid-cols-[4.5rem_1fr_6rem] gap-2">
                      <label>
                        <span className="mb-1 block text-[11px] font-semibold text-slate-500">{t.form.qty}</span>
                        <input className={inputClass} inputMode="decimal" value={it.qty} onChange={(e) => setItem(i, "qty", e.target.value)} />
                      </label>
                      <label>
                        <span className="mb-1 block text-[11px] font-semibold text-slate-500">{t.form.price}</span>
                        <input className={inputClass} inputMode="decimal" value={it.price} onChange={(e) => setItem(i, "price", e.target.value)} />
                      </label>
                      <label>
                        <span className="mb-1 block text-[11px] font-semibold text-slate-500">{t.form.tax}</span>
                        <select className={`${inputClass} !px-2`} value={it.tax} onChange={(e) => setItem(i, "tax", e.target.value)}>
                          {taxRates.map((r) => <option key={r} value={r}>{r === "0" ? t.form.noTax : `${r}%`}</option>)}
                        </select>
                      </label>
                    </div>
                  </div>
                  {s.items.length > 1 && (
                    <IconButton label={t.form.removeItem} onClick={() => setS((o) => ({ ...o, items: o.items.filter((_, j) => j !== i) }))}><Trash /></IconButton>
                  )}
                </div>
              </li>
            ))}
          </ol>
          <button type="button" onClick={() => setS((o) => ({ ...o, items: [...o.items, { desc: "", note: "", qty: "1", price: "", tax: o.items.at(-1)?.tax ?? "0" }] }))}
            className="mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50">
            <Plus /> {t.form.addItem}
          </button>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Text label={t.form.discount} inputMode="decimal" value={s.discount} onChange={(v) => set("discount", v)} placeholder="0.00" />
          </div>
        </Panel>

        <Panel n={5} title={t.form.finish}>
          <div className="grid gap-4">
            <Area label={t.form.notes} value={s.notes} onChange={(v) => set("notes", v)} rows={4} />
            <div className="grid gap-4 sm:grid-cols-2">
              <Select label={t.form.docLang} value={s.docLang} onChange={(v) => set("docLang", v)}
                options={[{ value: "en", label: "English" }, { value: "ms", label: "Bahasa Melayu" }, { value: "zh", label: "中文" }]} />
              <div>
                <span className="mb-1.5 block text-[13px] font-semibold text-slate-700">{t.form.color}</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {colors.map((c) => (
                    <button key={c} type="button" onClick={() => set("color", c)} aria-label={c} aria-pressed={s.color === c}
                      className={`h-8 w-8 rounded-full ring-offset-2 transition ${s.color === c ? "ring-2 ring-brand-500" : "ring-1 ring-slate-200"}`} style={{ background: c }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-100 pt-4 text-sm">
              <button type="button" className="font-semibold text-slate-500 hover:text-red-600"
                onClick={() => setS((o) => ({ ...o, custName: "", custAddress: "", custContact: "", items: [{ desc: "", note: "", qty: "1", price: "", tax: "0" }], discount: "", due: "" }))}>
                {t.form.newDoc}
              </button>
              <button type="button" className="font-semibold text-slate-500 hover:text-red-600" onClick={() => setS(start)}>{t.form.reset}</button>
            </div>
            <p className="text-xs text-slate-500">{t.form.saved}</p>
          </div>
        </Panel>
      </div>

      <div className="lg:col-span-7">
        <div className="lg:sticky lg:top-24">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-bold text-slate-900">{t.form.preview} · <span className="text-brand-700">RM {money(tot.total)}</span></p>
          </div>
          <A4Preview docRef={docRef}>
            <InvoiceDoc ref={docRef} s={s} L={L} tot={tot} />
          </A4Preview>
          <ExportBar className="mt-4" docRef={docRef} t={ex}
            filename={fileName(s.bizName, docLabels.en.invoice.kinds[s.kind], s.number)} title={`${L.kinds[s.kind]} ${s.number}`} />
        </div>
      </div>
    </div>
  );
}

/* ---------- The document (inline styles in hex colours, so the PDF looks the same as the preview) ---------- */

const font = 'Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", "Noto Sans CJK SC", sans-serif';
const line = "#cbd5e1";
const cell: CSSProperties = { border: `1px solid ${line}`, padding: "7px 9px", verticalAlign: "top" };

type L = (typeof docLabels)["en"]["invoice"];

export const InvoiceDoc = forwardRef<HTMLDivElement, { s: State; L: L; tot: ReturnType<typeof totals> }>(function InvoiceDoc({ s, L, tot }, ref) {
  const head: CSSProperties = { ...cell, background: tint(s.color), fontWeight: 700, fontSize: 10.5, letterSpacing: 0.4, color: "#1e293b" };
  const meta: [string, string][] = [
    [L.number[s.kind], s.number],
    [L.date, fmtDate(s.date, s.docLang)],
    ...(s.kind !== "receipt" && s.due ? [[s.kind === "quotation" ? L.valid : L.due, fmtDate(s.due, s.docLang)] as [string, string]] : []),
    ...(s.payment ? [[L.payment, s.payment] as [string, string]] : []),
  ];
  const contact = [s.bizPhone && `${L.tel}: ${s.bizPhone}`, s.bizEmail && `${L.email}: ${s.bizEmail}`].filter(Boolean).join("   ");
  return (
    <div ref={ref} lang={s.docLang === "zh" ? "zh-Hans" : s.docLang}
      style={{ width: 794, minHeight: 1123, padding: "44px 46px 30px", background: "#fff", color: "#0f172a", fontFamily: font, fontSize: 11.5, lineHeight: 1.45, display: "flex", flexDirection: "column", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 24 }}>
        <div style={{ display: "flex", gap: 16, minWidth: 0, flex: 1 }}>
          {s.logo && <img src={s.logo} alt="" style={{ width: 92, height: 92, objectFit: "contain", flexShrink: 0 }} />}
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#0f172a" }}>
              {s.bizName || "—"} {s.bizReg && <span style={{ fontSize: 10.5, fontWeight: 400, color: "#334155" }}>({s.bizReg})</span>}
            </div>
            {s.bizAddress && <div style={{ marginTop: 5, whiteSpace: "pre-line", color: "#334155", maxWidth: 300 }}>{s.bizAddress}</div>}
            {contact && <div style={{ marginTop: 5, color: "#334155" }}>{contact}</div>}
            {s.bizTax && <div style={{ color: "#334155" }}>{L.taxNo}: {s.bizTax}</div>}
          </div>
        </div>
        <div style={{ width: 280, flexShrink: 0 }}>
          <div style={{ textAlign: "right", fontSize: 20, fontWeight: 700, letterSpacing: s.docLang === "zh" ? 8 : 5, color: s.color, marginBottom: 12 }}>{L.kinds[s.kind]}</div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {meta.map(([k, v]) => (
                <tr key={k}>
                  <td style={{ ...cell, width: 96, fontWeight: 700, background: tint(s.color) }}>{k}</td>
                  <td style={{ ...cell, fontWeight: k === L.number[s.kind] ? 700 : 400 }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginTop: 26, border: `1px solid ${line}` }}>
        <div style={{ ...head, border: "none", borderBottom: `1px solid ${line}` }}>{L.to[s.kind]}</div>
        <div style={{ padding: "8px 9px" }}>
          <div style={{ fontWeight: 700, textTransform: "uppercase" }}>{s.custName || "—"}</div>
          {s.custAddress && <div style={{ whiteSpace: "pre-line", color: "#334155" }}>{s.custAddress}</div>}
          {s.custContact && <div style={{ color: "#334155" }}>{s.custContact}</div>}
        </div>
      </div>

      <table style={{ marginTop: 16, width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ ...head, width: 44, textAlign: "center", whiteSpace: "nowrap" }}>{L.no}</th>
            <th style={{ ...head, textAlign: "left" }}>{L.desc}</th>
            <th style={{ ...head, width: 56, textAlign: "center" }}>{L.qty}</th>
            <th style={{ ...head, width: 92, textAlign: "right" }}>{L.unit}</th>
            <th style={{ ...head, width: 76, textAlign: "center" }}>{L.tax}</th>
            <th style={{ ...head, width: 112, textAlign: "right" }}>{L.amount}</th>
          </tr>
        </thead>
        <tbody>
          {s.items.map((it, i) => (
            <tr key={i}>
              <td style={{ ...cell, textAlign: "center" }}>{i + 1}</td>
              <td style={cell}>
                <div>{it.desc || "—"}</div>
                {it.note && <div style={{ fontSize: 10.5, color: "#64748b" }}>{it.note}</div>}
              </td>
              <td style={{ ...cell, textAlign: "center" }}>{it.qty}</td>
              <td style={{ ...cell, textAlign: "right" }}>{money(num(it.price))}</td>
              <td style={{ ...cell, textAlign: "center" }}>
                {num(it.tax) ? <>{money(tot.taxes[i])}<div style={{ fontSize: 9.5, color: "#64748b" }}>{num(it.tax)}%</div></> : "—"}
              </td>
              <td style={{ ...cell, textAlign: "right" }}>{money(tot.lines[i])}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 16, display: "flex", gap: 18, alignItems: "flex-start" }}>
        <div style={{ flex: 1, border: `1px solid ${line}` }}>
          <div style={{ ...head, border: "none", borderBottom: `1px solid ${line}` }}>{L.words}</div>
          <div style={{ padding: "8px 9px", fontWeight: 700, fontSize: 10.5 }}>{amountInWords(tot.total)}</div>
        </div>
        <table style={{ width: 300, borderCollapse: "collapse" }}>
          <tbody>
            <tr><td style={{ ...cell, fontWeight: 700, background: tint(s.color) }}>{L.subtotal}</td><td style={{ ...cell, textAlign: "right" }}>MYR {money(tot.subtotal)}</td></tr>
            {tot.discount > 0 && <tr><td style={{ ...cell, fontWeight: 700, background: tint(s.color) }}>{L.discount}</td><td style={{ ...cell, textAlign: "right" }}>− MYR {money(tot.discount)}</td></tr>}
            {tot.tax > 0 && <tr><td style={{ ...cell, fontWeight: 700, background: tint(s.color) }}>{L.taxTotal}</td><td style={{ ...cell, textAlign: "right" }}>MYR {money(tot.tax)}</td></tr>}
            <tr>
              <td style={{ ...cell, fontWeight: 800, fontSize: 13.5, background: tint(s.color), borderTop: `2px solid ${s.color}` }}>{L.total}</td>
              <td style={{ ...cell, fontWeight: 800, fontSize: 13.5, textAlign: "right", borderTop: `2px solid ${s.color}` }}>MYR {money(tot.total)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {s.notes.trim() && (
        <div style={{ marginTop: 22 }}>
          <div style={{ fontWeight: 700, fontSize: 10.5, letterSpacing: 0.4 }}>{L.notes}</div>
          <div style={{ marginTop: 4, whiteSpace: "pre-line", fontSize: 10.5, color: "#334155" }}>{s.notes}</div>
        </div>
      )}

      <div style={{ marginTop: "auto", paddingTop: 24 }}>
        <div style={{ borderTop: "1px solid #0f172a", paddingTop: 7, textAlign: "center", fontSize: 9.5, color: "#334155" }}>
          {[L.footer.replace("{doc}", L.kindsLower[s.kind]), s.bizName, s.bizPhone && `${L.tel}: ${s.bizPhone}`].filter(Boolean).join("  |  ")}
        </div>
      </div>
    </div>
  );
});

/** A very light tint of the accent colour, for table headings. */
function tint(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const mix = (c: number) => Math.round(c + (255 - c) * 0.88);
  return `rgb(${mix((n >> 16) & 255)}, ${mix((n >> 8) & 255)}, ${mix(n & 255)})`;
}
