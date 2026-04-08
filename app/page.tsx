'use client';

import HeroSection from '@/components/HeroSection';
import LogoBar from '@/components/LogoBar';
import { PhoneFrame } from '@/components/ui/PhoneFrame';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Shield, Wallet,
  BarChart2, Zap, Users, Star, Lock, AlignLeft, CheckSquare,
} from 'lucide-react';
import { BrowserChrome, DashboardSkeleton, CreateCampaignSkeleton } from '@/components/MockupSkeletons';

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
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="mb-12 flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp}><SectionLabel>How it works</SectionLabel></motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-black text-[#0F0F1A] tracking-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0, maxWidth: 600 }}
          >
            Designed for how<br />campaigns actually work.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base text-[#4A4A6A]" style={{ lineHeight: 1.6, maxWidth: 440 }}>
            From discovery to payout — every step is structured, tracked, and protected.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Purple hero — My Campaigns browser */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] col-span-1 md:col-span-2 shadow-sm"
            style={{ background: '#F4F0FD', border: '1px solid rgba(124,59,237,0.15)', height: 440 }}
          >
            <p className="absolute z-20 top-7 left-8 text-[10px] font-bold text-[#7C3BED] uppercase tracking-[0.18em]">Campaign Management</p>
            <p className="absolute z-20 top-[46px] left-8 text-2xl font-black text-[#0F0F1A] leading-tight mt-0.5">My campaigns</p>
            <div className="absolute rounded-xl overflow-hidden shadow-2xl" style={{ top: 108, left: 36, right: -80, border: '1px solid rgba(0,0,0,0.05)' }}>
              <BrowserChrome url="app.varmply.com/campaigns" />
              <div style={{ transform: 'scale(0.85)', transformOrigin: 'top left', width: '117%' }}>
                <DashboardSkeleton />
              </div>
            </div>
          </motion.div>

          {/* Green earnings stat */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] p-8 shadow-sm"
            style={{ background: '#E6F5EC', border: '1px solid rgba(0,160,80,0.15)', height: 440 }}
          >
            <div className="relative flex h-full flex-col">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm" style={{ border: '1px solid rgba(0,160,80,0.1)' }}>
                <Wallet size={26} color="#00A050" />
              </div>
              <p className="text-[42px] font-black text-[#00A050] tracking-tight leading-none">₦285K</p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#00A050] opacity-80">earned this month</p>
              <div className="h-px bg-[#00A050] opacity-10 my-6" />
              <div className="mt-auto flex flex-col gap-3">
                {['Paystack ₦25K', 'PiggyVest ₦18K', 'Flutterwave ₦40K'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs font-semibold text-[#0F0F1A]">
                    <CheckCircle size={14} color="#00A050" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Amber — Create Campaign, browser clips left */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] shadow-sm"
            style={{ background: '#FDF1E6', border: '1px solid rgba(217,119,6,0.15)', height: 360 }}
          >
            <p className="absolute z-20 top-7 left-7 text-[10px] font-bold text-[#D97706] uppercase tracking-[0.18em]">Sponsor Tools</p>
            <p className="absolute z-20 top-[46px] left-7 text-xl font-black text-[#0F0F1A] leading-snug mt-0.5">Create a campaign<br />in minutes</p>
            <div className="absolute rounded-xl overflow-hidden shadow-2xl" style={{ top: 116, left: -100, width: 480, border: '1px solid rgba(0,0,0,0.05)' }}>
              <BrowserChrome url="app.varmply.com/campaigns/create" />
              <div className="relative overflow-hidden bg-white" style={{ height: 300 }}>
                <div style={{ transform: 'scale(0.9)', transformOrigin: 'top left', width: '110%' }}>
                  <CreateCampaignSkeleton />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rose — Create Campaign, chrome clips top */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] shadow-sm"
            style={{ background: '#FCE8EC', border: '1px solid rgba(225,29,72,0.15)', height: 360 }}
          >
            <div className="absolute rounded-xl overflow-hidden shadow-xl" style={{ top: -22, left: 14, width: 380, border: '1px solid rgba(0,0,0,0.05)' }}>
              <BrowserChrome url="app.varmply.com/campaigns/create" />
              <div className="relative overflow-hidden bg-white" style={{ height: 240 }}>
                <div style={{ transform: 'scale(0.8)', transformOrigin: 'top left', width: '125%' }}>
                  <CreateCampaignSkeleton />
                </div>
              </div>
            </div>
            <p className="absolute z-20 bottom-7 left-7 text-[10px] font-bold text-[#E11D48] uppercase tracking-[0.18em]">Clear requirements</p>
            <p className="absolute z-20 bottom-[44px] left-7 text-xl font-black text-[#0F0F1A] leading-snug mb-0.5">Set rules.<br />Creators apply.</p>
          </motion.div>

          {/* Dark trust card - Editorial stark black */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] p-8"
            style={{ background: '#0F0F1A', height: 360 }}
          >
            <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative flex h-full flex-col">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full" style={{ background: '#7C3BED' }}>
                <Shield size={20} color="white" />
              </div>
              <p className="text-2xl font-black text-white tracking-tight">0% payment risk</p>
              <p className="mt-2 text-sm text-white/50 leading-relaxed max-w-[200px]">Funds only leave escrow when performance is validated.</p>
              <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-white/10">
                {['Escrow-protected budget', 'Automated validation'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-white/70 font-semibold">
                    <CheckCircle size={12} color="#7C3BED" />
                    {item}
                  </div>
                ))}
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
    <section className="h-auto pb-24 md:pb-32 relative" style={{ background: '#FFFFFF' }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.05) 50%, transparent)' }} />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <motion.div variants={fadeUp}>
              <SectionLabel>Mobile app</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              The full platform.<br />In your pocket.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-base text-[#4A4A6A] max-w-xs md:text-right md:pb-1" style={{ lineHeight: 1.6 }}>
            Creator and sponsor dashboards built for mobile-first Nigeria.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {/* Purple — creator earnings */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] px-8 pt-8 shadow-sm"
            style={{ background: '#F0EBFC', border: '1px solid rgba(124,59,237,0.15)', height: 380 }}
          >
            <p className="mb-0.5 text-[10px] font-bold text-[#7C3BED] uppercase tracking-[0.18em]">Creator app</p>
            <p className="text-xl font-black text-[#0F0F1A] leading-tight mt-1">Track earnings<br />&amp; campaigns</p>
            <div className="mt-6 flex justify-center">
              <PhoneFrame screenBg="#F9FAFB" scale={0.74}>
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
                      <div key={i} className="mb-1.5 flex items-center gap-2.5 rounded-lg px-3 py-2.5" style={{ background: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
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
          </motion.div>

          {/* Green — sponsor dashboard */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] px-8 pt-8 shadow-sm"
            style={{ background: '#E6F5EC', border: '1px solid rgba(0,160,80,0.15)', height: 380 }}
          >
            <p className="mb-0.5 text-[10px] font-bold text-[#00A050] uppercase tracking-[0.18em]">Sponsor app</p>
            <p className="text-xl font-black text-[#0F0F1A] leading-tight mt-1">Manage live<br />campaigns</p>
            <div className="mt-6 flex justify-center">
              <PhoneFrame screenBg="#F9FAFB" scale={0.74}>
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
                      <div key={i} className="mb-1.5 flex items-center gap-2.5 rounded-lg px-3 py-2.5" style={{ background: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
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
          </motion.div>

          {/* Blue — analytics */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] px-8 pt-8 shadow-sm"
            style={{ background: '#EBF5FF', border: '1px solid rgba(37,99,235,0.15)', height: 380 }}
          >
            <p className="mb-0.5 text-[10px] font-bold text-[#2563EB] uppercase tracking-[0.18em]">Analytics</p>
            <p className="text-xl font-black text-[#0F0F1A] leading-tight mt-1">Real-time<br />performance</p>
            <div className="mt-6 flex justify-center">
              <PhoneFrame screenBg="#F9FAFB" scale={0.74}>
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
                    <div key={i} className="mx-4 mb-2 flex items-center justify-between rounded-lg px-3 py-3" style={{ background: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                      <div>
                        <p className="text-[9px] text-[#8A8A9A]">{m.label}</p>
                        <p className="text-base font-bold text-[#1C1C1E]">{m.value}</p>
                      </div>
                      <span className="text-[10px] font-semibold rounded-full px-2 py-0.5" style={{ background: 'rgba(0,160,80,0.10)', color: '#00A050' }}>{m.change}</span>
                    </div>
                  ))}
                  <div className="mx-4 mt-1 rounded-lg p-3" style={{ background: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                    <p className="mb-2 text-[9px] text-[#8A8A9A]">Views over time</p>
                    <div className="flex items-end gap-1 h-14">
                      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? '#2563EB' : '#DBEAFE' }} />
                      ))}
                    </div>
                  </div>
                </div>
              </PhoneFrame>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 3. Creator Reel ──────────────────────────────────────────────────────────

function CreatorReel() {
  return (
    <section className="py-24" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="mb-12 flex flex-col items-center text-center gap-4"
        >
          <motion.div variants={fadeUp}><SectionLabel>Creator community</SectionLabel></motion.div>
          <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
            Real creators.<br />Real campaigns.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base" style={{ color: '#4A4A6A', maxWidth: 420, lineHeight: 1.6 }}>
            847+ creators earning from structured brand partnerships — no DMs, no guesswork.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/creators"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
              style={{ background: '#7C3BED', color: 'white' }}
            >
              Join as Creator <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Bento grid — col 1 spans 2 rows, cols 2+3 each have 2 stacked cards */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid gap-4 mb-12 grid-cols-1 md:grid-cols-3"
          style={{ gridTemplateRows: undefined }}
        >
          {/* Card 1 — tall featured, spans 2 rows */}
          <motion.div variants={fadeUp} className="relative overflow-hidden rounded-[32px] h-[440px] md:row-span-2 md:h-auto shadow-sm" style={{ minHeight: 220 }}>
            <Image src="/mockups/art-cover-3.png" alt="Jazzy Song campaign" fill className="object-cover" sizes="33vw" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }} />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#00A050] bg-white mb-3 shadow-sm">
                <CheckCircle size={12} color="#00A050" /> CREATOR ELIGIBLE
              </div>
              <p className="text-white font-black text-2xl leading-snug tracking-tight">Jazzy Song</p>
              <p className="text-white/80 font-bold text-xs mt-1 tracking-wide">₦120,000 · INSTAGRAM · 7 DAYS</p>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/20">
                <Image src="/mockups/avatar-1.png" alt="Ayra Starr" width={24} height={24} className="rounded-full object-cover border border-white/50" />
                <span className="text-white font-bold text-xs tracking-tight">Ayra Starr</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Rema / Ozeba */}
          <motion.div variants={fadeUp} className="relative overflow-hidden rounded-[32px] h-[220px] shadow-sm">
            <Image src="/mockups/art-cover-4.png" alt="Ozeba campaign" fill className="object-cover" sizes="33vw" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }} />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white font-black text-xl leading-tight tracking-tight">Ozeba</p>
              <p className="text-white/80 font-bold text-xs mt-1 tracking-wide">₦135,000 · TIKTOK</p>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/20">
                <Image src="/mockups/avatar-2.png" alt="Rema" width={20} height={20} className="rounded-full object-cover border border-white/50" />
                <span className="text-white font-bold text-[11px] tracking-tight">Rema</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 — Davido / With You */}
          <motion.div variants={fadeUp} className="relative overflow-hidden rounded-[32px] h-[220px] shadow-sm">
            <Image src="/mockups/davido-cover.png" alt="With You Album campaign" fill className="object-cover object-top" sizes="33vw" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }} />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white font-black text-xl leading-tight tracking-tight">With You Album</p>
              <p className="text-white/80 font-bold text-xs mt-1 tracking-wide">₦500,000 · MULTI-PLATFORM</p>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/20">
                <Image src="/mockups/avatar-3.png" alt="Davido" width={20} height={20} className="rounded-full object-cover border border-white/50" />
                <span className="text-white font-bold text-[11px] tracking-tight">Davido</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4 — purple stat */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] p-6 h-[220px]"
            style={{ background: 'rgba(124,59,237,0.05)', border: '1px solid rgba(124,59,237,0.14)' }}
          >
            <div className="relative flex flex-col h-full">
              <p className="font-black leading-none tracking-tight" style={{ fontSize: 'clamp(48px, 5vw, 64px)', color: '#7C3BED', letterSpacing: '-0.03em' }}>₦2.4M</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] mt-1" style={{ color: 'rgba(124,59,237,0.65)' }}>Distributed to creators</p>
              <div className="mt-auto pt-4 border-t" style={{ borderColor: 'rgba(124,59,237,0.14)' }}>
                <p className="text-xs font-semibold" style={{ color: '#4A4A6A' }}>Verified payouts this quarter alone</p>
              </div>
            </div>
          </motion.div>

          {/* Card 5 — green stat (pastel switch) */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] p-6 h-[220px]"
            style={{ background: '#E6F5EC', border: '1px solid rgba(0,160,80,0.15)' }}
          >
            <div className="relative">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm" style={{ border: '1px solid rgba(0,160,80,0.1)' }}>
                <Users size={18} color="#00A050" />
              </div>
              <p className="text-3xl font-black text-[#00A050] tracking-tight leading-none">847+</p>
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#00A050] border-t border-[#00A050]/10 pt-3 mt-3">active platform creators</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// WebMockup section removed and transferred to app/sponsors/page.tsx

