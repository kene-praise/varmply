'use client';

import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

interface Props {
  children: React.ReactNode;
  count: number;
  /** Desktop grid class, e.g. "md:grid-cols-3" or "md:grid-cols-12" */
  gridClass: string;
  className?: string;
}

export function ScrollCarousel({ children, count, gridClass, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = useCallback(() => {
    const el = ref.current;
    if (!el || !el.children[0]) return;
    const gap = 16; // gap-4
    const cardW = (el.children[0] as HTMLElement).offsetWidth + gap;
    if (cardW === 0) return;
    setActive(Math.min(Math.round(el.scrollLeft / cardW), count - 1));
  }, [count]);

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el || !el.children[i]) return;
    el.children[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  return (
    <div>
      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        onScroll={handleScroll}
        className={`flex items-stretch overflow-x-auto snap-x snap-mandatory gap-4 ${gridClass} md:grid md:items-stretch md:overflow-x-visible md:snap-none -mx-6 md:mx-0 pb-4 md:pb-0 before:shrink-0 before:w-6 md:before:hidden after:shrink-0 after:w-6 md:after:hidden scroll-px-6 md:scroll-px-0 ${className}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
      >
        {children}
      </motion.div>

      {/* Dot indicators — mobile only */}
      <div className="flex justify-center items-center gap-2 mt-5 md:hidden" aria-hidden>
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === active ? 20 : 6,
              height: 6,
              borderRadius: 999,
              background: i === active ? '#0F0F1A' : '#D8D8E6',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.25s ease, background 0.25s ease',
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
