import type { Metadata } from "next";
import ProductPage, { type ProductContent } from "@/components/ProductPage";
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
  heading: <>A smarter <span className="text-gradient">clinic system</span> for faster, safer patient care</>,
  intro:
    "From the moment a patient walks in to the moment they leave with their medicine, Techub handles registration, queue calling, consultation notes, prescriptions, dispensing, billing and stock. Built for GP, dental, specialist, physiotherapy, aesthetic and traditional medicine clinics in Malaysia.",
  whoFor: ["GP clinics", "Dental clinics", "Specialist clinics", "Aesthetic clinics", "Physiotherapy", "TCM & traditional medicine", "Multi-branch groups"],
  modules: [
    { icon: "Users", title: "Patient Registration & Records", text: "Register walk-ins and appointments in seconds. Keep complete patient profiles, visit history, allergies and documents in one secure record." },
    { icon: "Megaphone", title: "Queue Number Calling", text: "Issue queue numbers and call patients to consultation rooms or the pharmacy counter with TV display and voice announcement." },
    { icon: "Whatsapp", title: "WhatsApp Appointment Alerts", text: "Send booking confirmations, appointment reminders, follow-up and vaccination reminders automatically on WhatsApp." },
    { icon: "Stethoscope", title: "Consultation & EMR", text: "Doctors record symptoms, diagnosis, notes and templates quickly. Previous visits and prescriptions are always on screen." },
    { icon: "Pill", title: "Patient Medication Tracking", text: "Track every prescription, dosage, frequency and dispensing record per patient, with allergy and repeat-medication history." },
    { icon: "Pen", title: "Hand Drawing & e-Signature", text: "Mark body charts, dental charts and wound areas by hand on a tablet, and capture patient consent signatures digitally." },
    { icon: "Sparkles", title: "AI Medicine Stock Control", text: "Scan supplier delivery notes to receive stock, track batch and expiry, and let AI predict when to reorder." },
    { icon: "Route", title: "Inventory Movement Tracking", text: "Every tablet, vial and consumable is traced: received, dispensed, transferred, returned or written off." },
    { icon: "Printer", title: "Printing: MC, Labels & Receipts", text: "Print medical certificates, medicine labels, receipts, invoices, referral letters and time slips on any printer." },
    { icon: "Card", title: "Billing & Panel Claims", text: "Fast billing with cash, card and e-wallet. Manage panel companies and corporate billing with clear statements." },
    { icon: "Lock", title: "Permission Control", text: "Separate access for doctors, nurses, clinic assistants, pharmacy and management, with a full audit log." },
    { icon: "Chart", title: "Reports & Analytics", text: "Daily collection, patient visits, doctor performance, top medicines and stock valuation, by branch or overall." },
  ],
  workflowTitle: "A smooth patient journey, end to end",
  workflow: [
    { t: "Register & queue", d: "Patient checks in at the counter or via appointment and receives a queue number." },
    { t: "Call & consult", d: "The doctor calls the next number. The screen and speaker announce it, and the EMR opens instantly." },
    { t: "Prescribe & dispense", d: "Prescriptions go straight to the pharmacy. Labels print and stock deducts automatically." },
    { t: "Bill & follow up", d: "Payment, receipt and MC print in one step. A WhatsApp follow-up reminder is scheduled." },
  ],
  highlightTitle: "Patient medication tracking you can rely on",
  highlightText:
    "Know exactly what every patient has been prescribed and dispensed. Techub keeps a complete medication timeline so doctors can make safer decisions and repeat prescriptions take seconds.",
  highlights: [
    "Full prescription and dispensing history per patient",
    "Allergy and drug warnings shown during prescribing",
    "Dosage, frequency and duration printed on medicine labels",
    "Batch and expiry traced from supplier to patient",
    "Repeat prescriptions in one click",
  ],
  faqs: [
    { q: "Is the Techub clinic system suitable for small clinics?", a: `Yes. It is designed for single-doctor clinics up to multi-branch groups. Plans start from RM ${site.priceFrom}/month and new clinics get the first ${site.freeMonths} months free, including installation and staff training.` },
    { q: "Does the clinic system support queue number calling?", a: "Yes. Queue numbers can be shown on a TV display and announced by voice, for consultation rooms, the pharmacy counter and the payment counter." },
    { q: "Can I track each patient's medication?", a: "Yes. Every prescription and dispensing record is saved on the patient's timeline with dosage, frequency, batch and allergy notes." },
    { q: "Can doctors draw on body or dental charts?", a: "Yes. Doctors can draw and annotate charts by hand on a tablet or touchscreen, and patients can sign consent forms digitally." },
    { q: "Which printers can the clinic system use?", a: "Thermal receipt printers, label printers for medicine labels, and A4 printers for MC, invoices and letters. We connect to different printer brands and models." },
    { q: "How reliable is the system?", a: `We guarantee ${site.uptime} uptime with cloud hosting, monitoring and daily backups.` },
  ],
  demoMessage: "Hi Techub, I'd like a free demo of the clinic management system.",
};

export default function ClinicPage() {
  return <ProductPage c={c} />;
}
