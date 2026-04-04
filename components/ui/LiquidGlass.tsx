"use client";

import { CSSProperties, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type LiquidGlassProps = {
  width?: number;
  height?: number;
  borderRadius?: number;
  tintOpacity?: number;
  blur?: number;
};

export function LiquidGlass({
  width = 120,
  height = 120,
  borderRadius = 60,
  tintOpacity = 0.12,
  blur = 2,
}: LiquidGlassProps) {
  const glassRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const glass = glassRef.current;
    const parent = glass?.parentElement;
    if (!glass || !parent) return;

    // Start hidden off-screen
    gsap.set(glass, { opacity: 0, left: -9999, top: -9999 });

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      gsap.to(glass, { duration: 0.5, left: x, top: y, ease: "power2.out" });
    };

    const onEnter = () => {
      gsap.to(glass, { duration: 0.3, opacity: 1, ease: "power2.out" });
    };

    const onLeave = () => {
      gsap.to(glass, { duration: 0.4, opacity: 0, ease: "power2.in" });
    };

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseenter", onEnter);
    parent.addEventListener("mouseleave", onLeave);

    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseenter", onEnter);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, [width, height]);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0"
        height="0"
        className="absolute overflow-hidden pointer-events-none"
      >
        <defs>
          <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.008"
              numOctaves="2"
              seed="92"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale="80"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div
        ref={glassRef}
        className="absolute pointer-events-none isolate z-50 shadow-lg"
        style={
          {
            "--lg-border-radius": `${borderRadius}px`,
            "--lg-tint-opacity": tintOpacity,
            "--lg-blur": `${blur}px`,
            width,
            height,
            borderRadius,
          } as CSSProperties
        }
      >
        {/* Tint + inner glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            borderRadius,
            background: `rgba(255,255,255,${tintOpacity})`,
            boxShadow: "inset 0 0 20px -5px rgba(255,255,255,0.7)",
          }}
        />
        {/* Distortion backdrop */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            borderRadius,
            backdropFilter: `blur(${blur}px)`,
            filter: "url(#glass-distortion)",
          }}
        />
      </div>
    </>
  );
}
