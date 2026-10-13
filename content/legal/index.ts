import { fillAll } from "@/content";
import type { Locale } from "@/lib/i18n";
import en, { type Legal } from "./en";
import ms from "./ms";
import zh from "./zh";

export type { Legal, LegalDoc, LegalSection } from "./en";

const docs: Record<Locale, Legal> = { en: fillAll(en), ms: fillAll(ms), zh: fillAll(zh) };

/** The Terms of Use and Privacy Policy in the given language, with contact details filled in. */
export const getLegal = (lang: Locale): Legal => docs[lang];
