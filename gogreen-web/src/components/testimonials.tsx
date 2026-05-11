"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Star } from "@/components/icons";

const items = [
  {
    quote:
      "I had a great experience with GoGreen Solutions. The team was very professional and friendly. They explained everything clearly. The installation was quick and smooth.",
    author: "Chris Watson",
    org: "Google Review",
    project: "Verified",
  },
  {
    quote:
      "They have been very knowledgeable, professional and competent. Compared to other installers who blindly follow engineering plans, they are a unique bunch who actually review plans and highlight any issues before beginning the job.",
    author: "Muhammad Bilal Ali",
    org: "Google Review",
    project: "Verified",
  },
  {
    quote:
      "From start to finish, their communication has been excellent — clear, timely, and honest. They always deliver exactly what they promise, with no excuses and no unnecessary delays.",
    author: "Philip Medrano",
    org: "Google Review",
    project: "Verified",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-10 sm:mb-14">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Trusted by"
              title={
                <>
                  What clients <span className="italic text-accent">consistently</span> tell us.
                </>
              }
            />
          </div>
          <div className="lg:col-span-5 lg:pt-6 flex flex-col gap-2 text-[14px] text-muted">
            <div className="flex items-center gap-2">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 text-accent" />
                ))}
              </span>
              <span className="text-ink font-medium">5.0</span>
              <span>· Google Reviews</span>
            </div>
            <p>Reliability, technical depth, and the ability to solve in real-time.</p>
            <div className="mt-4 flex items-center gap-3 lg:hidden text-muted-2 text-[10px] font-mono uppercase tracking-[0.2em] font-medium">
               <span className="flex-1 h-px bg-line" />
               Swipe for more
               <svg className="size-3 animate-pulse text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </div>
          </div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 gap-6 pb-8 lg:pb-0">
          {items.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="w-[85vw] sm:w-[45vw] lg:w-auto shrink-0 snap-center rounded-2xl border border-line bg-white p-7 lg:p-8 flex flex-col"
            >
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="size-3.5" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-[20px] sm:text-[22px] leading-[1.25] tracking-tight text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto pt-8 flex items-center justify-between text-[12.5px]">
                <div>
                  <div className="font-medium text-ink">{t.author}</div>
                  <div className="text-muted">{t.org}</div>
                </div>
                <div className="text-muted-2 font-mono uppercase tracking-[0.14em]">
                  {t.project}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
