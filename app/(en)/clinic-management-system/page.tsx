import ProductPage, { productMetadata } from "@/components/ProductPage";

export const metadata = productMetadata("en", "clinic");

export default function Page() {
  return <ProductPage lang="en" k="clinic" />;
}
