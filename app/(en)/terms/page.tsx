import LegalPage, { legalMetadata } from "@/components/pages/LegalPage";

export const metadata = legalMetadata("en", "terms");

export default function Page() {
  return <LegalPage lang="en" kind="terms" />;
}
