import { ArrowRight } from "lucide-react";

import { LabelCaps } from "@/components/atoms/typography";
import type { Project } from "@/lib/data/projects";

type ArchiveRowProps = {
  project: Project;
  onOpen: () => void;
};

export function ArchiveRow({ project, onOpen }: ArchiveRowProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex w-full items-center gap-4 border-b border-line/40 px-3 py-5 text-left transition-all duration-300 hover:bg-surface hover:pl-6 sm:gap-6"
    >
      <LabelCaps className="w-5 shrink-0 text-[11px] text-sage">
        {project.index}
      </LabelCaps>

      <span className="min-w-0 flex-1 font-display text-lg uppercase leading-tight tracking-[0.02em] text-ink transition-colors duration-300 group-hover:text-sage sm:text-xl md:text-2xl">
        {project.title}
      </span>

      <span className="hidden shrink-0 items-center gap-4 md:flex">
        <span className="border border-line/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-muted-ink">
          {project.meta}
        </span>
      </span>

      <ArrowRight
        aria-hidden="true"
        className="size-4 shrink-0 text-line transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-sage"
      />
    </button>
  );
}
