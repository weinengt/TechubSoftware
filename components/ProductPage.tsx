import Link from "next/link";
import type { ReactNode } from "react";
import JsonLd from "./JsonLd";
import { Icon, type IconName } from "./Icons";
import {
  CheckList,
  CtaSection,
  FaqSection,
  FeatureCard,
  HardwareSection,
  PricingSection,
  SectionHeading,
  breadcrumbJsonLd,
  faqJsonLd,
  softwareJsonLd,
} from "./Sections";
import { site, whatsappLink } from "@/lib/site";

export type ProductContent = {
  path: string;
  name: string;
  category: string;
  description: string;
  eyebrow: string;
  heading: ReactNode;
  intro: string;
  whoFor: string[];
  modules: { icon: IconName; title: string; text: string }[];
  workflowTitle: string;
  workflow: { t: string; d: string }[];
  highlightTitle: string;
  highlightText: string;
  highlights: string[];
  faqs: { q: string; a: string }[];
  demoMessage: string;
};

export default function ProductPage({ c }: { c: ProductContent }) {
  const url = `${site.url}${c.path}`;
  return (
    <>
      <JsonLd
        data={[
          softwareJsonLd({
            name: c.name,
            description: c.description,
            url,
            category: c.category,
            features: c.modules.map((m) => m.title),
          }),
          faqJsonLd(c.faqs),
          breadcrumbJsonLd([
            { name: "Home", url: `${site.url}/` },
            { name: c.name, url },
          ]),
        ]}
      />

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-700">Home</Link> <span aria-hidden="true">/</span>{" "}
            <span className="text-slate-700">{c.name}</span>
          </nav>
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {c.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">{c.intro}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappLink(c.demoMessage)} target="_blank" rel="noopener" className="btn-primary">
              <Icon.Whatsapp className="h-5 w-5" /> Book a Free Demo
            </a>
            <Link href="#pricing" className="btn-secondary">
              From RM {site.priceFrom}/month · {site.freeMonths} months free
            </Link>
          </div>
          <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-2">
            {c.whoFor.map((w) => (
              <li key={w} className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Modules" title={`What's inside the ${c.name}`} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.modules.map((m) => (
              <FeatureCard key={m.title} icon={m.icon} title={m.title}>{m.text}</FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How it works" title={c.workflowTitle} />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {c.workflow.map((s, i) => (
              <li key={s.t} className="card relative p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-sm font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 rounded-3xl bg-brand-50 p-8 ring-1 ring-brand-100 sm:p-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">{c.highlightTitle}</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">{c.highlightText}</p>
            </div>
            <CheckList items={c.highlights} />
          </div>
        </div>
      </section>

      <HardwareSection />
      <PricingSection />
      <FaqSection items={c.faqs} />
      <CtaSection />
    </>
  );
}
