import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { fill, getDict, getShots, type Dict } from "@/content";
import Demo from "@/components/Demo";
import Device from "@/components/Device";
import { Icon, type IconName } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { CustomRates, Customisation, FaqSection, LocalSection, SectionHeading, ServiceCard, breadcrumbJsonLd, faqJsonLd, localFaq, planText } from "@/components/Sections";
import { Combo, ContactSection, FeatureTiles, FloatBadge, PhoneShowcase, Spotlight } from "@/components/Showcase";
import { hl } from "@/components/Text";
import { serviceLayout } from "@/components/demoScenes";
import { htmlLang, lp, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { shotSrc, type ShotKey } from "@/lib/shots";
import { areaServed, companyPages, rm, servicePages, site, whatsappLink, type Plan, type ServicePageKey } from "@/lib/site";

/* The service pages: Software Customisation, Data Migration, Business Email and Website Design. Their words are under
   `servicePages` in content/en.ts, with the same keys; the picture at the top shows the service at work (its moments
   are in ../demoScenes.ts, under the same key). Each page has the same frame (top, highlights, its own parts, price,
   questions, the other services and a way to get in touch); the parts in between are the page's own. */

type Key = ServicePageKey;
type Text<K extends Key> = Dict["servicePages"][K];

const specs: Record<Key, { highlights: IconName[]; pictures: ShotKey[]; contactPhone: ShotKey; offer: { price: number; low?: number; unit?: "HUR" | "ANN" } }> = {
  customisation: {
    highlights: ["Coins", "Sparkles", "Receipt", "Check", "Wallet", "Whatsapp"],
    pictures: ["customEstimate", "customRequest", "customTesting", "customClaims", "customSalesExport", "customFoundUs", "customCourier"],
    contactPhone: "customRequest",
    offer: { price: site.plans[0].hourly ?? site.customFrom, low: site.customFrom, unit: "HUR" },
  },
  migration: {
    highlights: ["Layers", "Scan", "Users", "Coins", "Database", "Rocket"],
    pictures: ["migrationImport", "migrationScan", "migrationCheck", "migrationDone", "migrationChat"],
    contactPhone: "migrationChat",
    offer: { price: site.migrationHour, unit: "HUR" },
  },
  email: {
    highlights: ["Globe", "Coins", "Database", "Wrench", "Devices", "Whatsapp"],
    pictures: ["emailInbox", "emailPhone", "emailSetup"],
    contactPhone: "emailPhone",
    offer: { price: site.emailYear, unit: "ANN" },
  },
  website: {
    highlights: ["Sparkles", "Bolt", "Devices", "Cloud", "Chart", "Gift"],
    pictures: ["siteHome", "siteTreatments", "siteContact", "sitePhone", "siteDental", "siteCafe", "siteHomestay", "siteInterior", "siteAccounting"],
    contactPhone: "sitePhone",
    offer: { price: site.websitePrice },
  },
};

export const servicePath = (k: Key) => servicePages.find((s) => s.key === k)!.path;

export function serviceMetadata(lang: Locale, k: Key) {
  const m = getDict(lang).servicePages[k].meta;
  return pageMetadata({ lang, path: servicePath(k), title: m.title, socialTitle: m.socialTitle, description: m.description, keywords: m.keywords });
}

// The picture at the top is wider than the ones further down.
const heroSizes = {
  combo: { tablet: "(min-width: 1024px) 940px, 92vw", phone: "(min-width: 1024px) 208px, 27vw" },
  screen: { screen: "(min-width: 1024px) 896px, 92vw" },
};

/** A section of the page, on white or (`tint`) light grey. */
function Band({ id, tint, children, className = "" }: { id?: string; tint?: boolean; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`overflow-hidden py-16 sm:py-20 ${tint ? "bg-slate-50" : ""} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

/** Rows of a picture beside a heading and points, taking turns left and right. */
function Spotlights({ rows, from = 0 }: { rows: { id: string; t: { eyebrow: string; title: string; points: string[] }; visual: ReactNode }[]; from?: number }) {
  return rows.map((r, i) => (
    <Band key={r.id} id={r.id} tint={(i + from) % 2 === 0}>
      <Spotlight eyebrow={r.t.eyebrow} title={r.t.title} points={r.t.points} reverse={(i + from) % 2 === 1} visual={r.visual} />
    </Band>
  ));
}

/* ---------- Software customisation ---------- */

const buildIcons: Record<keyof Text<"customisation">["build"], IconName> = {
  reports: "Chart",
  printouts: "Printer",
  files: "Invoice",
  booking: "Calendar",
  whatsapp: "Whatsapp",
  workflow: "Route",
  integration: "Sync",
  module: "Layers",
};

// The picture of each customer's change, customers A to D (their hours are customExamples in lib/site.ts).
const storyShots: ShotKey[] = ["customClaims", "customSalesExport", "customFoundUs", "customCourier"];

function CustomisationParts({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.servicePages.customisation;
  const shots = getShots(lang);
  const best: Plan | undefined = site.plans.find((p: Plan) => p.recommended);
  const base = site.plans[0].hourly ?? 0;
  return (
    <>
      <Band id="examples" tint>
        <SectionHeading eyebrow={t.storiesEyebrow} title={t.storiesTitle} intro={t.storiesIntro} />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {t.stories.map((x, i) => {
            const hours = site.customExamples[i] ?? 0;
            return (
              <li key={x.who} className="card flex flex-col overflow-hidden" data-reveal>
                <div className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-cyan-50 px-5 pt-6 pb-5 sm:px-8 sm:pt-8">
                  <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
                  <Device shot={shots[storyShots[i]]} sizes="(min-width: 1024px) 520px, (min-width: 768px) 44vw, 86vw" className="relative" />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-bold tracking-wide text-brand-600 uppercase">{x.who}</p>
                  <h3 className="mt-1.5 text-lg leading-snug font-extrabold text-slate-900">{x.task}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">{x.result}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                      <Icon.Sparkles className="h-4 w-4 text-brand-600" /> {fill(t.hours, { n: String(hours) })}
                    </span>
                    <span className="ml-auto flex flex-wrap items-center justify-end gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold whitespace-nowrap text-slate-600">
                        {t.monthly} · RM {rm(hours * base)}
                      </span>
                      {best?.hourly && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold whitespace-nowrap text-emerald-700 ring-1 ring-emerald-200">
                          <Icon.Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          {planText(lang, best).name} · RM {rm(hours * best.hourly)}
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mx-auto mt-12 max-w-3xl" data-reveal>
          <h3 className="text-center text-sm font-bold tracking-wide text-slate-500 uppercase">{d.pricing.customRates}</h3>
          <CustomRates lang={lang} className="mt-4 grid-cols-2 sm:grid-cols-4" />
          <p className="mt-3 text-center text-xs text-slate-500">{t.storiesNote}</p>
        </div>
      </Band>
      <Spotlights
        from={1}
        rows={[
          { id: "estimate", t: t.spotlights.estimate, visual: <Combo main={getShots(lang).customEstimate} phone={getShots(lang).customRequest} /> },
          { id: "testing", t: t.spotlights.testing, visual: <Combo main={getShots(lang).customTesting} /> },
        ]}
      />
      <Band id="build" tint>
        <SectionHeading eyebrow={t.eyebrow} title={t.buildTitle} />
        <FeatureTiles items={(Object.keys(buildIcons) as (keyof typeof buildIcons)[]).map((k) => ({ icon: buildIcons[k], title: t.build[k] }))} />
      </Band>
      <Band id="price">
        <div className="mx-auto max-w-6xl">
          <Customisation lang={lang} full={false} examples={false} />
        </div>
      </Band>
    </>
  );
}

/* ---------- Data migration ---------- */

const formats: { key: keyof Text<"migration">["formats"]; ext: string; tone: string }[] = [
  { key: "pdf", ext: "PDF", tone: "from-rose-500 to-red-600" },
  { key: "excel", ext: "XLSX", tone: "from-emerald-500 to-green-700" },
  { key: "csv", ext: "CSV", tone: "from-teal-400 to-cyan-600" },
  { key: "txt", ext: "TXT", tone: "from-slate-400 to-slate-600" },
];

/** A file of one format: a page with a folded corner and the format's label. */
function FileTile({ ext, tone, label, delay }: { ext: string; tone: string; label: string; delay: number }) {
  return (
    <li className="rv-part flex flex-col items-center text-center" style={{ "--d": `${delay}ms` } as CSSProperties}>
      <span className="relative block h-28 w-[5.5rem] rounded-xl bg-white shadow-[0_20px_40px_-20px_rgb(11_47_85/0.45)] ring-1 ring-slate-200 sm:h-32 sm:w-24" aria-hidden="true">
        <span className="absolute top-0 right-0 h-6 w-6 rounded-tr-xl rounded-bl-lg bg-slate-100 ring-1 ring-slate-200" />
        <span className="absolute inset-x-3 top-8 space-y-1.5">
          <span className="block h-1.5 w-full rounded-full bg-slate-100" />
          <span className="block h-1.5 w-4/5 rounded-full bg-slate-100" />
          <span className="block h-1.5 w-3/5 rounded-full bg-slate-100" />
        </span>
        <span className={`absolute bottom-3 left-1/2 -translate-x-1/2 rounded-md bg-gradient-to-br px-2 py-1 text-xs font-extrabold tracking-wide text-white ${tone}`}>
          {ext}
        </span>
      </span>
      <span className="mt-3 text-sm font-bold text-slate-900">{label}</span>
    </li>
  );
}

/** Few records or many, the same hourly rate: migration is charged by time, not by how much data there is. */
function TimeNotVolume({ lang }: { lang: Locale }) {
  const t = getDict(lang).servicePages.migration;
  const stack = (n: number, label: string, delay: number) => (
    <div className="rv-part flex flex-col items-center" style={{ "--d": `${delay}ms` } as CSSProperties}>
      <div className="flex h-44 flex-col-reverse items-center justify-start sm:h-52" aria-hidden="true">
        {Array.from({ length: n }, (_, i) => (
          <span key={i} className="-mt-2 block h-7 w-24 rounded-[50%] bg-gradient-to-b from-brand-400 to-brand-600 ring-2 ring-white sm:w-28" />
        ))}
      </div>
      <p className="mt-3 text-sm font-bold text-slate-900">{label}</p>
      <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-700 ring-1 ring-brand-200">
        <Icon.Bolt className="h-3.5 w-3.5" /> RM {rm(site.migrationHour)} {getDict(lang).pricing.perHour}
      </p>
    </div>
  );
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-50 via-white to-cyan-50 p-6 ring-1 ring-slate-200 sm:p-10" data-reveal="group">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative grid grid-cols-2 items-end gap-4">
        {stack(2, t.timeSmall, 200)}
        {stack(7, t.timeBig, 420)}
      </div>
      <p className="rv-part relative mx-auto mt-6 w-fit rounded-full bg-brand-gradient px-4 py-1.5 text-sm font-bold text-white shadow-lg shadow-brand-500/25 [--d:650ms]">
        {t.timeSame}
      </p>
    </div>
  );
}

function MigrationParts({ lang }: { lang: Locale }) {
  const t = getDict(lang).servicePages.migration;
  const shots = getShots(lang);
  return (
    <>
      <Band id="formats" tint>
        <SectionHeading eyebrow={t.formatsEyebrow} title={t.formatsTitle} intro={t.formatsIntro} />
        <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4" data-reveal="group">
          {formats.map((f, i) => (
            <FileTile key={f.key} ext={f.ext} tone={f.tone} label={t.formats[f.key]} delay={150 + i * 120} />
          ))}
        </ul>
        <p className="mt-8 text-center text-sm font-medium text-slate-500" data-reveal>{t.formatsMore}</p>
      </Band>
      <Spotlights
        from={1}
        rows={[
          { id: "scan", t: t.spotlights.scan, visual: <Combo main={shots.migrationScan} /> },
          { id: "check", t: t.spotlights.check, visual: <Combo main={shots.migrationCheck} /> },
        ]}
      />
      <Band id="price" tint>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading center={false} eyebrow={t.timeEyebrow} title={t.timeTitle} intro={t.timeText} />
            <div className="mt-8">
              <TimeNotVolume lang={lang} />
            </div>
          </div>
          <ServiceCard lang={lang} k="migration" more={false} className="mx-auto w-full max-w-md" />
        </div>
        <div className="mt-16" data-reveal>
          <h3 className="text-center text-sm font-bold tracking-wide text-slate-500 uppercase">{t.stepsTitle}</h3>
          <ol className="mx-auto mt-5 grid max-w-5xl grid-cols-2 gap-3 lg:grid-cols-4">
            {t.steps.map((step, i) => (
              <li key={step} className="rv-part rounded-2xl bg-white p-4 ring-1 ring-slate-200" style={{ "--d": `${200 + i * 130}ms` } as CSSProperties}>
                <span className="text-gradient text-2xl font-extrabold">0{i + 1}</span>
                <p className="mt-1 font-bold text-slate-900">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </Band>
    </>
  );
}

/* ---------- Business email ---------- */

const useIcons: IconName[] = ["Stethoscope", "Scissors", "Live", "Layers"];

function EmailParts({ lang }: { lang: Locale }) {
  const t = getDict(lang).servicePages.email;
  const shots = getShots(lang);
  const s = t.spotlights;
  return (
    <>
      <Band id="use-cases" tint>
        <SectionHeading eyebrow={t.usesEyebrow} title={t.usesTitle} />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
          {t.uses.map((u, i) => {
            const I = Icon[useIcons[i]];
            return (
              <li key={u.who} className="card flex flex-col p-5" data-reveal>
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md shadow-brand-500/25">
                    <I className="h-5 w-5" />
                  </span>
                  <h3 className="font-extrabold text-slate-900">{u.who}</h3>
                </span>
                <p className="mt-4 rounded-xl bg-brand-50 px-3 py-2 text-[13px] font-bold [overflow-wrap:anywhere] text-brand-700 ring-1 ring-brand-100">
                  {u.address.split("@")[0]}
                  <wbr />@{u.address.split("@")[1]}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{u.text}</p>
              </li>
            );
          })}
        </ul>
      </Band>
      <Spotlights
        from={1}
        rows={[
          { id: "setup", t: s.setup, visual: <Combo main={shots.emailSetup} /> },
          {
            id: "devices",
            t: s.devices,
            visual: (
              <PhoneShowcase
                shot={shots.emailPhone}
                badges={[
                  <FloatBadge key="a" icon="Mail">{s.devices.badges[0]}</FloatBadge>,
                  <FloatBadge key="b" icon="Globe">{s.devices.badges[1]}</FloatBadge>,
                ]}
              />
            ),
          },
        ]}
      />
      <Band id="price" tint>
        <ServiceCard lang={lang} k="email" more={false} className="mx-auto max-w-md" />
      </Band>
    </>
  );
}

/* ---------- Website design ---------- */

// The example designs, each a website and sometimes its phone view, with its kind of business under it.
const gallery: { key: keyof Text<"website">["gallery"]; main: ShotKey; phone?: ShotKey; side?: "left" | "right" }[] = [
  { key: "skin", main: "siteHome", phone: "sitePhone" },
  { key: "dental", main: "siteDental" },
  { key: "cafe", main: "siteCafe", phone: "siteCafePhone", side: "left" },
  { key: "homestay", main: "siteHomestay", phone: "siteHomestayPhone" },
  { key: "interior", main: "siteInterior" },
  { key: "accounting", main: "siteAccounting" },
];

function WebsiteParts({ lang }: { lang: Locale }) {
  const t = getDict(lang).servicePages.website;
  const shots = getShots(lang);
  const s = t.spotlights;
  return (
    <>
      <Band id="designs" tint>
        <SectionHeading eyebrow={t.galleryEyebrow} title={t.galleryTitle} intro={t.galleryIntro} />
        <ul className="mt-14 grid gap-x-12 gap-y-14 lg:grid-cols-2">
          {gallery.map((g) => (
            <li key={g.key} data-reveal="zoom">
              <Combo main={shots[g.main]} phone={g.phone ? shots[g.phone] : undefined} side={g.side} />
              <p className="mt-5 text-center text-sm font-bold tracking-wide text-slate-500 uppercase">{t.gallery[g.key]}</p>
            </li>
          ))}
        </ul>
      </Band>
      <Spotlights
        from={1}
        rows={[
          {
            id: "instant",
            t: s.instant,
            visual: <Combo main={shots.siteTreatments} phone={shots.sitePhone} badge={<FloatBadge icon="Bolt">{s.instant.badge}</FloatBadge>} />,
          },
          { id: "fast", t: s.fast, visual: <Combo main={shots.siteContact} badge={<FloatBadge icon="Cloud">{s.fast.badge}</FloatBadge>} /> },
        ]}
      />
      <Band id="price" tint>
        <ServiceCard lang={lang} k="website" more={false} className="mx-auto max-w-md" />
      </Band>
    </>
  );
}

const parts: Record<Key, (p: { lang: Locale }) => ReactNode> = {
  customisation: CustomisationParts,
  migration: MigrationParts,
  email: EmailParts,
  website: WebsiteParts,
};

/** Links to the other service pages, near the end of each one. */
function OtherServices({ lang, current }: { lang: Locale; current: Key }) {
  const d = getDict(lang);
  return (
    <section aria-labelledby="other-services" className="pt-12 pb-4 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="other-services" className="text-center text-sm font-bold tracking-wide text-slate-500 uppercase" data-reveal>
          {d.servicePages.others}
        </h2>
        <ul className="mx-auto mt-5 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {servicePages
            .filter((s) => s.key !== current)
            .map((s) => {
              const I = Icon[s.icon];
              return (
                <li key={s.key} data-reveal>
                  <Link href={lp(lang, s.path)} className="card group flex h-full items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:ring-brand-200">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                      <I className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1 font-bold text-slate-900">{d.servicePages[s.key].label}</span>
                    <Icon.Arrow className="h-4 w-4 text-brand-600 transition group-hover:translate-x-0.5" />
                  </Link>
                </li>
              );
            })}
          <li data-reveal>
            <Link href={lp(lang, companyPages.useCases)} className="card group flex h-full items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:ring-brand-200">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <Icon.Layers className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1 font-bold text-slate-900">{d.menu.all}</span>
              <Icon.Arrow className="h-4 w-4 text-brand-600 transition group-hover:translate-x-0.5" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

/** The service as schema.org data: what it is, where, the pictures and its price. */
function serviceJsonLd(lang: Locale, k: Key, url: string) {
  const t = getDict(lang).servicePages[k];
  const shots = getShots(lang);
  const { offer, pictures } = specs[k];
  const spec = (price: number) => ({
    "@type": "UnitPriceSpecification",
    price,
    priceCurrency: site.currency,
    ...(offer.unit && { unitCode: offer.unit, referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: offer.unit } }),
  });
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.name,
    serviceType: t.name,
    description: t.meta.description,
    url,
    inLanguage: htmlLang[lang],
    provider: { "@id": `${site.url}/#organization` },
    areaServed,
    image: pictures.map((p) => `${site.url}${shotSrc(shots[p])}`),
    offers: {
      "@type": "Offer",
      price: offer.low ?? offer.price,
      priceCurrency: site.currency,
      priceSpecification: offer.low ? [spec(offer.low), spec(offer.price)] : spec(offer.price),
      availability: "https://schema.org/InStock",
      areaServed: "MY",
      url,
    },
  };
}

export default function ServicePage({ lang, k }: { lang: Locale; k: Key }) {
  const d = getDict(lang);
  const t = d.servicePages[k] as Text<Key>;
  const spec = specs[k];
  const shots = getShots(lang);
  const faqs = [...t.faqs, localFaq(lang, k)];
  const path = servicePath(k);
  const url = `${site.url}${lp(lang, path)}`;
  const layout = serviceLayout[k];
  const Parts = parts[k];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(lang, k, url),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: d.ui.home, url: `${site.url}${lp(lang, "/")}` },
            { name: d.product.useCases, url: `${site.url}${lp(lang, companyPages.useCases)}` },
            { name: t.name, url },
          ]),
        ]}
      />

      <section className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <nav aria-label="Breadcrumb" className="rise mb-5 text-sm text-slate-500">
              <Link href={lp(lang, "/")} className="hover:text-brand-700">{d.ui.home}</Link> <span aria-hidden="true">/</span>{" "}
              <Link href={lp(lang, companyPages.useCases)} className="hover:text-brand-700">{d.product.useCases}</Link> <span aria-hidden="true">/</span>{" "}
              <span className="text-slate-700">{t.name}</span>
            </nav>
            {/* The service's name is the first line of the heading, so the page's main search words are in its h1. */}
            <h1 className="rise text-[2.3rem] leading-[1.1] font-extrabold tracking-tight text-slate-900 [--rise:70ms] sm:text-5xl lg:text-6xl">
              <span className="eyebrow h1-label mx-auto !flex w-fit">{t.eyebrow}</span>
              <span className="mt-5 block">{hl(t.heading)}</span>
            </h1>
            <p className="rise mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 [--rise:150ms]">{t.intro}</p>
            <div className="rise mt-8 flex flex-col justify-center gap-3 [--rise:230ms] sm:flex-row">
              <a href={whatsappLink(t.message)} target="_blank" rel="noopener" className="btn-primary !py-3.5">
                <Icon.Whatsapp className="h-5 w-5" /> {t.primary}
              </a>
              <Link href={lp(lang, companyPages.pricing)} className="btn-secondary !py-3.5">
                {t.price}
              </Link>
            </div>
          </div>
          <div className={`mx-auto mt-14 ${layout === "screen" ? "max-w-4xl" : "max-w-5xl"}`}>
            <Demo lang={lang} demo={k} layout={layout} product={t.name} priority sizes={heroSizes[layout]} />
          </div>
          <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2" data-reveal>
            {t.chips.map((w) => (
              <li key={w} className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="relative overflow-hidden bg-brand-950 py-10 text-white sm:py-12">
        <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <ul className="relative mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-5 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:px-8">
          {t.highlights.map((h, i) => {
            const I = Icon[spec.highlights[i]];
            return (
              <li key={h} className="flex items-center gap-3 lg:flex-col lg:text-center" data-reveal>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-brand ring-1 ring-white/15">
                  <I className="h-5 w-5" />
                </span>
                <span className="text-sm leading-snug font-semibold text-balance text-slate-100">{h}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <Parts lang={lang} />

      <LocalSection lang={lang} k={k} />
      <FaqSection lang={lang} items={faqs} />
      <OtherServices lang={lang} current={k} />
      <ContactSection lang={lang} phoneShot={shots[spec.contactPhone]} title={t.contact.title} offer={{ ...t.contact, message: t.message }} />
    </>
  );
}
