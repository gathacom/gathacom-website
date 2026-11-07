import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <path d="M80 20H20V80H80V55H55V65H65V70H30V30H70V45H80V20Z" />
    </svg>
  );
}
