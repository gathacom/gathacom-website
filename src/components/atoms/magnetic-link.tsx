"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

import { cn } from "@/lib/utils";

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticLink({
  href,
  children,
  className,
  strength = 0.22,
}: MagneticLinkProps) {
  const shouldReduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 220, damping: 18, mass: 0.25 });
  const y = useSpring(rawY, { stiffness: 220, damping: 18, mass: 0.25 });

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    if (shouldReduceMotion || event.pointerType !== "mouse") return;

    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    rawY.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function handlePointerLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.a
      href={href}
      className={cn("inline-flex will-change-transform", className)}
      style={shouldReduceMotion ? undefined : { x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </motion.a>
  );
}
