import CompanyPage, { companyPageMetadata } from "@/components/pages/CompanyPage";

export const metadata = companyPageMetadata("en", "customSystems");

export default function Page() {
  return <CompanyPage lang="en" page="customSystems" />;
}
