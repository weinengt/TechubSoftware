import SiteShell from "@/components/SiteShell";

// English pages, at the root of the site.
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
