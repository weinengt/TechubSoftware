import type { Metadata } from "next";
import ProductPage, { FloatBadge, type ProductContent } from "@/components/ProductPage";
import { shots } from "@/lib/shots";
import { site } from "@/lib/site";

const description =
  "Spa and salon appointment system for Malaysia: online booking, WhatsApp reminders, therapist and room scheduling, packages and memberships, staff commission, retail POS and AI stock control. 99.95% uptime. From RM 99/month, 3 months free.";

export const metadata: Metadata = {
  title: "Spa & Salon Appointment System Malaysia | Booking, WhatsApp Reminders & POS",
  description,
  keywords: [
    "spa appointment system", "salon booking system", "salon software Malaysia", "beauty salon system",
    "spa management software", "sistem temujanji salon", "WhatsApp appointment reminder", "salon POS Malaysia",
    "therapist scheduling", "membership package system",
  ],
  alternates: { canonical: "/spa-salon-appointment-system/" },
  openGraph: { url: "/spa-salon-appointment-system/", title: "Spa & Salon Appointment System Malaysia | Techub Software", description },
};

const c: ProductContent = {
  path: "/spa-salon-appointment-system/",
  name: "Spa & Salon Appointment System",
  category: "Spa and salon booking, POS and membership",
  description,
  eyebrow: "Spa & Salon Appointment System",
  heading: <>Fill your calendar with the <span className="text-gradient">spa &amp; salon system</span> customers love</>,
  intro: "Bookings, WhatsApp reminders, packages, commission, POS and stock. All in one place.",
  hero: { main: shots.spaCalendar, phone: shots.customerPackage, badge: <FloatBadge icon="Whatsapp" tone="green">31 of 33 confirmed on WhatsApp</FloatBadge> },
  whoFor: ["Day spas", "Hair salons", "Beauty & facial", "Nail & lash studios", "Massage & reflexology", "Wellness centres", "Barbershops"],
  spotlights: [
    {
      eyebrow: "WhatsApp appointment alerts",
      title: "Fewer no-shows, fuller days",
      points: ["Instant booking confirmation", "Reminder before every visit", "One-tap confirm or reschedule", "Package balance in the reply"],
      visual: {
        phoneOnly: shots.whatsappSpa,
        badges: [
          <FloatBadge key="a" icon="Check" tone="green">Confirmed</FloatBadge>,
          <FloatBadge key="b" icon="Calendar">Reminder sent</FloatBadge>,
        ],
      },
    },
    {
      eyebrow: "Treatment notes & drawing",
      title: "Mark the treatment area by hand",
      points: ["Draw on a tablet with finger or stylus", "Therapist notes & preferences", "Before & after photos", "Customer e-signature consent"],
      visual: { main: shots.bodyChartSpa },
    },
    {
      eyebrow: "AI stock control",
      title: "Scan the delivery note. Stock updates itself.",
      points: ["AI reads every product line", "Auto deduct for treatments & sales", "Every movement logged", "Smart reorder alerts"],
      visual: { main: shots.inventory, phone: shots.scanSpa, side: "left" },
    },
    {
      eyebrow: "Staff & permission control",
      title: "Your team, under control",
      points: ["Therapist, stylist & reception roles", "Manager approval for discounts", "Commission calculated for you", "Full audit trail"],
      visual: { main: shots.permissionsSpa },
    },
  ],
  modules: [
    { icon: "Calendar", title: "Appointment booking" },
    { icon: "Whatsapp", title: "WhatsApp reminders" },
    { icon: "Megaphone", title: "Queue & walk-in calling" },
    { icon: "Users", title: "Therapist scheduling" },
    { icon: "Gift", title: "Packages & memberships" },
    { icon: "Chart", title: "Commission & performance" },
    { icon: "Pen", title: "Treatment notes & drawing" },
    { icon: "Card", title: "Retail POS" },
    { icon: "Sparkles", title: "AI stock control" },
    { icon: "Route", title: "Inventory movement tracking" },
    { icon: "Printer", title: "Receipt & label printing" },
    { icon: "Lock", title: "Permission control" },
  ],
  faqs: [
    { q: "How much is the spa and salon appointment system?", a: `It starts from RM ${site.priceFrom}/month. New spas and salons get the first ${site.freeMonths} months free, including installation and staff training.` },
    { q: "Does it send WhatsApp appointment reminders?", a: "Yes. Booking confirmations and reminders are sent automatically on WhatsApp, and customers can confirm or reschedule with one tap." },
    { q: "Can I manage packages and memberships?", a: "Yes. Sell packages, prepaid credits and memberships, and the system tracks remaining sessions and balances automatically." },
    { q: "Does it calculate staff commission?", a: "Yes. Commission for services and product sales is calculated automatically per staff member, with reports by day, week or month." },
    { q: "Can I use it on a tablet or phone?", a: "Yes. The system works on desktop, tablet and mobile, so staff can check their schedule and record treatments anywhere." },
    { q: "Can the system be customised for my salon?", a: "Yes. We customise services, forms, workflows, reports and printouts to suit your business at a low cost." },
    { q: "How do I get a demo?", a: `WhatsApp us at ${site.whatsappDisplay} or email ${site.email}. We will show you the spa & salon system live, for free.` },
  ],
  demoMessage: "Hi Techub, I'd like a free demo of the spa & salon appointment system.",
  contactPhone: shots.whatsappSpa,
};

export default function SpaSalonPage() {
  return <ProductPage c={c} />;
}
