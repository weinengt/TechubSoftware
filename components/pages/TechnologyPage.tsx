import Link from "next/link";
import type { ReactNode } from "react";
import { getDict, getShots } from "@/content";
import { InfraDiagram, TechHub, UptimeRing, techIcons } from "@/components/Company";
import Device from "@/components/Device";
import { Icon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { CheckList, FaqSection, SectionHeading, breadcrumbJsonLd, faqJsonLd, getFeatures } from "@/components/Sections";
import { Combo, ContactSection, DeviceFamily, FeatureTiles, FloatBadge, PhoneShowcase, Spotlight } from "@/components/Showcase";
import { hl } from "@/components/Text";
import { htmlLang, lp, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import type { Shot, ShotKey } from "@/lib/shots";
import { companyPages, site, systems, whatsappLink } from "@/lib/site";

const path = "/technology/";

export function techMetadata(lang: Locale) {
  const m = getDict(lang).techPage.meta;
  return pageMetadata({ lang, path, title: m.title, socialTitle: m.socialTitle, description: m.description, keywords: m.keywords });
}

/** Queue TV with receipts and labels in front: the hardware Techub connects to. */
function HardwareVisual({ tv, paper }: { tv: Shot; paper: Shot }) {
  return (
    <div className="relative pb-14 sm:pb-16">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-brand-gradient opacity-[0.13] blur-3xl" aria-hidden="true" />
      <Device shot={tv} sizes="(min-width: 1024px) 560px, 88vw" className="mr-[10%]" />
      <div className="absolute right-0 bottom-0 w-[46%]">
        <Device shot={paper} sizes="(min-width: 1024px) 300px, 46vw" />
      </div>
    </div>
  );
}

export default function TechnologyPage({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.techPage;
  const s = t.spotlights;
  const shots = getShots(lang);
  const url = `${site.url}${lp(lang, path)}`;

  // The order of the rows on the page, each with its picture.
  const rows: { id: keyof typeof s; visual: ReactNode; cta?: { label: string; message: string } }[] = [
    { id: "servers", visual: <InfraDiagram lang={lang} /> },
    { id: "speed", visual: <Combo main={shots.reportsClinic} badge={<FloatBadge icon="Bolt">{s.speed.badge}</FloatBadge>} /> },
    { id: "realtime", visual: <DeviceFamily main={shots.permissionsDesktop} tablet={shots.beautyCalendar} phone={shots.whatsappBeauty} /> },
    {
      id: "ai",
      visual: <Combo main={shots.clinicStock} phone={shots.scanClinic} />,
      cta: { label: s.ai.cta, message: s.ai.ctaMessage },
    },
    {
      id: "whatsapp",
      visual: (
        <PhoneShowcase
          shot={shots.whatsappClinic}
          badges={[
            <FloatBadge key="a" icon="Whatsapp" tone="green">{s.whatsapp.badges[0]}</FloatBadge>,
            <FloatBadge key="b" icon="Check">{s.whatsapp.badges[1]}</FloatBadge>,
          ]}
        />
      ),
    },
    { id: "hardware", visual: <HardwareVisual tv={shots.queueTv} paper={shots.printouts} /> },
    { id: "einvoice", visual: <Combo main={shots.eInvoice} /> },
    { id: "security", visual: <Combo main={shots.clinicPermissions} /> },
  ];
  const screenshots: ShotKey[] = ["reportsClinic", "permissionsDesktop", "clinicStock", "whatsappClinic", "queueTv", "eInvoice", "clinicPermissions"];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: d.ui.home, url: `${site.url}${lp(lang, "/")}` },
            { name: t.crumb, url },
          ]),
          faqJsonLd(t.faqs),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: t.meta.socialTitle,
            description: t.meta.description,
            url,
            inLanguage: htmlLang[lang],
            about: { "@id": `${site.url}/#organization` },
            image: screenshots.map((k) => `${site.url}/images/screens/${shots[k].file}.webp`),
          },
        ]}
      />

      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 lg:pb-24">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <nav aria-label="Breadcrumb" className="rise mb-5 text-sm text-slate-500">
              <Link href={lp(lang, "/")} className="hover:text-brand-700">{d.ui.home}</Link> <span aria-hidden="true">/</span>{" "}
              <span className="text-slate-700">{t.crumb}</span>
            </nav>
            <h1 className="rise text-[2.5rem] leading-[1.08] font-extrabold tracking-tight text-slate-900 [--rise:70ms] sm:text-5xl lg:text-[3.4rem]">
              <span className="eyebrow h1-label !flex w-fit">{t.eyebrow}</span>
              <span className="mt-5 block">{hl(t.title)}</span>
            </h1>
            <p className="rise mt-5 max-w-xl text-lg leading-relaxed text-slate-600 [--rise:150ms]">{t.intro}</p>
            <div className="rise mt-8 flex flex-col gap-3 [--rise:230ms] sm:flex-row">
              <a href={whatsappLink(t.demoMessage)} target="_blank" rel="noopener" className="btn-primary !py-3.5">
                <Icon.Whatsapp className="h-5 w-5" /> {d.ui.getFreeDemo}
              </a>
              <Link href={lp(lang, companyPages.useCases)} className="btn-secondary !py-3.5">
                {t.seeUseCases} <Icon.Arrow className="h-4 w-4" />
              </Link>
            </div>
            <ul className="rise mt-10 flex flex-wrap gap-2 [--rise:310ms]">
              {(Object.keys(techIcons) as (keyof typeof techIcons)[]).map((k) => {
                const I = Icon[techIcons[k]];
                return (
                  <li key={k} className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                    <I className="h-4 w-4 text-brand-600" /> {d.tech.items[k].title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:col-span-6" data-reveal="zoom">
            <TechHub lang={lang} />
          </div>
        </div>
      </section>

      {rows.map((row, i) => (
        <section key={row.id} id={row.id} className={`overflow-hidden py-16 sm:py-20 ${i % 2 === 0 ? "bg-slate-50" : ""}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Spotlight
              eyebrow={s[row.id].eyebrow}
              title={s[row.id].title}
              points={s[row.id].points}
              reverse={i % 2 === 1}
              visual={row.visual}
              cta={row.cta}
            />
          </div>
        </section>
      ))}

      <section id="uptime" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <SectionHeading center={false} eyebrow={t.uptimeEyebrow} title={t.uptimeTitle} intro={t.uptimeIntro} />
            <CheckList items={t.uptimePoints} className="mt-8" />
          </div>
          <UptimeRing lang={lang} />
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t.featuresEyebrow} title={t.featuresTitle} />
          <FeatureTiles items={getFeatures(lang)} />
          <h2 className="mt-16 text-center text-sm font-bold tracking-wide text-slate-500 uppercase" data-reveal>{t.industries}</h2>
          <ul className="mx-auto mt-5 grid max-w-5xl gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {systems.map((sys) => {
              const I = Icon[sys.icon];
              return (
                <li key={sys.key} data-reveal>
                  <Link href={lp(lang, sys.path)} className="card group flex items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:ring-brand-200">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                      <I className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1 font-bold text-slate-900">{d.systems[sys.key].label}</span>
                    <Icon.Arrow className="h-4 w-4 text-brand-600 transition group-hover:translate-x-0.5" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <FaqSection lang={lang} items={t.faqs} />
      <ContactSection lang={lang} title={t.contactTitle} />
    </>
  );
}
