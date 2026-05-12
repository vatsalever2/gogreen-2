"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/button";
import { Shield, Clock, Layers, Award } from "@/components/icons";

const reasons = [
  {
    icon: Shield,
    title: "25-year workmanship warranty",
    body: "Aligned with manufacturer warranties on modules, racking, inverters, and batteries, installed to code and spec.",
  },
  {
    icon: Clock,
    title: "48-hour service response SLA",
    body: "Initial response, remote diagnostics and on-site scheduling, with prioritized coordination for critical issues.",
  },
  {
    icon: Layers,
    title: "Engineering + execution under one roof",
    body: "Design intent never gets lost in translation. In-house engineering, electrical and installation teams.",
  },
  {
    icon: Award,
    title: "NABCEP + Master Electrician on leadership",
    body: "Decisions are made by people who hold the credentials, swing the wrench, and read the prints.",
  },
];

export function WhySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section ref={ref} className="py-14 sm:py-16 lg:py-20 bg-surface relative overflow-hidden">
      <div className="bg-grid-fine absolute inset-0 opacity-40" aria-hidden />
      <Container size="wide" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <SectionHeading
              eyebrow="Why GoGreen"
              title={
                <>
                  Built around the way solar <span className="italic text-accent">should</span> get built.
                </>
              }
              description="Most projects don't fail in design. They fail in the gap between what the engineer drew and what the field installed. We close that gap."
            />
            <div className="mt-8 relative aspect-[4/3] max-w-[420px] mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-line">
              <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
                <Image
                  src="/images/working-2.jpg"
                  alt="GoGreen field crew during commercial installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-[11px] uppercase tracking-[0.18em] font-mono">
                  Project · DG · 1.2 MW
                </div>
                <div className="mt-1 font-display text-[20px] leading-tight">
                  Field-first execution. Every system, every site.
                </div>
              </div>
            </div>
            <ButtonLink href="/why-gogreen" variant="secondary" size="md" withArrow className="mt-8">
              See our standards
            </ButtonLink>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-px bg-line border border-line rounded-3xl overflow-hidden h-fit">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="bg-white p-5 sm:p-6 lg:px-8 lg:py-7 flex gap-4 sm:gap-6 lg:gap-8"
                >
                  <div className="shrink-0">
                    <div className="size-12 rounded-xl border border-line inline-flex items-center justify-center text-accent">
                      <Icon className="size-5" />
                    </div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted-2 font-mono" aria-hidden="true">
                      0{i + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-[20px] sm:text-[28px] leading-[1.15] tracking-tight">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted text-pretty max-w-[52ch]">
                      {r.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
