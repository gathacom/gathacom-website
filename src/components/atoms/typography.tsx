import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function LabelCaps({
  className,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "font-mono text-label-caps font-medium uppercase tracking-[0.1em]",
        className,
      )}
      {...props}
    />
  );
}

export function SectionHeading({
  className,
  ...props
}: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "font-display text-headline-lg uppercase leading-[0.92] tracking-[0.01em]",
        className,
      )}
      {...props}
    />
  );
}

export function Lead({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-body-lg leading-[1.6] text-muted-ink",
        className,
      )}
      {...props}
    />
  );
}

export function Body({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-body-md leading-[1.65] text-muted-ink", className)}
      {...props}
    />
  );
}
