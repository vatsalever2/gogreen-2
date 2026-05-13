"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/container";
import { ArrowUpRight } from "@/components/icons";
import { blurDark } from "@/lib/shimmer";

type Project = {
  title: string;
  spec: string;
  type: string;
  image: string;
  desc: string;
};

const projects: Project[] = [
  {
    title: "Commercial rooftop · DG",
    spec: "1.2 MW · Maryland",
    type: "EPC",
    image: "/images/project-1.jpg",
    desc: "Full-scope engineering, procurement, install and commissioning for a distributed generation rooftop array.",
  },
  {
    title: "Ground-mount commercial",
    spec: "880 kW · Virginia",
    type: "EPC + O&M",
    image: "/images/project-2.jpg",
    desc: "Site grading, racking, in-house electrical scope, AHJ coordination, post-commissioning O&M plan.",
  },
  {
    title: "Reinstallation & Re-roof",
    spec: "320 kW · Pennsylvania",
    type: "R&R",
    image: "/images/project-3.jpg",
    desc: "Phased removal, roof replacement, reinstallation with upgraded inverters and string optimization.",
  },
  {
    title: "Solar + storage",
    spec: "240 kW + 500 kWh BESS · DC",
    type: "EPC + BESS",
    image: "/images/project-2b.jpg",
    desc: "Integrated PV + battery system with peak-shaving controls and resilient backup for critical loads.",
  },
];

export function ProjectsShowcase() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-ink text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />
      <Container size="wide" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/75 font-medium font-mono">
              <span className="h-px w-6 bg-accent" /> Recent execution
            </div>
            <h2 className="mt-5 font-display text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.02] tracking-tight text-balance">
              Built to perform <span className="italic text-[#2fba82]">long after</span> commissioning.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-6 text-[15.5px] leading-relaxed text-white/80 text-pretty">
            From single-megawatt commercial arrays to integrated solar-plus-storage systems -
            every project documented, commissioned and supported by our in-house team.
          </div>
        </div>
      </Container>

      <ProjectStack projects={projects} />

      <Container size="wide" className="relative mt-12 flex items-center justify-between">
        <div className="text-[13px] text-white/75 font-mono uppercase tracking-[0.16em]">
          54+ MW · 5,000+ projects · 7 states
        </div>
      </Container>
    </section>
  );
}

function ProjectStack({ projects }: { projects: Project[] }) {
  return (
    <div className="relative">
      {projects.map((p, i) => (
        <ProjectRow key={i} project={p} index={i} total={projects.length} />
      ))}
    </div>
  );
}

function ProjectRow({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const flip = index % 2 === 1;

  return (
    <div ref={ref} className="py-8 sm:py-10 lg:py-16">
      <Container size="wide">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${flip ? "lg:[&>*:first-child]:order-2" : ""
            }`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10"
          >
            <motion.div style={{ y }} className="absolute inset-0 scale-110 will-change-transform">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                placeholder="blur"
                blurDataURL={blurDark}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-transparent" />
            <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-ink/70 backdrop-blur px-3 py-1 text-[10.5px] uppercase tracking-[0.18em] font-mono" aria-hidden="true">
              <span className="size-1 rounded-full bg-accent" /> {project.type}
            </div>
            <div className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-ink/70 backdrop-blur px-3 py-1 text-[10.5px] uppercase tracking-[0.18em] font-mono" aria-hidden="true">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>
          </motion.div>
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/70 font-mono">
              {project.spec}
            </div>
            <h3 className="mt-4 font-display text-[26px] sm:text-[36px] lg:text-[44px] leading-[1.05] tracking-tight">
              {project.title}
            </h3>
            <p className="mt-4 text-[15.5px] leading-relaxed text-white/85 max-w-[48ch]">
              {project.desc}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-accent pb-1 hover:gap-3 transition-all"
            >
              Request project details
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
