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
}

export default function CTABanner({
  headline = 'Ready to get started?',
  subtext = 'Join thousands of creators and brands already building on Varmply.',
  cta1 = { label: 'Join as Creator', href: '/creators' },
  cta2 = { label: 'Launch a Campaign', href: '/sponsors' },
}: CTABannerProps) {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #7C5CFC 0%, #5B3FE4 100%)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 65%)',
          }}
        />
        {/* Grid dots */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.h2
            variants={fadeUp}
            className="text-white font-bold mb-4"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1 }}
          >
            {headline}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
            {subtext}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={cta1.href}
              className="inline-flex items-center gap-2 rounded-full border border-[#E8E4FF] bg-white px-7 py-3.5 font-semibold text-[#7C5CFC] transition-all duration-200 hover:bg-white/90"
            >
              {cta1.label} <ArrowRight size={16} />
            </Link>
            <Link
              href={cta2.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-7 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-white/25"
            >
              {cta2.label}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
