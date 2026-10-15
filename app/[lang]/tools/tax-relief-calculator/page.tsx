import ToolPage, { toolsMetadata } from "@/components/pages/ToolPage";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  return toolsMetadata((await params).lang as Locale, "tax");
}

export default async function Page({ params }: Props) {
  return <ToolPage lang={(await params).lang as Locale} k="tax" />;
}
