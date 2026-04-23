'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import { PhoneFrame } from '@/components/ui/PhoneFrame';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Shield, Wallet,
  BarChart2, Zap, Users, Star, Lock, TrendingUp,
  Music2, Camera,
} from 'lucide-react';
import { BrowserChrome, DashboardSkeleton, CreateCampaignSkeleton } from '@/components/MockupSkeletons';
import { ScrollCarousel } from '@/components/ui/ScrollCarousel';

// ─── Phone skeletons ──────────────────────────────────────────────────────────

function MobileCampaignSkeleton() {
  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="h-3 w-32 bg-[#EBEBF2] rounded mb-1" />
      <div className="h-8 w-full rounded-lg bg-[#F0F0F5] mb-1" />
      <div className="h-3 w-24 bg-[#EBEBF2] rounded mt-2 mb-1" />
      <div className="flex gap-2 mb-2">
        <div className="h-8 flex-1 rounded-lg bg-[#EDE9FF]" />
        <div className="h-8 flex-1 rounded-lg bg-[#F0F0F5]" />
      </div>
      <div className="h-3 w-28 bg-[#EBEBF2] rounded mb-1" />
      <div className="h-16 w-full rounded-xl bg-[#F0F0F5]" />
      <div className="h-3 w-20 bg-[#EBEBF2] rounded mt-2 mb-1" />
      <div className="flex flex-wrap gap-1.5">
        {['TikTok', 'Instagram', 'YouTube'].map(p => (
          <div key={p} className="h-6 px-3 rounded-full bg-[#EDE9FF] flex items-center">
            <div className="h-1.5 w-10 bg-[#C4B5FD] rounded" />
          </div>
        ))}
      </div>
      <div className="mt-3 h-10 w-full rounded-full bg-[#7C3BED]" />
    </div>
  );
}

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

// ─── 1a. How It Works ────────────────────────────────────────────────────────

