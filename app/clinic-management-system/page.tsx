import type { Metadata } from "next";
import ProductPage, { FloatBadge, type ProductContent } from "@/components/ProductPage";
import { shots } from "@/lib/shots";
import { site } from "@/lib/site";

const description =
  "Clinic management system for Malaysian clinics: patient registration, queue number calling, EMR, patient medication tracking, dispensing, AI medicine stock control, hand-drawn body charts, MC and receipt printing. 99.95% uptime. From RM 99/month, 3 months free.";

export const metadata: Metadata = {
  title: "Clinic Management System Malaysia | Queue, EMR & Medication Tracking",
  description,
  keywords: [
    "clinic management system Malaysia", "clinic system", "sistem klinik", "clinic software", "EMR Malaysia",
    "patient management system", "queue number calling system clinic", "medication tracking", "dispensary inventory",
    "GP clinic system", "dental clinic system",
  ],
  alternates: { canonical: "/clinic-management-system/" },
  openGraph: { url: "/clinic-management-system/", title: "Clinic Management System Malaysia | Techub Software", description },
};

const c: ProductContent = {
  path: "/clinic-management-system/",
  name: "Clinic Management System",
  category: "Clinic management, EMR and patient queue",
  description,
  eyebrow: "Clinic Management System",
  heading: <>A smarter <span className="text-gradient">clinic system</span> for faster, safer care</>,
  intro: "Registration, queue, consultation, prescriptions, dispensing, billing and stock. All in one place.",
  hero: { main: shots.clinicDashboard, phone: shots.whatsappClinic, badge: <FloatBadge icon="Shield">{site.uptime} uptime</FloatBadge> },
  whoFor: ["GP clinics", "Dental clinics", "Specialist clinics", "Aesthetic clinics", "Physiotherapy", "TCM", "Multi-branch groups"],
  spotlights: [
    {
      eyebrow: "Queue number calling",
      title: "Call the next patient in one tap",
      points: ["TV display with voice announcement", "Rooms, pharmacy & payment counters", "English, Malay & Chinese", "A calmer, shorter wait"],
      visual: { main: shots.queueTv },
    },
    {
      eyebrow: "Patient medication tracking",
      title: "Every prescription, tracked",
      points: ["Full medication history", "Allergy alerts before prescribing", "Batch & expiry on every dispense", "Repeat prescriptions in one tap"],
      visual: { main: shots.medication },
    },
    {
      eyebrow: "Hand drawing & e-signature",
      title: "Draw, annotate and sign on a tablet",
      points: ["Body & dental charts", "Draw with finger or stylus", "Patient consent e-signature", "Saved to the patient record"],
      visual: { main: shots.bodyChart },
    },
    {
      eyebrow: "Multi-printer support",
      title: "Print MC, labels and receipts",
      points: ["Medical certificates & referral letters", "Medicine labels with dosage", "Receipts & invoices", "Thermal, label & A4 printers"],
      visual: { main: shots.printouts },
    },
    {
      eyebrow: "AI stock control",
      title: "Scan the delivery note. Stock updates itself.",
      points: ["AI reads items, batch & expiry", "Stock deducts when you dispense", "Every movement logged", "Low-stock & expiry alerts"],
      visual: { main: shots.inventory, phone: shots.scanClinic },
    },
    {
      eyebrow: "Permission control",
      title: "The right access for every staff",
      points: ["Doctor, nurse, pharmacy & cashier roles", "Manager approval for discounts", "Branch access control", "Full audit trail"],
      visual: { main: shots.permissions },
    },
  ],
  modules: [
    { icon: "Users", title: "Patient registration & records" },
    { icon: "Megaphone", title: "Queue number calling" },
    { icon: "Whatsapp", title: "WhatsApp appointment alerts" },
    { icon: "Stethoscope", title: "Consultation & EMR" },
    { icon: "Pill", title: "Patient medication tracking" },
    { icon: "Pen", title: "Body chart & e-signature" },
    { icon: "Sparkles", title: "AI medicine stock control" },
    { icon: "Route", title: "Inventory movement tracking" },
    { icon: "Printer", title: "MC, label & receipt printing" },
    { icon: "Card", title: "Billing & panel claims" },
    { icon: "Lock", title: "Permission control" },
    { icon: "Chart", title: "Reports & analytics" },
  ],
  faqs: [
    { q: "Is the Techub clinic system suitable for small clinics?", a: `Yes. It is designed for single-doctor clinics up to multi-branch groups. Plans start from RM ${site.priceFrom}/month and new clinics get the first ${site.freeMonths} months free, including installation and staff training.` },
    { q: "Does the clinic system support queue number calling?", a: "Yes. Queue numbers can be shown on a TV display and announced by voice, for consultation rooms, the pharmacy counter and the payment counter." },
    { q: "Can I track each patient's medication?", a: "Yes. Every prescription and dispensing record is saved on the patient's timeline with dosage, frequency, batch and allergy notes." },
    { q: "Can doctors draw on body or dental charts?", a: "Yes. Doctors can draw and annotate charts by hand on a tablet or touchscreen, and patients can sign consent forms digitally." },
    { q: "Which printers can the clinic system use?", a: "Thermal receipt printers, label printers for medicine labels, and A4 printers for MC, invoices and letters. We connect to different printer brands and models." },
    { q: "How reliable is the system?", a: `We guarantee ${site.uptime} uptime with cloud hosting, monitoring and daily backups.` },
    { q: "How do I get a demo?", a: `WhatsApp us at ${site.whatsappDisplay} or email ${site.email}. We will show you the clinic system live, for free.` },
  ],
  demoMessage: "Hi Techub, I'd like a free demo of the clinic management system.",
  contactPhone: shots.whatsappClinic,
};

export default function ClinicPage() {
  return <ProductPage c={c} />;
}
