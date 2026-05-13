import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { ArrowUpRight } from "@/components/icons";
import { articles } from "@/lib/articles";
import { blurLight } from "@/lib/shimmer";

export const metadata: Metadata = {
  title: "Insights, Solar EPC, R&R, Asset Strategy",
  description:
    "Field-tested writing on commercial solar EPC, reinstallation decisions, decommissioning, R&R, and long-term solar asset management.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Insights" }]}
        eyebrow="Insights"
        title={
          <>
            Field notes on solar, engineered, not{" "}
            <span className="italic text-accent">marketed.</span>
          </>
        }
        description="Practical writing on commercial EPC, R&R, decommissioning and long-term asset strategy. Written by the people doing the work."
      />

      <section className="py-12 lg:py-16">
        <Container size="wide">
          <Link
            href={`/blog/${articles[0].slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
          >
            <div className="lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden border border-line">
              <Image
                src={articles[0].cover}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
                placeholder="blur"
                blurDataURL={blurLight}
              />
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-ink/80 backdrop-blur px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white font-mono" aria-label="Featured article">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" /> Featured
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-2 font-mono">
                {articles[0].category} ·{" "}
                {new Date(articles[0].date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                · {articles[0].readMin} min read
              </div>
              <h2 className="mt-5 font-display text-[26px] sm:text-[40px] lg:text-[48px] leading-[1.05] tracking-tight text-balance group-hover:text-accent transition-colors">
                {articles[0].title}
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-muted text-pretty">
                {articles[0].excerpt}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium border-b border-accent pb-1 group-hover:gap-3 transition-all">
                Read article
                <ArrowUpRight className="size-4" />
              </div>
            </div>
          </Link>
        </Container>
      </section>

      <section className="py-12 lg:py-20">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line rounded-3xl overflow-hidden">
            {articles.slice(1).map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group bg-white p-8 hover:bg-surface transition-colors"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={a.cover}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={blurLight}
                  />
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-2 font-mono">
                  {a.category} · {a.readMin} min read
                </div>
                <h3 className="mt-4 font-display text-[24px] sm:text-[28px] leading-[1.1] tracking-tight text-balance group-hover:text-accent transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 text-[14.5px] text-muted leading-relaxed text-pretty">
                  {a.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink-2 group-hover:gap-2.5 transition-all">
                  Read <ArrowUpRight className="size-4" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
