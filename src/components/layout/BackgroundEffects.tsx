"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BackgroundEffects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      // Create petals
      for (let i = 0; i < 30; i++) {
        const petal = document.createElement("div");
        petal.className = "petal";
        
        // Randomize initial properties
        gsap.set(petal, {
          x: Math.random() * window.innerWidth,
          y: -50 - Math.random() * 100,
          rotation: Math.random() * 360,
          scale: 0.5 + Math.random() * 0.8,
          opacity: 0.4 + Math.random() * 0.4,
        });

        container.appendChild(petal);

        // Animate
        gsap.to(petal, {
          y: window.innerHeight + 100,
          x: `+=${-50 + Math.random() * 100}`,
          rotation: `+=${180 + Math.random() * 180}`,
          duration: 10 + Math.random() * 15,
          repeat: -1,
          ease: "none",
          delay: Math.random() * -15, // start randomly in progress
        });
      }
    }, containerRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--color-gold-400)] opacity-10 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--color-rosegold)] opacity-10 blur-[100px] rounded-full mix-blend-screen" />
        
        {/* Petals container */}
        <div ref={containerRef} className="absolute inset-0" />
      </div>

      <style jsx global>{`
        .petal {
          position: absolute;
          width: 15px;
          height: 15px;
          background-color: var(--color-rosegold);
          border-radius: 15px 0 15px 0;
          opacity: 0.6;
          box-shadow: 0 0 5px rgba(183, 110, 121, 0.4);
        }
      `}</style>
    </>
  );
}
