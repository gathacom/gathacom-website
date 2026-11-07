import { ArrowUp, ArrowUpRight } from "lucide-react";

import { Chip } from "@/components/atoms/chip";
import { CtaButton } from "@/components/atoms/cta-button";
import { Reveal } from "@/components/atoms/reveal";
import { LabelCaps } from "@/components/atoms/typography";
import { SocialLink } from "@/components/molecules/social-link";
import { site } from "@/lib/data/site";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative z-10 overflow-hidden border-t-2 border-sage/30 bg-surface-deep px-margin-mobile pb-8 pt-20 md:px-margin-desktop md:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-14 flex select-none justify-center md:bottom-10"
      >
        <svg
          viewBox="0 0 600 220"
          focusable="false"
          aria-hidden="true"
          className="block w-[70vw]"
        >
          <text
            x="300"
            y="210"
            textAnchor="middle"
            textLength="600"
            lengthAdjust="spacingAndGlyphs"
            fontFamily="var(--font-display), Bebas Neue, Impact, sans-serif"
            fontSize="260"
            letterSpacing="-0.02em"
            fill="rgba(255, 255, 255, 0.035)"
          >
            GATHA
          </text>
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        <Reveal>
          <div className="grid gap-14 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-8">
              <LabelCaps className="flex items-center gap-2 text-[10px] text-sage">
                <span aria-hidden="true" className="size-1.5 bg-sage" />
                04 // Contact
              </LabelCaps>

              <h2 className="mt-5 font-display text-[clamp(3rem,7.2vw,6.2rem)] uppercase leading-[0.9] tracking-[-0.01em] text-ink">
                Ready to build
                <br />
                something <span className="text-sage">robust?</span>
              </h2>

              <a
                href={`mailto:${site.email}`}
                className="group mt-8 inline-flex max-w-full items-end gap-3 border-b-2 border-sage pb-2 font-display text-[clamp(1.6rem,4.2vw,3rem)] uppercase leading-none tracking-[0.01em] text-ink transition-colors duration-300 hover:text-sage"
              >
                <span className="truncate">{site.email}</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mb-1 size-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:size-6"
                />
              </a>

              <div className="mt-8 flex flex-wrap gap-2">
                <Chip variant="ghost">Open for select projects</Chip>
                <Chip variant="outline">Jakarta, ID // UTC+7</Chip>
                <Chip variant="outline">Remote worldwide</Chip>
              </div>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <LabelCaps className="text-[10px] tracking-[0.16em] text-muted-ink/75">
                Elsewhere
              </LabelCaps>

              <div className="mt-4">
                {site.socials.map((social) => (
                  <SocialLink
                    key={social.label}
                    label={social.label}
                    href={social.href}
                  />
                ))}
              </div>

              <CtaButton
                href="#top"
                variant="outline"
                className="mt-7 w-full justify-center"
              >
                Back to top
                <ArrowUp aria-hidden="true" className="size-3.5" />
              </CtaButton>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-16 flex flex-col gap-3 border-t border-line/30 pt-6 md:mt-24 md:flex-row md:items-center md:justify-between">
          <LabelCaps className="text-[9px] tracking-[0.12em] text-muted-ink/75">
            © 2024—2026 GATHA — Architectural code &amp; design
          </LabelCaps>

          <LabelCaps className="text-[9px] tracking-[0.12em] text-muted-ink/70">
            06°18′S 106°53′E // Jakarta
          </LabelCaps>

          <LabelCaps className="text-[9px] tracking-[0.1em] text-muted-ink/70">
            Isaiah 41:13
            {/* <a
              href="https://skiper-ui.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage underline underline-offset-4 transition-colors hover:text-ink"
            >
              Skiper UI
            </a> */}
          </LabelCaps>
        </div>
      </div>
    </footer>
  );
}
