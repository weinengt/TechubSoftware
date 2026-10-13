import Link from "next/link";
import HeroMockup from "@/components/HeroMockup";
import JsonLd from "@/components/JsonLd";
import { Icon } from "@/components/Icons";
import {
  CheckList,
  CtaSection,
  FaqSection,
  FeatureGrid,
  HardwareSection,
  PricingSection,
  SectionHeading,
  allFeatures,
  faqJsonLd,
  softwareJsonLd,
} from "@/components/Sections";
import { faqs, site, whatsappLink } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          softwareJsonLd({
            name: "Techub Clinic & Spa/Salon Management System",
            description: site.description,
            url: `${site.url}/`,
            category: "Clinic management and appointment scheduling",
            features: allFeatures.map((f) => f.title),
          }),
          faqJsonLd(faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-24 sm:pt-36">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
        <div className="absolute -top-40 right-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-teal-brand/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {site.uptime} uptime guaranteed
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Custom <span className="text-gradient">Clinic</span> &amp; <span className="text-gradient">Spa/Salon</span>{" "}
              Management Systems
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Techub Software builds reliable, customised systems for clinics, spas and salons in Malaysia: appointments,
              queue calling, WhatsApp reminders, patient records, AI stock control and printing, all in one place.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-primary">
                <Icon.Whatsapp className="h-5 w-5" /> Get a Free Demo
              </a>
              <Link href="/#solutions" className="btn-secondary">
                Explore Solutions <Icon.Arrow className="h-4 w-4" />
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              <div>
                <dt className="text-xs font-medium text-slate-500">Uptime</dt>
                <dd className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">{site.uptime}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">Starts from</dt>
                <dd className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">RM {site.priceFrom}<span className="text-sm font-semibold text-slate-500">/mo</span></dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">New users</dt>
                <dd className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">{site.freeMonths} mo free</dd>
              </div>
            </dl>
          </div>
          <HeroMockup />
        </div>
      </section>

      {/* Highlights strip */}
      <section aria-label="Highlights" className="border-y border-slate-200 bg-slate-50">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 text-sm font-semibold text-slate-700 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { i: Icon.Shield, t: `${site.uptime} uptime guarantee` },
            { i: Icon.Whatsapp, t: "WhatsApp appointment alerts" },
            { i: Icon.Sparkles, t: "AI-powered stock control" },
            { i: Icon.Headset, t: "Free installation & training" },
          ].map(({ i: I, t }) => (
            <li key={t} className="flex items-center gap-3">
              <I className="h-6 w-6 shrink-0 text-brand-500" /> {t}
            </li>
          ))}
        </ul>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our solutions"
            title="Two specialised systems, built around how you work"
            intro="We specialise in healthcare and beauty businesses. Choose the system that fits, then we customise it to your workflow."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <SolutionCard
              href="/clinic-management-system/"
              icon={<Icon.Stethoscope className="h-7 w-7" />}
              tag="For clinics, GP, dental & specialists"
              title="Clinic Management System"
              text="Run registration, queue, consultation, prescriptions, dispensing and billing from one screen. Patient history and medication records are always one click away."
              points={[
                "Patient registration & electronic medical records",
                "Queue number calling with TV display & voice",
                "Patient medication & prescription tracking",
                "Body charts with hand drawing & e-signature",
                "Medicine inventory with batch & expiry",
                "Print MC, receipts, labels & referral letters",
              ]}
            />
            <SolutionCard
              href="/spa-salon-appointment-system/"
              icon={<Icon.Flower className="h-7 w-7" />}
              tag="For spa, salon, beauty & wellness"
              title="Spa & Salon Appointment System"
              text="Let customers book online, get WhatsApp reminders and arrive on time. Manage therapists, rooms, packages, memberships and product sales with ease."
              points={[
                "Online booking & therapist/room scheduling",
                "WhatsApp confirmations & reminders",
                "Packages, memberships & prepaid credits",
                "Staff commission & performance reports",
                "Treatment notes with photos & drawing",
                "Retail POS with AI stock control",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Features"
            title={<>Everything your business needs, <span className="text-gradient">in one system</span></>}
            intro="Powerful features out of the box, plus the freedom to customise anything."
          />
          <FeatureGrid />
        </div>
      </section>

      {/* AI stock */}
      <section id="ai-stock" className="overflow-hidden py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Advanced stock control with AI"
              title="Scan a delivery note. Your stock updates itself."
              intro="Stop typing invoices line by line. Techub's AI reads supplier delivery notes, matches items to your inventory and adjusts stock automatically, while keeping a full history of every movement."
            />
            <CheckList
              className="mt-8"
              items={[
                "Scan or photograph delivery notes and invoices to auto-receive stock",
                "Automatic stock adjustment on sales, treatments and dispensing",
                "Track every inventory movement: in, out, transfer, return and write-off",
                "Batch number and expiry date tracking with early alerts",
                "AI low-stock prediction and smart reorder suggestions",
                "Multi-branch stock view and inter-branch transfers",
              ]}
            />
          </div>
          <StockMockup />
        </div>
      </section>

      {/* Cross-device & permissions */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Secure & flexible"
            title="Any device. The right access for every staff."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { I: Icon.Devices, t: "Cross-device", d: "Desktop, laptop, tablet and mobile. Your data stays in sync in real time across every device and branch." },
              { I: Icon.Lock, t: "Permission control", d: "Create roles like doctor, nurse, therapist, cashier and manager. Grant or limit access to each module and action." },
              { I: Icon.Users, t: "Staff control", d: "Manage staff accounts, working hours, branch access and commissions. Every action is logged for accountability." },
            ].map(({ I, t, d }) => (
              <div key={t} className="card p-8">
                <I className="h-9 w-9 text-brand-500" />
                <h3 className="mt-5 text-xl font-bold text-slate-900">{t}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HardwareSection />

      {/* Custom */}
      <section id="custom" className="overflow-hidden py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="card grid items-center gap-10 overflow-hidden p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Customised system solutions</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Your workflow, your system, at a low cost
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Every business is different. We tailor forms, workflows, reports, printouts and integrations to fit the way
                your team works, without the price tag of building from scratch.
              </p>
              <a href={whatsappLink("Hi Techub, I'd like to discuss a customised system.")} target="_blank" rel="noopener" className="btn-primary mt-8">
                Discuss Your Requirements <Icon.Arrow className="h-4 w-4" />
              </a>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {[
                { n: "01", t: "Consult", d: "Tell us how your business runs today." },
                { n: "02", t: "Customise", d: "We configure and build the features you need." },
                { n: "03", t: "Install & train", d: "Free on-site setup and staff training." },
                { n: "04", t: "Grow", d: "Ongoing support and upgrades as you expand." },
              ].map((s) => (
                <li key={s.n} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                  <span className="text-gradient text-2xl font-extrabold">{s.n}</span>
                  <h3 className="mt-2 font-bold text-slate-900">{s.t}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}

function SolutionCard({
  href, icon, tag, title, text, points,
}: { href: string; icon: React.ReactNode; tag: string; title: string; text: string; points: string[] }) {
  return (
    <article className="card relative flex flex-col overflow-hidden p-8 sm:p-10">
      <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-brand-gradient opacity-10" />
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-brand-500/30">
        {icon}
      </span>
      <p className="mt-6 text-sm font-semibold text-brand-600">{tag}</p>
      <h3 className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">{title}</h3>
      <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
      <CheckList items={points} className="mt-6 flex-1" />
      <Link href={href} className="btn-secondary mt-8 self-start">
        Learn more about {title.split(" ")[0] === "Spa" ? "the spa & salon system" : "the clinic system"} <Icon.Arrow className="h-4 w-4" />
      </Link>
    </article>
  );
}

function StockMockup() {
  const rows = [
    { item: "Paracetamol 500mg", batch: "B2409", qty: "+500", type: "Stock in · DN scanned" },
    { item: "Hydrating Serum 30ml", batch: "S1187", qty: "-2", type: "Used in treatment" },
    { item: "Amoxicillin 250mg", batch: "A0921", qty: "-21", type: "Dispensed · Patient #1042" },
    { item: "Hair Colour 7.1", batch: "H3301", qty: "-1", type: "Retail sale" },
  ];
  return (
    <div className="relative" aria-hidden="true">
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-15 blur-3xl" />
      <div className="card p-5">
        <div className="flex items-center gap-4 rounded-xl border-2 border-dashed border-brand-300 bg-brand-50 p-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-600 shadow">
            <Icon.Scan className="h-7 w-7" />
          </span>
          <div className="flex-1">
            <p className="text-sm font-bold text-slate-900">Delivery note DN-20481 scanned</p>
            <p className="text-xs text-slate-500">AI matched 24 of 24 items · stock adjusted automatically</p>
          </div>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">Done</span>
        </div>
        <p className="mt-5 mb-2 text-xs font-semibold text-slate-500">Inventory movement log</p>
        <ul className="divide-y divide-slate-100 rounded-xl border border-slate-100">
          {rows.map((r) => (
            <li key={r.item} className="flex items-center gap-3 px-3 py-3">
              <Icon.Box className="h-5 w-5 shrink-0 text-slate-400" />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-slate-800">{r.item}</span>
                <span className="block truncate text-xs text-slate-500">Batch {r.batch} · {r.type}</span>
              </span>
              <span className={`text-sm font-bold ${r.qty.startsWith("+") ? "text-emerald-600" : "text-slate-700"}`}>{r.qty}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-amber-50 p-3 ring-1 ring-amber-200">
          <Icon.Sparkles className="h-5 w-5 shrink-0 text-amber-600" />
          <p className="text-xs font-medium text-amber-800">AI: Hydrating Serum will run out in ~6 days. Suggest reorder 20 units.</p>
        </div>
      </div>
    </div>
  );
}
