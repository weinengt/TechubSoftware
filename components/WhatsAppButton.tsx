"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./Icons";

/** `live` is used on the Live Selling System page, which has its own price and demo message. */
export type BubbleText = {
  href: string; hello: string; text: string; chat: string; close: string; label: string;
  live: { path: string; href: string; text: string };
};

const KEY = "techub-wa-bubble-closed";

export default function WhatsAppButton({ t }: { t: BubbleText }) {
  const [bubble, setBubble] = useState(false);
  const onLive = usePathname() === t.live.path;
  const href = onLive ? t.live.href : t.href;

  // Show a small greeting a few seconds after the visitor arrives (once per visit).
  useEffect(() => {
    let closed = false;
    try {
      closed = sessionStorage.getItem(KEY) === "1";
    } catch {}
    if (closed) return;
    const t = setTimeout(() => setBubble(true), 6000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setBubble(false);
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {}
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {bubble && (
        <div className="wa-bubble relative w-64 rounded-2xl bg-white p-4 pr-9 text-sm shadow-2xl ring-1 ring-slate-200" role="status">
          <button type="button" onClick={close} aria-label={t.close} className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600">
            <Icon.Close className="h-4 w-4" />
          </button>
          <p className="font-bold text-slate-900">{t.hello}</p>
          <p className="mt-1 text-slate-600">{onLive ? t.live.text : t.text}</p>
          <a href={href} target="_blank" rel="noopener" onClick={close}
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#0b7a6f] px-4 py-2 text-xs font-bold text-white hover:bg-[#086359]">
            <Icon.Whatsapp className="h-4 w-4" /> {t.chat}
          </a>
          <span className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-white ring-1 ring-slate-200 [clip-path:polygon(100%_0,100%_100%,0_100%)]" aria-hidden="true" />
        </div>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener"
        onClick={close}
        aria-label={t.label}
        className="wa-pulse relative isolate flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-green-600/30 transition hover:scale-105"
      >
        <Icon.Whatsapp className="h-7 w-7" />
      </a>
    </div>
  );
}
