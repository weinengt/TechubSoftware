import LegalPage, { legalMetadata } from "@/components/pages/LegalPage";

export const metadata = legalMetadata("en", "privacy");

export default function Page() {
  return <LegalPage lang="en" kind="privacy" />;
}
