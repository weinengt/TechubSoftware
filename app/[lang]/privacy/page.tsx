import LegalPage, { legalMetadata } from "@/components/pages/LegalPage";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  return legalMetadata((await params).lang as Locale, "privacy");
}

export default async function Page({ params }: Props) {
  return <LegalPage lang={(await params).lang as Locale} kind="privacy" />;
}
