import { posts } from "@/content/blog";
import BlogPostPage, { postMetadata } from "@/components/pages/BlogPostPage";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  return postMetadata("en", (await params).slug);
}

export default async function Page({ params }: Props) {
  return <BlogPostPage lang="en" slug={(await params).slug} />;
}
