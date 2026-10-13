// Central place for company details. Change values here and every page,
// metadata tag, JSON-LD block and sitemap entry picks them up.

export const site = {
  name: "Techub Software",
  shortName: "Techub",
  // Set NEXT_PUBLIC_SITE_URL in Cloudflare Pages to your real domain.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://techubsoftware.com").replace(/\/$/, ""),
  tagline: "Custom Clinic & Spa/Salon Management Systems in Malaysia",
  description:
    "Techub Software builds customised clinic management systems and spa/salon appointment systems in Malaysia. 99.95% uptime, queue number calling, WhatsApp appointment alerts, AI stock control, patient medication tracking and multi-printer support. From RM 99/month, first 3 months free.",
  whatsappNumber: "601117688559",
  whatsappDisplay: "+60 11-1768 8559",
  whatsappMessage: "Hi Techub Software, I'm interested in your system. Can I get a free demo?",
  country: "MY",
  currency: "MYR",
  priceFrom: 99,
  freeMonths: 3,
  uptime: "99.95%",
  keywords: [
    "clinic management system Malaysia",
    "clinic system",
    "sistem klinik",
    "patient management system",
    "spa appointment system",
    "salon booking system",
    "beauty salon software Malaysia",
    "queue number calling system",
    "WhatsApp appointment reminder",
    "AI inventory management",
    "stock control system",
    "delivery note scanning",
    "medication tracking",
    "custom software Malaysia",
    "POS system Malaysia",
    "Techub Software",
  ],
} as const;

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const nav = [
  { href: "/clinic-management-system/", label: "Clinic System" },
  { href: "/spa-salon-appointment-system/", label: "Spa & Salon System" },
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export const faqs = [
  {
    q: "How much does the Techub clinic or spa/salon system cost?",
    a: "Plans start from RM 99 per month. New customers get the first 3 months free, and that includes installation and staff training. Custom features are quoted separately at a low cost.",
  },
  {
    q: "What uptime do you guarantee?",
    a: "We guarantee 99.95% system uptime, so your front desk, queue screens and appointment bookings stay online during business hours.",
  },
  {
    q: "Can the system send WhatsApp appointment reminders?",
    a: "Yes. Patients and customers receive WhatsApp alerts for booking confirmations, reminders before their appointment and follow-ups, which reduces no-shows.",
  },
  {
    q: "Which hardware can I connect?",
    a: "Techub supports queue number calling displays and speakers, receipt and label printers, A4 printers, barcode scanners, card readers, cash drawers and tablets for signatures or hand drawing. We connect to different printer brands and models.",
  },
  {
    q: "How does the AI stock control work?",
    a: "Snap or scan a supplier delivery note and the AI reads the items, quantities and batch details, then adjusts your stock automatically. Every inventory movement is logged, so you can trace stock in, stock out, transfers and adjustments.",
  },
  {
    q: "Does it work on phones, tablets and computers?",
    a: "Yes. Techub runs on desktop, laptop, tablet and mobile browsers, so doctors, therapists and managers can work from any device.",
  },
  {
    q: "Can I control what each staff member can see and do?",
    a: "Yes. Role-based permission control lets you decide exactly which modules, reports and actions each staff member or branch can access, with an audit trail of who did what.",
  },
  {
    q: "Can you customise the system for my business?",
    a: "Yes. Customisation is our speciality. We adapt workflows, forms, reports and integrations to how your clinic, spa or salon actually works, at a low cost.",
  },
];
