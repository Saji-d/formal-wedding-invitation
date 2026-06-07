"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";

export default function Events() {
  const events = [weddingConfig.events.mehendi, weddingConfig.events.wedding];

  return (
    <section className="py-24 px-4 bg-[var(--color-champagne)] dark:bg-[var(--color-burgundy-900)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-great-vibes text-[var(--color-burgundy-900)] dark:text-[var(--color-ivory)] mb-4">
            Wedding Events
          </h2>
          <div className="w-16 h-[1px] bg-[var(--color-gold-400)] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event, index) => {
            const dateObj = new Date(event.date);
            const timeString = dateObj.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            });

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass bg-white/40 dark:bg-black/20 p-8 md:p-12 rounded-3xl border border-white/50 dark:border-white/10 text-center relative overflow-hidden group"
              >
                {/* Decorative border */}
                <div className="absolute inset-2 border border-[var(--color-gold-400)] opacity-20 rounded-2xl pointer-events-none group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <h3 className="text-3xl md:text-4xl font-playfair text-[var(--color-burgundy-800)] dark:text-[var(--color-champagne)] mb-6">
                  {event.name}
                </h3>

                <div className="space-y-4 font-cormorant text-xl text-gray-800 dark:text-gray-200">
                  <div className="flex items-center justify-center space-x-3">
                    <HiOutlineCalendar className="w-6 h-6 text-[var(--color-gold-500)]" />
                    <span>{event.displayDate}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <HiOutlineClock className="w-6 h-6 text-[var(--color-gold-500)]" />
                    <span>{timeString}</span>
                  </div>
                </div>

                <motion.div 
                  className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <p className="font-cormorant italic">
                    Dress Code: Traditional / Formal
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
