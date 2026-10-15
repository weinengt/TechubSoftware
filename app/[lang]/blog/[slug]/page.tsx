import { posts } from "@/content/blog";
import BlogPostPage, { postMetadata } from "@/components/pages/BlogPostPage";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params;
  return postMetadata(lang as Locale, slug);
}

export default async function Page({ params }: Props) {
  const { lang, slug } = await params;
  return <BlogPostPage lang={lang as Locale} slug={slug} />;
}
