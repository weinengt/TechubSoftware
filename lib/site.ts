// Company details. Change values here and every page, language, metadata tag, JSON-LD block and
// sitemap entry picks them up. The words on the pages are in content/en.ts, ms.ts and zh.ts.

export const site = {
  name: "Techub Software",
  shortName: "Techub",
  // Set NEXT_PUBLIC_SITE_URL as a Cloudflare build variable if your domain is different.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://techubsoftware.com").replace(/\/$/, ""),
  description:
    "Techub Software is a Malaysian software company: appointment systems with AI for clinics, hair salons, beauty centres and spas, and custom systems such as ERP, AI object detection and number plate scanners. Enterprise servers in Malaysia, reports in under 100 ms, WhatsApp notifications, LHDN e-Invoice and a 99.95% uptime guarantee. From RM 99/month with the first 3 months free; customisation from RM 300.",
  whatsappNumber: "601117688559",
  whatsappDisplay: "+60 11-1768 8559",
  email: "admin@techubsoftware.com",
  country: "MY",
  currency: "MYR",
  priceFrom: 99,
  freeMonths: 3,
  customFrom: 300,
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
    "custom software Malaysia",
    "software company Malaysia",
    "Techub Software",
  ],
} as const;

export const whatsappLink = (message: string) => `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const emailLink = (subject: string) => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

/** The business types with a ready system. Each has its own page, listed under "Use Cases" in the menu
 *  and in the tabs on the home page. Their names and descriptions are under `systems` in content/en.ts. */
export const systems = [
  { key: "clinic", path: "/clinic-management-system/", icon: "Stethoscope" },
  { key: "salon", path: "/salon-appointment-system/", icon: "Scissors" },
  { key: "beauty", path: "/beauty-appointment-system/", icon: "Mirror" },
  { key: "spa", path: "/spa-appointment-system/", icon: "Lotus" },
] as const;

export type SystemKey = (typeof systems)[number]["key"];

/** Main menu. "Use Cases" opens a list of the systems above. Labels are under `nav` in content/en.ts. */
export const nav = [
  { key: "useCases", path: "/#use-cases", menu: true },
  { key: "technology", path: "/technology/" },
  { key: "services", path: "/#services" },
  { key: "pricing", path: "/#pricing" },
  { key: "contact", path: "/#contact" },
] as const;

/** Every page, for the sitemap and the language links. */
export const pagePaths = ["/", "/technology/", ...systems.map((s) => s.path)] as const;
