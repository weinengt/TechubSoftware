import { site, whatsappLink } from "@/lib/site";
import { Icon } from "./Icons";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener"
      aria-label={`Chat with Techub Software on WhatsApp ${site.whatsappDisplay}`}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
    >
      <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg ring-1 ring-slate-200 transition group-hover:translate-x-0 sm:block sm:translate-x-2 sm:opacity-0 sm:group-hover:opacity-100">
        Chat with us
      </span>
      <span className="wa-pulse relative isolate flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-green-600/30 transition group-hover:scale-105">
        <Icon.Whatsapp className="h-7 w-7" />
      </span>
    </a>
  );
}
