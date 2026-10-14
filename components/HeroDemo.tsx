"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { shotSrc, shotSrcSet, shotSrcSm, type Shot, type ShotKey } from "@/lib/shots";
import { DeviceFrame } from "./Device";
import { demoLaptop as laptop, demoScenes as scenes, type DemoDevice as Device, type DemoSceneKey } from "./demoScenes";
import { Icon } from "./Icons";
import Zoomable from "./Zoomable";

// The home page's moving picture: a laptop, an iPad and a phone that show Techub at work, one moment at a time
// (the moments are in ./demoScenes.ts). The first moment is what the page shows before the script runs, to
// visitors who prefer less motion, and to search engines.

const SCENE_MS = 3800;
const uniq = <T,>(a: T[]) => [...new Set(a)];
const tablets = uniq(scenes.map((s) => s.tablet));
const phones = uniq(scenes.map((s) => s.phone));

const sizes: Record<Device, string> = {
  laptop: "(min-width: 1024px) 640px, 92vw",
  tablet: "(min-width: 1024px) 300px, 44vw",
  phone: "(min-width: 1024px) 200px, 34vw",
};

type Props = {
  shots: Partial<Record<ShotKey, Shot>>;
  text: { label: string; pause: string; play: string; scenes: Record<DemoSceneKey, { title: string; text: string }> };
};

