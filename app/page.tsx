import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Icon } from "@/components/Icons";
import { FaqSection, HardwareSection, PricingSection, SectionHeading, allFeatures, faqJsonLd, softwareJsonLd } from "@/components/Sections";
import { Combo, ContactSection, DeviceFamily, FeatureTiles, FloatBadge, Spotlight, SystemCard } from "@/components/Showcase";
import { shots, type Shot } from "@/lib/shots";
import { faqs, site, systems, whatsappLink, type SystemKey } from "@/lib/site";

// The pictures on each business card: an iPad screen and a phone screen.
const cardShots: Record<SystemKey, { tablet: Shot; phone: Shot }> = {
  clinic: { tablet: shots.clinicDashboard, phone: shots.whatsappClinic },
  salon: { tablet: shots.salonCalendar, phone: shots.salonCustomer },
  beauty: { tablet: shots.faceChart, phone: shots.beautyPackage },
  spa: { tablet: shots.spaCalendar, phone: shots.spaPackage },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          softwareJsonLd({
            name: "Techub Appointment Management System",
            description: site.description,
            url: `${site.url}/`,
            category: "Appointment scheduling and business management",
            features: allFeatures.map((f) => f.title),
            screenshots: [shots.salonCalendar, shots.whatsappSalon, ...systems.map((s) => cardShots[s.key].tablet)],
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Techub appointment systems",
            itemListElement: systems.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: `${site.url}${s.href}` })),
          },
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
              <span className="text-gradient">Appointment Management</span> System for your business
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Bookings, WhatsApp reminders, queue calling, payments and AI stock control. On iPad, phone and PC.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-primary !py-3.5">
                <Icon.Whatsapp className="h-5 w-5" /> Get a Free Demo
              </a>
              <Link href="/#systems" className="btn-secondary !py-3.5">
                Choose your business <Icon.Arrow className="h-4 w-4" />
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
              main={shots.salonCalendar}
              phone={shots.whatsappSalon}
              priority
              badge={<FloatBadge icon="Gift">First {site.freeMonths} months free</FloatBadge>}
            />
          </div>
        </div>
      </section>

      {/* Business types */}
      <section id="systems" className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our appointment systems" title="Choose your business" intro="Tap to see the system with example screens on iPad and phone." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {systems.map((s) => (
              <SystemCard key={s.key} system={s} tablet={cardShots[s.key].tablet} phone={cardShots[s.key].phone} />
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl bg-white p-6 text-center ring-1 ring-slate-200 sm:flex-row sm:p-8 sm:text-left">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">Another kind of business?</h3>
              <p className="mt-1 text-slate-600">If you take appointments, we can set Techub up for you at a low cost.</p>
            </div>
            <a href={whatsappLink("Hi Techub, I'd like an appointment system for my business.")} target="_blank" rel="noopener" className="btn-primary shrink-0">
              <Icon.Whatsapp className="h-5 w-5" /> Ask us on WhatsApp
            </a>
          </div>
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
            visual={<Combo main={shots.beautyStock} phone={shots.scanBeauty} />}
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
            title="iPad, phone or PC. The right access for every staff."
            points={["Front desk on iPad or PC", "Staff and managers on their phones", "Manager approval for discounts", "Full audit trail"]}
            visual={<DeviceFamily main={shots.permissionsDesktop} tablet={shots.spaCalendar} phone={shots.whatsappBeauty} />}
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
