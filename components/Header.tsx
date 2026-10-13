"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { emailLink, nav, site, whatsappLink } from "@/lib/site";
import { Icon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? "border-b border-slate-200/70 bg-white/85 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
        <Link href="/" className="flex items-center" aria-label="Techub Software home">
          <img src="/images/logo.webp" alt="Techub Software logo" width={125} height={40} className="h-8 w-auto sm:h-9" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-primary !px-4 !py-2 text-xs sm:!px-6 sm:!py-2.5 sm:text-sm">
            Free Demo
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Icon.Close /> : <Icon.Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-brand-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-primary mt-3 w-full">
            <Icon.Whatsapp className="h-5 w-5" /> WhatsApp {site.whatsappDisplay}
          </a>
          <a href={emailLink()} className="btn-secondary mt-3 w-full">
            <Icon.Mail className="h-5 w-5" /> {site.email}
          </a>
        </div>
      )}
    </header>
  );
}
