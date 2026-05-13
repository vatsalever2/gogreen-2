import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { CtaSection } from "@/components/cta-section";
import { articles, getArticle } from "@/lib/articles";
import { ArrowUpRight, ArrowRight } from "@/components/icons";
import { blurLight } from "@/lib/shimmer";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const a = getArticle(slug);
  if (!a) return { title: "Article" };
  return {
    title: a.title,
    description: a.excerpt,
  };
}

export default async function ArticlePage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const a = getArticle(slug);
  if (!a) notFound();

  const others = articles.filter((x) => x.slug !== a.slug).slice(0, 2);

  return (
    <>
      <article className="pt-12 lg:pt-16">
        <Container size="narrow">
          <Link
            href="/blog"
            className="text-[12px] uppercase tracking-[0.18em] text-muted hover:text-ink font-mono inline-flex items-center gap-2"
          >
            <span aria-hidden="true">←</span> All insights
          </Link>
          <div className="mt-8 text-[12px] uppercase tracking-[0.18em] text-muted-2 font-mono">
            {a.category} · {new Date(a.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {a.readMin} min read
          </div>
          <h1 className="mt-5 font-display text-[40px] sm:text-[56px] lg:text-[68px] leading-[0.98] tracking-tight text-balance">
            {a.title}
          </h1>
          <p className="mt-7 text-[18px] leading-relaxed text-muted text-pretty">{a.subtitle}</p>
        </Container>

        <div className="my-14 lg:my-20">
          <Container size="wide">
            <div className="relative aspect-[16/8] rounded-3xl overflow-hidden border border-line">
              <Image
                src={a.cover}
                alt={`Cover image for: ${a.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 1440px) 100vw, 1440px"
                priority
                placeholder="blur"
                blurDataURL={blurLight}
              />
            </div>
          </Container>
        </div>

        <Container size="narrow">
          <div className="prose-content max-w-none">
            {a.body.map((b, i) => {
              if (b.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="mt-14 mb-5 font-display text-[28px] sm:text-[34px] leading-[1.1] tracking-tight"
                  >
                    {b.text}
                  </h2>
                );
              }
              if (b.type === "h3") {
                return (
                  <h3 key={i} className="mt-10 mb-4 font-display text-[22px] tracking-tight">
                    {b.text}
                  </h3>
                );
              }
              if (b.type === "p") {
                return (
                  <p
                    key={i}
                    className="mt-5 text-[17px] leading-[1.75] text-ink-2 text-pretty"
                  >
                    {b.text}
                  </p>
                );
              }
              if (b.type === "ul") {
                return (
                  <ul key={i} className="mt-5 flex flex-col gap-3">
                    {b.items?.map((it, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-[16px] leading-[1.6] text-ink-2"
                      >
                        <span className="size-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (b.type === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="my-10 border-l-2 border-accent pl-6 font-display text-[24px] leading-[1.3] tracking-tight"
                  >
                    {b.text}
                  </blockquote>
                );
              }
              return null;
            })}
          </div>
        </Container>

        <Container size="narrow" className="mt-20 mb-16">
          <div className="rounded-2xl border border-line bg-surface p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
                Want this kind of execution on your project?
              </div>
              <div className="mt-2 font-display text-[24px] tracking-tight">
                Talk to our engineering team.
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/get-assessment" withArrow>
                Free assessment
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </article>

      <section className="py-16 lg:py-24 border-t border-line">
        <Container size="wide">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
            Continue reading
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line rounded-3xl overflow-hidden">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/blog/${o.slug}`}
                className="group bg-white p-8 hover:bg-surface transition-colors"
              >
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-2 font-mono">
                  {o.category} · {o.readMin} min
                </div>
                <h3 className="mt-4 font-display text-[24px] sm:text-[28px] leading-[1.1] tracking-tight text-balance group-hover:text-accent transition-colors">
                  {o.title}
                </h3>
                <p className="mt-3 text-[14.5px] text-muted leading-relaxed">{o.excerpt}</p>
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
