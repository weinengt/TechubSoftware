import Link from "next/link";
import { getDict, getShots } from "@/content";
import { blogPath, postPath } from "@/content/blog";
import { Icon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { SectionHeading, breadcrumbJsonLd, pageTop } from "@/components/Sections";
import { getPosts, type Post } from "@/lib/blog";
import { htmlLang, lp, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { shotSrcSet, shotSrcSm } from "@/lib/shots";
import { site } from "@/lib/site";

export function blogMetadata(lang: Locale) {
  const d = getDict(lang);
  return pageMetadata({ lang, path: blogPath, title: d.blog.meta.title, socialTitle: `${d.nav.blog} | ${site.name}`, description: d.blog.meta.description });
}

/** The small label above a post's title: the system it is about. */
export const postLabel = (lang: Locale, p: Post) => {
  const d = getDict(lang);
  return p.system ? d.systems[p.system].name : d.blog.allSystems;
};

/** A post's card: its picture, label, title and description, all one link to the post. */
export function PostCard({ lang, post, eager = false, heading: H = "h3" }: { lang: Locale; post: Post; eager?: boolean; heading?: "h2" | "h3" }) {
  const d = getDict(lang);
  const s = getShots(lang)[post.image];
  // Phone screens stand whole on a soft background; wide screens fill the picture from the top.
  const tall = s.kind === "phone";
  return (
    <Link href={lp(lang, postPath(post.slug))} className="card group flex h-full flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className={`aspect-[16/10] overflow-hidden ${tall ? "bg-gradient-to-br from-brand-50 to-slate-100 px-6 pt-5" : "bg-slate-100"}`}>
        <img
          src={shotSrcSm(s)}
          srcSet={shotSrcSet(s)}
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          alt={s.alt}
          width={s.w}
          height={s.h}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={`transition duration-500 group-hover:scale-[1.03] ${tall ? "mx-auto h-[140%] w-auto rounded-t-2xl object-cover object-top shadow-lg ring-1 ring-slate-200" : "h-full w-full object-cover object-top"}`}
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold tracking-wide text-brand-600 uppercase">{postLabel(lang, post)}</p>
        <H className="mt-2 text-lg leading-snug font-bold text-slate-900">{post.title}</H>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{post.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
          {d.blog.read} <Icon.Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

/** The Blog page: every post as a card, newest first. */
export default function BlogPage({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const list = getPosts(lang);
  const url = `${site.url}${lp(lang, blogPath)}`;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: d.ui.home, url: `${site.url}${lp(lang, "/")}` },
            { name: d.nav.blog, url },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${url}#blog`,
            name: d.blog.listName,
            description: d.blog.meta.description,
            url,
            inLanguage: htmlLang[lang],
            publisher: { "@id": `${site.url}/#organization` },
            blogPost: list.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              description: p.description,
              url: `${site.url}${lp(lang, postPath(p.slug))}`,
              datePublished: p.date,
            })),
          },
        ]}
      />
      <section className={`${pageTop} pb-20 sm:pb-24`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={d.blog.eyebrow} title={d.blog.title} intro={d.blog.intro} page={{ lang, crumb: d.nav.blog }} />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <li key={p.slug} data-reveal>
                <PostCard lang={lang} post={p} eager={i < 3} heading="h2" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
