import type { CSSProperties } from "react";
import type { StatMotif as StatMotifType } from "@/content/site";

/** Inline CSS custom-prop helper for stagger delays. */
const d = (ms: string): CSSProperties => ({ "--draw-delay": ms }) as CSSProperties;
const n = (ms: string): CSSProperties => ({ "--node-delay": ms }) as CSSProperties;

/**
 * Bespoke line-art per stat, drawn in chalk on the green card. Lines with
 * class `draw` animate via stroke-dashoffset; circles with class `node` pop
 * in — both triggered by the card's `.reveal[data-revealed]` state (CSS),
 * so there's no JS here and reduced motion shows the finished art.
 */
export function StatMotif({ type }: { type: StatMotifType }) {
  const svg = {
    className: "stat-motif h-full w-full text-chalk",
    viewBox: "0 0 120 70",
    fill: "none" as const,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (type === "bars") {
    return (
      <svg {...svg}>
        <line x1="14" y1="58" x2="106" y2="58" strokeWidth="2" opacity="0.5" />
        <line className="draw" x1="34" y1="58" x2="34" y2="40" pathLength="1" strokeWidth="7" />
        <line className="draw" x1="60" y1="58" x2="60" y2="26" pathLength="1" strokeWidth="7" style={d("150ms")} />
        <line className="draw" x1="86" y1="58" x2="86" y2="12" pathLength="1" strokeWidth="7" style={d("300ms")} />
      </svg>
    );
  }

  if (type === "timeline") {
    return (
      <svg {...svg}>
        <line className="draw" x1="14" y1="36" x2="106" y2="36" pathLength="1" strokeWidth="3" />
        <line x1="34" y1="31" x2="34" y2="41" strokeWidth="2" opacity="0.5" />
        <line x1="56" y1="31" x2="56" y2="41" strokeWidth="2" opacity="0.5" />
        <line x1="78" y1="31" x2="78" y2="41" strokeWidth="2" opacity="0.5" />
        <circle className="node" cx="96" cy="36" r="7" fill="currentColor" style={n("850ms")} />
      </svg>
    );
  }

  if (type === "hills") {
    return (
      <svg {...svg}>
        <circle className="node" cx="30" cy="20" r="8" strokeWidth="3" style={n("900ms")} />
        <path
          className="draw"
          d="M8 56 C 26 30, 44 30, 60 46 S 94 30, 114 44"
          pathLength="1"
          strokeWidth="3"
        />
      </svg>
    );
  }

  // commits — a branch line with six nodes appearing in sequence
  const xs = [14, 32, 51, 69, 88, 106];
  return (
    <svg {...svg}>
      <line className="draw" x1="14" y1="36" x2="106" y2="36" pathLength="1" strokeWidth="3" />
      {xs.map((x, i) => (
        <circle
          key={x}
          className="node"
          cx={x}
          cy="36"
          r="6"
          fill="currentColor"
          style={n(`${300 + i * 170}ms`)}
        />
      ))}
    </svg>
  );
}
