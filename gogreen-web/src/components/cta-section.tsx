"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { site } from "@/lib/site";
import { Phone, Mail } from "@/components/icons";

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      <Container size="wide">
        <div className="relative rounded-3xl overflow-hidden border border-line bg-ink text-white">
          <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
            <Image
              src="/images/working-1.jpg"
              alt=""
              fill
              className="object-cover opacity-30"
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/85 to-ink/40" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden
          />

          <div className="relative px-6 py-14 sm:px-12 sm:py-24 lg:px-20 lg:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/60 font-mono">
                <span className="h-px w-6 bg-accent" />
                Ready to start
              </div>
              <h2 className="mt-5 font-display text-[34px] sm:text-[60px] lg:text-[80px] leading-[1] tracking-tight text-balance">
                Let&apos;s engineer your next{" "}
                <span className="italic text-accent">solar project</span>.
              </h2>
              <p className="mt-7 text-[16.5px] sm:text-[18px] leading-relaxed text-white/70 max-w-2xl text-pretty">
                Free assessment. 48-hour response. Whether you&apos;re scoping a
                commercial array, evaluating an R&amp;R, or upgrading to BESS, our
                engineering team will respond.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <ButtonLink href="/get-assessment" size="lg" withArrow>
                  Get a free assessment
                </ButtonLink>
                <ButtonLink href="/contact" size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-ink">
                  Talk to our team
                </ButtonLink>
              </div>

              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
                <a
                  href={site.phoneHref}
                  className="group flex items-center gap-3 text-white/80 hover:text-white"
                >
                  <span className="size-10 rounded-full border border-white/20 inline-flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                    <Phone className="size-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-white/40 font-mono">Phone</span>
                    <span className="block text-[14.5px] mt-0.5">{site.phone}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-3 text-white/80 hover:text-white"
                >
                  <span className="size-10 rounded-full border border-white/20 inline-flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                    <Mail className="size-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-white/40 font-mono">Email</span>
                    <span className="block text-[14.5px] mt-0.5">{site.email}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
