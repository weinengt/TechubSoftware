import type { ShotKey } from "@/lib/shots";
import type { IconName } from "./Icons";

// The moments of the home page's moving example screens (components/HeroDemo.tsx), kept apart from that client
// component so the page can pick the screenshots it needs on the server.
// Each scene points at one device, may change the iPad and phone screens, highlights the part of the screen it is
// about (`spot`: left, top, width and height in % of the screen; `tap` adds a finger tap) and shows a short note,
// whose text is under `home.demo.scenes` in content/en.ts, ms.ts and zh.ts.

export type DemoDevice = "laptop" | "tablet" | "phone";
export type DemoSceneKey = "realtime" | "deposit" | "booking" | "whatsapp" | "report" | "ai" | "live";

export const demoLaptop: ShotKey = "clinicDashboardDesktop";

export const demoScenes: {
  key: DemoSceneKey;
  focus: DemoDevice;
  tablet: ShotKey;
  phone: ShotKey;
  spot: [number, number, number, number];
  tap?: boolean;
  icon: IconName;
  green?: boolean;
}[] = [
  { key: "realtime", focus: "laptop", tablet: "spaCalendar", phone: "whatsappSpa", spot: [19.3, 27.7, 17.5, 26.5], icon: "Sync" },
  { key: "deposit", focus: "phone", tablet: "spaCalendar", phone: "paymentSpa", spot: [3.9, 88.2, 92.2, 6.6], tap: true, icon: "Card" },
  { key: "booking", focus: "tablet", tablet: "spaCalendar", phone: "paymentSpa", spot: [13.8, 21.5, 20.2, 12.2], icon: "Calendar" },
  { key: "whatsapp", focus: "phone", tablet: "spaCalendar", phone: "whatsappSpa", spot: [2.8, 54.2, 79.3, 4.2], tap: true, icon: "Whatsapp", green: true },
  { key: "report", focus: "tablet", tablet: "reportsSpa", phone: "whatsappSpa", spot: [22.5, 1.6, 25.5, 4.2], icon: "Bolt" },
  { key: "ai", focus: "phone", tablet: "spaStock", phone: "scanSpa", spot: [4.4, 59.7, 91.1, 5.1], icon: "Sparkles" },
  { key: "live", focus: "tablet", tablet: "liveDashboard", phone: "liveShop", spot: [8, 9.4, 21.7, 10.3], icon: "Live" },
];

/** Every screenshot the demo uses, so the page can pass their titles and alt text in its language. */
export const demoShots: ShotKey[] = [demoLaptop, ...new Set(demoScenes.flatMap((s) => [s.tablet, s.phone]))];
