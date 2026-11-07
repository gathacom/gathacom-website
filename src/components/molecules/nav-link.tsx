"use client";

import { TextRoll } from "@/components/ui/skiper-ui/skiper58";

type NavLinkProps = {
  label: string;
  href: string;
  onClick?: () => void;
};

/**
 * Skiper UI (free tier) — TextRoll navigation link.
 * Wrapped as an atomic molecule so the global theme tokens apply.
 * Free-tier attribution: https://skiper-ui.com
 */
export function NavLink({ label, href, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={label}
      className="group relative inline-flex items-center px-0.5 py-1 text-muted-ink transition-colors duration-300 hover:text-ink"
    >
      <span aria-hidden="true">
        <TextRoll className="font-mono text-label-caps font-medium uppercase tracking-[0.14em]">
          {label}
        </TextRoll>
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-0 bg-sage transition-all duration-300 group-hover:w-full"
      />
    </a>
  );
}
