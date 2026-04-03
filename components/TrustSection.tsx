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
    iconBg: '#EDE9FF',
    iconColor: '#7C3BED',
  },
  {
    icon: CheckSquare,
    title: 'Automated Validation',
    description:
      'Content submissions are checked against requirements programmatically. No favoritism, no manual reviews, no disputes about who did what.',
    iconBg: '#DCFCE7',
    iconColor: '#16A34A',
  },
  {
    icon: AlignLeft,
    title: 'Transparent Rules',
    description:
      'Every campaign shows its full brief publicly. Eligibility criteria, deliverables, and payout amounts visible before you ever apply.',
    iconBg: '#FEF3C7',
    iconColor: '#D97706',
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mb-10"
        >
          <motion.p variants={fadeUp} className="tag mb-3" style={{ color: '#7C3BED', background: '#EDE9FF' }}>
            Why Trust Varmply
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-bold"
            style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.15, color: '#0F0A2E' }}
          >
            Built around accountability.
          </motion.h2>
        </motion.div>

        {/* Light gray cards — PocketApp sub-card style */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col"
              style={{
                background: '#F4F3F5',
                borderRadius: '2rem',
                padding: '2.25rem',
                minHeight: '280px',
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
                style={{ background: p.iconBg }}
              >
                <p.icon size={26} style={{ color: p.iconColor }} />
              </div>

              <h3
                className="font-bold mb-3 leading-tight"
                style={{ fontSize: '1.25rem', color: '#0F0A2E' }}
              >
                {p.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#4A4A6A' }}>
                {p.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
