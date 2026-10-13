import TechnologyPage, { techMetadata } from "@/components/pages/TechnologyPage";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  return techMetadata((await params).lang as Locale);
}

export default async function Page({ params }: Props) {
  return <TechnologyPage lang={(await params).lang as Locale} />;
}
