import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { Icon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <img src="/images/logo.webp" alt="Techub Software" width={150} height={48} className="h-10 w-auto" loading="lazy" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
            {site.name} builds customised clinic management systems and spa/salon appointment systems for businesses in
            Malaysia. {site.uptime} uptime, WhatsApp alerts, queue calling, AI stock control and multi-printer support,
            from RM {site.priceFrom}/month.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-brand-700"
          >
            <Icon.Whatsapp className="h-5 w-5 text-whatsapp" /> {site.whatsappDisplay}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">Solutions</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li><Link className="hover:text-brand-700" href="/clinic-management-system/">Clinic Management System</Link></li>
            <li><Link className="hover:text-brand-700" href="/spa-salon-appointment-system/">Spa & Salon Appointment System</Link></li>
            <li><Link className="hover:text-brand-700" href="/#custom">Custom System Development</Link></li>
            <li><Link className="hover:text-brand-700" href="/#ai-stock">AI Stock Control</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">Company</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li><Link className="hover:text-brand-700" href="/#features">Features</Link></li>
            <li><Link className="hover:text-brand-700" href="/#pricing">Pricing</Link></li>
            <li><Link className="hover:text-brand-700" href="/#faq">FAQ</Link></li>
            <li><a className="hover:text-brand-700" href={whatsappLink()} target="_blank" rel="noopener">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-slate-500 sm:px-6 lg:px-8">
          © {year} {site.name}. All rights reserved. Clinic system, spa system and salon booking software, Malaysia.
        </p>
      </div>
    </footer>
  );
}
