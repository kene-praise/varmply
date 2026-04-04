'use client';

import HeroSection from '@/components/HeroSection';
import LogoBar from '@/components/LogoBar';
import CTABanner from '@/components/CTABanner';
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
    <span className="inline-block rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: '#EDE9FF', color: '#7C3BED' }}>
      {children}
    </span>
  );
}

// ─── 1. Bento Feature Section ─────────────────────────────────────────────────

function BentoFeature() {
  return (
    <section className="py-24" style={{ background: '#F7F7F9' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="mb-12"
        >
          <motion.div variants={fadeUp}><SectionLabel>How it works</SectionLabel></motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-bold text-[#0F0F1A]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1, maxWidth: 600 }}
          >
            Designed for how campaigns actually work.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-base text-[#4A4A6A]" style={{ maxWidth: 480 }}>
            From discovery to payout — every step is structured, tracked, and protected.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Purple hero — My Campaigns browser */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-3xl col-span-1 md:col-span-2"
            style={{ background: '#7C3BED', height: 440 }}
          >
            <p className="absolute z-20 top-7 left-7 text-[10px] font-semibold text-white/50 uppercase tracking-widest">Campaign Management</p>
            <p className="absolute z-20 top-[46px] left-7 text-xl font-bold text-white leading-tight mt-0.5">My campaigns</p>
            <div className="absolute rounded-xl overflow-hidden" style={{ top: 108, left: 36, right: -80, boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}>
              <BrowserChrome url="app.varmply.com/campaigns" />
              <div style={{ transform: 'scale(0.85)', transformOrigin: 'top left', width: '117%' }}>
                <DashboardSkeleton />
              </div>
            </div>
          </motion.div>

          {/* Green earnings stat */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-3xl p-7"
            style={{ background: '#00A050', height: 440 }}
          >
            <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />
            <div className="relative flex h-full flex-col">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: 'rgba(255,255,255,0.22)' }}>
                <Wallet size={22} color="white" />
              </div>
              <p className="text-4xl font-bold text-white">₦285K</p>
              <p className="mt-1.5 text-sm font-semibold text-white">earned this month</p>
              <p className="mt-1 text-xs text-white/70">across 3 active campaigns</p>
              <div className="mt-auto flex flex-col gap-2.5 pt-8">
                {['Paystack ₦25K', 'PiggyVest ₦18K', 'Flutterwave ₦40K'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle size={11} color="white" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Amber — Create Campaign, browser clips left */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-3xl"
            style={{ background: '#D97706', height: 360 }}
          >
            <p className="absolute z-20 top-7 left-6 text-[10px] font-semibold text-white/50 uppercase tracking-widest">Sponsor Tools</p>
            <p className="absolute z-20 top-[46px] left-6 text-lg font-bold text-white leading-snug mt-0.5">Create a campaign<br />in minutes</p>
            <div className="absolute rounded-xl overflow-hidden" style={{ top: 116, left: -100, width: 480, boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}>
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
            className="relative overflow-hidden rounded-3xl"
            style={{ background: '#E11D48', height: 360 }}
          >
            <div className="absolute rounded-xl overflow-hidden" style={{ top: -22, left: 14, width: 380, boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}>
              <BrowserChrome url="app.varmply.com/campaigns/create" />
              <div className="relative overflow-hidden bg-white" style={{ height: 240 }}>
                <div style={{ transform: 'scale(0.8)', transformOrigin: 'top left', width: '125%' }}>
                  <CreateCampaignSkeleton />
                </div>
              </div>
            </div>
            <p className="absolute z-20 bottom-6 left-6 text-[10px] font-semibold text-white/50 uppercase tracking-widest">Clear requirements</p>
            <p className="absolute z-20 bottom-[38px] left-6 text-lg font-bold text-white leading-snug mb-0.5">Set rules.<br />Creators apply.</p>
          </motion.div>

          {/* Dark trust card */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-3xl p-7"
            style={{ background: '#0D0D2B', border: '1px solid rgba(255,255,255,0.08)', height: 360 }}
          >
            <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="relative flex h-full flex-col">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: 'rgba(124,59,237,0.20)' }}>
                <Shield size={22} color="#9D6FF5" />
              </div>
              <p className="text-lg font-bold text-white">0% payment risk</p>
              <p className="mt-2 text-sm text-white/50">Funds only leave escrow when performance is validated. No pay-and-pray.</p>
              <div className="mt-auto flex flex-col gap-2.5 pt-6">
                {['Escrow-protected budget', 'Automated validation', 'Transparent reporting'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle size={11} color="#9D6FF5" />
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
    <section className="overflow-hidden h-auto md:h-[660px] pb-16 md:pb-0" style={{ background: '#07071A' }}>
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="mb-10 text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'rgba(124,59,237,0.20)', color: '#A78BFA' }}>
              Mobile app
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-bold text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1 }}>
            The full platform. In your pocket.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-base mx-auto" style={{ color: 'rgba(255,255,255,0.50)', maxWidth: 440 }}>
            Creator and sponsor dashboards built for mobile-first Nigeria.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {/* Purple — creator earnings */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-3xl px-8 pt-8"
            style={{ background: '#7C3BED', height: 460 }}
          >
            <p className="mb-0.5 text-[10px] font-semibold text-white/50 uppercase tracking-widest">Creator app</p>
            <p className="text-lg font-bold text-white leading-tight">Track earnings<br />&amp; campaigns</p>
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
            className="relative overflow-hidden rounded-3xl px-8 pt-8"
            style={{ background: '#00A050', height: 460 }}
          >
            <p className="mb-0.5 text-[10px] font-semibold text-white/50 uppercase tracking-widest">Sponsor app</p>
            <p className="text-lg font-bold text-white leading-tight">Manage live<br />campaigns</p>
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
            className="relative overflow-hidden rounded-3xl px-8 pt-8"
            style={{ background: '#2563EB', height: 460 }}
          >
            <p className="mb-0.5 text-[10px] font-semibold text-white/50 uppercase tracking-widest">Analytics</p>
            <p className="text-lg font-bold text-white leading-tight">Real-time<br />performance</p>
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
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <motion.div variants={fadeUp}><SectionLabel>Creator community</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-bold text-[#0F0F1A]" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1 }}>
              Real creators.<br />Real campaigns.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-base text-[#4A4A6A]" style={{ maxWidth: 400 }}>
              847+ creators earning from structured brand partnerships — no DMs, no guesswork.
            </motion.p>
          </div>
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
          <motion.div variants={fadeUp} className="relative overflow-hidden rounded-3xl h-[440px] md:row-span-2 md:h-auto" style={{ minHeight: 220 }}>
            <Image src="/mockups/art-cover-3.png" alt="Jazzy Song campaign" fill className="object-cover" sizes="33vw" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)' }} />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold text-white mb-2.5" style={{ background: 'rgba(0,160,80,0.90)' }}>
                <CheckCircle size={10} color="white" /> Creator Eligible
              </div>
              <p className="text-white font-bold text-base leading-snug">Jazzy Song</p>
              <p className="text-white/70 text-xs mt-0.5">₦120,000 · Instagram · 7 days left</p>
              <div className="flex items-center gap-1.5 mt-3">
                <Image src="/mockups/avatar-1.png" alt="Ayra Starr" width={20} height={20} className="rounded-full object-cover" />
                <span className="text-white/80 text-[11px] font-medium">Ayra Starr</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Rema / Ozeba */}
          <motion.div variants={fadeUp} className="relative overflow-hidden rounded-3xl h-[220px]">
            <Image src="/mockups/art-cover-4.png" alt="Ozeba campaign" fill className="object-cover" sizes="33vw" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.70) 0%, transparent 55%)' }} />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-bold text-sm leading-tight">Ozeba</p>
              <p className="text-white/70 text-xs mt-0.5">₦135,000 · TikTok · 12 days left</p>
              <div className="flex items-center gap-1.5 mt-2">
                <Image src="/mockups/avatar-2.png" alt="Rema" width={18} height={18} className="rounded-full object-cover" />
                <span className="text-white/70 text-[11px]">Rema</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 — Davido / With You */}
          <motion.div variants={fadeUp} className="relative overflow-hidden rounded-3xl h-[220px]">
            <Image src="/mockups/davido-cover.png" alt="With You Album campaign" fill className="object-cover object-top" sizes="33vw" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.70) 0%, transparent 55%)' }} />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-bold text-sm leading-tight">With You Album</p>
              <p className="text-white/70 text-xs mt-0.5">₦500,000 · Instagram + TikTok</p>
              <div className="flex items-center gap-1.5 mt-2">
                <Image src="/mockups/avatar-3.png" alt="Davido" width={18} height={18} className="rounded-full object-cover" />
                <span className="text-white/70 text-[11px]">Davido</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4 — dark stat */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-3xl p-6 h-[220px]"
            style={{ background: '#0D0D2B' }}
          >
            <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
            <div className="relative">
              <BarChart2 size={20} color="#9D6FF5" className="mb-4" />
              <p className="text-3xl font-bold text-white">₦2.4M</p>
              <p className="text-sm text-white/60 mt-1">distributed to creators</p>
              <p className="text-xs text-white/40 mt-0.5">this quarter alone</p>
            </div>
          </motion.div>

          {/* Card 5 — green stat */}
          <motion.div variants={fadeUp}
            className="relative overflow-hidden rounded-3xl p-6 h-[220px]"
            style={{ background: '#00A050' }}
          >
            <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.10) 0, rgba(255,255,255,0.10) 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
            <div className="relative">
              <Users size={20} color="white" className="mb-4" />
              <p className="text-3xl font-bold text-white">847+</p>
              <p className="text-sm text-white/80 mt-1">active creators</p>
              <p className="text-xs text-white/60 mt-0.5">98% on-time payouts</p>
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
      icon: Lock,
      stat: '₦2.4M+',
      statLabel: 'held in escrow',
      title: 'Escrow-First',
      description: "Sponsor budgets are locked before campaigns go live. Creators know funds exist — no ghosting, no excuses.",
      accent: '#7C3BED',
      glow: 'rgba(124,59,237,0.18)',
      bg: '#0D0D2B',
    },
    {
      icon: CheckSquare,
      stat: '98%',
      statLabel: 'on-time payouts',
      title: 'Automated Validation',
      description: 'Submissions are checked programmatically. No favoritism, no back-and-forth — just clear pass/fail against the brief.',
      accent: '#00C566',
      glow: 'rgba(0,197,102,0.15)',
      bg: '#071A0F',
    },
    {
      icon: AlignLeft,
      stat: '0',
      statLabel: 'hidden terms',
      title: 'Transparent Rules',
      description: 'Every campaign brief is public. Eligibility, deliverables, payout amounts — all visible before you apply.',
      accent: '#F59E0B',
      glow: 'rgba(245,158,11,0.15)',
      bg: '#1A1200',
    },
  ];

  return (
    <section className="py-24" style={{ background: '#07071A' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="mb-12">
          <motion.div variants={fadeUp}>
            <span className="inline-block rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'rgba(124,59,237,0.20)', color: '#A78BFA' }}>
              Why trust Varmply
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-bold text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1 }}>
            Built around accountability.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-base" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 420 }}>
            Every part of the system is designed so that neither side can get away with bad behavior.
          </motion.p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <motion.div key={i} variants={fadeUp}
              className="relative flex flex-col overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '1.75rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '2.25rem',
                minHeight: 300,
              }}
            >
              {/* Glow orb behind stat */}
              <div className="pointer-events-none absolute top-0 left-0 w-48 h-48 rounded-full" style={{ background: `radial-gradient(circle, ${p.glow} 0%, transparent 70%)`, transform: 'translate(-30%, -30%)' }} />
              {/* Big stat */}
              <div className="mb-5">
                <p className="font-extrabold leading-none" style={{ fontSize: 'clamp(42px, 5vw, 64px)', color: p.accent, letterSpacing: '-0.02em' }}>
                  {p.stat}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest" style={{ color: `${p.accent}99` }}>
                  {p.statLabel}
                </p>
              </div>
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${p.accent}1A` }}>
                <p.icon size={20} style={{ color: p.accent }} />
              </div>
              {/* Text */}
              <h3 className="font-bold mb-2 text-lg text-white">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.50)' }}>{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 6. Testimonials ──────────────────────────────────────────────────────────

const testimonials = [
  {
    name: 'Tolu Adeyemi', handle: 'toluade_', initials: 'T', color: '#7C3BED',
    text: "Finally a platform that actually pays. I used to get ghosted after posting. With Varmply, there's an escrow — my ₦25K was in my wallet within 48 hours.",
  },
  {
    name: 'Dami Oluwole', handle: 'dami.creates', initials: 'D', color: '#00A050',
    text: "The eligibility system is underrated. I don't waste time applying for campaigns I won't get. Varmply only shows me what I qualify for.",
  },
  {
    name: 'Chidi Eze', handle: 'chidieze_', initials: 'C', color: '#2563EB',
    text: "I was skeptical at first. But the campaign requirements were so clear — no back-and-forth with the brand. I posted, hit the metrics, got validated. Done.",
  },
  {
    name: 'Funke Adesanya', handle: 'funkecreates', initials: 'F', color: '#E11D48',
    text: "Finally a platform that treats creators like professionals. The brief was clear, the timeline was fair, and the payment came through exactly as promised.",
  },
  {
    name: 'Emeka Nwosu', handle: 'emeka.ng', initials: 'E', color: '#D97706',
    text: "As a sponsor, Varmply gave us a level of accountability we never had before. We could see exactly which creators hit their targets before releasing payment.",
  },
  {
    name: 'Ngozi Obi', handle: 'ngozi.creates', initials: 'N', color: '#0891B2',
    text: "The escrow system removed so much anxiety from the process. I knew from day one that if I delivered the work, the money would be there. No chasing required.",
  },
];

function Testimonials() {
  return (
    <section className="py-24" style={{ background: '#07071A' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp} className="mb-12 text-center">
          <motion.div variants={fadeUp}>
            <span className="inline-block rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'rgba(124,59,237,0.20)', color: '#A78BFA' }}>
              Testimonials
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-bold text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1 }}>
            What creators are saying.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-base" style={{ color: 'rgba(255,255,255,0.50)' }}>
            Real experiences from creators and sponsors on the platform.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i} variants={fadeUp}
              className="flex flex-col gap-4 rounded-3xl p-6"
              style={{ background: '#0D0D2B', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array(5).fill(0).map((_, s) => (
                  <Star key={s} size={13} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>
              {/* Text */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <div
                  className="h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">{t.name}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.40)' }}>@{t.handle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 7. CTA Banner ────────────────────────────────────────────────────────────

function HomeCTA() {
  return (
    <section className="pt-24 pb-0" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={vp}
          className="relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-20 text-center"
          style={{ background: '#7C3BED' }}
        >
          {/* Diagonal slash pattern */}
          <div className="pointer-events-none absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 10px)',
          }} />
          {/* Dot grid on top */}
          <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          {/* Corner glows */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)' }} />
          <div className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.25) 0%, transparent 70%)' }} />
          <div className="relative">
            <span className="inline-block rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-widest mb-6 text-white/60" style={{ background: 'rgba(255,255,255,0.12)' }}>
              Get started today
            </span>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', lineHeight: 1.1 }}>
              Join Nigeria&apos;s most structured<br />creator marketplace.
            </h2>
            <p className="text-white/65 text-base mb-10 mx-auto" style={{ maxWidth: 460 }}>
              No scattered DMs. No vague agreements. Structured campaigns, verified performance, transparent payments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/sponsors"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-[1.02]"
                style={{ background: 'white', color: '#7C3BED', boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}
              >
                Run a Campaign <ArrowRight size={15} />
              </Link>
              <Link
                href="/creators"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white"
                style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}
              >
                Join as Creator
              </Link>
            </div>
          </div>
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
      <HomeCTA />
    </>
  );
}
