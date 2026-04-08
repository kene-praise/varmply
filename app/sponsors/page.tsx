'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Lock, RotateCcw, BarChart2, Users, Shield } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import { BrowserChrome, DashboardSkeleton } from '@/components/MockupSkeletons';
import { VideoCard } from '@/components/ui/VideoCard';
import { PhoneFrame } from '@/components/ui/PhoneFrame';
import CampaignBuilderMockup from '@/components/UIComponents/CampaignBuilderMockup';

// ─── Animation helpers ────────────────────────────────────────────────────────

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

// ─── Phone skeletons for How It Works ────────────────────────────────────────

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

function MobileEscrowSkeleton() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col items-center gap-2 py-4">
        <div className="w-14 h-14 rounded-2xl bg-[#DBEAFE] flex items-center justify-center mb-1">
          <div className="w-6 h-6 rounded bg-[#93C5FD]" />
        </div>
        <div className="h-3 w-28 bg-[#EBEBF2] rounded" />
        <div className="h-5 w-20 bg-[#DBEAFE] rounded-full" />
      </div>
      <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF6FF] p-4 flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="h-2 w-16 bg-[#BFDBFE] rounded" />
          <div className="h-2 w-12 bg-[#BFDBFE] rounded" />
        </div>
        <div className="h-1.5 w-full rounded-full bg-[#BFDBFE]">
          <div className="h-full w-3/4 rounded-full bg-[#2563EB]" />
        </div>
        <div className="h-2 w-20 bg-[#BFDBFE] rounded self-end" />
      </div>
      <div className="flex gap-2">
        {['Locked', 'Pending', 'Released'].map((l, i) => (
          <div key={l} className="flex-1 rounded-lg p-2 flex flex-col items-center gap-1"
            style={{ background: i === 0 ? '#DBEAFE' : '#F0F0F5' }}>
            <div className="h-3 w-3 rounded-full" style={{ background: i === 0 ? '#2563EB' : '#D1D5DB' }} />
            <div className="h-1.5 w-8 rounded bg-[#BFDBFE]" />
          </div>
        ))}
      </div>
      <div className="h-10 w-full rounded-full bg-[#2563EB] mt-2" />
    </div>
  );
}

