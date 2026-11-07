"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Vertical travel in pixels across the element's scroll range. */
  distance?: number;
};

export function Parallax({
  children,
  className,
  distance = 60,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={shouldReduceMotion ? undefined : { y }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
