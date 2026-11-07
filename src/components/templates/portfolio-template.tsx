import { GridBackdrop } from "@/components/atoms/grid-backdrop";
import { ArchiveIndex } from "@/components/organisms/archive-index";
import { ExperienceSection } from "@/components/organisms/experience";
import { Hero } from "@/components/organisms/hero";
import { SelectedWorks } from "@/components/organisms/selected-works";
import { SiteFooter } from "@/components/organisms/site-footer";
import { SiteHeader } from "@/components/organisms/site-header";
import { TechArsenal } from "@/components/organisms/tech-arsenal";

export function PortfolioTemplate() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <GridBackdrop />
      <SiteHeader />

      <main className="relative z-10">
        <Hero />
        <ExperienceSection />
        <SelectedWorks />
        <ArchiveIndex />
        <TechArsenal />
      </main>

      <SiteFooter />

      <span
        aria-hidden="true"
        className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 font-mono text-[8px] uppercase tracking-[0.32em] text-muted-ink/60 [writing-mode:vertical-rl] xl:block"
      >
        Portfolio / 2026 — Yogyakarta
      </span>
    </div>
  );
}
