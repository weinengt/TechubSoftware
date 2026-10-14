import type { ReactNode } from "react";
import { emailLink, site, whatsappLink } from "@/lib/site";

/** Shows the words between *asterisks* in the blue gradient colour (`text-gradient-light` on dark backgrounds). */
export function hl(text: string, className = "text-gradient"): ReactNode {
  const parts = text.split("*");
  if (parts.length < 3) return text;
  return parts.map((p, i) => (i % 2 ? <span key={i} className={className}>{p}</span> : p));
}

/** The text without highlight markers, for metadata and structured data. */
export const plain = (text: string) => text.replace(/\*/g, "");

const contactPattern = new RegExp(`(${[site.whatsappDisplay, site.email].map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`);

/** Shows our WhatsApp number and email address inside the text as links (the number never splits across lines).
 *  Phones don't turn them into links by themselves: see formatDetection in app/layout.tsx. */
export function withContactLinks(text: string, links: { whatsappMessage: string; emailSubject: string }): ReactNode {
  return text.split(contactPattern).map((part, i) =>
    part === site.whatsappDisplay ? (
      <a key={i} href={whatsappLink(links.whatsappMessage)} target="_blank" rel="noopener" className="whitespace-nowrap font-medium text-brand-700 hover:underline">
        {part}
      </a>
    ) : part === site.email ? (
      <a key={i} href={emailLink(links.emailSubject)} className="font-medium text-brand-700 hover:underline">
        {part}
      </a>
    ) : (
      part
    ),
  );
}
