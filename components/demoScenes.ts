import type { ShotKey } from "@/lib/shots";
import type { ServicePageKey, SystemKey } from "@/lib/site";
import type { IconName } from "./Icons";

// The moments of the moving example screens (components/ScreenDemo.tsx): the home page, each system page and service
// page and their rows on the Use Cases page, the deposits section of the salon, beauty centre and spa pages, the
// Contact page and each custom system. Kept apart from that client component so pages can pick the screenshots they
// need on the server. On the Website Design page the "tablet" is a laptop browser showing an example website.
// Each moment points at one device (`focus`), may change what any device shows (a device it leaves out keeps its
// screen), highlights the part of the screen it is about (`spot`: left, top, width and height in % of the screen;
// `tap` adds a finger tap) and shows a short note, whose words are under `demo.notes` in content/en.ts, ms.ts and zh.ts.
// The spots were measured on the screens in design/mockups: measure again if a mockup changes.
// Where an iPad has a phone in front of it, the phone covers about the outer fifth of the iPad screen from a quarter
// of the way down, on the side `phoneSide` gives: an iPad spot stays out of that corner, or the phone hides it.

export type DemoDevice = "laptop" | "tablet" | "phone" | "screen";
const devices: DemoDevice[] = ["laptop", "tablet", "phone", "screen"];

type Screens = Partial<Record<DemoDevice, ShotKey>>;
export type DemoScene = Screens & {
  key: string;
  focus: DemoDevice;
  spot: [number, number, number, number];
  tap?: boolean;
  icon: IconName;
  green?: boolean;
};

const home: DemoScene[] = [
  { key: "realtime", focus: "laptop", laptop: "clinicDashboardDesktop", tablet: "spaCalendar", phone: "whatsappSpa", spot: [19.3, 27.7, 17.5, 26.5], icon: "Sync" },
  { key: "deposit", focus: "phone", phone: "paymentSpa", spot: [3.9, 88.2, 92.2, 6.6], tap: true, icon: "Card" },
  { key: "booking", focus: "tablet", spot: [13.8, 21.5, 20.2, 12.2], icon: "Calendar" },
  { key: "whatsapp", focus: "phone", phone: "whatsappSpa", spot: [2.8, 54.2, 79.3, 4.2], tap: true, icon: "Whatsapp", green: true },
  { key: "report", focus: "tablet", tablet: "reportsSpa", spot: [22.5, 1.6, 25.5, 4.2], icon: "Bolt" },
  { key: "ai", focus: "phone", tablet: "spaStock", phone: "scanSpa", spot: [4.4, 59.7, 91.1, 5.1], icon: "Sparkles" },
  { key: "live", focus: "tablet", tablet: "liveDashboard", phone: "liveShop", spot: [8, 9.4, 21.7, 10.3], icon: "Live" },
];

const clinic: DemoScene[] = [
  { key: "queue", focus: "tablet", tablet: "clinicDashboard", phone: "whatsappClinic", spot: [9.5, 28.6, 20.5, 27.6], icon: "Megaphone" },
  { key: "whatsapp", focus: "phone", spot: [2.8, 51.9, 79.3, 4.2], tap: true, icon: "Whatsapp", green: true },
  { key: "allergy", focus: "tablet", tablet: "medication", spot: [9.5, 46.4, 30.3, 18.3], icon: "Shield" },
  { key: "chart", focus: "tablet", tablet: "bodyChart", spot: [2.9, 71.1, 15.5, 19], icon: "Pen" },
  { key: "activity", focus: "tablet", tablet: "clinicPermissions", spot: [9.5, 81.4, 58, 6.6], icon: "Lock" },
  { key: "deposit", focus: "phone", phone: "paymentClinic", spot: [3.9, 88.2, 92.2, 6.6], tap: true, icon: "Card" },
  { key: "stock", focus: "tablet", tablet: "clinicStock", phone: "scanClinic", spot: [53.8, 9.4, 21.7, 10.7], icon: "Sparkles" },
  { key: "report", focus: "tablet", tablet: "reportsClinic", spot: [20.9, 1.6, 25.8, 4.2], icon: "Bolt" },
];

