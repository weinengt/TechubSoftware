import Link from "next/link";
import type { ReactNode } from "react";
import { fill, getDict, type Dict } from "@/content";
import { htmlLang, lp, type Locale } from "@/lib/i18n";
import { shotSrc, type Shot } from "@/lib/shots";
import { emailLink, planAverage, planDaily, planSave, planTotal, rm, servicePages, site, systems, whatsappLink, type Plan, type ServicePageKey } from "@/lib/site";
import { Icon, type IconName } from "./Icons";
import { hl, withContactLinks } from "./Text";

/** When a section is the main part of its own page: the page's language and its name in the breadcrumb. */
export type PageOf = { lang: Locale; crumb: string };

/** "Home / <page>" above a page's heading. */
export function Crumbs({ lang, current, className = "" }: { lang: Locale; current: string; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={`mb-5 text-sm text-slate-500 ${className}`}>
      <Link href={lp(lang, "/")} className="hover:text-brand-700">{getDict(lang).ui.home}</Link> <span aria-hidden="true">/</span>{" "}
      <span className="text-slate-700">{current}</span>
    </nav>
  );
}

/** Top padding of a section that starts its own page, so it clears the fixed header. */
export const pageTop = "pt-28 sm:pt-36";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = true,
  page,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
  /** Set when this section is its own page: the title becomes the page's h1, with a breadcrumb above. */
  page?: PageOf;
}) {
  const H = page ? "h1" : "h2";
  return (
    <div className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${page ? "rise" : ""}`} data-reveal={page ? undefined : true}>
      {page && <Crumbs lang={page.lang} current={page.crumb} />}
      {page && eyebrow ? (
        // On its own page the label above the title is the h1's first line, so the page's topic words are in its h1.
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          <span className={`eyebrow h1-label !flex w-fit ${center ? "mx-auto" : ""}`}>{eyebrow}</span>
          <span className="mt-4 block">{typeof title === "string" ? hl(title) : title}</span>
        </h1>
      ) : (
        <>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <H className={`mt-4 font-extrabold tracking-tight text-slate-900 ${page ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"}`}>
            {typeof title === "string" ? hl(title) : title}
          </H>
        </>
      )}
      {intro && <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{intro}</p>}
    </div>
  );
}

