"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function Quotes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % weddingConfig.quotes.length);
    }, 6000); // 6 second rotation for elegant reading pace
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-[var(--color-burgundy-900)] text-[var(--color-champagne)] border-y border-[var(--color-gold-400)]/10">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      
      {/* 
          STABILIZED LAYOUT CONTAINER
          Fixed height ensures the section never jumps or resizes during transitions.
          Reserve enough space for the longest formal quotes.
      */}
      <div className="max-w-4xl mx-auto relative z-10 text-center h-[280px] md:h-[220px] flex flex-col items-center justify-center">
        
        {/* Fixed Position Top Quotation Mark */}
        <div className="h-10 md:h-12 flex items-center justify-center shrink-0">
          <ImQuotesLeft className="text-3xl md:text-5xl text-[var(--color-gold-400)] opacity-50" />
        </div>
        
        {/* Fixed Height Quote Content Area - Vertically Centered */}
        <div className="relative w-full flex-grow flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center text-xl md:text-3xl font-playfair italic leading-relaxed text-[var(--color-ivory)] drop-shadow-sm px-6 md:px-12"
            >
              {weddingConfig.quotes[currentIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Fixed Position Bottom Quotation Mark */}
        <div className="h-10 md:h-12 flex items-center justify-center shrink-0">
          <ImQuotesRight className="text-3xl md:text-5xl text-[var(--color-gold-400)] opacity-50" />
        </div>
        
      </div>
    </section>
  );
}
