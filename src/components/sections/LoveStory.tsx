"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { HiHeart } from "react-icons/hi";

export default function LoveStory() {
  return (
    <section className="py-24 px-4 relative bg-[var(--background)] z-10 border-t border-[var(--color-gold-400)]/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-great-vibes text-[var(--color-burgundy-900)] dark:text-[var(--color-ivory)] mb-4">
            Our Love Story
          </h2>
          <div className="w-16 h-[1px] bg-[var(--color-gold-400)] mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-[var(--color-gold-400)] to-transparent opacity-50"></div>

          {weddingConfig.timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center justify-between w-full mb-8 lg:mb-8 ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="w-5/12"></div>
              
              <div className="w-2/12 flex justify-center z-10 relative">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--background)] border border-[var(--color-gold-400)] flex items-center justify-center shadow-lg">
                   <HiHeart className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-rosegold)]" />
                </div>
              </div>

              <div className="w-5/12 glass p-4 lg:p-5 rounded-2xl relative flex flex-col items-center lg:min-h-0">
                <h3 className="text-xl lg:text-xl font-playfair text-[var(--color-burgundy-800)] dark:text-[var(--color-champagne)] mb-1 lg:mb-1 text-center w-full">
                  {item.title}
                </h3>
                <div className="flex justify-center w-full mb-2 lg:mb-2">
                  <span className="inline-block px-3 py-1 bg-[var(--color-gold-400)] text-white text-[10px] md:text-xs font-cormorant tracking-widest uppercase rounded-full">
                    {item.date}
                  </span>
                </div>
                <p className="font-cormorant text-base lg:text-base text-opacity-80 text-left w-full leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing decorative element */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="w-px h-16 bg-gradient-to-b from-[var(--color-gold-400)] to-transparent mb-4 opacity-50"></div>
          <HiHeart className="text-[var(--color-rosegold)] w-6 h-6 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
