"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { A4, canSharePdf, downloadPdf, makePdf, sharePdf } from "@/lib/pdf";
import { Icon } from "../Icons";

/* Form parts shared by the free tools. Inputs are 16px on phones so iPhones don't zoom in on them. */

export const inputClass =
  "block w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 sm:text-sm";

export function Field({ label, hint, children, className = "" }: { label: string; hint?: string; children: ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-[13px] font-semibold text-slate-700">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-slate-500">{hint}</span>}
    </label>
  );
}

export function Text({ label, hint, value, onChange, className, ...rest }: {
  label: string; hint?: string; value: string; onChange: (v: string) => void; className?: string;
  placeholder?: string; type?: string; inputMode?: "decimal" | "numeric" | "text" | "email" | "tel"; list?: string; maxLength?: number;
}) {
  return (
    <Field label={label} hint={hint} className={className}>
      <input className={inputClass} value={value} onChange={(e) => onChange(e.target.value)} {...rest} />
    </Field>
  );
}

export function Area({ label, value, onChange, rows = 3, placeholder, className }: {
  label: string; value: string; onChange: (v: string) => void; rows?: number; placeholder?: string; className?: string;
}) {
  return (
    <Field label={label} className={className}>
      <textarea className={`${inputClass} resize-y`} rows={rows} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </Field>
  );
}

export function Select<T extends string>({ label, value, onChange, options, className, hint }: {
  label: string; value: T; onChange: (v: T) => void; options: { value: T; label: string }[]; className?: string; hint?: string;
}) {
  return (
    <Field label={label} className={className} hint={hint}>
      <select className={`${inputClass} pr-8`} value={value} onChange={(e) => onChange(e.target.value as T)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </Field>
  );
}

/** A box of related fields with a numbered title. */
export function Panel({ n, title, children, action }: { n?: number; title: string; children: ReactNode; action?: ReactNode }) {
  return (
    <section className="card p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2.5 text-base font-bold text-slate-900">
          {n !== undefined && (
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-white">{n}</span>
          )}
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}

/** Small round button, e.g. to remove a line. */
export function IconButton({ label, onClick, children }: { label: string; onClick: () => void; children: ReactNode }) {
  return (
    <button type="button" onClick={onClick} aria-label={label} title={label}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-red-50 hover:text-red-600">
      {children}
    </button>
  );
}

export const Trash = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4h6v3" />
  </svg>
);

export const Plus = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
);

/** A value kept in this browser only (localStorage), so a returning visitor finds their details again. The first
 *  draw uses the default, then the saved value comes in. */
export function useSaved<T>(key: string, initial: T): [T, (v: T | ((old: T) => T)) => void, boolean] {
  const [value, setValue] = useState<T>(initial);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) setValue({ ...initial, ...JSON.parse(raw) });
    } catch {}
    setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key, value, loaded]);
  return [value, setValue, loaded];
}

/** Lets the visitor pick a logo; it is shrunk to at most 480px and kept as a data URL on their device. */
export function LogoPicker({ value, onChange, t }: { value?: string; onChange: (v: string) => void; t: { logo: string; uploadLogo: string; removeLogo: string; logoHint: string } }) {
  const input = useRef<HTMLInputElement>(null);
  const pick = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const s = Math.min(1, 480 / Math.max(img.width, img.height));
        const c = document.createElement("canvas");
        c.width = Math.round(img.width * s);
        c.height = Math.round(img.height * s);
        c.getContext("2d")!.drawImage(img, 0, 0, c.width, c.height);
        onChange(c.toDataURL("image/png"));
      };
      img.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <span className="mb-1.5 block text-[13px] font-semibold text-slate-700">{t.logo}</span>
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => input.current?.click()}
          className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 text-slate-400 transition hover:border-brand-400 hover:text-brand-600"
          aria-label={t.uploadLogo}>
          {value ? <img src={value} alt="" className="h-full w-full object-contain p-1" /> : <Plus />}
        </button>
        <div className="flex flex-col items-start gap-1">
          <button type="button" onClick={() => input.current?.click()} className="text-sm font-semibold text-brand-700 hover:underline">{t.uploadLogo}</button>
          {value ? (
            <button type="button" onClick={() => onChange("")} className="text-xs font-medium text-slate-500 hover:text-red-600">{t.removeLogo}</button>
          ) : (
            <span className="text-xs text-slate-500">{t.logoHint}</span>
          )}
        </div>
        <input ref={input} type="file" accept="image/*" className="hidden" onChange={(e) => { pick(e.target.files?.[0]); e.target.value = ""; }} />
      </div>
    </div>
  );
}

