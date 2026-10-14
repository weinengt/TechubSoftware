import Link from "next/link";
import type { ReactNode } from "react";
import { getDict, getShots, type Dict } from "@/content";
import { lp, type Locale } from "@/lib/i18n";
import type { ShotKey } from "@/lib/shots";
import { companyPages, emailLink, site, systems, whatsappLink, type SystemKey } from "@/lib/site";
import Device from "./Device";
import { Icon, type IconName } from "./Icons";
import { CheckList, SectionHeading, pageTop, type PageOf } from "./Sections";
import { Combo } from "./Showcase";
import { hl } from "./Text";

const keysOf = <T extends object>(o: T) => Object.keys(o) as (keyof T)[];

/* ---------- Highlights: the strengths, right under the home page hero ---------- */

const highlightIcons: Record<keyof Dict["home"]["highlights"]["items"], IconName> = {
  booking: "Calendar",
  realtime: "Sync",
  deposit: "Card",
  whatsapp: "Whatsapp",
  accounting: "Layers",
  einvoice: "Invoice",
  inventory: "Box",
  reports: "Chart",
  permissions: "Lock",
  devices: "Devices",
  easy: "Rocket",
  uptime: "Shield",
};

export function HighlightsSection({ lang }: { lang: Locale }) {
  const t = getDict(lang).home.highlights;
  return (
    <section id="highlights" className="relative overflow-hidden bg-brand-950 py-16 text-white sm:py-20">
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/25 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow-dark">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{hl(t.title, "text-gradient-light")}</h2>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {keysOf(highlightIcons).map((k) => {
            const I = Icon[highlightIcons[k]];
            return (
              <li key={k} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-lg shadow-brand-500/30">
                  <I className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-[15px] leading-snug font-bold text-white sm:text-base">{t.items[k].title}</h3>
                <p className="mt-1 text-[13px] leading-snug text-slate-300 sm:text-sm">{t.items[k].text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- About: why businesses choose Techub ---------- */

const valueIcons: Record<keyof Dict["about"]["values"], IconName> = { cost: "Coins", online: "Shield", done: "Rocket", custom: "Wrench" };

/** A ring that is 99.95% full: the uptime guarantee as a picture. */
export function UptimeRing({ lang }: { lang: Locale }) {
  const t = getDict(lang).uptime;
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-brand-950 p-8 text-white sm:p-10">
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-teal-brand/25 blur-3xl" aria-hidden="true" />
      <div className="relative flex flex-col items-center text-center">
        <div className="relative h-52 w-52 sm:h-60 sm:w-60">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
            <defs>
              <linearGradient id="uptime-ring" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0396d9" />
                <stop offset="100%" stopColor="#00cfcb" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r={r} fill="none" stroke="rgb(255 255 255 / 0.1)" strokeWidth="9" />
            <circle cx="60" cy="60" r={r} fill="none" stroke="url(#uptime-ring)" strokeWidth="9" strokeLinecap="round" strokeDasharray={`${c * 0.9995} ${c}`} />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-extrabold tracking-tight sm:text-[2.5rem]">
              {site.uptime.replace("%", "")}
              <span className="text-lg sm:text-xl">%</span>
            </span>
            <span className="mt-1 text-sm font-semibold text-teal-brand">{t.label}</span>
          </div>
        </div>
        <p className="mt-6 max-w-xs text-base text-slate-300">{t.text}</p>
        <ul className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-semibold text-slate-200">
          {t.chips.map((chip) => (
            <li key={chip} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/15">
              <Icon.Check className="h-3.5 w-3.5 text-teal-brand" strokeWidth={3} /> {chip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function AboutSection({ lang, page }: { lang: Locale; page?: PageOf }) {
  const t = getDict(lang).about;
  return (
    <section id="about" className={`${page ? pageTop : "pt-20 sm:pt-24"} pb-20 sm:pb-24`}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-7">
          <SectionHeading center={false} eyebrow={t.eyebrow} title={t.title} intro={t.intro} page={page} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {keysOf(valueIcons).map((k) => {
              const I = Icon[valueIcons[k]];
              return (
                <li key={k} className="card flex gap-4 p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-brand-500/25">
                    <I className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-lg font-extrabold text-slate-900">{t.values[k].title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-600">{t.values[k].text}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <UptimeRing lang={lang} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */

/** A WhatsApp chat with Techub support, drawn for the "Training & support" card. */
function SupportChat({ lang }: { lang: Locale }) {
  const t = getDict(lang).services.chat;
  return (
    <div className="mx-auto w-full max-w-[16rem] overflow-hidden rounded-2xl bg-[#efeae2] shadow-[0_20px_40px_-20px_rgb(11_47_85/0.5)] ring-1 ring-slate-900/10" aria-hidden="true">
      <div className="flex items-center gap-2 bg-[#075e54] px-3 py-2.5 text-white">
        <img src="/icon-192.png" alt="" width={28} height={28} className="h-7 w-7 rounded-full bg-white p-0.5" loading="lazy" />
        <span className="text-xs leading-tight">
          <b className="block text-[13px]">{t.name}</b>
          <span className="text-white/75">{t.status}</span>
        </span>
      </div>
      <div className="space-y-2 p-3 text-[12px] leading-snug text-slate-800">
        <p className="ml-auto w-fit max-w-[85%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-2.5 py-1.5 shadow-sm">{t.question}</p>
        <p className="w-fit max-w-[85%] rounded-lg rounded-tl-none bg-white px-2.5 py-1.5 shadow-sm">{t.answer}</p>
        <p className="ml-auto w-fit max-w-[85%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-2.5 py-1.5 shadow-sm">{t.thanks}</p>
      </div>
    </div>
  );
}

export const services: { key: keyof Dict["services"]["items"]; icon: IconName; shot?: ShotKey }[] = [
  { key: "systems", icon: "Calendar", shot: "salonCalendar" },
  { key: "custom", icon: "Code", shot: "permissionsDesktop" },
  { key: "hardware", icon: "Printer", shot: "queueTv" },
  { key: "support", icon: "Headset" },
];

/** How a project goes, from the first talk to going live, with a button to start on WhatsApp. */
export function HowWeWork({ lang }: { lang: Locale }) {
  const t = getDict(lang).services;
  return (
    <div className="grid items-center gap-8 rounded-3xl bg-white p-6 ring-1 ring-slate-200 sm:p-10 lg:grid-cols-2">
      <div>
        <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{t.howTitle}</h3>
        <p className="mt-3 text-slate-600">{t.howText}</p>
        <a href={whatsappLink(t.howMessage)} target="_blank" rel="noopener" className="btn-primary mt-6">
          {t.howCta} <Icon.Arrow className="h-4 w-4" />
        </a>
      </div>
      <ol className="grid grid-cols-2 gap-3">
        {t.steps.map((step, i) => (
          <li key={step} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
            <span className="text-gradient text-2xl font-extrabold">0{i + 1}</span>
            <p className="mt-1 font-bold text-slate-900">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** "How we work" as a section of its own, for pages that don't show the services. */
export function HowWeWorkSection({ lang }: { lang: Locale }) {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HowWeWork lang={lang} />
      </div>
    </section>
  );
}

export function ServicesSection({ lang, page }: { lang: Locale; page?: PageOf }) {
  const t = getDict(lang).services;
  const shots = getShots(lang);
  return (
    <section id="services" className={page ? `${pageTop} border-b border-slate-200 bg-slate-50 pb-20 sm:pb-24` : "border-y border-slate-200 bg-slate-50 py-20 sm:py-24"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} intro={t.intro} page={page} />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const I = Icon[s.icon];
            return (
              <li key={s.key} className="card flex flex-col overflow-hidden">
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-cyan-50 px-6 py-5">
                  <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
                  <div className="relative w-full">
                    {s.shot ? (
                      <Device shot={shots[s.shot]} sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 85vw" zoom={false} />
                    ) : (
                      <SupportChat lang={lang} />
                    )}
                  </div>
                </div>
                <div className="flex flex-1 gap-3 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <I className="h-5 w-5" />
                  </span>
                  <span>
                    <h3 className="font-extrabold text-slate-900">{t.items[s.key].title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{t.items[s.key].text}</p>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-10">
          <HowWeWork lang={lang} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Use cases ---------- */

// The pictures for each use case: an iPad screen and a phone screen.
export const useCaseShots: Record<SystemKey, { tablet: ShotKey; phone: ShotKey }> = {
  clinic: { tablet: "clinicDashboard", phone: "whatsappClinic" },
  salon: { tablet: "salonCalendar", phone: "staffSalon" },
  beauty: { tablet: "faceChart", phone: "beautyPackage" },
  spa: { tablet: "spaCalendar", phone: "spaPackage" },
  live: { tablet: "liveDashboard", phone: "liveShop" },
};

/** Home and About pages: one card per business type, each opening that system's page, then one for custom systems. */
const cardSizes = "(min-width: 1024px) 350px, (min-width: 640px) 45vw, 44vw";

export function UseCasesSection({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.useCases;
  const shots = getShots(lang);
  return (
    <section id="use-cases" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {systems.map((s) => {
            const I = Icon[s.icon];
            const sys = d.systems[s.key];
            return (
              <li key={s.key}>
                <Link
                  href={lp(lang, s.path)}
                  className="card group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl hover:ring-brand-300"
                >
                  <div className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-cyan-50 px-3 pt-4 pb-3 sm:px-5 sm:pt-6 sm:pb-5">
                    <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
                    <Device shot={shots[useCaseShots[s.key].tablet]} sizes={cardSizes} zoom={false} className="relative" />
                  </div>
                  <div className="flex flex-1 flex-col p-3.5 sm:p-5">
                    <span className="flex items-center gap-2.5">
                      <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md shadow-brand-500/25 sm:flex">
                        <I className="h-5 w-5" />
                      </span>
                      <h3 className="text-[15px] leading-snug font-extrabold text-slate-900 sm:text-base">{sys.name}</h3>
                    </span>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{sys.blurb}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-700 sm:mt-4 sm:text-sm">
                      {sys.cta} <Icon.Arrow className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href={lp(lang, companyPages.customSystems)}
              className="card group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl hover:ring-brand-300"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-cyan-50 px-3 pt-4 pb-3 sm:px-5 sm:pt-6 sm:pb-5">
                <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
                <Device shot={shots.erpDesktop} sizes={cardSizes} zoom={false} className="relative" />
              </div>
              <div className="flex flex-1 flex-col p-3.5 sm:p-5">
                <span className="flex items-center gap-2.5">
                  <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md shadow-brand-500/25 sm:flex">
                    <Icon.Code className="h-5 w-5" />
                  </span>
                  <h3 className="text-[15px] leading-snug font-extrabold text-slate-900 sm:text-base">{d.menu.otherTitle}</h3>
                </span>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{d.menu.otherText}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-700 sm:mt-4 sm:text-sm">
                  {d.footer.custom} <Icon.Arrow className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </li>
        </ul>
        <div className="mt-10 text-center">
          <Link href={lp(lang, companyPages.useCases)} className="btn-secondary">
            {d.menu.all} <Icon.Arrow className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Use Cases page: every business type with its iPad and phone screens, then custom systems. */
export function UseCasesList({ lang, page }: { lang: Locale; page: PageOf }) {
  const d = getDict(lang);
  const t = d.useCases;
  const shots = getShots(lang);
  return (
    <section id="use-cases" className={`overflow-hidden ${pageTop} pb-20 sm:pb-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} intro={t.intro} page={page} />
        <div className="mt-14 space-y-20 sm:mt-20 sm:space-y-28">
          {systems.map((s, i) => {
            const I = Icon[s.icon];
            const sys = d.systems[s.key];
            const flip = i % 2 === 1;
            return (
              <div key={s.key} className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-6">
                <div className={`lg:col-span-5 lg:row-start-1 lg:self-end ${flip ? "lg:col-start-1" : "lg:col-start-8"}`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-brand-500/30">
                      <I className="h-6 w-6" />
                    </span>
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{sys.name}</h2>
                  </div>
                  <p className="mt-4 text-slate-600">{sys.blurb}</p>
                </div>
                <div className={`self-center lg:col-span-7 lg:row-span-2 lg:row-start-1 ${flip ? "lg:col-start-6" : "lg:col-start-1"}`}>
                  <Combo main={shots[useCaseShots[s.key].tablet]} phone={shots[useCaseShots[s.key].phone]} side={flip ? "left" : "right"} />
                </div>
                <div className={`lg:col-span-5 lg:row-start-2 lg:self-start ${flip ? "lg:col-start-1" : "lg:col-start-8"}`}>
                  <CheckList items={sys.points} />
                  <Link href={lp(lang, s.path)} className="btn-primary mt-8">
                    {sys.cta} <Icon.Arrow className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          href={lp(lang, companyPages.customSystems)}
          className="group mt-20 flex flex-col items-center justify-between gap-6 rounded-3xl bg-slate-50 p-6 text-center ring-1 ring-slate-200 transition hover:ring-brand-300 sm:mt-28 sm:p-8 lg:flex-row lg:text-left"
        >
          <span className="flex flex-col items-center gap-4 lg:flex-row">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-brand-500/25">
              <Icon.Code className="h-7 w-7" />
            </span>
            <span>
              <span className="block text-xl font-extrabold text-slate-900 sm:text-2xl">{d.menu.otherTitle}</span>
              <span className="mt-1 block text-slate-600">{d.menu.otherText}</span>
            </span>
          </span>
          <span className="btn-secondary shrink-0">
            {d.footer.custom} <Icon.Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </section>
  );
}

/* ---------- Custom systems (ERP, AI object detection, number plate scanner) ---------- */

export const customSystems: { key: keyof Dict["custom"]["items"]; icon: IconName; shot: ShotKey }[] = [
  { key: "erp", icon: "Layers", shot: "erpDesktop" },
  { key: "detection", icon: "Detect", shot: "objectDetection" },
  { key: "plate", icon: "Car", shot: "plateScanner" },
];

export function CustomSystemsSection({ lang, page }: { lang: Locale; page?: PageOf }) {
  const t = getDict(lang).custom;
  const shots = getShots(lang);
  return (
    <section id="custom-systems" className={page ? `${pageTop} pb-20 sm:pb-24` : "border-y border-slate-200 bg-slate-50 py-20 sm:py-24"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} intro={t.intro} page={page} />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {customSystems.map((c) => {
            const I = Icon[c.icon];
            return (
              <li key={c.key} className="card flex flex-col overflow-hidden">
                <div className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-cyan-50 px-5 pt-6 pb-5 sm:px-6">
                  <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
                  <Device shot={shots[c.shot]} sizes="(min-width: 768px) 30vw, 92vw" className="relative" />
                </div>
                <div className="flex flex-1 gap-3 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md shadow-brand-500/25">
                    <I className="h-5 w-5" />
                  </span>
                  <span>
                    <h3 className="font-extrabold text-slate-900">{t.items[c.key].title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{t.items[c.key].text}</p>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl bg-white p-6 text-center ring-1 ring-slate-200 sm:p-8 lg:flex-row lg:text-left">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 sm:text-2xl">{t.ctaTitle}</h3>
            <p className="mt-1 text-slate-600">{t.ctaText}</p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={whatsappLink(t.message)} target="_blank" rel="noopener" className="btn-primary">
              <Icon.Whatsapp className="h-5 w-5" /> {t.cta}
            </a>
            <a href={emailLink(t.emailSubject)} className="btn-secondary">
              <Icon.Mail className="h-5 w-5" /> {t.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Technology ---------- */

export const techIcons: Record<keyof Dict["tech"]["items"], IconName> = {
  servers: "Server",
  database: "Database",
  security: "Lock",
  ai: "Sparkles",
  realtime: "Sync",
  whatsapp: "Whatsapp",
  hardware: "Printer",
  einvoice: "Invoice",
};

const hubIcons: Record<keyof Dict["tech"]["hub"]["nodes"], IconName> = {
  devices: "Devices",
  whatsapp: "Whatsapp",
  printers: "Barcode",
  caller: "Megaphone",
  xray: "XRay",
  ai: "Sparkles",
  einvoice: "Invoice",
  reports: "Chart",
};

/** Techub Cloud in the middle, connected to the devices and services around it. */
export function TechHub({ lang }: { lang: Locale }) {
  const t = getDict(lang).tech.hub;
  const keys = keysOf(hubIcons);
  const R = 37;
  const nodes = keys.map((k, i) => {
    const a = ((-90 + (i * 360) / keys.length) * Math.PI) / 180;
    return { k, x: +(50 + R * Math.cos(a)).toFixed(2), y: +(50 + R * Math.sin(a)).toFixed(2) };
  });
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-brand-950 px-3 pt-4 pb-8 ring-1 ring-white/10 sm:px-8 sm:pt-6 sm:pb-10">
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <circle cx="50" cy="50" r={R} fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="0.35" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="rgb(255 255 255 / 0.1)" strokeWidth="0.35" strokeDasharray="0.8 1.6" />
          {nodes.map((n) => (
            <line key={n.k} x1="50" y1="50" x2={n.x} y2={n.y} stroke="rgb(0 207 203 / 0.6)" strokeWidth="0.45" strokeDasharray="1.2 1.6" className="tech-flow" />
          ))}
        </svg>
        <div className="absolute top-1/2 left-1/2 flex aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-brand-gradient text-center text-white shadow-[0_0_60px_-5px_rgb(0_207_203/0.6)] ring-[6px] ring-white/10">
          <Icon.Cloud className="h-7 w-7 sm:h-9 sm:w-9" />
          <span className="mt-1 text-[13px] leading-tight font-extrabold sm:text-base">{t.center}</span>
          <span className="mt-0.5 text-[10px] font-semibold text-white/85 sm:text-xs">{t.uptime}</span>
        </div>
        {nodes.map((n) => {
          const I = Icon[hubIcons[n.k]];
          return (
            <div key={n.k} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-lg shadow-black/20 sm:h-12 sm:w-12">
                <I className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <span className="absolute top-full left-1/2 mt-1.5 w-20 -translate-x-1/2 text-center text-[11px] leading-tight font-semibold text-slate-200 sm:w-24 sm:text-xs">
                {t.nodes[n.k]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Where the data lives: the business's devices, an encrypted link, servers in Malaysia and multi-layer backups. */
export function InfraDiagram({ lang }: { lang: Locale }) {
  const t = getDict(lang).techPage.infra;
  const link = (label: ReactNode) => (
    <div className="flex flex-col items-center" aria-hidden="true">
      <span className="h-4 border-l-2 border-dashed border-teal-brand/60 sm:h-5" />
      <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-brand/15 px-3 py-1 text-[11px] font-bold text-teal-brand ring-1 ring-teal-brand/30 sm:text-xs">
        <Icon.Lock className="h-3.5 w-3.5" /> {label}
      </span>
      <span className="h-4 border-l-2 border-dashed border-teal-brand/60 sm:h-5" />
    </div>
  );
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-brand-950 p-5 text-white ring-1 ring-white/10 sm:p-8">
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-500/25 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-md">
        <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3.5 ring-1 ring-white/15 sm:p-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600">
            <Icon.Devices className="h-6 w-6" />
          </span>
          <span>
            <span className="block font-bold">{t.business}</span>
            <span className="block text-sm text-slate-300">{t.devices}</span>
          </span>
        </div>

        {link(t.encrypted)}

        <div className="rounded-2xl bg-white/5 p-3.5 ring-1 ring-teal-brand/40 sm:p-4">
          <p className="flex items-center gap-2 text-sm font-bold text-teal-brand">
            <Icon.Shield className="h-4 w-4 shrink-0" /> {t.servers}
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            {["IPServerOne", "Amazon Web Services"].map((name) => (
              <div key={name} className="rounded-xl bg-white p-3 text-slate-900">
                <Icon.Server className="h-6 w-6 text-brand-600" />
                <p className="mt-2 text-[13px] leading-tight font-extrabold sm:text-sm">{name}</p>
                <p className="mt-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 sm:text-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> {t.online}
                </p>
              </div>
            ))}
          </div>
        </div>

        {link(t.encryptedData)}

        <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3.5 ring-1 ring-white/15 sm:p-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient">
            <Icon.Layers className="h-6 w-6" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-bold">{t.backups}</span>
            <span className="block text-sm text-slate-300">{t.regions}</span>
          </span>
          <span className="flex shrink-0 -space-x-1.5" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span key={i} className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-brand-600 ring-2 ring-brand-950">
                <Icon.Database className="h-3.5 w-3.5" />
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

/** Home page summary of the technology, linking to the Technology page. */
export function TechnologySection({ lang }: { lang: Locale }) {
  const t = getDict(lang).tech;
  return (
    <section id="technology" className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-24">
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1">
          <p className="eyebrow-dark">{t.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{hl(t.title, "text-gradient-light")}</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">{t.intro}</p>
        </div>
        <div className="lg:col-span-6 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <TechHub lang={lang} />
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:self-start">
          <ul className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {keysOf(techIcons).map((k) => {
              const I = Icon[techIcons[k]];
              return (
                <li key={k} className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-brand ring-1 ring-white/15">
                    <I className="h-5 w-5" />
                  </span>
                  <span>
                    <h3 className="font-bold text-white">{t.items[k].title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-300">{t.items[k].text}</p>
                  </span>
                </li>
              );
            })}
          </ul>
          <Link
            href={lp(lang, "/technology/")}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 shadow-lg transition hover:bg-brand-50"
          >
            {t.explore} <Icon.Arrow className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