function HowItWorks() {
  return (
    <section className="py-12 md:py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Centered header */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="mb-8 md:mb-14 flex flex-col items-start text-left md:items-center md:text-center gap-4">
          <motion.div variants={fadeUp}><SectionLabel>How it works</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
            From release to virality <br className="max-md:hidden" />fully structured.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-[#4A4A6A] md:max-w-[440px]" style={{ lineHeight: 1.6 }}>
            Launch your track once. Creators pick it up. Performance is tracked automatically and payouts follow.
          </motion.p>
        </motion.div>

        {/* Bento — LAUNCH spans 2 rows left, DISTRIBUTION + ENFORCEMENT stack right */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-4">

          {/* ── LAUNCH (step 01) — tall left, purple crosshatch, browser mockup ── */}
          <motion.div variants={fadeUp} className="md:row-span-2 flex flex-col">
            <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
              style={{ background: 'rgba(124,59,237,0.05)', border: '1.5px solid rgba(124,59,237,0.14)', minHeight: 460 }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, rgba(124,59,237,0.045) 0px, rgba(124,59,237,0.045) 1px, transparent 1px, transparent 14px)',
              }} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between px-7 pt-5 pb-4"
                  style={{ borderBottom: '1px solid rgba(124,59,237,0.12)' }}>
                  <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#7C3BED' }}>Launch</span>
                  <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: '#7C3BED' }}>
                    <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: '#7C3BED' }} />01
                  </span>
                </div>
                <div className="flex-1 px-7 pt-6 pb-4 flex flex-col">
                  <h3 className="font-black text-[#0F0F1A] tracking-tight mb-3"
                    style={{ fontSize: 'clamp(17px, 1.7vw, 22px)', lineHeight: 1.15 }}>
                    Launch your track <br className="max-md:hidden" />as a campaign
                  </h3>
                  <p className="text-sm text-[#4A4A6A] leading-relaxed mb-5">
                    Set your budget, rules, and payout model. Creators join and start posting.
                  </p>
                  <div className="hidden md:block relative rounded-xl overflow-hidden flex-1"
                    style={{ border: '1px solid rgba(124,59,237,0.10)', minHeight: 180 }}>
                    <BrowserChrome url="app.varmply.co/campaigns/create" />
                    <div className="relative overflow-hidden bg-white" style={{ height: 240 }}>
                      <div style={{ transform: 'scale(0.85)', transformOrigin: 'top left', width: '118%' }}>
                        <CreateCampaignSkeleton />
                      </div>
                    </div>
                  </div>
                  {/* Mobile version (Phone visual) */}
                  <div className="md:hidden mt-2 relative h-[260px] w-full flex justify-center overflow-hidden pointer-events-none -mb-4">
                    <div className="absolute top-0 flex justify-center" style={{ transform: 'scale(0.85)', transformOrigin: 'top center', width: 320 }}>
                      <PhoneFrame screenBg="#FFFFFF">
                        <div className="w-full h-[696px] bg-white pt-6">
                          <MobileCampaignSkeleton />
                        </div>
                      </PhoneFrame>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(124,59,237,0.12)' }}>
                  {[{ val: '5min', label: 'Setup' }, { val: '₦0', label: 'Upfront risk' }].map((s, j) => (
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

          {/* ── DISTRIBUTION (step 02) — top right, green dot grid ── */}
          <motion.div variants={fadeUp} className="flex flex-col">
            <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
              style={{ background: 'rgba(0,160,80,0.05)', border: '1.5px solid rgba(0,160,80,0.14)', minHeight: 210 }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, rgba(0,160,80,0.13) 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between px-7 pt-5 pb-4"
                  style={{ borderBottom: '1px solid rgba(0,160,80,0.12)' }}>
                  <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#00A050' }}>Distribution</span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: '#00A050' }}>02</span>
                </div>
                <div className="flex-1 px-7 pt-6 pb-4 flex flex-col md:flex-row md:items-center md:gap-8">
                  <div className="shrink-0">
                    <p className="font-black leading-none mb-1"
                      style={{ fontSize: 'clamp(52px, 5vw, 66px)', color: '#00A050', letterSpacing: '-0.04em' }}>2.4M+</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.22em]"
                      style={{ color: 'rgba(0,160,80,0.45)' }}>Plays generated</p>
                  </div>
                  <div className="hidden md:block w-px self-stretch" style={{ background: 'rgba(0,160,80,0.12)' }} />
                  <div className="mt-4 md:mt-0">
                    <h3 className="font-black text-[#0F0F1A] tracking-tight mb-1.5"
                      style={{ fontSize: 'clamp(13px, 1.3vw, 16px)', lineHeight: 1.2 }}>
                      Creators turn your song into content
                    </h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed">
                      Your track spreads across TikTok and Instagram — driven by real creators, not ads.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(0,160,80,0.12)' }}>
                  {[{ val: '847+', label: 'Creators' }, { val: '2', label: 'Platforms' }].map((s, j) => (
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

          {/* ── ENFORCEMENT (step 03) — bottom right, amber horizontal rules ── */}
          <motion.div variants={fadeUp} className="flex flex-col">
            <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
              style={{ background: 'rgba(217,119,6,0.05)', border: '1.5px solid rgba(217,119,6,0.14)', minHeight: 210 }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(180deg, rgba(217,119,6,0.07) 0px, rgba(217,119,6,0.07) 1px, transparent 1px, transparent 22px)',
              }} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between px-7 pt-5 pb-4"
                  style={{ borderBottom: '1px solid rgba(217,119,6,0.12)' }}>
                  <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#D97706' }}>Enforcement</span>
                  <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: '#D97706' }}>
                    <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: '#D97706' }} />03
                  </span>
                </div>
                <div className="flex-1 px-7 pt-6 pb-4 flex flex-col md:flex-row md:items-center md:gap-8">
                  <div className="shrink-0">
                    <p className="font-black leading-none mb-1"
                      style={{ fontSize: 'clamp(52px, 5vw, 66px)', color: '#D97706', letterSpacing: '-0.04em' }}>0%</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.22em]"
                      style={{ color: 'rgba(217,119,6,0.45)' }}>Wasted budget</p>
                  </div>
                  <div className="hidden md:block w-px self-stretch" style={{ background: 'rgba(217,119,6,0.12)' }} />
                  <div className="mt-4 md:mt-0">
                    <h3 className="font-black text-[#0F0F1A] tracking-tight mb-1.5"
                      style={{ fontSize: 'clamp(13px, 1.3vw, 16px)', lineHeight: 1.2 }}>
                      You only pay for real performance
                    </h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed">
                      Funds stay locked in escrow and release automatically when engagement is verified.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(217,119,6,0.12)' }}>
                  {[{ val: 'Escrow', label: 'Protected' }, { val: 'Auto', label: 'Release' }].map((s, j) => (
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

        </motion.div>
      </div>
    </section>
  );
}

// ─── 1b. Why Varmply ──────────────────────────────────────────────────────────

function WhyVarmply() {
  return (
    <section id="why-varmply" className="py-12 md:py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Split header */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="mb-8 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.div variants={fadeUp}><SectionLabel>Why Varmply</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              The platform that <br className="max-md:hidden" />protects both sides.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-base text-[#4A4A6A] md:max-w-xs md:text-right md:pb-1"
            style={{ lineHeight: 1.6 }}>
            No ghosting, no fake metrics, no wasted budgets. Varmply keeps creators and sponsors accountable.
          </motion.p>
        </motion.div>

        {/* Bento grid — 7+5 top, 4+8 bottom */}
        <ScrollCarousel count={4} gridClass="md:grid-cols-12">

          {/* ── REACH — 7/12, green, TikTok + Instagram split ── */}
          <motion.div variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto md:col-span-7 flex flex-col">
            <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
              style={{ background: 'rgba(0,160,80,0.05)', border: '1.5px solid rgba(0,160,80,0.14)', minHeight: 300 }}>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between px-7 pt-5 pb-4"
                  style={{ borderBottom: '1px solid rgba(0,160,80,0.12)' }}>
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.22em]" style={{ color: '#00A050' }}>Reach</span>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.14em]" style={{ color: '#00A050' }}>TikTok · Instagram</span>
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
                  {/* TikTok */}
                  <div className="relative overflow-hidden p-6 md:p-7 flex flex-col justify-between border-b md:border-b-0" style={{ borderColor: 'rgba(0,160,80,0.12)' }}>
                    <div className="absolute inset-0 pointer-events-none" style={{
                      backgroundImage: 'radial-gradient(circle, rgba(0,160,80,0.10) 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                    }} />
                    <div className="relative z-10">
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.22em] mb-5 block" style={{ color: '#00A050' }}>TikTok</span>
                      <p className="font-black leading-none mb-1"
                        style={{ fontSize: 'clamp(42px, 4.5vw, 58px)', color: '#00A050', letterSpacing: '-0.04em' }}>2.1M+</p>
                      <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.18em] mb-4" style={{ color: 'rgba(0,160,80,0.45)' }}>Video plays</p>
                      <p className="text-[13px] md:text-sm text-[#4A4A6A] leading-relaxed">Short-form videos using your track as the sound.</p>
                    </div>
                  </div>
                  {/* Instagram */}
                  <div className="relative overflow-hidden p-6 md:p-7 flex flex-col justify-between md:border-l"
                    style={{ borderColor: 'rgba(0,160,80,0.12)' }}>
                    <div className="absolute inset-0 pointer-events-none" style={{
                      backgroundImage: 'repeating-linear-gradient(-45deg, rgba(0,160,80,0.045) 0px, rgba(0,160,80,0.045) 1px, transparent 1px, transparent 14px)',
                    }} />
                    <div className="relative z-10">
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.22em] mb-5 block" style={{ color: '#00A050' }}>Instagram</span>
                      <p className="font-black leading-none mb-1"
                        style={{ fontSize: 'clamp(42px, 4.5vw, 58px)', color: '#00A050', letterSpacing: '-0.04em' }}>840K</p>
                      <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.18em] mb-4" style={{ color: 'rgba(0,160,80,0.45)' }}>Reel reach</p>
                      <p className="text-[13px] md:text-sm text-[#4A4A6A] leading-relaxed">Reels extend your campaign beyond the core audience.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RISK — 5/12, purple crosshatch ── */}
          <motion.div variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto md:col-span-5 flex flex-col">
            <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
              style={{ background: 'rgba(124,59,237,0.05)', border: '1.5px solid rgba(124,59,237,0.14)', minHeight: 300 }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, rgba(124,59,237,0.055) 0px, rgba(124,59,237,0.055) 1px, transparent 1px, transparent 14px)',
              }} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between px-7 pt-5 pb-4"
                  style={{ borderBottom: '1px solid rgba(124,59,237,0.12)' }}>
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.22em]" style={{ color: '#7C3BED' }}>Risk</span>
                  <Shield size={11} style={{ color: '#7C3BED' }} />
                </div>
                <div className="flex-1 px-7 pt-7 pb-4 flex flex-col">
                  <p className="font-black leading-none mb-1"
                    style={{ fontSize: 'clamp(52px, 5.5vw, 70px)', color: '#7C3BED', letterSpacing: '-0.04em' }}>0%</p>
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.22em] mb-6"
                    style={{ color: 'rgba(124,59,237,0.45)' }}>Payment risk</p>
                  <div className="h-px mb-5" style={{ background: 'rgba(124,59,237,0.12)' }} />
                  <h3 className="font-black text-[#0F0F1A] tracking-tight mb-2"
                    style={{ fontSize: 'clamp(14px, 1.4vw, 17px)', lineHeight: 1.2 }}>
                    0% wasted budget
                  </h3>
                  <p className="text-sm text-[#4A4A6A] leading-relaxed flex-1">
                    If performance doesn't happen, funds stay in escrow. You never pay for nothing.
                  </p>
                </div>
                <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(124,59,237,0.12)' }}>
                  {[{ val: 'Escrow', label: 'Protected' }, { val: 'Auto', label: 'Release' }].map((s, j) => (
                    <div key={j} className="py-4 text-center"
                      style={{ borderRight: j === 0 ? '1px solid rgba(124,59,237,0.10)' : 'none' }}>
                      <p className="font-black text-sm leading-none" style={{ color: '#7C3BED' }}>{s.val}</p>
                      <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em] mt-1" style={{ color: 'rgba(124,59,237,0.45)' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── CLARITY — 4/12, blue vertical lines ── */}
          <motion.div variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto md:col-span-4 flex flex-col">
            <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
              style={{ background: 'rgba(37,99,235,0.05)', border: '1.5px solid rgba(37,99,235,0.14)', minHeight: 260 }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, rgba(37,99,235,0.06) 0px, rgba(37,99,235,0.06) 1px, transparent 1px, transparent 20px)',
              }} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between px-7 pt-5 pb-4"
                  style={{ borderBottom: '1px solid rgba(37,99,235,0.12)' }}>
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Clarity</span>
                  <CheckCircle size={9} style={{ color: '#2563EB' }} />
                </div>
                <div className="flex-1 px-7 pt-6 pb-4 flex flex-col">
                  <p className="font-black leading-none mb-1"
                    style={{ fontSize: 'clamp(48px, 5vw, 62px)', color: '#2563EB', letterSpacing: '-0.04em' }}>100%</p>
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.22em] mb-5"
                    style={{ color: 'rgba(37,99,235,0.45)' }}>Transparent</p>
                  <div className="h-px mb-4" style={{ background: 'rgba(37,99,235,0.12)' }} />
                  <h3 className="font-black text-[#0F0F1A] tracking-tight mb-2"
                    style={{ fontSize: 'clamp(13px, 1.3vw, 16px)', lineHeight: 1.2 }}>
                    No hidden terms
                  </h3>
                  <p className="text-sm text-[#4A4A6A] leading-relaxed flex-1">
                    Every campaign shows deliverables, eligibility, and payout before creators apply.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── PAYOUT — 8/12, amber, horizontal rules ── */}
          <motion.div variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto md:col-span-8 flex flex-col">
            <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
              style={{ background: 'rgba(217,119,6,0.05)', border: '1.5px solid rgba(217,119,6,0.14)', minHeight: 260 }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(180deg, rgba(217,119,6,0.07) 0px, rgba(217,119,6,0.07) 1px, transparent 1px, transparent 22px)',
              }} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between px-7 pt-5 pb-4"
                  style={{ borderBottom: '1px solid rgba(217,119,6,0.12)' }}>
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.22em]" style={{ color: '#D97706' }}>Payout</span>
                </div>
                <div className="flex-1 px-7 pt-7 pb-4 flex flex-col">
                  <p className="font-black leading-none mb-1"
                    style={{ fontSize: 'clamp(52px, 5.5vw, 70px)', color: '#D97706', letterSpacing: '-0.04em' }}>48h</p>
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.22em] mb-6"
                    style={{ color: 'rgba(217,119,6,0.45)' }}>Avg. release time</p>
                  <div className="h-px mb-5" style={{ background: 'rgba(217,119,6,0.12)' }} />
                  <h3 className="font-black text-[#0F0F1A] tracking-tight mb-2"
                    style={{ fontSize: 'clamp(14px, 1.4vw, 17px)', lineHeight: 1.2 }}>
                    Payouts release automatically
                  </h3>
                  <p className="text-sm text-[#4A4A6A] leading-relaxed flex-1">
                    Once performance is verified, funds move. No invoices, no manual release, no waiting on either side.
                  </p>
                </div>
                <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(217,119,6,0.12)' }}>
                  {[{ val: '0', label: 'Manual steps' }, { val: '₦2.4M+', label: 'Paid out' }].map((s, j) => (
                    <div key={j} className="py-4 text-center"
                      style={{ borderRight: j === 0 ? '1px solid rgba(217,119,6,0.10)' : 'none' }}>
                      <p className="font-black text-sm leading-none" style={{ color: '#D97706' }}>{s.val}</p>
                      <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em] mt-1" style={{ color: 'rgba(217,119,6,0.45)' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </ScrollCarousel>
      </div>
    </section>
  );
}

