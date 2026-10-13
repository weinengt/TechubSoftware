import CompanyPage, { companyPageMetadata } from "@/components/pages/CompanyPage";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  return companyPageMetadata((await params).lang as Locale, "faq");
}

export default async function Page({ params }: Props) {
  return <CompanyPage lang={(await params).lang as Locale} page="faq" />;
}
