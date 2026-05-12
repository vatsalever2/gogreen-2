"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight, Sun, Battery, Recycle, Wrench, Cog } from "@/components/icons";
import { site } from "@/lib/site";
import type { ComponentType, SVGProps } from "react";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  epc: Sun,
  bess: Battery,
  dcom: Recycle,
  rnr: Wrench,
  extras: Cog,
};

const serviceImages = [
  "/images/project-1.jpg",
  "/images/setup.jpg",
  "/images/working-1.jpg",
  "/images/project-2.jpg",
  "/images/working-3.jpg",
];

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 mb-10 sm:mb-14">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Capabilities"
              title={
                <>
                  One team. <span className="italic text-accent">Complete scope.</span>
                </>
              }
              description="Engineering, procurement, installation, electrical updates and roofing, under one roof. Fewer coordination gaps, fewer surprises in the field."
            />
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <div className="text-[14px] leading-relaxed text-muted max-w-md">
              Built for commercial, distributed generation and residential -
              with proven scale up to <span className="text-ink font-medium">1.5 MW+</span> per project.
            </div>
            <div className="mt-6 flex items-center gap-3 lg:hidden text-muted text-[10px] font-mono uppercase tracking-[0.2em] font-medium">
              <span className="flex-1 h-px bg-line" />
              Swipe to explore
              <svg className="size-3 animate-pulse text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" role="presentation" focusable="false"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </div>
        </div>

        <div role="region" aria-label="Services list" className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 gap-4 lg:gap-px lg:bg-line lg:border lg:border-line lg:rounded-3xl pb-8 lg:pb-0">
          {site.services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Sun;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="w-[85vw] sm:w-[45vw] lg:w-auto shrink-0 snap-center rounded-2xl border border-line lg:rounded-none lg:border-0 bg-white relative overflow-hidden group"
              >
                {/* Background Image with Tint */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-white">
                  <img
                    src={serviceImages[i] || "/images/project-1.jpg"}
                    alt=""
                    className="w-full h-full object-cover opacity-[0.15] group-hover:opacity-[0.3] transition-all duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-accent/[0.05] group-hover:bg-accent/[0.1] transition-colors duration-500 mix-blend-multiply" />
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="relative z-10 flex flex-col h-full p-8 lg:p-10 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="size-12 rounded-xl bg-ink text-white inline-flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                      <Icon className="size-5" />
                    </div>
                    <ArrowUpRight className="size-5 text-muted-2 -translate-y-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink transition-all duration-300" />
                  </div>
                  <div className="mt-12 lg:mt-16">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-2 font-medium font-mono" aria-hidden="true">
                      0{i + 1} · {service.tagline}
                    </div>
                    <h3 className="mt-3 font-display text-[26px] sm:text-[30px] leading-[1.05] tracking-tight group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-[14.5px] leading-relaxed text-muted text-pretty">
                      {service.short}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="w-[85vw] sm:w-[45vw] lg:w-auto shrink-0 snap-center rounded-2xl border border-line lg:rounded-none lg:border-0 bg-ink text-white relative overflow-hidden flex flex-col p-8 lg:p-10 group"
          >
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
              aria-hidden
            />
            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50 font-medium font-mono">
                For developers, asset owners, EPCs
              </div>
              <h3 className="mt-3 font-display text-[26px] sm:text-[30px] leading-[1.05] tracking-tight">
                Need full-scope <span className="italic text-accent">execution</span> on a complex project?
              </h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-white/70 max-w-sm">
                We engineer and build at MW scale with in-house electrical and installation teams.
              </p>
              <Link
                href="/get-assessment"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium border-b border-accent pb-1 hover:gap-3 transition-all"
              >
                Talk to engineering
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </motion.div>
          */}
        </div>
      </Container>
    </section>
  );
}