const salon: DemoScene[] = [
  { key: "confirmed", focus: "tablet", tablet: "salonCalendar", phone: "whatsappSalon", spot: [60.5, 9.4, 19.3, 2.6], icon: "Check" },
  { key: "whatsapp", focus: "phone", spot: [2.8, 56.5, 79.3, 4.2], tap: true, icon: "Whatsapp", green: true },
  { key: "deposit", focus: "phone", phone: "paymentSalon", spot: [3.9, 88.2, 92.2, 6.6], tap: true, icon: "Card" },
  { key: "commission", focus: "tablet", tablet: "salonPos", spot: [65.1, 19, 31.8, 16.4], icon: "Coins" },
  { key: "staff", focus: "phone", tablet: "salonCalendar", phone: "staffSalon", spot: [7.8, 18.7, 84.4, 5.4], icon: "Users" },
  { key: "activity", focus: "tablet", tablet: "salonPermissions", spot: [16.9, 74.8, 50.6, 6.6], icon: "Lock" },
  { key: "stock", focus: "tablet", tablet: "salonStock", phone: "scanSalon", spot: [70.3, 22.1, 28.1, 20.2], icon: "Sparkles" },
  { key: "payroll", focus: "tablet", tablet: "payrollSalon", spot: [59.4, 9.4, 39.1, 17.9], icon: "Coins" },
];

const beauty: DemoScene[] = [
  { key: "packages", focus: "tablet", tablet: "beautyCalendar", phone: "whatsappBeauty", spot: [13.8, 21.5, 20.2, 12.2], icon: "Gift" },
  { key: "whatsapp", focus: "phone", spot: [2.8, 56.5, 79.3, 4.2], tap: true, icon: "Whatsapp", green: true },
  { key: "left", focus: "phone", phone: "beautyPackage", spot: [3.9, 31.1, 92.2, 9.2], icon: "Gift" },
  { key: "faceChart", focus: "tablet", tablet: "faceChart", spot: [24.8, 30.3, 16.8, 30.5], icon: "Pen" },
  { key: "deposit", focus: "phone", phone: "paymentBeauty", spot: [3.9, 88.2, 92.2, 6.6], tap: true, icon: "Card" },
  { key: "activity", focus: "tablet", tablet: "beautyPermissions", spot: [9.5, 74.8, 58, 6.6], icon: "Lock" },
  { key: "stock", focus: "tablet", tablet: "beautyStock", phone: "scanBeauty", spot: [53.8, 9.4, 21.7, 10.7], icon: "Sparkles" },
  { key: "report", focus: "tablet", tablet: "reportsBeauty", spot: [25.8, 1.6, 25.7, 4.2], icon: "Bolt" },
];

const spa: DemoScene[] = [
  { key: "couple", focus: "tablet", tablet: "spaCalendar", phone: "whatsappSpa", spot: [77.6, 34.2, 20.2, 16.4], icon: "Lotus" },
  { key: "whatsapp", focus: "phone", spot: [2.8, 54.2, 79.3, 4.2], tap: true, icon: "Whatsapp", green: true },
  { key: "package", focus: "phone", phone: "spaPackage", spot: [3.9, 31.1, 92.2, 10.3], icon: "Gift" },
  { key: "map", focus: "tablet", tablet: "bodyChartSpa", spot: [40.1, 18.9, 20.8, 21.1], icon: "Pen" },
  { key: "staff", focus: "phone", phone: "staffSpa", spot: [7.8, 18.7, 84.4, 5.4], icon: "Users" },
  { key: "activity", focus: "tablet", tablet: "spaPermissions", spot: [16.9, 81.4, 50.6, 6.6], icon: "Lock" },
  { key: "stock", focus: "tablet", tablet: "spaStock", phone: "scanSpa", spot: [70.3, 22.1, 28.1, 20.2], icon: "Sparkles" },
  { key: "payroll", focus: "tablet", tablet: "payrollSpa", spot: [59.4, 9.4, 39.1, 17.9], icon: "Coins" },
];

