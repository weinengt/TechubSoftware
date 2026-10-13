import Link from "next/link";
import type { ReactNode } from "react";
import { getDict, type Dict } from "@/content";
import { lp, type Locale } from "@/lib/i18n";
import { shotSrc, type Shot } from "@/lib/shots";
import { emailLink, site, systems, whatsappLink } from "@/lib/site";
import { Icon, type IconName } from "./Icons";
import { hl } from "./Text";

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
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {page && <Crumbs lang={page.lang} current={page.crumb} />}
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <H className={`mt-4 font-extrabold tracking-tight text-slate-900 ${page ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"}`}>
        {typeof title === "string" ? hl(title) : title}
      </H>
      {intro && <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{intro}</p>}
    </div>
  );
}

export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-slate-700">
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
        <div className="mx-auto max-w-3xl text-center">
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
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur transition hover:border-teal-brand/60 hover:bg-white/10 sm:flex-col sm:p-6 sm:text-center"
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
 *  system pages) or the Live Selling plan as the main card (the Live Selling System page). Customisation is always shown. */
export function PricingSection({ lang, page, plan = "all" }: { lang: Locale; page?: PageOf; plan?: "all" | "standard" | "live" }) {
  const t = getDict(lang).pricing;
  const live = plan === "live";
  return (
    <section id="pricing" className={`${page ? pageTop : "pt-20 sm:pt-24"} pb-20 sm:pb-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} page={page} />
        <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-6 lg:grid-cols-5">
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-7 text-white shadow-2xl shadow-brand-500/30 sm:p-8 lg:col-span-3">
            <div className="bg-grid absolute inset-0 opacity-20" aria-hidden="true" />
            <div className="relative flex h-full flex-col">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold tracking-wide uppercase">
                {live ? <Icon.Live className="h-4 w-4" /> : <Icon.Gift className="h-4 w-4" />} {live ? t.liveBadge : t.offer}
              </p>
              <h3 className="mt-5 text-2xl font-bold">{live ? t.livePlan : t.plan}</h3>
              <p className="mt-5 flex flex-wrap items-end gap-x-2">
                <span className="text-lg font-semibold text-white/80">{t.from}</span>
                <span className="text-5xl font-extrabold tracking-tight sm:text-6xl">RM {live ? site.livePriceFrom : site.priceFrom}</span>
                <span className="pb-1.5 text-lg font-semibold text-white/80">{t.perMonth}</span>
              </p>
              <p className="mt-5 rounded-2xl bg-white/15 p-4 text-base font-semibold">{live ? t.liveNote : t.free}</p>
              <a
                href={whatsappLink(live ? t.liveMessage : t.claimMessage)}
                target="_blank"
                rel="noopener"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-800 shadow-lg transition hover:bg-brand-50 lg:mt-auto"
              >
                <Icon.Whatsapp className="h-5 w-5 text-whatsapp" /> {live ? t.liveCta : t.claim}
              </a>
            </div>
          </div>
          <div className="card p-7 sm:p-8 lg:col-span-2">
            <h3 className="text-lg font-bold text-slate-900">{t.includedTitle}</h3>
            <CheckList items={live ? t.liveIncluded : t.included} className="mt-5" />
          </div>
          {plan === "all" && (
            <div className="card flex flex-col gap-5 p-6 sm:p-7 lg:col-span-5 lg:flex-row lg:items-center lg:gap-8">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-brand-500/25">
                <Icon.Live className="h-7 w-7" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="flex flex-wrap items-baseline gap-x-2 text-lg font-bold text-slate-900">
                  {t.liveTitle}
                  <span className="text-sm font-semibold text-slate-500">{t.liveFrom}</span>
                  <span className="text-gradient text-3xl font-extrabold tracking-tight">RM {site.livePriceFrom}</span>
                  <span className="text-sm font-semibold text-slate-500">{t.perMonth}</span>
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
          <div className="card flex flex-col gap-5 p-6 sm:p-7 lg:col-span-5 lg:flex-row lg:items-center lg:gap-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-brand-500/25">
              <Icon.Code className="h-7 w-7" />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="flex flex-wrap items-baseline gap-x-2 text-lg font-bold text-slate-900">
                {t.customTitle}
                <span className="text-sm font-semibold text-slate-500">{t.customFrom}</span>
                <span className="text-gradient text-3xl font-extrabold tracking-tight">RM {site.customFrom}</span>
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">{t.customText}</p>
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
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

export function FaqSection({ lang, items, page }: { lang: Locale; items?: { q: string; a: string }[]; page?: PageOf }) {
  const t = getDict(lang).faq;
  return (
    <section id="faq" className={page ? `${pageTop} pb-20 sm:pb-24` : "bg-slate-50 py-20 sm:py-24"}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} page={page} />
        <div className="mt-10 space-y-3">
          {(items ?? t.items).map((f) => (
            <details key={f.q} className="card group p-0 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 p-4 text-left font-semibold text-slate-900 sm:p-5">
                <h3 className="text-[15px] sm:text-base">{f.q}</h3>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-45">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
                </span>
              </summary>
              <p className="px-4 pb-5 text-sm leading-relaxed text-slate-600 sm:px-5">{f.a}</p>
            </details>
          ))}
        </div>
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
  /** Monthly price and offer text; the appointment plan unless given. */
  price?: number;
  offerText?: string;
}) {
  const price = opts.price ?? site.priceFrom;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: opts.category,
    operatingSystem: "Web, Windows, macOS, Android, iOS",
    featureList: opts.features,
    screenshot: (opts.screenshots ?? []).map((s) => ({
      "@type": "ImageObject",
      url: `${site.url}${shotSrc(s)}`,
      caption: s.alt,
      width: s.w,
      height: s.h,
    })),
    provider: { "@id": `${site.url}/#organization` },
    offers: {
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
      description: opts.offerText ?? getDict(opts.lang).pricing.offerText,
      availability: "https://schema.org/InStock",
      areaServed: "MY",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
}
