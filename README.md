# Techub Software website

Marketing website for Techub Software (clinic management and spa/salon appointment systems, Malaysia).

Built with **Next.js (App Router) + Tailwind CSS**, exported as a fully static site so it can be hosted for free on **Cloudflare Pages**.

## Pages

| URL | Purpose |
| --- | --- |
| `/` | Home: hero, solutions, example screens, AI stock, devices, hardware, features, pricing, FAQ, contact |
| `/clinic-management-system/` | Clinic system details |
| `/spa-salon-appointment-system/` | Spa & salon system details |
| `/sitemap.xml`, `/robots.txt` | Search engine files (AI crawlers explicitly allowed) |
| `/llms.txt`, `/llms-full.txt` | Summaries for AI assistants (ChatGPT, Claude, Perplexity, Gemini) |

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Deploy on Cloudflare Pages

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick this repo.
2. Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
3. Environment variables:
   - `NODE_VERSION` = `22`
   - `NEXT_PUBLIC_SITE_URL` = your real domain, e.g. `https://www.techub.com.my` (used for canonical URLs, sitemap and structured data)
4. Add your custom domain under the project's **Custom domains** tab.

`public/_headers` sets security and caching headers on Cloudflare.

## Editing content

- Company details (WhatsApp number, email, price, free months, uptime, keywords): `lib/site.ts`
- Home page FAQ: `lib/site.ts` → `faqs`
- Clinic page: `app/clinic-management-system/page.tsx`
- Spa & salon page: `app/spa-salon-appointment-system/page.tsx`
- Logo: `public/images/logo.webp` / `logo.png`; icons: `public/icon-192.png`, `public/icon-512.png`, `public/favicon.ico`
- Social share image (WhatsApp/Facebook link preview): `public/og-image.jpg` (1200×630)

## Example screens (the pictures of the system)

The product pictures are example screens with sample data (demo clinic, demo spa, sample patients).
They live in `public/images/screens/` as `<name>.webp` (full size) and `<name>-sm.webp` (half size, for phones).
Their captions and alt text are in `lib/shots.ts`.

**To use real screenshots of your system:** take a screenshot of the same screen, crop it to the same
aspect ratio, save it as `<name>.webp` and a half-width copy as `<name>-sm.webp`, replacing the old files.

| File | Size | Shows |
| --- | --- | --- |
| `clinic-dashboard` | 1800×1125 | Clinic dashboard |
| `patient-medication-tracking` | 1800×1125 | Patient medication history + allergy alert |
| `spa-salon-appointment-calendar` | 1800×1125 | Spa/salon booking calendar |
| `inventory-movement-ai-stock` | 1800×1125 | Stock movement log + AI insight |
| `staff-permission-control`, `-spa` | 1800×1125 | Roles & permissions |
| `queue-number-calling-display` | 1920×1080 | Queue calling TV screen |
| `whatsapp-appointment-reminder`, `-clinic` | 720×1520 | WhatsApp confirmation & reminder (phone) |
| `ai-delivery-note-scan`, `-spa` | 720×1520 | Scanning a delivery note (phone) |
| `spa-customer-package` | 720×1520 | Customer packages (phone) |
| `body-chart-hand-drawing`, `-spa` | 1536×1080 | Hand drawing + e-signature (tablet) |
| `printouts-receipt-label-mc` | 1500×1050 | Receipt, MC and medicine label (transparent background) |

**To change the example screens instead:** edit the HTML in `design/mockups/` and re-render:

```bash
npm i --no-save playwright && npx playwright install chromium
node scripts/render-mockups.mjs            # all screens + og-image.jpg
node scripts/render-mockups.mjs whatsapp   # only matching names
```

## After going live (SEO checklist)

- Submit `https://<your-domain>/sitemap.xml` in Google Search Console and Bing Webmaster Tools (Bing also feeds ChatGPT search and Copilot).
- Create a Google Business Profile with the same name, WhatsApp number and website.
- Add your social profiles to `sameAs` in `app/layout.tsx` once they exist.
- Test the link preview by sending your URL to yourself on WhatsApp.
