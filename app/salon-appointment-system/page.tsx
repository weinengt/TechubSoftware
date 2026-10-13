import type { Metadata } from "next";
import ProductPage, { FloatBadge, type ProductContent } from "@/components/ProductPage";
import { shots } from "@/lib/shots";
import { site } from "@/lib/site";

const description =
  "Hair salon appointment system for Malaysia: stylist booking calendar, walk-in queue, WhatsApp reminders, customer colour history, packages and member points, POS with stylist commission and AI product stock control. Works on iPad and phone. From RM 99/month, 3 months free.";

export const metadata: Metadata = {
  title: "Salon Appointment System Malaysia | Hair Salon Booking, POS & Commission",
  description,
  keywords: [
    "salon appointment system", "hair salon booking system Malaysia", "salon management system", "salon software Malaysia",
    "salon POS Malaysia", "barbershop booking system", "stylist commission", "sistem temujanji salon", "WhatsApp appointment reminder",
  ],
  alternates: { canonical: "/salon-appointment-system/" },
  openGraph: { url: "/salon-appointment-system/", title: "Salon Appointment System Malaysia | Techub Software", description },
};

const c: ProductContent = {
  key: "salon",
  path: "/salon-appointment-system/",
  name: "Salon Appointment System",
  category: "Hair salon booking, POS and commission",
  description,
  eyebrow: "Hair Salon Appointment System",
  heading: <>Keep every <span className="text-gradient">stylist</span> fully booked</>,
  intro: "Bookings, walk-ins, WhatsApp reminders, POS and commission. On iPad and phone.",
  hero: { main: shots.salonCalendar, phone: shots.whatsappSalon, badge: <FloatBadge icon="Whatsapp" tone="green">Confirmed on WhatsApp</FloatBadge> },
  whoFor: ["Hair salons", "Barbershops", "Unisex salons", "Colour & treatment studios", "Bridal hair & make-up", "Multi-branch salons"],
  spotlights: [
    {
      eyebrow: "Customer history",
      title: "Every customer's colour formula, saved",
      points: ["Visit history & favourite stylist", "Colour formula & notes", "Before & after photos", "Member points & packages"],
      visual: {
        phoneOnly: shots.salonCustomer,
        badges: [
          <FloatBadge key="a" icon="Pen">Formula saved</FloatBadge>,
          <FloatBadge key="b" icon="Gift">Member points</FloatBadge>,
        ],
      },
    },
    {
      eyebrow: "POS & commission",
      title: "Fast checkout. Commission done for you.",
      points: ["Services and retail in one bill", "Commission per stylist", "Cash, card, DuitNow QR & e-wallet", "Packages & member discounts"],
      visual: { main: shots.salonPos },
    },
    {
      eyebrow: "AI stock control",
      title: "Scan the delivery note. Stock updates itself.",
      points: ["AI reads every product line", "Colour & treatment usage deducted", "Every movement logged", "Smart reorder alerts"],
      visual: { main: shots.salonStock, phone: shots.scanSalon },
    },
    {
      eyebrow: "Staff & permission control",
      title: "The right access for every staff",
      points: ["Owner, manager, stylist & reception roles", "Manager approval for discounts", "Hide customer phone numbers", "Full audit trail"],
      visual: { main: shots.salonPermissions },
    },
  ],
  modules: [
    { icon: "Calendar", title: "Booking calendar by stylist" },
    { icon: "Megaphone", title: "Walk-in queue" },
    { icon: "Whatsapp", title: "WhatsApp reminders" },
    { icon: "Users", title: "Customer history & colour formula" },
    { icon: "Gift", title: "Packages & member points" },
    { icon: "Card", title: "POS & retail sales" },
    { icon: "Chart", title: "Stylist commission" },
    { icon: "Sparkles", title: "AI stock control" },
    { icon: "Route", title: "Inventory movement tracking" },
    { icon: "Printer", title: "Receipt printing" },
    { icon: "Lock", title: "Permission control" },
    { icon: "Devices", title: "Works on iPad & phone" },
  ],
  faqs: [
    { q: "How much is the salon appointment system?", a: `It starts from RM ${site.priceFrom}/month. New salons get the first ${site.freeMonths} months free, including installation and staff training.` },
    { q: "Does it send WhatsApp booking reminders?", a: "Yes. Booking confirmations and reminders go out on WhatsApp automatically, and customers can confirm or reschedule with one tap." },
    { q: "Can it handle walk-in customers?", a: "Yes. Walk-ins join a queue next to your bookings, so the front desk can see which stylist is free next." },
    { q: "Does it calculate stylist commission?", a: "Yes. Commission for services and product sales is calculated per stylist, with daily and monthly reports." },
    { q: "Can I save each customer's colour formula?", a: "Yes. Colour formulas, notes and before and after photos are saved on the customer's profile for the next visit." },
    { q: "Does it work on an iPad?", a: "Yes. Most salons use an iPad at the front desk, and stylists can check their bookings on their phones." },
    { q: "How do I get a demo?", a: `WhatsApp us at ${site.whatsappDisplay} or email ${site.email}. We will show you the salon system live, for free.` },
  ],
  demoMessage: "Hi Techub, I'd like a free demo of the salon appointment system.",
  contactPhone: shots.whatsappSalon,
};

export default function SalonPage() {
  return <ProductPage c={c} />;
}
