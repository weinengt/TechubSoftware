import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import RefreshScript from "@/components/RefreshScript";
import RevealScript from "@/components/RevealScript";
import { htmlLang, locales } from "@/lib/i18n";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Appointment System Malaysia | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Software",
  // Each page sets its own canonical URL, language links and social tags (lib/seo.ts).
  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName: site.name,
    title: `Appointment System Malaysia | ${site.name}`,
    description: site.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Techub Software systems on iPad and phone" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Appointment System Malaysia | ${site.name}`,
    description: site.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  // iPhone Safari turns numbers it finds (like the SSM number in the footer) into links before React takes over the
  // page. React then sees different HTML and draws the whole page again, so the logo and pictures blink on first load.
  // Our WhatsApp number and email are real links wherever they are shown (withContactLinks in components/Text.tsx).
  formatDetection: { telephone: false, date: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#0396d9",
  width: "device-width",
  initialScale: 1,
};

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: "Techub",
      url: site.url,
      logo: `${site.url}/icon-512.png`,
      description: site.description,
      areaServed: { "@type": "Country", name: "Malaysia" },
      address: { "@type": "PostalAddress", addressCountry: "MY" },
      identifier: { "@type": "PropertyValue", propertyID: "SSM registration number", value: site.ssm },
      knowsAbout: [
        "Appointment management system",
        "Clinic management system",
        "Salon appointment system",
        "Beauty centre appointment system",
        "Spa appointment system",
        "Queue number calling system",
        "WhatsApp appointment reminders",
        "AI inventory management",
        "Cloud business software",
        "WhatsApp automation",
        "POS and hardware integration",
        "Staff payroll and commission",
        "LHDN e-Invoice (MyInvois)",
        "ERP systems",
        "AI object detection",
        "Number plate recognition",
        "Custom software development",
        "Software customisation",
        "Data migration",
        "AI data extraction (OCR)",
        "Business email hosting",
        "Website design",
        "Website hosting on Cloudflare",
        "React and Next.js",
      ],
      email: site.email,
      telephone: `+${site.whatsappNumber}`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: `+${site.whatsappNumber}`,
          email: site.email,
          contactType: "sales",
          areaServed: "MY",
          availableLanguage: ["English", "Malay", "Chinese"],
        },
        {
          "@type": "ContactPoint",
          email: site.email,
          contactType: "customer support",
          areaServed: "MY",
        },
      ],
      sameAs: [`https://wa.me/${site.whatsappNumber}`],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: locales.map((l) => htmlLang[l]),
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

// The header, footer and page text come from each language's layout (app/(en) and app/[lang]).
// <html lang> is set for /ms/ and /zh/ pages after the build by scripts/set-html-lang.mjs.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-MY" className={jakarta.variable} suppressHydrationWarning>
      <head>
        {/* In <head>, so it runs before the page is laid out and a refresh opens at the top. */}
        <RefreshScript />
      </head>
      <body>
        {/* First in the body, so blocks that come in on scroll are hidden before the page is first drawn. */}
        <RevealScript />
        <JsonLd data={organization} />
        {children}
      </body>
    </html>
  );
}
