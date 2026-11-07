import { Parallax } from "@/components/atoms/parallax";
import { cn } from "@/lib/utils";

type SectionNumberProps = {
  value: string;
  side?: "left" | "right";
  className?: string;
};

export function SectionNumber({
  value,
  side = "left",
  className,
}: SectionNumberProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute top-0 z-0 select-none",
        side === "left" ? "left-0" : "right-0",
        className,
      )}
    >
      <Parallax distance={80}>
        <svg
          viewBox="0 0 320 260"
          focusable="false"
          aria-hidden="true"
          className="block h-[clamp(12rem,30vw,26rem)] w-auto"
        >
          <text
            x="0"
            y="250"
            textLength="320"
            lengthAdjust="spacingAndGlyphs"
            fontFamily="var(--font-display), Bebas Neue, Impact, sans-serif"
            fontSize="350"
            letterSpacing="-0.04em"
            fill="rgba(255, 255, 255, 0.045)"
            stroke="rgba(123, 160, 130, 0.14)"
            strokeWidth="1"
          >
            {value}
          </text>
        </svg>
      </Parallax>
    </div>
  );
}
