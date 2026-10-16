import Link from "next/link";
import type { ReactNode } from "react";
import { getDict, getShots } from "@/content";
import { lp, type Locale } from "@/lib/i18n";
import type { Shot } from "@/lib/shots";
import { emailLink, site, systems, whatsappLink, type SystemKey } from "@/lib/site";
import Demo from "./Demo";
import Device from "./Device";
import { Icon, type IconName } from "./Icons";
import { CheckList, Crumbs, pageTop, type PageOf } from "./Sections";
import { hl } from "./Text";

/* ---------- Picture compositions ---------- */

const sizesFor: Record<Shot["kind"], string> = {
  browser: "(min-width: 1024px) 640px, 92vw",
  tablet: "(min-width: 1024px) 600px, 92vw",
  tv: "(min-width: 1024px) 640px, 92vw",
  phone: "(min-width: 1024px) 200px, 34vw",
  paper: "(min-width: 1024px) 600px, 92vw",
};

/** A large screen with a phone overlapping its corner. */
export function Combo({
  main, phone, side = "right", priority, badge, zoom = true, glow = true,
}: { main: Shot; phone?: Shot; side?: "left" | "right"; priority?: boolean; badge?: ReactNode; zoom?: boolean; glow?: boolean }) {
  return (
    <div className={`relative isolate ${phone ? "pb-10 sm:pb-12" : ""}`}>
      {glow && <div className="glow absolute -inset-12 -z-10" aria-hidden="true" />}
      <Device shot={main} sizes={sizesFor[main.kind]} priority={priority} zoom={zoom} className={phone ? (side === "right" ? "mr-[8%]" : "ml-[8%]") : ""} />
      {phone && (
        <div className={`absolute bottom-0 w-[27%] max-w-[13rem] ${side === "right" ? "right-0" : "left-0"}`}>
          <Device shot={phone} sizes={sizesFor.phone} priority={priority} zoom={zoom} />
        </div>
      )}
      {badge && <div className="absolute -top-4 left-2 sm:-left-4">{badge}</div>}
    </div>
  );
}

/** Laptop screen with a tablet and a phone in front: "works on any device". */
export function DeviceFamily({ main, tablet, phone, priority, badge }: { main: Shot; tablet: Shot; phone: Shot; priority?: boolean; badge?: ReactNode }) {
  return (
    <div className="relative isolate pb-16 sm:pb-20">
      <div className="glow absolute -inset-12 -z-10" aria-hidden="true" />
      <Device shot={main} sizes={sizesFor.browser} priority={priority} className="mx-[7%]" />
      <div className="absolute bottom-0 left-0 w-[44%]">
        <Device shot={tablet} sizes="(min-width: 1024px) 300px, 44vw" />
      </div>
      <div className="absolute right-0 bottom-3 w-[21%] max-w-[11rem]">
        <Device shot={phone} sizes={sizesFor.phone} />
      </div>
      {badge && <div className="absolute -top-4 left-2 sm:-left-2">{badge}</div>}
    </div>
  );
}

/** One phone, centred, with optional floating badges. */
export function PhoneShowcase({ shot, badges = [] }: { shot: Shot; badges?: ReactNode[] }) {
  return (
    <div className="relative isolate mx-auto w-60 sm:w-72">
      <div className="glow absolute -inset-14 -z-10" aria-hidden="true" />
      <Device shot={shot} sizes="(min-width: 640px) 288px, 240px" />
      {badges[0] && <div className="absolute top-16 -left-24 hidden sm:block">{badges[0]}</div>}
      {badges[1] && <div className="absolute -right-24 bottom-24 hidden sm:block">{badges[1]}</div>}
    </div>
  );
}

export function FloatBadge({ icon, children, tone = "brand" }: { icon: IconName; children: ReactNode; tone?: "brand" | "green" }) {
  const I = Icon[icon];
  return (
    <div className="animate-float flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-xs font-bold text-slate-800 shadow-xl ring-1 ring-slate-200 sm:text-sm">
      <span className={`flex h-7 w-7 items-center justify-center rounded-full ${tone === "green" ? "bg-whatsapp text-white" : "bg-brand-500 text-white"}`}>
        <I className="h-4 w-4" />
      </span>
      {children}
    </div>
  );
}

/* ---------- Business types ---------- */