/** Shows an A4 document scaled down to fit its column. The document itself stays 794px wide, so the PDF matches. */
export function A4Preview({ children, docRef }: { children: ReactNode; docRef: React.RefObject<HTMLDivElement | null> }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState(A4.h);
  useLayoutEffect(() => {
    const el = box.current;
    if (!el) return;
    const update = () => {
      setScale(Math.min(1, el.clientWidth / A4.w));
      setHeight(docRef.current?.offsetHeight ?? A4.h);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    if (docRef.current) ro.observe(docRef.current);
    return () => ro.disconnect();
  }, [docRef]);
  return (
    <div ref={box} className="w-full">
      <div className="overflow-hidden rounded-lg bg-white shadow-xl ring-1 shadow-slate-900/10 ring-slate-200" style={{ height: height * scale }}>
        <div style={{ width: A4.w, transform: `scale(${scale})`, transformOrigin: "top left" }}>{children}</div>
      </div>
    </div>
  );
}

export type ExportText = { download: string; share: string; making: string; tapShare: string; failed: string };

/** Download and Share buttons for a document. Share shows only where the browser can share files. */
export function ExportBar({ docRef, filename, title, t, className = "" }: {
  docRef: React.RefObject<HTMLDivElement | null>; filename: string; title: string; t: ExportText; className?: string;
}) {
  const [busy, setBusy] = useState<"" | "download" | "share">("");
  const [ready, setReady] = useState<Blob | null>(null);
  const [error, setError] = useState(false);
  const [share, setShare] = useState(false);
  useEffect(() => setShare(canSharePdf()), []);
  useEffect(() => setReady(null), [filename, title]);

  const run = async (kind: "download" | "share") => {
    if (!docRef.current || busy) return;
    setBusy(kind);
    setError(false);
    try {
      const blob = await makePdf(docRef.current, title);
      if (kind === "download") downloadPdf(blob, `${filename}.pdf`);
      else {
        const r = await sharePdf(blob, `${filename}.pdf`, title);
        if (r === "blocked") setReady(blob);
        if (r === "unsupported") downloadPdf(blob, `${filename}.pdf`);
      }
    } catch {
      setError(true);
    } finally {
      setBusy("");
    }
  };

  const shareReady = async () => {
    if (!ready) return;
    const blob = ready;
    setReady(null);
    const r = await sharePdf(blob, `${filename}.pdf`, title);
    if (r === "blocked" || r === "unsupported") downloadPdf(blob, `${filename}.pdf`);
  };

  const spin = <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />;
  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2.5">
        <button type="button" onClick={() => run("download")} disabled={!!busy} className="btn-primary flex-1 disabled:opacity-70 sm:flex-none">
          {busy === "download" ? spin : <DownloadIcon />} {busy === "download" ? t.making : t.download}
        </button>
        {share && (
          <button type="button" onClick={ready ? shareReady : () => run("share")} disabled={!!busy}
            className={`${ready ? "btn-primary !bg-whatsapp" : "btn-secondary"} flex-1 disabled:opacity-70 sm:flex-none`}>
            {busy === "share" ? spin : <ShareIcon />} {busy === "share" ? t.making : ready ? t.tapShare : t.share}
          </button>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-600" role="alert">{t.failed}</p>}
    </div>
  );
}

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </svg>
);
const ShareIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 15V4M8 8l4-4 4 4M5 13v6a1 1 0 001 1h12a1 1 0 001-1v-6" />
  </svg>
);

export { Icon };
