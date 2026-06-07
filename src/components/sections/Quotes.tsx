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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-[var(--color-burgundy-900)] text-[var(--color-champagne)]">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto relative z-10 text-center min-h-[300px] flex flex-col justify-center items-center">
        <ImQuotesLeft className="text-4xl md:text-6xl text-[var(--color-gold-400)] opacity-50 mb-8" />
        
        <div className="relative w-full h-32 md:h-40">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl font-playfair italic absolute w-full inset-0 flex items-center justify-center"
            >
              "{weddingConfig.quotes[currentIndex]}"
            </motion.p>
          </AnimatePresence>
        </div>

        <ImQuotesRight className="text-4xl md:text-6xl text-[var(--color-gold-400)] opacity-50 mt-8" />
      </div>
    </section>
  );
}
