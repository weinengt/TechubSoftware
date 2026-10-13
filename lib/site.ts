// Central place for company details. Change values here and every page,
// metadata tag, JSON-LD block and sitemap entry picks them up.

export const site = {
  name: "Techub Software",
  shortName: "Techub",
  // Set NEXT_PUBLIC_SITE_URL as a Cloudflare build variable if your domain is different.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://techubsoftware.com").replace(/\/$/, ""),
  tagline: "Appointment Management Systems in Malaysia",
  description:
    "Techub Software provides appointment management systems for Malaysian businesses, customised for clinics, hair salons, beauty centres and spas. Bookings, WhatsApp reminders, queue calling, POS, AI stock control and staff permissions on iPad, phone and PC. 99.95% uptime. From RM 99/month, first 3 months free.",
  whatsappNumber: "601117688559",
  whatsappDisplay: "+60 11-1768 8559",
  whatsappMessage: "Hi Techub Software, I'm interested in your system. Can I get a free demo?",
  email: "admin@techubsoftware.com",
  country: "MY",
  currency: "MYR",
  priceFrom: 99,
  freeMonths: 3,
  uptime: "99.95%",
  keywords: [
    "appointment management system Malaysia",
    "appointment system",
    "booking system Malaysia",
    "sistem temujanji",
    "clinic management system Malaysia",
    "salon appointment system",
    "beauty centre system",
    "spa booking system",
    "WhatsApp appointment reminder",
    "queue number calling system",
    "AI stock control",
    "POS system Malaysia",
    "custom software Malaysia",
    "Techub Software",
  ],
} as const;

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const emailLink = (subject = "Enquiry about Techub system") =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

/** The appointment systems Techub offers. Each has its own page; the home page links to them as cards. */
export const systems = [
  {
    key: "clinic",
    label: "Clinic",
    name: "Clinic Management System",
    href: "/clinic-management-system/",
    icon: "Stethoscope",
    blurb: "Queue calling, patient records, medication and printing.",
  },
  {
    key: "salon",
    label: "Hair Salon",
    name: "Salon Appointment System",
    href: "/salon-appointment-system/",
    icon: "Scissors",
    blurb: "Stylist bookings, walk-ins, POS and commission.",
  },
  {
    key: "beauty",
    label: "Beauty Centre",
    name: "Beauty Centre Appointment System",
    href: "/beauty-appointment-system/",
    icon: "Mirror",
    blurb: "Packages, face charts, photos and consent.",
  },
  {
    key: "spa",
    label: "Spa & Massage",
    name: "Spa Appointment System",
    href: "/spa-appointment-system/",
    icon: "Lotus",
    blurb: "Therapists, rooms, packages and memberships.",
  },
] as const;

export type SystemKey = (typeof systems)[number]["key"];

export const nav = [
  { href: "/clinic-management-system/", label: "Clinic" },
  { href: "/salon-appointment-system/", label: "Salon" },
  { href: "/beauty-appointment-system/", label: "Beauty" },
  { href: "/spa-appointment-system/", label: "Spa" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

export const faqs = [
  {
    q: "What does Techub Software do?",
    a: "Techub Software provides appointment management systems for Malaysian businesses and customises them to fit how you work. We have ready systems for clinics, hair salons, beauty centres and spas.",
  },
  {
    q: "How much does it cost?",
    a: "Plans start from RM 99 per month. New customers get the first 3 months free, and that includes installation and staff training. Custom features are quoted separately at a low cost.",
  },
  {
    q: "My business is not a clinic, salon, beauty centre or spa. Can I still use Techub?",
    a: "Yes. If your business runs on appointments, we can set Techub up for you and customise the services, forms and reports at a low cost. WhatsApp us to discuss.",
  },
  {
    q: "What uptime do you guarantee?",
    a: "We guarantee 99.95% system uptime, so your front desk, queue screens and bookings stay online during business hours.",
  },
  {
    q: "Can the system send WhatsApp appointment reminders?",
    a: "Yes. Customers receive WhatsApp alerts for booking confirmations, reminders before their appointment and follow-ups, which reduces no-shows.",
  },
  {
    q: "Does it work on iPad, phone and computer?",
    a: "Yes. Techub runs on iPad and other tablets, phones, laptops and desktop computers, so your front desk, staff and managers can work from any device.",
  },
  {
    q: "Which hardware can I connect?",
    a: "Queue number calling displays and speakers, receipt and label printers, A4 printers, barcode scanners, card terminals, cash drawers and tablets for signatures or hand drawing. We connect to different printer brands and models.",
  },
  {
    q: "How does the AI stock control work?",
    a: "Snap or scan a supplier delivery note and the AI reads the items, quantities and batch details, then adjusts your stock automatically. Every inventory movement is logged, so you can trace stock in, stock out, transfers and adjustments.",
  },
  {
    q: "Can I control what each staff member can see and do?",
    a: "Yes. Role-based permission control lets you decide exactly which modules, reports and actions each staff member or branch can access, with an audit trail of who did what.",
  },
  {
    q: "How do I contact Techub Software?",
    a: "WhatsApp us at +60 11-1768 8559 or email admin@techubsoftware.com. We can arrange a free demo of the system for your business.",
  },
];