const live: DemoScene[] = [
  { key: "visitors", focus: "tablet", tablet: "liveDashboard", phone: "liveShop", spot: [8, 9.4, 21.7, 10.3], icon: "Live" },
  { key: "buy", focus: "phone", spot: [31.9, 39.1, 14.1, 3.6], tap: true, icon: "Bolt" },
  { key: "rush", focus: "tablet", tablet: "liveQueue", spot: [18.1, 31, 19.3, 7.9], icon: "Server" },
  { key: "last", focus: "phone", phone: "liveProduct", spot: [4.4, 51.6, 91.1, 7.4], icon: "Box" },
  { key: "stopped", focus: "tablet", spot: [45.1, 17.4, 26.2, 6.5], icon: "Shield" },
  { key: "paid", focus: "phone", phone: "livePayment", spot: [3.9, 87.4, 92.2, 6.6], tap: true, icon: "Wallet" },
  { key: "receipt", focus: "phone", phone: "liveCheckout", spot: [3.9, 77, 92.2, 8.4], icon: "Whatsapp", green: true },
  { key: "activity", focus: "tablet", tablet: "livePermissions", spot: [9.5, 83.3, 58, 6.6], icon: "Lock" },
];

const inventory: DemoScene[] = [
  { key: "stockIn", focus: "tablet", tablet: "inventoryDashboard", phone: "stockScan", spot: [8.7, 87.1, 41.6, 10], icon: "Layers" },
  { key: "scan", focus: "phone", spot: [3.9, 53.7, 92.2, 15.3], icon: "Scan" },
  { key: "trail", focus: "tablet", tablet: "stockTrail", spot: [38.3, 81.9, 37.7, 14.3], icon: "Route" },
  { key: "sale", focus: "tablet", tablet: "erpSales", spot: [56, 16.1, 19.5, 64.9], icon: "Invoice" },
  { key: "return", focus: "tablet", tablet: "erpReturn", spot: [9.7, 86.1, 37.7, 6.9], tap: true, icon: "Sync" },
  { key: "creditNote", focus: "tablet", spot: [50.2, 9.4, 26.8, 27.5], icon: "Receipt", green: true },
  { key: "report", focus: "tablet", tablet: "reportsInventory", spot: [25.4, 1.6, 25.9, 4.2], icon: "Bolt" },
  { key: "activity", focus: "tablet", tablet: "inventoryPermissions", spot: [9.5, 74.8, 58, 6.6], icon: "Lock" },
];

const payroll: DemoScene[] = [
  { key: "run", focus: "tablet", tablet: "hrPayroll", phone: "payslipPhone", spot: [7.6, 8.9, 53.7, 19], icon: "Coins" },
  { key: "statutory", focus: "tablet", spot: [52.4, 35.3, 22.2, 58.2], icon: "Shield" },
  { key: "approve", focus: "tablet", spot: [84.4, 0.8, 14.4, 5.8], tap: true, icon: "Check" },
  { key: "payslip", focus: "phone", spot: [6.9, 19.1, 86.1, 10.9], icon: "Whatsapp", green: true },
  { key: "claim", focus: "phone", phone: "leaveClaims", spot: [2.8, 34.1, 94.4, 19.5], icon: "Sparkles" },
  { key: "contributions", focus: "tablet", tablet: "hrContributions", spot: [7.6, 8.9, 68.7, 22.2], icon: "Receipt" },
  { key: "report", focus: "tablet", tablet: "reportsPayroll", spot: [22.8, 1, 26.1, 5.3], icon: "Bolt" },
  { key: "activity", focus: "tablet", tablet: "payrollPermissions", spot: [9.1, 74.2, 58.8, 7.7], icon: "Lock" },
];

const contact: DemoScene[] = [
  { key: "whatsapp", focus: "phone", phone: "whatsappSalon", spot: [2.8, 56.5, 79.3, 4.2], tap: true, icon: "Whatsapp", green: true },
  { key: "deposit", focus: "phone", phone: "paymentSalon", spot: [3.9, 88.2, 92.2, 6.6], tap: true, icon: "Card" },
  { key: "staff", focus: "phone", phone: "staffSalon", spot: [7.8, 18.7, 84.4, 5.4], icon: "Users" },
  { key: "ai", focus: "phone", phone: "scanSalon", spot: [4.4, 59.7, 91.1, 5.1], icon: "Sparkles" },
];

