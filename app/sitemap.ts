import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${site.url}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/clinic-management-system/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/spa-salon-appointment-system/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];
}
