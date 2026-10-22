import ProductPage, { productMetadata } from "@/components/ProductPage";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  return productMetadata((await params).lang as Locale, "payroll");
}

export default async function Page({ params }: Props) {
  return <ProductPage lang={(await params).lang as Locale} k="payroll" />;
}
