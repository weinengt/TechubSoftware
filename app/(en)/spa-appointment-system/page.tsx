import ProductPage, { productMetadata } from "@/components/ProductPage";

export const metadata = productMetadata("en", "spa");

export default function Page() {
  return <ProductPage lang="en" k="spa" />;
}
