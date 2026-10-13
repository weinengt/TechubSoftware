import TechnologyPage, { techMetadata } from "@/components/pages/TechnologyPage";

export const metadata = techMetadata("en");

export default function Page() {
  return <TechnologyPage lang="en" />;
}
