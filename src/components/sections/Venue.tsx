"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { HiOutlineMap, HiOutlineLocationMarker } from "react-icons/hi";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Venue() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openDirections = () => {
    const { googleMapsUrl } = weddingConfig.venue;
    if (googleMapsUrl) {
      window.open(googleMapsUrl, "_blank");
    } else {
      const { lat, lng } = weddingConfig.venue.coordinates;
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank");
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-24 pb-48 lg:pt-20 lg:pb-24 bg-[var(--color-champagne)] dark:bg-[var(--color-burgundy-900)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 w-full mt-4 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-10 lg:mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-great-vibes text-[var(--color-ivory)] drop-shadow-[0_2px_10px_rgba(255,255,240,0.3)] font-medium mb-4">
            The Venue
          </h2>
          <div className="w-16 h-[1px] bg-[var(--color-gold-400)]/50 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left order-1 lg:order-1"
          >
            <div>
              <div className="mb-4">
                <h3 className="text-[1.5rem] sm:text-[1.75rem] lg:text-3xl font-playfair font-bold text-[var(--color-champagne)] leading-tight whitespace-nowrap lg:whitespace-normal">
                  {weddingConfig.venue.name}
                </h3>
                <p className="text-base lg:text-lg font-playfair text-[var(--color-champagne)] mt-2">
                  ({(weddingConfig.venue as any).nameBn})
                </p>
              </div>
              <p className="font-cormorant text-sm lg:text-base text-gray-500 dark:text-gray-400 flex items-center justify-center lg:justify-start gap-2 tracking-[0.1em]">
                <HiOutlineLocationMarker className="text-[var(--color-gold-500)]/60 flex-shrink-0" />
                <span>{weddingConfig.venue.address}</span>
              </p>
            </div>

            <div className="font-cormorant text-[0.92rem] sm:text-base lg:text-lg space-y-0.5">
              <p className="text-[var(--color-gold-400)] font-medium tracking-wide whitespace-nowrap lg:whitespace-normal">
                We can't wait to celebrate with you at this beautiful location.
              </p>
              <p className="text-[var(--color-gold-400)] font-medium tracking-wide whitespace-nowrap lg:whitespace-normal">
                Ample parking is available for all guests.
              </p>
            </div>

            <motion.button
              onClick={openDirections}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-3 px-8 lg:px-10 py-4 bg-[var(--color-burgundy-800)] text-[var(--color-champagne)] rounded-full transition-all duration-500 font-cormorant tracking-[0.2em] uppercase text-xs lg:text-sm shadow-[0_10px_30px_rgba(128,0,32,0.3)] group overflow-hidden border border-[var(--color-gold-400)]/30 hover:border-[var(--color-gold-500)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-gold-400)]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <HiOutlineMap className="w-4 h-4 lg:w-5 lg:h-5 text-[var(--color-gold-400)] group-hover:text-[var(--color-gold-300)] transition-colors" />
              <span className="relative z-10 group-hover:text-[var(--color-ivory)] transition-colors">Get Directions</span>
              
              {/* Subtle Animated Border Glow */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_20px_rgba(212,175,55,0.2)]" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center w-full h-full order-2 lg:order-2"
          >
            <div className="relative w-full lg:w-[85%] aspect-[4/3] lg:aspect-square rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-gold-400)]/20 group">
              <Image
                src="/images/gallery/BilashBhaban.webp"
                alt="Venue"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-[var(--color-ivory)] font-playfair text-xl">{weddingConfig.venue.name}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
