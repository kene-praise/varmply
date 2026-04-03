'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/motion';
import CampaignMockup from './UIComponents/CampaignMockup';
import WalletMockup from './UIComponents/WalletMockup';
import AnalyticsMockup from './UIComponents/AnalyticsMockup';

export default function BentoGrid() {
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
            Platform Preview
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-bold"
            style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.15, color: '#0F0A2E' }}
          >
            Real product. No fake dashboards.
          </motion.h2>
        </motion.div>

        {/* Color card grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >

          {/* Campaign — tall left, purple */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-1 lg:row-span-2 relative overflow-hidden flex flex-col"
            style={{ background: '#7C3BED', borderRadius: '2rem', minHeight: '520px' }}
          >
            <div className="p-8 pb-0 flex-1">
              <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider"
                style={{ background: 'rgba(255,255,255,0.15)', color: 'white', letterSpacing: '0.05em' }}>
                Marketplace
              </span>
              <h3 className="text-white font-bold text-2xl mb-2 leading-tight">Browse &amp; apply in one click</h3>
              <p className="text-white/70 text-sm leading-relaxed">Filter by niche, eligibility, and payout.</p>
            </div>
            {/* Mockup — flush to bottom */}
            <div className="mt-auto px-4 overflow-hidden" style={{ paddingBottom: 0 }}>
              <div className="scale-90 origin-bottom">
                <CampaignMockup />
              </div>
            </div>
            <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: 'rgba(255,255,255,0.05)' }} />
          </motion.div>

          {/* Wallet — top right, emerald */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-2 relative overflow-hidden flex flex-col"
            style={{ background: '#059669', borderRadius: '2rem', minHeight: '240px' }}
          >
            <div className="p-8 pb-0 flex-none">
              <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider"
                style={{ background: 'rgba(255,255,255,0.15)', color: 'white', letterSpacing: '0.05em' }}>
                Wallet &amp; Payouts
              </span>
              <h3 className="text-white font-bold text-2xl mb-1 leading-tight">Your earnings, always visible</h3>
              <p className="text-white/70 text-sm">Real-time balance, transaction history, payout status.</p>
            </div>
            <div className="mt-auto px-6 overflow-hidden">
              <div className="scale-90 origin-bottom">
                <WalletMockup />
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: 'rgba(255,255,255,0.06)' }} />
          </motion.div>

          {/* Analytics — bottom right, dark navy */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-2 relative overflow-hidden flex flex-col"
            style={{ background: '#0F0A2E', borderRadius: '2rem', minHeight: '240px' }}
          >
            <div className="p-8 pb-0 flex-none">
              <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider"
                style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.05em' }}>
                Analytics
              </span>
              <h3 className="text-white font-bold text-2xl mb-1 leading-tight">Performance, automatically tracked</h3>
              <p className="text-white/55 text-sm">Engagement, impressions, reach — no lifting a finger.</p>
            </div>
            <div className="mt-auto px-6 overflow-hidden">
              <div className="scale-90 origin-bottom">
                <AnalyticsMockup />
              </div>
            </div>
            {/* Dot grid texture */}
            <div className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }} />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
