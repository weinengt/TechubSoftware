import Link from "next/link";
import type { ReactNode } from "react";
import { faqs, site, whatsappLink } from "@/lib/site";
import { Icon, type IconName } from "./Icons";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-slate-600">{intro}</p>}
    </div>
  );
}

export function FeatureCard({ icon, title, children }: { icon: IconName; title: string; children: ReactNode }) {
  const I = Icon[icon];
  return (
    <article className="card group p-6 transition hover:-translate-y-0.5 hover:border-brand-200">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition group-hover:bg-brand-500 group-hover:text-white">
        <I className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{children}</p>
    </article>
  );
}

export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-slate-700">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
            <Icon.Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <span className="text-sm leading-relaxed sm:text-base">{t}</span>
        </li>
      ))}
    </ul>
  );
}

export const allFeatures: { icon: IconName; title: string; text: string }[] = [
  { icon: "Shield", title: `${site.uptime} Uptime Guarantee`, text: "Cloud hosting with monitoring and backups keeps your front desk running all day, every day." },
  { icon: "Megaphone", title: "Queue Number Calling", text: "Display and announce queue numbers on TV screens and speakers so patients and customers know exactly when it is their turn." },
  { icon: "Whatsapp", title: "WhatsApp Appointment Alerts", text: "Automatic booking confirmations, reminders and follow-ups on WhatsApp reduce no-shows and phone calls." },
  { icon: "Devices", title: "Cross-Device Access", text: "Use it on desktop, laptop, tablet and phone. Doctors, therapists and owners stay connected from anywhere." },
  { icon: "Lock", title: "Permission Control", text: "Role-based access decides who can view, edit, discount, refund or export, with a full audit trail." },
  { icon: "Users", title: "Staff Management", text: "Staff accounts, schedules, commissions and branch assignments, all controlled from one place." },
  { icon: "Sparkles", title: "AI Stock Control", text: "AI forecasts usage, flags low stock and expiring batches, and suggests what to reorder." },
  { icon: "Scan", title: "Scan Delivery Notes", text: "Snap a supplier delivery note and stock is adjusted automatically. No more manual typing." },
  { icon: "Route", title: "Inventory Movement Tracking", text: "Track every stock in, stock out, transfer, sale and adjustment, down to the batch and the staff member." },
  { icon: "Pill", title: "Patient Medication Tracking", text: "Record prescriptions, dosage and dispensing history for every patient, with allergy notes." },
  { icon: "Pen", title: "Hand Drawing & Signature", text: "Draw on body charts, annotate treatment areas and capture consent signatures with a stylus or finger." },
  { icon: "Printer", title: "Multi-Printer Support", text: "Print receipts, labels, invoices, medical certificates and prescriptions on thermal, label and A4 printers." },
];

export function FeatureGrid({ items = allFeatures }: { items?: typeof allFeatures }) {
  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((f) => (
        <FeatureCard key={f.title} icon={f.icon} title={f.title}>
          {f.text}
        </FeatureCard>
      ))}
    </div>
  );
}

