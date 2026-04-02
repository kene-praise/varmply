'use client';

import { motion } from 'framer-motion';
import { Lock, CheckSquare, AlignLeft } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/motion';

const pillars = [
  {
    icon: Lock,
    title: 'Escrow-First',
    description:
      "Sponsor budgets are locked before campaigns go live. Creators know funds exist. Sponsors know they won't pay for poor performance.",
    color: '#7C5CFC',
    bg: '#EDE9FF',
  },
  {
    icon: CheckSquare,
    title: 'Automated Validation',
    description:
      'Content submissions are checked against requirements programmatically. No favoritism, no manual reviews, no disputes about who did what.',
    color: '#16A34A',
    bg: '#F0FDF4',
  },
  {
    icon: AlignLeft,
    title: 'Transparent Rules',
    description:
      'Every campaign shows its full brief publicly. Eligibility criteria, deliverables, and payout amounts are visible before you ever apply.',
    color: '#D97706',
    bg: '#FFFBEB',
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#F7F7F9] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="tag mb-4" style={{ color: '#7C5CFC', background: '#EDE9FF', margin: '0 auto 16px' }}>
            Why Trust Varmply
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-[#0F0F1A] font-bold mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.15 }}
          >
            Built around{' '}
            <span className="gradient-text">accountability.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#4A4A6A] text-lg max-w-2xl mx-auto">
            Three principles that make Varmply different from every other creator platform.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative bg-white rounded-2xl p-8 border border-[#E4E4EC] card-hover"
            >
              {/* Icon badge */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: p.bg }}
              >
                <p.icon size={26} style={{ color: p.color }} />
              </div>

              <h3 className="text-xl font-bold text-[#0F0F1A] mb-3">{p.title}</h3>
              <p className="text-[#4A4A6A] leading-relaxed">{p.description}</p>

              {/* Subtle accent line */}
              <div
                className="absolute top-0 left-8 right-8 h-0.5 rounded-b-full"
                style={{ background: `linear-gradient(90deg, transparent, ${p.color}40, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
