"use client";

import { useRef, type ReactNode } from "react";

// Wraps an image frame so a tap/click opens the full-size picture.
export default function Zoomable({ src, alt, children, className = "" }: { src: string; alt: string; children: ReactNode; className?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const position = /\b(absolute|fixed)\b/.test(className) ? "" : "relative";
  return (
    <div className={`group ${position} ${className}`}>
      {children}
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className="absolute inset-0 cursor-zoom-in rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500"
        aria-label={`Enlarge picture: ${alt}`}
      >
        <span className="absolute right-2 bottom-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-lg ring-1 ring-slate-200 transition sm:opacity-0 sm:group-hover:opacity-100">
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4-4M11 8.5v5M8.5 11h5" />
          </svg>
        </span>
      </button>
      <dialog
        ref={dialog}
        onClick={() => dialog.current?.close()}
        className="m-auto max-h-[94vh] max-w-[96vw] overflow-visible bg-transparent p-0 backdrop:bg-slate-950/85 backdrop:backdrop-blur-sm"
        aria-label={alt}
      >
        <img src={src} alt={alt} loading="lazy" className="block max-h-[90vh] w-auto max-w-[94vw] rounded-xl shadow-2xl" />
        <span className="absolute -top-3 -right-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-slate-800 shadow-lg" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </span>
      </dialog>
    </div>
  );
}
