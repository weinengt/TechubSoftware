import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("en", "customisation");

export default function Page() {
  return <ServicePage lang="en" k="customisation" />;
}
