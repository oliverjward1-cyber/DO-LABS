import { site } from "@/content/site";

/** Bold flat yellow statement block. */
export function BuildInPublic() {
  return (
    <section className="overflow-hidden rounded-card bg-ember text-obsidian">
      <div className="flex flex-col gap-6 p-8 py-16 sm:p-12 sm:py-24 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <h2 className="display-type max-w-[10ch] text-[clamp(2.75rem,7vw,6rem)]">
          {site.buildInPublic.title}
        </h2>
        <div className="flex max-w-[44ch] flex-col gap-4">
          <p className="text-lg leading-relaxed sm:text-xl">
            {site.buildInPublic.body}
          </p>
          <a
            href={site.buildInPublic.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-base underline underline-offset-4 hover:no-underline"
          >
            {site.buildInPublic.cta.label} →
          </a>
        </div>
      </div>
    </section>
  );
}
