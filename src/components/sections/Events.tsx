"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { HiOutlineClock, HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";

export default function Events() {
  const wedding = weddingConfig.events.wedding;

  return (
    <section className="py-20 lg:py-16 px-4 bg-[var(--background)] relative overflow-hidden z-10 border-t border-[var(--color-gold-400)]/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl md:text-6xl font-great-vibes text-[var(--color-burgundy-900)] dark:text-[var(--color-ivory)] mb-4">
            The Celebration
          </h2>
          <div className="w-16 h-[1px] bg-[var(--color-gold-400)] mx-auto mb-6"></div>
          <p className="font-cormorant text-xl text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em]">
            Join us for our special day
          </p>
        </motion.div>

        <div className="flex justify-center mb-8 opacity-90">
          <svg width="240" height="40" viewBox="0 0 240 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20 Q 60 20, 105 20 T 115 20" stroke="var(--color-gold-400)" strokeWidth="1.5" fill="none"/>
            <path d="M220 20 Q 180 20, 135 20 T 125 20" stroke="var(--color-gold-400)" strokeWidth="1.5" fill="none"/>
            {/* Center diamond/flower */}
            <path d="M120 5 L125 15 L135 20 L125 25 L120 35 L115 25 L105 20 L115 15 Z" fill="var(--color-gold-400)" opacity="0.8"/>
            {/* Flourishes */}
            <path d="M90 20 Q 100 10, 105 20" stroke="var(--color-gold-400)" strokeWidth="1" fill="none"/>
            <path d="M150 20 Q 140 30, 135 20" stroke="var(--color-gold-400)" strokeWidth="1" fill="none"/>
            <circle cx="120" cy="20" r="3" fill="var(--background)" />
          </svg>
        </div>

        <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-2xl glass p-6 md:p-10 rounded-3xl border border-[var(--color-gold-400)]/20 shadow-2xl relative group overflow-hidden text-center"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold-400)] opacity-5 blur-3xl -mr-16 -mt-16 group-hover:opacity-10 transition-opacity" />
              
              <h3 className="text-3xl md:text-4xl font-playfair text-[var(--color-burgundy-800)] dark:text-[var(--color-champagne)] mb-6">
                {wedding.name}
              </h3>

              <div className="space-y-4 flex flex-col items-center">
                <div className="flex items-center gap-4 text-xl md:text-2xl font-playfair font-medium tracking-wide text-gray-700 dark:text-gray-300">
                  <HiOutlineCalendar className="text-[var(--color-gold-500)] w-6 h-6" />
                  <span>{wedding.displayDate}</span>
                </div>
                
                <div className="flex items-center gap-4 text-xl md:text-2xl font-playfair font-medium tracking-wide text-gray-700 dark:text-gray-300">
                  <HiOutlineClock className="text-[var(--color-gold-500)] w-6 h-6" />
                  <span>1:30 PM onwards</span>
                </div>

                <div className="flex items-center gap-4 text-lg md:text-xl font-cormorant text-gray-700 dark:text-gray-300 max-w-md mt-2">
                  <HiOutlineLocationMarker className="text-[var(--color-gold-500)] w-6 h-6 flex-shrink-0" />
                  <span>{weddingConfig.venue.name}<br /><span className="text-sm opacity-80">({(weddingConfig.venue as any).nameBn})</span><br />{weddingConfig.venue.address}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--color-gold-400)]/20">
                <p className="font-playfair italic text-[var(--color-gold-500)]">
                  Lunch will be served following the ceremony (2:00 PM)
                </p>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
