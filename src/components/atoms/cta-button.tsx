import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "outline" | "solid" | "quiet";
  className?: string;
  external?: boolean;
};

const variants = {
  outline:
    "border-2 border-sage bg-transparent text-ink hover:bg-sage hover:text-canvas",
  solid:
    "border-2 border-sage bg-sage text-canvas hover:border-ink hover:bg-ink",
  quiet:
    "border-0 border-b border-sage px-0 py-1 text-ink hover:text-sage",
} as const;

export function CtaButton({
  href,
  children,
  variant = "outline",
  className,
  external,
}: CtaButtonProps) {
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "group/cta h-auto rounded-none px-6 py-3.5 font-mono text-label-caps font-medium uppercase tracking-[0.14em] transition-colors duration-300",
        variants[variant],
        className,
      )}
    >
      <a
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    </Button>
  );
}