/** Links to the other business types, shown near the end of each system page. */
export function OtherSystems({ lang, current }: { lang: Locale; current: SystemKey }) {
  const t = getDict(lang);
  return (
    <section aria-labelledby="other-systems" className="pt-12 pb-4 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="other-systems" className="text-center text-sm font-bold tracking-wide text-slate-500 uppercase" data-reveal>
          {t.product.otherSystems}
        </h2>
        {/* Five other systems: rows that don't fill up stay centred */}
        <ul className="mx-auto mt-5 flex max-w-6xl flex-wrap justify-center gap-3">
          {systems
            .filter((s) => s.key !== current)
            .map((s) => {
              const I = Icon[s.icon];
              return (
                <li key={s.key} className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(20%-0.6rem)]" data-reveal>
                  <Link href={lp(lang, s.path)} className="card group flex h-full items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:ring-brand-200">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                      <I className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1 font-bold text-slate-900">{t.systems[s.key].label}</span>
                    <Icon.Arrow className="h-4 w-4 text-brand-600 transition group-hover:translate-x-0.5" />
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Image + short text rows ---------- */

export function Spotlight({
  eyebrow, title, points, visual, reverse, cta, id, revealVisual = true,
}: {
  eyebrow: string;
  title: string;
  points: string[];
  visual: ReactNode;
  reverse?: boolean;
  cta?: { label: string; message: string };
  id?: string;
  /** False for a moving picture, which comes in as it scrolls into view by itself. */
  revealVisual?: boolean;
}) {
  // Phones: heading, picture, then details, so each heading introduces its own picture.
  // Desktop: picture on one side, heading and details stacked on the other.
  const textCol = reverse ? "lg:col-start-1" : "lg:col-start-8";
  return (
    <div id={id} className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-6">
      <div className={`lg:col-span-5 lg:row-start-1 lg:self-end ${textCol}`} data-reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{hl(title)}</h2>
      </div>
      <div className={`self-center lg:col-span-7 lg:row-span-2 lg:row-start-1 ${reverse ? "lg:col-start-6" : "lg:col-start-1"}`} data-reveal={revealVisual ? "zoom" : undefined}>
        {visual}
      </div>
      <div className={`lg:col-span-5 lg:row-start-2 lg:self-start ${textCol}`}>
        <CheckList items={points} />
        {cta && (
          <a href={whatsappLink(cta.message)} target="_blank" rel="noopener" className="btn-secondary mt-8" data-reveal>
            <Icon.Whatsapp className="h-4 w-4 text-whatsapp" /> {cta.label}
          </a>
        )}
      </div>
    </div>
  );
}

/* ---------- Multiple outlets ---------- */

/** The made-up business each system's example screens use. */
const sampleBusiness: Record<SystemKey, string> = {
  clinic: "Demo Clinic", salon: "Demo Hair Salon", beauty: "Demo Beauty Centre", spa: "Demo Day Spa", live: "Demo Live Shop", inventory: "Demo Trading",
};

const outletBars = [[45, 70, 55, 85, 75], [60, 45, 75, 55, 90], [35, 60, 50, 65, 55]];

/** Every system page: one app for all of a business's outlets, drawn as its outlet switcher. */
export function OutletsSection({ lang, k }: { lang: Locale; k: SystemKey }) {
  const t = getDict(lang).outlets;
  const visual = (
    <div className="relative isolate mx-auto max-w-lg" aria-hidden="true">
      <div className="glow absolute -inset-10 -z-10" />
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
        <div className="flex items-center justify-between gap-3 bg-brand-950 px-4 py-3.5 sm:px-5">
          <span className="flex min-w-0 items-center gap-2.5">
            <span className="h-7 w-7 shrink-0 rounded-lg bg-gradient-to-br from-brand-500 to-teal-brand" />
            <span className="text-sm leading-tight font-bold text-white">{sampleBusiness[k]}</span>
          </span>
          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-100 ring-1 ring-white/15">
            <Icon.Sync className="h-3.5 w-3.5 text-teal-brand" /> {t.switch}
          </span>
        </div>
        <ul className="space-y-2.5 p-3 sm:p-4">
          {t.places.map((p, i) => {
            const on = i === 0;
            return (
              <li key={p.city} className={`flex items-center gap-3 rounded-xl p-3 ring-1 ${on ? "bg-brand-50 ring-brand-200" : "ring-slate-200"}`}>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${on ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                  <Icon.MapPin className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm leading-snug font-bold text-slate-900">{p.city}</span>
                  <span className="block text-xs leading-snug text-slate-500">{p.area}</span>
                </span>
                <span className="flex h-8 items-end gap-1">
                  {outletBars[i].map((h, j) => (
                    <span key={j} className={`w-1.5 rounded-full ${on ? "bg-brand-400" : "bg-slate-200"}`} style={{ height: `${h}%` }} />
                  ))}
                </span>
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${on ? "bg-emerald-500 text-white" : "ring-1 ring-slate-300"}`}>
                  {on && <Icon.Check className="h-3.5 w-3.5" strokeWidth={3} />}
                </span>
              </li>
            );
          })}
        </ul>
        <p className="border-t border-slate-100 px-4 py-3 text-center text-xs font-medium text-slate-500">{t.tap}</p>
      </div>
    </div>
  );
  return (
    <section id="outlets" className="overflow-hidden py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Spotlight eyebrow={t.eyebrow} title={t.title} points={t.points} visual={visual} />
      </div>
    </section>
  );
}

/* ---------- Compact feature tiles ---------- */

export function FeatureTiles({ items }: { items: { icon: IconName; title: string }[] }) {
  return (
    <ul className="mt-12 grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {items.map((f) => {
        const I = Icon[f.icon];
        return (
          <li key={f.title} className="card flex items-center gap-3 p-3.5 sm:p-4" data-reveal>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <I className="h-5 w-5" />
            </span>
            <span className="text-sm leading-snug font-semibold text-balance text-slate-800">{f.title}</span>
          </li>
        );
      })}
    </ul>
  );
}

/* ---------- Contact ---------- */

/** The closing call to action. `offer` swaps the badge, text and WhatsApp message (the Live Selling System has its own). */
export function ContactSection({
  lang, title, phoneShot, page, offer,
}: { lang: Locale; title?: string; phoneShot?: Shot; page?: PageOf; offer?: { badge: string; text: string; message: string } }) {
  const t = getDict(lang);
  const c = t.contact;
  const H = page ? "h1" : "h2";
  return (
    <section id="contact" className={`${page ? pageTop : "pt-20 sm:pt-24"} pb-20 sm:pb-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {page && <Crumbs lang={page.lang} current={page.crumb} className="rise" />}
        <div
          className={`relative overflow-hidden rounded-[2rem] bg-brand-gradient px-6 pt-12 text-white sm:px-12 lg:px-16 lg:pt-0 ${page ? "rise [--rise:80ms]" : ""}`}
          data-reveal={page ? undefined : true}
        >
          <div className="bg-grid absolute inset-0 opacity-25" aria-hidden="true" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div className="lg:py-16">
              <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold tracking-wide uppercase ring-1 ring-white/25">
                {offer?.badge ?? c.badge}
              </p>
              <H className={`mt-4 font-extrabold tracking-tight ${page ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"}`}>{title ?? c.title}</H>
              <p className="mt-3 text-lg text-white/90">{offer?.text ?? c.text}</p>
              <div className="mt-8 grid max-w-md gap-3">
                <a href={whatsappLink(offer?.message ?? t.ui.whatsappMessage)} target="_blank" rel="noopener"
                  className="group flex items-center gap-3 rounded-2xl bg-white p-4 text-slate-900 shadow-xl transition hover:-translate-y-0.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white">
                    <Icon.Whatsapp className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold text-slate-500">{c.whatsappLabel}</span>
                    <span className="block font-bold">{site.whatsappDisplay}</span>
                  </span>
                </a>
                <a href={emailLink(t.ui.emailSubject)}
                  className="group flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/30 transition hover:-translate-y-0.5 hover:bg-white/15">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-700">
                    <Icon.Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold text-white/80">{c.emailLabel}</span>
                    <span className="block text-sm font-bold [overflow-wrap:anywhere] sm:text-base">{site.email}</span>
                  </span>
                </a>
              </div>
            </div>
            {page ? (
              // The Contact page's own picture shows the app at work.
              <div className="relative mx-auto w-56 sm:w-64 lg:mt-12 lg:w-72">
                <Demo lang={lang} demo="contact" layout="phone" zoom={false} className="translate-y-6" />
              </div>
            ) : (
              <div className="rv-part relative mx-auto w-56 [--d:250ms] sm:w-64 lg:mt-12 lg:w-72">
                <Device shot={phoneShot ?? getShots(lang).whatsappSalon} sizes="(min-width: 1024px) 288px, 256px" zoom={false} className="translate-y-6" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
