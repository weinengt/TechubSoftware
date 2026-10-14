import type { MetadataRoute } from "next";
import { demoShots } from "@/components/demoScenes";
import { locales, lp } from "@/lib/i18n";
import { languageAlternates } from "@/lib/seo";
import { shotFiles, shotSrc, type ShotKey } from "@/lib/shots";
import { site } from "@/lib/site";

export const dynamic = "force-static";

// The main pictures on each page, so they can show in image search.
const pages: { path: string; priority: number; images: ShotKey[] }[] = [
  {
    path: "/",
    priority: 1,
    images: [
      ...demoShots("home"),
      "salonCalendar", "permissionsDesktop", "queueTv", "clinicDashboard", "faceChart", "erpDesktop", "objectDetection", "plateScanner", "whatsappSalon",
    ],
  },
  { path: "/technology/", priority: 0.9, images: ["reportsClinic", "permissionsDesktop", "clinicStock", "scanClinic", "whatsappClinic", "queueTv", "eInvoice", "clinicPermissions"] },
  {
    path: "/clinic-management-system/",
    priority: 0.9,
    images: ["clinicDashboard", "whatsappClinic", "queueTv", "medication", "bodyChart", "printouts", "clinicStock", "reportsClinic", "clinicPermissions"],
  },
  {
    path: "/salon-appointment-system/",
    priority: 0.9,
    images: ["salonCalendar", "whatsappSalon", "payrollSalon", "staffSalon", "salonCustomer", "salonPos", "salonStock", "reportsSalon", "salonPermissions"],
  },
  {
    path: "/beauty-appointment-system/",
    priority: 0.9,
    images: ["beautyCalendar", "whatsappBeauty", "beautyPackage", "payrollBeauty", "staffBeauty", "faceChart", "beautyPos", "beautyStock", "reportsBeauty", "beautyPermissions"],
  },
  {
    path: "/spa-appointment-system/",
    priority: 0.9,
    images: ["spaCalendar", "whatsappSpa", "payrollSpa", "staffSpa", "spaPackage", "bodyChartSpa", "spaPos", "spaStock", "reportsSpa"],
  },
  {
    path: "/live-selling-system/",
    priority: 0.9,
    images: ["liveDashboard", "liveShop", "liveQueue", "liveCheckout", "liveProduct", "liveProducts", "liveVisitors", "reportsLive", "livePermissions"],
  },
  {
    path: "/use-cases/",
    priority: 0.9,
    images: ["clinicDashboard", "whatsappClinic", "salonCalendar", "staffSalon", "faceChart", "beautyPackage", "spaCalendar", "spaPackage", "liveDashboard", "liveShop"],
  },
  { path: "/custom-systems/", priority: 0.8, images: ["erpDesktop", "objectDetection", "plateScanner"] },
  { path: "/services/", priority: 0.8, images: ["salonCalendar", "permissionsDesktop", "queueTv"] },
  { path: "/pricing/", priority: 0.8, images: [] },
  { path: "/about/", priority: 0.7, images: [] },
  { path: "/faq/", priority: 0.7, images: [] },
  { path: "/contact/", priority: 0.7, images: ["whatsappSalon"] },
  { path: "/terms/", priority: 0.3, images: [] },
  { path: "/privacy/", priority: 0.3, images: [] },
];

// Every page in every language, each listing its versions in the other languages.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const abs = (path: string) => `${site.url}${path}`;
  return pages.flatMap((p) =>
    locales.map((lang) => ({
      url: abs(lp(lang, p.path)),
      lastModified,
      changeFrequency: p.path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: lang === "en" ? p.priority : +(p.priority - 0.1).toFixed(1),
      alternates: { languages: Object.fromEntries(Object.entries(languageAlternates(p.path)).map(([k, v]) => [k, abs(v)])) },
      images: p.images.map((k) => abs(shotSrc(shotFiles[k]))),
    })),
  );
}
