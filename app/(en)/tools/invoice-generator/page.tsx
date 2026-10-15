import ToolPage, { toolsMetadata } from "@/components/pages/ToolPage";

export const metadata = toolsMetadata("en", "invoice");

export default function Page() {
  return <ToolPage lang="en" k="invoice" />;
}
