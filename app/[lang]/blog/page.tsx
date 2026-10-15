import BlogPage, { blogMetadata } from "@/components/pages/BlogPage";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  return blogMetadata((await params).lang as Locale);
}

export default async function Page({ params }: Props) {
  return <BlogPage lang={(await params).lang as Locale} />;
}
