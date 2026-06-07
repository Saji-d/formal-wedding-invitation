"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { HiHeart } from "react-icons/hi";

export default function Closing() {
  return (
    <section className="py-32 px-4 bg-[var(--background)] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
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
          className="text-6xl md:text-8xl font-great-vibes text-[var(--color-gold-500)]"
        >
          {weddingConfig.couple.displayName1} & {weddingConfig.couple.displayName2}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-cormorant tracking-[0.2em] uppercase text-gray-500 pt-12"
        >
          {weddingConfig.events.wedding.displayDate}
        </motion.p>
      </div>
    </section>
  );
}
