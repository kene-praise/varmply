'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ScrollCarousel } from '@/components/ui/ScrollCarousel';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Lock, RotateCcw, BarChart2, Users, Shield, TrendingUp, DollarSign } from 'lucide-react';
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
      <section className="relative overflow-hidden flex flex-col"
        style={{ background: '#1A40B8' }}>

        {/* Aurora bloom */}
        <div className="pointer-events-none absolute rounded-[50%]" style={{
          width: '80vw', height: '60vh',
          top: '50%', left: '50%',
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'hero-breathe 8s ease-in-out infinite alternate',
        }} />
        {/* Line grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundSize: '60px 60px',
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          maskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)',
          opacity: 0.4,
        }} />

        {/* ── Centered text ── */}
        <motion.div
          variants={stagger} initial="hidden" animate="visible"
          className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center pt-32 pb-8 px-6"
        >
          <motion.span variants={fadeUp}
            className="inline-block rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] mb-6 text-white"
            style={{ background: 'rgba(255,255,255,0.15)' }}>
            For Sponsors
          </motion.span>
          <motion.h1 variants={fadeUp}
            className="font-black tracking-tight mb-5 w-full text-left md:text-center"
            style={{
              fontSize: 'clamp(36px, 5vw, 68px)', lineHeight: 1.0,
              background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.58) 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0px 0px 28px rgba(255,255,255,0.18))',
              paddingBottom: '0.15em',
            }}>
            Turn your track into <br className="max-md:hidden" />a creator campaign.
          </motion.h1>
          <motion.p variants={fadeUp}
            className="text-white/75 text-base leading-relaxed mb-8 w-full text-left md:text-center"
            style={{ maxWidth: 480 }}>
            Fund once. Creators amplify your song. Pay only for results — payouts happen only when engagement is verified.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-8 w-full md:w-auto">
            <Link href="#"
              className="flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:opacity-90 w-full md:w-auto"
              style={{ background: 'white', color: '#1A40B8' }}>
              Launch a Campaign <ArrowRight size={15} />
            </Link>
            <Link href="#how-it-works"
              className="flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold w-full md:w-auto"
              style={{ color: 'white', border: '1.5px solid rgba(255,255,255,0.28)' }}>
              See How It Works
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap md:justify-center gap-3">
            {['Budget locked in escrow', 'Paid only on performance', 'No chasing creators', 'No fake metrics'].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full text-white"
                style={{ background: 'rgba(255,255,255,0.12)' }}>
                <CheckCircle size={13} style={{ color: '#93C5FD' }} /> {b}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Desktop dashboard — bleeds out of section bottom ── */}
        <motion.div
          className="relative z-10 w-full px-4 hidden md:flex flex-col"
          style={{ marginBottom: -2 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-[1100px] mx-auto w-full">
            {/* Browser chrome — white header */}
            <div className="rounded-t-[16px] overflow-hidden"
              style={{ boxShadow: '0 -4px 40px rgba(0,0,0,0.30)', border: '1px solid rgba(255,255,255,0.18)', borderBottom: 'none' }}>
              <div className="flex items-center gap-2 px-4 py-3 shrink-0"
                style={{ background: '#FFFFFF', borderBottom: '1px solid #E8E8EE' }}>
                <div className="flex gap-1.5">
                  <span className="block w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="block w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="block w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex-1 rounded-full px-3 py-1 text-[10px] text-[#9999AA] border border-[#EBEBF2] truncate text-center max-w-xs mx-auto"
                  style={{ background: '#F4F4F8' }}>
                  app.varmply.co/dashboard
                </div>
                <div className="w-10" />
              </div>

              {/* Dashboard screenshot — top 50% crop */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '6048 / 3268', background: '#F8F8FB' }}>
                <Image
                  src="/mockups/dashboard-screenshot-2.png"
                  alt="Varmply sponsor dashboard"
                  fill
                  quality={95}
                  priority
                  className="object-cover"
                  style={{ objectPosition: 'top left' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. HOW IT WORKS ─────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-12 md:py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Centered header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-8 md:mb-14 flex flex-col items-start text-left md:items-center md:text-center">
            <motion.div variants={fadeUp}><SectionLabel>How it works</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight w-full"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.0 }}>
              From campaign setup  <br className="max-md:hidden" />to verified reach.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base text-[#4A4A6A] w-full"
              style={{ lineHeight: 1.6 }}>
              Define your rules — Varmply handles distribution, tracking, and payouts.
            </motion.p>
          </motion.div>

          {/* 2×2 editorial bento */}
          <ScrollCarousel count={4} gridClass="md:grid-cols-2">

            {/* Step 01 — Purple · diagonal crosshatch */}
            {[
              {
                step: '01', accent: '#7C3BED', bgTint: 'rgba(124,59,237,0.05)', border: 'rgba(124,59,237,0.14)',
                label: 'Define your campaign rules', tag: 'SETUP',
                description: "Set your brief, eligibility requirements, deliverables, payout per creator, and deadline. Everything is crystal clear before any creator applies.",
                pattern: 'repeating-linear-gradient(-45deg, rgba(124,59,237,0.06) 0px, rgba(124,59,237,0.06) 1px, transparent 1px, transparent 14px)',
                phone: <MobileCampaignSkeleton />,
              },
              {
                step: '02', accent: '#2563EB', bgTint: 'rgba(37,99,235,0.05)', border: 'rgba(37,99,235,0.14)',
                label: 'Activate with escrow', tag: 'FUNDING',
                description: "Lock your campaign budget in escrow. Creators can see funds exist before they apply. No budget = no campaign. Trust is built in from day one.",
                pattern: 'radial-gradient(circle, rgba(37,99,235,0.13) 1px, transparent 1px)',
                patternSize: '18px 18px',
                phone: <MobileEscrowSkeleton />,
              },
              {
                step: '03', accent: '#00A050', bgTint: 'rgba(0,160,80,0.05)', border: 'rgba(0,160,80,0.14)',
                label: 'Monitor in real time', tag: 'ANALYTICS',
                description: "Watch submissions come in. Track reach, engagement, and impressions per creator as they happen. Every metric is validated automatically.",
                pattern: 'repeating-linear-gradient(180deg, rgba(0,160,80,0.07) 0px, rgba(0,160,80,0.07) 1px, transparent 1px, transparent 22px)',
                phone: <MobileAnalyticsSkeleton />,
              },
              {
                step: '04', accent: '#D97706', bgTint: 'rgba(217,119,6,0.05)', border: 'rgba(217,119,6,0.14)',
                label: 'Pay for verified results', tag: 'PAYOUTS',
                description: 'Funds are released only when performance is confirmed. Unused budget returns automatically. You only ever pay for what actually happened.',
                pattern: 'repeating-linear-gradient(90deg, rgba(217,119,6,0.06) 0px, rgba(217,119,6,0.06) 1px, transparent 1px, transparent 20px)',
                phone: <MobilePayoutSkeleton />,
              },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto self-stretch flex flex-col">
                <div className="relative overflow-hidden rounded-[32px] flex flex-col flex-1"
                  style={{ background: s.bgTint, border: `1px solid ${s.border}`, minHeight: 380 }}>
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
                        style={{ color: `${s.accent}60` }}>— {s.tag}</span>
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
          </ScrollCarousel>
        </div>
      </section>

      {/* 3. CAMPAIGN DASHBOARD ───────────────────────────────────────────────── */}
      <section className="py-12 md:py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Split header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-8 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="w-full">
              <motion.div variants={fadeUp}><SectionLabel>Dashboard & Analytics</SectionLabel></motion.div>
              <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight w-full text-left"
                style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.0 }}>
                Total visibility. <br className="max-md:hidden" />Zero guesswork.
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
                  Every active campaign, submission, <br className="max-md:hidden" /> and spend tracked in real time.
                </p>
                <div className="hidden md:block relative rounded-xl overflow-hidden"
                  style={{ border: '1px solid rgba(37,99,235,0.10)', boxShadow: '0 4px 24px rgba(37,99,235,0.08)' }}>
                  <BrowserChrome url="app.varmply.com/campaigns" />
                  <div className="bg-[#FAFAFA] overflow-hidden" style={{ height: 340 }}>
                    <DashboardSkeleton />
                  </div>
                </div>
                {/* Mobile version (Phone visual) */}
                <div className="md:hidden mt-4 relative h-[280px] w-full flex justify-center overflow-hidden pointer-events-none -mb-8">
                  <div className="absolute top-0 flex justify-center" style={{ transform: 'scale(0.85)', transformOrigin: 'top center', width: 320 }}>
                    <PhoneFrame screenBg="#FFFFFF">
                      <div className="w-full h-[696px] bg-white pt-6">
                        <MobileAnalyticsSkeleton />
                      </div>
                    </PhoneFrame>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3 analytics feature cards — each with a unique pattern */}
          <ScrollCarousel count={3} gridClass="md:grid-cols-3">
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
              <motion.div key={i} variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto self-stretch flex flex-col">
                <div className="relative overflow-hidden rounded-[28px] flex flex-col flex-1"
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
          </ScrollCarousel>
        </div>
      </section>

      {/* 4. LIVE PERFORMANCE ─────────────────────────────────────────────────── */}
      <section id="performance" className="py-12 md:py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-8 md:mb-14 flex flex-col items-start text-left md:items-center md:text-center gap-4">
            <motion.div variants={fadeUp}><SectionLabel>Live Performance</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight w-full"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.0 }}>
              Real campaigns. <br className="max-md:hidden" />Verified results.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-[#4A4A6A] md:max-w-[420px] w-full"
              style={{ lineHeight: 1.6 }}>
              Every figure is validated automatically — no self-reporting, no manipulation.
            </motion.p>
          </motion.div>

          {/* Editorial poster cards */}
          <ScrollCarousel count={3} gridClass="md:grid-cols-3">

            {/* Card 1 — Paystack · diagonal crosshatch */}
            <motion.div variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto">
              <div className="relative overflow-hidden rounded-[28px] flex flex-col"
                style={{ background: 'rgba(37,99,235,0.05)', border: '1.5px solid rgba(37,99,235,0.14)', minHeight: 420 }}>
                {/* Diagonal crosshatch pattern */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: 'repeating-linear-gradient(-45deg, rgba(37,99,235,0.055) 0px, rgba(37,99,235,0.055) 1px, transparent 1px, transparent 14px)',
                }} />
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
            <motion.div variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto self-stretch flex flex-col">
              <div className="relative overflow-hidden rounded-[28px] flex flex-col flex-1"
                style={{ background: 'rgba(124,59,237,0.05)', border: '1.5px solid rgba(124,59,237,0.14)', minHeight: 420 }}>
                {/* Fine dot grid pattern */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(124,59,237,0.14) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }} />
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
            <motion.div variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto self-stretch flex flex-col">
              <div className="relative overflow-hidden rounded-[28px] flex flex-col flex-1"
                style={{ background: 'rgba(217,119,6,0.05)', border: '1.5px solid rgba(217,119,6,0.14)', minHeight: 420 }}>
                {/* Horizontal rule lines pattern */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: 'repeating-linear-gradient(180deg, rgba(217,119,6,0.07) 0px, rgba(217,119,6,0.07) 1px, transparent 1px, transparent 22px)',
                }} />
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

          </ScrollCarousel>

          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
            className="text-center mt-10 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: '#BBBBCC' }}>
            All figures validated automatically — no self-reporting
          </motion.p>
        </div>
      </section>

      {/* 5. ESCROW ───────────────────────────────────────────────────────────── */}
      <section id="escrow" className="py-12 md:py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Split header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-8 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.div variants={fadeUp}><SectionLabel>Escrow System</SectionLabel></motion.div>
              <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
                Your budget is protected <br className="max-md:hidden" />by design.
              </motion.h2>
            </div>
            <motion.p variants={fadeUp}
              className="text-base text-[#4A4A6A] md:max-w-xs md:text-right md:pb-1"
              style={{ lineHeight: 1.6 }}>
              Funds only leave escrow when performance is confirmed. No exceptions, no overrides.
            </motion.p>
          </motion.div>

          {/* Asymmetric escrow layout: large feature card + 2 stacked */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="grid grid-cols-1 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-4 items-stretch">

            {/* Large feature card — col-span-3 · dot grid */}
            <motion.div variants={fadeUp} className="h-full">
              <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
                style={{ background: 'rgba(37,99,235,0.05)', border: '1.5px solid rgba(37,99,235,0.14)', minHeight: 420 }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.13) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between px-8 pt-7 pb-5"
                    style={{ borderBottom: '1px solid rgba(37,99,235,0.12)' }}>
                    <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Escrow System</span>
                    <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: '#2563EB' }}>
                      <Lock size={9} />
                      Protected
                    </span>
                  </div>
                  <div className="flex-1 px-8 pt-10 pb-6 flex flex-col">
                    {/* Oversized hero stat */}
                    <p className="font-black leading-none mb-1"
                      style={{ fontSize: 'clamp(72px, 9vw, 108px)', color: '#2563EB', letterSpacing: '-0.05em' }}>₦0</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] mb-10"
                      style={{ color: 'rgba(37,99,235,0.45)' }}>Lost to non-performance</p>
                    <div className="h-px mb-8" style={{ background: 'rgba(37,99,235,0.12)' }} />
                    <h3 className="font-black text-[#0F0F1A] tracking-tight mb-3"
                      style={{ fontSize: 'clamp(20px, 2vw, 26px)', lineHeight: 1.1 }}>
                      Every naira locked <br className="max-md:hidden" />before creators apply.
                    </h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed max-w-sm flex-1">
                      Budget enters escrow the moment your campaign activates. Creators see funds exist before applying — no budget means no campaign. If a creator misses requirements, their portion auto-returns. You never lose money to non-performance.
                    </p>
                  </div>
                  {/* 4-col box score */}
                  <div className="grid grid-cols-4" style={{ borderTop: '1px solid rgba(37,99,235,0.12)' }}>
                    {[
                      { val: '100%', label: 'Pre-locked' },
                      { val: '₦0', label: 'Early access' },
                      { val: '48h', label: 'Avg. return' },
                      { val: '0', label: 'Disputes' },
                    ].map((s, j) => (
                      <div key={j} className="py-4 text-center"
                        style={{ borderRight: j < 3 ? '1px solid rgba(37,99,235,0.10)' : 'none' }}>
                        <p className="font-black text-sm leading-none" style={{ color: '#2563EB' }}>{s.val}</p>
                        <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1"
                          style={{ color: 'rgba(37,99,235,0.45)' }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column — 2 stacked cards */}
            <div className="flex flex-col gap-4">

              {/* Card: Validation · horizontal rules */}
              <motion.div variants={fadeUp} className="flex-1">
                <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
                  style={{ background: 'rgba(124,59,237,0.05)', border: '1.5px solid rgba(124,59,237,0.14)', minHeight: 190 }}>
                  <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: 'repeating-linear-gradient(180deg, rgba(124,59,237,0.07) 0px, rgba(124,59,237,0.07) 1px, transparent 1px, transparent 22px)',
                  }} />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between px-6 pt-5 pb-4"
                      style={{ borderBottom: '1px solid rgba(124,59,237,0.12)' }}>
                      <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#7C3BED' }}>Validation</span>
                      <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: '#7C3BED' }}>
                        <CheckCircle size={9} />
                        Auto
                      </span>
                    </div>
                    <div className="flex-1 px-6 pt-5 pb-4 flex flex-col">
                      <p className="font-black leading-none mb-1"
                        style={{ fontSize: 'clamp(42px, 5vw, 58px)', color: '#7C3BED', letterSpacing: '-0.04em' }}>98%</p>
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] mb-3"
                        style={{ color: 'rgba(124,59,237,0.45)' }}>On-time payouts</p>
                      <p className="text-xs text-[#4A4A6A] leading-relaxed flex-1">
                        Each creator's portion releases automatically when their submission clears every requirement.
                      </p>
                    </div>
                    <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(124,59,237,0.12)' }}>
                      {[{ val: '0', label: 'Manual steps' }, { val: '48h', label: 'Avg. payout' }].map((s, j) => (
                        <div key={j} className="py-3 text-center"
                          style={{ borderRight: j === 0 ? '1px solid rgba(124,59,237,0.10)' : 'none' }}>
                          <p className="font-black text-sm leading-none" style={{ color: '#7C3BED' }}>{s.val}</p>
                          <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1"
                            style={{ color: 'rgba(124,59,237,0.45)' }}>{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card: Refund · diagonal crosshatch */}
              <motion.div variants={fadeUp} className="flex-1">
                <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
                  style={{ background: 'rgba(0,160,80,0.05)', border: '1.5px solid rgba(0,160,80,0.14)', minHeight: 190 }}>
                  <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: 'repeating-linear-gradient(-45deg, rgba(0,160,80,0.06) 0px, rgba(0,160,80,0.06) 1px, transparent 1px, transparent 14px)',
                  }} />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between px-6 pt-5 pb-4"
                      style={{ borderBottom: '1px solid rgba(0,160,80,0.12)' }}>
                      <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#00A050' }}>Refund Policy</span>
                      <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: '#00A050' }}>
                        <RotateCcw size={9} />
                        Auto-return
                      </span>
                    </div>
                    <div className="flex-1 px-6 pt-5 pb-4 flex flex-col">
                      <p className="font-black leading-none mb-1"
                        style={{ fontSize: 'clamp(42px, 5vw, 58px)', color: '#00A050', letterSpacing: '-0.04em' }}>100%</p>
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] mb-3"
                        style={{ color: 'rgba(0,160,80,0.45)' }}>Returned if unused</p>
                      <p className="text-xs text-[#4A4A6A] leading-relaxed flex-1">
                        Unfilled slots and missed deadlines auto-return funds. No disputes, no chasing.
                      </p>
                    </div>
                    <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(0,160,80,0.12)' }}>
                      {[{ val: '0 days', label: 'Dispute time' }, { val: 'Auto', label: 'Returns' }].map((s, j) => (
                        <div key={j} className="py-3 text-center"
                          style={{ borderRight: j === 0 ? '1px solid rgba(0,160,80,0.10)' : 'none' }}>
                          <p className="font-black text-sm leading-none" style={{ color: '#00A050' }}>{s.val}</p>
                          <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1"
                            style={{ color: 'rgba(0,160,80,0.45)' }}>{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

          </motion.div>

          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
            className="text-center mt-10 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: '#BBBBCC' }}>
            Escrow protected — funds released only on verified delivery
          </motion.p>
        </div>
      </section>

      {/* 6. CREATOR CONTENT REEL ─────────────────────────────────────────────── */}
      <section className="py-12 md:py-24 overflow-hidden" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-8 md:mb-14 flex flex-col items-start text-left md:items-center md:text-center gap-4">
            <motion.div variants={fadeUp}><SectionLabel>Creator Content</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              The content your <br className="max-md:hidden" />campaigns produce.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-[#4A4A6A] md:max-w-[420px]"
              style={{ lineHeight: 1.6 }}>
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
      <section id="faq" className="py-12 md:py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-8 md:mb-14 flex flex-col items-start text-left md:items-center md:text-center gap-4">
            <motion.div variants={fadeUp}><SectionLabel>FAQ</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              Sponsor questions, <br className="max-md:hidden" />answered.
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
