import type { DemoKey } from "@/components/demoScenes";
import type { ShotKey } from "@/lib/shots";
import type { Locale } from "@/lib/i18n";
import type { SystemKey } from "@/lib/site";

/** One blog post. Its words are in content/blog/<slug>/<en|ms|zh>.md, the same slug in every language. */
export type PostInfo = {
  slug: string;
  /** The day it went live (YYYY-MM-DD). */
  date: string;
  /** The system the post is about: its page is linked from the post. Null for a post about every system. */
  system: SystemKey | null;
  /** The moving picture at the top of the post, and the moment it starts at. Without one, the post's own picture
   *  (`image`) shows at the top instead. */
  demo?: DemoKey;
  start?: string;
  /** The picture on the post's card on the Blog page (and when shared). */
  image: ShotKey;
  /** The same picture in Malay or Chinese, when it has words on it. */
  images?: Partial<Record<Exclude<Locale, "en">, ShotKey>>;
};

/** Newest first. */
export const posts: PostInfo[] = [
  { slug: "clinic-paper-records-to-emr-malaysia-2026", date: "2026-10-23", system: "clinic", image: "clinicEmr", images: { ms: "clinicEmrMs", zh: "clinicEmrZh" } },
  { slug: "clinic-medicine-stock-batch-expiry-malaysia", date: "2026-10-22", system: "clinic", image: "clinicMeds", images: { ms: "clinicMedsMs", zh: "clinicMedsZh" } },
  { slug: "how-to-calculate-epf-socso-eis-pcb-2026", date: "2026-10-22", system: "payroll", image: "epfSocso", images: { ms: "epfSocsoMs", zh: "epfSocsoZh" } },
  { slug: "sme-loans-budget-2027-malaysia-tekun-bsn-bnm", date: "2026-10-20", system: null, image: "smeLoans", images: { ms: "smeLoansMs", zh: "smeLoansZh" } },
  { slug: "minimum-wage-rm2000-june-2027-e-wages", date: "2026-10-18", system: null, image: "minWage", images: { ms: "minWageMs", zh: "minWageZh" } },
  { slug: "rts-link-johor-bahru-2027-business-ready", date: "2026-10-17", system: null, image: "rtsLink", images: { ms: "rtsLinkMs", zh: "rtsLinkZh" } },
  { slug: "budget-2027-malaysia-clinics-salons-spas", date: "2026-10-16", system: null, image: "budget2027", images: { ms: "budget2027Ms", zh: "budget2027Zh" } },
  { slug: "how-to-choose-clinic-management-system-malaysia", date: "2026-10-15", system: "clinic", demo: "clinic", image: "clinicDashboard" },
  { slug: "clinic-queue-system-number-calling", date: "2026-10-15", system: "clinic", demo: "clinic", start: "queue", image: "queueTv" },
  { slug: "reduce-no-shows-whatsapp-reminders-booking-deposits", date: "2026-10-15", system: "salon", demo: "salon", start: "confirmed", image: "whatsappSalon" },
  { slug: "salon-staff-commission-payroll", date: "2026-10-15", system: "salon", demo: "salon", start: "commission", image: "payrollSalon" },
  { slug: "beauty-centre-packages-memberships", date: "2026-10-15", system: "beauty", demo: "beauty", start: "packages", image: "beautyPackage" },
  { slug: "spa-massage-booking-therapists-rooms", date: "2026-10-15", system: "spa", demo: "spa", start: "couple", image: "spaCalendar" },
  { slug: "stop-overselling-tiktok-facebook-live", date: "2026-10-15", system: "live", demo: "live", start: "rush", image: "liveQueue" },
  { slug: "lhdn-e-invoice-2026-clinics-salons-spas", date: "2026-10-15", system: null, demo: "salonDeposits", start: "invoice", image: "eInvoice" },
];

export const blogPath = "/blog/";
export const postPath = (slug: string) => `${blogPath}${slug}/`;
