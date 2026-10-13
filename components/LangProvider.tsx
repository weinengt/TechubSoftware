"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

type LangInfo = { lang: Locale; enlarge: string };

const LangContext = createContext<LangInfo>({ lang: "en", enlarge: "Enlarge picture" });

/** Gives client components the page's language, and keeps <html lang> right after moving between pages. */
export function LangProvider({ lang, htmlLang, enlarge, children }: LangInfo & { htmlLang: string; children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = htmlLang;
  }, [htmlLang]);
  return <LangContext.Provider value={{ lang, enlarge }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