/** The deposits section of the salon, beauty centre and spa pages: the customer pays a booking deposit, it is held
 *  until the service is done, one click turns it into income and makes the invoice, and refunds and credits get their
 *  own notes. The three deposits screens (design/mockups/deposits.html) share one layout, so the spots are the same. */
const deposits = (payment: ShotKey, held: ShotKey, invoice: ShotKey, notes: ShotKey): DemoScene[] => [
  { key: "paid", focus: "phone", tablet: held, phone: payment, spot: [3.9, 88.2, 92.2, 6.6], tap: true, icon: "Card" },
  { key: "held", focus: "tablet", spot: [8.7, 32.8, 39.1, 7.2], icon: "Wallet" },
  { key: "convert", focus: "tablet", spot: [63.4, 33.7, 14.3, 5.6], tap: true, icon: "Coins" },
  { key: "invoice", focus: "tablet", tablet: invoice, spot: [32.3, 46.5, 35.4, 6.4], icon: "Invoice" },
  { key: "notes", focus: "tablet", tablet: notes, spot: [38.6, 73.1, 24, 15.3], icon: "Sparkles" },
];

const erp: DemoScene[] = [
  { key: "sales", focus: "screen", screen: "erpDesktop", spot: [18, 9.3, 19.3, 10.4], icon: "Chart" },
  { key: "approvals", focus: "screen", spot: [71.8, 21.6, 26.5, 33.3], icon: "Check" },
  { key: "einvoice", focus: "screen", spot: [18.1, 84.3, 52.5, 6.1], icon: "Invoice" },
];

const detection: DemoScene[] = [
  { key: "helmet", focus: "screen", screen: "objectDetection", spot: [1.3, 14.4, 35.2, 31.6], icon: "Shield" },
  { key: "bay", focus: "screen", spot: [37.3, 47.4, 35.2, 31.6], icon: "Car" },
  { key: "count", focus: "screen", spot: [73.7, 67.2, 25, 30.9], icon: "Detect" },
];

const plate: DemoScene[] = [
  { key: "read", focus: "screen", screen: "plateScanner", spot: [38.1, 36.8, 11.2, 8.1], icon: "Scan" },
  { key: "gate", focus: "screen", spot: [70.8, 9.3, 27.5, 28], icon: "Check" },
  { key: "denied", focus: "screen", spot: [18.1, 81.5, 80.2, 4.7], icon: "Shield" },
];

/* The service pages (lib/site.ts servicePages). Website pictures are browsers in the iPad's place. */

const customisation: DemoScene[] = [
  { key: "request", focus: "phone", tablet: "customEstimate", phone: "customRequest", spot: [17.4, 16.6, 80.3, 11.9], icon: "Whatsapp", green: true },
  { key: "estimate", focus: "tablet", spot: [9, 76, 33.4, 20.4], icon: "Sparkles" },
  { key: "quote", focus: "phone", spot: [2.3, 35.2, 80.3, 21.7], icon: "Receipt" },
  { key: "testing", focus: "tablet", tablet: "customTesting", spot: [7.5, 32.8, 67.2, 65.7], icon: "Check" },
  { key: "live", focus: "tablet", tablet: "customClaims", spot: [7.5, 8.9, 71, 39.9], tap: true, icon: "Rocket" },
];

const migration: DemoScene[] = [
  { key: "formats", focus: "screen", screen: "migrationImport", spot: [17.5, 27.8, 33.7, 58.6], icon: "Layers" },
  { key: "scan", focus: "screen", screen: "migrationScan", spot: [19.2, 34.1, 47, 60.3], icon: "Scan" },
  { key: "check", focus: "screen", screen: "migrationCheck", spot: [18.9, 25.2, 78.5, 10.7], icon: "Check" },
  { key: "done", focus: "screen", screen: "migrationDone", spot: [20.4, 71.2, 53.5, 14.1], icon: "Coins" },
];

