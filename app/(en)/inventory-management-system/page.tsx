import ProductPage, { productMetadata } from "@/components/ProductPage";

export const metadata = productMetadata("en", "inventory");

export default function Page() {
  return <ProductPage lang="en" k="inventory" />;
}
