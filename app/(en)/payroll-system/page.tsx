import ProductPage, { productMetadata } from "@/components/ProductPage";

export const metadata = productMetadata("en", "payroll");

export default function Page() {
  return <ProductPage lang="en" k="payroll" />;
}
