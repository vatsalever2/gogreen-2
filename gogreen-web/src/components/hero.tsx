"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "@/components/icons";
import { LoadingScreen } from "@/components/loading-screen";
import Image from "next/image";
import Link from "next/link";

// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------

const HERO_IMAGES = [
  {
    src: "/images/project-2.jpg",
    alt: "Commercial Solar Farm",
    tag: "UTILITY SCALE",
    metric: "12 MW",
    desc: "High-yield monocrystalline layout."
  },
  {
    src: "/images/working-1.jpg",
    alt: "Solar Engineering Team",
    tag: "ENGINEERING",
    metric: "Tier-1 CAD",
    desc: "In-house structural & electrical."
  },
  {
    src: "/images/working-2.jpg",
    alt: "Solar Panel Array",
    tag: "INSTALLATION",
    metric: "25 Yrs",
    desc: "Flawless commercial-grade execution."
  },
];

// ----------------------------------------------------------------------
// MAIN HERO
// ----------------------------------------------------------------------

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      {/* 
        Hero perfectly fills the viewport minus the scrolling strip (~60px). 
        pt-20 offsets the navbar to ensure true visual centering.
      */}
      <section className={`relative w-full min-h-[calc(100dvh-64px)] xl:h-[calc(100dvh-136px)] bg-ink flex items-center justify-center pt-12 pb-12 xl:pt-0 xl:pb-0 overflow-hidden ${!isLoaded ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}`}>
        
        {/* Premium Technical Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-ink">
          
          {/* Ambient Image Blur */}
          <AnimatePresence mode="wait">
             <motion.div
               key={activeIndex}
               initial={{ opacity: 0, scale: 1.1 }} 
               animate={{ opacity: 0.3, scale: 1 }} 
               exit={{ opacity: 0 }}
               transition={{ duration: 1.5 }}
               className="absolute inset-0"
             >
                <Image 
                  src={HERO_IMAGES[activeIndex].src} 
                  fill 
                  className="object-cover blur-[80px] saturate-150" 
                  alt="" 
                />
             </motion.div>
          </AnimatePresence>

          {/* Deep Dark Overlay */}
          <div className="absolute inset-0 bg-ink/80" />

          {/* Edge Vignette for depth (moved behind details) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#101010_100%)]" />

          {/* Massive Outline Text Watermark */}
          <div
            className="absolute top-1/2 -translate-y-1/2 left-[-2%] text-[40vw] sm:text-[28vw] font-display font-bold leading-none text-transparent tracking-tighter select-none"
            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.06)' }}
            aria-hidden="true"
          >
            EPC
          </div>

          {/* Subtle Engineering Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:100px_100px]" />
          
        </div>

        {/* 
          Grid layout perfectly centered 
        */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 xl:px-12 grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-center">

           {/* LEFT CONTENT: Typography */}
           <div className="col-span-1 xl:col-span-5 flex flex-col items-start">
             <motion.div 
               initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs font-mono font-medium tracking-[0.2em] text-white uppercase mb-6 shadow-soft"
             >
                <span className="size-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#1e7f5c]" />
                Visual-First Engineering
             </motion.div>

             <motion.h1 
               initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 0.2 }}
               className="text-[40px] sm:text-[60px] md:text-[70px] xl:text-[80px] font-display font-semibold tracking-tighter leading-[0.98] text-white text-balance"
             >
                Solar EPC & installation, <br className="hidden xl:block"/> <span className="text-[#2fba82]">engineered.</span>
             </motion.h1>
             
             <motion.p
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
               className="mt-6 text-white/85 max-w-md text-base sm:text-lg leading-relaxed font-medium"
             >
               We design, procure, and construct premium utility-scale solar farms across the Mid-Atlantic.
             </motion.p>

             <motion.div 
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
               className="mt-10"
             >
               <Link href="/get-assessment" className="flex items-center justify-center w-max gap-2 h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-[#0f5038] text-white text-sm sm:text-base font-medium hover:bg-accent-2 hover:-translate-y-0.5 transition-all shadow-[0_0_20px_rgba(30,127,92,0.4)] group">
                 Get a Free Assessment
                 <ArrowUpRight className="size-4 text-white/85 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
               </Link>
             </motion.div>
           </div>

           {/* RIGHT CONTENT: Desktop Accordion */}
           <div className="hidden xl:flex col-span-7 h-[600px] xl:h-[70vh] max-h-[800px] gap-3">
              {HERO_IMAGES.map((img, idx) => (
                <motion.div
                  key={idx}
                  onHoverStart={() => setActiveIndex(idx)}
                  animate={{ 
                    flex: activeIndex === idx ? 6 : 1,
                    opacity: 1
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
                  className="relative h-full rounded-[32px] overflow-hidden cursor-pointer border border-white/5 bg-black"
                >
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    fill 
                    className="object-cover" 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={idx === 0}
                  />
                  
                  {/* Overlay for unselected panels to make them recede visually */}
                  <motion.div 
                    animate={{ opacity: activeIndex === idx ? 0 : 0.6 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-ink pointer-events-none"
                  />

                  {/* Gradient for text readability on active panel */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/50 to-transparent pointer-events-none" />

                  {/* Vertical title for unselected panels */}
                  <AnimatePresence>
                    {activeIndex !== idx && (
                      <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        aria-hidden="true"
                      >
                         <span className="text-white/75 font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase -rotate-90 whitespace-nowrap">
                           {img.tag}
                         </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Full Details for Active Panel */}
                  <AnimatePresence>
                    {activeIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.15, duration: 0.4 }}
                        className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8"
                      >
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 lg:p-6 rounded-3xl text-white shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                           <div className="flex items-center gap-2 mb-3" aria-hidden="true">
                              <span className="size-1.5 bg-accent rounded-full" />
                              <div className="text-[10px] text-accent tracking-[0.3em] font-mono font-bold uppercase">
                                {img.tag}
                              </div>
                           </div>
                           <div className="font-display font-semibold text-2xl lg:text-3xl xl:text-4xl tracking-tight mb-2">
                             {img.metric}
                           </div>
                           <div className="text-xs sm:text-sm text-white/85">
                             {img.desc}
                           </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              ))}
           </div>

           {/* RIGHT CONTENT: Mobile/Tablet Horizontal Scroll Gallery */}
           <div role="region" aria-label="Project gallery" className="block xl:hidden col-span-1 w-[100vw] -mx-6 mt-6">
             <div className="overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex gap-4 px-6 w-max pb-8">
                 {HERO_IMAGES.map((img, idx) => (
                   <div
                     key={idx}
                     tabIndex={0}
                     role="img"
                     aria-label={`${img.tag}: ${img.metric} — ${img.desc}`}
                     className="relative w-[85vw] sm:w-[60vw] lg:w-[45vw] h-[45vh] lg:h-[55vh] rounded-[32px] overflow-hidden snap-center border border-white/10 shrink-0 shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                   >
                      <Image 
                        src={img.src} 
                        alt={img.alt} 
                        fill 
                        className="object-cover" 
                        sizes="(max-width: 1024px) 100vw"
                        priority={idx === 0}
                      />
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/80 to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-6 left-6 right-6">
                         <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl text-white">
                            <div className="text-[10px] text-accent tracking-[0.2em] font-mono font-bold uppercase mb-1" aria-hidden="true">
                              {img.tag}
                            </div>
                            <div className="font-display font-semibold text-2xl tracking-tight mb-1">
                              {img.metric}
                           </div>
                           <div className="text-xs text-white/85 leading-relaxed">
                             {img.desc}
                           </div>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           </div>

        </div>
      </section>
    </>
  )
}
