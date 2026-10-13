import CompanyPage, { companyPageMetadata } from "@/components/pages/CompanyPage";

export const metadata = companyPageMetadata("en", "useCases");

export default function Page() {
  return <CompanyPage lang="en" page="useCases" />;
}
