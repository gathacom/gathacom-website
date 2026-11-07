import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
};

/**
 * Visual-only infinite marquee. The duplicated group is hidden from assistive
 * technology; provide a screen-reader list alongside the component when the
 * content carries meaning.
 */
export function Marquee({
  children,
  className,
  duration = 32,
}: MarqueeProps) {
  return (
    <div aria-hidden="true" className={cn("marquee", className)}>
      <div
        className="marquee-track flex w-max will-change-transform"
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">{children}</div>
      </div>
    </div>
  );
}
