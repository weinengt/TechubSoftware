import type { ReactNode } from "react";
import Device from "./Device";
import { Icon, type IconName } from "./Icons";
import { CheckList } from "./Sections";
import { shots, type Shot } from "@/lib/shots";
import { emailLink, site, whatsappLink } from "@/lib/site";

/* ---------- Picture compositions ---------- */

const sizesFor: Record<Shot["kind"], string> = {
  browser: "(min-width: 1024px) 640px, 92vw",
  tablet: "(min-width: 1024px) 600px, 92vw",
  tv: "(min-width: 1024px) 640px, 92vw",
  phone: "(min-width: 1024px) 200px, 34vw",
  paper: "(min-width: 1024px) 600px, 92vw",
};

/** A large screen with a phone overlapping its corner. */
export function Combo({ main, phone, side = "right", priority, badge }: { main: Shot; phone?: Shot; side?: "left" | "right"; priority?: boolean; badge?: ReactNode }) {
  return (
    <div className={`relative ${phone ? "pb-10 sm:pb-12" : ""}`}>
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-brand-gradient opacity-[0.13] blur-3xl" aria-hidden="true" />
      <Device shot={main} sizes={sizesFor[main.kind]} priority={priority} className={phone ? (side === "right" ? "mr-[8%]" : "ml-[8%]") : ""} />
      {phone && (
        <div className={`absolute bottom-0 w-[27%] max-w-[13rem] ${side === "right" ? "right-0" : "left-0"}`}>
          <Device shot={phone} sizes={sizesFor.phone} priority={priority} />
        </div>
      )}
      {badge && <div className="absolute -top-4 left-2 sm:-left-4">{badge}</div>}
    </div>
  );
}

/** Laptop screen with a tablet and a phone in front: "works on any device". */
export function DeviceFamily({ main, tablet, phone }: { main: Shot; tablet: Shot; phone: Shot }) {
  return (
    <div className="relative pb-16 sm:pb-20">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-brand-gradient opacity-[0.13] blur-3xl" aria-hidden="true" />
      <Device shot={main} sizes={sizesFor.browser} className="mx-[7%]" />
      <div className="absolute bottom-0 left-0 w-[44%]">
        <Device shot={tablet} sizes="(min-width: 1024px) 300px, 44vw" />
      </div>
      <div className="absolute right-0 bottom-3 w-[21%] max-w-[11rem]">
        <Device shot={phone} sizes={sizesFor.phone} />
      </div>
    </div>
  );
}

