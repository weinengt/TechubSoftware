import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { shots, shotSrc, type Shot } from "@/lib/shots";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const img = (...list: Shot[]) => list.map((s) => `${site.url}${shotSrc(s)}`);
  const page = (path: string, images: string[]) =>
    ({ url: `${site.url}${path}`, lastModified, changeFrequency: "monthly", priority: 0.9, images }) as const;
  return [
    { url: `${site.url}/`, lastModified, changeFrequency: "weekly", priority: 1,
      images: img(shots.salonCalendar, shots.whatsappSalon, shots.clinicDashboard, shots.faceChart, shots.spaCalendar, shots.beautyStock, shots.permissionsDesktop) },
    page("/clinic-management-system/", img(shots.clinicDashboard, shots.whatsappClinic, shots.queueTv, shots.medication, shots.bodyChart, shots.printouts, shots.clinicStock, shots.scanClinic, shots.clinicPermissions)),
    page("/salon-appointment-system/", img(shots.salonCalendar, shots.whatsappSalon, shots.salonCustomer, shots.salonPos, shots.salonStock, shots.scanSalon, shots.salonPermissions)),
    page("/beauty-appointment-system/", img(shots.beautyCalendar, shots.whatsappBeauty, shots.beautyPackage, shots.faceChart, shots.beautyPos, shots.beautyStock, shots.scanBeauty)),
    page("/spa-appointment-system/", img(shots.spaCalendar, shots.whatsappSpa, shots.spaPackage, shots.bodyChartSpa, shots.spaPos, shots.spaStock, shots.scanSpa, shots.spaPermissions)),
  ];
}
