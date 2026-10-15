import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  return serviceMetadata((await params).lang as Locale, "customisation");
}

export default async function Page({ params }: Props) {
  return <ServicePage lang={(await params).lang as Locale} k="customisation" />;
}
