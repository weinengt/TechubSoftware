// Example screens shown on the site. Files live in public/images/screens:
// <file>.webp (full size) and <file>-sm.webp (half size, used on phones).
// To show a real screenshot, replace both files and keep the same aspect ratio.

export type Shot = {
  file: string;
  w: number;
  h: number;
  kind: "browser" | "phone" | "tablet" | "tv" | "paper";
  title: string;
  alt: string;
};

const desktop = { w: 1800, h: 1125, kind: "browser" } as const;
const phone = { w: 720, h: 1520, kind: "phone" } as const;
const tablet = { w: 1536, h: 1080, kind: "tablet" } as const;

export const shots = {
  clinicDashboard: { ...desktop, file: "clinic-dashboard", title: "Clinic dashboard",
    alt: "Techub clinic management system dashboard with live queue, today's appointments, weekly revenue and low stock alerts" },
  medication: { ...desktop, file: "patient-medication-tracking", title: "Patient medication tracking",
    alt: "Patient medication history in the Techub clinic system with a penicillin allergy alert and suggested alternative" },
  spaCalendar: { ...desktop, file: "spa-salon-appointment-calendar", title: "Spa & salon booking calendar",
    alt: "Spa and salon appointment calendar by therapist and stylist, with bookings confirmed on WhatsApp" },
  inventory: { ...desktop, file: "inventory-movement-ai-stock", title: "Stock movement & AI insights",
    alt: "Inventory movement log tracking stock in, dispensing, sales and transfers, with an AI reorder suggestion" },
  permissions: { ...desktop, file: "staff-permission-control", title: "Staff permission control",
    alt: "Role-based staff permission control for doctors, nurses, pharmacy and cashiers, with an audit trail" },
  permissionsSpa: { ...desktop, file: "staff-permission-control-spa", title: "Staff permission control",
    alt: "Role-based permission control for spa therapists, stylists and receptionists, with an audit trail" },
  queueTv: { w: 1920, h: 1080, kind: "tv", file: "queue-number-calling-display", title: "Queue number calling display",
    alt: "Clinic queue number calling TV display showing now calling A023 to Room 2 in English, Malay and Chinese" },
  whatsappSpa: { ...phone, file: "whatsapp-appointment-reminder", title: "WhatsApp booking & reminder",
    alt: "WhatsApp booking confirmation and appointment reminder sent automatically to a spa customer, who confirms with one tap" },
  whatsappClinic: { ...phone, file: "whatsapp-appointment-reminder-clinic", title: "WhatsApp appointment reminder",
    alt: "WhatsApp appointment confirmation and reminder sent automatically to a clinic patient" },
  scanClinic: { ...phone, file: "ai-delivery-note-scan", title: "AI delivery note scan",
    alt: "Phone scanning a supplier delivery note while AI reads every item, batch and expiry and updates clinic stock" },
  scanSpa: { ...phone, file: "ai-delivery-note-scan-spa", title: "AI delivery note scan",
    alt: "Phone scanning a beauty supplies delivery note while AI reads every item and updates salon stock" },
  customerPackage: { ...phone, file: "spa-customer-package", title: "Packages & memberships",
    alt: "Spa customer profile on a phone showing package sessions left, next appointment and preferences" },
  bodyChart: { ...tablet, file: "body-chart-hand-drawing", title: "Hand-drawn body chart",
    alt: "Tablet body chart with hand-drawn annotations by the doctor and the patient's digital consent signature" },
  bodyChartSpa: { ...tablet, file: "body-chart-hand-drawing-spa", title: "Treatment map & signature",
    alt: "Tablet treatment map with hand-drawn massage areas by the therapist and the customer's digital signature" },
  printouts: { w: 1500, h: 1050, kind: "paper", file: "printouts-receipt-label-mc", title: "Receipts, MC & labels",
    alt: "Sample printed receipt, medical certificate and medicine label produced by the Techub clinic system" },
} satisfies Record<string, Shot>;

export const shotSrc = (s: Shot) => `/images/screens/${s.file}.webp`;
export const shotSrcSm = (s: Shot) => `/images/screens/${s.file}-sm.webp`;
export const shotSrcSet = (s: Shot) => `${shotSrcSm(s)} ${s.w / 2}w, ${shotSrc(s)} ${s.w}w`;
