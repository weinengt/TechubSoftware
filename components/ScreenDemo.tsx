"use client";

import { useEffect, useRef, useState } from "react";
import { shotSrc, shotSrcSet, shotSrcSm, type Shot, type ShotKey } from "@/lib/shots";
import { DeviceFrame } from "./Device";
import { demos, type DemoDevice, type DemoKey, type DemoScene } from "./demoScenes";
import { Icon, type IconName } from "./Icons";
import Zoomable from "./Zoomable";

// The moving example screens: devices that show Techub at work, one moment at a time (the moments are in
// ./demoScenes.ts). The first moment is what the page shows before the script runs, to visitors who prefer less
// motion, and to search engines.

const SCENE_MS = 3800;

type Note = { title: string; text: string };
export type DemoText = { label: string; pause: string; play: string; notes: Record<string, Note> };

/** Moves on to the next moment every few seconds, but only while the picture is on screen, the tab is visible, the
 *  page has loaded and the visitor hasn't paused it or asked for less motion. `canGo` can hold the next moment back,
 *  say until its pictures have loaded. */
export function useDemoClock(count: number, { start = 0, delay = 0, off = false, canGo }: { start?: number; delay?: number; off?: boolean; canGo?: (next: number) => boolean } = {}) {
  const box = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(start);
  const [prev, setPrev] = useState(start);
  const [motion, setMotion] = useState(false); // stays false for visitors who prefer less motion
  const [ready, setReady] = useState(false); // the other screens are added once the page has loaded
  const [paused, setPaused] = useState(false);
  const [hold, setHold] = useState(false); // keyboard focus on a picture's enlarge button
  const [seen, setSeen] = useState(true); // on screen and the tab is visible
  const [moved, setMoved] = useState(false); // false until the first change, so the first note doesn't animate in
  const [retry, setRetry] = useState(0);
  const shown = useRef({ scene: start, ms: -delay }); // how long the current moment has been on screen, across pauses
  const go = useRef(canGo);
  useEffect(() => {
    go.current = canGo;
  });

  useEffect(() => {
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotion(!mq.matches && !off);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [off]);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const go = () => (t = setTimeout(() => setReady(true), 500));
    if (document.readyState === "complete") go();
    else addEventListener("load", go, { once: true });
    return () => {
      removeEventListener("load", go);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    let onScreen = true;
    const update = () => setSeen(onScreen && !document.hidden);
    const io = new IntersectionObserver(([e]) => {
      onScreen = e.isIntersecting;
      update();
    }, { threshold: 0.2 });
    io.observe(box.current!);
    document.addEventListener("visibilitychange", update);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  const running = motion && ready && !paused && !hold && seen;

  useEffect(() => {
    if (!running) return;
    if (shown.current.scene !== i) shown.current = { scene: i, ms: 0 };
    const next = (i + 1) % count;
    const at = performance.now();
    const t = setTimeout(() => {
      // Wait for the next moment's pictures, or for an enlarged picture to be closed.
      if ((go.current && !go.current(next)) || box.current?.querySelector("dialog[open]")) return setRetry((r) => r + 1);
      setPrev(i);
      setI(next);
      setMoved(true);
      setRetry(0);
    }, Math.max(SCENE_MS - shown.current.ms, 0) + (retry ? 400 : 0));
    return () => {
      clearTimeout(t);
      shown.current.ms += performance.now() - at;
    };
  }, [running, i, retry, count]);

  // The previous screen stays under the new one while it fades in, then goes, so a screen that comes back later
  // fades in again rather than appearing at once.
  useEffect(() => {
    if (prev === i) return;
    const t = setTimeout(() => setPrev(i), 1200);
    return () => clearTimeout(t);
  }, [i, prev]);

  return {
    box,
    i,
    prev,
    ready,
    motion,
    running,
    paused,
    moved,
    togglePause: () => setPaused((p) => !p),
    setHold,
    /** How long this moment stays, for the line that fills up under the note. */
    duration: SCENE_MS + (moved ? 0 : delay),
  };
}

type DemoClock = ReturnType<typeof useDemoClock>;

export type NoteCard = { icon: IconName; green?: boolean; note: Note };

/** What is happening right now, with a line that fills up until the next moment, and the pause button. The card
 *  stays put while its words change: the old ones move up and fade as the new ones come in, so no two notes show
 *  on top of each other and nothing beside the card moves. `cardClass` can give the card a fixed height. */
export function DemoNote({
  clock, card, labels, className, cardClass = "",
}: { clock: DemoClock; card: (n: number) => NoteCard; labels: { pause: string; play: string }; className: string; cardClass?: string }) {
  const { i, prev, moved, running, paused, duration } = clock;
  // The moment before stays (as the same elements) while it fades out.
  const shown = prev !== i ? [prev, i] : [i];
  return (
    <div className={`rv-part z-20 flex items-start gap-2 ${className}`}>
      <div
        className={`relative grid w-[15.5rem] min-w-0 shrink overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 sm:w-[18rem] ${cardClass}`}
        aria-hidden="true"
      >
        {shown.map((n) => {
          const { icon, green, note } = card(n);
          const I = Icon[icon];
          return (
            <div
              key={n}
              data-enter={(n === i && moved) || undefined}
              data-leave={n !== i || undefined}
              className="demo-note flex min-w-0 items-center gap-2.5 py-2 pr-3.5 pl-2 [grid-area:1/1] sm:py-2.5"
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white sm:h-9 sm:w-9 ${green ? "bg-whatsapp" : "bg-brand-gradient"}`}>
                <I className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block text-[12.5px] font-extrabold text-slate-900 sm:text-sm">{note.title}</span>
                <span className="mt-0.5 block truncate text-[11.5px] font-medium text-slate-500 sm:text-xs">{note.text}</span>
              </span>
            </div>
          );
        })}
        {shown.map((n) => (
          <span
            key={`p${n}`}
            className="demo-progress absolute inset-x-0 bottom-0 h-[3px] bg-brand-gradient"
            data-leave={n !== i || undefined}
            style={n === i ? { animationDuration: `${duration}ms`, animationPlayState: running ? "running" : "paused" } : undefined}
          />
        ))}
      </div>
      {/* In the page from the start (so nothing moves when it shows), and shown once the picture can move. */}
      <button
        type="button"
        onClick={clock.togglePause}
        aria-label={paused ? labels.play : labels.pause}
        title={paused ? labels.play : labels.pause}
        className="demo-pause mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-slate-600 shadow-lg ring-1 ring-slate-200 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        {paused ? (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 translate-x-px" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l12.5-7.5z" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true"><rect x="6" y="4.5" width="4" height="15" rx="1.2" /><rect x="14" y="4.5" width="4" height="15" rx="1.2" /></svg>
        )}
      </button>
    </div>
  );
}

/* family: a laptop with an iPad and a phone in front (home page). combo: an iPad with a phone at its corner (system
   pages, Use Cases). phone: one phone (Contact). screen: one PC screen, with the note under it (custom systems). */
type Layout = "family" | "combo" | "phone" | "screen";

const layoutDevices: Record<Layout, DemoDevice[]> = {
  family: ["laptop", "tablet", "phone"],
  combo: ["tablet", "phone"],
  phone: ["phone"],
  screen: ["screen"],
};

const layoutSizes: Record<Layout, Partial<Record<DemoDevice, string>>> = {
  family: { laptop: "(min-width: 1024px) 640px, 92vw", tablet: "(min-width: 1024px) 300px, 44vw", phone: "(min-width: 1024px) 200px, 34vw" },
  combo: { tablet: "(min-width: 1024px) 600px, 92vw", phone: "(min-width: 1024px) 200px, 34vw" },
  phone: { phone: "(min-width: 1024px) 288px, 256px" },
  screen: { screen: "(min-width: 1024px) 30vw, 92vw" },
};

const notePlace: Record<Layout, string> = {
  family: "absolute -top-4 left-2 [--d:700ms] sm:-left-2",
  combo: "absolute -top-4 left-2 [--d:600ms] sm:-left-4",
  phone: "absolute -top-5 left-1/2 w-max -translate-x-1/2 [--d:500ms] lg:top-10 lg:-left-40 lg:translate-x-0",
  screen: "relative mt-3 justify-center [--d:450ms]",
};
/* Under a screen the note is part of the page, so it keeps one height: in the three narrow cards of a laptop
   screen some notes take two lines. */
const noteCard: Partial<Record<Layout, string>> = { screen: "lg:max-xl:min-h-[4.875rem]" };

/** Where a highlight sits on its screen (left, top, width and height in %). */
const place = ([x, y, w, h]: DemoScene["spot"]) => ({ left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%` });

export type ScreenDemoProps = {
  demo: DemoKey;
  layout: Layout;
  shots: Partial<Record<ShotKey, Shot>>;
  text: DemoText;
  /** The key of the moment to start at. */
  start?: string;
  /** How much longer (ms) the first moment stays, so pictures side by side don't all change at once. */
  delay?: number;
  /** For the picture at the top of the page: its screens load first. */
  priority?: boolean;
  /** Which side of the iPad the phone is on. */
  side?: "left" | "right";
  /** Whether a tap opens the picture full size. */
  zoom?: boolean;
  sizes?: Partial<Record<DemoDevice, string>>;
  /** Set to false inside a block that already comes in as it scrolls into view. */
  reveal?: boolean;
  className?: string;
};

export default function ScreenDemo({
  demo, layout, shots, text, start, delay = 0, priority, side = "right", zoom = true, sizes, reveal = true, className = "",
}: ScreenDemoProps) {
  const scenes = demos[demo];
  const devices = layoutDevices[layout];
  const solo = devices.length === 1;
  const size = { ...layoutSizes[layout], ...sizes };
  const loaded = useRef(new Set<string>());
  const clock = useDemoClock(scenes.length, {
    start: Math.max(scenes.findIndex((s) => s.key === start), 0),
    delay,
    canGo: (n) => devices.every((d) => loaded.current.has(scenes[n][d]!)),
  });
  const { box, i, prev, ready, motion, moved, setHold } = clock;
  const scene = scenes[i];
  const before = scenes[prev];

  /** One device: its frame, a stack of screens that fade into each other, the highlight and the tap. */
  const device = (d: DemoDevice) => {
    const keys = [...new Set(scenes.map((s) => s[d]!))];
    const active = scene[d]!;
    const was = before[d]!;
    const focus = scene.focus === d;
    const shot = shots[active]!;
    const [x, y, w, h] = scene.spot;
    // The latest moment on this device: the zoom keeps its point while it eases back out.
    const last = scenes.map((_, n) => scenes[(i - n + scenes.length) % scenes.length]).find((s) => s.focus === d) ?? scene;
    const [lx, ly, lw, lh] = last.spot;
    const frame = (
      <DeviceFrame kind={shot.kind}>
        <div className="demo-stage" style={{ transformOrigin: `${lx + lw / 2}% ${ly + lh / 2}%` }}>
          <div style={{ aspectRatio: `${shot.w} / ${shot.h}` }} />
          {keys.map((k) => {
            if (!ready && k !== active) return null;
            const s = shots[k]!;
            const on = k === active;
            const first = priority && on;
            return (
              <img
                key={k}
                src={first && d === devices[0] ? shotSrc(s) : shotSrcSm(s)}
                srcSet={shotSrcSet(s)}
                sizes={size[d]}
                width={s.w}
                height={s.h}
                alt={on ? s.alt : ""}
                aria-hidden={on ? undefined : true}
                title={on ? s.title : undefined}
                loading={first ? "eager" : "lazy"}
                fetchPriority={first && d === devices[0] ? "high" : on ? undefined : "low"}
                decoding="async"
                onLoad={() => loaded.current.add(k)}
                ref={(el) => {
                  if (el?.complete && el.naturalWidth) loaded.current.add(k);
                }}
                className="demo-screen"
                data-on={on || undefined}
                data-prev={!on && k === was ? true : undefined}
              />
            );
          })}
          {/* The highlight of the moment before stays (as the same element) while it fades out. */}
          {[...(prev !== i && before.focus === d ? [prev] : []), ...(focus ? [i] : [])].map((n) => (
            <span
              key={`s${n}`}
              className="demo-spot"
              data-enter={(n === i && moved) || undefined}
              data-leave={n !== i || undefined}
              style={place(scenes[n].spot)}
              aria-hidden="true"
            />
          ))}
          {focus && scene.tap && <span key={`t${i}`} className="demo-tap" style={{ left: `${x + w / 2}%`, top: `${y + h / 2}%` }} aria-hidden="true" />}
        </div>
      </DeviceFrame>
    );
    return (
      <div className="demo-device" data-focus={focus || undefined} data-lift={(focus && !solo) || undefined}>
        {zoom ? (
          <Zoomable src={shotSrc(shot)} alt={shot.alt}>
            {frame}
          </Zoomable>
        ) : (
          frame
        )}
      </div>
    );
  };

  return (
    <div
      ref={box}
      role="group"
      aria-label={text.label}
      className={`demo relative ${layout === "family" ? "pb-16 sm:pb-20" : layout === "combo" ? "pb-10 sm:pb-12" : ""} ${className}`}
      data-reveal={reveal ? "group" : undefined}
      data-motion={motion || undefined}
      data-solo={solo || undefined}
      onFocus={(e) => setHold(!!e.target.closest(".demo-device") && e.target.matches(":focus-visible"))}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setHold(false)}
    >
      {!solo && <div className="glow rv-fade absolute -inset-12 -z-10" aria-hidden="true" />}
      {layout === "family" && (
        <>
          <div className="rv-zoom mx-[7%]">{device("laptop")}</div>
          <div className="rv-zoom absolute bottom-0 left-0 w-[44%] [--d:250ms]">{device("tablet")}</div>
          <div className="rv-zoom absolute right-0 bottom-3 w-[21%] max-w-[11rem] [--d:420ms]">{device("phone")}</div>
        </>
      )}
      {layout === "combo" && (
        <>
          <div className={`rv-zoom ${side === "right" ? "mr-[8%]" : "ml-[8%]"}`}>{device("tablet")}</div>
          <div className={`rv-zoom absolute bottom-0 w-[27%] max-w-[13rem] [--d:250ms] ${side === "right" ? "right-0" : "left-0"}`}>{device("phone")}</div>
        </>
      )}
      {solo && <div className="rv-zoom">{device(devices[0])}</div>}
      <DemoNote
        clock={clock}
        card={(n) => ({ icon: scenes[n].icon, green: scenes[n].green, note: text.notes[scenes[n].key] })}
        labels={text}
        className={notePlace[layout]}
        cardClass={noteCard[layout]}
      />
    </div>
  );
}
