"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { MagneticLink } from "@/components/atoms/magnetic-link";
import { LabelCaps, Lead } from "@/components/atoms/typography";
import { site } from "@/lib/data/site";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const headline = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.08 },
  },
};

const line = {
  hidden: { y: "112%" },
  visible: {
    y: "0%",
    transition: { duration: 1, ease: EASE },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const frameY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col justify-center px-margin-mobile pb-20 pt-32 md:px-margin-desktop md:pb-24 md:pt-40"
    >
      {/* Angular plane from the source design */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 -z-10 h-full w-1/2 skew-x-12 bg-surface-deep/50 opacity-60 transition-transform duration-1000 ease-out hover:skew-x-6"
      />

      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="relative z-20 lg:col-span-8">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-5 inline-flex items-center gap-2 border border-sage/40 bg-surface-low px-3 py-1.5"
          >
            <span className="size-2 animate-pulse-soft rounded-full bg-sage" />
            <LabelCaps className="text-[10px] tracking-[0.14em] text-sage">
              Yoga Agatha Pasaribu — Portfolio
            </LabelCaps>
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={headline}
            className="font-display text-[clamp(3.4rem,14vw,4.5rem)] uppercase leading-[0.88] tracking-[-0.02em] text-ink sm:text-[clamp(4rem,12vw,6rem)] lg:text-[clamp(5.5rem,8.4vw,7rem)] xl:text-display-xl"
          >
            <span className="block overflow-hidden pr-2">
              <motion.span variants={line} className="block will-change-transform">
                I BUILD <span className="text-sage">MODERN</span>
              </motion.span>
            </span>
            <span className="block overflow-hidden pr-2">
              <motion.span variants={line} className="block will-change-transform">
                WEBSITES THAT
              </motion.span>
            </span>
            <span className="block overflow-hidden pr-2">
              <motion.span variants={line} className="block will-change-transform">
                WORK.
              </motion.span>
            </span>
          </motion.h1>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
            className="mt-9 w-full max-w-2xl border-l-2 border-sage bg-surface p-6 md:mt-12 md:w-[92%] md:p-7"
          >
            <Lead className="text-[17px] leading-[1.65] md:text-body-lg">
              I am <strong className="font-semibold text-ink">GATHA</strong>{" "}
              (Yoga Agatha Pasaribu), an Informatics graduate from UPN
              &apos;Veteran&apos; Yogyakarta and a fullstack engineer crafting
              high-performance web systems, clean architecture, and modern
              digital experiences.
            </Lead>

            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <MagneticLink
                href="#work"
                className="group items-center gap-2 border-b-2 border-sage pb-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:text-sage"
              >
                Explore Works
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </MagneticLink>

              <LabelCaps className="text-[9px] leading-relaxed tracking-[0.12em] text-muted-ink/75">
                {site.degree}
              </LabelCaps>
            </div>
          </motion.div>
        </div>

        <div className="relative z-20 mt-4 flex justify-center lg:col-span-4 lg:mt-0 lg:justify-end">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: EASE }}
            className="relative w-[280px] sm:w-80 lg:w-[22rem]"
          >
            <span
              aria-hidden="true"
              className="absolute -left-9 top-10 hidden font-mono text-[9px] uppercase tracking-[0.24em] text-muted-ink/70 [writing-mode:vertical-rl] lg:block"
            >
              Portrait // Jakarta, ID
            </span>

            <motion.div
              aria-hidden="true"
              style={shouldReduceMotion ? undefined : { y: frameY }}
              className="absolute -right-4 -top-4 h-full w-full border-2 border-sage/40"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 h-full w-full border border-line bg-ash/40"
            />
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 z-20 size-8 border border-sage bg-sage/20"
            />

            <motion.div
              style={shouldReduceMotion ? undefined : { y: portraitY }}
              className="group relative overflow-hidden border border-line/60 bg-gradient-to-b from-[#2d2f2e]/70 via-surface-low to-surface-deep"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 grid-bg-fine opacity-40"
              />

              <div className="relative h-[420px] sm:h-[470px] lg:h-[500px]">
                <Image
                  src="/images/profile.png"
                  alt="Portrait of Yoga Agatha Pasaribu"
                  width={239}
                  height={512}
                  priority
                  sizes="(min-width: 1024px) 352px, (min-width: 640px) 320px, 280px"
                  className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-[0_18px_28px_rgba(0,0,0,0.75)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-2 border-t border-sage/40 bg-canvas/90 px-3 py-2.5 backdrop-blur-sm">
                <div className="min-w-0">
                  <p className="truncate font-display text-sm uppercase leading-none tracking-[0.06em] text-ink">
                    {site.fullName}
                  </p>
                  <p className="mt-1 truncate font-mono text-[8px] uppercase tracking-[0.14em] text-sage">
                    {site.discipline}
                  </p>
                </div>
                <span className="shrink-0 border border-sage/30 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-muted-ink">
                  {site.location}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.8 }}
        className="absolute bottom-7 left-margin-mobile hidden items-center gap-3 md:left-margin-desktop md:flex"
      >
        <span className="relative h-10 w-px overflow-hidden bg-line/50">
          <span className="absolute inset-x-0 top-0 h-4 animate-scroll-cue bg-sage" />
        </span>
        <LabelCaps className="text-[9px] tracking-[0.22em] text-muted-ink/75">
          Scroll // 01
        </LabelCaps>
        <ArrowDown aria-hidden="true" className="size-3 text-sage/60" />
      </motion.div>
    </section>
  );
}
