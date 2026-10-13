# Techub Software website

Marketing website for Techub Software, a provider of appointment management systems in Malaysia, with a page for each business type: clinic, hair salon, beauty centre and spa.

Built with **Next.js (App Router) + Tailwind CSS**, exported as a fully static site so it can be hosted for free on **Cloudflare Pages**.

## Pages

| URL | Purpose |
| --- | --- |
| `/` | Home: company intro, tappable cards for each business type, AI stock, devices, hardware, features, pricing, FAQ, contact |
| `/clinic-management-system/` | Clinic system, with example screens on iPad and phone |
| `/salon-appointment-system/` | Hair salon system |
| `/beauty-appointment-system/` | Beauty centre system |
| `/spa-appointment-system/` | Spa & massage system |
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

`public/_headers` sets security and caching headers on Cloudflare. `public/_redirects` sends the old `/spa-salon-appointment-system/` address to the spa page.

## Editing content

- Company details (WhatsApp number, email, price, free months, uptime, keywords): `lib/site.ts`
- Business types shown as cards on the home page and in the menu: `lib/site.ts` → `systems`
- Home page FAQ: `lib/site.ts` → `faqs`
- One page per business type: `app/clinic-management-system/page.tsx`, `app/salon-appointment-system/page.tsx`,
  `app/beauty-appointment-system/page.tsx`, `app/spa-appointment-system/page.tsx` (text, pictures, modules and FAQ)
- Logo: `public/images/logo.webp` / `logo.png`; icons: `public/icon-192.png`, `public/icon-512.png`, `public/favicon.ico`
- Social share image (WhatsApp/Facebook link preview): `public/og-image.jpg` (1200×630)

## Example screens (the pictures of the system)

The product pictures are example screens with sample data (Demo Clinic, Demo Hair Salon, Demo Beauty Centre,
Demo Day Spa and made-up customers). They live in `public/images/screens/` as `<name>.webp` (full size) and
`<name>-sm.webp` (half size, for phones). Their captions and alt text are in `lib/shots.ts`.

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
