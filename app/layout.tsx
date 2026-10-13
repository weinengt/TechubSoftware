import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Clinic Management & Spa/Salon Appointment System Malaysia`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Software",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "/",
    siteName: site.name,
    title: `${site.name} | Clinic & Spa/Salon Management System Malaysia`,
    description: site.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Techub Software clinic and spa salon system" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Clinic & Spa/Salon System Malaysia`,
    description: site.description,
    images: ["/og-image.png"],
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
  formatDetection: { telephone: true },
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
      knowsAbout: [
        "Clinic management system",
        "Spa appointment system",
        "Salon booking system",
        "Queue number calling system",
        "WhatsApp appointment reminders",
        "AI inventory management",
        "Custom software development",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+60-11-1768-8559",
        contactType: "sales",
        areaServed: "MY",
        availableLanguage: ["English", "Malay", "Chinese"],
      },
      sameAs: [`https://wa.me/${site.whatsappNumber}`],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "en-MY",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-MY" className={jakarta.variable}>
      <body>
        <JsonLd data={organization} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
