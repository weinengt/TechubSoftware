import Link from "next/link";
import { emailLink, site, systems, whatsappLink } from "@/lib/site";
import { Icon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <img src="/images/logo.webp" alt="Techub Software" width={150} height={48} className="h-10 w-auto" loading="lazy" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
            {site.name} provides appointment management systems for businesses in Malaysia, customised for clinics,
            hair salons, beauty centres and spas. {site.uptime} uptime, WhatsApp alerts, queue calling and AI stock
            control, from RM {site.priceFrom}/month.
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm font-semibold text-slate-800">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-brand-700">
              <Icon.Whatsapp className="h-5 w-5 text-whatsapp" /> {site.whatsappDisplay}
            </a>
            <a href={emailLink()} className="inline-flex items-center gap-2 hover:text-brand-700">
              <Icon.Mail className="h-5 w-5 text-brand-500" /> {site.email}
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">Appointment systems</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {systems.map((s) => (
              <li key={s.key}><Link className="hover:text-brand-700" href={s.href}>{s.name}</Link></li>
            ))}
            <li><Link className="hover:text-brand-700" href="/#features">Custom System Development</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">Company</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li><Link className="hover:text-brand-700" href="/#systems">Our systems</Link></li>
            <li><Link className="hover:text-brand-700" href="/#features">Features</Link></li>
            <li><Link className="hover:text-brand-700" href="/#pricing">Pricing</Link></li>
            <li><Link className="hover:text-brand-700" href="/#faq">FAQ</Link></li>
            <li><Link className="hover:text-brand-700" href="/#contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-slate-500 sm:px-6 lg:px-8">
          © {year} {site.name}. All rights reserved. Appointment management systems for clinics, salons, beauty centres and spas in Malaysia.
        </p>
      </div>
    </footer>
  );
}
