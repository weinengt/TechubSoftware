"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode, type RefObject } from "react";
import { htmlLang, localeName, localeShort, locales, lp, splitPath, type Locale } from "@/lib/i18n";
import { Icon, type IconName } from "./Icons";

/** The words and links the header needs, in the page's language (built by SiteShell). */
export type HeaderText = {
  homeHref: string;
  nav: { key: string; href: string; label: string; menu?: boolean }[];
  systems: { key: string; href: string; icon: IconName; label: string; blurb: string }[];
  menu: { useCases: string; otherTitle: string; otherText: string; otherHref: string };
  ui: { logoAlt: string; logoHome: string; openMenu: string; closeMenu: string; language: string; freeDemo: string };
  whatsapp: { href: string; label: string };
  email: { href: string; label: string };
};

const linkClass = "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-brand-50 hover:text-brand-700";

/** Closes a popup on a click outside it or on Escape. */
function useDismiss(open: boolean, ref: RefObject<HTMLElement | null>, setOpen: (open: boolean) => void) {
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, ref, setOpen]);
}

/** "Use Cases" in the desktop menu: opens a panel listing each business type. */
function UseCasesMenu({ label, t }: { label: string; t: HeaderText }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  useDismiss(open, ref, setOpen);

  // Open on hover with a mouse; touch and keyboard use the button.
  const hoverOpen = (e: ReactPointerEvent) => {
    if (e.pointerType !== "mouse") return;
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hoverClose = (e: ReactPointerEvent) => {
    if (e.pointerType !== "mouse") return;
    closeTimer.current = window.setTimeout(() => setOpen(false), 150);
  };

  return (
    <li ref={ref} className="relative" onPointerEnter={hoverOpen} onPointerLeave={hoverClose}>
      <button
        type="button"
        className={`${linkClass} inline-flex items-center gap-1 ${open ? "bg-brand-50 text-brand-700" : ""}`}
        aria-expanded={open}
        aria-controls="use-cases-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <Icon.Chevron className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      <div id="use-cases-menu" hidden={!open} className="absolute top-full left-1/2 w-[36rem] -translate-x-1/2 pt-3">
        <div className="card p-3 shadow-2xl shadow-slate-900/10">
          <ul className="grid grid-cols-2 gap-1">
            {t.systems.map((s) => {
              const I = Icon[s.icon];
              return (
                <li key={s.key}>
                  <Link href={s.href} onClick={() => setOpen(false)} className="group flex gap-3 rounded-xl p-3 transition hover:bg-brand-50">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md shadow-brand-500/25">
                      <I className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-bold text-slate-900 group-hover:text-brand-700">{s.label}</span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-slate-500">{s.blurb}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={t.menu.otherHref}
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600 transition hover:bg-brand-50"
          >
            <span>
              <b className="text-slate-900">{t.menu.otherTitle}</b> {t.menu.otherText}
            </span>
            <Icon.Arrow className="h-4 w-4 shrink-0 text-brand-600" />
          </Link>
        </div>
      </div>
    </li>
  );
}

/** Language switch: the same page in English, Bahasa Melayu or Chinese. */
function LanguageMenu({ lang, label }: { lang: Locale; label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { path } = splitPath(usePathname() || "/");
  useDismiss(open, ref, setOpen);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className={`inline-flex h-10 items-center gap-1 rounded-full px-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 min-[380px]:px-2.5 ${open ? "bg-slate-100" : ""}`}
        aria-expanded={open}
        aria-controls="language-menu"
        aria-label={`${label}: ${localeName[lang]}`}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon.Globe className="h-[18px] w-[18px] shrink-0 text-brand-600" />
        <span>{localeShort[lang]}</span>
        <Icon.Chevron className={`hidden h-3.5 w-3.5 transition sm:block ${open ? "rotate-180" : ""}`} />
      </button>
      <div id="language-menu" hidden={!open} className="absolute top-full right-0 z-10 w-48 pt-2">
        <ul className="card p-1.5 shadow-2xl shadow-slate-900/10">
          {locales.map((l) => (
            <li key={l}>
              <a
                href={lp(l, path)}
                hrefLang={htmlLang[l]}
                lang={htmlLang[l]}
                aria-current={l === lang ? "true" : undefined}
                className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold transition hover:bg-brand-50 ${
                  l === lang ? "text-brand-700" : "text-slate-700"
                }`}
              >
                {localeName[l]}
                {l === lang && <Icon.Check className="h-4 w-4" strokeWidth={2.5} />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: ReactNode }) {
  return (
    <Link href={href} onClick={onClick} className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-brand-50">
      {children}
    </Link>
  );
}

export default function Header({ lang, t }: { lang: Locale; t: HeaderText }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the phone menu after moving to another page.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? "border-b border-slate-200/70 bg-white/85 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 min-[380px]:px-4 sm:px-6 lg:px-8" aria-label="Main">
        <Link href={t.homeHref} className="flex shrink-0 items-center" aria-label={t.ui.logoHome}>
          <img src="/images/logo.webp" alt={t.ui.logoAlt} width={125} height={40} className="h-7 w-auto min-[380px]:h-8 sm:h-9" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {t.nav.map((item) =>
            item.menu ? (
              <UseCasesMenu key={item.key} label={item.label} t={t} />
            ) : (
              <li key={item.key}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageMenu lang={lang} label={t.ui.language} />
          {/* Hidden on the narrowest phones, where the floating WhatsApp button does the same job. */}
          <a href={t.whatsapp.href} target="_blank" rel="noopener" className="btn-primary !px-3 !py-2 whitespace-nowrap max-[359px]:!hidden min-[400px]:!px-4 sm:!px-6 sm:!py-2.5">
            {t.ui.freeDemo}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Icon.Close /> : <Icon.Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-200 bg-white px-4 pt-4 pb-6 lg:hidden">
          <p className="px-1 text-xs font-bold tracking-wide text-slate-500 uppercase">{t.menu.useCases}</p>
          <ul className="mt-2 grid grid-cols-2 gap-2">
            {t.systems.map((s) => {
              const I = Icon[s.icon];
              return (
                <li key={s.key}>
                  <Link
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="flex h-full items-center gap-2.5 rounded-xl bg-slate-50 p-3 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 hover:bg-brand-50"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white">
                      <I className="h-4 w-4" />
                    </span>
                    {s.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="mt-3 flex flex-col border-t border-slate-100 pt-2">
            {t.nav
              .filter((item) => !item.menu)
              .map((item) => (
                <li key={item.key}>
                  <MobileLink href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </MobileLink>
                </li>
              ))}
          </ul>
          <a href={t.whatsapp.href} target="_blank" rel="noopener" className="btn-primary mt-3 w-full">
            <Icon.Whatsapp className="h-5 w-5" /> {t.whatsapp.label}
          </a>
          <a href={t.email.href} className="btn-secondary mt-3 w-full">
            <Icon.Mail className="h-5 w-5" /> {t.email.label}
          </a>
        </div>
      )}
    </header>
  );
}
