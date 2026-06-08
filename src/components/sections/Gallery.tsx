"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import Image from "next/image";
import { HiX } from "react-icons/hi";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 px-4 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-great-vibes text-[var(--color-burgundy-900)] dark:text-[var(--color-ivory)] mb-4">
            Moments Captured
          </h2>
          <div className="w-16 h-[1px] bg-[var(--color-gold-400)] mx-auto"></div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {weddingConfig.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg border border-white/10">
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <p className="text-[var(--color-ivory)] font-great-vibes text-2xl drop-shadow-md">
                    {image.caption}
                  </p>
                  <div className="mt-4 w-10 h-[1px] bg-[var(--color-gold-400)]"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-[var(--color-ivory)] hover:text-[var(--color-gold-400)] transition-colors p-2 z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <HiX className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-auto max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage}
                  alt="Selected gallery image"
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
