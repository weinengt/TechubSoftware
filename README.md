# Techub Software website

Marketing website for Techub Software, a software company based in Malaysia: ready appointment systems for clinics,
hair salons, beauty centres and spas, and custom systems (ERP, AI object detection, number plate scanners).
The whole site is in English, Bahasa Melayu and Simplified Chinese.

Built with **Next.js (App Router) + Tailwind CSS**, exported as a fully static site and served by a **Cloudflare Worker**.

## Pages

Every page exists in three languages: English at the address below, Bahasa Melayu under `/ms/`, Chinese under `/zh/`
(for example `/ms/clinic-management-system/`). The language switch is in the menu and the footer.
Every menu item, footer link and button opens a page; none of them scrolls down the same page.

| URL | Purpose |
| --- | --- |
| `/` | Home: company introduction, highlights, services, use cases, custom systems, technology, pricing, FAQ, contact |
| `/technology/` | Technology: servers, NoSQL database and speed, real-time updates, AI, WhatsApp, hardware, LHDN e-Invoice, security |
| `/clinic-management-system/` | Clinic system, with example screens on iPad and phone |
| `/salon-appointment-system/` | Hair salon system |
| `/beauty-appointment-system/` | Beauty centre system |
| `/spa-appointment-system/` | Spa & massage system |
| `/live-selling-system/` | Live Selling System for online sellers (its own price, from RM 199/month) |
| `/use-cases/` | All five systems with their iPad and phone screens, and custom systems |
| `/custom-systems/` | Custom systems: ERP, AI object detection, number plate scanner |
| `/services/`, `/pricing/`, `/about/`, `/faq/`, `/contact/` | One page for each part of the company, opened from the menu and footer |
| `/terms/`, `/privacy/` | Terms of Use and Privacy Policy (PDPA 2010 notice), linked from the footer |
| `/sitemap.xml`, `/robots.txt` | Search engine files, with every language version of each page (AI crawlers explicitly allowed) |
| `/llms.txt`, `/llms-full.txt` | Summaries for AI assistants (ChatGPT, Claude, Perplexity, Gemini) |

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Deploy on Cloudflare

The site is served as static files by a Cloudflare Worker. `wrangler.jsonc` tells Cloudflare to serve the `out` folder.

1. Cloudflare dashboard → Workers & Pages → Create → Import a repository → pick this repo.
2. Project name: `techubsoftware` (it must match `name` in `wrangler.jsonc`).
3. Build command: `npm run build`. Deploy command: `npx wrangler deploy`. Keep the default preview command.
4. Build variable (only if your domain is not techubsoftware.com): `NEXT_PUBLIC_SITE_URL` = your domain, e.g. `https://www.techub.com.my`.
   It is used for canonical URLs, the sitemap and structured data. Node.js 22 comes from `.nvmrc`.
5. Deploy. Then add your domain under the Worker's **Settings → Domains & Routes → Add → Custom domain**.

Every push to `main` deploys again automatically.

`public/_headers` sets security and caching headers. `public/_redirects` sends the old `/spa-salon-appointment-system/` address to the spa page.

Cloudflare Pages also works: use the **Next.js (Static HTML Export)** preset, build command `npm run build`, output directory `out`.

## Editing content

- **All words on the site**, in each language: `content/en.ts` (English), `content/ms.ts` (Bahasa Melayu),
  `content/zh.ts` (Chinese). The three files have the same structure, so change the same line in each.
  `{price}`, `{months}`, `{custom}`, `{livePrice}`, `{uptime}`, `{phone}` and `{email}` are filled in from `lib/site.ts`;
  words between `*stars*` are shown in the blue gradient.
- **Terms of Use and Privacy Policy**: `content/legal/en.ts`, `ms.ts` and `zh.ts`, same structure. Change the date in `updated`
  when you change them. Under the PDPA the privacy notice must be available in Bahasa Melayu and English, so keep `ms.ts` in step.
- Company details (WhatsApp number, email, monthly price, free months, customisation price, live selling price, uptime, keywords): `lib/site.ts`
- Business types in the Use Cases menu and their addresses: `lib/site.ts` → `systems`
- Which picture goes with which part of a business page: `components/ProductPage.tsx` → `specs`
- Logo: `public/images/logo.webp` / `logo.png`; icons: `public/icon-192.png`, `public/icon-512.png`, `public/favicon.ico`
- Social share image (WhatsApp/Facebook link preview): `public/og-image.jpg` (1200×630)

