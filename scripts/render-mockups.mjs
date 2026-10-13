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
export const screens = [
  { name: "clinic-dashboard", file: "clinic-dashboard.html", w: 1200, h: 750, scale: 1.5 },
  { name: "patient-medication-tracking", file: "patient-medication.html", w: 1200, h: 750, scale: 1.5 },
  { name: "spa-salon-appointment-calendar", file: "spa-calendar.html", w: 1200, h: 750, scale: 1.5 },
  { name: "inventory-movement-ai-stock", file: "inventory.html", w: 1200, h: 750, scale: 1.5 },
  { name: "staff-permission-control", file: "permissions.html", w: 1200, h: 750, scale: 1.5 },
  { name: "staff-permission-control-spa", file: "permissions.html?v=spa", w: 1200, h: 750, scale: 1.5 },
  { name: "queue-number-calling-display", file: "queue-display.html", w: 1280, h: 720, scale: 1.5 },
  { name: "whatsapp-appointment-reminder", file: "whatsapp.html?v=spa", w: 360, h: 760, scale: 2 },
  { name: "whatsapp-appointment-reminder-clinic", file: "whatsapp.html", w: 360, h: 760, scale: 2 },
  { name: "ai-delivery-note-scan", file: "delivery-scan.html", w: 360, h: 760, scale: 2 },
  { name: "ai-delivery-note-scan-spa", file: "delivery-scan.html?v=spa", w: 360, h: 760, scale: 2 },
  { name: "spa-customer-package", file: "customer-package.html", w: 360, h: 760, scale: 2 },
  { name: "body-chart-hand-drawing", file: "body-chart.html", w: 1024, h: 720, scale: 1.5 },
  { name: "body-chart-hand-drawing-spa", file: "body-chart.html?v=spa", w: 1024, h: 720, scale: 1.5 },
  { name: "printouts-receipt-label-mc", file: "printouts.html", w: 1000, h: 700, scale: 1.5, transparent: true },
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
