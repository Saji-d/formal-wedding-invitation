"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";

export default function Countdown() {
  const targetDate = new Date(weddingConfig.events.wedding.date);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      if (now >= targetDate) return;

      setTimeLeft({
        days: differenceInDays(targetDate, now),
        hours: differenceInHours(targetDate, now) % 24,
        minutes: differenceInMinutes(targetDate, now) % 60,
        seconds: differenceInSeconds(targetDate, now) % 60,
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 px-4 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-7xl font-great-vibes text-[var(--color-ivory)] drop-shadow-[0_2px_10px_rgba(255,255,240,0.3)] font-medium mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          The Beginning of Eternity
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-24 h-24 md:w-36 md:h-36 rounded-full flex flex-col items-center justify-center glass bg-white/60 dark:bg-black/40 relative group hover:scale-105 transition-transform duration-500 shadow-[0_4px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.25)] border border-[var(--color-gold-400)]/30"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-[-4px] rounded-full border border-[var(--color-gold-400)]/40 group-hover:border-[var(--color-gold-400)]/60 transition-colors duration-500"></div>
              {/* Inner ring animation */}
              <div className="absolute inset-2 rounded-full border border-dashed border-[var(--color-gold-500)] opacity-40 group-hover:opacity-70 animate-[spin_20s_linear_infinite] transition-opacity duration-500"></div>
              
              <span className="text-4xl md:text-6xl font-playfair font-bold text-[var(--color-burgundy-800)] dark:text-[var(--color-champagne)] drop-shadow-sm group-hover:scale-110 transition-transform duration-500 z-10">
                {block.value.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] md:text-sm tracking-[0.2em] uppercase font-cormorant text-[var(--color-gold-500)] mt-1 md:mt-2 z-10 font-medium">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
