'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/motion';

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  cta1?: { label: string; href: string };
  cta2?: { label: string; href: string };
  theme?: 'purple' | 'green' | 'blue';
}

const themeStyles = {
  purple: {
    bg: '#7C3BED',
    text: '#7C3BED',
  },
  green: {
    bg: '#00A050',
    text: '#00A050',
  },
  blue: {
    bg: '#2563EB',
    text: '#2563EB',
  },
};

export default function CTABanner({
  headline = 'Ready to get started?',
  subtext = 'Join creators and brands already building on Varmply.',
  cta1 = { label: 'Join as Creator', href: '/creators' },
  cta2 = { label: 'Launch a Campaign', href: '/sponsors' },
  theme = 'purple',
}: CTABannerProps) {
  const currentTheme = themeStyles[theme] || themeStyles.purple;

  return (
    <section className="bg-white py-8 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Dark navy floating card — matches StatsSection card */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="relative overflow-hidden text-center"
          style={{
            background: currentTheme.bg,
            borderRadius: '2rem',
            padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4rem)',
          }}
        >
          {/* Pattern overlay — diagonal + dot grid on all themes */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 0, transparent 50%),
                radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)
              `,
              backgroundSize: '14px 14px, 28px 28px',
            }}
          />
          {/* Ambient glow top-right */}
          {theme !== 'green' && (
            <div
              className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: theme === 'blue' ? 'radial-gradient(circle, rgba(147,197,253,0.25) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(124,59,237,0.3) 0%, transparent 70%)' }}
            />
          )}
          <div
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
          />

          <div className="relative">
            <motion.h2
              variants={fadeUp}
              className="text-white font-bold mb-4"
              style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', lineHeight: 1.1 }}
            >
              {headline}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mb-10 mx-auto"
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.125rem', maxWidth: '440px' }}
            >
              {subtext}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={cta1.href}
                className="inline-flex items-center gap-2 rounded-full font-semibold text-sm px-8 py-3.5 transition-all hover:opacity-90"
                style={{ background: 'white', color: currentTheme.text }}
              >
                {cta1.label} <ArrowRight size={15} />
              </Link>
              <Link
                href={cta2.href}
                className="inline-flex items-center gap-2 rounded-full font-semibold text-sm px-8 py-3.5 transition-all"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                }}
              >
                {cta2.label}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
