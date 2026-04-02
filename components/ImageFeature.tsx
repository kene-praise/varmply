'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOptions } from '@/lib/motion';

const rows = [
  {
    tag: 'For Creators',
    tagColor: '#7C5CFC',
    tagBg: '#EDE9FF',
    headline: 'Turn your audience into a structured revenue stream.',
    body: "Stop chasing brands in DMs. Varmply puts you in front of verified campaigns that match your audience and niche — with clear rules, real payouts, and zero guesswork.",
    points: [
      'Eligibility checked automatically — no manual applications',
      'Submit content directly in-platform',
      'Wallet with full payout history',
    ],
    cta: { label: 'Start as a Creator', href: '/creators' },
    image: 'https://picsum.photos/seed/creator/600/500',
    imageLeft: true,
  },
  {
    tag: 'For Sponsors',
    tagColor: '#D97706',
    tagBg: '#FFFBEB',
    headline: 'Run campaigns with full control and accountability.',
    body: "Define your brief, set your budget, lock it in escrow, and watch real metrics come in. No relying on creators to self-report — Varmply validates everything automatically.",
    points: [
      'Set eligibility rules, deliverables, and deadlines',
      'Funds locked in escrow until performance confirmed',
      'Real-time dashboard with per-creator breakdown',
    ],
    cta: { label: 'Launch a Campaign', href: '/sponsors' },
    image: 'https://picsum.photos/seed/sponsor/600/500',
    imageLeft: false,
  },
];

export default function ImageFeature() {
  return (
    <section className="py-24 bg-[#F7F7F9]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-24">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              row.imageLeft ? '' : 'lg:[&>*:first-child]:order-2'
            }`}
          >
            {/* Image */}
            <motion.div
              variants={row.imageLeft ? fadeRight : fadeLeft}
              className="relative overflow-hidden rounded-2xl border border-[#E4E4EC]"
            >
              <Image
                src={row.image}
                alt={row.tag}
                width={600}
                height={500}
                className="w-full h-72 lg:h-[400px] object-cover"
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${row.tagColor}22 0%, transparent 60%)`,
                }}
              />
            </motion.div>

            {/* Copy */}
            <div className={row.imageLeft ? '' : ''}>
              <motion.span
                variants={fadeUp}
                className="tag mb-4 inline-flex"
                style={{ color: row.tagColor, background: row.tagBg }}
              >
                {row.tag}
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-[#0F0F1A] font-bold mb-4"
                style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.2 }}
              >
                {row.headline}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#4A4A6A] text-lg leading-relaxed mb-6">
                {row.body}
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-3 mb-8">
                {row.points.map((pt, j) => (
                  <motion.li key={j} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: row.tagColor }} />
                    <span className="text-[#4A4A6A]">{pt}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp}>
                <Link
                  href={row.cta.href}
                  className="btn-primary"
                  style={{ background: row.tagColor }}
                >
                  {row.cta.label} <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
