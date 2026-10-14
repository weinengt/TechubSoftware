"use client";

import type { CSSProperties } from "react";
import { Icon, type IconName } from "./Icons";
import { DemoNote, useDemoClock, type DemoText } from "./ScreenDemo";

// The technology picture: Techub Cloud in the middle, connected to the devices and services around it (laid out by
// TechHub in ./Company.tsx). With `text` (the Technology page) it also shows each of them at work in turn, with a
// note like the example screens: the part lights up and data runs out to it along its line.

type HubNode = { k: string; x: number; y: number; icon: IconName; label: string };

export default function HubDemo({ nodes, r, center, uptime, text }: { nodes: HubNode[]; r: number; center: string; uptime: string; text?: DemoText }) {
  const clock = useDemoClock(nodes.length, { off: !text });
  const { box, i, prev, motion } = clock;
  const on = text ? nodes[i] : undefined;
  return (
    <div ref={box} className="demo relative" role={text && "group"} aria-label={text?.label} data-motion={motion || undefined}>
      <div className="relative overflow-hidden rounded-[2rem] bg-brand-950 px-3 pt-4 pb-8 ring-1 ring-white/10 sm:px-8 sm:pt-6 sm:pb-10">
        <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="glow-hub absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <circle cx="50" cy="50" r={r} fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="0.35" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="rgb(255 255 255 / 0.1)" strokeWidth="0.35" strokeDasharray="0.8 1.6" />
            {nodes.map((n, j) => (
              <line
                key={n.k}
                x1="50"
                y1="50"
                x2={n.x}
                y2={n.y}
                stroke="rgb(0 207 203 / 0.6)"
                strokeWidth="0.45"
                strokeDasharray="1.2 1.6"
                className="tech-flow rv-line"
                style={{ "--d": `${350 + j * 90}ms` } as CSSProperties}
              />
            ))}
            {/* Data running out to the part at work; the line to the part before fades out rather than stopping. */}
            {on && [...(prev !== i ? [prev] : []), i].map((n) => (
              <g key={`p${n}`} className="hub-trail" data-leave={n !== i || undefined}>
                <line x1="50" y1="50" x2={nodes[n].x} y2={nodes[n].y} className="hub-pulse" />
              </g>
            ))}
          </svg>
          <div className="rv-pop absolute top-1/2 left-1/2 flex aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-brand-gradient text-center text-white shadow-[0_0_60px_-5px_rgb(0_207_203/0.6)] ring-[6px] ring-white/10 [--d:150ms]">
            <Icon.Cloud className="h-7 w-7 sm:h-9 sm:w-9" />
            <span className="mt-1 text-[13px] leading-tight font-extrabold sm:text-base">{center}</span>
            <span className="mt-0.5 text-[10px] font-semibold text-white/85 sm:text-xs">{uptime}</span>
          </div>
          {nodes.map((n, j) => {
            const I = Icon[n.icon];
            const lit = n.k === on?.k || undefined;
            return (
              <div
                key={n.k}
                className="rv-pop absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${n.x}%`, top: `${n.y}%`, "--d": `${600 + j * 90}ms` } as CSSProperties}
              >
                <span className="hub-node relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-lg shadow-black/20 sm:h-12 sm:w-12" data-on={lit}>
                  <span className="hub-fill absolute inset-0 rounded-2xl bg-brand-gradient" aria-hidden="true" />
                  <I className="relative h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <span className="hub-label absolute top-full left-1/2 mt-1.5 w-20 -translate-x-1/2 text-center text-[11px] leading-tight font-semibold text-slate-200 sm:w-24 sm:text-xs" data-on={lit}>
                  {n.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {text && on && (
        <DemoNote
          clock={clock}
          card={(n) => ({ icon: nodes[n].icon, green: nodes[n].k === "whatsapp", note: text.notes[nodes[n].k] })}
          labels={text}
          className="absolute -top-4 left-2 [--d:900ms] sm:-left-4"
        />
      )}
    </div>
  );
}