export function HardwareSection() {
  const hw: { icon: IconName; label: string }[] = [
    { icon: "Megaphone", label: "Queue calling display & speaker" },
    { icon: "Whatsapp", label: "WhatsApp messaging" },
    { icon: "Printer", label: "Thermal receipt printer" },
    { icon: "Barcode", label: "Barcode & label printer" },
    { icon: "Scan", label: "Barcode / QR scanner" },
    { icon: "Card", label: "Card terminal & cash drawer" },
    { icon: "Pen", label: "Tablet & stylus pad" },
    { icon: "Devices", label: "TV, PC, tablet & phone" },
  ];
  return (
    <section id="hardware" className="relative overflow-hidden bg-brand-950 py-24 text-white">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-brand-200">
            Multi-hardware connect
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Works with the hardware you already have
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Techub connects to queue number calling systems, WhatsApp, and many printer and device brands. We install and
            set everything up for you.
          </p>
        </div>
        <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {hw.map((h) => {
            const I = Icon[h.icon];
            return (
              <li
                key={h.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition hover:border-teal-brand/60 hover:bg-white/10"
              >
                <I className="h-8 w-8 text-teal-brand" />
                <span className="text-sm font-medium text-slate-200">{h.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function PricingSection() {
  const included = [
    "Clinic or spa/salon system with your choice of modules",
    "Queue calling and WhatsApp appointment alerts",
    "AI stock control and delivery note scanning",
    "Works on desktop, laptop, tablet and phone",
    "Staff accounts with permission control",
    `${site.uptime} uptime guarantee with daily backups`,
    "Free installation and staff training",
    "Local support via WhatsApp",
  ];
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple pricing"
          title={<>Affordable for every clinic, spa and salon</>}
          intro="One clear monthly price. No big upfront cost, and your first three months are on us."
        />
        <div className="mx-auto mt-14 grid max-w-5xl items-stretch gap-6 lg:grid-cols-5">
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-8 text-white shadow-2xl shadow-brand-500/30 lg:col-span-3">
            <div className="bg-grid absolute inset-0 opacity-20" />
            <div className="relative">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wide">
                <Icon.Gift className="h-4 w-4" /> New customer offer
              </p>
              <h3 className="mt-5 text-2xl font-bold">Techub Standard Plan</h3>
              <p className="mt-6 flex items-end gap-2">
                <span className="text-lg font-semibold text-white/80">from</span>
                <span className="text-6xl font-extrabold tracking-tight">RM {site.priceFrom}</span>
                <span className="pb-2 text-lg font-semibold text-white/80">/ month</span>
              </p>
              <p className="mt-4 rounded-2xl bg-white/15 p-4 text-base font-semibold">
                FREE for the first {site.freeMonths} months for new users, including staff training and installation.
              </p>
              <a href={whatsappLink("Hi Techub, I want to claim the 3 months free offer.")} target="_blank" rel="noopener"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-800 shadow-lg transition hover:bg-brand-50">
                <Icon.Whatsapp className="h-5 w-5 text-whatsapp" /> Claim 3 Months Free
              </a>
            </div>
          </div>
          <div className="card p-8 lg:col-span-2">
            <h3 className="text-lg font-bold text-slate-900">Everything included</h3>
            <CheckList items={included} className="mt-6" />
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
          Need extra features or integrations? We customise the system for your workflow at a low cost.{" "}
          <a className="font-semibold text-brand-600 hover:underline" href={whatsappLink("Hi Techub, I need a customised system quote.")} target="_blank" rel="noopener">
            Ask for a quote
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export function FaqSection({ items = faqs }: { items?: { q: string; a: string }[] }) {
  return (
    <section id="faq" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-12 space-y-3">
          {items.map((f) => (
            <details key={f.q} className="card group p-0 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left font-semibold text-slate-900">
                <h3 className="text-base">{f.q}</h3>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-45">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
                </span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaSection({ title, text }: { title?: string; text?: string }) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-16 text-center text-white sm:px-12">
          <div className="bg-grid absolute inset-0 opacity-25" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {title ?? "Ready to modernise your clinic, spa or salon?"}
            </h2>
            <p className="mt-4 text-lg text-white/90">
              {text ?? `Start from RM ${site.priceFrom}/month with the first ${site.freeMonths} months free, including installation and staff training.`}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={whatsappLink()} target="_blank" rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-800 shadow-lg transition hover:bg-brand-50">
                <Icon.Whatsapp className="h-5 w-5 text-whatsapp" /> WhatsApp {site.whatsappDisplay}
              </a>
              <Link href="/#pricing" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
                View Pricing <Icon.Arrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function softwareJsonLd(opts: { name: string; description: string; url: string; category: string; features: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: opts.category,
    operatingSystem: "Web, Windows, macOS, Android, iOS",
    featureList: opts.features,
    provider: { "@id": `${site.url}/#organization` },
    offers: {
      "@type": "Offer",
      price: site.priceFrom,
      priceCurrency: site.currency,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: site.priceFrom,
        priceCurrency: site.currency,
        unitText: "MONTH",
        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
      },
      description: `From RM ${site.priceFrom} per month. First ${site.freeMonths} months free for new users, including installation and staff training.`,
      availability: "https://schema.org/InStock",
      areaServed: "MY",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
}
