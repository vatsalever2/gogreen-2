"use client";

import { motion } from "framer-motion";

/**
 * Engineering schematic of a solar PV system: array → combiner → inverter →
 * battery + grid + load. Energy flows along the wires using stroke-dashoffset
 * animations. Designed to feel technical, calm, and precise.
 */
export function HeroDiagram() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Background tech card */}
      <div className="absolute inset-2 sm:inset-4 rounded-3xl border border-line bg-gradient-to-br from-white to-surface overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.045) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />

        {/* corner ticks */}
        {(["tl", "tr", "bl", "br"] as const).map((c) => (
          <CornerTick key={c} pos={c} />
        ))}

        {/* meta labels */}
        <div className="absolute top-4 left-5 text-[10px] tracking-[0.18em] uppercase text-muted-2 font-mono flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent" />
          GG-PV-001 · System Diagram
        </div>
        <div className="absolute top-4 right-5 text-[10px] tracking-[0.18em] uppercase text-muted-2 font-mono">
          REV 2.4
        </div>
        <div className="absolute bottom-4 left-5 text-[10px] tracking-[0.18em] uppercase text-muted-2 font-mono">
          DC · 600V
        </div>
        <div className="absolute bottom-4 right-5 text-[10px] tracking-[0.18em] uppercase text-muted-2 font-mono">
          AC · 480V/3φ
        </div>
      </div>

      {/* Schematic */}
      <svg
        viewBox="0 0 400 600"
        className="relative w-full h-full p-6 sm:p-10"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#3a3a3a" />
          </linearGradient>
          <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1e7f5c" stopOpacity="0" />
            <stop offset="50%" stopColor="#1e7f5c" stopOpacity="1" />
            <stop offset="100%" stopColor="#1e7f5c" stopOpacity="0" />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* PV ARRAY (top), 3x4 panel grid */}
        <g>
          {/* Frame */}
          <motion.rect
            x="60"
            y="50"
            width="280"
            height="140"
            rx="6"
            stroke="#d4d4d2"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />
          {/* Panels */}
          {Array.from({ length: 12 }).map((_, i) => {
            const col = i % 4;
            const row = Math.floor(i / 4);
            return (
              <motion.g
                key={i}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4 + i * 0.04,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <rect
                  x={70 + col * 65}
                  y={60 + row * 42}
                  width="55"
                  height="32"
                  rx="2"
                  fill="url(#panelGrad)"
                />
                {/* cells */}
                {Array.from({ length: 4 }).map((_, c) => (
                  <line
                    key={c}
                    x1={70 + col * 65 + 11 * (c + 1)}
                    y1={60 + row * 42}
                    x2={70 + col * 65 + 11 * (c + 1)}
                    y2={60 + row * 42 + 32}
                    stroke="#fff"
                    strokeOpacity="0.08"
                    strokeWidth="0.5"
                  />
                ))}
                <line
                  x1={70 + col * 65}
                  y1={60 + row * 42 + 16}
                  x2={70 + col * 65 + 55}
                  y2={60 + row * 42 + 16}
                  stroke="#fff"
                  strokeOpacity="0.08"
                  strokeWidth="0.5"
                />
              </motion.g>
            );
          })}
          {/* sun glints */}
          <motion.circle
            cx="320"
            cy="68"
            r="3"
            fill="#1e7f5c"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />
          <motion.circle
            cx="155"
            cy="120"
            r="2"
            fill="#1e7f5c"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2.4 }}
          />
        </g>

        {/* labels */}
        <Label x={60} y={42} text="PV ARRAY · 12 × 450W" />
        <Label x={340} y={42} text="5.4 kW" align="end" />

        {/* Wire 1: array → combiner */}
        <Wire d="M200 190 L200 230" delay={1.0} />
        <Node cx={200} cy={230} delay={1.2} />

        {/* Combiner box */}
        <motion.g
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <rect
            x="160"
            y="240"
            width="80"
            height="34"
            rx="4"
            fill="#fff"
            stroke="#1a1a1a"
            strokeWidth="1.2"
          />
          <text
            x="200"
            y="261"
            textAnchor="middle"
            fontSize="9"
            fontFamily="var(--font-mono)"
            fill="#1a1a1a"
            letterSpacing="1"
          >
            COMBINER
          </text>
        </motion.g>

        {/* Wire 2: combiner → inverter */}
        <Wire d="M200 274 L200 310" delay={1.3} />

        {/* Inverter */}
        <motion.g
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <rect
            x="140"
            y="310"
            width="120"
            height="60"
            rx="6"
            fill="#1a1a1a"
          />
          <text
            x="200"
            y="334"
            textAnchor="middle"
            fontSize="11"
            fontFamily="var(--font-mono)"
            fill="#fff"
            letterSpacing="1.5"
          >
            INVERTER
          </text>
          <text
            x="200"
            y="352"
            textAnchor="middle"
            fontSize="8"
            fontFamily="var(--font-mono)"
            fill="#1e7f5c"
            letterSpacing="1.5"
          >
            DC → AC · 5kW
          </text>
          {/* led */}
          <motion.circle
            cx="246"
            cy="318"
            r="2"
            fill="#1e7f5c"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </motion.g>

        {/* Branch split line */}
        <Wire d="M200 370 L200 400" delay={1.7} />
        <Wire d="M200 400 L100 400 L100 430" delay={1.8} />
        <Wire d="M200 400 L300 400 L300 430" delay={1.9} />
        <Wire d="M200 400 L200 430" delay={2.0} />
        <Node cx={200} cy={400} delay={2.0} />

        {/* Battery (left) */}
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.6 }}
        >
          <rect
            x="60"
            y="430"
            width="80"
            height="80"
            rx="6"
            fill="#fff"
            stroke="#1a1a1a"
            strokeWidth="1.2"
          />
          <text
            x="100"
            y="450"
            textAnchor="middle"
            fontSize="9"
            fontFamily="var(--font-mono)"
            fill="#1a1a1a"
            letterSpacing="1.5"
          >
            BESS
          </text>
          {/* battery cells */}
          {[0, 1, 2, 3].map((i) => (
            <motion.rect
              key={i}
              x={70}
              y={462 + i * 11}
              width="60"
              height="6"
              rx="1"
              fill="#1e7f5c"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.4 + i * 0.1, duration: 0.5 }}
              style={{ transformOrigin: "70px 0", transformBox: "fill-box" }}
            />
          ))}
        </motion.g>
        <Label x={60} y={524} text="BACKUP" />

        {/* Building / load (center) */}
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <rect
            x="170"
            y="430"
            width="60"
            height="80"
            fill="#fff"
            stroke="#1a1a1a"
            strokeWidth="1.2"
          />
          <path d="M170 430 L200 412 L230 430" stroke="#1a1a1a" strokeWidth="1.2" fill="#fff" />
          {/* windows */}
          {[0, 1, 2].map((r) => (
            <g key={r}>
              <rect x={180} y={440 + r * 18} width="14" height="10" fill="#1e7f5c" opacity="0.15" />
              <rect x={206} y={440 + r * 18} width="14" height="10" fill="#1e7f5c" opacity="0.15" />
            </g>
          ))}
        </motion.g>
        <Label x={170} y={524} text="LOAD" />

        {/* Grid (right) */}
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.6 }}
        >
          <rect
            x="260"
            y="430"
            width="80"
            height="80"
            rx="6"
            fill="#fff"
            stroke="#1a1a1a"
            strokeWidth="1.2"
          />
          <text
            x="300"
            y="450"
            textAnchor="middle"
            fontSize="9"
            fontFamily="var(--font-mono)"
            fill="#1a1a1a"
            letterSpacing="1.5"
          >
            GRID
          </text>
          {/* meter dial */}
          <circle cx="300" cy="478" r="14" fill="none" stroke="#1a1a1a" strokeWidth="1" />
          <motion.line
            x1="300"
            y1="478"
            x2="300"
            y2="468"
            stroke="#1e7f5c"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ rotate: -120 }}
            animate={{ rotate: [-120, 60, -90, 30, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "300px 478px" }}
          />
          <circle cx="300" cy="478" r="1.5" fill="#1a1a1a" />
        </motion.g>
        <Label x={260} y={524} text="UTILITY" />

        {/* energy flow particles */}
        <FlowParticle d="M200 195 L200 230" delay={3.2} />
        <FlowParticle d="M200 280 L200 310" delay={3.5} />
        <FlowParticle d="M200 370 L200 400 L100 400 L100 430" delay={3.8} />
        <FlowParticle d="M200 370 L200 400 L300 400 L300 430" delay={4.1} />
      </svg>

      {/* Floating data chips */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.7 }}
        className="absolute top-[12%] left-2 sm:left-6 rounded-xl border border-line bg-white/95 backdrop-blur px-3 py-2 shadow-soft"
      >
        <div className="text-[10px] uppercase tracking-[0.16em] text-muted-2 font-medium">Output</div>
        <div className="font-display text-[20px] leading-none mt-1 tabular">
          5.4 <span className="text-[12px] text-muted">kW</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.9, duration: 0.7 }}
        className="absolute bottom-[14%] right-2 sm:right-6 rounded-xl border border-line bg-white/95 backdrop-blur px-3 py-2 shadow-soft"
      >
        <div className="text-[10px] uppercase tracking-[0.16em] text-muted-2 font-medium">SLA</div>
        <div className="font-display text-[20px] leading-none mt-1 tabular">
          48 <span className="text-[12px] text-muted">hr</span>
        </div>
      </motion.div>
    </div>
  );
}

