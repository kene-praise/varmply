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
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.fromTo(
              el,
              { textContent: 0 },
              {
                textContent: stat.numeric,
                duration: 1.5,
                ease: 'power2.out',
                delay: i * 0.15,
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
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Dark navy floating card — PocketApp footer-banner style */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="relative overflow-hidden"
          style={{
            background: '#0F0A2E',
            borderRadius: '2rem',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          {/* Dot grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          {/* Glow blobs */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(124,59,237,0.25) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.2) 0%, transparent 70%)' }} />

          <div className="relative">
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2
                className="text-white font-bold"
                style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', lineHeight: 1.2 }}
              >
                The numbers speak for themselves.
              </h2>
              <p className="text-white/55 mt-2">Real outcomes from real campaigns on Varmply.</p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, i) => (
                <motion.div key={i} variants={fadeUp} className="text-center">
                  <span
                    ref={(el) => { refs.current[i] = el; }}
                    className="block font-bold text-white mb-1.5"
                    style={{
                      fontSize: 'clamp(36px, 4.5vw, 52px)',
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-white/50 text-sm font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
