"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Photoreal-ish solar panel module visualization. A 4×6 cell grid that
 * "powers up" in sequence, then a continuous diagonal light wave sweeps
 * across the cells. A sun in the upper right emits soft rays + occasional
 * photon trails dropping onto the array. Designed to feel like a live system.
 */
export function HeroSolarArray() {
  const cols = 6;
  const rows = 4;
  const cells = Array.from({ length: cols * rows }, (_, i) => i);

  // wave drives a continuous diagonal sweep
  const [wave, setWave] = useState(0);
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;
      setWave((w) => (w + dt * 0.35) % 1); // ~3s per cycle
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative h-full w-full">
      {/* ambient sun glow */}
      <div
        className="absolute -top-12 -right-10 size-[480px] rounded-full pointer-events-none blur-2xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(245,180,0,0.35), rgba(245,180,0,0.06) 55%, transparent 80%)",
        }}
        aria-hidden
      />

      {/* sun mark (top-right) */}
      <div className="absolute -top-2 right-2 sm:right-6 z-10">
        <SunDisc />
      </div>

      {/* photon trails */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <Photon key={i} delay={i * 0.7} startX={20 + i * 11} />
        ))}
      </div>

      {/* the panel module */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotateX: 20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformPerspective: 1400 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div
          className="relative w-[88%] aspect-[6/5] rounded-[14px] overflow-hidden border border-white/12"
          style={{
            background:
              "linear-gradient(135deg, #0e1a14 0%, #0a0f0c 100%)",
            boxShadow:
              "0 60px 120px -40px rgba(31,93,52,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* aluminum frame edges (subtle) */}
          <div className="absolute inset-0 rounded-[14px] pointer-events-none ring-1 ring-inset ring-white/5" />

          {/* J-box label top */}
          <div className="absolute top-3 left-4 text-[9px] uppercase tracking-[0.22em] text-white/35 font-mono inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent-3 shadow-[0_0_10px_2px_rgba(58,140,91,0.5)]" />
            GG-PV-450M · MONO PERC
          </div>
          <div className="absolute top-3 right-4 text-[9px] uppercase tracking-[0.22em] text-white/35 font-mono">
            72 CELL · 450W
          </div>
          <div className="absolute bottom-3 left-4 text-[9px] uppercase tracking-[0.22em] text-white/35 font-mono">
            VOC 49.6V · ISC 11.5A
          </div>
          <div className="absolute bottom-3 right-4 text-[9px] uppercase tracking-[0.22em] text-accent-3 font-mono">
            ACTIVE
          </div>

          {/* cell grid */}
          <div className="absolute inset-6 grid gap-[6px]" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}>
            {cells.map((idx) => {
              const c = idx % cols;
              const r = Math.floor(idx / cols);
              // diagonal wave: how close is the cell to the sweep line right now
              const cellPos = (r + c) / (rows + cols - 2);
              const dist = Math.abs(((wave - cellPos + 1) % 1) - 0);
              const within = dist < 0.18 ? 1 - dist / 0.18 : 0;
              const lit = within ** 1.4;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.2 + (r + c) * 0.04,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative rounded-[3px] overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #0d1a13 0%, #050a07 70%, #020403 100%)",
                  }}
                >
                  {/* mono cell texture: subtle radial + diagonal busbars */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(120% 120% at 30% 20%, rgba(120,200,140,0.10), transparent 55%)",
                    }}
                  />
                  {/* fingers */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 6px)",
                    }}
                  />
                  {/* busbars */}
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, transparent 30%, rgba(180,210,200,0.10) 30%, rgba(180,210,200,0.10) 32%, transparent 32%, transparent 66%, rgba(180,210,200,0.10) 66%, rgba(180,210,200,0.10) 68%, transparent 68%)",
                    }}
                  />
                  {/* live light wave overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-screen"
                    style={{
                      background: `radial-gradient(120% 120% at 50% 50%, rgba(58,140,91,${0.55 * lit}) 0%, rgba(245,180,0,${0.35 * lit}) 40%, transparent 70%)`,
                      transition: "background 60ms linear",
                    }}
                  />
                  {/* corner highlight */}
                  <div className="absolute top-0 left-0 size-[40%] bg-gradient-to-br from-white/6 to-transparent pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* corner ticks (engineering drawing aesthetic) */}
        {(["tl", "tr", "bl", "br"] as const).map((p) => (
          <CornerTick key={p} pos={p} />
        ))}
      </motion.div>

      {/* live data chips */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.0 }}
        className="absolute -left-2 sm:left-2 top-[12%] z-10"
      >
        <DataChip label="PRODUCTION" value={5.4} suffix="kW" tickRange={0.4} mono />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="absolute -right-2 sm:right-2 bottom-[10%] z-10"
      >
        <DataChip label="EFFICIENCY" value={21.8} suffix="%" tickRange={0.2} mono />
      </motion.div>
    </div>
  );
}

