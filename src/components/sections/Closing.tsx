"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { HiHeart } from "react-icons/hi";

export default function Closing() {
  return (
    <section className="py-32 px-4 bg-[var(--background)] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          <HiHeart className="w-16 h-16 text-[var(--color-rosegold)] mx-auto animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-4xl font-playfair text-[var(--color-burgundy-800)] dark:text-[var(--color-champagne)] leading-relaxed"
        >
          Your presence is the greatest gift.
          <br />
          We look forward to celebrating with you.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-6xl md:text-9xl font-great-vibes text-[var(--color-gold-500)] drop-shadow-md"
        >
          {weddingConfig.couple.displayName1} & {weddingConfig.couple.displayName2}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="pt-12"
        >
          <div className="inline-block px-16 py-8 border-y border-[var(--color-gold-400)]/40 relative group">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-[var(--color-gold-400)]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <p className="font-playfair text-xl md:text-2xl tracking-[0.4em] text-[var(--color-gold-500)] mb-4 uppercase">
                Friday
            </p>
            <p className="font-playfair text-4xl md:text-7xl font-bold tracking-widest bg-gradient-to-b from-[#F7E7CE] via-[#D4AF37] to-[#AA7C11] bg-clip-text text-transparent drop-shadow-sm">
                17 JULY 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