// ─── 2. Phone Showcase ────────────────────────────────────────────────────────

function PhoneShowcase() {
  return (
    <section id="phone-showcase" className="py-12 md:py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Split header */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="mb-8 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.div variants={fadeUp}><SectionLabel>Mobile app</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              Manage your campaign <br className="max-md:hidden" />from anywhere.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-base text-[#4A4A6A] max-w-xs md:text-right md:pb-1"
            style={{ lineHeight: 1.6 }}>
            Built for creators and artists running fast-moving campaigns — all from your phone.
          </motion.p>
        </motion.div>

        <ScrollCarousel count={3} gridClass="md:grid-cols-3">

          {/* Creator App — purple, crosshatch */}
          <motion.div variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto h-full">
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
                    style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.2 }}>Track earnings <br className="max-md:hidden" />&amp; campaigns</h3>
                </div>
                <div className="flex-1 relative overflow-hidden min-h-[300px] md:min-h-0">
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
          <motion.div variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto h-full">
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
                    style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.2 }}>Manage live <br className="max-md:hidden" />campaigns</h3>
                </div>
                <div className="flex-1 relative overflow-hidden min-h-[300px] md:min-h-0">
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
          <motion.div variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto h-full">
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
                    style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', lineHeight: 1.2 }}>Real-time <br className="max-md:hidden" />performance</h3>
                </div>
                <div className="flex-1 relative overflow-hidden min-h-[300px] md:min-h-0">
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

        </ScrollCarousel>
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

