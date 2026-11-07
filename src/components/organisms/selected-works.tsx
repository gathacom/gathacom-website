"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

import { Reveal } from "@/components/atoms/reveal";
import { Section } from "@/components/atoms/section";
import { SectionNumber } from "@/components/atoms/section-number";
import { LabelCaps, SectionHeading } from "@/components/atoms/typography";
import { ProjectCard } from "@/components/molecules/project-card";
import { ProjectDialog } from "@/components/organisms/project-dialog";
import { featuredProjects, type Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export function SelectedWorks() {
  const [selected, setSelected] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: -1 | 1) {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector("article");
    const step = (card?.clientWidth ?? 540) + 32;
    container.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <Section
      id="work"
      labelledBy="work-title"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <SectionNumber value="02" side="right" className="top-4" />

      <div className="relative z-10 mx-auto mb-12 flex max-w-[1600px] items-end justify-between gap-6 px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <LabelCaps className="flex items-center gap-2 text-[10px] text-sage">
            <span aria-hidden="true" className="size-1.5 bg-sage" />
            Featured builds // 2024—2026
          </LabelCaps>

          <SectionHeading
            id="work-title"
            className="mt-3 text-[clamp(2.9rem,6vw,4.5rem)] text-ink"
          >
            Selected
            <br />
            <span className="pl-8 text-sage md:pl-16">Works</span>
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1} className="hidden shrink-0 gap-2 md:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous project"
            className="flex size-12 items-center justify-center border border-line text-ink transition-all duration-300 hover:scale-105 hover:bg-sage hover:text-canvas"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next project"
            className="flex size-12 items-center justify-center border border-line text-ink transition-all duration-300 hover:scale-105 hover:bg-sage hover:text-canvas"
          >
            <ArrowRight aria-hidden="true" className="size-4" />
          </button>
        </Reveal>
      </div>

      <div
        ref={scrollRef}
        className="hide-scrollbar relative z-10 flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden px-margin-mobile pb-12 md:gap-8 md:px-margin-desktop"
      >
        {featuredProjects.map((project, index) => (
          <Reveal
            key={project.id}
            delay={index * 0.06}
            amount={0.08}
            className={cn(
              "w-[85vw] shrink-0 snap-start md:w-[540px]",
              index % 2 === 1 && "md:mt-16",
            )}
          >
            <ProjectCard
              project={project}
              accent={index === 0}
              onOpen={() => setSelected(project)}
            />
          </Reveal>
        ))}
        <div aria-hidden="true" className="w-4 shrink-0 md:w-16" />
      </div>

      <div className="relative z-10 mx-auto mt-2 flex max-w-[1600px] items-center gap-5 px-margin-mobile md:px-margin-desktop">
        <LabelCaps className="shrink-0 text-[9px] text-muted-ink/75">
          04 Projects
        </LabelCaps>
        <span aria-hidden="true" className="h-px flex-1 bg-line/40" />
        <LabelCaps className="shrink-0 text-[9px] text-muted-ink/75">
          Drag / scroll to explore
        </LabelCaps>
      </div>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
