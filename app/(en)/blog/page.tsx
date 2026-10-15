import BlogPage, { blogMetadata } from "@/components/pages/BlogPage";

export const metadata = blogMetadata("en");

export default function Page() {
  return <BlogPage lang="en" />;
}