const REELS_ROW_1 = [
  { thumb: '/mockups/creator-1.jpg', avatar: '/mockups/avatar-1.png', name: 'Tolu Adeyemi', handle: '@toluade', campaign: 'Jazzy Song — Ayra Starr', platform: 'TikTok', likes: '14.2K' },
  { thumb: '/mockups/art-cover-3.png', avatar: '/mockups/avatar-2.png', name: 'Rema Fan', handle: '@remafan_', campaign: 'Ozeba — Rema', platform: 'Instagram', likes: '9.8K' },
  { thumb: '/mockups/creator-2.jpg', avatar: '/mockups/avatar-3.png', name: 'Chidi Ezike', handle: '@chidi.e', campaign: 'With You — Davido', platform: 'TikTok', likes: '22.1K' },
  { thumb: '/mockups/art-cover-1.png', avatar: '/mockups/avatar-4.png', name: 'Sola Babs', handle: '@solababs', campaign: 'Q2 Promo — MTN', platform: 'TikTok', likes: '8.5K' },
  { thumb: '/mockups/creator-3.jpg', avatar: '/mockups/avatar-5.png', name: 'Kemi Ade', handle: '@keminade', campaign: 'Jazzy Song — Ayra Starr', platform: 'Instagram', likes: '31.4K' },
  { thumb: '/mockups/art-cover-4.png', avatar: '/mockups/avatar-6.png', name: 'Dami Okon', handle: '@damiokon', campaign: 'Ozeba — Rema', platform: 'TikTok', likes: '18.7K' },
  { thumb: '/mockups/creator-4.jpg', avatar: '/mockups/avatar-1.png', name: 'Femi Lagos', handle: '@femilagos', campaign: 'With You — Davido', platform: 'TikTok', likes: '12.3K' },
  { thumb: '/mockups/art-cover-5.png', avatar: '/mockups/avatar-2.png', name: 'Temi Coker', handle: '@temicoker', campaign: 'Q2 Promo — MTN', platform: 'Instagram', likes: '27.0K' },
];

