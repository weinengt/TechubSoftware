"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ToolsDict } from "@/content/tools";
import { money, num } from "@/lib/money";
import { capOf, computeTax, defs, groups, limits, proposed, reliefKeys, years, type Claims, type ReliefKey, type Year } from "@/lib/tax";
import { Panel, inputClass, useSaved } from "./ui";

/* Tax relief calculator for residents in Malaysia, YA 2024 to 2027: pick the year, enter the year's income and what was
   spent, and see each relief allowed, the chargeable income and the tax. Rules are in lib/tax.ts. */

type T = ToolsDict["tax"];
type State = { year: Year; income: string; zakat: string; pcb: string; claims: Record<string, string | boolean> };

const rm = (n: number) => `RM ${money(n)}`;
const rm0 = (n: number) => `RM ${new Intl.NumberFormat("en-MY").format(n)}`;

export default function TaxTool({ t }: { t: T }) {
  const [s, setS] = useSaved<State>("techub-tax-v1", { year: 2026, income: "60000", zakat: "", pcb: "", claims: { epf: "4000", socso: "350", lifestyle: "1500" } });
  const year = s.year;
  const lim = limits[year];
  const claims: Claims = Object.fromEntries(
    Object.entries(s.claims).map(([k, v]) => [k, typeof v === "boolean" ? v : defs[k as ReliefKey]?.kind === "count" ? num(v) : num(v)]),
  );
  const r = computeTax({ income: num(s.income), claims, year, zakat: num(s.zakat), pcb: num(s.pcb) });
  const setClaim = (k: ReliefKey, v: string | boolean) => setS((o) => ({ ...o, claims: { ...o.claims, [k]: v } }));
  const isProposed = proposed.includes(year);
  // The bar for phones goes straight in <body>: inside the page's opening animation, "fixed" wouldn't stick to the screen.
  const [body, setBody] = useState<HTMLElement | null>(null);
  useEffect(() => setBody(document.body), []);
  // It shows only while the summary is still further down the page.
  const summary = useRef<HTMLDivElement>(null);
  const [below, setBelow] = useState(true);
  useEffect(() => {
    const el = summary.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setBelow(!e.isIntersecting && e.boundingClientRect.top > 0));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
      <div className="space-y-5 lg:col-span-7">
        <div className="card p-2" role="tablist" aria-label={t.form.year}>
          <div className="grid grid-cols-4 gap-1">
            {years.map((y) => (
              <button key={y} type="button" role="tab" aria-selected={y === year} onClick={() => setS((o) => ({ ...o, year: y }))}
                className={`rounded-xl px-2 py-2.5 text-center transition ${y === year ? "bg-brand-gradient text-white shadow-md" : "text-slate-700 hover:bg-brand-50"}`}>
                <span className="block text-[11px] font-semibold opacity-80">{t.form.ya}</span>
                <span className="block text-lg leading-tight font-extrabold">{y}</span>
                {proposed.includes(y) && <span className={`mt-0.5 block text-[10px] font-bold uppercase ${y === year ? "text-white/90" : "text-amber-600"}`}>{t.form.proposed}</span>}
              </button>
            ))}
          </div>
        </div>
        {isProposed && <p className="rounded-xl bg-amber-50 p-3 text-sm text-amber-800 ring-1 ring-amber-200">{t.form.proposedNote}</p>}
        <div className="rounded-xl bg-brand-50/60 p-4 ring-1 ring-brand-100">
          <p className="text-sm font-bold text-slate-900">{t.form.whatsNew.replace("{year}", String(year))}</p>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
            {t.news[year].map((n) => (
              <li key={n} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />{n}</li>
            ))}
          </ul>
        </div>

        <Panel n={1} title={t.form.incomeTitle}>
          <div className="grid gap-4 sm:grid-cols-3">
            <MoneyInput label={t.form.income} hint={t.form.incomeHint} value={s.income} onChange={(v) => setS((o) => ({ ...o, income: v }))} />
            <MoneyInput label={t.form.pcb} value={s.pcb} onChange={(v) => setS((o) => ({ ...o, pcb: v }))} />
            <MoneyInput label={t.form.zakat} value={s.zakat} onChange={(v) => setS((o) => ({ ...o, zakat: v }))} />
          </div>
        </Panel>

        {groups.map((g, gi) => {
          const keys = reliefKeys.filter((k) => defs[k].group === g && lim[k] !== undefined);
          if (!keys.length) return null;
          return (
            <Panel key={g} n={gi + 2} title={t.groups[g]}>
              <ul className="divide-y divide-slate-100">
                {keys.map((k) => {
                  const d = defs[k];
                  const max = lim[k]!;
                  const got = r.relief.each[k] ?? 0;
                  const v = s.claims[k];
                  const capped = d.kind === "amount" && num(v as string) > got;
                  const cap = capOf(k, year);
                  return (
                    <li key={k} className="flex flex-col gap-2 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:gap-4">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-900">{t.reliefs[k].name}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                          {t.reliefs[k].note}{" "}
                          <span className="font-semibold whitespace-nowrap text-slate-700">
                            {t.form.max} {rm0(max)}{d.kind === "count" ? ` ${t.form.perChild}` : ""}
                          </span>
                          {cap && <span className="whitespace-nowrap"> · {t.caps[cap]}</span>}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-3 sm:w-44 sm:justify-end">
                        {d.kind === "auto" && <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200">{rm0(max)}</span>}
                        {d.kind === "check" && (
                          <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-700">
                            <input type="checkbox" className="h-5 w-5 accent-brand-600" checked={!!v} onChange={(e) => setClaim(k, e.target.checked)} />
                            {t.form.yes}
                          </label>
                        )}
                        {d.kind === "count" && (
                          <label className="flex items-center gap-2 text-sm text-slate-600">
                            <input className={`${inputClass} !w-20 text-center`} inputMode="numeric" value={(v as string) ?? ""} placeholder="0"
                              aria-label={`${t.reliefs[k].name}: ${t.form.children}`} onChange={(e) => setClaim(k, e.target.value.replace(/\D/g, ""))} />
                            {t.form.children}
                          </label>
                        )}
                        {d.kind === "amount" && (
                          <div className="relative w-full sm:w-36">
                            <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-sm text-slate-400">RM</span>
                            <input className={`${inputClass} pl-10 text-right`} inputMode="decimal" value={(v as string) ?? ""} placeholder="0"
                              aria-label={t.reliefs[k].name} onChange={(e) => setClaim(k, e.target.value)} />
                          </div>
                        )}
                      </div>
                      {capped && <p className="text-xs font-semibold text-amber-700 sm:hidden">{t.form.allowed} {rm0(got)}</p>}
                      {capped && <p className="hidden w-full text-right text-xs font-semibold text-amber-700 sm:block sm:w-auto">{rm0(got)}</p>}
                    </li>
                  );
                })}
              </ul>
            </Panel>
          );
        })}
      </div>

      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-24">
          <div ref={summary} className="overflow-hidden rounded-2xl bg-brand-950 text-white shadow-xl">
            <div className="bg-brand-gradient px-5 py-4">
              <p className="text-xs font-bold tracking-wide uppercase opacity-90">{t.form.summary} · {t.form.ya} {year}{isProposed ? ` (${t.form.proposed})` : ""}</p>
              <p className="mt-1 text-3xl font-extrabold">{rm(r.payable)}</p>
              <p className="text-sm text-white/85">{t.form.payable}</p>
            </div>
            <dl className="space-y-2.5 px-5 py-4 text-sm">
              {[
                [t.form.income, rm(num(s.income))],
                [t.form.totalRelief, `− ${rm(r.relief.total)}`],
                [t.form.chargeable, rm(r.chargeable)],
                [t.form.taxBefore, rm(r.tax)],
                ...(r.rebate ? [[t.form.rebate, `− ${rm(r.rebate)}`]] : []),
                ...(r.zakat ? [[t.form.zakatRebate, `− ${rm(r.zakat)}`]] : []),
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="text-slate-300">{k}</dt>
                  <dd className="font-semibold tabular-nums">{v}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-4 border-t border-white/15 pt-2.5">
                <dt className="font-bold">{t.form.payable}</dt>
                <dd className="font-extrabold tabular-nums">{rm(r.payable)}</dd>
              </div>
              {num(s.pcb) > 0 && (
                <div className={`flex justify-between gap-4 rounded-lg px-3 py-2 ${r.balance <= 0 ? "bg-emerald-500/15 text-emerald-300" : "bg-amber-500/15 text-amber-300"}`}>
                  <dt className="font-bold">{r.balance <= 0 ? t.form.refund : t.form.owe}</dt>
                  <dd className="font-extrabold tabular-nums">{rm(Math.abs(r.balance))}</dd>
                </div>
              )}
              <p className="pt-1 text-xs text-slate-400">
                {t.form.rate} {num(s.income) ? ((r.payable / num(s.income)) * 100).toFixed(2) : "0.00"}%
              </p>
            </dl>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">{t.form.disclaimer}</p>
          {/* On phones the summary is far below, so the tax payable also sits in a bar at the bottom of the screen. */}
          {body && below && createPortal(
          <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 py-2.5 pr-24 pl-4 shadow-[0_-8px_24px_-12px_rgb(15_23_42/0.25)] backdrop-blur lg:hidden">
            <p className="text-[11px] font-semibold text-slate-500 uppercase">{t.form.payable} · {t.form.ya} {year}</p>
            <p className="text-lg leading-tight font-extrabold text-brand-700 tabular-nums">{rm(r.payable)}
              <span className="ml-2 text-xs font-semibold text-slate-500">{t.form.totalRelief} {rm0(r.relief.total)}</span>
            </p>
          </div>,
            body,
          )}
          <button type="button" onClick={() => setS((o) => ({ ...o, claims: {}, zakat: "", pcb: "" }))} className="mt-2 text-sm font-semibold text-slate-500 hover:text-red-600">
            {t.form.clear}
          </button>
        </div>
      </div>
    </div>
  );
}

function MoneyInput({ label, hint, value, onChange }: { label: string; hint?: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-semibold text-slate-700">{label}</span>
      <span className="relative block">
        <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-sm text-slate-400">RM</span>
        <input className={`${inputClass} pl-10`} inputMode="decimal" value={value} placeholder="0" onChange={(e) => onChange(e.target.value)} />
      </span>
      {hint && <span className="mt-1 block text-xs text-slate-500">{hint}</span>}
    </label>
  );
}
