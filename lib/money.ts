// Money helpers for the free tools: reading what people type, showing it as 1,234.50, and writing it in words for
// invoices ("RINGGIT MALAYSIA ONE HUNDRED FIFTY EIGHT ONLY").

/** A typed amount as a number: "1,234.5" is 1234.5; anything else is 0. */
export const num = (v: string | number | undefined) => {
  if (typeof v === "number") return Number.isFinite(v) ? v : 0;
  const n = parseFloat(String(v ?? "").replace(/[,\s]/g, ""));
  return Number.isFinite(n) ? n : 0;
};

/** Rounds to the sen, avoiding float slips like 1.005. */
export const sen = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

/** 1234.5 as "1,234.50". */
export const money = (n: number) =>
  new Intl.NumberFormat("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(sen(n));

const ones = ["", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN",
  "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN"];
const tens = ["", "", "TWENTY", "THIRTY", "FORTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY"];

function below1000(n: number): string {
  const h = Math.floor(n / 100), r = n % 100;
  const rest = r < 20 ? ones[r] : `${tens[Math.floor(r / 10)]}${r % 10 ? ` ${ones[r % 10]}` : ""}`;
  return [h ? `${ones[h]} HUNDRED` : "", rest].filter(Boolean).join(" ");
}

function words(n: number): string {
  if (n === 0) return "ZERO";
  const scales = ["", "THOUSAND", "MILLION", "BILLION"];
  const parts: string[] = [];
  for (let i = 0; n > 0 && i < scales.length; i++, n = Math.floor(n / 1000)) {
    const chunk = n % 1000;
    if (chunk) parts.unshift(`${below1000(chunk)}${scales[i] ? ` ${scales[i]}` : ""}`);
  }
  return parts.join(" ");
}

/** An amount in words the way invoices in Malaysia write it: "RINGGIT MALAYSIA ONE HUNDRED FIFTY EIGHT AND SEN
 *  FIFTY ONLY". */
export function amountInWords(n: number): string {
  const total = Math.round(Math.abs(n) * 100);
  const rm = Math.floor(total / 100), cents = total % 100;
  return `RINGGIT MALAYSIA ${words(rm)}${cents ? ` AND SEN ${words(cents)}` : ""} ONLY`;
}