const REELS_ROW_2 = [
  { thumb: '/mockups/art-cover-2.png', avatar: '/mockups/avatar-3.png', name: 'Banky W', handle: '@bankyw', campaign: 'With You — Davido', platform: 'Instagram', likes: '45.2K' },
  { thumb: '/mockups/creator-2.jpg', avatar: '/mockups/avatar-4.png', name: 'Nkechi Ali', handle: '@nkechi.ali', campaign: 'Ozeba — Rema', platform: 'TikTok', likes: '19.6K' },
  { thumb: '/mockups/art-cover-6.png', avatar: '/mockups/avatar-5.png', name: 'Seun Kuti', handle: '@seunkuti_', campaign: 'Jazzy Song — Ayra Starr', platform: 'TikTok', likes: '11.1K' },
  { thumb: '/mockups/creator-1.jpg', avatar: '/mockups/avatar-6.png', name: 'Ify Okeke', handle: '@ifybrand', campaign: 'Q2 Promo — MTN', platform: 'Instagram', likes: '33.8K' },
  { thumb: '/mockups/art-cover-3.png', avatar: '/mockups/avatar-1.png', name: 'Deji Awe', handle: '@deji.awe', campaign: 'With You — Davido', platform: 'TikTok', likes: '7.4K' },
  { thumb: '/mockups/creator-3.jpg', avatar: '/mockups/avatar-2.png', name: 'Zainab Mo', handle: '@zainabmo', campaign: 'Jazzy Song — Ayra Starr', platform: 'TikTok', likes: '24.9K' },
  { thumb: '/mockups/art-cover-1.png', avatar: '/mockups/avatar-3.png', name: 'Kunle Rex', handle: '@kunlerex', campaign: 'Ozeba — Rema', platform: 'Instagram', likes: '16.3K' },
  { thumb: '/mockups/creator-4.jpg', avatar: '/mockups/avatar-4.png', name: 'Amaka Eze', handle: '@amaka.eze', campaign: 'Q2 Promo — MTN', platform: 'TikTok', likes: '38.5K' },
];