// ─── 5. Trust Pillars ─────────────────────────────────────────────────────────

function TrustPillars() {
  const pillars = [
    {
      stat: '₦2.4M+',
      statLabel: 'Held in escrow',
      title: 'Escrow-First',
      description: "Sponsor budgets are locked before campaigns go live. Creators know funds exist — no ghosting, no excuses.",
      accent: '#7C3BED',
      bgTint: 'rgba(124,59,237,0.05)',
      border: 'rgba(124,59,237,0.14)',
    },
    {
      stat: '98%',
      statLabel: 'On-time payouts',
      title: 'Automated Validation',
      description: 'Submissions are checked programmatically. No favoritism, no back-and-forth — just clear pass/fail against the brief.',
      accent: '#00A050',
      bgTint: 'rgba(0,160,80,0.05)',
      border: 'rgba(0,160,80,0.14)',
    },
    {
      stat: '0',
      statLabel: 'Hidden terms',
      title: 'Transparent Rules',
      description: 'Every campaign brief is public. Eligibility, deliverables, payout amounts — all visible before you apply.',
      accent: '#D97706',
      bgTint: 'rgba(217,119,6,0.05)',
      border: 'rgba(217,119,6,0.14)',
    },
  ];

  return (
    <section className="py-24" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Editorial header row */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-xl">
            <motion.div variants={fadeUp}>
              <span className="inline-block rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] mb-6"
                style={{ background: 'rgba(124,59,237,0.08)', color: '#7C3BED' }}>
                Why trust Varmply
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp}
              className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              Built around<br />accountability.
            </motion.h2>
          </div>

          {/* Inline stat trio — top right */}
          <motion.div variants={fadeUp} className="flex gap-8 md:gap-10 md:pb-1 shrink-0">
            {pillars.map((p) => (
              <div key={p.stat}>
                <p className="font-black leading-none" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', color: '#0F0F1A' }}>{p.stat}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest mt-1.5" style={{ color: '#AAAABC' }}>{p.statLabel}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <motion.div key={i} variants={fadeUp}
              className="flex flex-col rounded-3xl p-8"
              style={{ background: p.bgTint, border: `1px solid ${p.border}` }}>
              {/* Stat */}
              <p className="font-black leading-none mb-1" style={{ fontSize: 'clamp(42px, 5vw, 56px)', color: p.accent, letterSpacing: '-0.03em' }}>
                {p.stat}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] mb-6" style={{ color: `${p.accent}AA` }}>
                {p.statLabel}
              </p>
              {/* Divider */}
              <div className="h-px mb-6" style={{ background: `${p.accent}20` }} />
              {/* Copy */}
              <h3 className="font-bold text-base mb-2" style={{ color: '#0F0F1A' }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4A4A6A' }}>{p.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footnote */}
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] mt-10"
          style={{ color: '#BBBBCC' }}>
          All data verified automatically — no manual overrides
        </motion.p>
      </div>
    </section>
  );
}

// ─── 6. Testimonials ──────────────────────────────────────────────────────────

const testimonials = [
  {
    name: 'Tolu Adeyemi', handle: 'toluade_', initials: 'T', color: '#7C3BED', avatar: '/mockups/avatar-1.png',
    text: "Finally a platform that actually pays. I used to get ghosted after posting. With Varmply, there's an escrow — my ₦25K was in my wallet within 48 hours.",
  },
  {
    name: 'Dami Oluwole', handle: 'dami.creates', initials: 'D', color: '#00A050', avatar: '/mockups/avatar-2.png',
    text: "The eligibility system is underrated. I don't waste time applying for campaigns I won't get. Varmply only shows me what I qualify for.",
  },
  {
    name: 'Chidi Eze', handle: 'chidieze_', initials: 'C', color: '#2563EB', avatar: '/mockups/avatar-3.png',
    text: "I was skeptical at first. But the campaign requirements were so clear — no back-and-forth with the brand. I posted, hit the metrics, got validated. Done.",
  },
  {
    name: 'Sarah Jenkins', handle: 'sarah.j', initials: 'S', color: '#E11D48', avatar: '/mockups/avatar-4.png',
    text: "Finally a platform that treats creators like professionals. The brief was clear, the timeline was fair, and the payment came through exactly as promised.",
  },
  {
    name: 'Emeka Nwosu', handle: 'emeka.ng', initials: 'E', color: '#D97706', avatar: '/mockups/avatar-5.png',
    text: "As a sponsor, Varmply gave us a level of accountability we never had before. We could see exactly which creators hit their targets before releasing payment.",
  },
  {
    name: 'Marcus Thorne', handle: 'marcus_t', initials: 'M', color: '#0891B2', avatar: '/mockups/avatar-6.png',
    text: "The escrow system removed so much anxiety from the process. I knew from day one that if I delivered the work, the money would be there. No chasing required.",
  },
];

function Testimonials() {
  return (
    <section className="py-24" style={{ background: '#F7F7F9' }}>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Editorial Header */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="flex flex-col items-center text-center mb-16 gap-4"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Testimonials</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp}
            className="font-black text-[#0F0F1A] tracking-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
            What creators<br />are saying.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-[#4A4A6A]" style={{ maxWidth: 420, lineHeight: 1.6 }}>
            Real experiences from verified creators and sponsors on Varmply.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i} variants={fadeUp}
              className="relative flex flex-col rounded-[24px] p-8 overflow-hidden hover-lift card-hover"
              style={{ background: `${t.color}0D`, border: `1.5px solid ${t.color}15` }}
            >
              {/* Giant ghost quote marker */}
              <div className="absolute -top-6 -right-6 font-serif select-none pointer-events-none leading-none"
                   style={{ fontSize: '14rem', color: t.color, opacity: 0.08 }}>
                &rdquo;
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Sticker-like star pill */}
                <div className="inline-flex items-center gap-0.5 mb-6 px-2.5 py-1.5 rounded-full bg-white shadow-sm w-max"
                     style={{ border: `1px solid ${t.color}20` }}>
                  {Array(5).fill(0).map((_, s) => (
                    <Star key={s} size={11} fill={t.color} color={t.color} />
                  ))}
                </div>

                <p className="text-base font-bold leading-relaxed flex-1" style={{ color: '#0F0F1A' }}>
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-6 mt-6 border-t" style={{ borderColor: `${t.color}20` }}>
                  {t.avatar ? (
                    <div className="h-11 w-11 rounded-xl shrink-0 shadow-sm relative overflow-hidden" style={{ border: '2px solid rgba(255,255,255,0.8)' }}>
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div
                      className="h-11 w-11 rounded-xl flex items-center justify-center text-base font-black text-white shrink-0 shadow-sm"
                      style={{ background: t.color, border: '2px solid rgba(255,255,255,0.5)' }}
                    >
                      {t.initials}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-black tracking-tight" style={{ color: '#0F0F1A' }}>{t.name}</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] mt-0.5" style={{ color: t.color }}>@{t.handle}</p>
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
      <LogoBar />
      <BentoFeature />
      <PhoneShowcase />
      <CreatorReel />
      {/* WebMockup moved to Sponsors Page */}
      <TrustPillars />
      <Testimonials />
    </>
  );
}
