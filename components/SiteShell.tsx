import type { ReactNode } from "react";
import { getDict } from "@/content";
import { htmlLang, lp, type Locale } from "@/lib/i18n";
import { companyPages, emailLink, nav, servicePages, site, systems, whatsappLink } from "@/lib/site";
import Footer from "./Footer";
import Header, { type HeaderText } from "./Header";
import { LangProvider } from "./LangProvider";
import WhatsAppButton from "./WhatsAppButton";

const livePath = systems.find((s) => s.key === "live")!.path;

/** Header, footer and WhatsApp button around every page, in the page's language. */
export default function SiteShell({ lang, children }: { lang: Locale; children: ReactNode }) {
  const t = getDict(lang);
  const whatsapp = whatsappLink(t.ui.whatsappMessage);
  const header: HeaderText = {
    homeHref: lp(lang, "/"),
    nav: nav.map((n) => ({ key: n.key, href: lp(lang, n.path), label: t.nav[n.key], menu: "menu" in n ? n.menu : undefined })),
    systems: systems.map((s) => ({ key: s.key, href: lp(lang, s.path), icon: s.icon, label: t.systems[s.key].label, blurb: t.systems[s.key].blurb })),
    services: servicePages.map((s) => ({
      key: s.key, href: lp(lang, s.path), icon: s.icon, label: t.servicePages[s.key].label, blurb: t.servicePages[s.key].blurb,
    })),
    menu: {
      ...t.menu,
      otherHref: lp(lang, companyPages.customSystems),
      allHref: lp(lang, companyPages.useCases),
      systemsTitle: t.servicePages.menuSystems,
      servicesTitle: t.servicePages.menuServices,
    },
    ui: t.ui,
    whatsapp: { href: whatsapp, label: `WhatsApp ${site.whatsappDisplay}` },
    email: { href: emailLink(t.ui.emailSubject), label: site.email },
  };
  return (
    <LangProvider lang={lang} htmlLang={htmlLang[lang]} enlarge={t.ui.enlarge}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        {t.ui.skip}
      </a>
      <Header lang={lang} t={header} />
      <main id="main">{children}</main>
      <Footer lang={lang} />
      <WhatsAppButton
        t={{
          href: whatsapp,
          ...t.bubble,
          live: { path: lp(lang, livePath), href: whatsappLink(t.products.live.demoMessage), text: t.bubble.liveText },
        }}
      />
    </LangProvider>
  );
}
