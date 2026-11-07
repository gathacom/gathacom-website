import { Reveal } from "@/components/atoms/reveal";
import { Section } from "@/components/atoms/section";
import { LabelCaps, SectionHeading } from "@/components/atoms/typography";
import { Marquee } from "@/components/molecules/marquee";
import { arsenal } from "@/lib/data/site";

function MarqueeGroup() {
  return (
    <ul className="flex shrink-0 items-center">
      {arsenal.map((technology) => (
        <li
          key={technology}
          className="flex shrink-0 items-center gap-7 pr-7 md:gap-10 md:pr-10"
        >
          <span className="font-display text-4xl uppercase leading-none tracking-[0.02em] text-ink transition-colors duration-300 hover:text-sage md:text-6xl">
            {technology}
          </span>
          <span
            aria-hidden="true"
            className="text-2xl leading-none text-sage md:text-3xl"
          >
            •
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TechArsenal() {
  return (
    <Section
      id="skills"
      labelledBy="skills-title"
      className="relative mt-10 overflow-hidden border-y border-sage/15 bg-surface-deep/80 py-20 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-[1600px] px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <LabelCaps className="flex items-center gap-2 text-[10px] text-sage">
                <span aria-hidden="true" className="size-1.5 bg-sage" />
                03 // Tooling
              </LabelCaps>
              <SectionHeading
                id="skills-title"
                className="mt-3 text-[clamp(2.9rem,6vw,4.5rem)] text-ink"
              >
                Tech Arsenal
              </SectionHeading>
            </div>
            <LabelCaps className="text-[9px] tracking-[0.16em] text-muted-ink/75">
              11 Core technologies // continuously evolving
            </LabelCaps>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 mt-12 -rotate-2 scale-[1.03] border-y-2 border-sage bg-surface py-5 shadow-2xl transition-transform duration-500 hover:-rotate-1 md:mt-16 md:py-7">
        <Marquee className="overflow-hidden">
          <MarqueeGroup />
        </Marquee>
      </div>

      <ul className="sr-only">
        {arsenal.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <div className="relative z-10 mx-auto mt-12 flex max-w-[1600px] items-center gap-5 px-margin-mobile md:px-margin-desktop">
        <LabelCaps className="shrink-0 text-[9px] text-muted-ink/70">
          Hover to pause
        </LabelCaps>
        <span aria-hidden="true" className="h-px flex-1 bg-line/40" />
        <LabelCaps className="shrink-0 text-[9px] text-muted-ink/70">
          Stack // 2026
        </LabelCaps>
      </div>
    </Section>
  );
}