export function CheckList({ items, columns = false, className = "" }: { items: string[]; columns?: boolean; className?: string }) {
  return (
    <ul className={`${columns ? "grid gap-x-8 gap-y-3 sm:grid-cols-2" : "space-y-3"} ${className}`}>
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-slate-700" data-reveal>
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
            <Icon.Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <span className="text-sm leading-relaxed sm:text-base">{t}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Features (Technology page tiles, structured data and llms-full.txt) ---------- */

const featureIcons: Record<keyof Dict["features"], IconName> = {
  uptime: "Shield",
  booking: "Calendar",
  whatsapp: "Whatsapp",
  queue: "Megaphone",
  realtime: "Sync",
  reports: "Bolt",
  ai: "Sparkles",
  inventory: "Route",
  profiles: "Users",
  payroll: "Coins",
  pos: "Card",
  permissions: "Lock",
  einvoice: "Invoice",
  hardware: "Printer",
  drawing: "Pen",
  devices: "Devices",
};

export function getFeatures(lang: Locale): { icon: IconName; title: string; text: string }[] {
  const f = getDict(lang).features;
  return (Object.keys(featureIcons) as (keyof typeof featureIcons)[]).map((k) => ({ icon: featureIcons[k], ...f[k] }));
}

/* ---------- Hardware ---------- */

const hardwareIcons: Record<keyof Dict["hardware"]["items"], IconName> = {
  caller: "Megaphone",
  label: "Barcode",
  receipt: "Printer",
  xray: "XRay",
  scanner: "Scan",
  card: "Card",
  tablet: "Pen",
  devices: "Devices",
};

export function HardwareSection({ lang }: { lang: Locale }) {
  const t = getDict(lang).hardware;
  return (
    <section id="hardware" className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-24">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand-200 uppercase">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{t.title}</h2>
          <p className="mt-3 text-base text-slate-300 sm:text-lg">{t.intro}</p>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {(Object.keys(hardwareIcons) as (keyof typeof hardwareIcons)[]).map((k) => {
            const I = Icon[hardwareIcons[k]];
            return (
              <li
                key={k}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 transition hover:border-teal-brand/60 hover:bg-white/10 sm:flex-col sm:p-6 sm:text-center"
                data-reveal
              >
                <I className="h-6 w-6 shrink-0 text-teal-brand sm:h-8 sm:w-8" />
                <span className="text-[13px] leading-snug font-medium text-slate-200 sm:text-sm">{t.items[k]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */

const livePath = systems.find((s) => s.key === "live")!.path;

/** Prices. `plan` picks what is shown: both plans ("all", the default), only the appointment plan (the appointment
 *  system pages) or the Live Selling plan as the main card (the Live Selling System page). Customisation is always
 *  shown; the Pricing page (`page`) adds its rates and examples, and the other services. */
export function PricingSection({ lang, page, plan = "all" }: { lang: Locale; page?: PageOf; plan?: "all" | "standard" | "live" }) {
  const t = getDict(lang).pricing;
  const live = plan === "live";
  return (
    <section id="pricing" className={`${page ? pageTop : "pt-20 sm:pt-24"} pb-20 sm:pb-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} page={page} />
        {live ? <LivePlan lang={lang} /> : <Plans lang={lang} />}
        <div className={`mx-auto mt-6 grid grid-cols-1 gap-6 ${live ? "max-w-5xl" : "max-w-6xl"}`}>
          {plan === "all" && (
            <div className="card flex flex-col gap-5 p-6 sm:p-7 lg:flex-row lg:items-center lg:gap-8" data-reveal>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-brand-500/25">
                <Icon.Live className="h-7 w-7" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="flex flex-wrap items-baseline gap-x-2 text-lg font-bold text-slate-900">
                  {t.liveTitle}
                  {/* The price keeps its "from" and "/month" on its line */}
                  <span className="inline-flex items-baseline gap-x-2 whitespace-nowrap">
                    <span className="text-sm font-semibold text-slate-500">{t.liveFrom}</span>
                    <span className="text-gradient text-3xl font-extrabold tracking-tight">RM {site.livePriceFrom}</span>
                    <span className="text-sm font-semibold text-slate-500">{t.perMonth}</span>
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">{t.liveText}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <a href={whatsappLink(t.liveMessage)} target="_blank" rel="noopener" className="btn-primary">
                  <Icon.Whatsapp className="h-5 w-5" /> {t.liveCta}
                </a>
                <Link href={lp(lang, livePath)} className="btn-secondary">
                  {t.liveSee} <Icon.Arrow className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )}
          <Customisation lang={lang} full={Boolean(page)} />
        </div>
        {page && <MoreServices lang={lang} className="mx-auto mt-16 max-w-6xl" />}
      </div>
    </section>
  );
}

/** In place of the plans, for a system priced by quote (the Inventory & ERP System): why it is quoted, what comes
 *  with it, and a button that asks for a quote on WhatsApp. */
export function QuoteSection({
  lang,
  quote,
}: {
  lang: Locale;
  quote: { eyebrow: string; title: string; text: string; points: string[]; message: string };
}) {
  const d = getDict(lang);
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={quote.eyebrow} title={quote.title} />
        <div className="card mx-auto mt-10 flex max-w-4xl flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-10" data-reveal>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-brand-500/25">
            <Icon.Receipt className="h-7 w-7" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{quote.text}</p>
            <CheckList items={quote.points} className="mt-5" />
          </div>
          <a href={whatsappLink(quote.message)} target="_blank" rel="noopener" className="btn-primary shrink-0 !py-3.5">
            <Icon.Whatsapp className="h-5 w-5" /> {d.ui.getQuote}
          </a>
        </div>
      </div>
    </section>
  );
}

const customPath = servicePages.find((s) => s.key === "customisation")!.path;

/** Customisation, charged per work hour at the rate of the customer's plan (`hourly` in lib/site.ts): the lowest
 *  rate, what it covers and why it is good value, with buttons for a quote and a link to the customer examples on
 *  the Software Customisation page (`examples`). On the Pricing page (`full`) also the rate on each plan and worked
 *  examples. */
export function Customisation({ lang, full, examples = true }: { lang: Locale; full: boolean; examples?: boolean }) {
  const t = getDict(lang).pricing;
  return (
    <div className="card p-6 sm:p-7" data-reveal>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-brand-500/25">
          <Icon.Code className="h-7 w-7" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="flex flex-wrap items-baseline gap-x-2 text-lg font-bold text-slate-900">
            {t.customTitle}
            <span className="inline-flex items-baseline gap-x-2 whitespace-nowrap">
              <span className="text-sm font-semibold text-slate-500">{t.customFrom}</span>
              <span className="text-gradient text-3xl font-extrabold tracking-tight">RM {site.customFrom}</span>
              <span className="text-sm font-semibold text-slate-500">{t.perHour}</span>
            </span>
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">{t.customText}</p>
          <ul className="mt-3 flex flex-col gap-x-5 gap-y-1.5 text-sm font-medium text-slate-700 sm:flex-row sm:flex-wrap">
            {t.customPoints.map((x) => (
              <li key={x} className="flex items-start gap-1.5">
                <Icon.Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={3} /> {x}
              </li>
            ))}
          </ul>
          {examples && (
            <Link href={lp(lang, customPath)} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800">
              {t.customSee} <Icon.Arrow className="h-4 w-4" />
            </Link>
          )}
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a href={whatsappLink(t.customMessage)} target="_blank" rel="noopener" className="btn-primary">
            <Icon.Whatsapp className="h-5 w-5" /> {t.customCta}
          </a>
          <a href={emailLink(t.customEmailSubject)} className="btn-secondary">
            <Icon.Mail className="h-5 w-5" /> {t.customEmail}
          </a>
        </div>
      </div>
      {full && <CustomDetails lang={lang} />}
    </div>
  );
}

/** The customisation rate on each plan, with the recommended plan's standing out, and worked examples: the hours a
 *  task takes, what that costs on the monthly plan and on the recommended plan. */
function CustomDetails({ lang }: { lang: Locale }) {
  const t = getDict(lang).pricing;
  const best: Plan | undefined = site.plans.find((p: Plan) => p.recommended);
  const base = site.plans[0].hourly;
  return (
    <div className="mt-6 grid gap-8 border-t border-slate-100 pt-6 lg:grid-cols-5 lg:gap-10">
      <div className="lg:col-span-2">
        <h4 className="text-xs font-bold tracking-wide text-slate-500 uppercase">{t.customRates}</h4>
        <CustomRates lang={lang} className="mt-3 grid-cols-2" />
      </div>
      <div className="lg:col-span-3">
        <h4 className="text-xs font-bold tracking-wide text-slate-500 uppercase">{t.examplesTitle}</h4>
        <ul className="mt-3 divide-y divide-slate-100 rounded-2xl ring-1 ring-slate-200">
          {t.examples.map((x, i) => {
            const hours = site.customExamples[i] ?? 0;
            return (
              <li key={x.task} className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6" data-reveal>
                <div className="min-w-0">
                  <p className="text-xs font-bold tracking-wide text-brand-600 uppercase">{x.type}</p>
                  <p className="mt-0.5 font-semibold text-slate-900">{x.task}</p>
                  <p className="mt-0.5 text-sm text-slate-500">{fill(t.exampleHours, { n: String(hours) })}</p>
                </div>
                <div className="flex shrink-0 flex-wrap items-baseline gap-x-3 gap-y-0.5 sm:flex-col sm:items-end sm:gap-0.5">
                  <p className="text-xl font-extrabold whitespace-nowrap text-slate-900">RM {rm(hours * base)}</p>
                  {best?.hourly && (
                    <p className="text-xs font-semibold whitespace-nowrap text-emerald-600">
                      {fill(t.exampleLong, { n: rm(hours * best.hourly), plan: planText(lang, best).name })}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-2 text-xs text-slate-500">{t.examplesNote}</p>
      </div>
    </div>
  );
}

/** The customisation rate per work hour on each plan, a tile each, with the recommended plan's standing out. */
export function CustomRates({ lang, className = "" }: { lang: Locale; className?: string }) {
  const t = getDict(lang).pricing;
  const rated: Plan[] = site.plans.filter((p: Plan) => p.hourly);
  return (
    <ul className={`grid gap-3 ${className}`}>
      {rated.map((p) => {
        const top = Boolean(p.recommended);
        return (
          <li key={p.months} className={`rounded-2xl p-3 sm:p-4 ${top ? "bg-brand-50 ring-2 ring-brand-500" : "bg-slate-50 ring-1 ring-slate-200"}`} data-reveal>
            <p className="flex items-center gap-1 text-xs font-semibold text-slate-600">
              {planText(lang, p).name}
              {top && <Icon.Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-label={t.recommended} />}
            </p>
            <p className="mt-1 flex flex-wrap items-baseline gap-x-1">
              <span className="whitespace-nowrap">
                <span className="text-sm font-bold text-slate-900">RM </span>
                <span className={`text-2xl font-extrabold tracking-tight ${top ? "text-gradient" : "text-slate-900"}`}>{rm(p.hourly ?? 0)}</span>
              </span>
              <span className="text-xs font-semibold whitespace-nowrap text-slate-500">{t.perHour}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}

const extras: { key: keyof Dict["pricing"]["extras"] & ServicePageKey; icon: IconName; price: number }[] = [
  { key: "migration", icon: "Database", price: site.migrationHour },
  { key: "email", icon: "Mail", price: site.emailYear },
  { key: "website", icon: "Globe", price: site.websitePrice },
];

/** Other services, a card each with its price and a button that asks about it on WhatsApp (Pricing and Services
 *  pages). */
export function MoreServices({ lang, className = "" }: { lang: Locale; className?: string }) {
  const t = getDict(lang).pricing;
  return (
    <div className={className}>
      <div className="text-center" data-reveal>
        <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{t.extrasTitle}</h3>
        <p className="mt-1.5 text-sm text-slate-600 sm:text-base">{t.extrasText}</p>
      </div>
      <ul className="mx-auto mt-8 grid max-w-xl gap-6 lg:max-w-none lg:grid-cols-3">
        {extras.map((e) => (
          <ServiceCard key={e.key} lang={lang} k={e.key} as="li" />
        ))}
      </ul>
    </div>
  );
}

/** One service's price card: its price, what it includes and a button that asks about it on WhatsApp. On the Pricing
 *  and Services pages it also links to the service's own page (`more`). */
export function ServiceCard({
  lang, k, as: Tag = "div", more = true, className = "",
}: { lang: Locale; k: (typeof extras)[number]["key"]; as?: "li" | "div"; more?: boolean; className?: string }) {
  const t = getDict(lang).pricing;
  const e = extras.find((x) => x.key === k)!;
  const x = t.extras[k];
  const I = Icon[e.icon];
  const path = servicePages.find((s) => s.key === k)!.path;
  return (
    <Tag className={`card flex flex-col p-6 ${className}`} data-reveal>
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
        <I className="h-6 w-6" />
      </span>
      <h4 className="mt-4 text-lg font-bold text-slate-900">{x.title}</h4>
      {/* An empty label still keeps its line when the cards sit in a row, so their prices line up */}
      <p className={`mt-3 text-xs font-semibold tracking-wide text-slate-500 uppercase lg:min-h-4 ${x.label ? "" : "hidden lg:block"}`}>{x.label}</p>
      {/* The price keeps its unit on its line */}
      <p className="mt-0.5 flex items-baseline gap-1 whitespace-nowrap">
        <span className="text-lg font-bold text-slate-900">RM</span>
        <span className="text-gradient text-3xl font-extrabold tracking-tight lg:text-4xl">{rm(e.price)}</span>
        {x.unit && <span className="text-sm font-semibold text-slate-500">{x.unit}</span>}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{x.text}</p>
      <div className="flex-1">
        <ul className="mt-4 space-y-2.5">
          {x.points.map((pt) => (
            <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                <Icon.Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              {pt}
            </li>
          ))}
        </ul>
        {x.note && <p className="mt-4 text-xs leading-relaxed text-slate-500">{x.note}</p>}
      </div>
      {more && (
        <Link href={lp(lang, path)} className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800">
          {t.extrasMore} <Icon.Arrow className="h-4 w-4" />
        </Link>
      )}
      <a
        href={whatsappLink(x.message)}
        target="_blank"
        rel="noopener"
        aria-label={`${t.extrasCta}: ${x.title}`}
        className={`btn-secondary w-full ${more ? "mt-5" : "mt-6"}`}
      >
        <Icon.Whatsapp className="h-5 w-5 text-whatsapp" /> {t.extrasCta}
      </a>
    </Tag>
  );
}

/** The Live Selling plan as the main card, with what it includes beside it (the Live Selling System page). */
function LivePlan({ lang }: { lang: Locale }) {
  const t = getDict(lang).pricing;
  return (
    <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-6 lg:grid-cols-5">
      <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-7 text-white shadow-2xl shadow-brand-500/30 sm:p-8 lg:col-span-3" data-reveal="zoom">
        <div className="bg-grid absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative flex h-full flex-col">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold tracking-wide uppercase">
            <Icon.Live className="h-4 w-4" /> {t.liveBadge}
          </p>
          <h3 className="mt-5 text-2xl font-bold">{t.livePlan}</h3>
          <p className="mt-5 flex flex-wrap items-end gap-x-2">
            <span className="text-lg font-semibold text-white/80">{t.from}</span>
            <span className="text-5xl font-extrabold tracking-tight sm:text-6xl">RM {site.livePriceFrom}</span>
            <span className="pb-1.5 text-lg font-semibold text-white/80">{t.perMonth}</span>
          </p>
          <p className="mt-5 rounded-2xl bg-white/15 p-4 text-base font-semibold">{t.liveNote}</p>
          <a
            href={whatsappLink(t.liveMessage)}
            target="_blank"
            rel="noopener"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-800 shadow-lg transition hover:bg-brand-50 lg:mt-auto"
          >
            <Icon.Whatsapp className="h-5 w-5 text-whatsapp" /> {t.liveCta}
          </a>
        </div>
      </div>
      <div className="card p-7 sm:p-8 lg:col-span-2" data-reveal>
        <h3 className="text-lg font-bold text-slate-900">{t.includedTitle}</h3>
        <CheckList items={t.liveIncluded} className="mt-5" />
      </div>
    </div>
  );
}

/** A plan's name, free months, saving, last day, user limit and price a day, and the lines under its price, in the
 *  page's language. `offer` is the Welcome offer's name, for the plan that is a promotion. */
export function planText(lang: Locale, p: Plan) {
  const t = getDict(lang).pricing;
  const n = (s: string, v: number) => fill(s, { n: rm(v) });
  const free = p.free ?? 0;
  const long = p.months > 1;
  const until = p.until
    ? fill(t.promoUntil, {
        date: new Intl.DateTimeFormat(htmlLang[lang], { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kuala_Lumpur" }).format(
          new Date(`${p.until}T12:00:00+08:00`),
        ),
      })
    : "";
  const save = long ? n(t.save, planSave(p)) : "";
  const limit = p.limit ? fill(t.limit, { n: String(p.limit) }) : "";
  const lines: { text: string; save?: boolean }[] = [
    { text: long ? n(t.total, planTotal(p)) : t.monthlyText },
    { text: free ? n(t.average, planAverage(p)) : "" },
    { text: save, save: true },
    { text: until },
    { text: limit },
  ];
  return {
    offer: p.until ? t.welcome : "",
    name: long ? n(t.planMonths, p.months) : t.monthly,
    free: free ? n(free === 1 ? t.freeOne : t.freeMany, free) : "",
    save,
    until,
    limit,
    daily: long ? n(t.daily, planDaily(p)) : "",
    lines: lines.filter((l) => l.text),
  };
}

/** Grid positions from tablets up, so the cards run from Monthly to 48 months there (phones keep the page order). */
const fromShortest = ["sm:order-1", "sm:order-2", "sm:order-3", "sm:order-4"];

/** The ways to pay for the Standard Plan, a card each, like a VPN price list: what a month comes to, the free months
 *  and the saving, with the recommended plan standing out. Above them, Monthly against the longer plans, so the
 *  RM 30 a month difference is plain. On phones the longest plan comes first. The Welcome offer (the plan with a last
 *  day) follows as a wide dark card, then what every plan includes. */
function Plans({ lang }: { lang: Locale }) {
  const t = getDict(lang).pricing;
  const plans: Plan[] = site.plans.filter((p: Plan) => !p.until).reverse();
  const welcome: Plan | undefined = site.plans.find((p: Plan) => p.until);
  return (
    <div className="mx-auto mt-10 max-w-6xl">
      <div className="text-center" data-reveal>
        <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{t.plan}</h3>
        <p className="mt-1.5 text-sm text-balance text-slate-600 sm:text-base">{t.plansText}</p>
      </div>
      <MonthlyVsYearly lang={lang} />
      <div
        className="mx-auto mt-6 flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50/70 p-4 text-center sm:flex-row sm:gap-4 sm:p-5 sm:text-left"
        data-reveal
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white shadow-lg shadow-brand-500/25">
          <Icon.Gift className="h-5 w-5" />
        </span>
        <p className="flex-1 text-sm leading-relaxed font-semibold text-brand-900 sm:text-base">{t.free}</p>
        <a href={whatsappLink(t.claimMessage)} target="_blank" rel="noopener" className="btn-primary shrink-0 px-5 py-2.5">
          <Icon.Whatsapp className="h-4 w-4" /> {t.claim}
        </a>
      </div>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {plans.map((p, i) => (
          <PlanCard key={p.months} lang={lang} p={p} className={fromShortest[plans.length - 1 - i] ?? ""} />
        ))}
      </ul>
      {welcome && <WelcomeCard lang={lang} p={welcome} />}
      <div className="card mt-6 p-6 sm:p-8" data-reveal>
        <h3 className="text-lg font-bold text-slate-900">{t.plansIncluded}</h3>
        <CheckList items={t.included} columns className="mt-5" />
      </div>
    </div>
  );
}

/** Monthly next to the 12 to 48-month plans: what a month costs on each and how much the longer plans save every
 *  month (`monthlySave` in lib/site.ts). */
function MonthlyVsYearly({ lang }: { lang: Locale }) {
  const t = getDict(lang).pricing;
  const price = (n: number, best: boolean) => (
    // "/ month" moves under the amount when the box is too narrow for both
    <p className="mt-auto flex flex-wrap items-baseline justify-center gap-x-1 pt-1">
      <span className="whitespace-nowrap">
        <span className="text-sm font-bold text-slate-900">RM</span>{" "}
        <span className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${best ? "text-gradient" : "text-slate-900"}`}>{rm(n)}</span>
      </span>
      <span className="text-xs font-semibold whitespace-nowrap text-slate-500 sm:text-sm">{t.perMonth}</span>
    </p>
  );
  return (
    <div className="mx-auto mt-6 max-w-xl" data-reveal>
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 sm:gap-4">
        <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white px-2 py-4 text-center sm:px-5">
          <p className="text-sm font-bold text-slate-700">{t.monthly}</p>
          <p className="text-xs text-balance text-slate-500">{t.monthlyText}</p>
          {price(site.plans[0].price, false)}
        </div>
        <Icon.Arrow className="h-5 w-5 text-brand-500" />
        <div className="flex h-full flex-col rounded-2xl bg-white px-2 py-4 text-center shadow-lg ring-2 shadow-brand-500/15 ring-brand-500 sm:px-5">
          <p className="text-sm font-bold text-brand-700">{t.yearly}</p>
          <p className="text-xs text-balance text-slate-500">{t.yearlyNote}</p>
          {price(site.planPrice, true)}
        </div>
      </div>
      <p className="mt-4 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-bold text-emerald-700 sm:text-base">
          <Icon.Check className="h-4 w-4" strokeWidth={3} /> {t.yearlySave}
        </span>
      </p>
    </div>
  );
}

/** One way to pay, as a card: the free months and saving (one under the other from tablets up, so the prices in a
 *  row line up), what a month comes to (on average, for plans with free months), what is paid each month and in
 *  all, and a button that asks for it on WhatsApp. */
function PlanCard({ lang, p, className }: { lang: Locale; p: Plan; className: string }) {
  const t = getDict(lang).pricing;
  const x = planText(lang, p);
  const best = Boolean(p.recommended);
  const long = p.months > 1;
  return (
    <li
      className={`relative flex flex-col rounded-3xl border bg-white p-6 lg:p-5 xl:p-6 ${
        best
          ? "border-transparent shadow-2xl shadow-brand-500/20 ring-2 ring-brand-500"
          : "border-slate-200/80 shadow-[0_1px_2px_rgb(15_23_42/0.04),0_8px_24px_-12px_rgb(15_23_42/0.12)]"
      } ${className}`}
      data-reveal
    >
      {best && (
        <p className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-gradient px-3.5 py-1 text-xs font-bold tracking-wide whitespace-nowrap text-white uppercase shadow-lg shadow-brand-500/30">
          <Icon.Star className="h-3.5 w-3.5 fill-amber-300 text-amber-300" /> {t.recommended}
        </p>
      )}
      <div className="flex-1">
        <h4 className="text-lg font-bold text-slate-900">{x.name}</h4>
        <p className="mt-2 flex flex-wrap gap-1.5 sm:min-h-12 sm:flex-col sm:items-start">
          {long ? (
            <>
              {x.free && (
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-bold text-brand-700">
                  <Icon.Gift className="h-3.5 w-3.5" /> {x.free}
                </span>
              )}
              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700">{x.save}</span>
            </>
          ) : (
            <span className="text-sm text-slate-500">{t.monthlyText}</span>
          )}
        </p>
        <p className="mt-5 min-h-4 text-xs font-semibold tracking-wide text-slate-500 uppercase">{x.free ? t.averageLabel : ""}</p>
        {/* The price keeps its "/month" on its line */}
        <p className="mt-0.5 flex items-baseline gap-1 whitespace-nowrap">
          <span className="text-lg font-bold text-slate-900">RM</span>
          <span className={`text-4xl font-extrabold tracking-tight lg:text-3xl xl:text-4xl ${best ? "text-gradient" : "text-slate-900"}`}>
            {rm(x.free ? planAverage(p) : p.price)}
          </span>
          <span className="text-sm font-semibold text-slate-500">{t.perMonth}</span>
        </p>
        <p className="mt-1 min-h-5 text-sm font-bold text-emerald-600">{x.daily}</p>
        {long && (
          <dl className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
              <dt className="text-slate-500">{t.youPay}</dt>
              <dd className="font-semibold whitespace-nowrap text-slate-900">
                RM {rm(p.price)} {t.perMonth}
              </dd>
              {p.price < site.plans[0].price && <dd className="w-full text-right text-xs font-semibold text-emerald-600">{t.lessThanMonthly}</dd>}
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-slate-500">{t.totalLabel}</dt>
              <dd className="font-semibold whitespace-nowrap text-slate-900">RM {rm(planTotal(p))}</dd>
            </div>
          </dl>
        )}
      </div>
      {p.hourly && (
        <p className={`mt-6 flex items-start gap-2 rounded-xl px-3 py-2 text-sm ${best ? "bg-brand-50 text-brand-900" : "bg-slate-50 text-slate-700"}`}>
          <Icon.Code className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
          <span>
            {t.customRate}{" "}
            <strong className="font-bold whitespace-nowrap">
              RM {rm(p.hourly)} {t.perHour}
            </strong>
          </span>
        </p>
      )}
      <a
        href={whatsappLink(fill(t.planMessage, { plan: x.name }))}
        target="_blank"
        rel="noopener"
        aria-label={`${t.choose}: ${x.name}`}
        className={`${best ? "btn-primary border border-transparent" : "btn-secondary"} ${p.hourly ? "mt-4" : "mt-6"} w-full`}
      >
        <Icon.Whatsapp className={`h-5 w-5 ${best ? "" : "text-whatsapp"}`} /> {t.choose}
      </a>
    </li>
  );
}

/** The Welcome offer, a promotion with a last day, as a wide dark card under the plans. */
function WelcomeCard({ lang, p }: { lang: Locale; p: Plan }) {
  const t = getDict(lang).pricing;
  const x = planText(lang, p);
  return (
    <div className="relative mt-8 overflow-hidden rounded-3xl bg-slate-900 p-6 text-white shadow-2xl shadow-brand-900/30 ring-1 ring-white/10 sm:p-8" data-reveal>
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="absolute -top-28 -right-20 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" aria-hidden="true" />
      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
            <Icon.Star className="h-3.5 w-3.5 fill-amber-300 text-amber-300" /> {x.offer}
          </p>
          <h4 className="mt-3 text-2xl font-bold">{x.name}</h4>
          <p className="mt-1 text-sm text-white/70">{x.until}</p>
          {x.limit && (
            <p className="mt-3 flex w-fit items-start gap-1.5 rounded-2xl bg-amber-400/15 px-3 py-1.5 text-sm font-bold text-amber-200">
              <Icon.Users className="mt-0.5 h-4 w-4 shrink-0" /> {x.limit}
            </p>
          )}
        </div>
        <div>
          <p className="flex items-baseline gap-1 whitespace-nowrap">
            <span className="text-lg font-bold">RM</span>
            <span className="text-gradient-light text-5xl font-extrabold tracking-tight">{rm(p.price)}</span>
            <span className="text-sm font-semibold text-white/70">{t.perMonth}</span>
          </p>
          <p className="mt-1 text-sm font-bold text-emerald-300">{x.daily}</p>
          <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
            <span className="text-white/80">{fill(t.total, { n: rm(planTotal(p)) })}</span>
            <span className="rounded-full bg-emerald-400/15 px-2.5 py-0.5 text-xs font-bold text-emerald-300">{x.save}</span>
          </p>
        </div>
        <a
          href={whatsappLink(fill(t.welcomeMessage, { n: rm(p.price) }))}
          target="_blank"
          rel="noopener"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-800 shadow-lg transition hover:bg-brand-50"
        >
          <Icon.Whatsapp className="h-5 w-5 text-whatsapp" /> {t.welcomeCta}
        </a>
      </div>
    </div>
  );
}

/* ---------- FAQ ---------- */

export function FaqSection({ lang, items, page }: { lang: Locale; items?: { q: string; a: string }[]; page?: PageOf }) {
  const { faq: t } = getDict(lang);
  return (
    <section id="faq" className={page ? `${pageTop} pb-20 sm:pb-24` : "bg-slate-50 py-20 sm:py-24"}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} page={page} />
        <FaqList lang={lang} items={items ?? t.items} className="mt-10" />
      </div>
    </section>
  );
}

/** Questions that open to show their answers (FAQ sections and blog posts). */
export function FaqList({ lang, items, className = "" }: { lang: Locale; items: { q: string; a: string }[]; className?: string }) {
  const { ui } = getDict(lang);
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((f) => (
        <details key={f.q} className="card group p-0 [&_summary::-webkit-details-marker]:hidden" data-reveal>
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 p-4 text-left font-semibold text-slate-900 sm:p-5">
            <h3 className="text-[15px] sm:text-base">{f.q}</h3>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-45">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
            </span>
          </summary>
          <p className="px-4 pb-5 text-sm leading-relaxed text-slate-600 sm:px-5">{withContactLinks(f.a, ui)}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------- Cities we serve ---------- */

export type LocalKey = keyof Dict["local"]["pages"];

/** A cities text with the page's phrase ("Clinic management system") and who it serves ("clinics") put in. */
function localFill(lang: Locale, k: LocalKey, s: string) {
  const p = getDict(lang).local.pages[k];
  return s.replace(/\{phrase\}/g, p.phrase).replace(/\{who\}/g, p.who);
}

/** "Do you serve clinics in Kuala Lumpur, Johor Bahru and Penang?", added to a use case page's questions. */
export function localFaq(lang: Locale, k: LocalKey) {
  const { faq } = getDict(lang).local;
  return { q: localFill(lang, k, faq.q), a: localFill(lang, k, faq.a) };
}

/** Kuala Lumpur, Johor Bahru and Penang with the areas in each, on every use case page, for local searches. */
export function LocalSection({ lang, k, tint }: { lang: Locale; k: LocalKey; tint?: boolean }) {
  const { local: t } = getDict(lang);
  return (
    <section className={`overflow-hidden py-20 sm:py-24 ${tint ? "bg-slate-50" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={localFill(lang, k, t.title)} intro={localFill(lang, k, t.text)} />
        <ul className="mt-12 grid gap-4 md:grid-cols-3 lg:gap-6">
          {t.cities.map((c) => (
            <li key={c.name} className="card relative overflow-hidden p-6" data-reveal>
              <Icon.MapPin className="pointer-events-none absolute -right-6 -bottom-8 h-36 w-36 text-brand-50" strokeWidth={1.2} />
              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md shadow-brand-500/25">
                <Icon.MapPin className="h-5 w-5" />
              </span>
              <h3 className="relative mt-4 text-lg font-extrabold text-slate-900">{c.name}</h3>
              <ul className="relative mt-3 flex flex-wrap gap-2">
                {c.places.map((p) => (
                  <li key={p} className="rounded-full bg-white px-3 py-1 text-[13px] font-semibold text-brand-700 ring-1 ring-brand-100">
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-slate-500" data-reveal>
          {t.more}
        </p>
      </div>
    </section>
  );
}

/* ---------- Structured data helpers ---------- */

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function softwareJsonLd(opts: {
  lang: Locale;
  name: string;
  description: string;
  url: string;
  category: string;
  features: string[];
  screenshots?: Shot[];
  /** Monthly price and offer text; the Standard Plan's plans unless given. `offers: false` leaves prices out
   *  (a system priced by quote). */
  price?: number;
  offerText?: string;
  offers?: false;
}) {
  const offer = (price: number, more: Record<string, string>) => ({
    "@type": "Offer",
    price,
    priceCurrency: site.currency,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price,
      priceCurrency: site.currency,
      unitText: "MONTH",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
    },
    availability: "https://schema.org/InStock",
    areaServed: "MY",
    ...more,
  });
  const [comma, stop] = opts.lang === "zh" ? ["，", "，"] : [", ", ". "];
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: htmlLang[opts.lang],
    applicationCategory: "BusinessApplication",
    applicationSubCategory: opts.category,
    operatingSystem: "Web, Windows, macOS, Android, iOS",
    countriesSupported: "MY",
    featureList: opts.features,
    screenshot: (opts.screenshots ?? []).map((s) => ({
      "@type": "ImageObject",
      url: `${site.url}${shotSrc(s)}`,
      caption: s.alt,
      width: s.w,
      height: s.h,
    })),
    provider: { "@id": `${site.url}/#organization` },
    offers:
      opts.offers === false
        ? undefined
        : opts.price
          ? offer(opts.price, { description: opts.offerText ?? getDict(opts.lang).pricing.offerText })
          : site.plans.map((p: Plan) => {
              const x = planText(opts.lang, p);
              return offer(p.price, {
                name: [x.offer, x.name, x.free].filter(Boolean).join(comma),
                description: x.lines.map((l) => l.text).join(stop),
                ...(p.until ? { priceValidUntil: p.until } : {}),
              });
            }),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
}
