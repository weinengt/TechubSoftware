// Turns a document on the page (an invoice or a payslip) into an A4 PDF in the visitor's browser, then shares it with
// the phone's share sheet or downloads it. Nothing is uploaded. The two libraries load only when someone asks for a PDF.

/** The A4 page in CSS pixels at 96 dpi: documents are drawn at this width so the PDF matches the preview. */
export const A4 = { w: 794, h: 1123 };

/** Draws the element as an A4 PDF, one page per 1123px of its height. The element may sit inside a scaled preview:
 *  the copy that is drawn has its scaling removed. */
export async function makePdf(el: HTMLElement, title: string): Promise<Blob> {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import("html2canvas-pro"), import("jspdf")]);
  if (document.fonts?.ready) await document.fonts.ready;
  const canvas = await html2canvas(el, {
    scale: 2,
    backgroundColor: "#ffffff",
    logging: false,
    windowWidth: 1280,
    onclone: (_doc, copy) => {
      for (let p = copy.parentElement; p; p = p.parentElement) p.style.transform = "none";
    },
  });
  const pdf = new jsPDF({ unit: "mm", format: "a4", compress: true });
  pdf.setProperties({ title, creator: "Techub Software free tools (techubsoftware.com)" });
  const pageW = 210, pageH = 297;
  const pxPerMm = canvas.width / pageW;
  const pagePx = Math.round(pageH * pxPerMm);
  for (let y = 0, i = 0; y < canvas.height - 4 * pxPerMm; y += pagePx, i++) {
    const h = Math.min(pagePx, canvas.height - y);
    const slice = document.createElement("canvas");
    slice.width = canvas.width;
    slice.height = h;
    const ctx = slice.getContext("2d")!;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, slice.width, h);
    ctx.drawImage(canvas, 0, y, canvas.width, h, 0, 0, canvas.width, h);
    if (i) pdf.addPage();
    pdf.addImage(slice.toDataURL("image/jpeg", 0.92), "JPEG", 0, 0, pageW, h / pxPerMm);
  }
  return pdf.output("blob");
}

/** Saves the PDF to the device. */
export function downloadPdf(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
}

/** Whether this browser can share a PDF file (most phones; some desktop browsers). */
export function canSharePdf() {
  try {
    const f = new File([new Blob(["x"], { type: "application/pdf" })], "x.pdf", { type: "application/pdf" });
    return typeof navigator !== "undefined" && !!navigator.canShare?.({ files: [f] });
  } catch {
    return false;
  }
}

/** Opens the share sheet with the PDF. Returns "blocked" when the browser wants a fresh tap first (iPhones do when
 *  making the PDF took a moment), so the page can ask for one more tap; "cancelled" when the visitor closed it. */
export async function sharePdf(blob: Blob, filename: string, title: string): Promise<"shared" | "blocked" | "cancelled" | "unsupported"> {
  const file = new File([blob], filename, { type: "application/pdf" });
  if (!navigator.canShare?.({ files: [file] })) return "unsupported";
  try {
    await navigator.share({ files: [file], title });
    return "shared";
  } catch (e) {
    const name = (e as DOMException)?.name;
    if (name === "NotAllowedError") return "blocked";
    return "cancelled";
  }
}

/** A name that is safe for a file on every phone and browser: "ZY Lash Studio / INV-001" becomes
 *  "ZY-Lash-Studio-INV-001". Letters outside A to Z are left out, as some browsers refuse them in file names. */
export const fileName = (...parts: string[]) =>
  parts
    .join(" ")
    .normalize("NFKD")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "document";
