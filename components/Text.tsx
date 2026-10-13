import type { ReactNode } from "react";

/** Shows the words between *asterisks* in the blue gradient colour (`text-gradient-light` on dark backgrounds). */
export function hl(text: string, className = "text-gradient"): ReactNode {
  const parts = text.split("*");
  if (parts.length < 3) return text;
  return parts.map((p, i) => (i % 2 ? <span key={i} className={className}>{p}</span> : p));
}

/** The text without highlight markers, for metadata and structured data. */
export const plain = (text: string) => text.replace(/\*/g, "");
