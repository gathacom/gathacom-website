import { ExperienceCard } from "@/components/molecules/experience-card";
import { Reveal } from "@/components/atoms/reveal";
import { Section } from "@/components/atoms/section";
import { SectionNumber } from "@/components/atoms/section-number";
import { Body, LabelCaps, SectionHeading } from "@/components/atoms/typography";
import { experiences } from "@/lib/data/experience";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      labelledBy="experience-title"
      className="overflow-hidden px-margin-mobile pb-24 pt-32 md:px-margin-desktop md:pb-32 md:pt-40"
    >
      <SectionNumber value="01" side="left" className="-top-10" />

      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col gap-12 md:flex-row md:gap-16">
        <Reveal className="md:sticky md:top-32 md:w-1/3 md:self-start">
          <LabelCaps className="flex items-center gap-2 text-[10px] text-sage">
            <span aria-hidden="true" className="size-1.5 bg-sage" />
            01 // Trajectory
          </LabelCaps>

          <SectionHeading
            id="experience-title"
            className="mt-4 inline-block border-b-2 border-sage pb-4 text-[clamp(2.75rem,5vw,4rem)] text-ink"
          >
            Experience
          </SectionHeading>

          <Body className="mt-6 max-w-sm">
            Architecting robust digital solutions from the ground up, combining
            academic rigor with practical industry application.
          </Body>

          <div className="mt-8 flex items-center gap-6 border-t border-line/40 pt-5">
            <div>
              <p className="font-display text-3xl leading-none text-ink">02</p>
              <LabelCaps className="mt-1 block text-[9px] text-muted-ink/75">
                Roles
              </LabelCaps>
            </div>
            <span aria-hidden="true" className="h-8 w-px bg-line/40" />
            <div>
              <p className="font-display text-3xl leading-none text-sage">
                24—26
              </p>
              <LabelCaps className="mt-1 block text-[9px] text-muted-ink/75">
                Active years
              </LabelCaps>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-asymmetric md:w-2/3">
          {experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={index * 0.08}>
              <ExperienceCard experience={experience} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
