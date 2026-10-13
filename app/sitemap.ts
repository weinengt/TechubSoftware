import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { shots, shotSrc } from "@/lib/shots";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const img = (...list: (typeof shots)[keyof typeof shots][]) => list.map((s) => `${site.url}${shotSrc(s)}`);
  return [
    { url: `${site.url}/`, lastModified, changeFrequency: "weekly", priority: 1,
      images: img(shots.clinicDashboard, shots.customerPackage, shots.queueTv, shots.whatsappSpa, shots.printouts, shots.bodyChart, shots.inventory, shots.scanClinic) },
    { url: `${site.url}/clinic-management-system/`, lastModified, changeFrequency: "monthly", priority: 0.9,
      images: img(shots.clinicDashboard, shots.queueTv, shots.medication, shots.bodyChart, shots.printouts, shots.permissions) },
    { url: `${site.url}/spa-salon-appointment-system/`, lastModified, changeFrequency: "monthly", priority: 0.9,
      images: img(shots.spaCalendar, shots.customerPackage, shots.whatsappSpa, shots.bodyChartSpa, shots.scanSpa, shots.permissionsSpa) },
  ];
}
