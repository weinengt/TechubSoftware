import Link from "next/link";
import type { ReactNode } from "react";
import JsonLd from "./JsonLd";
import { Icon, type IconName } from "./Icons";
import { FaqSection, HardwareSection, PricingSection, SectionHeading, breadcrumbJsonLd, faqJsonLd, softwareJsonLd } from "./Sections";
import { Combo, ContactSection, FeatureTiles, FloatBadge, PhoneShowcase, Spotlight } from "./Showcase";
import type { Shot } from "@/lib/shots";
import { site, whatsappLink } from "@/lib/site";

type Visual = { main: Shot; phone?: Shot; side?: "left" | "right" } | { phoneOnly: Shot; badges?: ReactNode[] };

export type ProductContent = {
  path: string;
  name: string;
  category: string;
  description: string;
  eyebrow: string;
  heading: ReactNode;
  intro: string;
  hero: { main: Shot; phone?: Shot; badge?: ReactNode };
  whoFor: string[];
  spotlights: { eyebrow: string; title: string; points: string[]; visual: Visual }[];
  modules: { icon: IconName; title: string }[];
  faqs: { q: string; a: string }[];
  demoMessage: string;
  contactPhone: Shot;
};

function renderVisual(v: Visual) {
  if ("phoneOnly" in v) return <PhoneShowcase shot={v.phoneOnly} badges={v.badges} />;
  return <Combo main={v.main} phone={v.phone} side={v.side} />;
}

export default function ProductPage({ c }: { c: ProductContent }) {
  const url = `${site.url}${c.path}`;
  const pics = [c.hero.main, ...c.spotlights.map((s) => ("phoneOnly" in s.visual ? s.visual.phoneOnly : s.visual.main))];
  return (
    <>
      <JsonLd
        data={[
          softwareJsonLd({ name: c.name, description: c.description, url, category: c.category, features: c.modules.map((m) => m.title), screenshots: pics }),
          faqJsonLd(c.faqs),
          breadcrumbJsonLd([
            { name: "Home", url: `${site.url}/` },
            { name: c.name, url },
          ]),
        ]}
      />

      <section className="relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-500">
              <Link href="/" className="hover:text-brand-700">Home</Link> <span aria-hidden="true">/</span>{" "}
              <span className="text-slate-700">{c.name}</span>
            </nav>
            <p className="eyebrow">{c.eyebrow}</p>
            <h1 className="mt-5 text-[2.3rem] leading-[1.1] font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">{c.heading}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{c.intro}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={whatsappLink(c.demoMessage)} target="_blank" rel="noopener" className="btn-primary !py-3.5">
                <Icon.Whatsapp className="h-5 w-5" /> Book a Free Demo
              </a>
              <Link href="#pricing" className="btn-secondary !py-3.5">
                From RM {site.priceFrom}/month · {site.freeMonths} months free
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-14 max-w-5xl">
            <Combo main={c.hero.main} phone={c.hero.phone} priority badge={c.hero.badge} />
          </div>
          <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
            {c.whoFor.map((w) => (
              <li key={w} className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {c.spotlights.map((s, i) => (
        <section key={s.title} className={`overflow-hidden py-16 sm:py-20 ${i % 2 === 0 ? "bg-slate-50" : ""}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Spotlight
              eyebrow={s.eyebrow}
              title={s.title}
              points={s.points}
              reverse={i % 2 === 1}
              visual={renderVisual(s.visual)}
              cta={i === 1 ? { label: "Ask for a demo", message: c.demoMessage } : undefined}
            />
          </div>
        </section>
      ))}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="All modules" title={`Inside the ${c.name}`} />
          <FeatureTiles items={c.modules} />
        </div>
      </section>

      <HardwareSection />
      <PricingSection />
      <FaqSection items={c.faqs} />
      <ContactSection phoneShot={c.contactPhone} />
    </>
  );
}

export { FloatBadge };
