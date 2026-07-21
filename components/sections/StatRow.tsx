import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { CountUp } from "@/components/ui/CountUp";

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
              className="reveal flex min-h-[240px] flex-col justify-between rounded-card bg-ember p-7 text-chalk motion-safe:hover:scale-[1.02] sm:min-h-[300px] sm:p-8"
            >
              {/* Label small on top, big Anton number planted at the bottom. */}
              <dt className="text-base">{stat.label}</dt>
              <dd className="display-type text-[clamp(2.75rem,5.5vw,4.5rem)]">
                {numeric ? <CountUp value={stat.num} /> : stat.num}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
