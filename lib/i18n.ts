// The site's languages. English lives at the root (/), Bahasa Melayu under /ms/ and Simplified Chinese under /zh/.
// The text for each language is in content/<code>.ts.

export const locales = ["en", "ms", "zh"] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

/** URL prefix of each language. */
export const localePrefix: Record<Locale, string> = { en: "", ms: "/ms", zh: "/zh" };

/** Language tag for <html lang> and hreflang links. */
export const htmlLang: Record<Locale, string> = { en: "en-MY", ms: "ms-MY", zh: "zh-Hans" };

/** Locale for Open Graph (social sharing) tags. */
export const ogLocale: Record<Locale, string> = { en: "en_MY", ms: "ms_MY", zh: "zh_MY" };

/** Each language's own name, for the language switch. */
export const localeName: Record<Locale, string> = { en: "English", ms: "Bahasa Melayu", zh: "中文" };
export const localeShort: Record<Locale, string> = { en: "EN", ms: "BM", zh: "中文" };

/** A site path in the given language: lp("ms", "/technology/") is "/ms/technology/". */
export const lp = (lang: Locale, path: string) => `${localePrefix[lang]}${path}`;

/** The language of a URL path, and the path without its language prefix. */
export function splitPath(pathname: string): { lang: Locale; path: string } {
  const m = pathname.match(/^\/(ms|zh)(?=\/|$)/);
  const lang: Locale = m ? (m[1] as Locale) : "en";
  let path = m ? pathname.slice(m[0].length) : pathname;
  if (!path.startsWith("/")) path = `/${path}`;
  if (!path.endsWith("/")) path = `${path}/`;
  return { lang, path };
}