function Label({
  x,
  y,
  text,
  align = "start",
}: {
  x: number;
  y: number;
  text: string;
  align?: "start" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={align}
      fontSize="8"
      fontFamily="var(--font-mono)"
      fill="#8a8a8a"
      letterSpacing="1.5"
    >
      {text}
    </text>
  );
}

function Wire({ d, delay = 0 }: { d: string; delay?: number }) {
  return (
    <motion.path
      d={d}
      stroke="#1a1a1a"
      strokeWidth="1.2"
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

function Node({ cx, cy, delay = 0 }: { cx: number; cy: number; delay?: number }) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="3"
      fill="#1a1a1a"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay, duration: 0.3 }}
    />
  );
}

function FlowParticle({ d, delay = 0 }: { d: string; delay?: number }) {
  return (
    <g>
      <motion.path
        d={d}
        stroke="#1e7f5c"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="6 60"
        initial={{ strokeDashoffset: 0, opacity: 0 }}
        animate={{ strokeDashoffset: -200, opacity: [0, 1, 1, 0] }}
        transition={{
          delay,
          duration: 2.4,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.9, 1],
        }}
      />
    </g>
  );
}

function CornerTick({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const cls: Record<typeof pos, string> = {
    tl: "top-3 left-3",
    tr: "top-3 right-3 rotate-90",
    bl: "bottom-3 left-3 -rotate-90",
    br: "bottom-3 right-3 rotate-180",
  };
  return (
    <div className={`absolute size-3 ${cls[pos]}`} aria-hidden>
      <div className="absolute inset-0 border-l border-t border-ink/40" />
    </div>
  );
}
