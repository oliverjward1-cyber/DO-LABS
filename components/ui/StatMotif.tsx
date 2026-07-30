import type { CSSProperties } from "react";
import type { StatMotif as StatMotifType } from "@/content/site";

/** Inline CSS custom-prop helpers for stagger delays. */
const d = (ms: string): CSSProperties => ({ "--draw-delay": ms }) as CSSProperties;
const n = (ms: string): CSSProperties => ({ "--node-delay": ms }) as CSSProperties;

const shared = {
  className: "stat-motif h-full w-full text-chalk",
  fill: "none" as const,
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  preserveAspectRatio: "xMidYMid meet",
  "aria-hidden": true,
};

/**
 * Bespoke line-art per stat, drawn in chalk on the green card. Each motif has
 * its own viewBox so it suits its bento cell (tall bars, a wide git graph).
 * Lines with class `draw` animate via stroke-dashoffset; circles with class
 * `node` pop in — both keyed off the card's `.reveal[data-revealed]` state
 * (CSS, no JS). Reduced motion shows the finished art.
 */
export function StatMotif({ type }: { type: StatMotifType }) {
  if (type === "bars") {
    return (
      <svg {...shared} viewBox="0 0 100 80">
        <line x1="14" y1="66" x2="86" y2="66" strokeWidth="2" opacity="0.5" />
        <line className="draw" x1="28" y1="66" x2="28" y2="46" pathLength="1" strokeWidth="8" />
        <line className="draw" x1="50" y1="66" x2="50" y2="30" pathLength="1" strokeWidth="8" style={d("150ms")} />
        <line className="draw" x1="72" y1="66" x2="72" y2="12" pathLength="1" strokeWidth="8" style={d("300ms")} />
      </svg>
    );
  }

  if (type === "timeline") {
    return (
      <svg {...shared} viewBox="0 0 120 40">
        <line className="draw" x1="12" y1="20" x2="108" y2="20" pathLength="1" strokeWidth="3" />
        <line x1="34" y1="15" x2="34" y2="25" strokeWidth="2" opacity="0.5" />
        <line x1="56" y1="15" x2="56" y2="25" strokeWidth="2" opacity="0.5" />
        <line x1="78" y1="15" x2="78" y2="25" strokeWidth="2" opacity="0.5" />
        <circle className="node" cx="98" cy="20" r="7" fill="currentColor" style={n("850ms")} />
      </svg>
    );
  }

  if (type === "hills") {
    return (
      <svg {...shared} viewBox="0 0 120 60">
        <circle className="node" cx="30" cy="18" r="8" strokeWidth="3" style={n("900ms")} />
        <path
          className="draw"
          d="M8 48 C 26 26, 44 26, 60 40 S 94 26, 114 40"
          pathLength="1"
          strokeWidth="3"
        />
      </svg>
    );
  }

  // commits — a wide branch line with six nodes appearing in sequence
  const xs = [12, 47, 82, 117, 152, 188];
  return (
    <svg {...shared} viewBox="0 0 200 44">
      <line className="draw" x1="12" y1="22" x2="188" y2="22" pathLength="1" strokeWidth="3" />
      {xs.map((x, i) => (
        <circle
          key={x}
          className="node"
          cx={x}
          cy="22"
          r="7"
          fill="currentColor"
          style={n(`${300 + i * 160}ms`)}
        />
      ))}
    </svg>
  );
}
