"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export default function Gallery() {
  return (
    <section className="py-24 px-4 bg-[var(--color-champagne)] dark:bg-[var(--color-burgundy-900)] overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
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

        <div className="w-full max-w-[450px] relative">
          <Swiper
            modules={[EffectFade, Mousewheel, Keyboard]}
            effect={"fade"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            mousewheel={{
              forceToAxis: true,
            }}
            keyboard={{
                enabled: true,
            }}
            className="w-full"
          >
            {weddingConfig.gallery.map((story, index) => (
              <SwiperSlide key={index} className="flex flex-col items-center">
                <motion.div 
                    className="bg-white p-4 pb-12 shadow-2xl rounded-sm border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-500"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden mb-6 shadow-inner bg-gray-50">
                    <Image
                      src={story.src}
                      alt={story.caption}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 450px"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-great-vibes text-2xl text-gray-800 italic">
                      {story.caption}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Subtle instructions for first-time interaction */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            className="text-center mt-8 font-cormorant text-sm uppercase tracking-widest text-gray-500"
          >
            Swipe or use mouse wheel to turn pages
          </motion.p>
        </div>
      </div>

      <style jsx global>{`
        /* Hide all swiper navigation artifacts */
        .swiper-button-next, 
        .swiper-button-prev, 
        .swiper-pagination {
          display: none !important;
        }
        
        .swiper-fade .swiper-slide {
            pointer-events: none;
            transition-property: opacity;
        }
        
        .swiper-fade .swiper-slide-active {
            pointer-events: auto;
        }
      `}</style>
    </section>
  );
}
