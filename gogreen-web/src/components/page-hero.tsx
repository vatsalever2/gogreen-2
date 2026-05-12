"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/container";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  align = "left",
  className,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "relative pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-24 lg:pb-24 overflow-hidden",
        className,
      )}
    >
      <div className="bg-grid-fine absolute inset-0 opacity-50" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 400px at 90% 10%, rgba(30,127,92,0.06), transparent 70%)",
        }}
        aria-hidden
      />
      <Container size="wide" className="relative">
        {breadcrumbs && (
          <nav className={cn(
            "mb-8 flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-muted-2 font-mono",
            align === "center" && "justify-center",
          )}>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-2">
                {b.href ? (
                  <Link href={b.href} className="hover:text-ink transition-colors">{b.label}</Link>
                ) : (
                  <span>{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <span className="text-line-2">/</span>}
              </span>
            ))}
          </nav>
        )}
        <div className={cn(
          "max-w-4xl",
          align === "center" && "mx-auto text-center",
        )}>
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted font-mono",
              )}
            >
              <span className="h-px w-6 bg-accent" /> {eyebrow}
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-display text-[36px] sm:text-[60px] lg:text-[84px] leading-[0.98] tracking-tight text-balance"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-7 text-[16.5px] sm:text-[18.5px] leading-relaxed text-muted max-w-2xl text-pretty"
            >
              {description}
            </motion.p>
          )}
          {children && <div className="mt-9">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