function ReelCard({ reel }: { reel: typeof REELS_ROW_1[number] }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-2xl"
      style={{ width: 148, aspectRatio: '9/16' }}
    >
      {/* Thumbnail */}
      <Image src={reel.thumb} alt="" fill className="object-cover" sizes="148px" />

      {/* Gradient */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.22) 0%, transparent 35%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.88) 100%)',
      }} />

      {/* Platform badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="text-[9px] font-black uppercase tracking-[0.12em] text-white px-2 py-0.5 rounded-full"
          style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.18)' }}>
          {reel.platform}
        </span>
      </div>

      {/* Play icon */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="rounded-full flex items-center justify-center"
          style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.25)' }}>
          <svg width="12" height="14" viewBox="0 0 12 14" fill="white">
            <path d="M1 1.5l10 5-10 5V1.5z" />
          </svg>
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-3 pb-3">
        {/* Campaign */}
        <p className="text-white/70 font-medium leading-tight mb-1.5" style={{ fontSize: 9 }}>
          {reel.campaign}
        </p>
        {/* Creator row */}
        <div className="flex items-center gap-1.5">
          <div className="rounded-full overflow-hidden shrink-0 relative" style={{ width: 20, height: 20, border: '1.5px solid rgba(255,255,255,0.4)' }}>
            <Image src={reel.avatar} alt="" fill className="object-cover" sizes="20px" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold truncate" style={{ fontSize: 10 }}>{reel.name}</p>
            <p className="text-white/55 truncate" style={{ fontSize: 8.5 }}>{reel.handle}</p>
          </div>
        </div>
        {/* Likes */}
        <div className="flex items-center gap-1 mt-1.5">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="font-semibold text-white/50" style={{ fontSize: 8.5 }}>{reel.likes}</span>
        </div>
      </div>
    </div>
  );
}

