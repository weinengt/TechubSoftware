import Link from "next/link";
import { getDict } from "@/content";
import { getLegal, type Legal } from "@/content/legal";
import { Icon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/components/Sections";
import { htmlLang, lp, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { emailLink, site, whatsappLink } from "@/lib/site";

export type LegalKind = "terms" | "privacy";

export const legalPaths: Record<LegalKind, string> = { terms: "/terms/", privacy: "/privacy/" };

export function legalMetadata(lang: Locale, kind: LegalKind) {
  const doc = getLegal(lang)[kind];
  return pageMetadata({
    lang,
    path: legalPaths[kind],
    title: doc.meta.title,
    socialTitle: `${doc.title} | ${site.name}`,
    description: doc.meta.description,
  });
}

const contactPattern = new RegExp(`(${[site.whatsappDisplay, site.email].map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`);

/** Shows our WhatsApp number and email address inside the text as links (the number never splits across lines). */
function withContactLinks(text: string, l: Legal) {
  return text.split(contactPattern).map((part, i) =>
    part === site.whatsappDisplay ? (
      <a key={i} href={whatsappLink(l.whatsappMessage)} target="_blank" rel="noopener" className="whitespace-nowrap font-medium text-brand-700 hover:underline">
        {part}
      </a>
    ) : part === site.email ? (
      <a key={i} href={emailLink(l.emailSubject)} className="font-medium text-brand-700 hover:underline">
        {part}
      </a>
    ) : (
      part
    ),
  );
}

/** Terms of Use or Privacy Policy: numbered sections of plain text, then a way to ask us questions. */
export default function LegalPage({ lang, kind }: { lang: Locale; kind: LegalKind }) {
  const d = getDict(lang);
  const l = getLegal(lang);
  const doc = l[kind];
  const other: LegalKind = kind === "terms" ? "privacy" : "terms";
  const url = `${site.url}${lp(lang, legalPaths[kind])}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: d.ui.home, url: `${site.url}${lp(lang, "/")}` },
            { name: doc.title, url },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: doc.title,
            description: doc.meta.description,
            url,
            inLanguage: htmlLang[lang],
            publisher: { "@id": `${site.url}/#organization` },
          },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 pt-24 pb-20 sm:px-6 sm:pt-32 sm:pb-24 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-500">
          <Link href={lp(lang, "/")} className="hover:text-brand-700">{d.ui.home}</Link> <span aria-hidden="true">/</span>{" "}
          <span className="text-slate-700">{doc.title}</span>
        </nav>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{doc.title}</h1>
        <p className="mt-3 text-sm text-slate-500">
          {l.updatedLabel}: {l.updated}
        </p>
        {l.translationNote && <p className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-600 ring-1 ring-slate-200">{l.translationNote}</p>}
        <p className="mt-6 text-lg leading-relaxed text-slate-700">{doc.intro}</p>

        <div className="mt-10 space-y-9">
          {doc.sections.map((s, i) => (
            <section key={s.title}>
              <h2 className="text-xl font-bold text-slate-900">
                <span className="text-brand-600">{i + 1}.</span> {s.title}
              </h2>
              {s.body.map((b, j) =>
                typeof b === "string" ? (
                  <p key={j} className="mt-3 leading-relaxed text-slate-600">{withContactLinks(b, l)}</p>
                ) : (
                  <ul key={j} className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate-600 marker:text-brand-500">
                    {b.map((item) => (
                      <li key={item}>{withContactLinks(item, l)}</li>
                    ))}
                  </ul>
                ),
              )}
            </section>
          ))}
        </div>

        <div className="card mt-14 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900">{l.contactTitle}</h2>
          <p className="mt-2 leading-relaxed text-slate-600">{l.contactText}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink(l.whatsappMessage)} target="_blank" rel="noopener" className="btn-primary">
              <Icon.Whatsapp className="h-5 w-5" /> {l.whatsapp}
            </a>
            <a href={emailLink(l.emailSubject)} className="btn-secondary">
              <Icon.Mail className="h-5 w-5" /> {l.email}
            </a>
          </div>
        </div>

        <p className="mt-8">
          <Link href={lp(lang, legalPaths[other])} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline">
            {l.nav[other]} <Icon.Arrow className="h-4 w-4" />
          </Link>
        </p>
      </article>
    </>
  );
}
