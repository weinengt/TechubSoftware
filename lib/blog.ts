import fs from "node:fs";
import path from "node:path";
import { fill } from "@/content";
import { posts, type PostInfo } from "@/content/blog";
import type { Locale } from "./i18n";

export type Faq = { q: string; a: string };

/** A post in one language: front matter, the body (Markdown, without the FAQ) and the FAQ questions. */
export type Post = PostInfo & { title: string; description: string; keywords: string[]; cta?: string; body: string; faqs: Faq[] };

const dir = path.join(process.cwd(), "content", "blog");

/** Joins lines into one paragraph, with no space between Chinese characters. */
const joinLines = (lines: string[]) =>
  lines
    .map((l) => l.trim())
    .join(" ")
    .replace(/([\u3000-\u9fff\uff00-\uffef])\s+(?=[\u3000-\u9fff\uff00-\uffef])/g, "$1")
    .trim();

/** The heading that starts a post's FAQ, in each language. Everything after it is "### question" + answer. */
const faqHeading = /^## (FAQ|Soalan lazim|常见问题)\s*$/m;

function read(lang: Locale, info: PostInfo): Post {
  const file = path.join(dir, info.slug, `${lang}.md`);
  const raw = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error(`${file}: no front matter`);
  const meta: Record<string, string> = Object.fromEntries(
    m[1].split("\n").map((l) => [l.slice(0, l.indexOf(":")).trim(), l.slice(l.indexOf(":") + 1).trim()]),
  );
  if (!meta.title || !meta.description) throw new Error(`${file}: needs a title and a description`);

  const text = fill(m[2].trim());
  const at = text.search(faqHeading);
  const body = at < 0 ? text : text.slice(0, at).trim();
  const faqs =
    at < 0
      ? []
      : text
          .slice(at)
          .split(/^### /m)
          .slice(1)
          .map((block) => {
            const [q, ...a] = block.trim().split("\n");
            // Answers are plain text (they also go in the FAQPage structured data), so a link keeps only its words
            return { q: q.trim(), a: joinLines(a).replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1").replace(/\*\*(.+?)\*\*/g, "$1") };
          });
  return {
    ...info,
    image: (lang !== "en" && info.images?.[lang]) || info.image,
    title: fill(meta.title),
    description: fill(meta.description),
    keywords: (meta.keywords ?? "").split(",").map((k) => k.trim()).filter(Boolean),
    cta: meta.cta ? fill(meta.cta) : undefined,
    body,
    faqs,
  };
}

const cache = new Map<string, Post>();

/** One post in one language. */
export function getPost(lang: Locale, slug: string): Post {
  const key = `${lang}/${slug}`;
  if (!cache.has(key)) {
    const info = posts.find((p) => p.slug === slug);
    if (!info) throw new Error(`No blog post ${slug}`);
    cache.set(key, read(lang, info));
  }
  return cache.get(key)!;
}

/** Every post in one language, newest first. */
export const getPosts = (lang: Locale) => posts.map((p) => getPost(lang, p.slug));
