import Link from "next/link";
import { getDict, getShots } from "@/content";
import {
  AboutSection,
  CustomSystemsSection,
  HighlightsSection,
  ServicesSection,
  TechnologySection,
  UseCasesSection,
  customSystems,
  services,
  useCaseShots,
} from "@/components/Company";
import { Icon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { FaqSection, PricingSection, getFeatures, softwareJsonLd } from "@/components/Sections";
import { ContactSection, DeviceFamily, FloatBadge } from "@/components/Showcase";
import { hl } from "@/components/Text";
import { lp, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { companyPages, site, systems, whatsappLink } from "@/lib/site";

export function homeMetadata(lang: Locale) {
  const m = getDict(lang).home.meta;
  return pageMetadata({ lang, path: "/", title: m.title, socialTitle: m.title, description: m.description, keywords: m.keywords, absoluteTitle: true });
}

export default function HomePage({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const h = d.home.hero;
  const shots = getShots(lang);
  const org = { "@id": `${site.url}/#organization` };
  return (
    <>
      <JsonLd
        data={[
          softwareJsonLd({
            lang,
            name: d.home.softwareName,
            description: d.home.meta.description,
            url: `${site.url}${lp(lang, "/")}`,
            category: d.home.softwareCategory,
            features: getFeatures(lang).map((f) => f.title),
            screenshots: [shots.clinicDashboardDesktop, ...systems.map((s) => shots[useCaseShots[s.key].tablet])],
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: d.home.useCasesListName,
            itemListElement: systems.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: d.systems[s.key].name,
              url: `${site.url}${lp(lang, s.path)}`,
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: d.home.servicesListName,
            itemListElement: [
              ...services.map((s) => d.services.items[s.key]),
              ...customSystems.map((c) => d.custom.items[c.key]),
            ].map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.title, description: s.text, provider: org, areaServed: "MY" },
            })),
          },
        ]}
      />

      {/* Hero: who we are */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 lg:pb-24">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" aria-hidden="true" />
        <div className="absolute -top-40 right-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-teal-brand/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
          <div className="lg:col-span-5">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-bold text-slate-800 shadow-sm ring-1 ring-slate-200 sm:text-sm">
              <Icon.Star className="h-4 w-4 shrink-0 fill-amber-400 text-amber-500" /> {h.badge}
            </p>
            <h1 className="mt-5 text-[2.5rem] leading-[1.08] font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
              {hl(h.title)}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{h.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={whatsappLink(d.ui.whatsappMessage)} target="_blank" rel="noopener" className="btn-primary !py-3.5 whitespace-nowrap">
                <Icon.Whatsapp className="h-5 w-5" /> {d.ui.getFreeDemo}
              </a>
              <Link href={lp(lang, companyPages.useCases)} className="btn-secondary !py-3.5 whitespace-nowrap">
                {h.secondary} <Icon.Arrow className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-4 flex items-start gap-2 text-sm font-medium text-slate-600">
              <Icon.Gift className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" /> {h.note}
            </p>
            <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-slate-200 pt-6">
              <div>
                <dt className="text-xs font-medium text-slate-500">{h.statUptime}</dt>
                <dd className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">{site.uptime}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">{h.statReports}</dt>
                <dd className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">{h.statReportsValue}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">{h.statFrom}</dt>
                <dd className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">
                  RM {site.priceFrom}
                  <span className="text-sm font-semibold text-slate-500">{h.perMonth}</span>
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7">
            <DeviceFamily
              main={shots.clinicDashboardDesktop}
              tablet={shots.salonCalendar}
              phone={shots.whatsappSpa}
              priority
              badge={<FloatBadge icon="Cloud">{h.deviceBadge}</FloatBadge>}
            />
          </div>
        </div>
      </section>

      <HighlightsSection lang={lang} />
      <AboutSection lang={lang} />
      <ServicesSection lang={lang} />
      <UseCasesSection lang={lang} />
      <CustomSystemsSection lang={lang} />
      <TechnologySection lang={lang} />
      <PricingSection lang={lang} />
      <FaqSection lang={lang} />
      <ContactSection lang={lang} />
    </>
  );
}
