import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { CountUp } from "@/components/ui/CountUp";
import { StatMotif } from "@/components/ui/StatMotif";

export function StatRow() {
  return (
    <section aria-label={site.statRow.label}>
      <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {site.stats.map((stat, i) => {
          // Only pure integers count up; '25, DEVON, ∞ just fade in.
          const numeric = /^\d+$/.test(stat.num);
          return (
            <div
              key={stat.label}
              style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
              className="reveal stat-card relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-card bg-ember p-7 text-chalk motion-safe:hover:scale-[1.02] sm:min-h-[300px] sm:p-8"
            >
              {/* Subtle dot texture, tying the cards to the halftone band. */}
              <span aria-hidden className="card-dots pointer-events-none absolute inset-0" />
              {/* Bespoke line-art motif filling the middle, behind the number. */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-6 top-16 bottom-24 opacity-40 sm:top-20 sm:bottom-28"
              >
                <StatMotif type={stat.motif} />
              </span>

              {/* Label small on top, big Anton number planted at the bottom. */}
              <dt className="relative z-10 text-base">{stat.label}</dt>
              <dd className="relative z-10 display-type text-[clamp(2.75rem,5.5vw,4.5rem)]">
                {numeric ? <CountUp value={stat.num} /> : stat.num}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
