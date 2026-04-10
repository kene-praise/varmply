'use client';

import HeroSection from '@/components/HeroSection';
import { PhoneFrame } from '@/components/ui/PhoneFrame';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Shield, Wallet,
  BarChart2, Zap, Users, Star, Lock, TrendingUp,
} from 'lucide-react';
import { BrowserChrome, DashboardSkeleton, CreateCampaignSkeleton } from '@/components/MockupSkeletons';
import DomeGallery from '@/components/DomeGallery';

// ─── Shared helpers ───────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const vp = { once: true, margin: '-80px' };

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] mb-6"
      style={{ background: 'rgba(124,59,237,0.08)', color: '#7C3BED' }}>
      {children}
    </span>
  );
}

// ─── 1. Bento Feature Section ─────────────────────────────────────────────────

function BentoFeature() {
  return (
    <section className="py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Centered header */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="mb-14 flex flex-col items-center text-center gap-4">
          <motion.div variants={fadeUp}><SectionLabel>How it works</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0, maxWidth: 600 }}>
            Designed for how<br />campaigns actually work.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-[#4A4A6A]" style={{ lineHeight: 1.6, maxWidth: 440 }}>
            From discovery to payout — every step is structured, tracked, and protected.
          </motion.p>
        </motion.div>

        {/* Row 1 — browser card + earnings card */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

          {/* Campaign Management — purple, crosshatch, col-span-2 */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <div className="relative overflow-hidden rounded-[28px] flex flex-col"
              style={{ background: 'rgba(124,59,237,0.05)', border: '1.5px solid rgba(124,59,237,0.14)', minHeight: 420 }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, rgba(124,59,237,0.045) 0px, rgba(124,59,237,0.045) 1px, transparent 1px, transparent 14px)',
              }} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between px-7 pt-6 pb-4"
                  style={{ borderBottom: '1px solid rgba(124,59,237,0.12)' }}>
                  <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#7C3BED' }}>
                    Campaign Management
                  </span>
                  <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: '#7C3BED' }}>
                    <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: '#7C3BED' }} />
                    Live
                  </span>
                </div>
                <div className="flex-1 px-7 pt-6 pb-0">
                  <p className="font-black text-[#0F0F1A] tracking-tight mb-5"
                    style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', lineHeight: 1.15 }}>
                    Every active campaign, creator,<br className="hidden md:block" /> and spend — in one place.
                  </p>
                  <div className="relative rounded-xl overflow-hidden"
                    style={{ border: '1px solid rgba(124,59,237,0.10)' }}>
                    <BrowserChrome url="app.varmply.com/campaigns" />
                    <div className="bg-[#FAFAFA] overflow-hidden" style={{ height: 260 }}>
                      <DashboardSkeleton />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3" style={{ borderTop: '1px solid rgba(124,59,237,0.12)' }}>
                  {[{ val: '847+', label: 'Creators' }, { val: '₦2.4M', label: 'Distributed' }, { val: '98%', label: 'On-time' }].map((s, j) => (
                    <div key={j} className="py-4 text-center"
                      style={{ borderRight: j < 2 ? '1px solid rgba(124,59,237,0.10)' : 'none' }}>
                      <p className="font-black text-sm leading-none" style={{ color: '#7C3BED' }}>{s.val}</p>
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1" style={{ color: 'rgba(124,59,237,0.45)' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Creator Earnings — green, dot grid */}
          <motion.div variants={fadeUp} className="h-full">
            <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
              style={{ background: 'rgba(0,160,80,0.05)', border: '1.5px solid rgba(0,160,80,0.14)', minHeight: 420 }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, rgba(0,160,80,0.13) 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between px-7 pt-6 pb-4"
                  style={{ borderBottom: '1px solid rgba(0,160,80,0.12)' }}>
                  <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#00A050' }}>Creator Earnings</span>
                  <Wallet size={11} style={{ color: '#00A050' }} />
                </div>
                <div className="flex-1 px-7 pt-7 pb-4 flex flex-col">
                  <p className="font-black leading-none mb-1"
                    style={{ fontSize: 'clamp(52px, 6vw, 72px)', color: '#00A050', letterSpacing: '-0.04em' }}>₦285K</p>
                  <p className="text-[9px] font-black uppercase tracking-[0.22em] mb-7"
                    style={{ color: 'rgba(0,160,80,0.45)' }}>Earned this month</p>
                  <div className="h-px mb-6" style={{ background: 'rgba(0,160,80,0.14)' }} />
                  <div className="flex flex-col gap-2.5 flex-1">
                    {[
                      { brand: 'Paystack', amount: '₦25K' },
                      { brand: 'PiggyVest', amount: '₦18K' },
                      { brand: 'Flutterwave', amount: '₦40K' },
                    ].map((item) => (
                      <div key={item.brand} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle size={12} style={{ color: '#00A050' }} />
                          <span className="text-xs font-semibold text-[#0F0F1A]">{item.brand}</span>
                        </div>
                        <span className="text-xs font-black" style={{ color: '#00A050' }}>{item.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(0,160,80,0.12)' }}>
                  {[{ val: '48h', label: 'Avg. payout' }, { val: '100%', label: 'Automated' }].map((s, j) => (
                    <div key={j} className="py-4 text-center"
                      style={{ borderRight: j === 0 ? '1px solid rgba(0,160,80,0.10)' : 'none' }}>
                      <p className="font-black text-sm leading-none" style={{ color: '#00A050' }}>{s.val}</p>
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1" style={{ color: 'rgba(0,160,80,0.45)' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Row 2 — 3 feature cards */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Sponsor Tools — amber, horizontal rules */}
          <motion.div variants={fadeUp} className="h-full">
            <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
              style={{ background: 'rgba(217,119,6,0.05)', border: '1.5px solid rgba(217,119,6,0.14)', minHeight: 340 }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(180deg, rgba(217,119,6,0.07) 0px, rgba(217,119,6,0.07) 1px, transparent 1px, transparent 22px)',
              }} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between px-7 pt-5 pb-4"
                  style={{ borderBottom: '1px solid rgba(217,119,6,0.12)' }}>
                  <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#D97706' }}>Sponsor Tools</span>
                  <BarChart2 size={11} style={{ color: '#D97706' }} />
                </div>
                <div className="flex-1 px-7 pt-6 pb-4 flex flex-col">
                  <h3 className="font-black text-[#0F0F1A] tracking-tight mb-3"
                    style={{ fontSize: 'clamp(16px, 1.6vw, 19px)', lineHeight: 1.15 }}>Create a campaign<br />in minutes</h3>
                  <p className="text-sm text-[#4A4A6A] leading-relaxed flex-1">
                    Set requirements, lock your budget in escrow, and publish. Creators see it and apply.
                  </p>
                  <div className="relative rounded-xl overflow-hidden mt-4"
                    style={{ border: '1px solid rgba(217,119,6,0.10)' }}>
                    <BrowserChrome url="app.varmply.com/campaigns/create" />
                    <div className="relative overflow-hidden bg-white" style={{ height: 120 }}>
                      <div style={{ transform: 'scale(0.85)', transformOrigin: 'top left', width: '118%' }}>
                        <CreateCampaignSkeleton />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(217,119,6,0.12)' }}>
                  {[{ val: '5min', label: 'Setup' }, { val: '₦0', label: 'Upfront risk' }].map((s, j) => (
                    <div key={j} className="py-4 text-center"
                      style={{ borderRight: j === 0 ? '1px solid rgba(217,119,6,0.10)' : 'none' }}>
                      <p className="font-black text-sm leading-none" style={{ color: '#D97706' }}>{s.val}</p>
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1" style={{ color: 'rgba(217,119,6,0.45)' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Clear Requirements — blue, vertical lines */}
          <motion.div variants={fadeUp} className="h-full">
            <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
              style={{ background: 'rgba(37,99,235,0.05)', border: '1.5px solid rgba(37,99,235,0.14)', minHeight: 340 }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, rgba(37,99,235,0.06) 0px, rgba(37,99,235,0.06) 1px, transparent 1px, transparent 20px)',
              }} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between px-7 pt-5 pb-4"
                  style={{ borderBottom: '1px solid rgba(37,99,235,0.12)' }}>
                  <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Requirements</span>
                  <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: '#2563EB' }}>
                    <CheckCircle size={9} />Clear
                  </span>
                </div>
                <div className="flex-1 px-7 pt-7 pb-4 flex flex-col">
                  <p className="font-black leading-none mb-1"
                    style={{ fontSize: 'clamp(52px, 6vw, 72px)', color: '#2563EB', letterSpacing: '-0.04em' }}>100%</p>
                  <p className="text-[9px] font-black uppercase tracking-[0.22em] mb-6"
                    style={{ color: 'rgba(37,99,235,0.45)' }}>Transparent briefs</p>
                  <div className="h-px mb-5" style={{ background: 'rgba(37,99,235,0.12)' }} />
                  <p className="text-sm text-[#4A4A6A] leading-relaxed flex-1">
                    Every campaign shows deliverables, eligibility, and payout before you apply. No hidden clauses.
                  </p>
                </div>
                <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(37,99,235,0.12)' }}>
                  {[{ val: '0', label: 'Hidden terms' }, { val: 'Pre-read', label: 'Brief' }].map((s, j) => (
                    <div key={j} className="py-4 text-center"
                      style={{ borderRight: j === 0 ? '1px solid rgba(37,99,235,0.10)' : 'none' }}>
                      <p className="font-black text-sm leading-none" style={{ color: '#2563EB' }}>{s.val}</p>
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1" style={{ color: 'rgba(37,99,235,0.45)' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Safety — purple, crosshatch */}
          <motion.div variants={fadeUp} className="h-full">
            <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
              style={{ background: 'rgba(124,59,237,0.05)', border: '1.5px solid rgba(124,59,237,0.14)', minHeight: 340 }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, rgba(124,59,237,0.055) 0px, rgba(124,59,237,0.055) 1px, transparent 1px, transparent 14px)',
              }} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between px-7 pt-5 pb-4"
                  style={{ borderBottom: '1px solid rgba(124,59,237,0.12)' }}>
                  <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#7C3BED' }}>Payment Safety</span>
                  <Shield size={11} style={{ color: '#7C3BED' }} />
                </div>
                <div className="flex-1 px-7 pt-7 pb-4 flex flex-col">
                  <p className="font-black leading-none mb-1"
                    style={{ fontSize: 'clamp(52px, 6vw, 72px)', color: '#7C3BED', letterSpacing: '-0.04em' }}>0%</p>
                  <p className="text-[9px] font-black uppercase tracking-[0.22em] mb-6"
                    style={{ color: 'rgba(124,59,237,0.45)' }}>Payment risk</p>
                  <div className="h-px mb-5" style={{ background: 'rgba(124,59,237,0.12)' }} />
                  <p className="text-sm text-[#4A4A6A] leading-relaxed flex-1">
                    Funds only leave escrow when performance is validated. No manual release, no disputes.
                  </p>
                </div>
                <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(124,59,237,0.12)' }}>
                  {[{ val: 'Escrow', label: 'Protected' }, { val: 'Auto', label: 'Validated' }].map((s, j) => (
                    <div key={j} className="py-4 text-center"
                      style={{ borderRight: j === 0 ? '1px solid rgba(124,59,237,0.10)' : 'none' }}>
                      <p className="font-black text-sm leading-none" style={{ color: '#7C3BED' }}>{s.val}</p>
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1" style={{ color: 'rgba(124,59,237,0.45)' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. Phone Showcase ────────────────────────────────────────────────────────

function PhoneShowcase() {
  return (
    <section className="py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Split header */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.div variants={fadeUp}><SectionLabel>Mobile app</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              The full platform.<br />In your pocket.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-base text-[#4A4A6A] max-w-xs md:text-right md:pb-1"
            style={{ lineHeight: 1.6 }}>
            Creator and sponsor dashboards built for mobile-first Nigeria.
          </motion.p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Creator App — purple, crosshatch */}
          <motion.div variants={fadeUp} className="h-full">
            <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
              style={{ background: 'rgba(124,59,237,0.05)', border: '1.5px solid rgba(124,59,237,0.14)', minHeight: 400 }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, rgba(124,59,237,0.045) 0px, rgba(124,59,237,0.045) 1px, transparent 1px, transparent 14px)',
              }} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between px-7 pt-5 pb-4"
                  style={{ borderBottom: '1px solid rgba(124,59,237,0.12)' }}>
                  <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#7C3BED' }}>Creator App</span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: '#7C3BED' }}>iOS · Android</span>
                </div>
                <div className="px-7 pt-5 pb-6">
                  <h3 className="font-black text-[#0F0F1A] tracking-tight"
                    style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.2 }}>Track earnings<br />&amp; campaigns</h3>
                </div>
                <div className="flex-1 relative overflow-hidden">
                  <div className="absolute top-0 left-1/2" style={{ transform: 'translateX(-50%)' }}>
                  <div style={{ transform: 'scale(0.85)', transformOrigin: 'top center' }}>
                  <PhoneFrame screenBg="#F9FAFB">
                    <div className="h-full w-full overflow-y-auto bg-[#F9FAFB]">
                      <div className="flex items-center justify-between px-5 pt-11 pb-4">
                        <div>
                          <p className="text-[10px] text-[#8A8A9A]">Good morning</p>
                          <p className="text-sm font-bold text-[#1C1C1E]">Dami Adeyemi</p>
                        </div>
                        <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{ background: '#E8E8EE' }}>
                          <span className="text-[10px] font-bold text-[#4A4A60]">DA</span>
                        </div>
                      </div>
                      <div className="mx-4 rounded-xl p-4" style={{ background: '#FFFFFF', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                        <p className="text-[10px] text-[#8A8A9A]">Total earnings</p>
                        <p className="mt-0.5 text-2xl font-bold text-[#1C1C1E]">₦47,500</p>
                        <div className="mt-2 flex gap-2">
                          <div className="flex-1 rounded-lg px-2.5 py-1.5" style={{ background: '#F2F2F7' }}>
                            <p className="text-[9px] text-[#8A8A9A]">Active</p>
                            <p className="text-xs font-semibold text-[#1C1C1E]">3 campaigns</p>
                          </div>
                          <div className="flex-1 rounded-lg px-2.5 py-1.5" style={{ background: '#F2F2F7' }}>
                            <p className="text-[9px] text-[#8A8A9A]">Pending</p>
                            <p className="text-xs font-semibold text-[#1C1C1E]">₦18,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 px-4">
                        <p className="mb-2 text-[9px] font-semibold text-[#B0B0C0] uppercase tracking-wider">Campaigns</p>
                        {[
                          { brand: 'Paystack', task: 'Instagram post', reward: '₦25,000' },
                          { brand: 'PiggyVest', task: 'TikTok video', reward: '₦18,000' },
                          { brand: 'Cowrywise', task: 'Twitter thread', reward: '₦8,000' },
                        ].map((c, i) => (
                          <div key={i} className="mb-1.5 flex items-center gap-2.5 rounded-lg px-3 py-2.5"
                            style={{ background: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                            <div className="h-7 w-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#F2F2F7' }}>
                              <span className="text-[9px] font-bold text-[#7C3BED]">{c.brand[0]}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-semibold text-[#1C1C1E] truncate">{c.brand}</p>
                              <p className="text-[9px] text-[#8A8A9A] truncate">{c.task}</p>
                            </div>
                            <span className="text-[10px] font-bold text-[#00A050] shrink-0">{c.reward}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </PhoneFrame>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sponsor App — green, dot grid */}
          <motion.div variants={fadeUp} className="h-full">
            <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
              style={{ background: 'rgba(0,160,80,0.05)', border: '1.5px solid rgba(0,160,80,0.14)', minHeight: 400 }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, rgba(0,160,80,0.13) 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between px-7 pt-5 pb-4"
                  style={{ borderBottom: '1px solid rgba(0,160,80,0.12)' }}>
                  <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#00A050' }}>Sponsor App</span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: '#00A050' }}>iOS · Android</span>
                </div>
                <div className="px-7 pt-5 pb-6">
                  <h3 className="font-black text-[#0F0F1A] tracking-tight"
                    style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.2 }}>Manage live<br />campaigns</h3>
                </div>
                <div className="flex-1 relative overflow-hidden">
                  <div className="absolute top-0 left-1/2" style={{ transform: 'translateX(-50%)' }}>
                  <div style={{ transform: 'scale(0.85)', transformOrigin: 'top center' }}>
                  <PhoneFrame screenBg="#F9FAFB">
                    <div className="h-full w-full overflow-y-auto bg-[#F9FAFB]">
                      <div className="px-5 pt-11 pb-3">
                        <p className="text-[10px] text-[#8A8A9A]">Overview</p>
                        <p className="text-sm font-bold text-[#1C1C1E]">Paystack Dashboard</p>
                      </div>
                      <div className="mx-4 rounded-xl p-4" style={{ background: '#FFFFFF', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                        <p className="text-[10px] text-[#8A8A9A]">Campaign spend</p>
                        <p className="mt-0.5 text-2xl font-bold text-[#1C1C1E]">₦240,000</p>
                        <div className="mt-2 flex gap-2">
                          <div className="flex-1 rounded-lg px-2.5 py-1.5" style={{ background: '#F2F2F7' }}>
                            <p className="text-[9px] text-[#8A8A9A]">Creators</p>
                            <p className="text-xs font-semibold text-[#1C1C1E]">12 joined</p>
                          </div>
                          <div className="flex-1 rounded-lg px-2.5 py-1.5" style={{ background: '#F2F2F7' }}>
                            <p className="text-[9px] text-[#8A8A9A]">Reach</p>
                            <p className="text-xs font-semibold text-[#1C1C1E]">840K</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 px-4">
                        <p className="mb-2 text-[9px] font-semibold text-[#B0B0C0] uppercase tracking-wider">Live campaigns</p>
                        {[
                          { name: 'Q2 Instagram Push', creators: '8 active', budget: '₦120K' },
                          { name: 'TikTok Launch', creators: '4 active', budget: '₦80K' },
                          { name: 'Twitter Awareness', creators: 'Recruiting', budget: '₦40K' },
                        ].map((c, i) => (
                          <div key={i} className="mb-1.5 flex items-center gap-2.5 rounded-lg px-3 py-2.5"
                            style={{ background: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                            <div className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: i === 2 ? '#D0D0DC' : '#00A050' }} />
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-semibold text-[#1C1C1E] truncate">{c.name}</p>
                              <p className="text-[9px] text-[#8A8A9A]">{c.creators}</p>
                            </div>
                            <span className="text-[10px] font-semibold text-[#8A8A9A] shrink-0">{c.budget}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </PhoneFrame>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Analytics — blue, horizontal rules */}
          <motion.div variants={fadeUp} className="h-full">
            <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
              style={{ background: 'rgba(37,99,235,0.05)', border: '1.5px solid rgba(37,99,235,0.14)', minHeight: 400 }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(180deg, rgba(37,99,235,0.06) 0px, rgba(37,99,235,0.06) 1px, transparent 1px, transparent 22px)',
              }} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between px-7 pt-5 pb-4"
                  style={{ borderBottom: '1px solid rgba(37,99,235,0.12)' }}>
                  <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Analytics</span>
                  <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: '#2563EB' }}>
                    <TrendingUp size={9} />Real-time
                  </span>
                </div>
                <div className="px-7 pt-5 pb-6">
                  <h3 className="font-black text-[#0F0F1A] tracking-tight"
                    style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.2 }}>Real-time<br />performance</h3>
                </div>
                <div className="flex-1 relative overflow-hidden">
                  <div className="absolute top-0 left-1/2" style={{ transform: 'translateX(-50%)' }}>
                  <div style={{ transform: 'scale(0.85)', transformOrigin: 'top center' }}>
                  <PhoneFrame screenBg="#F9FAFB">
                    <div className="h-full w-full overflow-y-auto bg-[#F9FAFB]">
                      <div className="px-5 pt-11 pb-3">
                        <p className="text-[10px] text-[#8A8A9A]">Campaign</p>
                        <p className="text-sm font-bold text-[#1C1C1E]">Paystack Q1</p>
                      </div>
                      {[
                        { label: 'Total views', value: '840K', change: '+12%' },
                        { label: 'Engagement', value: '6.2%', change: '+0.8%' },
                        { label: 'Creators paid', value: '₦240K', change: '12 of 12' },
                      ].map((m, i) => (
                        <div key={i} className="mx-4 mb-2 flex items-center justify-between rounded-lg px-3 py-3"
                          style={{ background: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                          <div>
                            <p className="text-[9px] text-[#8A8A9A]">{m.label}</p>
                            <p className="text-base font-bold text-[#1C1C1E]">{m.value}</p>
                          </div>
                          <span className="text-[10px] font-semibold rounded-full px-2 py-0.5"
                            style={{ background: 'rgba(0,160,80,0.10)', color: '#00A050' }}>{m.change}</span>
                        </div>
                      ))}
                      <div className="mx-4 mt-1 rounded-lg p-3" style={{ background: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                        <p className="mb-2 text-[9px] text-[#8A8A9A]">Views over time</p>
                        <div className="flex items-end gap-1 h-14">
                          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} className="flex-1 rounded-sm"
                              style={{ height: `${h}%`, background: i === 5 ? '#2563EB' : '#DBEAFE' }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </PhoneFrame>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

// ─── Platform icon SVGs ──────────────────────────────────────────────────────

function TikTokIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9a8.17 8.17 0 0 0 4.78 1.52V7.06a4.85 4.85 0 0 1-1.01-.37z" />
    </svg>
  );
}
function IGIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function XIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function YTIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}

// ─── 3. Creator Reel ──────────────────────────────────────────────────────────

const DOME_IMAGES = [
  '/mockups/creator-1.jpg',
  '/mockups/art-cover-3.png',
  '/mockups/creator-2.jpg',
  '/mockups/art-cover-1.png',
  '/mockups/creator-3.jpg',
  '/mockups/art-cover-4.png',
  '/mockups/creator-4.jpg',
  '/mockups/art-cover-2.png',
  '/mockups/ayra-starr.png',
  '/mockups/art-cover-5.png',
  '/mockups/creator-1.jpg',
  '/mockups/art-cover-6.png',
  '/mockups/creator-2.jpg',
  '/mockups/davido-cover.png',
  '/mockups/creator-3.jpg',
  '/mockups/art-cover-1.png',
  '/mockups/creator-4.jpg',
  '/mockups/art-cover-3.png',
  '/mockups/ayra-starr.png',
  '/mockups/art-cover-2.png',
  '/mockups/creator-1.jpg',
  '/mockups/art-cover-5.png',
  '/mockups/creator-2.jpg',
  '/mockups/art-cover-4.png',
  '/mockups/creator-3.jpg',
  '/mockups/art-cover-6.png',
  '/mockups/creator-4.jpg',
  '/mockups/art-cover-1.png',
  '/mockups/ayra-starr.png',
  '/mockups/davido-cover.png',
  '/mockups/creator-1.jpg',
  '/mockups/art-cover-2.png',
  '/mockups/creator-2.jpg',
  '/mockups/art-cover-3.png',
];

function CreatorReel() {
  return (
    <section className="py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>

      {/* Header */}
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
        className="max-w-6xl mx-auto px-6 mb-12 flex flex-col items-center text-center gap-4">
        <motion.div variants={fadeUp}><SectionLabel>Creator community</SectionLabel></motion.div>
        <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
          Real campaigns.<br />Real creators.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-base text-[#4A4A6A]" style={{ maxWidth: 420, lineHeight: 1.6 }}>
          Structured campaigns. Verified payouts. Across TikTok, Instagram, YouTube, and more.
        </motion.p>
        <motion.div variants={fadeUp} className="w-full sm:w-auto">
          <Link href="/creators"
            className="flex sm:inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm w-full sm:w-auto"
            style={{ background: '#7C3BED', color: 'white' }}>
            Join as Creator <ArrowRight size={14} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Dome Gallery */}
      <div style={{ width: '100%', height: 520 }}>
        <DomeGallery
          images={DOME_IMAGES}
          fit={0.8}
          minRadius={650}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={3.4}
          grayscale={false}
        />
      </div>

    </section>
  );
}

// ─── 4. Trust Pillars ─────────────────────────────────────────────────────────

const pillars = [
  {
    stat: '₦2.4M+', statLabel: 'Held in escrow',
    title: 'Escrow-First',
    description: "Sponsor budgets are locked before campaigns go live. Creators know funds exist — no ghosting, no excuses.",
    accent: '#7C3BED', bgTint: 'rgba(124,59,237,0.05)', border: 'rgba(124,59,237,0.14)',
    pattern: 'repeating-linear-gradient(-45deg, rgba(124,59,237,0.055) 0px, rgba(124,59,237,0.055) 1px, transparent 1px, transparent 14px)',
    Icon: Lock,
    stats: [{ val: '100%', label: 'Pre-locked' }, { val: '₦0', label: 'Early access' }],
  },
  {
    stat: '98%', statLabel: 'On-time payouts',
    title: 'Automated Validation',
    description: 'Submissions are checked programmatically. No favoritism, no back-and-forth — just clear pass/fail against the brief.',
    accent: '#00A050', bgTint: 'rgba(0,160,80,0.05)', border: 'rgba(0,160,80,0.14)',
    pattern: 'radial-gradient(circle, rgba(0,160,80,0.13) 1px, transparent 1px)',
    patternSize: '18px 18px',
    Icon: CheckCircle,
    stats: [{ val: '0', label: 'Manual steps' }, { val: '48h', label: 'Avg. payout' }],
  },
  {
    stat: '0', statLabel: 'Hidden terms',
    title: 'Transparent Rules',
    description: 'Every campaign brief is public. Eligibility, deliverables, payout amounts — all visible before you apply.',
    accent: '#D97706', bgTint: 'rgba(217,119,6,0.05)', border: 'rgba(217,119,6,0.14)',
    pattern: 'repeating-linear-gradient(90deg, rgba(217,119,6,0.06) 0px, rgba(217,119,6,0.06) 1px, transparent 1px, transparent 20px)',
    Icon: Shield,
    stats: [{ val: '100%', label: 'Public briefs' }, { val: 'Pre-read', label: 'Requirements' }],
  },
];

function TrustPillars() {
  return (
    <section className="py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Split header with inline stat trio */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div variants={fadeUp}><SectionLabel>Why trust Varmply</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              Built around<br />accountability.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} className="flex gap-8 md:gap-10 md:pb-1 shrink-0">
            {pillars.map((p) => (
              <div key={p.stat}>
                <p className="font-black leading-none" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', color: '#0F0F1A' }}>{p.stat}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest mt-1.5" style={{ color: '#AAAABC' }}>{p.statLabel}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Editorial cards */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <motion.div key={i} variants={fadeUp} className="h-full">
              <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
                style={{ background: p.bgTint, border: `1.5px solid ${p.border}`, minHeight: 360 }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: p.pattern,
                  backgroundSize: (p as any).patternSize,
                }} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between px-7 pt-5 pb-4"
                    style={{ borderBottom: `1px solid ${p.border}` }}>
                    <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: p.accent }}>{p.title}</span>
                    <p.Icon size={11} style={{ color: p.accent }} />
                  </div>
                  <div className="flex-1 px-7 pt-7 pb-4 flex flex-col">
                    <p className="font-black leading-none mb-1"
                      style={{ fontSize: 'clamp(42px, 5vw, 60px)', color: p.accent, letterSpacing: '-0.04em' }}>
                      {p.stat}
                    </p>
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] mb-6"
                      style={{ color: `${p.accent}70` }}>{p.statLabel}</p>
                    <div className="h-px mb-5" style={{ background: `${p.accent}20` }} />
                    <p className="text-sm text-[#4A4A6A] leading-relaxed flex-1">{p.description}</p>
                  </div>
                  <div className="grid grid-cols-2" style={{ borderTop: `1px solid ${p.border}` }}>
                    {p.stats.map((s, j) => (
                      <div key={j} className="py-4 text-center"
                        style={{ borderRight: j === 0 ? `1px solid ${p.border}` : 'none' }}>
                        <p className="font-black text-sm leading-none" style={{ color: p.accent }}>{s.val}</p>
                        <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1"
                          style={{ color: `${p.accent}60` }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] mt-10"
          style={{ color: '#BBBBCC' }}>
          All data verified automatically — no manual overrides
        </motion.p>
      </div>
    </section>
  );
}

// ─── 5. Testimonials ──────────────────────────────────────────────────────────

const testimonials = [
  {
    name: 'Tolu Adeyemi', handle: 'toluade_', initials: 'T', accent: '#7C3BED',
    bgTint: 'rgba(124,59,237,0.05)', border: 'rgba(124,59,237,0.14)',
    pattern: 'repeating-linear-gradient(-45deg, rgba(124,59,237,0.04) 0px, rgba(124,59,237,0.04) 1px, transparent 1px, transparent 14px)',
    role: 'Content Creator', avatar: '/mockups/avatar-1.png',
    text: "Finally a platform that actually pays. I used to get ghosted after posting. With Varmply, there's an escrow — my ₦25K was in my wallet within 48 hours.",
  },
  {
    name: 'Dami Oluwole', handle: 'dami.creates', initials: 'D', accent: '#00A050',
    bgTint: 'rgba(0,160,80,0.05)', border: 'rgba(0,160,80,0.14)',
    pattern: 'radial-gradient(circle, rgba(0,160,80,0.11) 1px, transparent 1px)',
    patternSize: '18px 18px',
    role: 'UGC Creator', avatar: '/mockups/avatar-2.png',
    text: "The eligibility system is underrated. I don't waste time applying for campaigns I won't get. Varmply only shows me what I qualify for.",
  },
  {
    name: 'Chidi Eze', handle: 'chidieze_', initials: 'C', accent: '#2563EB',
    bgTint: 'rgba(37,99,235,0.05)', border: 'rgba(37,99,235,0.14)',
    pattern: 'repeating-linear-gradient(180deg, rgba(37,99,235,0.06) 0px, rgba(37,99,235,0.06) 1px, transparent 1px, transparent 22px)',
    role: 'Brand Creator', avatar: '/mockups/avatar-3.png',
    text: "I was skeptical at first. But the campaign requirements were so clear — no back-and-forth with the brand. I posted, hit the metrics, got validated. Done.",
  },
  {
    name: 'Sarah Jenkins', handle: 'sarah.j', initials: 'S', accent: '#E11D48',
    bgTint: 'rgba(225,29,72,0.05)', border: 'rgba(225,29,72,0.14)',
    pattern: 'repeating-linear-gradient(90deg, rgba(225,29,72,0.05) 0px, rgba(225,29,72,0.05) 1px, transparent 1px, transparent 20px)',
    role: 'Lifestyle Creator', avatar: '/mockups/avatar-4.png',
    text: "Finally a platform that treats creators like professionals. The brief was clear, the timeline was fair, and the payment came through exactly as promised.",
  },
  {
    name: 'Emeka Nwosu', handle: 'emeka.ng', initials: 'E', accent: '#D97706',
    bgTint: 'rgba(217,119,6,0.05)', border: 'rgba(217,119,6,0.14)',
    pattern: 'repeating-linear-gradient(-45deg, rgba(217,119,6,0.05) 0px, rgba(217,119,6,0.05) 1px, transparent 1px, transparent 14px)',
    role: 'Sponsor', avatar: '/mockups/avatar-5.png',
    text: "As a sponsor, Varmply gave us a level of accountability we never had before. We could see exactly which creators hit their targets before releasing payment.",
  },
  {
    name: 'Marcus Thorne', handle: 'marcus_t', initials: 'M', accent: '#0891B2',
    bgTint: 'rgba(8,145,178,0.05)', border: 'rgba(8,145,178,0.14)',
    pattern: 'radial-gradient(circle, rgba(8,145,178,0.11) 1px, transparent 1px)',
    patternSize: '18px 18px',
    role: 'Creator', avatar: '/mockups/avatar-6.png',
    text: "The escrow system removed so much anxiety from the process. I knew from day one that if I delivered the work, the money would be there. No chasing required.",
  },
];

function Testimonials() {
  return (
    <section className="py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Centered header */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="flex flex-col items-center text-center mb-16 gap-4">
          <motion.div variants={fadeUp}><SectionLabel>Testimonials</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
            What creators<br />are saying.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-[#4A4A6A]" style={{ maxWidth: 420, lineHeight: 1.6 }}>
            Real experiences from verified creators and sponsors on Varmply.
          </motion.p>
        </motion.div>

        {/* Editorial testimonial cards */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeUp} className="h-full">
              <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
                style={{ background: t.bgTint, border: `1.5px solid ${t.border}`, minHeight: 280 }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: t.pattern,
                  backgroundSize: (t as any).patternSize,
                }} />
                <div className="relative z-10 flex flex-col h-full">
                  {/* Top rule bar: handle + star rating */}
                  <div className="flex items-center justify-between px-7 pt-5 pb-4"
                    style={{ borderBottom: `1px solid ${t.border}` }}>
                    <span className="text-[9px] font-black uppercase tracking-[0.22em]"
                      style={{ color: t.accent }}>@{t.handle}</span>
                    <div className="flex items-center gap-0.5">
                      {Array(5).fill(0).map((_, s) => (
                        <Star key={s} size={9} fill={t.accent} color={t.accent} />
                      ))}
                    </div>
                  </div>
                  {/* Quote body */}
                  <div className="flex-1 px-7 pt-6 pb-4">
                    <p className="text-sm font-semibold leading-relaxed text-[#0F0F1A]">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                  {/* Attribution row */}
                  <div className="flex items-center gap-3 px-7 py-4"
                    style={{ borderTop: `1px solid ${t.border}` }}>
                    <div className="h-8 w-8 rounded-lg shrink-0 relative overflow-hidden"
                      style={{ border: `1.5px solid ${t.accent}30` }}>
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-black tracking-tight text-[#0F0F1A]">{t.name}</p>
                      <p className="text-[9px] font-bold uppercase tracking-[0.14em] mt-0.5"
                        style={{ color: t.accent }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BentoFeature />
      <PhoneShowcase />
      <CreatorReel />
      <TrustPillars />
      <Testimonials />
    </>
  );
}
