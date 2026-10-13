import type { Locale } from "@/lib/i18n";
import { shotFiles, type Shot, type ShotKey } from "@/lib/shots";
import { site } from "@/lib/site";
import en, { type Dict } from "./en";
import ms from "./ms";
import zh from "./zh";

export type { Dict };

// Values for the {placeholders} in the text files.
const values: Record<string, string> = {
  name: site.name,
  price: String(site.priceFrom),
  months: String(site.freeMonths),
  custom: String(site.customFrom),
  uptime: site.uptime,
  phone: site.whatsappDisplay,
  email: site.email,
};

/** Fills in {placeholders}; unknown ones (like {product}) are left for the page to fill. */
export const fill = (s: string, extra: Record<string, string> = {}) =>
  s.replace(/\{(\w+)\}/g, (m, k: string) => extra[k] ?? values[k] ?? m);

/** Fills in the {placeholders} in every string of a text object. */
export function fillAll<T>(v: T): T {
  if (typeof v === "string") return fill(v) as T;
  if (Array.isArray(v)) return v.map(fillAll) as T;
  if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, fillAll(x)])) as T;
  return v;
}

const dicts: Record<Locale, Dict> = { en: fillAll(en), ms: fillAll(ms), zh: fillAll(zh) };

/** All the text for one language, with prices and contact details filled in. */
export const getDict = (lang: Locale): Dict => dicts[lang];

// Every picture needs a title and alt text in the text files.
const titles: Record<ShotKey, { title: string; alt: string }> = en.shots;

const shotsByLang = {} as Record<Locale, Record<ShotKey, Shot>>;

/** The example screens with their titles and alt text in the given language. */
export function getShots(lang: Locale): Record<ShotKey, Shot> {
  if (!shotsByLang[lang]) {
    const text = getDict(lang).shots as typeof titles;
    shotsByLang[lang] = Object.fromEntries(
      (Object.keys(shotFiles) as ShotKey[]).map((k) => [k, { ...shotFiles[k], ...(text[k] ?? titles[k]) }]),
    ) as Record<ShotKey, Shot>;
  }
  return shotsByLang[lang];
}
