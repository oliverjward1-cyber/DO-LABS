import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="rounded-card bg-limestone px-8 py-10 sm:px-12 sm:py-14">
      <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <p className="display-type text-[clamp(3.5rem,11vw,9rem)]">
          {site.footer.wordmark}
        </p>
        <div className="flex flex-col gap-5 lg:items-end">
          <ul className="flex flex-col gap-2 text-base lg:items-end">
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
          <ul className="flex flex-row gap-5 text-base">
            {site.social.map((item) => {
              const external = item.href.startsWith("http");
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="hover:underline hover:underline-offset-4"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
