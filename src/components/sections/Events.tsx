"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { HiOutlineClock, HiOutlineCalendar } from "react-icons/hi";
import { GiCastle } from "react-icons/gi";

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

        <motion.div 
          className="flex justify-center mb-8 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Luxury Ornament */}
          <div className="relative group">
            <svg width="300" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]">
              {/* Central Ornamental Element */}
              <motion.path 
                d="M150 10 L155 25 L170 30 L155 35 L150 50 L145 35 L130 30 L145 25 Z" 
                fill="url(#goldGradient)"
                animate={{ 
                  filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Decorative Swirls */}
              <path d="M120 30 Q 80 30, 40 30 T 10 30" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.6"/>
              <path d="M180 30 Q 220 30, 260 30 T 290 30" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.6"/>
              <path d="M135 30 Q 140 20, 150 20 T 165 30" stroke="url(#goldGradient)" strokeWidth="1.5" opacity="0.8"/>
              <path d="M135 30 Q 140 40, 150 40 T 165 30" stroke="url(#goldGradient)" strokeWidth="1.5" opacity="0.8"/>
              
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#AA7C11" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#AA7C11" />
                </linearGradient>
              </defs>
            </svg>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            />
          </div>
        </motion.div>

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

                <div className="flex flex-col items-center max-w-md mt-6">
                  <motion.div 
                    className="mb-4 text-[var(--color-gold-500)]"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <GiCastle className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]" />
                  </motion.div>
                  <div className="mb-2">
                    <span className="text-xl md:text-2xl font-playfair font-medium text-gray-800 dark:text-[var(--color-champagne)] block">
                      {weddingConfig.venue.name}
                    </span>
                    <span className="text-base md:text-lg font-playfair text-gray-600 dark:text-[var(--color-champagne)]/70 block mt-1">
                      ({(weddingConfig.venue as any).nameBn})
                    </span>
                  </div>
                  <span className="text-sm md:text-base font-cormorant text-gray-500 dark:text-gray-400 tracking-wide">
                    House 6, Road 5, Block A, Mirpur, Dhaka 1216
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--color-gold-400)]/20">
                <p className="font-playfair italic text-[var(--color-gold-500)] text-lg">
                  Lunch will be served following the ceremony (2:00 PM)
                </p>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
