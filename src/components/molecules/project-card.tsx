import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Chip } from "@/components/atoms/chip";
import { LabelCaps } from "@/components/atoms/typography";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
  accent?: boolean;
  className?: string;
};

export function ProjectCard({
  project,
  onOpen,
  accent,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative flex w-full flex-col justify-between border-t-2 bg-surface transition-transform duration-500 hover:-translate-y-1",
        accent ? "border-sage" : "border-line hover:border-sage",
        className,
      )}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open case study: ${project.title}`}
        className="absolute inset-0 z-30 cursor-pointer rounded-none"
      />

      <div className="relative h-[260px] w-full overflow-hidden bg-surface-low sm:h-[300px]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 768px) 540px, 85vw"
          className="object-cover opacity-60 grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-50"
        />
        <Chip
          variant="ghost"
          className="absolute right-4 top-4 z-10 border-sage/40 bg-canvas/90 px-3 py-1.5 text-sage backdrop-blur-sm"
        >
          {project.meta}
        </Chip>
        <span
          aria-hidden="true"
          className="absolute left-4 top-4 z-10 font-mono text-[10px] tracking-[0.18em] text-ink/60"
        >
          [{project.index}]
        </span>
      </div>

      <div className="relative z-20 -mt-16 border border-line border-b-0 bg-surface p-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-3 md:w-[88%] md:p-8">
        <h3 className="font-display text-[26px] uppercase leading-none tracking-[0.03em] text-ink sm:text-headline-md">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-muted-ink sm:text-sm">
          {project.tagline}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech, index) => (
            <Chip key={tech} variant={index === 0 ? "solid" : "outline"}>
              {tech}
            </Chip>
          ))}
          {project.stack.length > 3 ? (
            <Chip variant="outline">+{project.stack.length - 3}</Chip>
          ) : null}
        </div>

        <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors duration-300 group-hover:text-sage">
          View Case Study
          <ArrowUpRight
            aria-hidden="true"
            className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>

      <LabelCaps className="sr-only">
        {project.category} — {project.timeline}
      </LabelCaps>
    </article>
  );
}
