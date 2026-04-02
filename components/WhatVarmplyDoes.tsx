'use client';

import { motion } from 'framer-motion';
import { LayoutTemplate, ShieldCheck, Wallet } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/motion';

const cards = [
  {
    icon: LayoutTemplate,
    title: 'Structured Campaigns',
    description:
      'Every campaign comes with clear briefs, defined deliverables, eligibility rules, and deadlines — no guesswork for creators or brands.',
    accent: '#7C5CFC',
    bg: '#EDE9FF',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Performance',
    description:
      'Metrics are captured and validated automatically. No manual screenshots, no inflated numbers. Just real, auditable data.',
    accent: '#16A34A',
    bg: '#F0FDF4',
  },
  {
    icon: Wallet,
    title: 'Escrow-Based Payments',
    description:
      'Sponsor funds are locked upfront. Creators get paid when performance is confirmed. Unused budgets are returned automatically.',
    accent: '#D97706',
    bg: '#FFFBEB',
  },
];

export default function WhatVarmplyDoes() {
  return (
    <section className="bg-[#F7F7F9] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="tag mb-4" style={{ color: '#7C5CFC', background: '#EDE9FF', margin: '0 auto 16px' }}>
            Platform
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-[#0F0F1A] font-bold mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.15 }}
          >
            Everything you need for<br />
            <span className="gradient-text">structured creator marketing.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#4A4A6A] text-lg max-w-2xl mx-auto">
            Varmply replaces scattered tools, vague agreements, and manual tracking with a single structured platform.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="card-hover bg-white rounded-2xl p-8 border border-[#E4E4EC] cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: card.bg }}
              >
                <card.icon size={22} style={{ color: card.accent }} />
              </div>
              <h3 className="text-xl font-bold text-[#0F0F1A] mb-3">{card.title}</h3>
              <p className="text-[#4A4A6A] leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