function CreatorReel() {
  const row1 = [...REELS_ROW_1, ...REELS_ROW_1];
  const row2 = [...REELS_ROW_2, ...REELS_ROW_2];

  return (
    <section id="creator-community" className="py-12 md:py-24 overflow-hidden relative" style={{ background: '#F7F4FF', borderTop: '1px solid rgba(124,59,237,0.12)' }}>

      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, rgba(124,59,237,0.055) 0px, rgba(124,59,237,0.055) 1px, transparent 1px, transparent 14px)',
      }} />

      {/* Soft radial glow — centre */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,59,237,0.06) 0%, transparent 70%)',
      }} />

      {/* Header */}
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
        className="relative z-10 max-w-6xl mx-auto px-6 mb-8 md:mb-14 flex flex-col items-start text-left md:items-center md:text-center gap-4">
        <motion.div variants={fadeUp}><SectionLabel>Creator community</SectionLabel></motion.div>
        <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
          Real songs. <br className="max-md:hidden" />Real creators. <br className="max-md:hidden" />Real reach.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-base text-[#4A4A6A] md:max-w-[420px]" style={{ lineHeight: 1.6 }}>
          Campaigns across TikTok, Instagram, YouTube and more. All tracked and verified.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link href="/sponsors"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm w-full sm:w-auto"
            style={{ background: '#7C3BED', color: 'white' }}>
            Run a Campaign <ArrowRight size={14} />
          </Link>
          <Link href="/creators"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm w-full sm:w-auto"
            style={{ background: 'rgba(124,59,237,0.10)', color: '#7C3BED', border: '1.5px solid rgba(124,59,237,0.22)' }}>
            Join as Creator <ArrowRight size={14} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Row 1 — scrolls left */}
      <div className="relative z-10 mb-3">
        <div className="flex animate-marquee gap-3" style={{ width: 'max-content' }}>
          {row1.map((r, i) => <ReelCard key={i} reel={r} />)}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative z-10">
        <div className="flex animate-marquee-reverse gap-3" style={{ width: 'max-content' }}>
          {row2.map((r, i) => <ReelCard key={i} reel={r} />)}
        </div>
      </div>

    </section>
  );
}

// ─── 4. Trust Pillars ─────────────────────────────────────────────────────────

