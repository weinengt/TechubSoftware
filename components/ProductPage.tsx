import Link from "next/link";
import { getDict, getShots, type Dict } from "@/content";
import { lp, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import type { ShotKey } from "@/lib/shots";
import { companyPages, site, systems, whatsappLink, type SystemKey } from "@/lib/site";
import Demo from "./Demo";
import { demos, type DemoKey } from "./demoScenes";
import JsonLd from "./JsonLd";
import { Icon, type IconName } from "./Icons";
import {
  FaqSection, HardwareSection, LocalSection, PricingSection, QuoteSection, SectionHeading, breadcrumbJsonLd, faqJsonLd, localFaq, softwareJsonLd,
} from "./Sections";
import { Combo, ContactSection, FeatureTiles, FloatBadge, OtherSystems, PhoneShowcase, Spotlight } from "./Showcase";
import { hl } from "./Text";

/* Each business type's pictures and icons. The words for each are under `products` in content/en.ts,
   with the same keys; the order here is the order on the page. The picture at the top shows the system at work:
   its moments are in ./demoScenes.ts, under the same key. A section can have a moving picture of its own (`demo`). */

type Visual =
  | { main: ShotKey; phone?: ShotKey; side?: "left" | "right"; speed?: boolean }
  | { phoneOnly: ShotKey; badges: IconName[] }
  | { demo: DemoKey };

type Text<K extends SystemKey> = Dict["products"][K];

type Spec<K extends SystemKey> = {
  highlights: Record<keyof Text<K>["highlights"], IconName>;
  spotlights: Record<keyof Text<K>["spotlights"], Visual>;
  modules: Record<keyof Text<K>["modules"], IconName>;
  contactPhone: ShotKey;
};

const specs: { [K in SystemKey]: Spec<K> } = {
  clinic: {
    highlights: { records: "Users", medication: "Pill", queue: "Megaphone", hardware: "XRay", einvoice: "Invoice", reports: "Bolt" },
    spotlights: {
      queue: { main: "queueTv" },
      records: { main: "medication" },
      drawing: { main: "bodyChart" },
      hardware: { main: "printouts" },
      payment: { phoneOnly: "paymentClinic", badges: ["Wallet", "Bank"] },
      stock: { main: "clinicStock", phone: "scanClinic" },
      reports: { main: "reportsClinic", speed: true },
      permissions: { main: "clinicPermissions" },
    },
    modules: {
      records: "Users", queue: "Megaphone", whatsapp: "Whatsapp", emr: "Stethoscope", medication: "Pill", drawing: "Pen",
      ai: "Sparkles", inventory: "Route", printing: "Printer", xray: "XRay", billing: "Card", payment: "Wallet",
      einvoice: "Invoice", reports: "Bolt", permissions: "Lock", devices: "Devices",
    },
    contactPhone: "whatsappClinic",
  },
  salon: {
    highlights: { notify: "Whatsapp", platform: "Devices", profiles: "Users", inventory: "Box", payroll: "Coins", reports: "Bolt" },
    spotlights: {
      staff: { main: "payrollSalon", phone: "staffSalon" },
      customer: { phoneOnly: "salonCustomer", badges: ["Pen", "Gift"] },
      pos: { main: "salonPos" },
      payment: { phoneOnly: "paymentSalon", badges: ["Wallet", "Bank"] },
      deposits: { demo: "salonDeposits" },
      stock: { main: "salonStock", phone: "scanSalon" },
      reports: { main: "reportsSalon", speed: true },
      permissions: { main: "salonPermissions" },
    },
    modules: {
      calendar: "Calendar", walkin: "Megaphone", whatsapp: "Whatsapp", profiles: "Users", customers: "Scissors", packages: "Gift",
      pos: "Card", payment: "Wallet", deposits: "Receipt", commission: "Chart", payroll: "Coins", inventory: "Sparkles",
      einvoice: "Invoice", reports: "Bolt", permissions: "Lock", devices: "Devices",
    },
    contactPhone: "whatsappSalon",
  },
  beauty: {
    highlights: { notify: "Whatsapp", platform: "Devices", profiles: "Users", inventory: "Box", payroll: "Coins", reports: "Bolt" },
    spotlights: {
      packages: { phoneOnly: "beautyPackage", badges: ["Gift", "Whatsapp"] },
      staff: { main: "payrollBeauty", phone: "staffBeauty" },
      faceChart: { main: "faceChart" },
      pos: { main: "beautyPos" },
      payment: { phoneOnly: "paymentBeauty", badges: ["Wallet", "Bank"] },
      deposits: { demo: "beautyDeposits" },
      stock: { main: "beautyStock", phone: "scanBeauty", side: "left" },
      reports: { main: "reportsBeauty", speed: true },
      permissions: { main: "beautyPermissions" },
    },
    modules: {
      calendar: "Calendar", whatsapp: "Whatsapp", packages: "Gift", customers: "Mirror", faceChart: "Pen", profiles: "Users",
      pos: "Card", payment: "Wallet", deposits: "Receipt", commission: "Chart", payroll: "Coins", inventory: "Sparkles",
      einvoice: "Invoice", reports: "Bolt", permissions: "Lock", devices: "Devices",
    },
    contactPhone: "whatsappBeauty",
  },
  spa: {
    highlights: { notify: "Whatsapp", platform: "Devices", profiles: "Users", inventory: "Box", payroll: "Coins", reports: "Bolt" },
    spotlights: {
      staff: { main: "payrollSpa", phone: "staffSpa" },
      packages: { phoneOnly: "spaPackage", badges: ["Gift", "Calendar"] },
      treatmentMap: { main: "bodyChartSpa" },
      pos: { main: "spaPos" },
      payment: { phoneOnly: "paymentSpa", badges: ["Wallet", "Bank"] },
      deposits: { demo: "spaDeposits" },
      stock: { main: "spaStock", phone: "scanSpa" },
      reports: { main: "reportsSpa", speed: true },
      permissions: { main: "spaPermissions" },
    },
    modules: {
      scheduling: "Calendar", whatsapp: "Whatsapp", packages: "Gift", group: "Lotus", treatmentMap: "Pen", profiles: "Users",
      pos: "Card", payment: "Wallet", deposits: "Receipt", commission: "Chart", payroll: "Coins", inventory: "Sparkles",
      einvoice: "Invoice", reports: "Bolt", permissions: "Lock", devices: "Devices",
    },
    contactPhone: "whatsappSpa",
  },
  live: {
    highlights: { crowd: "Users", queue: "Server", oversell: "Shield", schedule: "Calendar", visitors: "Live", reports: "Chart" },
    spotlights: {
      crowd: { main: "liveQueue", phone: "liveCheckout" },
      oversell: { phoneOnly: "liveProduct", badges: ["Lock", "Box"] },
      schedule: { main: "liveProducts" },
      payment: { phoneOnly: "livePayment", badges: ["Wallet", "Bank"] },
      visitors: { main: "liveVisitors" },
      reports: { main: "reportsLive", speed: true },
      permissions: { main: "livePermissions" },
    },
    modules: {
      salePage: "Live", products: "Box", schedule: "Calendar", queue: "Server", oversell: "Shield", stock: "Sync",
      visitors: "Users", pages: "Globe", checkout: "Bolt", payment: "Wallet", orders: "Route", receipts: "Layers",
      einvoice: "Invoice", reports: "Chart", permissions: "Lock", devices: "Devices",
    },
    contactPhone: "liveCheckout",
  },
  inventory: {
    highlights: { batch: "Box", trail: "Route", barcode: "Barcode", sales: "Card", accounting: "Invoice", returns: "Receipt" },
    spotlights: {
      stockIn: { main: "stockIn", phone: "stockScan" },
      trail: { main: "stockTrail" },
      labels: { main: "barcodeLabels" },
      sales: { main: "erpSales" },
      returns: { main: "erpReturn" },
      reports: { main: "reportsInventory", speed: true },
      permissions: { main: "inventoryPermissions" },
    },
    modules: {
      batch: "Layers", barcode: "Printer", qr: "Barcode", scan: "Scan", trail: "Route", levels: "Database",
      delivery: "Car", sales: "Card", orders: "Box", returns: "Sync", notes: "Receipt", accounting: "Coins",
      einvoice: "Invoice", reports: "Bolt", permissions: "Lock", devices: "Devices",
    },
    contactPhone: "stockScan",
  },
};

// The picture at the top is wider than the ones further down.
const heroSizes = { tablet: "(min-width: 1024px) 940px, 92vw", phone: "(min-width: 1024px) 208px, 27vw" };

const pathOf = (k: SystemKey) => systems.find((s) => s.key === k)!.path;

type SpotText = { eyebrow: string; title: string; points: string[]; badges?: string[] };
const entries = <V,>(o: Record<string, V>) => Object.entries(o) as [string, V][];

/** The page's text and pictures for one business type, in one language. */
function content(lang: Locale, k: SystemKey) {
  const d = getDict(lang);
  const t = d.products[k] as Text<SystemKey>;
  const spec = specs[k] as unknown as {
    highlights: Record<string, IconName>;
    spotlights: Record<string, Visual>;
    modules: Record<string, IconName>;
    contactPhone: ShotKey;
  };
  const text = t as unknown as { highlights: Record<string, string>; spotlights: Record<string, SpotText>; modules: Record<string, string> };
  return {
    d,
    t,
    spec,
    name: d.systems[k].name,
    highlights: entries(spec.highlights).map(([id, icon]) => ({ icon, title: text.highlights[id] })),
    spotlights: entries(spec.spotlights).map(([id, visual]) => ({ id, visual, ...text.spotlights[id] })),
    modules: entries(spec.modules).map(([id, icon]) => ({ icon, title: text.modules[id] })),
  };
}

export function productMetadata(lang: Locale, k: SystemKey) {
  const m = getDict(lang).products[k].meta;
  return pageMetadata({ lang, path: pathOf(k), title: m.title, socialTitle: m.socialTitle, description: m.description, keywords: m.keywords });
}

export default function ProductPage({ lang, k }: { lang: Locale; k: SystemKey }) {
  const { d, t, spec, name, highlights, spotlights, modules } = content(lang, k);
  // The Live Selling System has its own price and asks for a demo; the appointment systems share one plan. The
  // Inventory & ERP System has no set price: it asks for a quote instead.
  const live = k === "live";
  const quote = "quote" in t ? { ...t.quote, message: t.quoteMessage } : undefined;
  const offer = "contact" in t ? { ...t.contact, message: quote?.message ?? t.demoMessage } : undefined;
  const shots = getShots(lang);
  const path = pathOf(k);
  const url = `${site.url}${lp(lang, path)}`;
  const shotOf = (v: Visual) => ("demo" in v ? demos[v.demo][0].tablet! : "phoneOnly" in v ? v.phoneOnly : v.main);
  const pics = [shots[demos[k][0].tablet!], ...spotlights.map((s) => shots[shotOf(s.visual)])];
  const faqs = [...t.faqs, localFaq(lang, k)];

  const visual = (s: (typeof spotlights)[number]) => {
    const v = s.visual;
    if ("demo" in v) return <Demo lang={lang} demo={v.demo} layout="combo" product={name} />;
    if ("phoneOnly" in v) {
      return (
        <PhoneShowcase
          shot={shots[v.phoneOnly]}
          badges={v.badges.map((icon, i) => (
            <FloatBadge key={icon} icon={icon} tone={icon === "Whatsapp" ? "green" : "brand"}>
              {s.badges?.[i]}
            </FloatBadge>
          ))}
        />
      );
    }
    return (
      <Combo
        main={shots[v.main]}
        phone={v.phone ? shots[v.phone] : undefined}
        side={v.side}
        badge={v.speed ? <FloatBadge icon="Bolt">{d.product.reportsBadge}</FloatBadge> : undefined}
      />
    );
  };

  return (
    <>
      <JsonLd
        data={[
          softwareJsonLd({
            lang,
            name,
            description: t.meta.description,
            url,
            category: t.category,
            features: modules.map((m) => m.title),
            screenshots: pics,
            ...(live && { price: site.livePriceFrom, offerText: d.pricing.liveOfferText }),
            ...(quote && { offers: false }),
          }),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: d.ui.home, url: `${site.url}${lp(lang, "/")}` },
            { name, url },
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
              <span className="text-slate-700">{name}</span>
            </nav>
            {/* The system's name is the first line of the heading, so the page's main search words are in its h1. */}
            <h1 className="rise text-[2.3rem] leading-[1.1] font-extrabold tracking-tight text-slate-900 [--rise:70ms] sm:text-5xl lg:text-6xl">
              <span className="eyebrow h1-label mx-auto !flex w-fit">{t.eyebrow}</span>
              <span className="mt-5 block">{hl(t.heading)}</span>
            </h1>
            <p className="rise mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 [--rise:150ms]">{t.intro}</p>
            <div className="rise mt-8 flex flex-col justify-center gap-3 [--rise:230ms] sm:flex-row">
              <a href={whatsappLink(t.demoMessage)} target="_blank" rel="noopener" className="btn-primary !py-3.5">
                <Icon.Whatsapp className="h-5 w-5" /> {live ? d.ui.requestDemo : d.ui.bookFreeDemo}
              </a>
              {quote ? (
                <a href={whatsappLink(quote.message)} target="_blank" rel="noopener" className="btn-secondary !py-3.5">
                  {d.ui.getQuote}
                </a>
              ) : (
                <Link href={lp(lang, companyPages.pricing)} className="btn-secondary !py-3.5">
                  {live ? d.ui.livePriceLine : d.ui.priceLine}
                </Link>
              )}
            </div>
          </div>
          <div className="mx-auto mt-14 max-w-5xl">
            <Demo lang={lang} demo={k} layout="combo" product={name} priority sizes={heroSizes} />
          </div>
          <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2" data-reveal>
            {t.whoFor.map((w) => (
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
          {highlights.map((h) => {
            const I = Icon[h.icon];
            return (
              <li key={h.title} className="flex items-center gap-3 lg:flex-col lg:text-center" data-reveal>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-brand ring-1 ring-white/15">
                  <I className="h-5 w-5" />
                </span>
                <span className="text-sm leading-snug font-semibold text-balance text-slate-100">{h.title}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {spotlights.map((s, i) => (
        <section key={s.id} id={s.id} className={`overflow-hidden py-16 sm:py-20 ${i % 2 === 0 ? "bg-slate-50" : ""}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Spotlight
              eyebrow={s.eyebrow}
              title={s.title}
              points={s.points}
              reverse={i % 2 === 1}
              visual={visual(s)}
              revealVisual={!("demo" in s.visual)}
              cta={i === 1 ? { label: d.ui.askDemo, message: t.demoMessage } : undefined}
            />
          </div>
        </section>
      ))}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={d.product.allModules} title={d.product.inside.replace("{product}", name)} />
          <FeatureTiles items={modules} />
        </div>
      </section>

      {/* The clinic page already has its own hardware spotlight, and live selling needs no counter hardware. */}
      {!live && !spotlights.some((s) => s.id === "hardware") && <HardwareSection lang={lang} />}
      {quote ? <QuoteSection lang={lang} quote={quote} /> : <PricingSection lang={lang} plan={live ? "live" : "standard"} />}
      <LocalSection lang={lang} k={k} />
      <FaqSection lang={lang} items={faqs} />
      <OtherSystems lang={lang} current={k} />
      <ContactSection lang={lang} phoneShot={shots[spec.contactPhone]} title={offer?.title} offer={offer} />
    </>
  );
}
