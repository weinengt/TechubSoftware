// Renders the example product screens in design/mockups/*.html into
// public/images/screens/<name>.webp (full size) and <name>-sm.webp (half size).
//
//   npm i --no-save playwright && npx playwright install chromium
//   node scripts/render-mockups.mjs              # all screens
//   node scripts/render-mockups.mjs whatsapp     # only names containing "whatsapp"
//
// To use a real screenshot instead, skip this script and save your image as
// public/images/screens/<name>.webp (and <name>-sm.webp), same aspect ratio.

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || "playwright");

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "design/mockups");
const out = path.join(root, "public/images/screens");

// name, html file (+ optional ?v= variant), CSS size, pixel scale, transparent background
const ipad = { w: 1024, h: 720, scale: 1.5 }; // iPad, landscape
const phone = { w: 360, h: 760, scale: 2 };
const desktop = { w: 1200, h: 750, scale: 1.5 };
const site = { w: 1440, h: 900, scale: 1.25 }; // a website on a laptop: same size picture as `desktop`
export const screens = [
  // Clinic
  { name: "clinic-dashboard-ipad", file: "clinic-dashboard.html", ...ipad },
  { name: "patient-medication-tracking-allergy-ipad", file: "patient-medication.html", ...ipad },
  { name: "patient-health-record-ipad", file: "patient-health-record.html", ...ipad },
  { name: "body-chart-hand-drawing", file: "body-chart.html", ...ipad },
  { name: "clinic-inventory-ai-stock-ipad", file: "inventory.html?v=clinic", ...ipad },
  { name: "clinic-staff-permissions-ipad", file: "permissions.html?v=clinic", ...ipad },
  { name: "whatsapp-appointment-reminder-clinic", file: "whatsapp.html?v=clinic", ...phone },
  { name: "ai-delivery-note-scan", file: "delivery-scan.html?v=clinic", ...phone },
  { name: "ic-scanner-patient-registration", file: "ic-scan.html", ...phone },
  { name: "lab-report-upload-patient-record", file: "report-upload.html", ...phone },
  { name: "online-payment-deposit-clinic", file: "online-payment.html?v=clinic", ...phone },
  { name: "queue-number-calling-display", file: "queue-display.html", w: 1280, h: 720, scale: 1.5 },
  { name: "printouts-receipt-label-mc", file: "printouts.html", w: 1000, h: 700, scale: 1.5, transparent: true },
  // Hair salon
  { name: "salon-appointment-calendar-ipad", file: "calendar.html?v=salon", ...ipad },
  { name: "salon-pos-checkout-ipad", file: "pos.html?v=salon", ...ipad },
  { name: "salon-inventory-ai-stock-ipad", file: "inventory.html?v=salon", ...ipad },
  { name: "salon-staff-permissions-ipad", file: "permissions.html?v=salon", ...ipad },
  { name: "whatsapp-appointment-reminder-salon", file: "whatsapp.html?v=salon", ...phone },
  { name: "salon-customer-profile", file: "customer-package.html?v=salon", ...phone },
  { name: "ai-delivery-note-scan-salon", file: "delivery-scan.html?v=salon", ...phone },
  { name: "online-payment-deposit-salon", file: "online-payment.html?v=salon", ...phone },
  // Beauty centre
  { name: "beauty-appointment-calendar-ipad", file: "calendar.html?v=beauty", ...ipad },
  { name: "beauty-face-chart-ipad", file: "body-chart.html?v=beauty", ...ipad },
  { name: "beauty-pos-checkout-ipad", file: "pos.html?v=beauty", ...ipad },
  { name: "beauty-inventory-ai-stock-ipad", file: "inventory.html?v=beauty", ...ipad },
  { name: "beauty-staff-permissions-ipad", file: "permissions.html?v=beauty", ...ipad },
  { name: "whatsapp-appointment-reminder-beauty", file: "whatsapp.html?v=beauty", ...phone },
  { name: "beauty-customer-package", file: "customer-package.html?v=beauty", ...phone },
  { name: "ai-delivery-note-scan-beauty", file: "delivery-scan.html?v=beauty", ...phone },
  { name: "online-payment-deposit-beauty", file: "online-payment.html?v=beauty", ...phone },
  // Spa
  { name: "spa-appointment-calendar-ipad", file: "calendar.html?v=spa", ...ipad },
  { name: "body-chart-hand-drawing-spa", file: "body-chart.html?v=spa", ...ipad },
  { name: "spa-pos-checkout-ipad", file: "pos.html?v=spa", ...ipad },
  { name: "spa-inventory-ai-stock-ipad", file: "inventory.html?v=spa", ...ipad },
  { name: "spa-staff-permissions-ipad", file: "permissions.html?v=spa", ...ipad },
  { name: "whatsapp-appointment-reminder-spa", file: "whatsapp.html?v=spa", ...phone },
  { name: "spa-customer-package", file: "customer-package.html?v=spa", ...phone },
  { name: "ai-delivery-note-scan-spa", file: "delivery-scan.html?v=spa", ...phone },
  { name: "online-payment-deposit-spa", file: "online-payment.html?v=spa", ...phone },
  // Desktop (PC) screens for the "works on every device" pictures
  { name: "staff-permission-control-desktop", file: "permissions.html?v=salon", ...desktop },
  { name: "clinic-dashboard-desktop", file: "clinic-dashboard.html", ...desktop },
  // Reports, staff profiles and payroll for each business
  { name: "reports-clinic-ipad", file: "reports.html?v=clinic", ...ipad },
  { name: "reports-salon-ipad", file: "reports.html?v=salon", ...ipad },
  { name: "reports-beauty-ipad", file: "reports.html?v=beauty", ...ipad },
  { name: "reports-spa-ipad", file: "reports.html?v=spa", ...ipad },
  { name: "staff-profile-salon", file: "staff-app.html?v=salon", ...phone },
  { name: "staff-profile-beauty", file: "staff-app.html?v=beauty", ...phone },
  { name: "staff-profile-spa", file: "staff-app.html?v=spa", ...phone },
  { name: "payroll-salon-ipad", file: "payroll.html?v=salon", ...ipad },
  { name: "payroll-beauty-ipad", file: "payroll.html?v=beauty", ...ipad },
  { name: "payroll-spa-ipad", file: "payroll.html?v=spa", ...ipad },
  // Booking deposits: held, turned into income with one click (and the invoice it made), then the list after it
  ...["salon", "beauty", "spa"].flatMap((v) => [
    { name: `${v}-booking-deposits-ipad`, file: `deposits.html?v=${v}&s=held`, ...ipad },
    { name: `${v}-deposit-to-income-invoice-ipad`, file: `deposits.html?v=${v}&s=invoice`, ...ipad },
    { name: `${v}-deposit-refund-credit-note-ipad`, file: `deposits.html?v=${v}&s=done`, ...ipad },
  ]),
  // Inventory & ERP: a household and electrical goods wholesaler. One day's story: batch stock in (GRN-2026-0412),
  // the batch trail and its labels, a sale to a retailer (INV-2026-1187), then a one-click return with credit note CN-2026-0093
  { name: "inventory-erp-dashboard-ipad", file: "inventory-dashboard.html", ...ipad },
  { name: "inventory-batch-stock-in-ipad", file: "stock-in.html", ...ipad },
  { name: "inventory-stock-activity-trail-ipad", file: "stock-trail.html", ...ipad },
  { name: "inventory-barcode-qr-labels", file: "barcode-labels.html", w: 1000, h: 700, scale: 1.5, transparent: true },
  { name: "inventory-sales-accounting-ipad", file: "erp-sales.html", ...ipad },
  { name: "inventory-one-click-return-credit-note-ipad", file: "erp-return.html", ...ipad },
  { name: "inventory-scan-barcode-phone", file: "stock-scan.html", ...phone },
  { name: "inventory-reports-ipad", file: "reports.html?v=trade", ...ipad },
  { name: "inventory-staff-permissions-ipad", file: "permissions.html?v=trade", ...ipad },
  // LHDN e-Invoice and examples of custom systems
  { name: "lhdn-e-invoice", file: "e-invoice.html", w: 1000, h: 700, scale: 1.5, transparent: true },
  // Blog post pictures: one for each post, in each language
  ...["en", "ms", "zh"].map((l) => ({ name: `budget-2027-malaysia-${l}`, file: `budget-2027.html?lang=${l}`, w: 1000, h: 625, scale: 1.5 })),
  { name: "custom-erp-desktop", file: "erp.html", ...desktop },
  { name: "number-plate-scanner-desktop", file: "plate-scanner.html", ...desktop },
  { name: "ai-object-detection-desktop", file: "object-detection.html", ...desktop },
  // Live selling
  { name: "live-selling-dashboard-ipad", file: "live-dashboard.html", ...ipad },
  { name: "live-selling-visitors-ipad", file: "live-visitors.html", ...ipad },
  { name: "live-selling-order-queue-ipad", file: "live-queue.html", ...ipad },
  { name: "live-selling-products-schedule-ipad", file: "live-products.html", ...ipad },
  { name: "live-selling-report-ipad", file: "live-report.html", ...ipad },
  { name: "live-selling-staff-permissions-ipad", file: "permissions.html?v=live", ...ipad },
  { name: "live-selling-shop-phone", file: "live-shop.html", ...phone },
  { name: "live-selling-product-phone", file: "live-shop.html?v=product", ...phone },
  { name: "live-selling-checkout-phone", file: "live-checkout.html", ...phone },
  { name: "live-selling-online-payment-phone", file: "online-payment.html?v=live", ...phone },
  // Software customisation: a clinic's request on WhatsApp, the AI estimate and quote, free testing, then what four
  // customers had built (the clinic's is the last moment of the main picture)
  { name: "customisation-request-whatsapp", file: "custom-chat.html", ...phone },
  { name: "customisation-ai-estimate-quote-ipad", file: "custom-request.html?s=estimate", ...ipad },
  { name: "customisation-testing-integration-ipad", file: "custom-request.html?s=testing", ...ipad },
  { name: "customisation-clinic-panel-claim-export-ipad", file: "custom-claims.html", ...ipad },
  { name: "customisation-salon-accountant-sales-export-ipad", file: "custom-sales-export.html", ...ipad },
  { name: "customisation-spa-booking-question-ipad", file: "custom-found-us.html", ...ipad },
  { name: "customisation-online-seller-courier-file-ipad", file: "custom-courier.html", ...ipad },
  // Data migration: files in any format, the AI reading an old system's screens, the checks, then done
  { name: "data-migration-import-any-format-desktop", file: "migration.html?s=import", ...desktop },
  { name: "data-migration-ai-screen-scan-desktop", file: "migration.html?s=scan", ...desktop },
  { name: "data-migration-check-desktop", file: "migration.html?s=check", ...desktop },
  { name: "data-migration-complete-desktop", file: "migration.html?s=done", ...desktop },
  { name: "data-migration-whatsapp", file: "migration-chat.html", ...phone },
  // Business email on the customer's own domain
  { name: "business-email-inbox-ipad", file: "email-inbox.html", ...ipad },
  { name: "business-email-setup-ipad", file: "email-setup.html", ...ipad },
  { name: "business-email-phone", file: "email-phone.html", ...phone },
  // Website design: the example site in the main picture (three pages and its phone view), then more example designs
  { name: "website-design-skin-clinic-home", file: "site-skin.html?p=home", ...site },
  { name: "website-design-skin-clinic-treatments", file: "site-skin.html?p=treatments", ...site },
  { name: "website-design-skin-clinic-contact", file: "site-skin.html?p=contact", ...site },
  { name: "website-design-skin-clinic-phone", file: "site-skin.html?p=phone", ...phone },
  { name: "website-design-dental-clinic", file: "site-dental.html", ...site },
  { name: "website-design-cafe", file: "site-cafe.html", ...site },
  { name: "website-design-cafe-phone", file: "site-cafe.html?p=phone", ...phone },
  { name: "website-design-homestay", file: "site-homestay.html", ...site },
  { name: "website-design-homestay-phone", file: "site-homestay.html?p=phone", ...phone },
  { name: "website-design-interior-design", file: "site-interior.html", ...site },
  { name: "website-design-accounting-firm", file: "site-accounting.html", ...site },
  // Social share picture (WhatsApp, Facebook, LinkedIn previews). Rendered last: it uses the screens above.
  { name: "og-image", file: "og.html", w: 1200, h: 630, scale: 1, out: "public/og-image.jpg" },
];

