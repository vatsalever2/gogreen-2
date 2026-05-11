"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  size = "default",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  size?: "default" | "large";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 max-w-3xl",
        align === "center" && "items-center text-center mx-auto",
        className,
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted font-medium"
        >
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "font-display tracking-tight text-balance",
          size === "default" &&
            "text-[28px] sm:text-[44px] lg:text-[56px] leading-[1.05]",
          size === "large" &&
            "text-[34px] sm:text-[60px] lg:text-[76px] leading-[1]",
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[16px] sm:text-[17px] leading-relaxed text-muted text-pretty max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
