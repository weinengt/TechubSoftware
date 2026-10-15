import type { DemoKey } from "@/components/demoScenes";
import type { ShotKey } from "@/lib/shots";
import type { SystemKey } from "@/lib/site";

/** One blog post. Its words are in content/blog/<slug>/<en|ms|zh>.md, the same slug in every language. */
export type PostInfo = {
  slug: string;
  /** The day it went live (YYYY-MM-DD). */
  date: string;
  /** The system the post is about: its page is linked from the post. Null for a post about every system. */
  system: SystemKey | null;
  /** The moving picture at the top of the post, and the moment it starts at. */
  demo: DemoKey;
  start?: string;
  /** The picture on the post's card on the Blog page. */
  image: ShotKey;
};

/** Newest first. */
export const posts: PostInfo[] = [
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
