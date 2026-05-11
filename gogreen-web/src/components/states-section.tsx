"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight } from "@/components/icons";
import { site } from "@/lib/site";

export function StatesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-10 sm:mb-14">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Service Areas"
              title={
                <>
                  Operating across the <span className="italic text-accent">Mid-Atlantic</span>.
                </>
              }
              description="Multi-state licensed EPC platform with in-house electrical and installation teams. We hold credentials valid in every state we operate in."
            />
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <div className="aspect-[5/4] relative max-w-md mx-auto lg:max-w-none">
              <MapMidAtlantic />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden">
          {site.states.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <Link
                href={`/areas/${s.slug}`}
                className="group bg-white block p-7 lg:p-8 hover:bg-surface transition-colors h-full"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-display text-[38px] sm:text-[56px] leading-none tracking-tight">
                      {s.code}
                    </div>
                    <div className="mt-3 text-[15px] font-medium tracking-tight">
                      {s.name}
                    </div>
                  </div>
                  {s.priority && (
                    <span className="text-[10px] uppercase tracking-[0.18em] text-accent font-mono inline-flex items-center gap-1.5">
                      <span className="size-1 rounded-full bg-accent" /> Priority
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-center justify-between text-[12.5px] text-muted">
                  <span>EPC · BESS · O&M</span>
                  <ArrowUpRight className="size-4 text-muted-2 group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: site.states.length * 0.05, duration: 0.5 }}
            className="sm:col-span-1 lg:col-span-2 bg-white flex flex-col justify-center p-7 lg:p-8 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
              aria-hidden
            />
            <div className="relative z-10">
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted font-mono mb-3">
                Expanding Operations
              </div>
              <h3 className="font-display text-[24px] sm:text-[28px] leading-[1.1] tracking-tight">
                Don't see your state?
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted max-w-sm">
                We're actively evaluating new markets across the East Coast for commercial EPC and portfolio engagements. <Link href="/contact" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent transition-colors">Let's talk</Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function MapMidAtlantic() {
  return (
    <svg viewBox="0 0 500 400" className="w-full h-full" aria-hidden>
      <defs>
        <pattern id="dotmap" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill="#1a1a1a" opacity="0.18" />
        </pattern>
      </defs>

      {/* very stylized state shapes, no real geographic precision required */}
      <g fill="url(#dotmap)" stroke="#d4d4d2" strokeWidth="1">
        {/* PA */}
        <path d="M80 90 L260 80 L290 100 L300 145 L260 170 L130 175 L80 160 Z" />
        {/* WV */}
        <path d="M100 175 L235 165 L250 215 L220 260 L170 270 L130 250 L100 220 Z" />
        {/* VA */}
        <path d="M170 270 L320 240 L420 250 L425 290 L370 320 L240 340 L180 310 Z" />
        {/* MD */}
        <path d="M250 200 L380 180 L420 210 L405 240 L340 235 L290 222 Z" />
        {/* DC */}
        <path d="M340 213 L370 213 L370 230 L340 230 Z" />
        {/* DE */}
        <path d="M395 175 L430 175 L440 230 L420 235 L405 215 Z" />
        {/* NJ */}
        <path d="M290 100 L340 70 L390 110 L395 175 L300 145 Z" />
      </g>

      {/* outlines highlighted */}
      <g fill="none" stroke="#1a1a1a" strokeWidth="1.2">
        <path d="M80 90 L260 80 L290 100 L300 145 L260 170 L130 175 L80 160 Z" />
        <path d="M100 175 L235 165 L250 215 L220 260 L170 270 L130 250 L100 220 Z" />
        <path d="M170 270 L320 240 L420 250 L425 290 L370 320 L240 340 L180 310 Z" />
        <path d="M250 200 L380 180 L420 210 L405 240 L340 235 L290 222 Z" />
        <path d="M340 213 L370 213 L370 230 L340 230 Z" />
        <path d="M395 175 L430 175 L440 230 L420 235 L405 215 Z" />
        <path d="M290 100 L340 70 L390 110 L395 175 L300 145 Z" />
      </g>

      {/* HQ pin */}
      <motion.g
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ transformOrigin: "300px 282px", transformBox: "fill-box" }}
      >
        <circle cx="300" cy="282" r="8" fill="#1e7f5c" opacity="0.2">
          <animate attributeName="r" values="8;14;8" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0;0.2" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="282" r="4" fill="#1e7f5c" />
        <text x="310" y="286" fontSize="9" fontFamily="var(--font-mono)" fill="#1a1a1a" letterSpacing="1">
          HERNDON · HQ
        </text>
      </motion.g>

      {/* labels */}
      {[
        { code: "PA", x: 175, y: 130 },
        { code: "WV", x: 165, y: 220 },
        { code: "VA", x: 290, y: 295 },
        { code: "MD", x: 330, y: 215 },
        { code: "DC", x: 355, y: 246 },
        { code: "DE", x: 425, y: 200 },
        { code: "NJ", x: 345, y: 125 },
      ].map((l) => (
        <text
          key={l.code}
          x={l.x}
          y={l.y}
          fontSize="11"
          fontFamily="var(--font-mono)"
          fill="#1a1a1a"
          letterSpacing="2"
          fontWeight="500"
        >
          {l.code}
        </text>
      ))}
    </svg>
  );
}