## Example screens (the pictures of the system)

The product pictures are example screens with sample data (Demo Clinic, Demo Hair Salon, Demo Beauty Centre,
Demo Day Spa and made-up customers). They live in `public/images/screens/` as `<name>.webp` (full size) and
`<name>-sm.webp` (half size, for phones). Their sizes are in `lib/shots.ts`; their captions and alt text are in
`content/*.ts` under `shots`.

**To use real screenshots of your system:** take a screenshot of the same screen, crop it to the same
aspect ratio, save it as `<name>.webp` and a half-width copy as `<name>-sm.webp`, replacing the old files.

| File | Size | Shows |
| --- | --- | --- |
| `clinic-dashboard-ipad` | 1536×1080 (iPad) | Clinic dashboard with live queue |
| `patient-medication-tracking-ipad` | 1536×1080 (iPad) | Patient medication history + allergy alert |
| `body-chart-hand-drawing`, `-spa` | 1536×1080 (iPad) | Hand-drawn body chart / treatment map + e-signature |
| `beauty-face-chart-ipad` | 1536×1080 (iPad) | Face chart, photos and consent |
| `salon-`, `beauty-`, `spa-appointment-calendar-ipad` | 1536×1080 (iPad) | Booking calendar for each business |
| `salon-`, `beauty-`, `spa-pos-checkout-ipad` | 1536×1080 (iPad) | POS checkout with commission |
| `clinic-`, `salon-`, `beauty-`, `spa-inventory-ai-stock-ipad` | 1536×1080 (iPad) | Stock movement log + AI insight |
| `clinic-`, `salon-`, `spa-staff-permissions-ipad` | 1536×1080 (iPad) | Roles & permissions |
| `staff-permission-control-desktop` | 1800×1125 (PC) | Roles & permissions in a browser |
| `whatsapp-appointment-reminder-clinic`, `-salon`, `-beauty`, `-spa` | 720×1520 (phone) | WhatsApp confirmation & reminder |
| `ai-delivery-note-scan` (clinic), `-salon`, `-beauty`, `-spa` | 720×1520 (phone) | Scanning a delivery note |
| `salon-customer-profile`, `beauty-customer-package`, `spa-customer-package` | 720×1520 (phone) | Customer profile and packages |
| `queue-number-calling-display` | 1920×1080 (TV) | Queue calling TV screen |
| `printouts-receipt-label-mc` | 1500×1050 | Receipt, MC and medicine label (transparent background) |
| `reports-clinic-ipad`, `-salon`, `-beauty`, `-spa` | 1536×1080 (iPad) | Detailed reports, generated in under 100 ms |
| `staff-profile-salon`, `-beauty`, `-spa` | 720×1520 (phone) | A staff member's own appointments |
| `payroll-salon-ipad`, `-beauty`, `-spa` | 1536×1080 (iPad) | Payroll with basic pay, commission and allowances |
| `lhdn-e-invoice` | 1500×1050 | LHDN e-Invoice with QR code (transparent background) |
| `clinic-dashboard-desktop` | 1800×1125 (PC) | Dashboard in a browser |
| `custom-erp-desktop`, `ai-object-detection-desktop`, `number-plate-scanner-desktop` | 1800×1125 (PC) | Custom system examples |

**To change the example screens instead:** edit the HTML in `design/mockups/` and re-render:

```bash
npm i --no-save playwright && npx playwright install chromium
node scripts/render-mockups.mjs            # all screens + og-image.jpg
node scripts/render-mockups.mjs whatsapp   # only matching names
```

## After going live (SEO checklist)

- Submit `https://<your-domain>/sitemap.xml` in Google Search Console and Bing Webmaster Tools (Bing also feeds ChatGPT search and Copilot).
  The sitemap lists the English, Malay and Chinese version of every page, so all three get indexed.
- Create a Google Business Profile with the same name, WhatsApp number and website.
- Add your social profiles to `sameAs` in `app/layout.tsx` once they exist.
- Test the link preview by sending your URL to yourself on WhatsApp.
