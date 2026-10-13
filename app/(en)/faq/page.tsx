import CompanyPage, { companyPageMetadata } from "@/components/pages/CompanyPage";

export const metadata = companyPageMetadata("en", "faq");

export default function Page() {
  return <CompanyPage lang="en" page="faq" />;
}
