import type { MetadataRoute } from "next";
import { demoShots } from "@/components/demoScenes";
import { blogPath, postPath, posts } from "@/content/blog";
import { locales, lp } from "@/lib/i18n";
import { languageAlternates } from "@/lib/seo";
import { shotFiles, shotSrc, type ShotKey } from "@/lib/shots";
import { pagePaths, site } from "@/lib/site";

export const dynamic = "force-static";

type Page = { path: string; priority: number; images: ShotKey[] };

// The main pictures on each page, so they can show in image search.
const listed: Page[] = [
  {
    path: "/",
    priority: 1,
    images: [
      ...demoShots("home"),
      "salonCalendar", "permissionsDesktop", "queueTv", "clinicDashboard", "faceChart", "erpDesktop", "objectDetection", "plateScanner", "whatsappSalon",
    ],
  },
  {
    path: "/technology/",
    priority: 0.9,
    images: [
      "reportsClinic", "siteTreatments", "permissionsDesktop", "clinicStock", "scanClinic", "stockTrail", "stockScan", "migrationScan", "whatsappClinic", "queueTv",
      "eInvoice", "erpReturn", "clinicPermissions",
    ],
  },
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
    path: "/inventory-management-system/",
    priority: 0.9,
    images: ["inventoryDashboard", "stockScan", "stockIn", "stockTrail", "barcodeLabels", "erpSales", "erpReturn", "reportsInventory", "inventoryPermissions"],
  },
  {
    path: "/payroll-system/",
    priority: 0.9,
    images: ["hrPayroll", "payslipPhone", "hrContributions", "leaveClaims", "reportsPayroll", "payrollPermissions"],
  },
  {
    path: "/use-cases/",
    priority: 0.9,
    images: [
      "clinicDashboard", "whatsappClinic", "salonCalendar", "staffSalon", "faceChart", "beautyPackage", "spaCalendar", "spaPackage", "liveDashboard", "liveShop",
      "stockTrail", "stockScan", "hrPayroll", "payslipPhone",
    ],
  },
  {
    path: "/software-customisation/",
    priority: 0.8,
    images: ["customEstimate", "customRequest", "customTesting", "customClaims", "customSalesExport", "customFoundUs", "customCourier"],
  },
  { path: "/data-migration/", priority: 0.8, images: ["migrationImport", "migrationScan", "migrationCheck", "migrationDone", "migrationChat"] },
  { path: "/business-email/", priority: 0.8, images: ["emailInbox", "emailPhone", "emailSetup"] },
  {
    path: "/website-design/",
    priority: 0.8,
    images: ["siteHome", "siteTreatments", "siteContact", "sitePhone", "siteDental", "siteCafe", "siteHomestay", "siteInterior", "siteAccounting"],
  },
  { path: "/custom-systems/", priority: 0.8, images: ["erpDesktop", "objectDetection", "plateScanner"] },
  { path: "/services/", priority: 0.8, images: ["salonCalendar", "permissionsDesktop", "queueTv"] },
  { path: "/pricing/", priority: 0.8, images: [] },
  { path: "/about/", priority: 0.7, images: [] },
  { path: "/faq/", priority: 0.7, images: [] },
  { path: blogPath, priority: 0.7, images: posts.map((p) => p.image) },
  ...posts.map((p) => ({ path: postPath(p.slug), priority: 0.7, images: [p.image] })),
  { path: "/contact/", priority: 0.7, images: ["whatsappSalon"] },
  { path: "/terms/", priority: 0.3, images: [] },
  { path: "/privacy/", priority: 0.3, images: [] },
];

// Every page goes in the sitemap so search engines find it (tt's rule): a page in lib/site.ts pagePaths that the list
// above leaves out is still added, without pictures.
const pages: Page[] = [...listed, ...pagePaths.filter((path) => !listed.some((p) => p.path === path)).map((path) => ({ path, priority: 0.7, images: [] }))];

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
