import { site } from "@/content/site";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="text-chalk">
      <div aria-hidden className="divider-dotted" />
      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <ul className="flex flex-col gap-2 text-base">
          {site.footer.meta.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
                  className="hover:underline hover:underline-offset-4"
                >
                  {item.label}
                </a>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ul>
        <SocialLinks variant="light" />
      </div>
      {/* Giant edge-to-edge wordmark. */}
      <p className="display-type mt-10 text-[clamp(4rem,23vw,17rem)] leading-[0.82]">
        {site.footer.wordmark}
      </p>
    </footer>
  );
}
