import { site } from "@/lib/site";

export function MarqueeTrust() {
  const items = [...site.certifications, ...site.certifications];
  return (
    <section aria-label="Certifications and credentials" className="border-y border-line bg-surface py-3 lg:py-4 overflow-hidden">
      {/* Static list for screen readers */}
      <ul className="sr-only">
        {site.certifications.map((c) => <li key={c}>{c}</li>)}
      </ul>
      <div className="flex animate-marquee gap-12 whitespace-nowrap will-change-transform" aria-hidden="true">
        {items.map((c, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-3 text-[12.5px] uppercase tracking-[0.16em] font-medium text-ink-2"
          >
            <span className="size-1 rounded-full bg-accent" aria-hidden="true" />
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}
