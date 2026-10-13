import type { Metadata } from "next";
import ProductPage, { type ProductContent } from "@/components/ProductPage";
import { site } from "@/lib/site";

const description =
  "Spa and salon appointment system for Malaysia: online booking, WhatsApp reminders, therapist and room scheduling, packages and memberships, staff commission, retail POS and AI stock control. 99.95% uptime. From RM 99/month, 3 months free.";

export const metadata: Metadata = {
  title: "Spa & Salon Appointment System Malaysia | Booking, WhatsApp Reminders & POS",
  description,
  keywords: [
    "spa appointment system", "salon booking system", "salon software Malaysia", "beauty salon system",
    "spa management software", "sistem temujanji salon", "WhatsApp appointment reminder", "salon POS Malaysia",
    "therapist scheduling", "membership package system",
  ],
  alternates: { canonical: "/spa-salon-appointment-system/" },
  openGraph: { url: "/spa-salon-appointment-system/", title: "Spa & Salon Appointment System Malaysia | Techub Software", description },
};

const c: ProductContent = {
  path: "/spa-salon-appointment-system/",
  name: "Spa & Salon Appointment System",
  category: "Spa and salon booking, POS and membership",
  description,
  eyebrow: "Spa & Salon Appointment System",
  heading: <>Fill your calendar with the <span className="text-gradient">spa & salon system</span> customers love</>,
  intro:
    "Let customers book their favourite therapist or stylist, remind them on WhatsApp, and check them out with packages, memberships and retail products in seconds. Built for spas, hair and beauty salons, nail and lash studios, massage and wellness centres in Malaysia.",
  whoFor: ["Day spas", "Hair salons", "Beauty & facial centres", "Nail & lash studios", "Massage & reflexology", "Wellness centres", "Barbershops"],
  modules: [
    { icon: "Calendar", title: "Appointment Booking", text: "Drag-and-drop calendar by therapist, stylist or room. Avoid double bookings and see the whole day at a glance." },
    { icon: "Whatsapp", title: "WhatsApp Reminders", text: "Automatic WhatsApp booking confirmations, reminders and rebooking messages cut no-shows and last-minute gaps." },
    { icon: "Megaphone", title: "Queue & Walk-in Calling", text: "Manage walk-ins with queue numbers and call customers to the right room or chair on a display." },
    { icon: "Users", title: "Therapist & Staff Scheduling", text: "Shifts, off days, skills and room assignments, so the right staff is always available for each service." },
    { icon: "Gift", title: "Packages & Memberships", text: "Sell treatment packages, prepaid credits and memberships, and track remaining sessions automatically." },
    { icon: "Chart", title: "Commission & Performance", text: "Calculate staff commission on services and products automatically, with clear performance reports." },
    { icon: "Pen", title: "Treatment Notes & Drawing", text: "Record skin analysis, before/after photos and draw treatment areas by hand. Capture digital consent signatures." },
    { icon: "Card", title: "Retail POS", text: "Fast checkout for services and retail products with cash, card and e-wallet payments, discounts and vouchers." },
    { icon: "Sparkles", title: "AI Stock Control", text: "Track products and consumables used per treatment. Scan delivery notes and let AI suggest reorders." },
    { icon: "Route", title: "Inventory Movement Tracking", text: "Every bottle and tube is logged from delivery to treatment use or retail sale, by branch and staff." },
    { icon: "Printer", title: "Receipt & Label Printing", text: "Print receipts, invoices, vouchers and product labels on thermal, label or A4 printers." },
    { icon: "Lock", title: "Permission Control", text: "Decide who can give discounts, edit bookings, view sales or access customer data, with an audit trail." },
  ],
  workflowTitle: "From booking to repeat visit",
  workflow: [
    { t: "Customer books", d: "Bookings come in by phone, walk-in or online and land in the right therapist's calendar." },
    { t: "WhatsApp reminder", d: "A confirmation and a reminder are sent automatically before the appointment." },
    { t: "Serve & record", d: "Staff record treatment notes, photos and products used. Stock deducts automatically." },
    { t: "Checkout & rebook", d: "Pay with packages, credits or cash, print the receipt and schedule the next visit." },
  ],
  highlightTitle: "Reduce no-shows and grow repeat customers",
  highlightText:
    "Automated WhatsApp alerts and package tracking keep customers coming back, while the calendar keeps every therapist, stylist and room fully booked.",
  highlights: [
    "WhatsApp confirmation, reminder and thank-you messages",
    "Remaining package sessions shown at every visit",
    "Customer history, preferences and favourite staff",
    "Birthday and win-back promotions",
    "Multi-branch bookings and reports",
  ],
  faqs: [
    { q: "How much is the spa and salon appointment system?", a: `It starts from RM ${site.priceFrom}/month. New spas and salons get the first ${site.freeMonths} months free, including installation and staff training.` },
    { q: "Does it send WhatsApp appointment reminders?", a: "Yes. Booking confirmations and reminders are sent automatically on WhatsApp, and you can also send rebooking and promotion messages." },
    { q: "Can I manage packages and memberships?", a: "Yes. Sell packages, prepaid credits and memberships, and the system tracks remaining sessions and balances automatically." },
    { q: "Does it calculate staff commission?", a: "Yes. Commission for services and product sales is calculated automatically per staff member, with reports by day, week or month." },
    { q: "Can I use it on a tablet or phone?", a: "Yes. The system works on desktop, tablet and mobile, so staff can check their schedule and record treatments anywhere." },
    { q: "Can the system be customised for my salon?", a: "Yes. We customise services, forms, workflows, reports and printouts to suit your business at a low cost." },
  ],
  demoMessage: "Hi Techub, I'd like a free demo of the spa & salon appointment system.",
};

export default function SpaSalonPage() {
  return <ProductPage c={c} />;
}
