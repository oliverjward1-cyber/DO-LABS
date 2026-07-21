import { site } from "@/content/site";

export function StatRow() {
  return (
    <section aria-label={site.statRow.label}>
      <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {site.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex min-h-[180px] flex-col justify-between rounded-card bg-ember p-7 text-chalk sm:min-h-[220px] sm:p-8"
          >
            <dt className="order-2 text-base">{stat.label}</dt>
            <dd className="display-type order-1 text-[clamp(2.75rem,5.5vw,4.5rem)]">
              {stat.num}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
