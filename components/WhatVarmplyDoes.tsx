'use client';

import { motion } from 'framer-motion';
import { LayoutTemplate, ShieldCheck, Wallet } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/motion';

const cards = [
  {
    icon: LayoutTemplate,
    tag: 'Campaigns',
    title: 'Structured from day one.',
    description:
      'Clear briefs, defined deliverables, eligibility rules, and deadlines. No guesswork for creators or brands.',
    bg: '#7C3BED',
    textColor: 'white',
    iconBg: 'rgba(255,255,255,0.15)',
    tagBg: 'rgba(255,255,255,0.18)',
  },
  {
    icon: ShieldCheck,
    tag: 'Performance',
    title: 'Verified, not self-reported.',
    description:
      'Metrics captured and validated automatically. No manual screenshots, no inflated numbers. Just real, auditable data.',
    bg: '#059669',
    textColor: 'white',
    iconBg: 'rgba(255,255,255,0.15)',
    tagBg: 'rgba(255,255,255,0.18)',
  },
  {
    icon: Wallet,
    tag: 'Payouts',
    title: 'Escrow until earned.',
    description:
      'Sponsor funds locked upfront. Creators get paid when performance is confirmed. Unused budgets returned automatically.',
    bg: '#F59E0B',
    textColor: '#0F0A2E',
    iconBg: 'rgba(15,10,46,0.1)',
    tagBg: 'rgba(15,10,46,0.1)',
  },
];

export default function WhatVarmplyDoes() {
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
            Platform
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-bold"
            style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.15, color: '#0F0A2E' }}
          >
            Everything you need for structured creator marketing.
          </motion.h2>
        </motion.div>

        {/* Color card grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative overflow-hidden flex flex-col"
              style={{
                background: card.bg,
                borderRadius: '2rem',
                padding: '2.25rem',
                minHeight: '320px',
              }}
            >
              {/* Tag */}
              <span
                className="inline-flex items-center self-start text-xs font-semibold px-3 py-1 rounded-full mb-6"
                style={{
                  background: card.tagBg,
                  color: card.textColor,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {card.tag}
              </span>

              {/* Headline */}
              <h3
                className="font-bold mb-3 leading-tight"
                style={{
                  fontSize: 'clamp(22px, 2vw, 28px)',
                  color: card.textColor,
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="text-base leading-relaxed flex-1"
                style={{ color: card.textColor, opacity: 0.78 }}
              >
                {card.description}
              </p>

              {/* Icon — bottom right */}
              <div
                className="absolute bottom-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: card.iconBg }}
              >
                <card.icon size={26} style={{ color: card.textColor }} />
              </div>

              {/* Decorative circle */}
              <div
                className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
