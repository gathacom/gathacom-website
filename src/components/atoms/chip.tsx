import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ChipProps = {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

export function Chip({ children, variant = "outline", className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-none px-2 py-1 font-mono text-[10px] font-medium uppercase leading-none tracking-[0.08em]",
        variant === "solid" && "bg-sage text-canvas",
        variant === "outline" && "border border-line text-muted-ink",
        variant === "ghost" && "border border-sage/40 text-sage",
        className,
      )}
    >
      {children}
    </span>
  );
}
