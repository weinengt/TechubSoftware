import type { ToolsDict } from "@/content/tools";
import { SectionHeading } from "@/components/Sections";
import { defs, groups, limits, proposed, rates, reliefKeys, years, type Year } from "@/lib/tax";

/* Every relief for YA 2024 to 2027 side by side, and the tax rates, as plain tables on the Tax Relief page, so people
   and search engines can read them without using the calculator. A changed limit is highlighted. */

const fmt = (n: number) => new Intl.NumberFormat("en-MY").format(n);

export default function TaxTables({ t }: { t: ToolsDict["tax"] }) {
  const th = "px-3 py-2.5 text-right text-xs font-bold tracking-wide whitespace-nowrap uppercase";
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.tables.eyebrow} title={t.tables.title} intro={t.tables.intro} />
        <div className="card mt-10 overflow-x-auto p-0" data-reveal>
          <table className="w-full min-w-[36rem] border-collapse text-sm">
            <caption className="sr-only">{t.tables.title}</caption>
            <thead className="bg-brand-950 text-white">
              <tr>
                <th scope="col" className={`${th} text-left`}>{t.tables.relief}</th>
                {years.map((y) => (
                  <th key={y} scope="col" className={th}>
                    {t.form.ya} {y}{proposed.includes(y) ? "*" : ""}
                  </th>
                ))}
              </tr>
            </thead>
            {groups.map((g) => (
              <tbody key={g}>
                <tr className="bg-brand-50">
                  <th colSpan={years.length + 1} scope="colgroup" className="px-3 py-2 text-left text-xs font-bold tracking-wide text-brand-800 uppercase">{t.groups[g]}</th>
                </tr>
                {reliefKeys
                  .filter((k) => defs[k].group === g)
                  .map((k) => (
                    <tr key={k} className="border-t border-slate-100">
                      <th scope="row" className="px-3 py-2.5 text-left font-medium text-slate-800">
                        {t.reliefs[k].name}
                        {defs[k].kind === "count" && <span className="font-normal text-slate-500"> ({t.form.perChild})</span>}
                      </th>
                      {years.map((y, i) => {
                        const v = limits[y][k];
                        const prev = i ? limits[years[i - 1] as Year][k] : v;
                        const changed = i > 0 && v !== prev;
                        return (
                          <td key={y} className={`px-3 py-2.5 text-right tabular-nums whitespace-nowrap ${changed ? "font-bold text-brand-700" : "text-slate-700"}`}>
                            {v === undefined ? "—" : fmt(v)}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
              </tbody>
            ))}
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">{t.tables.note}</p>

        <h2 className="mt-14 text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl" data-reveal>{t.tables.ratesTitle}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {([2026, 2027] as Year[]).map((y) => {
            let from = 0;
            return (
              <div key={y} className="card overflow-hidden p-0" data-reveal>
                <p className="bg-brand-950 px-4 py-3 text-sm font-bold text-white">
                  {y === 2026 ? t.tables.rates2026 : t.tables.rates2027}
                </p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 text-xs text-slate-500 uppercase">
                      <th scope="col" className="px-4 py-2 text-left font-bold">{t.tables.band}</th>
                      <th scope="col" className="px-4 py-2 text-right font-bold">{t.tables.rate}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rates[y].map(([to, r]) => {
                      const label = to === Infinity ? `${t.tables.above} ${fmt(from)}` : `${fmt(from ? from + 1 : 0)} – ${fmt(to)}`;
                      from = to;
                      return (
                        <tr key={to} className="border-t border-slate-100">
                          <td className="px-4 py-2 tabular-nums text-slate-700">RM {label}</td>
                          <td className="px-4 py-2 text-right font-semibold tabular-nums text-slate-900">{r}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-slate-500">{t.tables.ratesNote}</p>
      </div>
    </section>
  );
}
