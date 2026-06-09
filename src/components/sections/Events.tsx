"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { HiOutlineClock, HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";

export default function Events() {
  const wedding = weddingConfig.events.wedding;

  return (
    <section className="py-32 lg:py-24 px-4 bg-[var(--background)] relative overflow-hidden z-10 border-t border-[var(--color-gold-400)]/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-great-vibes text-[var(--color-burgundy-900)] dark:text-[var(--color-ivory)] mb-4">
            The Celebration
          </h2>
          <div className="w-16 h-[1px] bg-[var(--color-gold-400)] mx-auto mb-6"></div>
          <p className="font-cormorant text-xl text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em]">
            Join us for our special day
          </p>
        </motion.div>

        <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-2xl glass p-8 md:p-12 rounded-3xl border border-[var(--color-gold-400)]/20 shadow-2xl relative group overflow-hidden text-center"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold-400)] opacity-5 blur-3xl -mr-16 -mt-16 group-hover:opacity-10 transition-opacity" />
              
              <h3 className="text-4xl md:text-5xl font-playfair text-[var(--color-burgundy-800)] dark:text-[var(--color-champagne)] mb-8">
                {wedding.name}
              </h3>

              <div className="space-y-6 flex flex-col items-center">
                <div className="flex items-center gap-4 text-xl font-cormorant text-gray-700 dark:text-gray-300">
                  <HiOutlineCalendar className="text-[var(--color-gold-500)] w-6 h-6" />
                  <span>{wedding.displayDate}</span>
                </div>
                
                <div className="flex items-center gap-4 text-xl font-cormorant text-gray-700 dark:text-gray-300">
                  <HiOutlineClock className="text-[var(--color-gold-500)] w-6 h-6" />
                  <span>7:00 PM onwards</span>
                </div>

                <div className="flex items-center gap-4 text-xl font-cormorant text-gray-700 dark:text-gray-300 max-w-md">
                  <HiOutlineLocationMarker className="text-[var(--color-gold-500)] w-6 h-6 flex-shrink-0" />
                  <span>{weddingConfig.venue.name}<br />{weddingConfig.venue.address}</span>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-[var(--color-gold-400)]/20">
                <p className="font-playfair italic text-[var(--color-gold-500)]">
                  Dinner will be served following the ceremony
                </p>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
