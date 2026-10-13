import { Icon } from "./Icons";

// Decorative product preview built in HTML/CSS (no images to download).
export default function HeroMockup() {
  const appts = [
    { time: "09:30", name: "Tan Mei Ling", what: "General consultation", tag: "Checked in", color: "bg-emerald-100 text-emerald-700" },
    { time: "10:00", name: "Ahmad Faizal", what: "Follow-up · Dr. Lim", tag: "Waiting", color: "bg-amber-100 text-amber-700" },
    { time: "10:30", name: "Priya Devi", what: "Facial treatment · Room 3", tag: "Booked", color: "bg-brand-100 text-brand-700" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-xl" aria-hidden="true">
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-20 blur-3xl" />

      <div className="card overflow-hidden">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-medium text-slate-500">Techub · Today&apos;s Dashboard</span>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-5">
          <div className="rounded-xl bg-brand-gradient p-4 text-white sm:col-span-2">
            <p className="text-xs font-medium text-white/80">Now Calling</p>
            <p className="mt-1 text-4xl font-extrabold tracking-tight">A023</p>
            <p className="mt-1 text-sm text-white/90">Counter 2 · Dr. Lim</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-white/85">
              <Icon.Megaphone className="h-4 w-4" /> Next: A024, A025
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:col-span-3">
            {[
              { k: "Appointments", v: "48", s: "+12% vs last week" },
              { k: "Uptime", v: "99.95%", s: "Guaranteed" },
              { k: "Low stock", v: "3", s: "AI reorder ready" },
              { k: "Revenue", v: "RM 8.4k", s: "Today" },
            ].map((m) => (
              <div key={m.k} className="rounded-xl border border-slate-100 bg-white p-3">
                <p className="text-[11px] font-medium text-slate-500">{m.k}</p>
                <p className="mt-0.5 text-lg font-bold text-slate-900">{m.v}</p>
                <p className="text-[11px] text-slate-400">{m.s}</p>
              </div>
            ))}
          </div>

          <div className="sm:col-span-5">
            <p className="mb-2 text-xs font-semibold text-slate-500">Upcoming appointments</p>
            <ul className="divide-y divide-slate-100 rounded-xl border border-slate-100">
              {appts.map((a) => (
                <li key={a.time} className="flex items-center gap-3 px-3 py-2.5">
                  <span className="w-12 text-xs font-semibold text-slate-500">{a.time}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-slate-800">{a.name}</span>
                    <span className="block truncate text-xs text-slate-500">{a.what}</span>
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${a.color}`}>{a.tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="animate-float absolute -bottom-10 -left-2 w-64 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200 sm:-left-10">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white">
            <Icon.Whatsapp className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold text-slate-800">Appointment reminder sent</p>
            <p className="mt-0.5 text-[11px] leading-snug text-slate-500">
              Hi Priya, see you tomorrow at 10:30am. Reply 1 to confirm.
            </p>
          </div>
        </div>
      </div>

      <div className="animate-float absolute -right-3 -top-5 hidden rounded-2xl bg-white px-3 py-2 shadow-xl ring-1 ring-slate-200 [animation-delay:1.5s] sm:block">
        <div className="flex items-center gap-2">
          <Icon.Sparkles className="h-5 w-5 text-brand-500" />
          <p className="text-xs font-semibold text-slate-800">Delivery note scanned · 24 items added</p>
        </div>
      </div>
    </div>
  );
}
