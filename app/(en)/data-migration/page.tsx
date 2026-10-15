import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";

export const metadata = serviceMetadata("en", "migration");

export default function Page() {
  return <ServicePage lang="en" k="migration" />;
}
