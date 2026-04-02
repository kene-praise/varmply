'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/motion';
import CampaignMockup from './UIComponents/CampaignMockup';
import WalletMockup from './UIComponents/WalletMockup';
import AnalyticsMockup from './UIComponents/AnalyticsMockup';

export default function BentoGrid() {
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
            Platform Preview
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-[#0F0F1A] font-bold mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.15 }}
          >
            Real product.{' '}
            <span className="gradient-text">No fake dashboards.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#4A4A6A] text-lg max-w-xl mx-auto">
            Every screen you see here is a real part of the platform. What you join is what you see.
          </motion.p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {/* Campaign marketplace — tall left */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-1 lg:row-span-2 flex flex-col rounded-2xl border border-[#E4E4EC] bg-white p-6 card-hover"
            style={{ minHeight: '480px' }}
          >
            <div className="mb-4">
              <span className="tag text-xs" style={{ color: '#7C5CFC', background: '#EDE9FF' }}>
                Campaign Marketplace
              </span>
              <h3 className="text-xl font-bold text-[#0F0F1A] mt-2 mb-1">
                Browse & apply with one click
              </h3>
              <p className="text-sm text-[#4A4A6A]">
                Filter by niche, eligibility, and payout. Apply in seconds.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <div className="scale-90 origin-top">
                <CampaignMockup />
              </div>
            </div>
          </motion.div>

          {/* Wallet UI — top right */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-2 flex flex-col rounded-2xl border border-[#E4E4EC] bg-white p-6 card-hover"
          >
            <div className="mb-4">
              <span className="tag text-xs" style={{ color: '#16A34A', background: '#F0FDF4' }}>
                Wallet & Payouts
              </span>
              <h3 className="text-xl font-bold text-[#0F0F1A] mt-2 mb-1">
                Your earnings, always visible
              </h3>
              <p className="text-sm text-[#4A4A6A]">
                Real-time balance, transaction history, and payout status in one place.
              </p>
            </div>
            <div className="flex items-center justify-center overflow-hidden">
              <div className="scale-90 origin-top">
                <WalletMockup />
              </div>
            </div>
          </motion.div>

          {/* Analytics — bottom right */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-2 flex flex-col rounded-2xl border border-[#E4E4EC] bg-white p-6 card-hover"
          >
            <div className="mb-4">
              <span className="tag text-xs" style={{ color: '#D97706', background: '#FFFBEB' }}>
                Analytics
              </span>
              <h3 className="text-xl font-bold text-[#0F0F1A] mt-2 mb-1">
                Performance, automatically tracked
              </h3>
              <p className="text-sm text-[#4A4A6A]">
                Engagement, impressions, and reach — captured without lifting a finger.
              </p>
            </div>
            <div className="flex items-center justify-center overflow-hidden">
              <div className="scale-90 origin-top">
                <AnalyticsMockup />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
