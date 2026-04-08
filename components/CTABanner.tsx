'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/motion';

interface CTABannerProps {
  label?: string;
  headline: string;
  subtext: string;
  cta1: { label: string; href: string };
  cta2: { label: string; href: string };
  theme?: 'purple' | 'green' | 'blue';
}

// ─── Per-theme config ─────────────────────────────────────────────────────────

const themes = {
  purple: {
    bg: '#7C3BED',
    ctaColor: '#7C3BED',
    // Diagonal crosshatch + dot grid (matches screenshot)
    pattern: (
      <>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, rgba(255,255,255,0.055) 0px, rgba(255,255,255,0.055) 1px, transparent 1px, transparent 12px)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* corner glows */}
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.13) 0%, transparent 65%)' }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.22) 0%, transparent 65%)' }}
        />
      </>
    ),
  },
  green: {
    bg: '#00A050',
    ctaColor: '#00A050',
    // Horizontal rule stripes + scattered dots
    pattern: (
      <>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 22px)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.12) 1.5px, transparent 1.5px)',
            backgroundSize: '40px 40px',
            backgroundPosition: '20px 11px',
          }}
        />
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.25) 0%, transparent 65%)' }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.18) 0%, transparent 65%)' }}
        />
      </>
    ),
  },
  blue: {
    bg: '#2563EB',
    ctaColor: '#2563EB',
    // Square grid + plus-sign crosshairs
    pattern: (
      <>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '8px 8px',
            maskImage:
              'radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent)',
            WebkitMaskImage:
              'radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent)',
          }}
        />
        <div
          className="absolute -top-24 right-0 w-96 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.22) 0%, transparent 65%)' }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.20) 0%, transparent 65%)' }}
        />
      </>
    ),
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function CTABanner({
  label = 'Get started today',
  headline,
  subtext,
  cta1,
  cta2,
  theme = 'purple',
}: CTABannerProps) {
  const t = themes[theme];

  return (
    <section className="bg-white pt-16 pb-0">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="relative overflow-hidden text-center"
          style={{
            background: t.bg,
            borderRadius: '1.75rem',
            padding: 'clamp(3.5rem, 6vw, 5.5rem) clamp(2rem, 5vw, 4rem)',
          }}
        >
          {t.pattern}

          <div className="relative">
            {/* Eyebrow label */}
            <motion.div variants={fadeUp} className="mb-6">
              <span
                className="inline-block rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]"
                style={{ background: 'rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.70)' }}
              >
                {label}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              className="text-white font-bold mb-5 mx-auto"
              style={{
                fontSize: 'clamp(30px, 4vw, 54px)',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                maxWidth: 720,
              }}
            >
              {headline}
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="mb-10 mx-auto text-base"
              style={{ color: 'rgba(255,255,255,0.62)', maxWidth: 460, lineHeight: 1.6 }}
            >
              {subtext}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                href={cta1.href}
                className="inline-flex items-center gap-2 rounded-full font-semibold text-sm px-8 py-3.5 transition-all hover:scale-[1.03] hover:shadow-lg"
                style={{
                  background: 'white',
                  color: t.ctaColor,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
                }}
              >
                {cta1.label} <ArrowRight size={14} />
              </Link>
              <Link
                href={cta2.href}
                className="inline-flex items-center gap-2 rounded-full font-semibold text-sm px-8 py-3.5 text-white transition-all hover:bg-white/20"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.22)',
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
