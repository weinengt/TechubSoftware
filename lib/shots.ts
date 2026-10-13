// Example screens shown on the site (sample data). Files live in public/images/screens:
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

const ipad = { w: 1536, h: 1080, kind: "tablet" } as const;
const phone = { w: 720, h: 1520, kind: "phone" } as const;
const desktop = { w: 1800, h: 1125, kind: "browser" } as const;

export const shots = {
  /* Clinic */
  clinicDashboard: { ...ipad, file: "clinic-dashboard-ipad", title: "Clinic dashboard on iPad",
    alt: "Techub clinic management system on an iPad showing the live queue, today's appointments confirmed on WhatsApp, revenue and low stock alerts" },
  medication: { ...ipad, file: "patient-medication-tracking-ipad", title: "Patient medication tracking",
    alt: "Patient medication history on an iPad with a penicillin allergy alert and a suggested alternative medicine" },
  bodyChart: { ...ipad, file: "body-chart-hand-drawing", title: "Hand-drawn body chart",
    alt: "iPad body chart with the doctor's hand-drawn notes and the patient's digital consent signature" },
  clinicStock: { ...ipad, file: "clinic-inventory-ai-stock-ipad", title: "Medicine stock & AI insights",
    alt: "Clinic medicine stock movement log on an iPad with an AI reorder suggestion and expiring batches" },
  clinicPermissions: { ...ipad, file: "clinic-staff-permissions-ipad", title: "Staff permission control",
    alt: "Role-based permissions for doctors, nurses, pharmacy and cashiers on an iPad, with an audit trail" },
  whatsappClinic: { ...phone, file: "whatsapp-appointment-reminder-clinic", title: "WhatsApp appointment reminder",
    alt: "WhatsApp appointment confirmation and reminder sent automatically to a clinic patient" },
  scanClinic: { ...phone, file: "ai-delivery-note-scan", title: "AI delivery note scan",
    alt: "Phone scanning a medicine supplier's delivery note while AI reads each item, batch and expiry and updates clinic stock" },
  queueTv: { w: 1920, h: 1080, kind: "tv", file: "queue-number-calling-display", title: "Queue number calling display",
    alt: "Clinic queue number calling TV display showing now calling A023 to Room 2 in English, Malay and Chinese" },
  printouts: { w: 1500, h: 1050, kind: "paper", file: "printouts-receipt-label-mc", title: "Receipts, MC & labels",
    alt: "Sample printed receipt, medical certificate and medicine label produced by the Techub clinic system" },

  /* Hair salon */
  salonCalendar: { ...ipad, file: "salon-appointment-calendar-ipad", title: "Hair salon booking calendar",
    alt: "Hair salon appointment calendar on an iPad by stylist, with colour, rebonding and keratin bookings, walk-ins and WhatsApp confirmations" },
  salonPos: { ...ipad, file: "salon-pos-checkout-ipad", title: "Salon POS checkout",
    alt: "Hair salon POS checkout on an iPad with services, retail products, stylist commission and DuitNow QR payment" },
  salonStock: { ...ipad, file: "salon-inventory-ai-stock-ipad", title: "Salon product stock & AI insights",
    alt: "Hair salon product stock movement log on an iPad with an AI reorder suggestion" },
  salonPermissions: { ...ipad, file: "salon-staff-permissions-ipad", title: "Staff permission control",
    alt: "Role-based permissions for the salon owner, manager, stylists and receptionist on an iPad, with an audit trail" },
  whatsappSalon: { ...phone, file: "whatsapp-appointment-reminder-salon", title: "WhatsApp booking reminder",
    alt: "WhatsApp booking confirmation and reminder sent automatically to a hair salon customer, who confirms with one tap" },
  salonCustomer: { ...phone, file: "salon-customer-profile", title: "Customer profile & colour formula",
    alt: "Hair salon customer profile on a phone with visit history, colour formula, favourite stylist and member points" },
  scanSalon: { ...phone, file: "ai-delivery-note-scan-salon", title: "AI delivery note scan",
    alt: "Phone scanning a hair products delivery note while AI reads each item and updates salon stock" },

  /* Beauty centre */
  beautyCalendar: { ...ipad, file: "beauty-appointment-calendar-ipad", title: "Beauty centre booking calendar",
    alt: "Beauty centre appointment calendar on an iPad with facials, lash and brow, nails and slimming bookings and package sessions" },
  faceChart: { ...ipad, file: "beauty-face-chart-ipad", title: "Face chart, photos & consent",
    alt: "Facial treatment face chart on an iPad with the beautician's hand-drawn skin notes, before and after photos and the customer's e-signature" },
  beautyPos: { ...ipad, file: "beauty-pos-checkout-ipad", title: "Beauty POS checkout",
    alt: "Beauty centre POS checkout on an iPad with treatments, package redemption, products and staff commission" },
  beautyStock: { ...ipad, file: "beauty-inventory-ai-stock-ipad", title: "Beauty product stock & AI insights",
    alt: "Beauty centre product stock movement log on an iPad with an AI reorder suggestion" },
  whatsappBeauty: { ...phone, file: "whatsapp-appointment-reminder-beauty", title: "WhatsApp booking reminder",
    alt: "WhatsApp booking confirmation and reminder sent automatically to a beauty centre customer, with package sessions left" },
  beautyPackage: { ...phone, file: "beauty-customer-package", title: "Packages & treatment history",
    alt: "Beauty centre customer profile on a phone with facial and lash packages, sessions left, skin notes and next appointment" },
  scanBeauty: { ...phone, file: "ai-delivery-note-scan-beauty", title: "AI delivery note scan",
    alt: "Phone scanning a beauty supplies delivery note while AI reads each item and updates stock" },

  /* Spa */
  spaCalendar: { ...ipad, file: "spa-appointment-calendar-ipad", title: "Spa booking calendar",
    alt: "Spa appointment calendar on an iPad by therapist and room, with massage, body scrub and couple spa bookings" },
  bodyChartSpa: { ...ipad, file: "body-chart-hand-drawing-spa", title: "Treatment map & signature",
    alt: "iPad treatment map with the therapist's hand-drawn massage areas and the customer's digital signature" },
  spaPos: { ...ipad, file: "spa-pos-checkout-ipad", title: "Spa POS checkout",
    alt: "Spa POS checkout on an iPad with massage packages, retail products, therapist commission and payment options" },
  spaStock: { ...ipad, file: "spa-inventory-ai-stock-ipad", title: "Spa stock & AI insights",
    alt: "Spa stock movement log for oils, scrubs and towels on an iPad with an AI reorder suggestion" },
  spaPermissions: { ...ipad, file: "spa-staff-permissions-ipad", title: "Staff permission control",
    alt: "Role-based permissions for the spa owner, manager, therapists and receptionist on an iPad, with an audit trail" },
  whatsappSpa: { ...phone, file: "whatsapp-appointment-reminder-spa", title: "WhatsApp booking reminder",
    alt: "WhatsApp booking confirmation and reminder sent automatically to a spa customer, who confirms with one tap" },
  spaPackage: { ...phone, file: "spa-customer-package", title: "Packages & memberships",
    alt: "Spa customer profile on a phone with package sessions left, next appointment and massage preferences" },
  scanSpa: { ...phone, file: "ai-delivery-note-scan-spa", title: "AI delivery note scan",
    alt: "Phone scanning a spa supplies delivery note while AI reads each item and updates stock" },

  /* PC */
  permissionsDesktop: { ...desktop, file: "staff-permission-control-desktop", title: "Staff permission control on PC",
    alt: "Staff roles and permission control in a web browser on a PC, with an audit trail of discounts and refunds" },
} satisfies Record<string, Shot>;

export const shotSrc = (s: Shot) => `/images/screens/${s.file}.webp`;
export const shotSrcSm = (s: Shot) => `/images/screens/${s.file}-sm.webp`;
export const shotSrcSet = (s: Shot) => `${shotSrcSm(s)} ${s.w / 2}w, ${shotSrc(s)} ${s.w}w`;
