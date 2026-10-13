import { getDict, type Dict } from "@/content";
import {
  AboutSection,
  CustomSystemsSection,
  HighlightsSection,
  HowWeWorkSection,
  ServicesSection,
  TechnologySection,
  UseCasesList,
  UseCasesSection,
} from "@/components/Company";
import JsonLd from "@/components/JsonLd";
import { FaqSection, HardwareSection, PricingSection, breadcrumbJsonLd, faqJsonLd } from "@/components/Sections";
import { ContactSection } from "@/components/Showcase";
import { lp, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { companyPages, site, systems, type CompanyPageKey } from "@/lib/site";

/** Each page's name in the breadcrumb: the same words as its menu or footer link. */
const pageName = (d: Dict, page: CompanyPageKey) =>
  ({
    useCases: d.nav.useCases,
    customSystems: d.footer.custom,
    services: d.nav.services,
    pricing: d.nav.pricing,
    about: d.footer.about,
    faq: d.footer.faq,
    contact: d.nav.contact,
  })[page];

export function companyPageMetadata(lang: Locale, page: CompanyPageKey) {
  const d = getDict(lang);
  const m = d.pages[page].meta;
  return pageMetadata({ lang, path: companyPages[page], title: m.title, socialTitle: `${pageName(d, page)} | ${site.name}`, description: m.description });
}

/** Use Cases, Custom Systems, Services, Pricing, About, FAQ and Contact: one part of the company per page,
 *  then a way to get in touch. */
export default function CompanyPage({ lang, page }: { lang: Locale; page: CompanyPageKey }) {
  const d = getDict(lang);
  const name = pageName(d, page);
  const of = { lang, crumb: name };
  const url = `${site.url}${lp(lang, companyPages[page])}`;
  const data: Record<string, unknown>[] = [
    breadcrumbJsonLd([
      { name: d.ui.home, url: `${site.url}${lp(lang, "/")}` },
      { name, url },
    ]),
  ];
  if (page === "faq") data.push(faqJsonLd(d.faq.items));
  if (page === "useCases")
    data.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: d.home.useCasesListName,
      itemListElement: systems.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: d.systems[s.key].name, url: `${site.url}${lp(lang, s.path)}` })),
    });

  return (
    <>
      <JsonLd data={data} />
      {page === "useCases" && <UseCasesList lang={lang} page={of} />}
      {page === "customSystems" && (
        <>
          <CustomSystemsSection lang={lang} page={of} />
          <HowWeWorkSection lang={lang} />
        </>
      )}
      {page === "services" && (
        <>
          <ServicesSection lang={lang} page={of} />
          <HardwareSection lang={lang} />
        </>
      )}
      {page === "pricing" && (
        <>
          <PricingSection lang={lang} page={of} />
          <HighlightsSection lang={lang} />
        </>
      )}
      {page === "about" && (
        <>
          <AboutSection lang={lang} page={of} />
          <HighlightsSection lang={lang} />
          <UseCasesSection lang={lang} />
          <TechnologySection lang={lang} />
        </>
      )}
      {page === "faq" && <FaqSection lang={lang} page={of} />}
      {page === "contact" ? (
        <>
          <ContactSection lang={lang} page={of} />
          <HowWeWorkSection lang={lang} />
        </>
      ) : (
        <ContactSection lang={lang} />
      )}
    </>
  );
}
