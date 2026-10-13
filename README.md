# Techub Software website

Marketing website for Techub Software (clinic management and spa/salon appointment systems, Malaysia).

Built with **Next.js (App Router) + Tailwind CSS**, exported as a fully static site so it can be hosted for free on **Cloudflare Pages**.

## Pages

| URL | Purpose |
| --- | --- |
| `/` | Home: hero, solutions, features, AI stock, hardware, customisation, pricing, FAQ |
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

- Company details (WhatsApp number, price, free months, uptime, keywords): `lib/site.ts`
- Home page FAQ: `lib/site.ts` → `faqs`
- Clinic page: `app/clinic-management-system/page.tsx`
- Spa & salon page: `app/spa-salon-appointment-system/page.tsx`
- Logo: `public/images/logo.webp` / `logo.png`; icons: `public/icon-192.png`, `public/icon-512.png`, `public/favicon.ico`
- Social share image: `public/og-image.png` (1200×630)

## After going live (SEO checklist)

- Submit `https://<your-domain>/sitemap.xml` in Google Search Console and Bing Webmaster Tools (Bing also feeds ChatGPT search and Copilot).
- Create a Google Business Profile with the same name, WhatsApp number and website.
- Add your social profiles to `sameAs` in `app/layout.tsx` once they exist.
