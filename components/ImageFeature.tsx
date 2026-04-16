'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/motion';

const rows = [
  {
    tag: 'For Creators',
    headline: 'Turn your audience into a structured revenue stream.',
    body: "Stop chasing brands in DMs. Varmply puts you in front of verified campaigns — clear rules, real payouts, zero guesswork.",
    points: [
      'Eligibility checked automatically',
      'Submit content directly in-platform',
      'Wallet with full payout history',
    ],
    cta: { label: 'Join the Waitlist', href: '/waitlist' },
    image: 'https://picsum.photos/seed/creator/700/480',
    bg: '#0F0A2E',
    textColor: 'white',
    tagBg: 'rgba(124,59,237,0.3)',
    tagColor: '#C4B5FD',
    checkColor: '#A78BFA',
    btnBg: 'white',
    btnColor: '#7C3BED',
  },
  {
    tag: 'For Sponsors',
    headline: 'Run campaigns with full control and accountability.',
    body: "Define your brief, lock the budget in escrow, and watch real metrics arrive. No relying on creators to self-report.",
    points: [
      'Set eligibility rules, deliverables, and deadlines',
      'Funds locked in escrow until performance confirmed',
      'Real-time dashboard with per-creator breakdown',
    ],
    cta: { label: 'Join the Waitlist', href: '/waitlist' },
    image: 'https://picsum.photos/seed/sponsor/700/480',
    bg: '#F59E0B',
    textColor: '#0F0A2E',
    tagBg: 'rgba(15,10,46,0.12)',
    tagColor: '#0F0A2E',
    checkColor: '#0F0A2E',
    btnBg: '#0F0A2E',
    btnColor: 'white',
  },
];

export default function ImageFeature() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-5">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative overflow-hidden"
            style={{ background: row.bg, borderRadius: '2rem' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end min-h-[480px]">

              {/* Text — always top-left */}
              <div className="p-10 lg:p-14 flex flex-col justify-between h-full">
                <div>
                  <motion.span
                    variants={fadeUp}
                    className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wider"
                    style={{ background: row.tagBg, color: row.tagColor }}
                  >
                    {row.tag}
                  </motion.span>
                  <motion.h2
                    variants={fadeUp}
                    className="font-bold mb-4 leading-tight"
                    style={{
                      fontSize: 'clamp(26px, 2.8vw, 38px)',
                      color: row.textColor,
                    }}
                  >
                    {row.headline}
                  </motion.h2>
                  <motion.p
                    variants={fadeUp}
                    className="text-base leading-relaxed mb-6"
                    style={{ color: row.textColor, opacity: 0.72 }}
                  >
                    {row.body}
                  </motion.p>
                  <motion.ul variants={staggerContainer} className="flex flex-col gap-2.5 mb-8">
                    {row.points.map((pt, j) => (
                      <motion.li key={j} variants={fadeUp} className="flex items-start gap-2.5">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: row.checkColor }} />
                        <span className="text-sm" style={{ color: row.textColor, opacity: 0.85 }}>{pt}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <motion.div variants={fadeUp}>
                  <Link
                    href={row.cta.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                    style={{ background: row.btnBg, color: row.btnColor }}
                  >
                    {row.cta.label} <ArrowRight size={15} />
                  </Link>
                </motion.div>
              </div>

              {/* Image — flush to bottom-right */}
              <motion.div
                variants={fadeUp}
                className="relative h-64 lg:h-full overflow-hidden"
                style={{ minHeight: '280px' }}
              >
                <Image
                  src={row.image}
                  alt={row.tag}
                  fill
                  className="object-cover object-top"
                  style={{ opacity: 0.9 }}
                />
                {/* Gradient fade into card background on left edge */}
                <div
                  className="absolute inset-y-0 left-0 w-24 pointer-events-none"
                  style={{
                    background: `linear-gradient(to right, ${row.bg}, transparent)`,
                  }}
                />
              </motion.div>

            </div>

            {/* Decorative circle */}
            <div
              className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
