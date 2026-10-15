import ToolPage, { toolsMetadata } from "@/components/pages/ToolPage";

export const metadata = toolsMetadata("en", "payroll");

export default function Page() {
  return <ToolPage lang="en" k="payroll" />;
}
