'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface BounceCardsProps {
  className?: string;
  images: string[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}

export default function BounceCards({
  className = '',
  images = [],
  containerWidth = 500,
  containerHeight = 250,
  animationDelay = 0.5,
  animationStagger = 0.08,
  easeType = 'elastic.out(1, 0.5)',
  transformStyles = [],
  enableHover = false,
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>('.bc-inner');
    if (!cards.length) return;

    // Set initial state
    gsap.set(cards, { scale: 0, opacity: 0 });

    // Trigger via IntersectionObserver so it fires when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          gsap.to(cards, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: animationDelay,
            stagger: animationStagger,
            ease: easeType,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [animationDelay, animationStagger, easeType]);

  const cardSize = Math.round(containerHeight * 0.72);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: containerWidth, height: containerHeight, position: 'relative' }}
    >
      {images.map((src, i) => (
        // Outer: handles rotation + translation (CSS, untouched by GSAP)
        <div
          key={i}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -(cardSize / 2),
            marginLeft: -(cardSize / 2),
            transform: transformStyles[i] ?? '',
            zIndex: i === Math.floor(images.length / 2) ? 10 : i,
          }}
        >
          {/* Inner: GSAP controls scale/opacity only */}
          <div
            className="bc-inner"
            style={{
              width: cardSize,
              height: cardSize,
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              cursor: enableHover ? 'pointer' : 'default',
            }}
            onMouseEnter={
              enableHover
                ? (e) => gsap.to(e.currentTarget, { scale: 1.08, duration: 0.25, ease: 'power2.out' })
                : undefined
            }
            onMouseLeave={
              enableHover
                ? (e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.25, ease: 'power2.out' })
                : undefined
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
