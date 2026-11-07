import { LabelCaps } from "@/components/atoms/typography";
import type { Experience } from "@/lib/data/experience";
import { cn } from "@/lib/utils";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article
      className={cn(
        "group relative border border-line bg-surface p-6 transition-colors duration-300 hover:border-sage/60 hover:bg-[#262626] md:p-10",
        experience.offset && "md:ml-12",
      )}
    >
      {experience.accent ? (
        <span
          aria-hidden="true"
          className="absolute -left-3 -top-3 size-6 bg-sage transition-transform duration-300 group-hover:rotate-45"
        />
      ) : null}

      <div className="flex flex-col gap-2 border-b border-line/40 pb-4 md:flex-row md:items-baseline md:justify-between">
        <h3 className="font-display text-headline-md uppercase leading-none text-ink">
          {experience.company}
        </h3>
        <LabelCaps className="shrink-0 text-[11px] text-sage">
          {experience.period}
        </LabelCaps>
      </div>

      <LabelCaps className="mt-4 block text-[11px] tracking-[0.18em] text-muted-ink">
        {experience.role}
      </LabelCaps>

      <p className="mt-4 max-w-xl text-body-md text-muted-ink">
        {experience.description}
      </p>
    </article>
  );
}
