"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/button";
import { ArrowRight, ArrowUpRight, Check } from "@/components/icons";

export type ServicePageData = {
  slug: string;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  heroImage: string;
  metricBar: { label: string; value: string }[];
  overview: { title: string; body: string }[];
  scope: { title: string; items: string[] };
  details: {
    title: string;
    body: string;
    items?: { label: string; desc: string }[];
  };
  clients: string[];
  faq: { q: string; a: string }[];
  related: { title: string; href: string; body: string }[];
};

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: data.eyebrow },
        ]}
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/get-assessment" size="lg" withArrow>
            Get a free assessment
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="secondary">
            Talk to engineering
          </ButtonLink>
        </div>
      </PageHero>

      <Container size="wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/8] rounded-3xl overflow-hidden border border-line"
        >
          <Image
            src={data.heroImage}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1440px"
            priority
          />
        </motion.div>
      </Container>

      <section className="py-16 lg:py-20">
        <Container size="wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {data.metricBar.map((m) => (
              <div key={m.label} className="bg-white p-6 lg:p-8">
                <div className="font-display text-[28px] sm:text-[34px] leading-none tracking-tight tabular">
                  {m.value}
                </div>
                <div className="mt-3 text-[12px] uppercase tracking-[0.14em] text-muted font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
                Overview
              </div>
              <h2 className="mt-4 font-display text-[34px] sm:text-[44px] leading-[1.05] tracking-tight">
                What we deliver.
              </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
              {data.overview.map((o, i) => (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="bg-white p-7"
                >
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-2 font-mono">
                    0{i + 1}
                  </div>
                  <h3 className="mt-5 font-display text-[20px] leading-[1.2] tracking-tight">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{o.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
                Scope
              </div>
              <h2 className="mt-4 font-display text-[34px] sm:text-[44px] leading-[1.05] tracking-tight">
                {data.scope.title}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {data.scope.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: i * 0.04 }}
                    className="flex gap-3 items-start py-3 border-b border-line"
                  >
                    <span className="size-5 mt-0.5 rounded-full bg-accent-tint text-accent flex items-center justify-center shrink-0">
                      <Check className="size-3" strokeWidth={2.5} />
                    </span>
                    <span className="text-[14.5px] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
                Detail
              </div>
              <h2 className="mt-4 font-display text-[34px] sm:text-[44px] leading-[1.05] tracking-tight">
                {data.details.title}
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-muted text-pretty max-w-md">
                {data.details.body}
              </p>
            </div>
            <div className="lg:col-span-7">
              {data.details.items && (
                <div className="flex flex-col">
                  {data.details.items.map((d, i) => (
                    <motion.div
                      key={d.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ delay: i * 0.05 }}
                      className="grid grid-cols-12 items-start py-6 border-b border-line gap-6"
                    >
                      <div className="col-span-12 sm:col-span-4 text-[10px] uppercase tracking-[0.2em] text-muted-2 font-mono">
                        {String(i + 1).padStart(2, "0")} ·{" "}
                        <span className="text-ink-2 font-sans normal-case tracking-normal text-[14.5px] font-medium">
                          {d.label}
                        </span>
                      </div>
                      <div className="col-span-12 sm:col-span-8 text-[14.5px] leading-relaxed text-muted">
                        {d.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-ink text-white">
        <Container size="wide">
          <div className="flex flex-col gap-10">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/50 font-mono">
              Built for
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
              {data.clients.map((c) => (
                <div key={c} className="bg-ink p-6 text-[14px] tracking-tight font-medium">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
                FAQ
              </div>
              <h2 className="mt-4 font-display text-[34px] sm:text-[44px] leading-[1.05] tracking-tight">
                Common questions.
              </h2>
            </div>
            <div className="lg:col-span-7">
              {data.faq.map((f, i) => (
                <details
                  key={i}
                  className="group border-b border-line py-5"
                >
                  <summary className="flex items-start justify-between cursor-pointer list-none gap-6">
                    <span className="text-[16.5px] font-medium tracking-tight pr-4">
                      {f.q}
                    </span>
                    <span className="size-7 shrink-0 rounded-full border border-line inline-flex items-center justify-center text-muted group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-[15px] leading-relaxed text-muted max-w-2xl text-pretty">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <Container size="wide">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
            Related capabilities
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden">
            {data.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="bg-white p-7 group hover:bg-bg transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[22px] tracking-tight">{r.title}</h3>
                  <ArrowUpRight className="size-4 text-muted-2 group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="mt-3 text-[14px] text-muted leading-relaxed">{r.body}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container size="wide">
          <div className="rounded-3xl border border-line bg-white p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between">
            <div className="max-w-xl">
              <h3 className="font-display text-[28px] sm:text-[36px] leading-[1.05] tracking-tight">
                Ready for a <span className="italic text-accent">technical conversation?</span>
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Send us your scope, drawings, or even a rough idea. We&apos;ll respond within 48 hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/get-assessment" size="lg" withArrow>
                Free assessment
              </ButtonLink>
              <ButtonLink href="/contact" size="lg" variant="secondary">
                Contact <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
