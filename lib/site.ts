// Company details. Change values here and every page, language, metadata tag, JSON-LD block and
// sitemap entry picks them up. The words on the pages are in content/en.ts, ms.ts and zh.ts.

import { blogPath, postPath, posts } from "@/content/blog";

/** Where Techub serves, for structured data: all of Malaysia, named cities first for local search. */
export const areaServed = [
  { "@type": "Country", name: "Malaysia" },
  { "@type": "City", name: "Kuala Lumpur" },
  { "@type": "City", name: "Johor Bahru" },
  { "@type": "State", name: "Penang" },
];

export const site = {
  name: "Techub Software",
  shortName: "Techub",
  // Set NEXT_PUBLIC_SITE_URL as a Cloudflare build variable if your domain is different.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://techubsoftware.com").replace(/\/$/, ""),
  description:
    "Techub Software is a software company based in Malaysia: appointment systems with AI for clinics, hair salons, beauty centres and spas, a live selling system for online sellers, and custom systems such as ERP, AI object detection and number plate scanners. Enterprise servers in Malaysia, reports in under 100 ms, WhatsApp notifications, LHDN e-Invoice and a 99.95% uptime guarantee. Appointment systems from RM 99/month with the first 3 months free; live selling from RM 199/month; customisation from RM 80 per work hour.",
  /** Registration number with the Companies Commission of Malaysia (SSM). */
  ssm: "202603150314 (TR0343876-V)",
  whatsappNumber: "601112310521",
  whatsappDisplay: "+60 11-1231 0521",
  email: "admin@techubsoftware.com",
  country: "MY",
  currency: "MYR",
  priceFrom: 99,
  freeMonths: 3,
  /** Customisation is charged per work hour, at the `hourly` rate of the customer's plan; this is the lowest one. */
  customFrom: 80,
  /** Live Selling System, per month. */
  livePriceFrom: 199,
  /** The ways to pay for the Standard Plan, per month. A plan's free months are inside its length, so 12 months
   *  with 1 free is 11 paid months. `recommended` is the plan the pricing cards point visitors to. The plan with
   *  `until` is the Welcome offer, a promotion that ends on that day; `limit` is how many users can get it, first
   *  come, first served. `hourly` is what customisation costs per work hour on that plan. */
  plans: [
    { months: 1, price: 178, hourly: 100 },
    { months: 12, price: 148, free: 1, hourly: 90 },
    { months: 24, price: 148, free: 3, hourly: 85 },
    { months: 48, price: 148, free: 10, recommended: true, hourly: 80 },
    { months: 60, price: 99, until: "2026-12-31", limit: 80 },
  ],
  /** Worked examples of customisation: the work hours each takes. The Pricing page shows the first three (their
   *  words are under pricing.examples in content/*.ts); the Software Customisation page shows all four as
   *  customers A to D (under servicePages.customisation.stories), in the same order. */
  customExamples: [6, 4, 2, 3],
  /** Other services. Data migration is quoted after a talk with a software engineer, usually at this rate per hour. */
  migrationHour: 350,
  /** Business email on the customer's own domain: price per year and storage. */
  emailYear: 120,
  emailStorage: "5 GB",
  /** A static landing page website of up to `websitePages` pages, designed and hosted on Cloudflare, with a free
   *  domain for the first year; after that, a yearly maintenance fee. */
  websitePrice: 1200,
  websiteYear: 200,
  websitePages: 30,
  /** What each month costs on the 12 to 48-month plans; savings are counted against it. */
  planPrice: 148,
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

export type Plan = { months: number; price: number; free?: number; recommended?: boolean; until?: string; limit?: number; hourly?: number };

/** What a plan costs in all, what that comes to a month, and how much it saves against paying the plan price
 *  every month. */
export const planTotal = (p: Plan) => (p.months - (p.free ?? 0)) * p.price;
export const planAverage = (p: Plan) => planTotal(p) / p.months;
export const planSave = (p: Plan) => p.months * site.planPrice - planTotal(p);
/** What a plan comes to a day, to the sen: its total over its days (a month is 365/12 days). */
export const planDaily = (p: Plan) => Math.round((planTotal(p) / ((p.months * 365) / 12)) * 100) / 100;
/** How much less a month costs on the 12 to 48-month plans than on Monthly. */
export const monthlySave = site.plans[0].price - site.planPrice;

/** RM amounts as 1,628 or 135.67 (two decimals only when there are cents). */
export const rm = (n: number) =>
  new Intl.NumberFormat("en-MY", { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 }).format(n);

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
  { key: "inventory", path: "/inventory-management-system/", icon: "Barcode" },
] as const;

export type SystemKey = (typeof systems)[number]["key"];

/** Services for any business. Each has its own page, listed under "Use Cases" after the systems above (menu,
 *  Use Cases page, home page and footer). Their words are under `servicePages` in content/en.ts. */
export const servicePages = [
  { key: "customisation", path: "/software-customisation/", icon: "Wrench" },
  { key: "migration", path: "/data-migration/", icon: "Database" },
  { key: "email", path: "/business-email/", icon: "Mail" },
  { key: "website", path: "/website-design/", icon: "Globe" },
] as const;

export type ServicePageKey = (typeof servicePages)[number]["key"];

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
  { key: "blog", path: blogPath },
  { key: "contact", path: companyPages.contact },
] as const;

/** Every page. */
export const pagePaths = [
  "/",
  "/technology/",
  ...systems.map((s) => s.path),
  ...servicePages.map((s) => s.path),
  ...Object.values(companyPages),
  blogPath,
  ...posts.map((p) => postPath(p.slug)),
  "/terms/",
  "/privacy/",
] as const;
