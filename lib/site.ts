// Company details. Change values here and every page, language, metadata tag, JSON-LD block and
// sitemap entry picks them up. The words on the pages are in content/en.ts, ms.ts and zh.ts.

export const site = {
  name: "Techub Software",
  shortName: "Techub",
  // Set NEXT_PUBLIC_SITE_URL as a Cloudflare build variable if your domain is different.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://techubsoftware.com").replace(/\/$/, ""),
  description:
    "Techub Software is a software company based in Malaysia: appointment systems with AI for clinics, hair salons, beauty centres and spas, a live selling system for online sellers, and custom systems such as ERP, AI object detection and number plate scanners. Enterprise servers in Malaysia, reports in under 100 ms, WhatsApp notifications, LHDN e-Invoice and a 99.95% uptime guarantee. Appointment systems from RM 99/month with the first 3 months free; live selling from RM 199/month; customisation from RM 300.",
  whatsappNumber: "601117688559",
  whatsappDisplay: "+60 11-1768 8559",
  email: "admin@techubsoftware.com",
  country: "MY",
  currency: "MYR",
  priceFrom: 99,
  freeMonths: 3,
  customFrom: 300,
  /** Live Selling System, per month. */
  livePriceFrom: 199,
  uptime: "99.95%",
  keywords: [
    "appointment system Malaysia",
    "appointment management system Malaysia",
    "booking system Malaysia",
    "clinic management system Malaysia",
    "salon appointment system",
    "beauty centre system",
    "spa booking system",
    "WhatsApp appointment reminder",
    "AI stock control",
    "LHDN e-Invoice system",
    "live selling system Malaysia",
    "custom software Malaysia",
    "software company Malaysia",
    "Techub Software",
  ],
} as const;

export const whatsappLink = (message: string) => `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const emailLink = (subject: string) => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

/** The business types with a ready system. Each has its own page, listed under "Use Cases" in the menu
 *  and on the home page. Their names and descriptions are under `systems` in content/en.ts. */
export const systems = [
  { key: "clinic", path: "/clinic-management-system/", icon: "Stethoscope" },
  { key: "salon", path: "/salon-appointment-system/", icon: "Scissors" },
  { key: "beauty", path: "/beauty-appointment-system/", icon: "Mirror" },
  { key: "spa", path: "/spa-appointment-system/", icon: "Lotus" },
  { key: "live", path: "/live-selling-system/", icon: "Live" },
] as const;

export type SystemKey = (typeof systems)[number]["key"];

/** A page for each part of the company. Every menu item, footer link and button opens a page (none scrolls
 *  down the same page). Their titles are under `pages` in content/en.ts. */
export const companyPages = {
  useCases: "/use-cases/",
  customSystems: "/custom-systems/",
  services: "/services/",
  pricing: "/pricing/",
  about: "/about/",
  faq: "/faq/",
  contact: "/contact/",
} as const;

export type CompanyPageKey = keyof typeof companyPages;

/** Main menu. "Use Cases" opens the Use Cases page, and on hover a list of the systems above.
 *  Labels are under `nav` in content/en.ts. */
export const nav = [
  { key: "useCases", path: companyPages.useCases, menu: true },
  { key: "technology", path: "/technology/" },
  { key: "services", path: companyPages.services },
  { key: "pricing", path: companyPages.pricing },
  { key: "contact", path: companyPages.contact },
] as const;

/** Every page. */
export const pagePaths = [
  "/",
  "/technology/",
  ...systems.map((s) => s.path),
  ...Object.values(companyPages),
  "/terms/",
  "/privacy/",
] as const;