function MobileAnalyticsSkeleton() {
  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="flex justify-between mb-1">
        <div className="h-3 w-24 bg-[#EBEBF2] rounded" />
        <div className="h-5 w-14 rounded-full bg-[#FEF3C7]" />
      </div>
      <div className="flex gap-2">
        {[60, 90, 45].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full rounded-t-lg" style={{ height: h, background: i === 1 ? '#2563EB' : '#DBEAFE' }} />
            <div className="h-1.5 w-6 bg-[#EBEBF2] rounded" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 mt-1">
        {[['Total Reach', '148K'], ['Eng. Rate', '8.4%'], ['Creators', '18'], ['Budget Used', '90%']].map(([l]) => (
          <div key={l} className="rounded-xl bg-[#F0F0F5] p-3">
            <div className="h-1.5 w-12 bg-[#D1D5DB] rounded mb-1.5" />
            <div className="h-3 w-10 bg-[#9CA3AF] rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

function MobilePayoutSkeleton() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col items-center gap-2 pt-4">
        <div className="w-14 h-14 rounded-full bg-[#F0FDF4] flex items-center justify-center mb-1">
          <div className="w-7 h-7 rounded-full bg-[#4ADE80]" />
        </div>
        <div className="h-3 w-24 bg-[#EBEBF2] rounded" />
        <div className="h-4 w-16 bg-[#BBF7D0] rounded-full" />
      </div>
      {[1, 2].map(i => (
        <div key={i} className="rounded-xl border border-[#EBEBF2] p-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#F0F0F5]" />
            <div>
              <div className="h-2 w-20 bg-[#EBEBF2] rounded mb-1.5" />
              <div className="h-1.5 w-14 bg-[#EBEBF2] rounded" />
            </div>
          </div>
          <div className="h-5 w-14 rounded-full bg-[#F0FDF4]" />
        </div>
      ))}
      <div className="h-10 w-full rounded-full bg-[#16A34A] mt-auto" />
    </div>
  );
}

const phoneVisual = (children: React.ReactNode) => (
  <div className="mt-8 relative h-[200px] md:h-[250px] w-full flex justify-center overflow-hidden pointer-events-none">
    <div className="absolute top-0 flex justify-center" style={{ transform: 'scale(0.85)', transformOrigin: 'top center', width: 320 }}>
      <PhoneFrame screenBg="#FFFFFF">
        <div className="w-full h-[696px] bg-white pt-10">
          {children}
        </div>
      </PhoneFrame>
    </div>
  </div>
);

// ─── Data ─────────────────────────────────────────────────────────────────────


const performanceCampaigns = [
  {
    name: 'Paystack Q1 Launch', status: 'Active',
    budget: '₦500,000', spent: '₦450,000', progress: 90,
    creators: 18, heroStat: '148K', heroLabel: 'TOTAL REACH', idx: '01',
    accent: '#2563EB', accentLight: '#DBEAFE', accentMuted: 'rgba(37,99,235,0.06)',
  },
  {
    name: 'PiggyVest February Drive', status: 'Completed',
    budget: '₦280,000', spent: '₦280,000', progress: 100,
    creators: 14, heroStat: '9.1%', heroLabel: 'ENG. RATE', idx: '02',
    accent: '#7C3BED', accentLight: '#EDE9FF', accentMuted: 'rgba(124,59,237,0.06)',
  },
  {
    name: 'Carbon Credit Campaign', status: 'Active',
    budget: '₦350,000', spent: '₦210,000', progress: 60,
    creators: 12, heroStat: '67K', heroLabel: 'TOTAL REACH', idx: '03',
    accent: '#D97706', accentLight: '#FEF3C7', accentMuted: 'rgba(217,119,6,0.06)',
  },
];

const faqItems = [
  {
    question: 'How does escrow protect my budget?',
    answer: "Your campaign budget is locked in escrow when you activate a campaign. It can't be touched until performance is confirmed. If a creator fails to meet requirements, their portion isn't released. Unused funds are returned automatically after the campaign closes.",
  },
  {
    question: 'How are creators verified as eligible?',
    answer: 'Varmply checks every creator against your campaign criteria automatically — follower count, engagement rate, niche, and platform. Only creators who meet your rules can apply. No manual review needed on your end.',
  },
  {
    question: 'What metrics are tracked?',
    answer: "Reach, impressions, engagement (likes, comments, shares), and engagement rate are tracked per creator per campaign. You get a full breakdown in your analytics dashboard, updated in real time.",
  },
  {
    question: 'Can I set different payouts for different creators?',
    answer: "Yes. You can set a flat payout per creator, or define tiers based on follower count, engagement rate, or niche. The platform calculates payouts automatically based on the rules you set.",
  },
  {
    question: "What happens if a creator doesn't deliver?",
    answer: "If a creator misses the deadline or fails to meet requirements, their portion of the escrow is not released. You receive a notification and the unused funds are queued for return. There's no manual dispute process — the system handles it.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SponsorsPage() {
  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* 1. HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col justify-center overflow-hidden pt-32 pb-24"
        style={{ background: '#2563EB', minHeight: '100dvh' }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        {/* Radial glow */}
        <div className="absolute top-0 right-0 pointer-events-none" style={{
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(147,197,253,0.22) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translate(30%, -30%)',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.span variants={fadeUp}
                className="inline-block rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] mb-6 text-white"
                style={{ background: 'rgba(255,255,255,0.15)' }}>
                For Sponsors
              </motion.span>
              <motion.h1 variants={fadeUp}
                className="mb-5 text-white font-black tracking-tight"
                style={{ fontSize: 'clamp(40px, 5vw, 68px)', lineHeight: 1.0 }}>
                Creator campaigns<br />with full accountability.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-white/75 text-base leading-relaxed mb-8" style={{ maxWidth: 440 }}>
                Set your rules, lock your budget, and watch verified results come in. Varmply handles eligibility, submission validation, and payouts — automatically.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:opacity-90"
                  style={{ background: 'white', color: '#2563EB' }}>
                  Launch a Campaign <ArrowRight size={15} />
                </Link>
                <Link href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold"
                  style={{ color: 'white', border: '1.5px solid rgba(255,255,255,0.28)' }}>
                  See How It Works
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {['Escrow-protected budget', 'Auto-validated submissions', 'Pay for results only'].map((b) => (
                  <span key={b} className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full text-white"
                    style={{ background: 'rgba(255,255,255,0.12)' }}>
                    <CheckCircle size={13} style={{ color: '#93C5FD' }} /> {b}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex justify-center lg:justify-end">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
                <CampaignBuilderMockup />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS ─────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Centered header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-14 flex flex-col items-center text-center">
            <motion.div variants={fadeUp}><SectionLabel>How it works</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0, maxWidth: 560 }}>
              From brief to payout.<br />Fully automated.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base text-[#4A4A6A]"
              style={{ lineHeight: 1.6, maxWidth: 440 }}>
              Four steps, zero chasing. Define your rules once — Varmply handles everything else.
            </motion.p>
          </motion.div>

          {/* 2×2 editorial bento */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Step 01 — Purple · diagonal crosshatch */}
            {[
              {
                step: '01', accent: '#7C3BED', bgTint: 'rgba(124,59,237,0.05)', border: 'rgba(124,59,237,0.14)',
                label: 'Define your campaign rules',
                description: "Set your brief, eligibility requirements, deliverables, payout per creator, and deadline. Everything is crystal clear before any creator applies.",
                pattern: 'repeating-linear-gradient(-45deg, rgba(124,59,237,0.06) 0px, rgba(124,59,237,0.06) 1px, transparent 1px, transparent 14px)',
                phone: <MobileCampaignSkeleton />,
              },
              {
                step: '02', accent: '#2563EB', bgTint: 'rgba(37,99,235,0.05)', border: 'rgba(37,99,235,0.14)',
                label: 'Activate with escrow',
                description: "Lock your campaign budget in escrow. Creators can see funds exist before they apply. No budget = no campaign. Trust is built in from day one.",
                pattern: 'radial-gradient(circle, rgba(37,99,235,0.13) 1px, transparent 1px)',
                patternSize: '18px 18px',
                phone: <MobileEscrowSkeleton />,
              },
              {
                step: '03', accent: '#00A050', bgTint: 'rgba(0,160,80,0.05)', border: 'rgba(0,160,80,0.14)',
                label: 'Monitor in real time',
                description: "Watch submissions come in. Track reach, engagement, and impressions per creator as they happen. Every metric is validated automatically.",
                pattern: 'repeating-linear-gradient(180deg, rgba(0,160,80,0.07) 0px, rgba(0,160,80,0.07) 1px, transparent 1px, transparent 22px)',
                phone: <MobileAnalyticsSkeleton />,
              },
              {
                step: '04', accent: '#D97706', bgTint: 'rgba(217,119,6,0.05)', border: 'rgba(217,119,6,0.14)',
                label: 'Pay for verified results',
                description: 'Funds are released only when performance is confirmed. Unused budget returns automatically. You only ever pay for what actually happened.',
                pattern: 'repeating-linear-gradient(90deg, rgba(217,119,6,0.06) 0px, rgba(217,119,6,0.06) 1px, transparent 1px, transparent 20px)',
                phone: <MobilePayoutSkeleton />,
              },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="relative overflow-hidden rounded-[32px] flex flex-col"
                  style={{ background: s.bgTint, border: `1px solid ${s.border}`, minHeight: 420 }}>
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: s.pattern,
                    backgroundSize: (s as any).patternSize,
                  }} />
                  {/* Ghost step number */}
                  <span className="absolute -bottom-6 -right-2 font-black select-none pointer-events-none leading-none"
                    style={{ fontSize: '13rem', color: s.accent, opacity: 0.055, letterSpacing: '-0.06em' }}>
                    {s.step}
                  </span>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top rule bar */}
                    <div className="flex items-center justify-between px-8 pt-6 pb-4"
                      style={{ borderBottom: `1px solid ${s.border}` }}>
                      <span className="text-[9px] font-black uppercase tracking-[0.22em]"
                        style={{ color: s.accent }}>Step {s.step}</span>
                      <span className="text-[9px] font-black uppercase tracking-[0.22em]"
                        style={{ color: `${s.accent}60` }}>— {s.label.split(' ').slice(0, 2).join(' ')}</span>
                    </div>

                    <div className="px-8 pt-7 pb-0 flex-1 flex flex-col">
                      <h3 className="font-black text-[#0F0F1A] tracking-tight mb-3"
                        style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.15 }}>{s.label}</h3>
                      <p className="text-sm text-[#4A4A6A] leading-relaxed" style={{ maxWidth: 340 }}>{s.description}</p>
                    </div>

                    {phoneVisual(s.phone)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. CAMPAIGN DASHBOARD ───────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Split header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.div variants={fadeUp}><SectionLabel>Dashboard & Analytics</SectionLabel></motion.div>
              <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
                Total visibility.<br />Zero guesswork.
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} className="flex gap-8 md:gap-10 md:pb-1 shrink-0">
              {[
                { value: '₦1.13M', label: 'Total budget' },
                { value: '44', label: 'Creators' },
                { value: '8.9%', label: 'Avg. eng. rate' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-black leading-none"
                    style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', color: '#0F0F1A' }}>{s.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest mt-1.5"
                    style={{ color: '#AAAABC' }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Big browser card — diagonal crosshatch + top rule bar */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
            className="relative overflow-hidden rounded-[28px] mb-4"
            style={{ background: 'rgba(37,99,235,0.05)', border: '1.5px solid rgba(37,99,235,0.14)' }}>
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: 'repeating-linear-gradient(-45deg, rgba(37,99,235,0.045) 0px, rgba(37,99,235,0.045) 1px, transparent 1px, transparent 14px)',
            }} />
            <div className="relative z-10">
              {/* Top rule bar */}
              <div className="flex items-center justify-between px-8 md:px-10 pt-6 pb-4"
                style={{ borderBottom: '1px solid rgba(37,99,235,0.12)' }}>
                <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>
                  Campaign Dashboard
                </span>
                <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: '#2563EB' }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: '#2563EB' }} />
                  Live
                </span>
              </div>
              <div className="p-6 md:p-10 pt-7">
                <p className="font-black text-[#0F0F1A] tracking-tight mb-6"
                  style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.15 }}>
                  Every active campaign, submission,<br className="hidden md:block" /> and spend tracked in real time.
                </p>
                <div className="relative rounded-xl overflow-hidden"
                  style={{ border: '1px solid rgba(37,99,235,0.10)', boxShadow: '0 4px 24px rgba(37,99,235,0.08)' }}>
                  <BrowserChrome url="app.varmply.com/campaigns" />
                  <div className="bg-[#FAFAFA] overflow-hidden" style={{ height: 340 }}>
                    <DashboardSkeleton />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3 analytics feature cards — each with a unique pattern */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                accent: '#7C3BED', bgTint: 'rgba(124,59,237,0.05)', border: 'rgba(124,59,237,0.14)',
                Icon: BarChart2, label: 'Metrics',
                title: 'Every metric. Automatically tracked.',
                desc: "Reach, impressions, engagement rate — all captured without relying on creator self-reporting.",
                pattern: 'radial-gradient(circle, rgba(124,59,237,0.13) 1px, transparent 1px)',
                patternSize: '18px 18px',
                stats: [{ val: '4+', label: 'Signal types' }, { val: '100%', label: 'Auto' }],
              },
              {
                accent: '#00A050', bgTint: 'rgba(0,160,80,0.05)', border: 'rgba(0,160,80,0.14)',
                Icon: Users, label: 'Creator Insights',
                title: 'Per-creator breakdown.',
                desc: 'See exactly how each creator performed. Who drove the most reach? Make data-driven decisions.',
                pattern: 'repeating-linear-gradient(180deg, rgba(0,160,80,0.07) 0px, rgba(0,160,80,0.07) 1px, transparent 1px, transparent 22px)',
                stats: [{ val: '847+', label: 'Creators' }, { val: 'Live', label: 'Updates' }],
              },
              {
                accent: '#D97706', bgTint: 'rgba(217,119,6,0.05)', border: 'rgba(217,119,6,0.14)',
                Icon: Shield, label: 'Budget Tracking',
                title: 'Full budget visibility.',
                desc: 'Track escrow balance, released funds, and projected spend in real time. No surprises.',
                pattern: 'repeating-linear-gradient(90deg, rgba(217,119,6,0.06) 0px, rgba(217,119,6,0.06) 1px, transparent 1px, transparent 20px)',
                stats: [{ val: '₦0', label: 'Surprises' }, { val: 'Real-time', label: 'Tracking' }],
              },
            ].map((f, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="relative overflow-hidden rounded-[28px] flex flex-col"
                  style={{ background: f.bgTint, border: `1.5px solid ${f.border}`, minHeight: 260 }}>
                  {/* Pattern */}
                  <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: f.pattern, backgroundSize: f.patternSize,
                  }} />
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top rule bar */}
                    <div className="flex items-center justify-between px-7 pt-5 pb-4"
                      style={{ borderBottom: `1px solid ${f.border}` }}>
                      <span className="text-[9px] font-black uppercase tracking-[0.22em]"
                        style={{ color: f.accent }}>{f.label}</span>
                      <div className="h-6 w-6 rounded-lg flex items-center justify-center"
                        style={{ background: `${f.accent}15` }}>
                        <f.Icon size={13} style={{ color: f.accent }} />
                      </div>
                    </div>
                    {/* Body */}
                    <div className="flex-1 px-7 pt-6 pb-4">
                      <h3 className="font-black text-[#0F0F1A] tracking-tight mb-3"
                        style={{ fontSize: 'clamp(16px, 1.5vw, 19px)', lineHeight: 1.2 }}>{f.title}</h3>
                      <p className="text-sm text-[#4A4A6A] leading-relaxed">{f.desc}</p>
                    </div>
                    {/* Box-score bottom */}
                    <div className="grid grid-cols-2" style={{ borderTop: `1px solid ${f.border}` }}>
                      {f.stats.map((s, j) => (
                        <div key={j} className="py-3.5 text-center"
                          style={{ borderRight: j === 0 ? `1px solid ${f.border}` : 'none' }}>
                          <p className="font-black text-sm leading-none" style={{ color: f.accent }}>{s.val}</p>
                          <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1"
                            style={{ color: `${f.accent}60` }}>{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. LIVE PERFORMANCE ─────────────────────────────────────────────────── */}
      <section id="performance" className="py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Centered header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-14 flex flex-col items-center text-center gap-4">
            <motion.div variants={fadeUp}><SectionLabel>Live Performance</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              Real campaigns.<br />Verified results.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-[#4A4A6A]"
              style={{ maxWidth: 420, lineHeight: 1.6 }}>
              Every figure is validated automatically — no self-reporting, no manipulation.
            </motion.p>
          </motion.div>

          {/* Editorial poster cards */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Card 1 — Paystack · diagonal crosshatch */}
            <motion.div variants={fadeUp}>
              <div className="relative overflow-hidden rounded-[28px] flex flex-col"
                style={{ background: 'rgba(37,99,235,0.05)', border: '1.5px solid rgba(37,99,235,0.14)', minHeight: 420 }}>
                {/* Diagonal crosshatch pattern */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: 'repeating-linear-gradient(-45deg, rgba(37,99,235,0.055) 0px, rgba(37,99,235,0.055) 1px, transparent 1px, transparent 14px)',
                }} />
                {/* Ghost index */}
                <span className="absolute -bottom-6 -right-2 font-black select-none pointer-events-none leading-none"
                  style={{ fontSize: '13rem', color: '#2563EB', opacity: 0.055, letterSpacing: '-0.06em' }}>01</span>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top rule bar */}
                  <div className="flex items-center justify-between px-7 pt-6 pb-4"
                    style={{ borderBottom: '1px solid rgba(37,99,235,0.12)' }}>
                    <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>
                      Paystack Q1 Launch
                    </span>
                    <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: '#2563EB' }}>
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#2563EB' }} />
                      Active
                    </span>
                  </div>

                  <div className="flex-1 px-7 pt-8 pb-4 flex flex-col">
                    {/* Hero stat */}
                    <p className="font-black leading-none mb-1"
                      style={{ fontSize: 'clamp(64px, 8vw, 88px)', color: '#2563EB', letterSpacing: '-0.05em' }}>
                      148K
                    </p>
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] mb-8"
                      style={{ color: 'rgba(37,99,235,0.45)' }}>Total Reach</p>

                    {/* Progress — editorial thick rule */}
                    <div className="mb-8">
                      <div className="flex justify-between mb-2">
                        <span className="text-[9px] font-bold uppercase tracking-[0.16em]"
                          style={{ color: 'rgba(37,99,235,0.55)' }}>₦450,000 spent</span>
                        <span className="text-[9px] font-black" style={{ color: '#2563EB' }}>90%</span>
                      </div>
                      <div className="h-2 rounded-none overflow-hidden" style={{ background: 'rgba(37,99,235,0.12)' }}>
                        <div className="h-full" style={{ width: '90%', background: '#2563EB' }} />
                      </div>
                    </div>
                  </div>

                  {/* Box score — newspaper column stats */}
                  <div className="grid grid-cols-3" style={{ borderTop: '1px solid rgba(37,99,235,0.12)' }}>
                    {[
                      { val: '18', label: 'Creators' },
                      { val: '₦500K', label: 'Budget' },
                      { val: '8.4%', label: 'Eng. Rate' },
                    ].map((s, j) => (
                      <div key={j} className="py-4 text-center"
                        style={{ borderRight: j < 2 ? '1px solid rgba(37,99,235,0.10)' : 'none' }}>
                        <p className="font-black text-base leading-none" style={{ color: '#2563EB' }}>{s.val}</p>
                        <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1"
                          style={{ color: 'rgba(37,99,235,0.45)' }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 — PiggyVest · fine dot grid */}
            <motion.div variants={fadeUp}>
              <div className="relative overflow-hidden rounded-[28px] flex flex-col"
                style={{ background: 'rgba(124,59,237,0.05)', border: '1.5px solid rgba(124,59,237,0.14)', minHeight: 420 }}>
                {/* Fine dot grid pattern */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(124,59,237,0.14) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }} />
                {/* Ghost index */}
                <span className="absolute -bottom-6 -right-2 font-black select-none pointer-events-none leading-none"
                  style={{ fontSize: '13rem', color: '#7C3BED', opacity: 0.055, letterSpacing: '-0.06em' }}>02</span>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between px-7 pt-6 pb-4"
                    style={{ borderBottom: '1px solid rgba(124,59,237,0.12)' }}>
                    <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#7C3BED' }}>
                      PiggyVest Feb Drive
                    </span>
                    <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: '#8888AA' }}>
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#8888AA' }} />
                      Completed
                    </span>
                  </div>

                  <div className="flex-1 px-7 pt-8 pb-4 flex flex-col">
                    <p className="font-black leading-none mb-1"
                      style={{ fontSize: 'clamp(64px, 8vw, 88px)', color: '#7C3BED', letterSpacing: '-0.05em' }}>
                      9.1%
                    </p>
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] mb-8"
                      style={{ color: 'rgba(124,59,237,0.45)' }}>Engagement Rate</p>

                    <div className="mb-8">
                      <div className="flex justify-between mb-2">
                        <span className="text-[9px] font-bold uppercase tracking-[0.16em]"
                          style={{ color: 'rgba(124,59,237,0.55)' }}>₦280,000 spent</span>
                        <span className="text-[9px] font-black" style={{ color: '#7C3BED' }}>100%</span>
                      </div>
                      <div className="h-2 rounded-none overflow-hidden" style={{ background: 'rgba(124,59,237,0.12)' }}>
                        <div className="h-full" style={{ width: '100%', background: '#7C3BED' }} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3" style={{ borderTop: '1px solid rgba(124,59,237,0.12)' }}>
                    {[
                      { val: '14', label: 'Creators' },
                      { val: '₦280K', label: 'Budget' },
                      { val: '92K', label: 'Reach' },
                    ].map((s, j) => (
                      <div key={j} className="py-4 text-center"
                        style={{ borderRight: j < 2 ? '1px solid rgba(124,59,237,0.10)' : 'none' }}>
                        <p className="font-black text-base leading-none" style={{ color: '#7C3BED' }}>{s.val}</p>
                        <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1"
                          style={{ color: 'rgba(124,59,237,0.45)' }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 — Carbon Credit · horizontal rule lines */}
            <motion.div variants={fadeUp}>
              <div className="relative overflow-hidden rounded-[28px] flex flex-col"
                style={{ background: 'rgba(217,119,6,0.05)', border: '1.5px solid rgba(217,119,6,0.14)', minHeight: 420 }}>
                {/* Horizontal rule lines pattern */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: 'repeating-linear-gradient(180deg, rgba(217,119,6,0.07) 0px, rgba(217,119,6,0.07) 1px, transparent 1px, transparent 22px)',
                }} />
                {/* Ghost index */}
                <span className="absolute -bottom-6 -right-2 font-black select-none pointer-events-none leading-none"
                  style={{ fontSize: '13rem', color: '#D97706', opacity: 0.055, letterSpacing: '-0.06em' }}>03</span>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between px-7 pt-6 pb-4"
                    style={{ borderBottom: '1px solid rgba(217,119,6,0.12)' }}>
                    <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#D97706' }}>
                      Carbon Credit Campaign
                    </span>
                    <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: '#D97706' }}>
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#D97706' }} />
                      Active
                    </span>
                  </div>

                  <div className="flex-1 px-7 pt-8 pb-4 flex flex-col">
                    <p className="font-black leading-none mb-1"
                      style={{ fontSize: 'clamp(64px, 8vw, 88px)', color: '#D97706', letterSpacing: '-0.05em' }}>
                      67K
                    </p>
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] mb-8"
                      style={{ color: 'rgba(217,119,6,0.45)' }}>Total Reach</p>

                    <div className="mb-8">
                      <div className="flex justify-between mb-2">
                        <span className="text-[9px] font-bold uppercase tracking-[0.16em]"
                          style={{ color: 'rgba(217,119,6,0.55)' }}>₦210,000 spent</span>
                        <span className="text-[9px] font-black" style={{ color: '#D97706' }}>60%</span>
                      </div>
                      <div className="h-2 rounded-none overflow-hidden" style={{ background: 'rgba(217,119,6,0.12)' }}>
                        <div className="h-full" style={{ width: '60%', background: '#D97706' }} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3" style={{ borderTop: '1px solid rgba(217,119,6,0.12)' }}>
                    {[
                      { val: '12', label: 'Creators' },
                      { val: '₦350K', label: 'Budget' },
                      { val: '7.3%', label: 'Eng. Rate' },
                    ].map((s, j) => (
                      <div key={j} className="py-4 text-center"
                        style={{ borderRight: j < 2 ? '1px solid rgba(217,119,6,0.10)' : 'none' }}>
                        <p className="font-black text-base leading-none" style={{ color: '#D97706' }}>{s.val}</p>
                        <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1"
                          style={{ color: 'rgba(217,119,6,0.45)' }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>

          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
            className="text-center mt-10 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: '#BBBBCC' }}>
            All figures validated automatically — no self-reporting
          </motion.p>
        </div>
      </section>

      {/* 5. ESCROW ───────────────────────────────────────────────────────────── */}
      <section id="escrow" className="py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Split header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.div variants={fadeUp}><SectionLabel>Escrow System</SectionLabel></motion.div>
              <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
                Your budget moves<br />on your terms.
              </motion.h2>
            </div>
            <motion.p variants={fadeUp}
              className="text-base text-[#4A4A6A] max-w-xs md:text-right md:pb-1"
              style={{ lineHeight: 1.6 }}>
              Funds only leave escrow when performance is confirmed. No exceptions, no overrides.
            </motion.p>
          </motion.div>

          {/* 3 editorial escrow cards */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Card 1 — Locked · dot grid */}
            <motion.div variants={fadeUp}>
              <div className="relative overflow-hidden rounded-[28px] flex flex-col"
                style={{ background: 'rgba(37,99,235,0.05)', border: '1.5px solid rgba(37,99,235,0.14)', minHeight: 380 }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.13) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }} />
                <span className="absolute -bottom-6 -right-2 font-black select-none pointer-events-none leading-none"
                  style={{ fontSize: '13rem', color: '#2563EB', opacity: 0.055, letterSpacing: '-0.06em' }}>01</span>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between px-7 pt-6 pb-4"
                    style={{ borderBottom: '1px solid rgba(37,99,235,0.12)' }}>
                    <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Escrow System</span>
                    <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: '#2563EB' }}>
                      <Lock size={9} />
                      Locked
                    </span>
                  </div>
                  <div className="flex-1 px-7 pt-8 pb-4 flex flex-col">
                    <p className="font-black leading-none mb-1"
                      style={{ fontSize: 'clamp(52px, 6vw, 72px)', color: '#2563EB', letterSpacing: '-0.04em' }}>₦500K</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] mb-8"
                      style={{ color: 'rgba(37,99,235,0.45)' }}>Held in escrow</p>
                    <div className="h-px mb-6" style={{ background: 'rgba(37,99,235,0.14)' }} />
                    <h3 className="font-bold text-base mb-2 text-[#0F0F1A]">Locked on activation</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed flex-1">
                      Budget enters escrow the moment your campaign goes live. Creators can see funds exist before they apply. No budget = no campaign.
                    </p>
                  </div>
                  <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(37,99,235,0.12)' }}>
                    {[{ val: '100%', label: 'Pre-locked' }, { val: '₦0', label: 'Accessible early' }].map((s, j) => (
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

            {/* Card 2 — Released · horizontal rules */}
            <motion.div variants={fadeUp}>
              <div className="relative overflow-hidden rounded-[28px] flex flex-col"
                style={{ background: 'rgba(124,59,237,0.05)', border: '1.5px solid rgba(124,59,237,0.14)', minHeight: 380 }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: 'repeating-linear-gradient(180deg, rgba(124,59,237,0.07) 0px, rgba(124,59,237,0.07) 1px, transparent 1px, transparent 22px)',
                }} />
                <span className="absolute -bottom-6 -right-2 font-black select-none pointer-events-none leading-none"
                  style={{ fontSize: '13rem', color: '#7C3BED', opacity: 0.055, letterSpacing: '-0.06em' }}>02</span>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between px-7 pt-6 pb-4"
                    style={{ borderBottom: '1px solid rgba(124,59,237,0.12)' }}>
                    <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#7C3BED' }}>Validation</span>
                    <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: '#7C3BED' }}>
                      <CheckCircle size={9} />
                      Auto
                    </span>
                  </div>
                  <div className="flex-1 px-7 pt-8 pb-4 flex flex-col">
                    <p className="font-black leading-none mb-1"
                      style={{ fontSize: 'clamp(52px, 6vw, 72px)', color: '#7C3BED', letterSpacing: '-0.04em' }}>98%</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] mb-8"
                      style={{ color: 'rgba(124,59,237,0.45)' }}>On-time payouts</p>
                    <div className="h-px mb-6" style={{ background: 'rgba(124,59,237,0.14)' }} />
                    <h3 className="font-bold text-base mb-2 text-[#0F0F1A]">Released on verified results</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed flex-1">
                      Each creator's portion unlocks automatically once their submission meets every requirement you set. No manual review needed.
                    </p>
                  </div>
                  <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(124,59,237,0.12)' }}>
                    {[{ val: '0', label: 'Manual steps' }, { val: '48h', label: 'Avg. payout' }].map((s, j) => (
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

            {/* Card 3 — Refunded · diagonal crosshatch */}
            <motion.div variants={fadeUp}>
              <div className="relative overflow-hidden rounded-[28px] flex flex-col"
                style={{ background: 'rgba(0,160,80,0.05)', border: '1.5px solid rgba(0,160,80,0.14)', minHeight: 380 }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: 'repeating-linear-gradient(-45deg, rgba(0,160,80,0.06) 0px, rgba(0,160,80,0.06) 1px, transparent 1px, transparent 14px)',
                }} />
                <span className="absolute -bottom-6 -right-2 font-black select-none pointer-events-none leading-none"
                  style={{ fontSize: '13rem', color: '#00A050', opacity: 0.055, letterSpacing: '-0.06em' }}>03</span>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between px-7 pt-6 pb-4"
                    style={{ borderBottom: '1px solid rgba(0,160,80,0.12)' }}>
                    <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#00A050' }}>Refund Policy</span>
                    <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: '#00A050' }}>
                      <RotateCcw size={9} />
                      Auto-return
                    </span>
                  </div>
                  <div className="flex-1 px-7 pt-8 pb-4 flex flex-col">
                    <p className="font-black leading-none mb-1"
                      style={{ fontSize: 'clamp(52px, 6vw, 72px)', color: '#00A050', letterSpacing: '-0.04em' }}>₦0</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] mb-8"
                      style={{ color: 'rgba(0,160,80,0.45)' }}>Lost to non-performance</p>
                    <div className="h-px mb-6" style={{ background: 'rgba(0,160,80,0.14)' }} />
                    <h3 className="font-bold text-base mb-2 text-[#0F0F1A]">Refunded if unused</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed flex-1">
                      Unfilled slots and missed deadlines trigger automatic returns. You never lose budget to non-performance. Every naira accounted for.
                    </p>
                  </div>
                  <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(0,160,80,0.12)' }}>
                    {[{ val: '100%', label: 'Returned' }, { val: '0 days', label: 'Dispute time' }].map((s, j) => (
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

          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
            className="text-center mt-10 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: '#BBBBCC' }}>
            Escrow protected — funds released only on verified delivery
          </motion.p>
        </div>
      </section>

      {/* 6. CREATOR CONTENT REEL ─────────────────────────────────────────────── */}
      <section className="py-24 overflow-hidden" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Centered header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-14 flex flex-col items-center text-center gap-4">
            <motion.div variants={fadeUp}><SectionLabel>Creator Content</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              The content your<br />campaigns produce.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-[#4A4A6A]"
              style={{ maxWidth: 420, lineHeight: 1.6 }}>
              Real creators, real deliverables. Every post tied to a verified campaign brief.
            </motion.p>
          </motion.div>

          {/* Reel grid */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { imageSrc: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80', caption: '@amara.creates', subcaption: 'Paystack Q1 · TikTok', chips: [{ label: '120K views', position: 'top-left' as const, variant: 'dark' as const }] },
              { imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80', caption: '@dayo_creates', subcaption: 'PiggyVest · Instagram', chips: [{ label: '88K views', position: 'top-left' as const, variant: 'dark' as const }] },
              { imageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80', caption: '@layla.ng', subcaption: 'Carbon Credit · TikTok', chips: [{ label: '54K views', position: 'top-left' as const, variant: 'dark' as const }] },
              { imageSrc: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&q=80', caption: '@seunvibes', subcaption: 'Paystack Q1 · YouTube', chips: [{ label: '210K views', position: 'top-left' as const, variant: 'dark' as const }] },
              { imageSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80', caption: '@chuka.tv', subcaption: 'PiggyVest · TikTok', chips: [{ label: '67K views', position: 'top-left' as const, variant: 'dark' as const }] },
            ].map((reel, i) => (
              <motion.div key={i} variants={fadeUp} className={i % 2 !== 0 ? 'md:mt-8' : ''}>
                <VideoCard
                  {...reel}
                  aspectRatio="9/16"
                  surface="light"
                  showGradient
                  hoverable
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. FAQ ──────────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-14 flex flex-col items-center text-center gap-4">
            <motion.div variants={fadeUp}><SectionLabel>FAQ</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              Sponsor questions,<br />answered.
            </motion.h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={vp} transition={{ duration: 0.5 }}>
            <FAQAccordion items={faqItems} />
          </motion.div>
        </div>
      </section>

    </div>
  );
}
