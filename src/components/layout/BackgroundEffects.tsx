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

      const petalCount = 45;
      
      for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement("div");
        petal.className = "petal";
        
        // Distribute petals initially across the visible area and beyond
        gsap.set(petal, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight - 200, 
          rotation: Math.random() * 360,
          scale: 0.5 + Math.random() * 0.7,
          opacity: 0.2 + Math.random() * 0.4,
        });

        container.appendChild(petal);

        const animatePetal = (p: HTMLElement) => {
            // Random duration for each fall to prevent synchronization
            const duration = 15 + Math.random() * 20;
            
            gsap.to(p, {
                y: `+=${window.innerHeight + 500}`, 
                x: `+=${-100 + Math.random() * 200}`,
                rotation: `+=${360 + Math.random() * 360}`,
                duration: duration,
                ease: "none",
                onComplete: () => {
                    // Reset to just above viewport
                    gsap.set(p, { 
                        y: -100, 
                        x: Math.random() * window.innerWidth 
                    });
                    animatePetal(p);
                }
            });
        };

        animatePetal(petal);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Global Petal Layer - Fixed to viewport */}
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
        <div ref={containerRef} className="absolute inset-0" />
      </div>

      <style jsx global>{`
        .petal {
          position: absolute;
          width: 14px;
          height: 14px;
          background-color: #b76e79;
          border-radius: 14px 0 14px 0;
          opacity: 0.5;
          box-shadow: 0 0 6px rgba(183, 110, 121, 0.2);
          pointer-events: none;
          will-change: transform;
        }
      `}</style>
    </>
  );
}