function SunDisc() {
  return (
    <div className="relative size-[120px] sm:size-[150px]">
      <svg viewBox="0 0 200 200" className="absolute inset-0 animate-sun-rays" aria-hidden>
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i * 360) / 36;
          const long = i % 3 === 0;
          return (
            <line
              key={i}
              x1="100"
              y1="100"
              x2="100"
              y2={long ? "10" : "30"}
              stroke="#f5b400"
              strokeOpacity={long ? 0.55 : 0.2}
              strokeWidth="1"
              transform={`rotate(${a} 100 100)`}
            />
          );
        })}
      </svg>
      <div
        className="absolute inset-[30%] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, #ffd066 0%, #f5b400 40%, rgba(245,180,0,0.0) 80%)",
          boxShadow: "0 0 60px 10px rgba(245,180,0,0.45)",
        }}
      />
    </div>
  );
}

function Photon({ delay = 0, startX = 30 }: { delay?: number; startX?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40, x: 0 }}
      animate={{ opacity: [0, 1, 0], y: 380, x: -20 }}
      transition={{
        delay,
        duration: 3.6,
        repeat: Infinity,
        ease: "easeIn",
      }}
      style={{ left: `${startX}%` }}
      className="absolute top-2 size-1 rounded-full bg-[#ffd066] shadow-[0_0_8px_2px_rgba(245,180,0,0.7)]"
    />
  );
}

function DataChip({
  label,
  value,
  suffix,
  tickRange = 0.2,
  mono = true,
}: {
  label: string;
  value: number;
  suffix?: string;
  tickRange?: number;
  mono?: boolean;
}) {
  const [n, setN] = useState(value);
  useEffect(() => {
    const id = setInterval(() => {
      const drift = (Math.random() - 0.5) * tickRange;
      setN(+(value + drift).toFixed(1));
    }, 1400);
    return () => clearInterval(id);
  }, [value, tickRange]);
  return (
    <div className="rounded-xl border border-white/12 bg-white/[0.03] backdrop-blur-md px-4 py-3 min-w-[140px]">
      <div className="flex items-center gap-2 text-[9.5px] uppercase tracking-[0.22em] text-white/55 font-mono">
        <span className="relative flex size-1.5">
          <span className="absolute inset-0 rounded-full bg-accent-3 animate-ping opacity-60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-accent-3" />
        </span>
        {label}
      </div>
      <div className={`mt-2 font-display font-bold text-white tabular leading-none text-[24px] sm:text-[28px] ${mono ? "tabular" : ""}`}>
        {n.toFixed(1)}
        <span className="text-[12px] sm:text-[14px] text-white/55 ml-1 font-medium">{suffix}</span>
      </div>
    </div>
  );
}

function CornerTick({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const cls: Record<typeof pos, string> = {
    tl: "top-2 left-2",
    tr: "top-2 right-2 rotate-90",
    bl: "bottom-2 left-2 -rotate-90",
    br: "bottom-2 right-2 rotate-180",
  };
  return (
    <div className={`absolute size-3 ${cls[pos]} pointer-events-none`} aria-hidden>
      <div className="absolute inset-0 border-l border-t border-white/30" />
    </div>
  );
}
