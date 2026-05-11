"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/container";

const metrics = [
  { value: 5000, suffix: "+", label: "Projects completed", note: "Commercial · DG · Residential" },
  { value: 54, suffix: "+ MW", label: "Installed", note: "Utility · Commercial · Industrial" },
  { value: 7, suffix: " States", label: "Mid-Atlantic coverage", note: "VA · MD · DC · PA · WV · DE · NJ" },
  { value: 25, suffix: " Year", label: "Workmanship warranty", note: "Aligned with manufacturer warranties" },
  { value: 48, suffix: " Hour", label: "Service response SLA", note: "Initial response and triage" },
  { value: 15, suffix: "+ Years", label: "Field experience", note: "Founder-led engineering" },
];

export function MetricsBar() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-surface relative">
      <Container size="wide">
        <div className="mb-12 flex items-end justify-between gap-8 flex-wrap">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
              <span className="h-px w-6 bg-accent" /> By the numbers
            </div>
            <h2 className="mt-5 font-display text-[28px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight text-balance">
              Track record, <span className="italic text-accent">measured.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden">
          {metrics.map((m, i) => (
            <Metric key={m.label} {...m} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Metric({
  value,
  suffix,
  label,
  note,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  note: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="bg-white p-6 sm:p-8 lg:p-10 flex flex-col gap-2 min-h-[180px] sm:min-h-[200px]"
    >
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-2 font-mono">
        0{index + 1}
      </div>
      <div className="font-display text-[40px] sm:text-[60px] lg:text-[72px] leading-none tracking-tight tabular mt-3">
        {n.toLocaleString()}
        <span className="text-[18px] sm:text-[22px] text-muted-2 ml-1 align-baseline">{suffix}</span>
      </div>
      <div className="mt-auto pt-6">
        <div className="font-medium text-[14px] tracking-tight">{label}</div>
        <div className="mt-1 text-[12.5px] text-muted">{note}</div>
      </div>
    </motion.div>
  );
}
