"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Icon, type IconName } from "./Icons";

/** Tabs that switch between use cases. The panels are rendered on the server and passed in. */
export default function UseCaseTabs({ label, tabs, panels }: { label: string; tabs: { key: string; label: string; icon: IconName }[]; panels: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const n = tabs.length;
    const next = { ArrowRight: (i + 1) % n, ArrowLeft: (i - 1 + n) % n, Home: 0, End: n - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label={label} className="mx-auto grid max-w-md grid-cols-2 gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center">
        {tabs.map((t, i) => {
          const I = Icon[t.icon];
          const selected = i === active;
          return (
            <button
              key={t.key}
              ref={(el) => {
                buttons.current[i] = el;
              }}
              id={`tab-${t.key}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${t.key}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition sm:px-6 ${
                selected
                  ? "bg-brand-gradient text-white shadow-lg shadow-brand-500/30"
                  : "bg-white text-slate-700 ring-1 ring-slate-200 hover:text-brand-700 hover:ring-brand-300"
              }`}
            >
              <I className="h-4 w-4 shrink-0" />
              {t.label}
            </button>
          );
        })}
      </div>
      {panels.map((panel, i) => (
        <div
          key={tabs[i].key}
          id={`panel-${tabs[i].key}`}
          role="tabpanel"
          aria-labelledby={`tab-${tabs[i].key}`}
          hidden={i !== active}
          className="mt-10 sm:mt-14"
        >
          {panel}
        </div>
      ))}
    </div>
  );
}
