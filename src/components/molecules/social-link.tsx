import { ArrowUpRight } from "lucide-react";

import { LabelCaps } from "@/components/atoms/typography";

type SocialLinkProps = {
  label: string;
  href: string;
};

export function SocialLink({ label, href }: SocialLinkProps) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between border-b border-line/40 py-3.5 text-muted-ink transition-colors duration-300 hover:text-sage"
    >
      <LabelCaps className="text-[11px] tracking-[0.16em]">{label}</LabelCaps>
      <ArrowUpRight
        aria-hidden="true"
        className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}
