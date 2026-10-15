// Example screens shown on the site (sample data). Files live in public/images/screens:
// <file>.webp (full size) and <file>-sm.webp (half size, used on phones).
// To show a real screenshot, replace both files and keep the same aspect ratio.
// Each picture's title and alt text (in every language) is under `shots` in content/en.ts, ms.ts and zh.ts.

export type Shot = {
  file: string;
  w: number;
  h: number;
  kind: "browser" | "phone" | "tablet" | "tv" | "paper";
  /** The address shown in the browser bar above a website (browser pictures only; Techub's own screens show
   *  "Techub Cloud"). */
  url?: string;
  /** Set from the page's language: see getShots() in content/index.ts. */
  title: string;
  alt: string;
};

const ipad = { w: 1536, h: 1080, kind: "tablet" } as const;
const phone = { w: 720, h: 1520, kind: "phone" } as const;
const desktop = { w: 1800, h: 1125, kind: "browser" } as const;
/** Example websites Techub designed: the same size picture as `desktop`, with their own address in the browser bar. */
const site = (url: string) => ({ ...desktop, url });

export const shotFiles = {
  /* Clinic */
  clinicDashboard: { ...ipad, file: "clinic-dashboard-ipad" },
  medication: { ...ipad, file: "patient-medication-tracking-allergy-ipad" },
  bodyChart: { ...ipad, file: "body-chart-hand-drawing" },
  clinicStock: { ...ipad, file: "clinic-inventory-ai-stock-ipad" },
  clinicPermissions: { ...ipad, file: "clinic-staff-permissions-ipad" },
  whatsappClinic: { ...phone, file: "whatsapp-appointment-reminder-clinic" },
  scanClinic: { ...phone, file: "ai-delivery-note-scan" },
  paymentClinic: { ...phone, file: "online-payment-deposit-clinic" },
  queueTv: { w: 1920, h: 1080, kind: "tv", file: "queue-number-calling-display" },
  printouts: { w: 1500, h: 1050, kind: "paper", file: "printouts-receipt-label-mc" },

  /* Hair salon */
  salonCalendar: { ...ipad, file: "salon-appointment-calendar-ipad" },
  salonPos: { ...ipad, file: "salon-pos-checkout-ipad" },
  salonStock: { ...ipad, file: "salon-inventory-ai-stock-ipad" },
  salonPermissions: { ...ipad, file: "salon-staff-permissions-ipad" },
  whatsappSalon: { ...phone, file: "whatsapp-appointment-reminder-salon" },
  salonCustomer: { ...phone, file: "salon-customer-profile" },
  scanSalon: { ...phone, file: "ai-delivery-note-scan-salon" },
  paymentSalon: { ...phone, file: "online-payment-deposit-salon" },

  /* Beauty centre */
  beautyCalendar: { ...ipad, file: "beauty-appointment-calendar-ipad" },
  faceChart: { ...ipad, file: "beauty-face-chart-ipad" },
  beautyPos: { ...ipad, file: "beauty-pos-checkout-ipad" },
  beautyStock: { ...ipad, file: "beauty-inventory-ai-stock-ipad" },
  beautyPermissions: { ...ipad, file: "beauty-staff-permissions-ipad" },
  whatsappBeauty: { ...phone, file: "whatsapp-appointment-reminder-beauty" },
  beautyPackage: { ...phone, file: "beauty-customer-package" },
  scanBeauty: { ...phone, file: "ai-delivery-note-scan-beauty" },
  paymentBeauty: { ...phone, file: "online-payment-deposit-beauty" },

  /* Spa */
  spaCalendar: { ...ipad, file: "spa-appointment-calendar-ipad" },
  bodyChartSpa: { ...ipad, file: "body-chart-hand-drawing-spa" },
  spaPos: { ...ipad, file: "spa-pos-checkout-ipad" },
  spaStock: { ...ipad, file: "spa-inventory-ai-stock-ipad" },
  spaPermissions: { ...ipad, file: "spa-staff-permissions-ipad" },
  whatsappSpa: { ...phone, file: "whatsapp-appointment-reminder-spa" },
  spaPackage: { ...phone, file: "spa-customer-package" },
  scanSpa: { ...phone, file: "ai-delivery-note-scan-spa" },
  paymentSpa: { ...phone, file: "online-payment-deposit-spa" },

  /* Live selling */
  liveDashboard: { ...ipad, file: "live-selling-dashboard-ipad" },
  liveVisitors: { ...ipad, file: "live-selling-visitors-ipad" },
  liveQueue: { ...ipad, file: "live-selling-order-queue-ipad" },
  liveProducts: { ...ipad, file: "live-selling-products-schedule-ipad" },
  reportsLive: { ...ipad, file: "live-selling-report-ipad" },
  livePermissions: { ...ipad, file: "live-selling-staff-permissions-ipad" },
  liveShop: { ...phone, file: "live-selling-shop-phone" },
  liveProduct: { ...phone, file: "live-selling-product-phone" },
  liveCheckout: { ...phone, file: "live-selling-checkout-phone" },
  livePayment: { ...phone, file: "live-selling-online-payment-phone" },

  /* PC */
  permissionsDesktop: { ...desktop, file: "staff-permission-control-desktop" },
  clinicDashboardDesktop: { ...desktop, file: "clinic-dashboard-desktop" },

  /* Reports (every business) */
  reportsClinic: { ...ipad, file: "reports-clinic-ipad" },
  reportsSalon: { ...ipad, file: "reports-salon-ipad" },
  reportsBeauty: { ...ipad, file: "reports-beauty-ipad" },
  reportsSpa: { ...ipad, file: "reports-spa-ipad" },

  /* Staff profiles and payroll */
  staffSalon: { ...phone, file: "staff-profile-salon" },
  staffBeauty: { ...phone, file: "staff-profile-beauty" },
  staffSpa: { ...phone, file: "staff-profile-spa" },
  payrollSalon: { ...ipad, file: "payroll-salon-ipad" },
  payrollBeauty: { ...ipad, file: "payroll-beauty-ipad" },
  payrollSpa: { ...ipad, file: "payroll-spa-ipad" },

  /* Booking deposits: held, turned into income (with the invoice it made), then the list with refund and credit notes */
  depositsSalon: { ...ipad, file: "salon-booking-deposits-ipad" },
  depositInvoiceSalon: { ...ipad, file: "salon-deposit-to-income-invoice-ipad" },
  depositNotesSalon: { ...ipad, file: "salon-deposit-refund-credit-note-ipad" },
  depositsBeauty: { ...ipad, file: "beauty-booking-deposits-ipad" },
  depositInvoiceBeauty: { ...ipad, file: "beauty-deposit-to-income-invoice-ipad" },
  depositNotesBeauty: { ...ipad, file: "beauty-deposit-refund-credit-note-ipad" },
  depositsSpa: { ...ipad, file: "spa-booking-deposits-ipad" },
  depositInvoiceSpa: { ...ipad, file: "spa-deposit-to-income-invoice-ipad" },
  depositNotesSpa: { ...ipad, file: "spa-deposit-refund-credit-note-ipad" },

  /* Software customisation: customer A's request, the AI estimate and quote, free testing, then customers A to D's changes */
  customRequest: { ...phone, file: "customisation-request-whatsapp" },
  customEstimate: { ...ipad, file: "customisation-ai-estimate-quote-ipad" },
  customTesting: { ...ipad, file: "customisation-testing-integration-ipad" },
  customClaims: { ...ipad, file: "customisation-clinic-panel-claim-export-ipad" },
  customSalesExport: { ...ipad, file: "customisation-salon-accountant-sales-export-ipad" },
  customFoundUs: { ...ipad, file: "customisation-spa-booking-question-ipad" },
  customCourier: { ...ipad, file: "customisation-online-seller-courier-file-ipad" },

  /* Data migration: files in any format, the AI reading an old system's screens, the checks, done */
  migrationImport: { ...desktop, file: "data-migration-import-any-format-desktop" },
  migrationScan: { ...desktop, file: "data-migration-ai-screen-scan-desktop" },
  migrationCheck: { ...desktop, file: "data-migration-check-desktop" },
  migrationDone: { ...desktop, file: "data-migration-complete-desktop" },
  migrationChat: { ...phone, file: "data-migration-whatsapp" },

  /* Business email on the customer's own domain */
  emailInbox: { ...ipad, file: "business-email-inbox-ipad" },
  emailSetup: { ...ipad, file: "business-email-setup-ipad" },
  emailPhone: { ...phone, file: "business-email-phone" },

  /* Website design: the example site in the main picture (three pages and its phone view), then more designs */
  siteHome: { ...site("velisseskin.com.my"), file: "website-design-skin-clinic-home" },
  siteTreatments: { ...site("velisseskin.com.my/treatments"), file: "website-design-skin-clinic-treatments" },
  siteContact: { ...site("velisseskin.com.my/contact"), file: "website-design-skin-clinic-contact" },
  sitePhone: { ...phone, file: "website-design-skin-clinic-phone" },
  siteDental: { ...site("seridental.com.my"), file: "website-design-dental-clinic" },
  siteCafe: { ...site("kopiandcrumb.com.my"), file: "website-design-cafe" },
  siteCafePhone: { ...phone, file: "website-design-cafe-phone" },
  siteHomestay: { ...site("teduhvilla.com.my"), file: "website-design-homestay" },
  siteHomestayPhone: { ...phone, file: "website-design-homestay-phone" },
  siteInterior: { ...site("atelierruang.com.my"), file: "website-design-interior-design" },
  siteAccounting: { ...site("tanrahman.com.my"), file: "website-design-accounting-firm" },

  /* LHDN e-Invoice and custom systems */
  eInvoice: { w: 1500, h: 1050, kind: "paper", file: "lhdn-e-invoice" },
  erpDesktop: { ...desktop, file: "custom-erp-desktop" },
  plateScanner: { ...desktop, file: "number-plate-scanner-desktop" },
  objectDetection: { ...desktop, file: "ai-object-detection-desktop" },
} satisfies Record<string, Omit<Shot, "title" | "alt">>;

export type ShotKey = keyof typeof shotFiles;

export const shotSrc = (s: Pick<Shot, "file">) => `/images/screens/${s.file}.webp`;
export const shotSrcSm = (s: Pick<Shot, "file">) => `/images/screens/${s.file}-sm.webp`;
export const shotSrcSet = (s: Pick<Shot, "file" | "w">) => `${shotSrcSm(s)} ${s.w / 2}w, ${shotSrc(s)} ${s.w}w`;
