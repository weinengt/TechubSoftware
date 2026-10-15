import Link from "next/link";
import type { ReactNode } from "react";
import { getDict } from "@/content";
import { getTools, type ToolsDict } from "@/content/tools";
import { Icon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { FaqList, SectionHeading, breadcrumbJsonLd, faqJsonLd, pageTop } from "@/components/Sections";
import { ContactSection } from "@/components/Showcase";
import { hl } from "@/components/Text";
import InvoiceTool from "@/components/tools/InvoiceTool";
import PayrollTool from "@/components/tools/PayrollTool";
import TaxTables from "@/components/tools/TaxTables";
import TaxTool from "@/components/tools/TaxTool";
import { htmlLang, lp, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { companyPages, site, toolPages, toolsPath, type ToolKey } from "@/lib/site";

/* The free tools: the Tools page lists them, and each has its own page with the tool itself, its questions, the other
   tools and a way to get in touch. The tools run in the browser; their words are in content/tools/*.ts. */

export const toolPath = (k: ToolKey) => toolPages.find((p) => p.path && p.key === k)!.path;

export function toolsMetadata(lang: Locale, k?: ToolKey) {
  const t = getTools(lang);
  const m = k ? t[k].meta : t.hub.meta;
  return pageMetadata({ lang, path: k ? toolPath(k) : toolsPath, title: m.title, socialTitle: m.socialTitle, description: m.description, keywords: m.keywords });
}

/** Home / Free Tools / <tool> above the heading. */
function Crumbs({ lang, current }: { lang: Locale; current?: string }) {
  const t = getTools(lang);
  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-500">
      <Link href={lp(lang, "/")} className="hover:text-brand-700">{getDict(lang).ui.home}</Link> <span aria-hidden="true">/</span>{" "}
      {current ? (
        <>
          <Link href={lp(lang, toolsPath)} className="hover:text-brand-700">{t.crumb}</Link> <span aria-hidden="true">/</span>{" "}
          <span className="text-slate-700">{current}</span>
        </>
      ) : (
        <span className="text-slate-700">{t.crumb}</span>
      )}
    </nav>
  );
}

function Badges({ t }: { t: ToolsDict }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {t.badges.map((b) => (
        <li key={b} className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
          <Icon.Check className="h-3.5 w-3.5" strokeWidth={3} /> {b}
        </li>
      ))}
    </ul>
  );
}

function jsonLd(lang: Locale, k?: ToolKey) {
  const t = getTools(lang);
  const home = { name: getDict(lang).ui.home, url: `${site.url}${lp(lang, "/")}` };
  const hub = { name: t.crumb, url: `${site.url}${lp(lang, toolsPath)}` };
  if (!k)
    return [
      breadcrumbJsonLd([home, hub]),
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: t.hub.meta.title,
        itemListElement: toolPages.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: t[p.key].name, url: `${site.url}${lp(lang, p.path)}` })),
      },
    ];
  const x = t[k];
  const url = `${site.url}${lp(lang, toolPath(k))}`;
  return [
    breadcrumbJsonLd([home, hub, { name: x.name, url }]),
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: x.meta.title.split(" | ")[0],
      description: x.meta.description,
      url,
      inLanguage: htmlLang[lang],
      applicationCategory: k === "invoice" ? "BusinessApplication" : "FinanceApplication",
      operatingSystem: "Web browser",
      browserRequirements: "Requires JavaScript",
      isAccessibleForFree: true,
      countriesSupported: "MY",
      featureList: x.points,
      offers: { "@type": "Offer", price: 0, priceCurrency: site.currency },
      provider: { "@id": `${site.url}/#organization` },
    },
    faqJsonLd(x.faq),
  ];
}

