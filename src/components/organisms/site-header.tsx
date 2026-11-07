"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LogoMark } from "@/components/atoms/logo";
import { LabelCaps } from "@/components/atoms/typography";
import { MagneticLink } from "@/components/atoms/magnetic-link";
import { NavLink } from "@/components/molecules/nav-link";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 16;
    setScrolled((current) => (current === next ? current : next));
  });

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500",
          scrolled
            ? "border-sage/20 bg-canvas/90 backdrop-blur-md"
            : "border-transparent bg-canvas/40 backdrop-blur-sm",
        )}
      >
        <div className="flex h-[72px] items-center justify-between px-margin-mobile md:px-margin-desktop">
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="GATHA — back to top"
          >
            <span className="flex size-10 items-center justify-center border border-sage bg-surface p-1.5 text-sage transition-transform duration-500 group-hover:rotate-90">
              <LogoMark />
            </span>
            <span className="font-display text-[26px] leading-none tracking-[0.04em] text-ink">
              GATHA
            </span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 md:flex"
          >
            {site.nav.map((item) => (
              <NavLink key={item.href} label={item.label} href={item.href} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <MagneticLink
              href="/resume.pdf"
              target="_blank"
              className="hidden items-center border-2 border-sage px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-sage hover:text-canvas md:inline-flex"
            >
              Hire Me
              <ArrowUpRight aria-hidden="true" className="ml-2 size-3.5" />
            </MagneticLink>

            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex size-10 items-center justify-center border border-line/60 text-ink transition-colors hover:border-sage hover:text-sage md:hidden"
            >
              {open ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <Menu aria-hidden="true" className="size-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto overscroll-contain border-t border-sage/20 bg-canvas/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex min-h-full flex-col px-margin-mobile py-6">
              <ul className="border-t border-line/30">
                {site.nav.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 * index,
                      duration: 0.4,
                      ease: EASE,
                    }}
                    className="border-b border-line/30"
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between gap-4 py-5"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-[9px] tracking-[0.16em] text-sage/80">
                          0{index + 1}
                        </span>
                        <span className="font-display text-4xl uppercase leading-none tracking-[0.03em] text-ink transition-colors group-hover:text-sage">
                          {item.label}
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-5 shrink-0 text-sage transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <div className="flex items-center justify-between gap-4 border-t border-line/30 pt-4">
                  <LabelCaps className="truncate text-[10px] text-muted-ink">
                    {site.email}
                  </LabelCaps>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    onClick={() => setOpen(false)}
                    className="shrink-0 border-2 border-sage px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-sage transition-colors hover:bg-sage hover:text-canvas"
                  >
                    Hire Me
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-2 pb-[env(safe-area-inset-bottom)]">
                  <LabelCaps className="text-[9px] tracking-[0.12em] text-sage/80">
                    Open for select projects // 2026
                  </LabelCaps>
                  <LabelCaps className="text-[9px] tracking-[0.12em] text-muted-ink/70">
                    Jakarta, ID // UTC+7
                  </LabelCaps>
                </div>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}
