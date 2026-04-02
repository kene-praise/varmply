'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/motion';

const stats = [
  { label: 'Distributed to Creators', value: '₦2.4M+', numeric: 2.4, suffix: 'M+', prefix: '₦' },
  { label: 'Active Creators', value: '847+', numeric: 847, suffix: '+', prefix: '' },
  { label: 'Live Campaigns', value: '24', numeric: 24, suffix: '', prefix: '' },
  { label: 'Escrow-backed', value: '100%', numeric: 100, suffix: '%', prefix: '' },
];

export default function StatsSection() {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    let cancelled = false;
    const scrollTriggers: { kill: (reset?: boolean) => void }[] = [];

    (async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (cancelled) return;

      refs.current.forEach((el, i) => {
        if (!el) return;
        const stat = stats[i];

        const st = ScrollTrigger.create({
          trigger: el,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.fromTo(
              el,
              { textContent: 0 },
              {
                textContent: stat.numeric,
                duration: 1.5,
                ease: 'power2.out',
                delay: i * 0.2,
                snap: { textContent: stat.numeric < 10 ? 0.1 : 1 },
                onUpdate() {
                  const v = parseFloat(el.textContent || '0');
                  if (stat.numeric >= 1000) {
                    el.textContent = stat.prefix + v.toFixed(0) + stat.suffix;
                  } else if (stat.numeric < 10) {
                    el.textContent = stat.prefix + v.toFixed(1) + stat.suffix;
                  } else {
                    el.textContent = stat.prefix + Math.floor(v) + stat.suffix;
                  }
                },
                onComplete() {
                  el.textContent = stat.value;
                },
              }
            );
          },
        });
        scrollTriggers.push(st);
      });

      if (cancelled) {
        scrollTriggers.forEach((t) => t.kill());
        scrollTriggers.length = 0;
      }
    })();

    return () => {
      cancelled = true;
      scrollTriggers.forEach((t) => t.kill());
      scrollTriggers.length = 0;
    };
  }, []);

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #7C5CFC 0%, #5B3FE4 100%)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
            transform: 'translate(-30%, 30%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-white font-bold mb-3"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            The numbers speak for themselves.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/70 text-lg">
            Real outcomes from real campaigns on Varmply.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="text-center"
            >
              <span
                ref={(el) => { refs.current[i] = el; }}
                className="block font-bold text-white mb-2"
                style={{
                  fontSize: 'clamp(40px, 5vw, 56px)',
                  fontFamily: 'JetBrains Mono, monospace',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span className="text-white/70 text-sm font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
