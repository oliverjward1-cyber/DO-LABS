import { site } from "@/content/site";

export function StatRow() {
  return (
    <section aria-label="Studio in numbers">
      <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {site.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex min-h-[180px] flex-col justify-between rounded-card bg-ember p-7 text-chalk sm:min-h-[220px] sm:p-8"
          >
            <dd className="display-type order-1 text-[clamp(2.75rem,5.5vw,4.5rem)]">
              {stat.value}
            </dd>
            <dt className="order-2 text-base">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
