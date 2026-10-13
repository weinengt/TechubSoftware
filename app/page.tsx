import Link from "next/link";
import Device from "@/components/Device";
import JsonLd from "@/components/JsonLd";
import { Icon } from "@/components/Icons";
import { FaqSection, HardwareSection, PricingSection, SectionHeading, allFeatures, faqJsonLd, softwareJsonLd } from "@/components/Sections";
import { Combo, ContactSection, DeviceFamily, FeatureTiles, FloatBadge, Gallery, Spotlight, homeGallery } from "@/components/Showcase";
import { shots, type Shot } from "@/lib/shots";
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
            screenshots: [shots.clinicDashboard, shots.spaCalendar, shots.queueTv, shots.whatsappSpa, shots.scanClinic, shots.medication],
          }),
          faqJsonLd(faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 lg:pb-24">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" aria-hidden="true" />
        <div className="absolute -top-40 right-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-teal-brand/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
          <div className="lg:col-span-5">
            <p className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {site.uptime} uptime guaranteed
            </p>
            <h1 className="mt-5 text-[2.5rem] leading-[1.08] font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
              <span className="text-gradient">Clinic</span> &amp; <span className="text-gradient">Spa/Salon</span> Management System
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Appointments, queue calling, WhatsApp reminders, AI stock and printing. One system, any device.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-primary !py-3.5">
                <Icon.Whatsapp className="h-5 w-5" /> Get a Free Demo
              </a>
              <Link href="/#demo" className="btn-secondary !py-3.5">
                See Examples <Icon.Arrow className="h-4 w-4" />
              </Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-slate-200 pt-6">
              <div>
                <dt className="text-xs font-medium text-slate-500">Uptime</dt>
                <dd className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">{site.uptime}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">From</dt>
                <dd className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">RM {site.priceFrom}<span className="text-sm font-semibold text-slate-500">/mo</span></dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">New users</dt>
                <dd className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">3 mo free</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7">
            <Combo
              main={shots.clinicDashboard}
              phone={shots.customerPackage}
              priority
              badge={<FloatBadge icon="Gift">First {site.freeMonths} months free</FloatBadge>}
            />
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section aria-label="Highlights" className="border-y border-slate-200 bg-slate-50">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-5 px-4 py-7 text-sm font-semibold text-slate-700 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { i: Icon.Shield, t: `${site.uptime} uptime` },
            { i: Icon.Whatsapp, t: "WhatsApp alerts" },
            { i: Icon.Sparkles, t: "AI stock control" },
            { i: Icon.Headset, t: "Free setup & training" },
          ].map(({ i: I, t }) => (
            <li key={t} className="flex items-center gap-3">
              <I className="h-6 w-6 shrink-0 text-brand-500" /> {t}
            </li>
          ))}
        </ul>
      </section>

      {/* Two solutions */}
      <section id="solutions" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our solutions" title="Built for clinics, spas and salons" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <SolutionCard
              href="/clinic-management-system/"
              icon={<Icon.Stethoscope className="h-6 w-6" />}
              title="Clinic Management System"
              shot={shots.medication}
              points={["Queue calling & EMR", "Medication tracking", "Body chart & e-signature", "MC, labels & receipts"]}
            />
            <SolutionCard
              href="/spa-salon-appointment-system/"
              icon={<Icon.Flower className="h-6 w-6" />}
              title="Spa & Salon Appointment System"
              shot={shots.spaCalendar}
              points={["Booking calendar", "WhatsApp reminders", "Packages & memberships", "Staff commission & POS"]}
            />
          </div>
        </div>
      </section>

      {/* Example output gallery */}
      <section id="demo" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Example output" title={<>See what your team <span className="text-gradient">will use every day</span></>} />
          <Gallery items={homeGallery} />
        </div>
      </section>

      {/* AI stock */}
      <section id="ai-stock" className="overflow-hidden py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Spotlight
            eyebrow="Advanced stock control with AI"
            title="Snap the delivery note. Stock updates itself."
            points={[
              "AI reads items, batch and expiry",
              "Stock adjusts automatically",
              "Every movement tracked",
              "Smart low-stock reorder alerts",
            ]}
            visual={<Combo main={shots.inventory} phone={shots.scanClinic} />}
            cta={{ label: "Ask about AI stock", message: "Hi Techub, I'd like to know more about AI stock control." }}
          />
        </div>
      </section>

      {/* Any device + permissions */}
      <section className="overflow-hidden bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Spotlight
            reverse
            eyebrow="Cross-device & permission control"
            title="Any device. The right access for every staff."
            points={["Desktop, tablet and phone", "Roles for every staff", "Manager approval for discounts", "Full audit trail"]}
            visual={<DeviceFamily main={shots.permissions} tablet={shots.bodyChartSpa} phone={shots.scanSpa} />}
          />
        </div>
      </section>

      <HardwareSection />

      {/* All features */}
      <section id="features" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Features" title="Everything in one system" />
          <FeatureTiles items={allFeatures} />
          <div className="mt-12 grid items-center gap-8 rounded-3xl bg-brand-50 p-6 ring-1 ring-brand-100 sm:p-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">Need it your way?</h3>
              <p className="mt-3 text-slate-600">We customise forms, workflows, reports and printouts at a low cost.</p>
              <a href={whatsappLink("Hi Techub, I'd like to discuss a customised system.")} target="_blank" rel="noopener" className="btn-primary mt-6">
                Discuss your needs <Icon.Arrow className="h-4 w-4" />
              </a>
            </div>
            <ol className="grid grid-cols-2 gap-3">
              {["Consult", "Customise", "Install & train", "Go live"].map((t, i) => (
                <li key={t} className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <span className="text-gradient text-2xl font-extrabold">0{i + 1}</span>
                  <p className="mt-1 font-bold text-slate-900">{t}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <PricingSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

function SolutionCard({
  href, icon, title, shot, points,
}: { href: string; icon: React.ReactNode; title: string; shot: Shot; points: string[] }) {
  return (
    <article className="card flex flex-col overflow-hidden">
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-brand-50 via-white to-cyan-50 sm:h-72">
        <Device shot={shot} sizes="(min-width: 1024px) 560px, 90vw" className="absolute inset-x-5 top-6 sm:inset-x-8 sm:top-8" />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-lg shadow-brand-500/30">{icon}</span>
          <h3 className="text-xl font-extrabold text-slate-900 sm:text-2xl">{title}</h3>
        </div>
        <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm font-medium text-slate-700">
              <Icon.Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" strokeWidth={3} /> {p}
            </li>
          ))}
        </ul>
        <Link href={href} className="btn-secondary mt-7 self-start">
          Explore {title.startsWith("Spa") ? "spa & salon" : "clinic"} system <Icon.Arrow className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
