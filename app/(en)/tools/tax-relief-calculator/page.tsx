import ToolPage, { toolsMetadata } from "@/components/pages/ToolPage";

export const metadata = toolsMetadata("en", "tax");

export default function Page() {
  return <ToolPage lang="en" k="tax" />;
}
