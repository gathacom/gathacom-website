"use client";

import { useState } from "react";

import { Reveal } from "@/components/atoms/reveal";
import { Section } from "@/components/atoms/section";
import { LabelCaps } from "@/components/atoms/typography";
import { ArchiveRow } from "@/components/molecules/archive-row";
import { ProjectDialog } from "@/components/organisms/project-dialog";
import { archivedProjects, type Project } from "@/lib/data/projects";

export function ArchiveIndex() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section
      id="archive"
      labelledBy="archive-title"
      className="pb-24 pt-12 md:pb-32 md:pt-16"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="mb-6 flex flex-col gap-2 border-b border-line/40 pb-3 sm:flex-row sm:items-center sm:justify-between">
            <h2
              id="archive-title"
              className="flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-sage"
            >
              <span aria-hidden="true" className="size-2 bg-sage" />
              Other Index // Technical Archives
            </h2>
            <LabelCaps className="text-[9px] text-muted-ink/70">
              [Select to inspect architecture]
            </LabelCaps>
          </div>

          <div className="border-t border-line/40">
            {archivedProjects.map((project) => (
              <ArchiveRow
                key={project.id}
                project={project}
                onOpen={() => setSelected(project)}
              />
            ))}

            <div className="flex flex-col gap-2 bg-surface-deep/60 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
              <LabelCaps className="text-[9px] tracking-[0.12em] text-sage/90">
                + 2 More projects archived
              </LabelCaps>
              <LabelCaps className="text-[9px] text-muted-ink/70">
                Buket Byatiq, Internal Microtools
              </LabelCaps>
            </div>
          </div>
        </Reveal>
      </div>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
