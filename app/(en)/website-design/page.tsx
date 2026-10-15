import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("en", "website");

export default function Page() {
  return <ServicePage lang="en" k="website" />;
}
