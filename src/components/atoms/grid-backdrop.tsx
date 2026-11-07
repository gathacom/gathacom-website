export function GridBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-80" />

      {/* Subtle organic wavy lines soften the industrial grid. */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M-40 210 C 160 110, 340 300, 560 200 S 900 100, 1100 220 S 1380 330, 1500 190"
          stroke="#7BA082"
          strokeOpacity="0.13"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-40 620 C 220 520, 380 720, 640 610 S 980 500, 1200 640 S 1400 730, 1500 600"
          stroke="#7BA082"
          strokeOpacity="0.1"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-40 840 C 260 780, 440 900, 700 820 S 1040 740, 1260 850 S 1420 890, 1500 820"
          stroke="#7BA082"
          strokeOpacity="0.07"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Vignette keeps focus on the editorial content. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#111111_92%)]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-canvas to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-canvas to-transparent" />
    </div>
  );
}