const email: DemoScene[] = [
  { key: "domain", focus: "tablet", tablet: "emailInbox", phone: "emailPhone", spot: [21.2, 0.8, 36.7, 6.4], icon: "Globe" },
  { key: "phone", focus: "phone", spot: [0.5, 30, 99, 15.1], tap: true, icon: "Mail" },
  { key: "setup", focus: "tablet", tablet: "emailSetup", spot: [8, 9.4, 58.2, 43.3], icon: "Wrench" },
  { key: "storage", focus: "tablet", spot: [67.4, 9.4, 31.1, 9.4], icon: "Database" },
];

const website: DemoScene[] = [
  { key: "design", focus: "tablet", tablet: "siteHome", phone: "sitePhone", spot: [5.1, 18.2, 37.8, 60.4], icon: "Sparkles" },
  { key: "instant", focus: "tablet", tablet: "siteTreatments", spot: [39.4, 2.2, 8, 5.7], tap: true, icon: "Bolt" },
  { key: "phone", focus: "phone", spot: [3.9, 46, 92.1, 36], icon: "Devices" },
  { key: "contact", focus: "tablet", tablet: "siteContact", spot: [5.1, 48, 14.9, 7.9], tap: true, icon: "Whatsapp", green: true },
  { key: "seo", focus: "tablet", tablet: "siteHome", spot: [5, 22.5, 38, 34.5], icon: "Chart" },
];

/** Fills in the screens each moment leaves out: what the device showed the moment before (also across the loop). */
function resolve(moments: DemoScene[]): DemoScene[] {
  const screensOf = (m: DemoScene) => Object.fromEntries(devices.filter((d) => m[d]).map((d) => [d, m[d]])) as Screens;
  let now: Screens = {};
  for (const m of moments) now = { ...now, ...screensOf(m) };
  return moments.map((m) => ({ ...m, ...(now = { ...now, ...screensOf(m) }) }));
}

export const demos = {
  home: resolve(home),
  clinic: resolve(clinic),
  salon: resolve(salon),
  beauty: resolve(beauty),
  spa: resolve(spa),
  live: resolve(live),
  inventory: resolve(inventory),
  payroll: resolve(payroll),
  contact: resolve(contact),
  erp: resolve(erp),
  detection: resolve(detection),
  plate: resolve(plate),
  salonDeposits: resolve(deposits("paymentSalon", "depositsSalon", "depositInvoiceSalon", "depositNotesSalon")),
  beautyDeposits: resolve(deposits("paymentBeauty", "depositsBeauty", "depositInvoiceBeauty", "depositNotesBeauty")),
  spaDeposits: resolve(deposits("paymentSpa", "depositsSpa", "depositInvoiceSpa", "depositNotesSpa")),
  customisation: resolve(customisation),
  migration: resolve(migration),
  email: resolve(email),
  website: resolve(website),
};
export type DemoKey = keyof typeof demos;

/** The side of the iPad the phone stands on (right when not listed), wherever the demo shows: the spots are placed
 *  clear of it. On the Use Cases page this also makes the rows take turns. */
export const phoneSide: Partial<Record<DemoKey, "left" | "right">> = { salon: "left", spa: "left" };

/** Every screenshot a demo shows, so the page can pass their titles and alt text in its language. */
export const demoShots = (k: DemoKey): ShotKey[] => [...new Set(demos[k].flatMap((s) => devices.flatMap((d) => s[d] ?? [])))];

/** The moment each system's row on the Use Cases page starts at, so the rows don't all open on the same kind of screen. */
export const useCaseStart: Record<SystemKey | ServicePageKey, string> = {
  clinic: "queue", salon: "staff", beauty: "faceChart", spa: "package", live: "visitors", inventory: "trail", payroll: "run",
  customisation: "estimate", migration: "scan", email: "domain", website: "design",
};

/** How each service page's moving picture is laid out: an iPad (or a website) with a phone, or one PC screen. */
export const serviceLayout: Record<ServicePageKey, "combo" | "screen"> = { customisation: "combo", migration: "screen", email: "combo", website: "combo" };
