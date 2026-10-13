import Link from "next/link";
import { getDict } from "@/content";
import { getLegal } from "@/content/legal";
import { htmlLang, localeName, locales, lp, type Locale } from "@/lib/i18n";
import { companyPages, emailLink, site, systems, whatsappLink } from "@/lib/site";
import { Icon } from "./Icons";

export default function Footer({ lang }: { lang: Locale }) {
  const t = getDict(lang);
  const f = t.footer;
  const legal = getLegal(lang).nav;
  const year = new Date().getFullYear();
  const link = "hover:text-brand-700";
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <img src="/images/logo.webp" alt={t.ui.logoAlt} width={150} height={48} className="h-10 w-auto" loading="lazy" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">{f.blurb}</p>
          <div className="mt-5 flex flex-col gap-3 text-sm font-semibold text-slate-800">
            <a href={whatsappLink(t.ui.whatsappMessage)} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-brand-700">
              <Icon.Whatsapp className="h-5 w-5 text-whatsapp" /> {site.whatsappDisplay}
            </a>
            <a href={emailLink(t.ui.emailSubject)} className="inline-flex items-center gap-2 hover:text-brand-700">
              <Icon.Mail className="h-5 w-5 text-brand-500" /> {site.email}
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">{f.useCases}</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {systems.map((s) => (
              <li key={s.key}>
                <Link className={link} href={lp(lang, s.path)}>{t.systems[s.key].name}</Link>
              </li>
            ))}
            <li><Link className={link} href={lp(lang, companyPages.customSystems)}>{f.custom}</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">{f.company}</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li><Link className={link} href={lp(lang, companyPages.about)}>{f.about}</Link></li>
            <li><Link className={link} href={lp(lang, companyPages.services)}>{f.services}</Link></li>
            <li><Link className={link} href={lp(lang, "/technology/")}>{f.technology}</Link></li>
            <li><Link className={link} href={lp(lang, companyPages.pricing)}>{f.pricing}</Link></li>
            <li><Link className={link} href={lp(lang, companyPages.faq)}>{f.faq}</Link></li>
            <li><Link className={link} href={lp(lang, companyPages.contact)}>{f.contact}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        {/* In one row from 1280px; until 1440px the right padding keeps the links clear of the floating WhatsApp button. */}
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between xl:pr-24 min-[1440px]:pr-8">
          <p>© {year} {site.name}. {f.rights} {f.tagline}</p>
          <div className="-mx-2 flex flex-col gap-2 whitespace-nowrap sm:flex-row sm:items-center sm:gap-3 xl:shrink-0">
            <ul className="flex items-center gap-1">
              {(["terms", "privacy"] as const).map((k) => (
                <li key={k}>
                  <Link href={lp(lang, `/${k}/`)} className="rounded-md px-2 py-1 font-semibold hover:text-brand-700">
                    {legal[k]}
                  </Link>
                </li>
              ))}
            </ul>
            <span aria-hidden="true" className="hidden h-4 w-px bg-slate-300 sm:block" />
            <ul className="flex items-center gap-1" aria-label={t.ui.language}>
              <li className="pl-2"><Icon.Globe className="h-4 w-4 text-slate-400" /></li>
              {locales.map((l) => (
                <li key={l}>
                  <a
                    href={lp(l, "/")}
                    hrefLang={htmlLang[l]}
                    lang={htmlLang[l]}
                    className={`rounded-md px-2 py-1 font-semibold ${l === lang ? "text-brand-700" : "hover:text-brand-700"}`}
                    aria-current={l === lang ? "true" : undefined}
                  >
                    {localeName[l]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
