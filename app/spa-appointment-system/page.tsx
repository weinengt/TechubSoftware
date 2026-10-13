import type { Metadata } from "next";
import ProductPage, { FloatBadge, type ProductContent } from "@/components/ProductPage";
import { shots } from "@/lib/shots";
import { site } from "@/lib/site";

const description =
  "Spa and massage appointment system for Malaysia: therapist and room scheduling, WhatsApp reminders, packages and memberships, treatment maps with e-signature, POS with therapist commission and AI stock control. Works on iPad and phone. From RM 99/month, 3 months free.";

export const metadata: Metadata = {
  title: "Spa Appointment System Malaysia | Spa & Massage Booking, Rooms & Packages",
  description,
  keywords: [
    "spa appointment system", "spa booking system Malaysia", "spa management software", "massage booking system",
    "reflexology centre system", "wellness centre software", "therapist scheduling", "spa membership system", "sistem tempahan spa",
  ],
  alternates: { canonical: "/spa-appointment-system/" },
  openGraph: { url: "/spa-appointment-system/", title: "Spa Appointment System Malaysia | Techub Software", description },
};

const c: ProductContent = {
  key: "spa",
  path: "/spa-appointment-system/",
  name: "Spa Appointment System",
  category: "Spa and massage booking, rooms and memberships",
  description,
  eyebrow: "Spa Appointment System",
  heading: <>A calm front desk and <span className="text-gradient">fully booked</span> therapists</>,
  intro: "Therapists, rooms, packages and WhatsApp reminders. On iPad and phone.",
  hero: { main: shots.spaCalendar, phone: shots.whatsappSpa, badge: <FloatBadge icon="Whatsapp" tone="green">Confirmed on WhatsApp</FloatBadge> },
  whoFor: ["Day spas", "Massage centres", "Foot reflexology", "Wellness centres", "Hotel & resort spas", "Couple spas"],
  spotlights: [
    {
      eyebrow: "Packages & memberships",
      title: "Sessions and balances, always up to date",
      points: ["Packages & prepaid credit", "Sessions left on every visit", "Pressure & oil preferences", "Birthday & rebooking reminders"],
      visual: {
        phoneOnly: shots.spaPackage,
        badges: [
          <FloatBadge key="a" icon="Gift">Sessions left</FloatBadge>,
          <FloatBadge key="b" icon="Calendar">Next visit booked</FloatBadge>,
        ],
      },
    },
    {
      eyebrow: "Treatment map & signature",
      title: "Mark the focus areas by hand",
      points: ["Draw on a body map with a stylus", "Therapist notes for next time", "Health declaration & consent", "Customer e-signature"],
      visual: { main: shots.bodyChartSpa },
    },
    {
      eyebrow: "POS & commission",
      title: "Checkout and commission in one place",
      points: ["Treatments, packages & retail", "Commission per therapist", "Cash, card, DuitNow QR & e-wallet", "Daily sales report"],
      visual: { main: shots.spaPos },
    },
    {
      eyebrow: "AI stock control",
      title: "Scan the delivery note. Stock updates itself.",
      points: ["AI reads every product line", "Oils & scrubs deducted per treatment", "Every movement logged", "Smart reorder alerts"],
      visual: { main: shots.spaStock, phone: shots.scanSpa },
    },
    {
      eyebrow: "Staff & permission control",
      title: "Your team, under control",
      points: ["Owner, manager, therapist & reception roles", "Manager approval for discounts", "Branch access control", "Full audit trail"],
      visual: { main: shots.spaPermissions },
    },
  ],
  modules: [
    { icon: "Calendar", title: "Therapist & room scheduling" },
    { icon: "Whatsapp", title: "WhatsApp reminders" },
    { icon: "Gift", title: "Packages & memberships" },
    { icon: "Users", title: "Couple & group bookings" },
    { icon: "Pen", title: "Treatment map & e-signature" },
    { icon: "Card", title: "POS & retail sales" },
    { icon: "Chart", title: "Therapist commission" },
    { icon: "Sparkles", title: "AI stock control" },
    { icon: "Route", title: "Inventory movement tracking" },
    { icon: "Printer", title: "Receipt printing" },
    { icon: "Lock", title: "Permission control" },
    { icon: "Devices", title: "Works on iPad & phone" },
  ],
  faqs: [
    { q: "How much is the spa appointment system?", a: `It starts from RM ${site.priceFrom}/month. New spas get the first ${site.freeMonths} months free, including installation and staff training.` },
    { q: "Can I schedule both therapists and rooms?", a: "Yes. Each booking holds a therapist and a room, including couple rooms, so you never double-book either." },
    { q: "Can I manage packages and memberships?", a: "Yes. Sell packages, prepaid credit and memberships, and the system tracks remaining sessions and balances automatically." },
    { q: "Does it send WhatsApp appointment reminders?", a: "Yes. Booking confirmations and reminders are sent on WhatsApp automatically, and customers can confirm or reschedule with one tap." },
    { q: "Does it calculate therapist commission?", a: "Yes. Commission for treatments and product sales is calculated per therapist, with daily and monthly reports." },
    { q: "Can I use it on an iPad?", a: "Yes. It works on iPad, other tablets, phones and computers, so the front desk and therapists can use it anywhere." },
    { q: "How do I get a demo?", a: `WhatsApp us at ${site.whatsappDisplay} or email ${site.email}. We will show you the spa system live, for free.` },
  ],
  demoMessage: "Hi Techub, I'd like a free demo of the spa appointment system.",
  contactPhone: shots.whatsappSpa,
};

export default function SpaPage() {
  return <ProductPage c={c} />;
}
