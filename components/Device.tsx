import type { ReactNode } from "react";
import type { Shot } from "@/lib/shots";
import { shotSrc, shotSrcSet, shotSrcSm } from "@/lib/shots";
import Zoomable from "./Zoomable";

type Props = {
  shot: Shot;
  /** The `sizes` attribute: how wide the picture shows at each breakpoint. */
  sizes: string;
  priority?: boolean;
  zoom?: boolean;
  className?: string;
};

function Picture({ shot, sizes, priority }: Pick<Props, "shot" | "sizes" | "priority">) {
  return (
    <img
      src={priority ? shotSrc(shot) : shotSrcSm(shot)}
      srcSet={shotSrcSet(shot)}
      sizes={sizes}
      width={shot.w}
      height={shot.h}
      alt={shot.alt}
      title={shot.title}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className="block h-auto w-full"
    />
  );
}

/** The frame of a device (browser bar, phone, tablet or TV bezel) around any screen content. */
export function DeviceFrame({ kind, children }: { kind: Shot["kind"]; children: ReactNode }) {
  switch (kind) {
    case "browser":
      return (
        <div className="device-frame overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-25px_rgb(11_47_85/0.45)] ring-1 ring-slate-900/10">
          <div className="flex h-6 items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-3 sm:h-7" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-red-400 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-amber-400 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-emerald-400 sm:h-2.5 sm:w-2.5" />
            <span className="mx-auto hidden h-4 w-2/5 items-center justify-center rounded-md bg-white text-[10px] font-medium text-slate-400 sm:flex">
              Techub Cloud
            </span>
          </div>
          <div className="relative overflow-hidden">{children}</div>
        </div>
      );
    case "phone":
      return (
        <div className="device-frame rounded-[14%/6.6%] bg-slate-900 p-[3.2%] shadow-[0_30px_50px_-20px_rgb(11_47_85/0.55)] ring-1 ring-slate-700">
          <div className="relative overflow-hidden rounded-[11%/5.2%]">
            {children}
            <span className="absolute top-[1.1%] left-1/2 z-10 h-[2.6%] w-[27%] -translate-x-1/2 rounded-full bg-slate-900" aria-hidden="true" />
          </div>
        </div>
      );
    case "tablet":
      return (
        <div className="device-frame rounded-[4%/5.6%] bg-slate-900 p-[2.2%] shadow-[0_30px_60px_-25px_rgb(11_47_85/0.5)] ring-1 ring-slate-700">
          <div className="relative overflow-hidden rounded-[1.6%/2.3%]">{children}</div>
        </div>
      );
    case "tv":
      return (
        <div>
          <div className="device-frame rounded-[1.4%/2.4%] bg-slate-900 p-[1.3%] shadow-[0_30px_60px_-25px_rgb(11_47_85/0.55)] ring-1 ring-slate-700">
            <div className="overflow-hidden rounded-[0.6%/1%]">{children}</div>
          </div>
          <div className="mx-auto h-3 w-[14%] bg-gradient-to-b from-slate-700 to-slate-500 sm:h-4" aria-hidden="true" />
          <div className="mx-auto h-1.5 w-[36%] rounded-full bg-slate-600 sm:h-2" aria-hidden="true" />
        </div>
      );
    default:
      return <>{children}</>;
  }
}

/** A product screenshot inside a matching device frame (browser, phone, tablet, TV or paper). */
export default function Device({ shot, sizes, priority, zoom = true, className = "" }: Props) {
  const frame = (
    <DeviceFrame kind={shot.kind}>
      <Picture shot={shot} sizes={sizes} priority={priority} />
    </DeviceFrame>
  );
  return zoom ? (
    <Zoomable src={shotSrc(shot)} alt={shot.alt} className={className}>
      {frame}
    </Zoomable>
  ) : (
    <div className={className}>{frame}</div>
  );
}
