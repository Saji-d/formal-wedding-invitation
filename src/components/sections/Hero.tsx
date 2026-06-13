"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { HiChevronDown } from "react-icons/hi";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen lg:h-[110vh] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Blurred Background for "Side Fill" - used to avoid harsh black bars if aspect ratio is extreme */}
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src="/images/gallery/hero.webp"
            alt="Wedding Hero Background"
            fill
            className="object-cover blur-3xl opacity-30 scale-110"
            priority
          />
        </div>
        
        {/* Main Hero Image - Using object-cover with tuned position for desktop to show the couple properly */}
        <Image
          src="/images/gallery/hero.webp"
          alt="Wedding Hero"
          fill
          className="object-cover brightness-[0.85] contrast-[1.1] object-center lg:object-[center_40%]"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Elegant Overlay */}
        <div 
          className="absolute inset-0 z-10" 
          style={{ 
            background: "linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.55))" 
          }}
        ></div>
      </div>

      <motion.div
        className="z-20 text-center max-w-4xl -mt-20 md:mt-0 lg:-mt-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      >
        <p 
          className="text-xs md:text-sm font-cormorant tracking-[0.4em] uppercase text-[#ffdf8a] mb-12 md:mb-12 lg:mb-10 opacity-100 font-bold"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
        >
          You are invited
        </p>

        <h1 
          className="text-6xl md:text-9xl font-great-vibes text-[var(--color-ivory)] leading-tight mb-8 md:mb-12 lg:mb-10 drop-shadow-[0_4px_12px_rgba(212,175,55,0.3)]"
          style={{ textShadow: "0 0 20px rgba(212,175,55,0.2), 0 0 5px rgba(212,175,55,0.1)" }}
        >
          <span className="relative inline-block">
            {weddingConfig.couple.displayName1}
            <span className="absolute inset-0 blur-[2px] opacity-30 bg-clip-text text-transparent bg-gradient-to-b from-white via-[var(--color-gold-400)] to-transparent select-none pointer-events-none">
              {weddingConfig.couple.displayName1}
            </span>
          </span>
          <span className="block text-4xl md:text-7xl text-[var(--color-gold-400)] my-4 md:my-6 drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">&</span>
          <span className="relative inline-block">
            {weddingConfig.couple.displayName2}
            <span className="absolute inset-0 blur-[2px] opacity-30 bg-clip-text text-transparent bg-gradient-to-b from-white via-[var(--color-gold-400)] to-transparent select-none pointer-events-none">
              {weddingConfig.couple.displayName2}
            </span>
          </span>
        </h1>

        <div className="w-20 md:w-32 h-[1px] bg-[var(--color-gold-400)] mx-auto mb-8 md:mb-12 lg:mb-10 opacity-70"></div>

        <p 
          className="text-xl md:text-3xl font-playfair italic text-[var(--color-champagne)] leading-relaxed px-2 drop-shadow-lg"
          style={{ textShadow: "0 4px 16px rgba(0,0,0,0.6)" }}
        >
          Request the honor of your presence <br className="hidden md:block" /> at our wedding celebration.
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-28 md:bottom-12 lg:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <span 
          className="text-[10px] md:text-xs tracking-widest uppercase mb-2 font-cormorant text-[var(--color-gold-400)] lg:hidden"
          style={{ textShadow: "0 4px 16px rgba(0,0,0,0.6)" }}
        >
          Scroll to discover
        </span>
        <HiChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-gold-400)]" />
      </motion.div>
    </section>
  );
}