const only = process.argv[2];
await mkdir(out, { recursive: true });
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const encoder = await browser.newPage();

async function toWebp(png, width, height) {
  return encoder.evaluate(
    async ({ b64, width, height }) => {
      const img = new Image();
      img.src = `data:image/png;base64,${b64}`;
      await img.decode();
      const c = document.createElement("canvas");
      c.width = width;
      c.height = height;
      const ctx = c.getContext("2d");
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, width, height);
      return c.toDataURL("image/webp", 0.86).split(",")[1];
    },
    { b64: png.toString("base64"), width, height },
  );
}

for (const s of screens.filter((s) => !only || s.name.includes(only))) {
  const page = await browser.newPage({ viewport: { width: s.w, height: s.h }, deviceScaleFactor: s.scale });
  const [file, query] = s.file.split("?");
  await page.goto(pathToFileURL(path.join(src, file)).href + (query ? `?${query}` : ""));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(150);
  if (s.out) {
    await page.screenshot({ path: path.join(root, s.out), type: "jpeg", quality: 88 });
    console.log(`✓ ${s.name} (${s.w}×${s.h} JPEG)`);
    await page.close();
    continue;
  }
  const png = await page.screenshot({ omitBackground: !!s.transparent });
  const W = Math.round(s.w * s.scale);
  const H = Math.round(s.h * s.scale);
  await writeFile(path.join(out, `${s.name}.webp`), Buffer.from(await toWebp(png, W, H), "base64"));
  await writeFile(path.join(out, `${s.name}-sm.webp`), Buffer.from(await toWebp(png, Math.round(W / 2), Math.round(H / 2)), "base64"));
  console.log(`✓ ${s.name} (${W}×${H})`);
  await page.close();
}
await browser.close();
