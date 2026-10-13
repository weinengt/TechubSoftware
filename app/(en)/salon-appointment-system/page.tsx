import ProductPage, { productMetadata } from "@/components/ProductPage";

export const metadata = productMetadata("en", "salon");

export default function Page() {
  return <ProductPage lang="en" k="salon" />;
}
