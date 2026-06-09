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

      const petalCount = 75; // Increased density by 25%
      
      for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement("div");
        petal.className = "petal"; 
        
        container.appendChild(petal);

        // Initial setup - Distribute across the ENTIRE viewport so animation begins instantly
        const initialY = (Math.random() * window.innerHeight * 1.2) - (window.innerHeight * 0.2);

        gsap.set(petal, {
          x: Math.random() * window.innerWidth,
          y: initialY,
          rotation: Math.random() * 360,
          scale: 0.4 + Math.random() * 0.8,
          opacity: 0.3 + Math.random() * 0.6, 
        });

        const animatePetal = (p: HTMLElement, isCeremonial = false) => {
            const duration = isCeremonial ? 3 + Math.random() * 4 : 12 + Math.random() * 15;
            const currentWidth = window.innerWidth;
            const currentHeight = window.innerHeight;
            
            // True rainfall effect with soft organic drift
            gsap.to(p, {
                y: currentHeight + 150, 
                x: `+=${-30 + Math.random() * 60}`, // Soft horizontal drift
                rotation: `+=${180 + Math.random() * 270}`, // Gentle organic rotation
                opacity: 0.3 + Math.random() * 0.5, 
                duration: duration,
                ease: isCeremonial ? "power1.in" : "none",
                onComplete: () => {
                    // Reset to just above viewport, random X
                    gsap.set(p, { 
                        y: -50 - (Math.random() * 100), 
                        x: Math.random() * currentWidth,
                    });
                    if(!isCeremonial) {
                        animatePetal(p);
                    } else {
                        setTimeout(() => animatePetal(p), Math.random() * 5000);
                    }
                }
            });
        };

        animatePetal(petal);
      }
      
      const handleCeremonialShower = () => {
         // Create a temporary burst of extra petals (Ceremonial shower)
         for(let i=0; i < 50; i++) {
             const tempPetal = document.createElement("div");
             tempPetal.className = "petal";
             container.appendChild(tempPetal);
             
             gsap.set(tempPetal, {
                  x: Math.random() * window.innerWidth,
                  y: -50 - (Math.random() * 200), 
                  rotation: Math.random() * 360,
                  scale: 0.6 + Math.random() * 0.8,
                  opacity: 0.6 + Math.random() * 0.4,
             });
             
             gsap.to(tempPetal, {
                y: window.innerHeight + 200,
                x: `+=${-60 + Math.random() * 120}`,
                rotation: `+=${360 + Math.random() * 360}`,
                duration: 2.5 + Math.random() * 3,
                ease: "power2.in",
                onComplete: () => {
                    tempPetal.remove(); 
                }
             });
         }
      };
      
      window.addEventListener('triggerCeremonialShower', handleCeremonialShower);
      
      return () => {
          window.removeEventListener('triggerCeremonialShower', handleCeremonialShower);
      };

    }, containerRef);

    return () => {
      ctx.revert();
      // ROOT CAUSE FIX: Clean up appended DOM nodes so they don't linger without animations during Strict Mode remount
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
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
          top: -50px; /* Safe default off-screen position */
          left: -50px;
          width: 14px;
          height: 14px;
          background-color: #b76e79;
          border-radius: 14px 0 14px 0;
          pointer-events: none;
          will-change: transform, opacity;
        }
      `}</style>
    </>
  );
}