export default function HeroDemo({ shots, text }: Props) {
  const box = useRef<HTMLDivElement>(null);
  const loaded = useRef(new Set<string>());
  const [i, setI] = useState(0);
  const [prev, setPrev] = useState(0);
  const [motion, setMotion] = useState(false); // stays false for visitors who prefer less motion
  const [ready, setReady] = useState(false); // the other screens are added once the page has loaded
  const [paused, setPaused] = useState(false);
  const [hold, setHold] = useState(false); // keyboard focus on a picture's enlarge button
  const [seen, setSeen] = useState(true); // on screen and the tab is visible
  const [moved, setMoved] = useState(false); // false until the first change, so the first note doesn't animate in
  const [retry, setRetry] = useState(0);
  const shown = useRef({ scene: 0, ms: 0 }); // how long the current scene has been on screen, across pauses

  useEffect(() => {
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotion(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

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
    const next = (i + 1) % scenes.length;
    const has = (k: ShotKey) => loaded.current.has(k);
    const canGo = () => has(scenes[next].tablet) && has(scenes[next].phone) && !box.current?.querySelector("dialog[open]");
    const start = performance.now();
    const t = setTimeout(() => {
      if (!canGo()) return setRetry((r) => r + 1); // wait for its pictures, or for the enlarged picture to close
      setPrev(i);
      setI(next);
      setMoved(true);
      setRetry(0);
    }, Math.max(SCENE_MS - shown.current.ms, 0) + (retry ? 400 : 0));
    return () => {
      clearTimeout(t);
      shown.current.ms += performance.now() - start;
    };
  }, [running, i, retry]);

  // The previous screen stays under the new one while it fades in, then goes, so a screen that comes back later
  // fades in again rather than appearing at once.
  useEffect(() => {
    if (prev === i) return;
    const t = setTimeout(() => setPrev(i), 1200);
    return () => clearTimeout(t);
  }, [i, prev]);

  const scene = scenes[i];
  const before = scenes[prev];

  /** One device: its frame, a stack of screens that fade into each other, the highlight and the tap. */
  const device = (d: Device, keys: ShotKey[], active: ShotKey, was: ShotKey) => {
    const focus = scene.focus === d;
    const shot = shots[active]!;
    const [x, y, w, h] = scene.spot;
    // The latest moment on this device: the zoom keeps its point while it eases back out.
    const last = scenes.map((_, n) => scenes[(i - n + scenes.length) % scenes.length]).find((s) => s.focus === d) ?? scene;
    const [lx, ly, lw, lh] = last.spot;
    const origin = { transformOrigin: `${lx + lw / 2}% ${ly + lh / 2}%` } as CSSProperties;
    return (
      <div className="demo-device" data-focus={focus || undefined}>
        <Zoomable src={shotSrc(shot)} alt={shot.alt}>
          <DeviceFrame kind={shot.kind}>
            <div className="demo-stage" style={origin}>
              <div style={{ aspectRatio: `${shot.w} / ${shot.h}` }} />
              {keys.map((k) => {
                if (!ready && k !== active) return null;
                const s = shots[k]!;
                const on = k === active;
                return (
                  <img
                    key={k}
                    src={d === "laptop" ? shotSrc(s) : shotSrcSm(s)}
                    srcSet={shotSrcSet(s)}
                    sizes={sizes[d]}
                    width={s.w}
                    height={s.h}
                    alt={on ? s.alt : ""}
                    aria-hidden={on ? undefined : true}
                    title={on ? s.title : undefined}
                    loading={d === "laptop" ? "eager" : on ? undefined : "lazy"}
                    fetchPriority={d === "laptop" ? "high" : on ? undefined : "low"}
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
              {focus && (
                <>
                  <span key={`s${i}`} className="demo-spot" style={{ left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%` }} aria-hidden="true" />
                  {scene.tap && <span key={`t${i}`} className="demo-tap" style={{ left: `${x + w / 2}%`, top: `${y + h / 2}%` }} aria-hidden="true" />}
                </>
              )}
            </div>
          </DeviceFrame>
        </Zoomable>
      </div>
    );
  };

  const I = Icon[scene.icon];
  const note = text.scenes[scene.key];
  return (
    <div
      ref={box}
      role="group"
      aria-label={text.label}
      className="relative pb-16 sm:pb-20"
      data-reveal="group"
      data-motion={motion || undefined}
      onFocus={(e) => setHold(!!e.target.closest(".demo-device") && e.target.matches(":focus-visible"))}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setHold(false)}
    >
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-brand-gradient opacity-[0.13] blur-3xl" aria-hidden="true" />
      <div className="rv-zoom mx-[7%]">{device("laptop", [laptop], laptop, laptop)}</div>
      <div className="rv-zoom absolute bottom-0 left-0 w-[44%] [--d:250ms]">{device("tablet", tablets, scene.tablet, before.tablet)}</div>
      <div className="rv-zoom absolute right-0 bottom-3 w-[21%] max-w-[11rem] [--d:420ms]">{device("phone", phones, scene.phone, before.phone)}</div>

      {/* What is happening right now, with a line that fills up until the next moment. */}
      <div className="rv-part absolute -top-4 left-2 z-20 flex items-start gap-2 [--d:700ms] sm:-left-2">
        <div key={i} data-enter={moved || undefined} className="demo-note relative flex w-max max-w-[15.5rem] items-center gap-2.5 overflow-hidden rounded-2xl bg-white/95 py-2 pr-3.5 pl-2 shadow-xl ring-1 ring-slate-200 backdrop-blur sm:max-w-[18rem] sm:py-2.5" aria-hidden="true">
          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white sm:h-9 sm:w-9 ${scene.green ? "bg-whatsapp" : "bg-brand-gradient"}`}>
            <I className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block text-[12.5px] font-extrabold text-slate-900 sm:text-sm">{note.title}</span>
            <span className="mt-0.5 block truncate text-[11.5px] font-medium text-slate-500 sm:text-xs">{note.text}</span>
          </span>
          {motion && <span className="demo-progress absolute inset-x-0 bottom-0 h-[3px] bg-brand-gradient" style={{ animationDuration: `${SCENE_MS}ms`, animationPlayState: running ? "running" : "paused" }} />}
        </div>
        {motion && (
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? text.play : text.pause}
            title={paused ? text.play : text.pause}
            className="mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-lg ring-1 ring-slate-200 backdrop-blur transition hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            {paused ? (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 translate-x-px" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l12.5-7.5z" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true"><rect x="6" y="4.5" width="4" height="15" rx="1.2" /><rect x="14" y="4.5" width="4" height="15" rx="1.2" /></svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
