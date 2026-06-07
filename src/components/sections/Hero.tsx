"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { HiChevronDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <motion.div
        className="z-10 text-center space-y-6 px-4 max-w-4xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
      >
        <p className="text-sm md:text-lg font-cormorant tracking-[0.3em] uppercase text-[var(--color-gold-500)]">
          You are invited
        </p>

        <h1 className="text-7xl md:text-9xl font-great-vibes text-[var(--color-burgundy-900)] dark:text-[var(--color-ivory)] drop-shadow-sm">
          {weddingConfig.couple.displayName1}
          <span className="block text-5xl md:text-7xl text-[var(--color-rosegold)] my-2">&</span>
          {weddingConfig.couple.displayName2}
        </h1>

        <div className="w-24 h-[1px] bg-[var(--color-gold-400)] mx-auto my-8"></div>

        <p className="text-xl md:text-3xl font-playfair italic text-[var(--color-burgundy-800)] dark:text-[var(--color-champagne)] leading-relaxed">
          Request the honor of your presence <br className="hidden md:block" /> at our wedding celebration.
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <span className="text-xs tracking-widest uppercase mb-2 font-cormorant text-[var(--color-gold-500)]">
          Scroll to discover
        </span>
        <HiChevronDown className="w-6 h-6 text-[var(--color-gold-500)]" />
      </motion.div>
    </section>
  );
}
