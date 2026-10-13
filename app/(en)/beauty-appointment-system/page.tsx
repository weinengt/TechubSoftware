import ProductPage, { productMetadata } from "@/components/ProductPage";

export const metadata = productMetadata("en", "beauty");

export default function Page() {
  return <ProductPage lang="en" k="beauty" />;
}
