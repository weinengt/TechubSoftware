import Link from "next/link";
import { fill, getDict, getShots } from "@/content";
import { blogPath, postPath } from "@/content/blog";
import Demo from "@/components/Demo";
import Device from "@/components/Device";
import { Icon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import Markdown, { Inline } from "@/components/Markdown";
import { PostCard, postLabel } from "@/components/pages/BlogPage";
import { FaqList, breadcrumbJsonLd, faqJsonLd, pageTop } from "@/components/Sections";
import { getPost, getPosts } from "@/lib/blog";
import { htmlLang, lp, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { shotSrc } from "@/lib/shots";
import { site, systems, whatsappLink } from "@/lib/site";

const heroSizes = { tablet: "(min-width: 1024px) 940px, 92vw", phone: "(min-width: 1024px) 208px, 27vw" };

export function postMetadata(lang: Locale, slug: string) {
  const p = getPost(lang, slug);
  const s = getShots(lang)[p.image];
  const m = pageMetadata({ lang, path: postPath(slug), title: p.title, socialTitle: p.title, description: p.description, keywords: p.keywords });
  const image = { url: shotSrc(s), width: s.w, height: s.h, alt: s.alt };
  return {
    ...m,
    openGraph: { ...m.openGraph, type: "article" as const, publishedTime: p.date, images: [image] },
    twitter: { ...m.twitter, images: [image.url] },
  };
}

/** One blog post: title, the moving picture of the system it is about, the guide, its questions, a way to get
 *  a demo, and other posts. */
export default function BlogPostPage({ lang, slug }: { lang: Locale; slug: string }) {
  const d = getDict(lang);
  const p = getPost(lang, slug);
  const label = postLabel(lang, p);
  const sys = p.system ? systems.find((s) => s.key === p.system)! : null;
  const product = p.system ? d.systems[p.system].name : undefined;
  // A system priced by quote (Inventory & ERP, Payroll & HR) shows no price under the demo button.
  const quoted = p.system ? "quote" in d.products[p.system] : false;
  const url = `${site.url}${lp(lang, postPath(slug))}`;
  const blogUrl = `${site.url}${lp(lang, blogPath)}`;
  const image = getShots(lang)[p.image];

  // The first paragraph sits under the title; the rest of the guide follows the picture.
  const [lead, ...rest] = p.body.split(/\n\s*\n/);
  const date = new Intl.DateTimeFormat(htmlLang[lang], { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kuala_Lumpur" }).format(
    new Date(`${p.date}T12:00:00+08:00`),
  );
  const others = getPosts(lang)
    .filter((o) => o.slug !== slug)
    .sort((a, b) => Number(b.system === p.system) - Number(a.system === p.system))
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: d.ui.home, url: `${site.url}${lp(lang, "/")}` },
            { name: d.nav.blog, url: blogUrl },
            { name: p.title, url },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: p.title,
            description: p.description,
            url,
            mainEntityOfPage: url,
            inLanguage: htmlLang[lang],
            datePublished: p.date,
            dateModified: p.date,
            image: `${site.url}${shotSrc(image)}`,
            author: { "@id": `${site.url}/#organization` },
            publisher: { "@id": `${site.url}/#organization` },
            isPartOf: { "@id": `${blogUrl}#blog` },
          },
          ...(p.faqs.length ? [faqJsonLd(p.faqs)] : []),
        ]}
      />

      <article className="overflow-x-clip">
        <header className={`mx-auto max-w-3xl px-4 ${pageTop} sm:px-6 lg:px-8`}>
          <nav aria-label="Breadcrumb" className="rise mb-5 text-sm text-slate-500">
            <Link href={lp(lang, "/")} className="hover:text-brand-700">{d.ui.home}</Link> <span aria-hidden="true">/</span>{" "}
            <Link href={lp(lang, blogPath)} className="hover:text-brand-700">{d.nav.blog}</Link>
          </nav>
          <p className="rise eyebrow [--rise:40ms]">{label}</p>
          <h1 className="rise mt-4 text-3xl leading-tight font-extrabold tracking-tight text-balance text-slate-900 [--rise:80ms] sm:text-5xl">{p.title}</h1>
          <p className="rise mt-4 text-sm text-slate-500 [--rise:120ms]">
            <time dateTime={p.date}>{date}</time>
          </p>
          <p className="rise mt-6 text-lg leading-relaxed text-slate-700 [--rise:170ms]">
            <Inline text={lead} />
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-8">
          {p.demo ? (
            <Demo lang={lang} demo={p.demo} start={p.start} layout="combo" product={product} priority sizes={heroSizes} />
          ) : (
            <Device shot={image} priority sizes="(min-width: 1024px) 976px, 92vw" className="overflow-hidden rounded-2xl shadow-[0_30px_60px_-25px_rgb(11_47_85/0.45)]" />
          )}
        </div>

        <div className="mx-auto mt-14 max-w-3xl px-4 sm:px-6 lg:px-8">
          <Markdown text={rest.join("\n\n")} />

          {p.faqs.length > 0 && (
            <section className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900" data-reveal>{d.blog.faqTitle}</h2>
              <FaqList lang={lang} items={p.faqs} className="mt-6" />
            </section>
          )}

          <div className="card mt-14 p-6 sm:p-8" data-reveal>
            <h2 className="text-xl font-bold text-slate-900">{d.blog.ctaTitle}</h2>
            <p className="mt-2 leading-relaxed text-slate-600">{p.cta ?? d.blog.ctaText}</p>
            {!quoted && (
              <p className="mt-2 text-sm font-semibold text-slate-800">{p.system === "live" ? d.ui.livePriceLine : `${d.ui.priceLine} · ${d.ui.freeMonths}`}</p>
            )}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink(p.system ? d.products[p.system].demoMessage : d.ui.whatsappMessage)} target="_blank" rel="noopener" className="btn-primary">
                <Icon.Whatsapp className="h-5 w-5" /> {p.system === "live" ? d.ui.requestDemo : d.ui.bookFreeDemo}
              </a>
              {sys && p.system && (
                <Link href={lp(lang, sys.path)} className="btn-secondary">
                  <span className="sm:hidden">{d.pricing.liveSee}</span>
                  <span className="hidden sm:inline">{fill(d.blog.system, { product: d.systems[p.system].label })}</span>
                  <Icon.Arrow className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>

      <section className="mt-20 bg-slate-50 py-16 sm:mt-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900" data-reveal>{d.blog.more}</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug} data-reveal>
                <PostCard lang={lang} post={o} />
              </li>
            ))}
          </ul>
          <p className="mt-8" data-reveal>
            <Link href={lp(lang, blogPath)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline">
              {d.nav.blog} <Icon.Arrow className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
