import type { CSSProperties } from "react";
import { site, type StatMotif as StatMotifType } from "@/content/site";
import { commitsShipped } from "@/lib/commits";
import { CountUp } from "@/components/ui/CountUp";
import { StatMotif } from "@/components/ui/StatMotif";

// Bento placement per motif: bars = tall (left), commits = wide (top-right),
// timeline + hills fill the bottom-right pair. Mobile is a 2-col bento
// (tall bars beside a stacked pair, commits full-width below); desktop is a
// 6-col × 2-row arrangement.
const span: Record<StatMotifType, string> = {
  bars: "row-span-2 lg:col-start-1 lg:row-start-1 lg:col-span-2 lg:row-span-2",
  commits: "col-span-2 lg:col-start-3 lg:row-start-1 lg:col-span-4 lg:row-span-1",
  timeline: "lg:col-start-3 lg:row-start-2 lg:col-span-2",
  hills: "lg:col-start-5 lg:row-start-2 lg:col-span-2",
};

export function StatRow() {
  // Real commit count at build time (falls back to content on shallow clones).
  const commits = commitsShipped();

  return (
    <section aria-label={site.statRow.label}>
      <dl className="grid grid-cols-2 gap-4 [grid-auto-rows:minmax(150px,auto)] lg:grid-cols-6 lg:gap-5 lg:[grid-auto-rows:190px]">
        {site.stats.map((stat, i) => {
          const num = stat.motif === "commits" ? commits : stat.num;
          // Only pure integers count up; '25, DEVON, ∞ just fade in.
          const numeric = /^\d+$/.test(num);
          return (
            <div
              key={stat.label}
              style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
              className={`reveal stat-card relative flex flex-col justify-between overflow-hidden rounded-card bg-ember p-7 text-chalk motion-safe:hover:scale-[1.02] sm:p-8 ${span[stat.motif]}`}
            >
              {/* Subtle dot texture, tying the cards to the halftone band. */}
              <span aria-hidden className="card-dots pointer-events-none absolute inset-0" />
              {/* Bespoke line-art motif filling the cell, behind the number. */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-5 opacity-40 sm:inset-7"
              >
                <StatMotif type={stat.motif} />
              </span>

              {/* Label small on top, big Anton number planted at the bottom. */}
              <dt className="relative z-10 text-base">{stat.label}</dt>
              <dd className="relative z-10 display-type text-[clamp(2.75rem,5.5vw,4.5rem)]">
                {numeric ? <CountUp value={num} /> : num}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