/** One phone, centred, with optional floating badges. */
export function PhoneShowcase({ shot, badges = [] }: { shot: Shot; badges?: ReactNode[] }) {
  return (
    <div className="relative mx-auto w-60 sm:w-72">
      <div className="absolute -inset-10 -z-10 rounded-full bg-brand-gradient opacity-20 blur-3xl" aria-hidden="true" />
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

/* ---------- "See it live" gallery ---------- */

type GalleryItem = { shot: Shot; title: string; text: string; tag: string; wide?: boolean };

const stagePos: Record<Shot["kind"], string> = {
  browser: "absolute inset-x-5 top-7 sm:inset-x-8 sm:top-8",
  tv: "absolute inset-x-5 top-1/2 mx-auto max-w-[33rem] -translate-y-1/2 sm:inset-x-8",
  phone: "absolute top-7 left-1/2 w-[46%] max-w-[12.5rem] -translate-x-1/2 sm:top-8",
  tablet: "absolute inset-x-5 top-1/2 mx-auto max-w-[28rem] -translate-y-1/2 sm:inset-x-7",
  paper: "absolute inset-x-0 top-1/2 mx-auto max-w-[36rem] -translate-y-1/2 scale-110",
};

function stageSizes(item: GalleryItem) {
  if (item.shot.kind === "phone") return "(min-width: 1024px) 200px, (min-width: 640px) 22vw, 40vw";
  if (item.shot.kind === "tablet" || item.shot.kind === "tv") return "(min-width: 1024px) 528px, (min-width: 640px) 60vw, 78vw";
  return item.wide ? "(min-width: 1024px) 740px, (min-width: 640px) 88vw, 78vw" : "(min-width: 1024px) 340px, (min-width: 640px) 44vw, 78vw";
}

export function Gallery({ items, cta = true }: { items: GalleryItem[]; cta?: boolean }) {
  return (
    <>
      <ul className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-3">
        {items.map((it) => (
          <li key={it.shot.file} className={`w-[84%] shrink-0 snap-center sm:w-auto ${it.wide ? "sm:col-span-2" : ""}`}>
            <figure className="h-full">
              <div className="relative h-72 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 via-white to-cyan-50 ring-1 ring-slate-200/80 sm:h-80 lg:h-[22rem]">
                <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
                <Device shot={it.shot} sizes={stageSizes(it)} className={stagePos[it.shot.kind]} />
              </div>
              <figcaption className="mt-4 px-1">
                <span className="inline-block rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-brand-700 uppercase ring-1 ring-brand-100">
                  {it.tag}
                </span>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{it.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{it.text}</p>
              </figcaption>
            </figure>
          </li>
        ))}
        {cta && (
          <li className="w-[84%] shrink-0 snap-center sm:col-span-2 sm:w-auto lg:col-span-3">
            <div className="relative flex h-72 flex-col justify-center overflow-hidden rounded-3xl bg-brand-gradient p-7 text-white sm:h-auto sm:p-10">
              <div className="bg-grid absolute inset-0 opacity-25" aria-hidden="true" />
              <div className="relative lg:flex lg:items-center lg:justify-between lg:gap-10">
                <div>
                  <p className="text-sm font-bold tracking-wide text-white/80 uppercase">Free demo</p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">Want to see it with your own data?</h3>
                  <p className="mt-2 text-white/90">We will show you the system live, for free.</p>
                </div>
                <div className="mt-6 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
                  <a href={whatsappLink("Hi Techub, I'd like a free live demo.")} target="_blank" rel="noopener"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-800 shadow-lg hover:bg-brand-50">
                    <Icon.Whatsapp className="h-5 w-5 text-whatsapp" /> Book on WhatsApp
                  </a>
                  <a href={emailLink("Free demo request")}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white ring-1 ring-white/50 hover:bg-white/10">
                    <Icon.Mail className="h-5 w-5" /> Email us
                  </a>
                </div>
              </div>
            </div>
          </li>
        )}
      </ul>
      <p className="mt-4 text-center text-xs font-medium text-slate-500 sm:hidden">Swipe for more · Tap a picture to enlarge</p>
      <p className="mt-8 hidden text-center text-sm text-slate-500 sm:block">Click any picture to enlarge it.</p>
    </>
  );
}

export const homeGallery: GalleryItem[] = [
  { shot: shots.queueTv, wide: true, tag: "Clinic", title: "Queue number calling", text: "Patients see and hear their number on the TV. No crowding at the counter." },
  { shot: shots.whatsappSpa, tag: "WhatsApp", title: "Automatic WhatsApp reminders", text: "Confirm and remind every booking. Fewer no-shows." },
  { shot: shots.printouts, tag: "Printing", title: "Receipts, MC & labels", text: "Prints to thermal, label and A4 printers." },
  { shot: shots.bodyChart, wide: true, tag: "Hand drawing", title: "Draw & sign on a tablet", text: "Body charts, treatment notes and patient e-signatures." },
];

/* ---------- Image + short text rows ---------- */

export function Spotlight({
  eyebrow, title, points, visual, reverse, cta, id,
}: { eyebrow: string; title: ReactNode; points: string[]; visual: ReactNode; reverse?: boolean; cta?: { label: string; message: string }; id?: string }) {
  // Phones: heading, picture, then details, so each heading introduces its own picture.
  // Desktop: picture on one side, heading and details stacked on the other.
  const textCol = reverse ? "lg:col-start-1" : "lg:col-start-8";
  return (
    <div id={id} className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-6">
      <div className={`lg:col-span-5 lg:row-start-1 lg:self-end ${textCol}`}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      </div>
      <div className={`self-center lg:col-span-7 lg:row-span-2 lg:row-start-1 ${reverse ? "lg:col-start-6" : "lg:col-start-1"}`}>{visual}</div>
      <div className={`lg:col-span-5 lg:row-start-2 lg:self-start ${textCol}`}>
        <CheckList items={points} />
        {cta && (
          <a href={whatsappLink(cta.message)} target="_blank" rel="noopener" className="btn-secondary mt-8">
            <Icon.Whatsapp className="h-4 w-4 text-whatsapp" /> {cta.label}
          </a>
        )}
      </div>
    </div>
  );
}

/* ---------- Compact feature tiles ---------- */

export function FeatureTiles({ items }: { items: { icon: IconName; title: string }[] }) {
  return (
    <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {items.map((f) => {
        const I = Icon[f.icon];
        return (
          <li key={f.title} className="card flex items-center gap-3 p-3.5 sm:p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
              <I className="h-5 w-5" />
            </span>
            <span className="text-sm leading-snug font-semibold text-slate-800">{f.title}</span>
          </li>
        );
      })}
    </ul>
  );
}

/* ---------- Contact ---------- */

export function ContactSection({ title, phoneShot = shots.whatsappClinic }: { title?: string; phoneShot?: Shot }) {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-gradient px-6 pt-12 text-white sm:px-12 lg:px-16 lg:pt-0">
          <div className="bg-grid absolute inset-0 opacity-25" aria-hidden="true" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div className="lg:py-16">
              <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold tracking-wide uppercase ring-1 ring-white/25">
                Free demo · {site.freeMonths} months free
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {title ?? "See Techub running in your business"}
              </h2>
              <p className="mt-3 text-lg text-white/90">
                From RM {site.priceFrom}/month. Installation and staff training included.
              </p>
              <div className="mt-8 grid max-w-md gap-3">
                <a href={whatsappLink()} target="_blank" rel="noopener"
                  className="group flex items-center gap-3 rounded-2xl bg-white p-4 text-slate-900 shadow-xl transition hover:-translate-y-0.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white">
                    <Icon.Whatsapp className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold text-slate-500">WhatsApp · fastest reply</span>
                    <span className="block font-bold">{site.whatsappDisplay}</span>
                  </span>
                </a>
                <a href={emailLink()}
                  className="group flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/30 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-700">
                    <Icon.Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold text-white/80">Email us</span>
                    <span className="block text-sm font-bold [overflow-wrap:anywhere] sm:text-base">{site.email}</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-56 sm:w-64 lg:mt-12 lg:w-72">
              <Device shot={phoneShot} sizes="(min-width: 1024px) 288px, 256px" zoom={false} className="translate-y-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