/** The other tools, as cards. */
function ToolCards({ lang, except, big }: { lang: Locale; except?: ToolKey; big?: boolean }) {
  const t = getTools(lang);
  return (
    <ul className={`grid gap-4 sm:gap-5 ${big ? "md:grid-cols-3" : "sm:grid-cols-2"}`}>
      {toolPages
        .filter((p) => p.key !== except)
        .map((p) => {
          const I = Icon[p.icon];
          const x = t[p.key];
          return (
            <li key={p.key} data-reveal>
              <Link href={lp(lang, p.path)} className="card group flex h-full flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-xl">
                {big && <ToolArt k={p.key} />}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md shadow-brand-500/25">
                      <I className="h-5 w-5" />
                    </span>
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-brand-700">{x.name}</h2>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{x.blurb}</p>
                  {big && (
                    <ul className="mt-4 space-y-2">
                      {x.points.map((pt) => (
                        <li key={pt} className="flex gap-2 text-sm text-slate-700">
                          <Icon.Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.5} /> {pt}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-700">
                    {t.open} <Icon.Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

/** A small drawing of each tool's result for the Tools page: a paper with lines, figures and a total. */
function ToolArt({ k }: { k: ToolKey }) {
  const bar = (w: string, c = "bg-slate-200") => <span className={`block h-1.5 rounded-full ${c}`} style={{ width: w }} />;
  return (
    <div className="relative h-40 overflow-hidden bg-gradient-to-br from-brand-50 via-white to-teal-50" aria-hidden="true">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="absolute top-6 left-1/2 w-52 -translate-x-1/2 rounded-t-lg bg-white p-4 shadow-xl ring-1 shadow-brand-900/10 ring-slate-200 transition duration-500 group-hover:-translate-y-1">
        {k === "invoice" && (
          <>
            <div className="flex items-start justify-between">
              <span className="h-6 w-6 rounded-md bg-brand-gradient" />
              <span className="text-[9px] font-bold tracking-[0.3em] text-slate-500">INVOICE</span>
            </div>
            <div className="mt-3 space-y-1.5">{bar("70%")}{bar("50%")}</div>
            <div className="mt-3 space-y-1.5">{bar("100%", "bg-brand-100")}{bar("90%")}{bar("80%")}</div>
            <div className="mt-3 flex justify-end"><span className="rounded bg-brand-600 px-2 py-0.5 text-[9px] font-bold text-white">RM 158.00</span></div>
          </>
        )}
        {k === "payroll" && (
          <>
            <div className="flex items-center justify-between"><span className="text-[9px] font-bold tracking-[0.2em] text-slate-500">PAYSLIP</span><span className="text-[9px] text-slate-400">OCT 2026</span></div>
            {[["EPF", "w-10"], ["SOCSO", "w-8"], ["EIS", "w-6"], ["PCB", "w-9"]].map(([n, w]) => (
              <div key={n} className="mt-2 flex items-center justify-between text-[9px] font-semibold text-slate-500">{n}<span className={`h-1.5 rounded-full bg-slate-200 ${w}`} /></div>
            ))}
            <div className="mt-3 flex justify-between rounded bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-700"><span>NET PAY</span><span>RM 3,214.25</span></div>
          </>
        )}
        {k === "tax" && (
          <>
            <div className="text-[9px] font-bold tracking-[0.2em] text-slate-500">YA 2026</div>
            {[["90%", "bg-brand-500"], ["60%", "bg-teal-brand"], ["45%", "bg-brand-300"], ["30%", "bg-brand-200"]].map(([w, c], i) => (
              <div key={i} className="mt-2 h-2 rounded-full bg-slate-100"><div className={`h-2 rounded-full ${c}`} style={{ width: w }} /></div>
            ))}
            <div className="mt-3 flex justify-between rounded bg-brand-50 px-2 py-1 text-[9px] font-bold text-brand-700"><span>RELIEF</span><span>RM 24,350</span></div>
          </>
        )}
      </div>
    </div>
  );
}

/** The Tools page: every free tool, then a way to get in touch. */
export function ToolsHubPage({ lang }: { lang: Locale }) {
  const t = getTools(lang);
  return (
    <>
      <JsonLd data={jsonLd(lang)} />
      <section className={`${pageTop} pb-16 sm:pb-20`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rise max-w-3xl">
            <Crumbs lang={lang} />
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              <span className="eyebrow h1-label !flex w-fit">{t.hub.eyebrow}</span>
              <span className="mt-4 block">{hl(t.hub.title)}</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{t.hub.intro}</p>
            <Badges t={t} />
          </div>
          <div className="mt-10">
            <ToolCards lang={lang} big />
          </div>
        </div>
      </section>
      <Cta lang={lang} />
    </>
  );
}

function Cta({ lang }: { lang: Locale }) {
  const t = getTools(lang);
  return <ContactSection lang={lang} title={t.cta.title} offer={{ badge: t.crumb, text: t.cta.text, message: t.cta.message }} />;
}

const tools: Record<ToolKey, (lang: Locale, t: ToolsDict) => ReactNode> = {
  invoice: (lang, t) => <InvoiceTool lang={lang} t={t.invoice} ex={t.export} />,
  payroll: (lang, t) => <PayrollTool lang={lang} t={t.payroll} ex={t.export} />,
  tax: (lang, t) => <TaxTool t={t.tax} />,
};

/** One free tool on its own page. */
export default function ToolPage({ lang, k }: { lang: Locale; k: ToolKey }) {
  const t = getTools(lang);
  const x = t[k];
  return (
    <>
      <JsonLd data={jsonLd(lang, k)} />
      <section className={`${pageTop} pb-16 sm:pb-20`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rise max-w-3xl">
            <Crumbs lang={lang} current={x.name} />
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              <span className="eyebrow h1-label !flex w-fit">{x.eyebrow}</span>
              <span className="mt-4 block">{hl(x.title)}</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{x.intro}</p>
            <Badges t={t} />
          </div>
          <div className="rise mt-8 [--rise:120ms] sm:mt-10">{tools[k](lang, t)}</div>
        </div>
      </section>
      {k === "tax" && <TaxTables t={t.tax} />}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.faqTitle} />
          <FaqList lang={lang} items={x.faq} className="mt-8" />
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.more} />
          <div className="mt-8">
            <ToolCards lang={lang} except={k} />
          </div>
          <p className="mt-6 text-center text-sm text-slate-600" data-reveal>
            <Link href={lp(lang, companyPages.useCases)} className="font-semibold text-brand-700 hover:underline">{t.cta.button} →</Link>
          </p>
        </div>
      </section>
      <Cta lang={lang} />
    </>
  );
}
