import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const Icon = {
  Shield: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></svg>
  ),
  Megaphone: (p: IconProps) => (
    <svg {...base(p)}><path d="M3 11v2a1 1 0 001 1h2l5 4V6L6 10H4a1 1 0 00-1 1z" /><path d="M15.5 8.5a5 5 0 010 7" /><path d="M18.5 5.5a9 9 0 010 13" /></svg>
  ),
  Whatsapp: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width={24} height={24} {...p}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 01-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 01-1.45-5.03c0-5.2 4.24-9.44 9.45-9.44a9.38 9.38 0 016.68 2.77 9.38 9.38 0 012.76 6.68c0 5.21-4.24 9.44-9.45 9.44zm8.04-17.48A11.3 11.3 0 0012.05.7C5.78.7.68 5.8.68 12.07c0 2 .52 3.96 1.52 5.68L.58 23.7l6.08-1.6a11.33 11.33 0 005.39 1.37h.01c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.9-3.34-8.05z" />
    </svg>
  ),
  Devices: (p: IconProps) => (
    <svg {...base(p)}><rect x="2" y="4" width="14" height="10" rx="1.5" /><path d="M6 18h6" /><rect x="17" y="8" width="5" height="12" rx="1.2" /><path d="M9 14v4" /></svg>
  ),
  Users: (p: IconProps) => (
    <svg {...base(p)}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0113 0" /><path d="M16 4.5a3.5 3.5 0 010 7" /><path d="M18 14.5a6.5 6.5 0 013.5 5.5" /></svg>
  ),
  Lock: (p: IconProps) => (
    <svg {...base(p)}><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 018 0v3" /><circle cx="12" cy="15.5" r="1.5" /></svg>
  ),
  Box: (p: IconProps) => (
    <svg {...base(p)}><path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" /><path d="M3 8l9 5 9-5" /><path d="M12 13v8" /></svg>
  ),
  Sparkles: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" /></svg>
  ),
  Scan: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 8V5a1 1 0 011-1h3" /><path d="M16 4h3a1 1 0 011 1v3" /><path d="M20 16v3a1 1 0 01-1 1h-3" /><path d="M8 20H5a1 1 0 01-1-1v-3" /><path d="M8 9h8M8 12h8M8 15h5" /></svg>
  ),
  Route: (p: IconProps) => (
    <svg {...base(p)}><circle cx="6" cy="19" r="2.5" /><circle cx="18" cy="5" r="2.5" /><path d="M8.5 19H17a3.5 3.5 0 000-7H7a3.5 3.5 0 010-7h8.5" /></svg>
  ),
  Pill: (p: IconProps) => (
    <svg {...base(p)}><rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-45 12 12)" /><path d="M8.5 8.5l7 7" /></svg>
  ),
  Pen: (p: IconProps) => (
    <svg {...base(p)}><path d="M16.5 3.5a2.1 2.1 0 013 3L8 18l-4 1 1-4L16.5 3.5z" /><path d="M14 6l3 3" /><path d="M14 21c2-1.5 4-1.5 7 0" /></svg>
  ),
  Printer: (p: IconProps) => (
    <svg {...base(p)}><path d="M6 9V3h12v6" /><rect x="3" y="9" width="18" height="8" rx="2" /><path d="M6 14h12v7H6z" /><circle cx="17" cy="12" r=".6" fill="currentColor" /></svg>
  ),
  Wrench: (p: IconProps) => (
    <svg {...base(p)}><path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z" /></svg>
  ),
  Calendar: (p: IconProps) => (
    <svg {...base(p)}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /><path d="M8 14h3v3H8z" /></svg>
  ),
  Stethoscope: (p: IconProps) => (
    <svg {...base(p)}><path d="M6 3v6a4 4 0 008 0V3" /><path d="M4 3h4M12 3h4" /><path d="M10 13v2a5 5 0 0010 0v-2" /><circle cx="20" cy="11" r="2" /></svg>
  ),
  Flower: (p: IconProps) => (
    <svg {...base(p)}><circle cx="12" cy="12" r="2.5" /><path d="M12 9.5C12 6 13.5 3 12 3s0 3-0 6.5zM12 14.5c0 3.5 1.5 6.5 0 6.5s0-3 0-6.5z" /><path d="M12 9.5c0-3 2.5-6.5 4-5.5s-1 3.5-4 5.5zM12 14.5c0 3-2.5 6.5-4 5.5s1-3.5 4-5.5zM14.5 12c3 0 6.5 2.5 5.5 4s-3.5-1-5.5-4zM9.5 12c-3 0-6.5-2.5-5.5-4s3.5 1 5.5 4z" /></svg>
  ),
  Check: (p: IconProps) => (
    <svg {...base(p)}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
  ),
  Arrow: (p: IconProps) => (
    <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  ),
  Chart: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>
  ),
  Gift: (p: IconProps) => (
    <svg {...base(p)}><rect x="3" y="8" width="18" height="5" rx="1" /><path d="M5 13v8h14v-8M12 8v13" /><path d="M12 8C10 4 7 4 7 6s3 2 5 2zM12 8c2-4 5-4 5-2s-3 2-5 2z" /></svg>
  ),
  Headset: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 14v-2a8 8 0 0116 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /><path d="M19 20a3 3 0 01-3 2h-3" /></svg>
  ),
  Cloud: (p: IconProps) => (
    <svg {...base(p)}><path d="M7 18a4.5 4.5 0 01-.6-8.96A6 6 0 0118 9.5a4.25 4.25 0 01-.5 8.5H7z" /></svg>
  ),
  Scissors: (p: IconProps) => (
    <svg {...base(p)}><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" /></svg>
  ),
  Lotus: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 20c-4.5 0-8-2.5-9-6 2.5-.5 5 .2 7 1.8" /><path d="M12 20c4.5 0 8-2.5 9-6-2.5-.5-5 .2-7 1.8" /><path d="M12 20c-2.2-1.6-3.5-4-3.5-6.8S9.8 7.6 12 5c2.2 2.6 3.5 5.4 3.5 8.2S14.2 18.4 12 20z" /></svg>
  ),
  Mirror: (p: IconProps) => (
    <svg {...base(p)}><ellipse cx="12" cy="9" rx="6" ry="7" /><path d="M12 16v5M9 21h6" /><path d="M9.5 6.5a3.5 3.5 0 012.5-1.5" /></svg>
  ),
  Card: (p: IconProps) => (
    <svg {...base(p)}><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="M2.5 10h19M6 15h4" /></svg>
  ),
  Barcode: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 5v14M7 5v14M10 5v14M14 5v14M16 5v14M20 5v14" /></svg>
  ),
  Mail: (p: IconProps) => (
    <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 6.5l8.5 6.5 8.5-6.5" /></svg>
  ),
  Menu: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
  ),
  Close: (p: IconProps) => (
    <svg {...base(p)}><path d="M6 6l12 12M18 6L6 18" /></svg>
  ),
  Chevron: (p: IconProps) => (
    <svg {...base(p)}><path d="M6 9l6 6 6-6" /></svg>
  ),
  Code: (p: IconProps) => (
    <svg {...base(p)}><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" /></svg>
  ),
  Wallet: (p: IconProps) => (
    <svg {...base(p)}><path d="M19 7V5.5A1.5 1.5 0 0017.5 4h-12A2.5 2.5 0 003 6.5v11A2.5 2.5 0 005.5 20h13a1.5 1.5 0 001.5-1.5V15" /><path d="M3 6.5A2.5 2.5 0 005.5 9h13A1.5 1.5 0 0120 10.5V11" /><path d="M16 11h5v4h-5a2 2 0 010-4z" /></svg>
  ),
  Bank: (p: IconProps) => (
    <svg {...base(p)}><path d="M3 9.5L12 4l9 5.5" /><path d="M5 10v7.5M9.7 10v7.5M14.3 10v7.5M19 10v7.5" /><path d="M3 20.5h18" /></svg>
  ),
  Coins: (p: IconProps) => (
    <svg {...base(p)}><ellipse cx="9" cy="7" rx="6" ry="3" /><path d="M3 7v4c0 1.7 2.7 3 6 3s6-1.3 6-3V7" /><path d="M9 14v3c0 1.7 2.7 3 6 3s6-1.3 6-3v-4c0-1.6-2.4-2.9-5.5-3" /></svg>
  ),
  Rocket: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 15l-3-3c1.2-4.7 4.6-8.3 11-9-.7 6.4-4.3 9.8-9 11z" /><path d="M9 12l-4 .5L3 15l4.5.5M12 15l-.5 4L9 21l-.5-4.5" /><circle cx="15" cy="9" r="1.5" /></svg>
  ),
  Database: (p: IconProps) => (
    <svg {...base(p)}><ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" /><path d="M4.5 5.5v13c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-13" /><path d="M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8" /></svg>
  ),
  Bolt: (p: IconProps) => (
    <svg {...base(p)}><path d="M13 2.5L4.5 13.5H11l-1 8 8.5-11H12l1-8z" /></svg>
  ),
  Sync: (p: IconProps) => (
    <svg {...base(p)}><path d="M20 11a8 8 0 00-14.6-4.5L4 8" /><path d="M4 4v4h4" /><path d="M4 13a8 8 0 0014.6 4.5L20 16" /><path d="M20 20v-4h-4" /></svg>
  ),
  Server: (p: IconProps) => (
    <svg {...base(p)}><rect x="3.5" y="3.5" width="17" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="17" height="7" rx="1.5" /><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" /></svg>
  ),
  Receipt: (p: IconProps) => (
    <svg {...base(p)}><path d="M5.5 3h13v18l-2.2-1.4-2.1 1.4-2.2-1.4-2.2 1.4-2.1-1.4-2.2 1.4z" /><path d="M9 7.5h6M9 11h6" /><path d="M9.5 14.8l1.7 1.7 3.3-3.3" /></svg>
  ),
  Invoice: (p: IconProps) => (
    <svg {...base(p)}><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" /><path d="M14 3v5h5" /><path d="M8.5 12.5h7M8.5 15.5h3.5" /><rect x="13.5" y="15" width="3" height="3" rx=".5" /></svg>
  ),
  XRay: (p: IconProps) => (
    <svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M12 6v12" /><path d="M8 9c1.5-.8 2.8-.8 4 0 1.2-.8 2.5-.8 4 0M7.5 12.5c1.6-.8 3-.8 4.5 0 1.5-.8 2.9-.8 4.5 0M8 16c1.5-.8 2.8-.8 4 0 1.2-.8 2.5-.8 4 0" /></svg>
  ),
  Star: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" /></svg>
  ),
  Globe: (p: IconProps) => (
    <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z" /></svg>
  ),
  Detect: (p: IconProps) => (
    <svg {...base(p)}><path d="M4 8V5a1 1 0 011-1h3M16 4h3a1 1 0 011 1v3M20 16v3a1 1 0 01-1 1h-3M8 20H5a1 1 0 01-1-1v-3" /><path d="M6.5 12s2-3.5 5.5-3.5 5.5 3.5 5.5 3.5-2 3.5-5.5 3.5S6.5 12 6.5 12z" /><circle cx="12" cy="12" r="1.5" /></svg>
  ),
  Car: (p: IconProps) => (
    <svg {...base(p)}><path d="M5 12l1.8-4.6A2 2 0 018.7 6h6.6a2 2 0 011.9 1.4L19 12" /><rect x="3.5" y="12" width="17" height="5.5" rx="1" /><path d="M6 17.5v2M18 17.5v2" /><rect x="9.5" y="13.7" width="5" height="2" rx=".4" /></svg>
  ),
  Live: (p: IconProps) => (
    <svg {...base(p)}><circle cx="12" cy="12" r="2.2" /><path d="M8.2 8.2a5.4 5.4 0 000 7.6M15.8 8.2a5.4 5.4 0 010 7.6" /><path d="M5.2 5.2a9.6 9.6 0 000 13.6M18.8 5.2a9.6 9.6 0 010 13.6" /></svg>
  ),
  Layers: (p: IconProps) => (
    <svg {...base(p)}><path d="M12 3l9 4.5-9 4.5-9-4.5z" /><path d="M3 12l9 4.5 9-4.5" /><path d="M3 16.5L12 21l9-4.5" /></svg>
  ),
};

export type IconName = keyof typeof Icon;
