import { fillAll } from "@/content";
import type { Locale } from "@/lib/i18n";
import en, { type ToolsDict } from "./en";
import ms from "./ms";
import zh from "./zh";

export type { ToolsDict };

const dicts: Record<Locale, ToolsDict> = { en: fillAll(en), ms: fillAll(ms), zh: fillAll(zh) };

/** The free tools' words in one language, with prices and contact details filled in. */
export const getTools = (lang: Locale): ToolsDict => dicts[lang];
