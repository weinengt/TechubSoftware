import type { Metadata } from "next";
import ProductPage, { FloatBadge, type ProductContent } from "@/components/ProductPage";
import { shots } from "@/lib/shots";
import { site } from "@/lib/site";

const description =
  "Appointment system for beauty centres in Malaysia: booking calendar, WhatsApp reminders, treatment packages and sessions, face charts with before and after photos and e-signature consent, POS with staff commission and AI product stock control. From RM 99/month, 3 months free.";

export const metadata: Metadata = {
  title: "Beauty Centre Appointment System Malaysia | Booking, Packages & Face Charts",
  description,
  keywords: [
    "beauty centre system", "beauty salon system Malaysia", "beauty salon booking system", "facial centre software",
    "aesthetic centre system", "lash studio booking system", "nail salon booking system", "beauty package management",
    "sistem pusat kecantikan",
  ],
  alternates: { canonical: "/beauty-appointment-system/" },
  openGraph: { url: "/beauty-appointment-system/", title: "Beauty Centre Appointment System Malaysia | Techub Software", description },
};

const c: ProductContent = {
  key: "beauty",
  path: "/beauty-appointment-system/",
  name: "Beauty Centre Appointment System",
  category: "Beauty centre booking, packages and treatment records",
  description,
  eyebrow: "Beauty Centre Appointment System",
  heading: <>The <span className="text-gradient">beauty centre system</span> that brings customers back</>,
  intro: "Bookings, packages, face charts, photos and WhatsApp reminders. On iPad and phone.",
  hero: { main: shots.beautyCalendar, phone: shots.whatsappBeauty, badge: <FloatBadge icon="Gift">Package sessions tracked</FloatBadge> },
  whoFor: ["Beauty centres", "Facial & skincare", "Lash & brow studios", "Nail salons", "Slimming centres", "Aesthetic centres", "Bridal make-up"],
  spotlights: [
    {
      eyebrow: "Packages & sessions",
      title: "Every package and session, tracked",
      points: ["Sessions left on every visit", "Prepaid credit & member prices", "Skin notes & allergies", "Reminder when it's time to rebook"],
      visual: {
        phoneOnly: shots.beautyPackage,
        badges: [
          <FloatBadge key="a" icon="Gift">Sessions left</FloatBadge>,
          <FloatBadge key="b" icon="Whatsapp" tone="green">Reminder sent</FloatBadge>,
        ],
      },
    },
    {
      eyebrow: "Face chart & consent",
      title: "Mark the skin, add photos, get it signed",
      points: ["Draw on a face chart with a stylus", "Before & after photos", "Treatment notes per visit", "Customer e-signature consent"],
      visual: { main: shots.faceChart },
    },
    {
      eyebrow: "POS & commission",
      title: "Checkout with packages in one tap",
      points: ["Redeem package sessions", "Treatments and products in one bill", "Commission per beautician", "Cash, card, DuitNow QR & e-wallet"],
      visual: { main: shots.beautyPos },
    },
    {
      eyebrow: "AI stock control",
      title: "Scan the delivery note. Stock updates itself.",
      points: ["AI reads every product line", "Usage deducted per treatment", "Every movement logged", "Expiry & reorder alerts"],
      visual: { main: shots.beautyStock, phone: shots.scanBeauty, side: "left" },
    },
  ],
  modules: [
    { icon: "Calendar", title: "Booking calendar" },
    { icon: "Whatsapp", title: "WhatsApp reminders" },
    { icon: "Gift", title: "Packages & sessions" },
    { icon: "Users", title: "Customer profiles & skin notes" },
    { icon: "Pen", title: "Face chart & e-signature" },
    { icon: "Card", title: "POS & retail sales" },
    { icon: "Chart", title: "Staff commission" },
    { icon: "Sparkles", title: "AI stock control" },
    { icon: "Route", title: "Inventory movement tracking" },
    { icon: "Printer", title: "Receipt printing" },
    { icon: "Lock", title: "Permission control" },
    { icon: "Devices", title: "Works on iPad & phone" },
  ],
  faqs: [
    { q: "How much is the beauty centre appointment system?", a: `It starts from RM ${site.priceFrom}/month. New beauty centres get the first ${site.freeMonths} months free, including installation and staff training.` },
    { q: "Can it track treatment packages and sessions?", a: "Yes. Sell packages and prepaid credit, and the system deducts each session and shows the balance at every visit." },
    { q: "Can I keep face charts and before and after photos?", a: "Yes. Beauticians can draw on a face chart, add photos and treatment notes, and customers sign consent forms on the iPad." },
    { q: "Does it send WhatsApp appointment reminders?", a: "Yes. Booking confirmations and reminders are sent on WhatsApp automatically, and customers can confirm or reschedule with one tap." },
    { q: "Does it calculate staff commission?", a: "Yes. Commission for treatments, packages and product sales is calculated per staff member, with daily and monthly reports." },
    { q: "Can I use it on an iPad?", a: "Yes. It works on iPad, other tablets, phones and computers." },
    { q: "How do I get a demo?", a: `WhatsApp us at ${site.whatsappDisplay} or email ${site.email}. We will show you the beauty centre system live, for free.` },
  ],
  demoMessage: "Hi Techub, I'd like a free demo of the beauty centre appointment system.",
  contactPhone: shots.whatsappBeauty,
};

export default function BeautyPage() {
  return <ProductPage c={c} />;
}
