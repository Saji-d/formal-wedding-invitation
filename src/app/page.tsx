"use client";

import { useEffect, useState } from "react";
import OpeningScreen from "@/components/sections/OpeningScreen";
import BackgroundEffects from "@/components/layout/BackgroundEffects";
import MusicPlayer from "@/components/ui/MusicPlayer";
import Hero from "@/components/sections/Hero";
import LoveStory from "@/components/sections/LoveStory";
import Events from "@/components/sections/Events";
import Countdown from "@/components/sections/Countdown";
import Venue from "@/components/sections/Venue";
import Gallery from "@/components/sections/Gallery";
import ScratchCard from "@/components/sections/ScratchCard";
import GuestWishes from "@/components/sections/GuestWishes";
import RSVP from "@/components/sections/RSVP";
import IslamicBlessing from "@/components/sections/IslamicBlessing";
import Closing from "@/components/sections/Closing";
import { HiArrowUp } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show when user scrolls beyond 800px OR 50% of the page
      if (scrollY > 800 || scrollY > (documentHeight - windowHeight) / 2) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden">
      <MusicPlayer />
      {!hasEntered && <OpeningScreen onComplete={() => setHasEntered(true)} />}

      {hasEntered && (
        <div className="opacity-0 animate-[fadeIn_0.5s_ease-in-out_forwards]">
          <BackgroundEffects />
          
          <Hero />
          <IslamicBlessing />
          <ScratchCard />
          <LoveStory />
          <Countdown />
          <Events />
          <Venue />
          <Gallery />
          <GuestWishes />
          <RSVP />
          <Closing />

          {/* Back to top button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                onClick={scrollToTop}
                className="fixed bottom-10 right-6 z-50 p-4 rounded-full glass bg-[var(--color-burgundy-900)] text-[var(--color-gold-400)] shadow-2xl hover:bg-[var(--color-burgundy-800)] transition-all duration-300 border border-[var(--color-gold-400)]/30 group"
                aria-label="Scroll to top"
              >
                <HiArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      )}
    </main>
  );
}
