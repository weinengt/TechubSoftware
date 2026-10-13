import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import { isLocale, locales } from "@/lib/i18n";

// Bahasa Melayu (/ms/) and Chinese (/zh/) pages. They use the same page components as English.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.filter((l) => l !== "en").map((lang) => ({ lang }));
}

export default async function LanguageLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang) || lang === "en") notFound();
  return <SiteShell lang={lang}>{children}</SiteShell>;
}
