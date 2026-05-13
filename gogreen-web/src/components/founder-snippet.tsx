"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { blurLight } from "@/lib/shimmer";

export function FounderSnippet() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line max-w-[480px] mx-auto lg:mx-0">
              <Image
                src="/images/founder-madan.jpg"
                alt="Madhan Kumar Nagella, Founder & CEO of GoGreen Solutions"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
                placeholder="blur"
                blurDataURL={blurLight}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col gap-1 rounded-2xl border border-line bg-white p-5 shadow-card max-w-[260px]">
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-2 font-mono">
                Founder & CEO
              </div>
              <div className="font-display text-[20px] leading-tight mt-1">
                Madhan Kumar Nagella
              </div>
              <div className="text-[12px] text-muted mt-1">
                Master Electrician · NABCEP PVIP · 15+ years
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
              <span className="h-px w-6 bg-accent" /> Founder
            </div>
            <h2 className="mt-5 font-display text-[28px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight text-balance">
              &ldquo;The work doesn&apos;t lie. <span className="italic text-accent pr-2 md:pr-3">The field tells you</span> if the engineering was honest.&rdquo;
            </h2>
            <p className="mt-7 text-[16px] leading-relaxed text-muted max-w-2xl text-pretty">
              GoGreen was founded with a clear vision, to bridge the gap between
              engineering and execution. After 15+ years in the field, Madhan saw
              that most projects didn&apos;t suffer from poor design, they suffered
              from inconsistent installation and lack of accountability.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-muted max-w-2xl text-pretty">
              GoGreen was built to solve that. Engineering-first. Field-tested. One
              team that owns the system from kickoff to commissioning, and
              afterward.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="/about" withArrow>Read the company story</ButtonLink>
              <ButtonLink href="/why-gogreen" variant="secondary">Our standards</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
