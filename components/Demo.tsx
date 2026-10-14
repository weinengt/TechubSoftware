import { fill, getDict, getShots } from "@/content";
import type { Locale } from "@/lib/i18n";
import { demoShots, demos, type DemoKey } from "./demoScenes";
import ScreenDemo, { type ScreenDemoProps } from "./ScreenDemo";

/** A moving example screen (./ScreenDemo.tsx) with its screenshots and notes in the page's language.
 *  `product` names the system in its label for screen readers (Techub when left out). */
export default function Demo({
  lang, demo, product, ...props
}: { lang: Locale; demo: DemoKey; product?: string } & Omit<ScreenDemoProps, "demo" | "shots" | "text">) {
  const t = getDict(lang).demo;
  const shots = getShots(lang);
  const notes: Record<string, { title: string; text: string }> = t.notes[demo];
  const missing = demos[demo].find((s) => !notes[s.key]);
  if (missing) throw new Error(`content/${lang}.ts has no note for demo.notes.${demo}.${missing.key}`);
  return (
    <ScreenDemo
      demo={demo}
      shots={Object.fromEntries(demoShots(demo).map((k) => [k, shots[k]]))}
      text={{ label: fill(t.label, { product: product ?? t.techub }), pause: t.pause, play: t.play, notes }}
      {...props}
    />
  );
}
