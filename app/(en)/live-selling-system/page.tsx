import ProductPage, { productMetadata } from "@/components/ProductPage";

export const metadata = productMetadata("en", "live");

export default function Page() {
  return <ProductPage lang="en" k="live" />;
}
