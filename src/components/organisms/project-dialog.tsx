"use client";

import { Code2, Cpu, ExternalLink, X } from "lucide-react";
import Image from "next/image";

import { Chip } from "@/components/atoms/chip";
import { CtaButton } from "@/components/atoms/cta-button";
import { LabelCaps } from "@/components/atoms/typography";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/lib/data/projects";

type ProjectDialogProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  return (
    <Dialog
      open={Boolean(project)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        showCloseButton={false}
        className="grid-cols-1 max-h-[90dvh] w-[calc(100vw-2rem)] max-w-4xl gap-0 overflow-y-auto rounded-none border-2 border-sage bg-surface-low p-0 text-ink ring-0 sm:max-w-4xl"
      >
        {project ? (
          <>
            <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-line/40 bg-surface-low/95 px-5 py-3 backdrop-blur-md md:px-8">
              <div className="flex min-w-0 items-center gap-2.5">
                <span aria-hidden="true" className="size-2.5 shrink-0 bg-sage" />
                <LabelCaps className="truncate text-[9px] tracking-[0.14em] text-sage">
                  {project.category}
                </LabelCaps>
              </div>

              <DialogClose asChild>
                <button
                  type="button"
                  className="flex shrink-0 items-center gap-1.5 border border-line px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-ink transition-colors hover:bg-sage hover:text-canvas"
                >
                  Close [Esc]
                  <X aria-hidden="true" className="size-3" />
                </button>
              </DialogClose>
            </div>

            <div className="p-5 md:p-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <DialogTitle className="font-display text-[32px] uppercase leading-[0.95] tracking-[0.01em] text-ink md:text-[48px]">
                  {project.title}
                </DialogTitle>
                <LabelCaps className="shrink-0 text-[10px] text-sage">
                  {project.timeline}
                </LabelCaps>
              </div>

              <DialogDescription className="mt-4 max-w-3xl text-body-md text-muted-ink md:text-lg">
                {project.tagline}
              </DialogDescription>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Chip key={tech} variant="outline">
                    {tech}
                  </Chip>
                ))}
              </div>

              <div className="relative mt-7 aspect-[16/9] w-full overflow-hidden border border-line/40 bg-surface">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="object-cover object-center grayscale contrast-125"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-surface-low via-transparent to-transparent opacity-70"
                />
                <span className="absolute left-4 top-4 border border-sage/40 bg-canvas/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-sage backdrop-blur-sm">
                  [{project.index}] // {project.meta}
                </span>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-7 md:grid-cols-12">
                <div className="space-y-6 md:col-span-7">
                  <div>
                    <LabelCaps className="mb-2 block border-b border-line/30 pb-1.5 text-[9px] text-sage">
                      Overview &amp; Problem
                    </LabelCaps>
                    <p className="text-sm leading-relaxed text-muted-ink md:text-body-md">
                      {project.overview}
                    </p>
                  </div>

                  <div>
                    <LabelCaps className="mb-2 block border-b border-line/30 pb-1.5 text-[9px] text-sage">
                      Technical Solution
                    </LabelCaps>
                    <p className="text-sm leading-relaxed text-muted-ink md:text-body-md">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between border border-line/40 bg-surface p-5 md:col-span-5 md:p-6">
                  <div>
                    <LabelCaps className="mb-4 flex items-center gap-2 text-[9px] text-ink">
                      <Cpu aria-hidden="true" className="size-3.5 text-sage" />
                      Key Specifications
                    </LabelCaps>
                    <ul className="space-y-3">
                      {project.specs.map((spec) => (
                        <li
                          key={spec}
                          className="flex gap-2.5 text-[13px] leading-relaxed text-muted-ink"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 size-1.5 shrink-0 bg-sage"
                          />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-col gap-2.5 border-t border-line/30 pt-5">
                    <CtaButton
                      href={project.live === "#" ? "#contact" : project.live}
                      variant="solid"
                      className="w-full justify-center text-[10px]"
                      external={project.live !== "#"}
                    >
                      {project.live === "#" ? (
                        <>Discuss this build</>
                      ) : (
                        <>Visit live platform</>
                      )}
                      <ExternalLink aria-hidden="true" className="size-3.5" />
                    </CtaButton>

                    <CtaButton
                      href={project.repo}
                      variant="outline"
                      external
                      className="w-full justify-center text-[10px]"
                    >
                      Source code (GitHub)
                      <Code2 aria-hidden="true" className="size-3.5" />
                    </CtaButton>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