const pillars = [
  {
    stat: '₦2.4M+', statLabel: 'Held in escrow',
    title: 'Escrow',
    description: "Funds locked before campaigns go live. Creators know the money is there — no ghosting.",
    accent: '#7C3BED', bgTint: 'rgba(124,59,237,0.05)', border: 'rgba(124,59,237,0.14)',
    pattern: 'repeating-linear-gradient(-45deg, rgba(124,59,237,0.055) 0px, rgba(124,59,237,0.055) 1px, transparent 1px, transparent 14px)',
    Icon: Lock,
    stats: [{ val: '100%', label: 'Pre-locked' }, { val: '₦0', label: 'Early access' }],
  },
  {
    stat: '98%', statLabel: 'On-time payouts',
    title: 'Validation',
    description: 'Performance verified automatically. No self-reporting. No manipulation. No fake engagement.',
    accent: '#00A050', bgTint: 'rgba(0,160,80,0.05)', border: 'rgba(0,160,80,0.14)',
    pattern: 'radial-gradient(circle, rgba(0,160,80,0.13) 1px, transparent 1px)',
    patternSize: '18px 18px',
    Icon: CheckCircle,
    stats: [{ val: '0', label: 'Manual steps' }, { val: '48h', label: 'Avg. payout' }],
  },
  {
    stat: '0', statLabel: 'Hidden terms',
    title: 'Transparency',
    description: 'Everything is visible upfront. Requirements, payouts, and rules — all clear before creators join.',
    accent: '#D97706', bgTint: 'rgba(217,119,6,0.05)', border: 'rgba(217,119,6,0.14)',
    pattern: 'repeating-linear-gradient(90deg, rgba(217,119,6,0.06) 0px, rgba(217,119,6,0.06) 1px, transparent 1px, transparent 20px)',
    Icon: Shield,
    stats: [{ val: '100%', label: 'Public briefs' }, { val: 'Pre-read', label: 'Requirements' }],
  },
];

function TrustPillars() {
  return (
    <section id="trust" className="py-12 md:py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Split header with inline stat trio */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-8">
          <div>
            <motion.div variants={fadeUp}><SectionLabel>Why trust Varmply</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              Every naira is tied <br className="max-md:hidden" />to performance.
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
        <ScrollCarousel count={3} gridClass="md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div key={i} variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto h-full">
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
        </ScrollCarousel>

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
    <section id="testimonials" className="py-12 md:py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="flex flex-col items-start text-left md:items-center md:text-center mb-8 md:mb-14 gap-4">
          <motion.div variants={fadeUp}><SectionLabel>Testimonials</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
            What creators<br />are saying.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-[#4A4A6A] md:max-w-[420px]" style={{ lineHeight: 1.6 }}>
            Real experiences from verified creators and sponsors on Varmply.
          </motion.p>
        </motion.div>

        {/* Editorial testimonial cards */}
        <ScrollCarousel count={3} gridClass="md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto h-full">
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
        </ScrollCarousel>

      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function HomeContent() {
  const searchParams = useSearchParams();
  const section = searchParams.get('section');

  useEffect(() => {
    if (!section) return;
    const el = document.querySelector('main');
    if (!el) return;
    const report = () => window.parent.postMessage({ type: 'varmply-section-height', height: el.scrollHeight }, '*');
    report();
    const ro = new ResizeObserver(report);
    ro.observe(el);
    return () => ro.disconnect();
  }, [section]);

  if (section === 'hero') return <HeroSection />;
  if (section === 'how-it-works') return <HowItWorks />;
  if (section === 'why-varmply') return <WhyVarmply />;
  if (section === 'phone-showcase') return <PhoneShowcase />;
  if (section === 'creator-community') return <CreatorReel />;
  if (section === 'testimonials') return <Testimonials />;
  if (section === 'site-footer') return null;

  return (
    <>
      <HeroSection />
      <HowItWorks />
      <WhyVarmply />
      <PhoneShowcase />
      <CreatorReel />
      <TrustPillars />
      <Testimonials />
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}
