"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";
    
    const t1 = setTimeout(() => setStep(1), 300);
    const t2 = setTimeout(() => setStep(2), 800);
    const t3 = setTimeout(() => setStep(3), 1500);
    const t4 = setTimeout(() => {
      setStep(4);
      setTimeout(() => {
        document.body.style.overflow = "unset";
        onComplete();
      }, 400); // Flash duration
    }, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {step < 4 && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeIn" } }}
          className="fixed inset-0 z-[9999] bg-ink flex flex-col justify-center items-center text-[#2fba82] font-mono text-sm sm:text-base px-6"
        >
          <div className="max-w-md w-full flex flex-col gap-2">
             {step >= 1 && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                   {">"} INITIALIZING GOGREEN INFRASTRUCTURE...
                </motion.div>
             )}
             {step >= 2 && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                   {">"} CONNECTING TO GRID <span className="animate-pulse">_</span>
                </motion.div>
             )}
             {step >= 3 && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-[#2fba82]">
                   {">"} SYNCING TELEMETRY [||||||||||] 100%
                </motion.div>
             )}
          </div>
        </motion.div>
      )}

      {/* The Flash */}
      {step === 4 && (
         <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0, transition: { duration: 1 } }}
           className="fixed inset-0 z-[10000] bg-white pointer-events-none"
         />
      )}
    </AnimatePresence>
  );
}
