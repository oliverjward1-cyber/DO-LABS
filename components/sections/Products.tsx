import { site } from "@/content/site";
import { Kicker } from "@/components/ui/Kicker";
import { PillLink } from "@/components/ui/PillLink";
import { TagPill } from "@/components/ui/TagPill";

export function Products() {
  return (
    <section id="products" className="scroll-mt-6">
      <Kicker>{site.products.kicker}</Kicker>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {site.products.items.map((product) => (
          <article
            key={product.name}
            className="flex flex-col items-start rounded-card bg-limestone p-8 sm:p-10"
          >
            <TagPill>{product.tag}</TagPill>
            <h3 className="display-type mt-6 text-[clamp(2rem,3.5vw,3rem)]">
              {product.name}
            </h3>
            <p className="mb-8 mt-4 max-w-[46ch] text-base leading-relaxed sm:text-lg">
              {product.description}
            </p>
            {product.link.href === "#" ? (
              <span className="mt-auto inline-flex items-center justify-center rounded-pill border-[1.5px] border-obsidian px-7 py-3.5 text-base">
                {product.link.label}
              </span>
            ) : (
              <PillLink
                href={product.link.href}
                variant="ghost"
                className="mt-auto"
              >
                {product.link.label}
              </PillLink>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
