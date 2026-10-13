import type { Metadata } from "next";
import { htmlLang, locales, lp, ogLocale, type Locale } from "./i18n";
import { site } from "./site";

export const ogImage = { url: "/og-image.jpg", width: 1200, height: 630, alt: "Techub Software systems on iPad and phone" };

/** The same page in every language, for hreflang links (`x-default` is the English page). */
export function languageAlternates(path: string): Record<string, string> {
  return {
    ...Object.fromEntries(locales.map((l) => [htmlLang[l], lp(l, path)])),
    "x-default": lp("en", path),
  };
}

/**
 * Metadata for one page in one language: canonical URL, links to the other languages, and matching
 * Open Graph and Twitter tags so a shared link (WhatsApp, Facebook, LinkedIn) shows this page's title,
 * description and picture. `title` goes through the layout's "| Techub Software" template unless
 * `absoluteTitle` is set.
 */
export function pageMetadata(opts: {
  lang: Locale;
  path: string;
  title: string;
  socialTitle: string;
  description: string;
  keywords?: string[];
  absoluteTitle?: boolean;
}): Metadata {
  const url = lp(opts.lang, opts.path);
  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url, languages: languageAlternates(opts.path) },
    openGraph: {
      type: "website",
      locale: ogLocale[opts.lang],
      alternateLocale: locales.filter((l) => l !== opts.lang).map((l) => ogLocale[l]),
      siteName: site.name,
      url,
      title: opts.socialTitle,
      description: opts.description,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title: opts.socialTitle, description: opts.description, images: [ogImage.url] },
  };
}
