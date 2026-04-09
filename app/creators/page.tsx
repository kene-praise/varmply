'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, DollarSign, Search } from 'lucide-react';
import { VideoCard } from '@/components/ui/VideoCard';
import FAQAccordion from '@/components/FAQAccordion';
import WalletMockup from '@/components/UIComponents/WalletMockup';
import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { BrowserChrome } from '@/components/MockupSkeletons';
import CreatorBalloons3D from '@/components/CreatorBalloons3D';

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

// ─── Phone skeletons ──────────────────────────────────────────────────────────

function MobileMarketplaceSkeleton() {
  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="flex gap-2 mb-2">
        <div className="h-6 flex-1 rounded-full bg-[#F0F0F5]" />
        <div className="h-6 w-6 rounded-full bg-[#F0F0F5]" />
      </div>
      <div className="flex gap-2 overflow-hidden mb-2">
        <div className="h-5 w-16 rounded-full bg-[#C4B5FD]" />
        <div className="h-5 w-12 rounded-full bg-[#F0F0F5]" />
        <div className="h-5 w-14 rounded-full bg-[#F0F0F5]" />
      </div>
      {[1, 2, 3].map(i => (
        <div key={i} className="rounded-xl border border-[#EBEBF2] p-3 flex gap-3 items-center">
          <div className="h-10 w-10 rounded-lg bg-[#F0F0F5]" />
          <div className="flex-1">
            <div className="h-2 w-3/4 bg-[#EBEBF2] rounded mb-2" />
            <div className="h-1.5 w-1/2 bg-[#EBEBF2] rounded mb-2" />
            <div className="h-3 w-16 bg-[#D1D5DB] rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

function MobileProfileSkeleton() {
  return (
    <div className="p-5 flex flex-col items-center gap-4">
      <div className="h-16 w-16 rounded-full bg-[#F0F0F5] mb-2" />
      <div className="h-3 w-32 bg-[#EBEBF2] rounded mb-1" />
      <div className="h-2 w-20 bg-[#EBEBF2] rounded mb-4" />
      <div className="w-full flex gap-2 mb-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="flex-1 h-12 rounded-xl bg-[#F0F0F5] flex flex-col items-center justify-center gap-1">
            <div className="h-2 w-8 bg-[#EBEBF2] rounded" />
            <div className="h-3 w-12 bg-[#D1D5DB] rounded" />
          </div>
        ))}
      </div>
      <div className="w-full h-8 rounded-lg bg-[#C4B5FD] mb-2" />
      <div className="w-full h-8 rounded-lg bg-[#F0F0F5]" />
    </div>
  );
}

function MobileSubmitSkeleton() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="h-24 w-full rounded-xl bg-[#F0F0F5] flex items-center justify-center">
        <div className="h-8 w-8 rounded-full bg-[#EBEBF2]" />
      </div>
      <div>
        <div className="h-2 w-24 bg-[#EBEBF2] rounded mb-2" />
        <div className="h-8 w-full rounded-lg border border-[#EBEBF2]" />
      </div>
      <div>
        <div className="h-2 w-16 bg-[#EBEBF2] rounded mb-2" />
        <div className="h-16 w-full rounded-xl border border-[#EBEBF2]" />
      </div>
      <div className="mt-auto h-10 w-full rounded-full bg-[#FBBF24]" />
    </div>
  );
}

function MobileWalletSkeleton() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="rounded-2xl p-5" style={{ background: '#0F0A2E' }}>
        <div className="h-2 w-20 bg-white/30 rounded mb-3" />
        <div className="h-6 w-32 bg-white rounded mb-4" />
        <div className="h-6 w-24 rounded-full bg-white/20" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="h-16 rounded-xl bg-[#F0F0F5]" />
        <div className="h-16 rounded-xl bg-[#F0F0F5]" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-2 w-24 bg-[#EBEBF2] rounded mb-1" />
        {[1, 2, 3].map(i => (
          <div key={i} className="flex justify-between items-center py-2 border-b border-[#F0F0F5]">
            <div className="flex gap-2 items-center">
              <div className="h-6 w-6 rounded-full bg-[#F0F0F5]" />
              <div className="flex flex-col gap-1">
                <div className="h-2 w-20 bg-[#EBEBF2] rounded" />
                <div className="h-1.5 w-12 bg-[#EBEBF2] rounded" />
              </div>
            </div>
            <div className="h-3 w-12 bg-[#D1D5DB] rounded" />
          </div>
        ))}
      </div>
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

const faqItems = [
  { question: 'How do I know if I qualify for a campaign?', answer: "Varmply checks your profile against each campaign's eligibility rules automatically. You'll see a clear Eligible or Not Eligible status before you apply — no guessing." },
  { question: 'When do I get paid?', answer: "Payments are released from escrow after your submission is validated — typically 24–72 hours. Funds land in your Varmply wallet immediately and can be withdrawn anytime." },
  { question: 'What counts as a valid submission?', answer: "Each campaign defines its own requirements (tagging the brand, hashtags, minimum video length). Validation is automated. The campaign brief shows exactly what's needed upfront." },
  { question: 'Can I join multiple campaigns at once?', answer: "Yes — as many as you qualify for simultaneously. Some campaigns have exclusivity clauses, which are always disclosed upfront." },
  { question: 'What platforms are supported?', answer: 'Instagram, TikTok, YouTube, and Twitter. Each campaign specifies which platforms count.' },
  { question: 'Is there a fee for creators?', answer: 'Varmply is free for creators. You keep 100% of your campaign earnings. We charge sponsors, not creators.' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CreatorsPage() {
  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* 1. HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-24"
        style={{ minHeight: '100dvh', background: '#00A050' }}>
        <CreatorBalloons3D />
        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        {/* Radial glow */}
        <div className="absolute top-0 left-0 pointer-events-none" style={{
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(187,247,208,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translate(-20%, -20%)',
        }} />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center justify-center min-h-[70dvh]">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center">
              <motion.span variants={fadeUp}
                className="inline-block rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] mb-6 text-white"
                style={{ background: 'rgba(255,255,255,0.15)' }}>
                For Creators
              </motion.span>
              <motion.h1 variants={fadeUp}
                className="font-black text-white tracking-tight mb-6"
                style={{ fontSize: 'clamp(40px, 5vw, 68px)', lineHeight: 1.0 }}>
                Structure your campaigns.<br />Guarantee your payouts.
              </motion.h1>
              <motion.p variants={fadeUp}
                className="text-base leading-relaxed mb-10"
                style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 520 }}>
                Stop waiting on DMs and spreadsheets. Browse transparent briefs, hit the metrics, and withdraw the moment your content is validated.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-12">
                <Link href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:opacity-90"
                  style={{ background: 'white', color: '#00A050' }}>
                  Create Creator Account <ArrowRight size={15} />
                </Link>
                <Link href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold"
                  style={{ color: 'white', border: '1.5px solid rgba(255,255,255,0.28)' }}>
                  Browse Campaigns
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
                {['Guaranteed payouts', 'No scattered DMs', 'Top-tier brands', 'Free to join'].map((b) => (
                  <span key={b} className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full text-white"
                    style={{ background: 'rgba(255,255,255,0.12)' }}>
                    <CheckCircle size={13} style={{ color: '#BBF7D0' }} /> {b}
                  </span>
                ))}
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
              From browse<br />to payout.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base text-[#4A4A6A]"
              style={{ lineHeight: 1.6, maxWidth: 440 }}>
              Four steps, fully structured. No chasing, no surprises — just clear briefs and automatic payments.
            </motion.p>
          </motion.div>

          {/* 2×2 editorial bento */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                step: '01', accent: '#7C3BED', bgTint: 'rgba(124,59,237,0.05)', border: 'rgba(124,59,237,0.14)',
                label: 'Browse the marketplace',
                description: 'Filter by niche, platform, payout, and eligibility. Every campaign shows full requirements before you apply.',
                pattern: 'repeating-linear-gradient(-45deg, rgba(124,59,237,0.06) 0px, rgba(124,59,237,0.06) 1px, transparent 1px, transparent 14px)',
                phone: <MobileMarketplaceSkeleton />,
              },
              {
                step: '02', accent: '#00A050', bgTint: 'rgba(0,160,80,0.05)', border: 'rgba(0,160,80,0.14)',
                label: 'Connect & apply',
                description: 'Link your social accounts. Varmply checks eligibility automatically — follower count, engagement, niche match.',
                pattern: 'radial-gradient(circle, rgba(0,160,80,0.13) 1px, transparent 1px)',
                patternSize: '18px 18px',
                phone: <MobileProfileSkeleton />,
              },
              {
                step: '03', accent: '#D97706', bgTint: 'rgba(217,119,6,0.05)', border: 'rgba(217,119,6,0.14)',
                label: 'Submit your content',
                description: 'Post your content, submit the link in Varmply. Attach screenshots and notes. All tracked in one place.',
                pattern: 'repeating-linear-gradient(180deg, rgba(217,119,6,0.07) 0px, rgba(217,119,6,0.07) 1px, transparent 1px, transparent 22px)',
                phone: <MobileSubmitSkeleton />,
              },
              {
                step: '04', accent: '#2563EB', bgTint: 'rgba(37,99,235,0.05)', border: 'rgba(37,99,235,0.14)',
                label: 'Earn after validation',
                description: 'Once your submission meets campaign criteria, funds release from escrow to your wallet. Withdraw anytime.',
                pattern: 'repeating-linear-gradient(90deg, rgba(37,99,235,0.06) 0px, rgba(37,99,235,0.06) 1px, transparent 1px, transparent 20px)',
                phone: <MobileWalletSkeleton />,
              },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="relative overflow-hidden rounded-[32px] flex flex-col"
                  style={{ background: s.bgTint, border: `1px solid ${s.border}`, minHeight: 420 }}>
                  {/* Pattern */}
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

      {/* 3. CREATOR COMMUNITY ────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Split header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.div variants={fadeUp}><SectionLabel>Community</SectionLabel></motion.div>
              <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
                Real creators.<br />Real payouts.
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} className="flex gap-8 md:gap-10 md:pb-1 shrink-0">
              {[
                { value: '847+', label: 'Active creators' },
                { value: '₦2.4M', label: 'Distributed' },
                { value: '98%', label: 'On-time payouts' },
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

          {/* Video grid */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { imageSrc: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80', caption: '@dami.creates', subcaption: '₦140K earned · TikTok', chips: [{ label: '120K followers', position: 'top-left' as const, variant: 'dark' as const }] },
              { imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', caption: '@chuka.tv', subcaption: '₦95K earned · Instagram', chips: [{ label: '88K followers', position: 'top-left' as const, variant: 'dark' as const }] },
              { imageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80', caption: '@amara.creates', subcaption: '₦85K earned · YouTube', chips: [{ label: '54K followers', position: 'top-left' as const, variant: 'dark' as const }] },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <VideoCard {...item} aspectRatio="4/5" surface="light" showGradient hoverable />
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
            className="text-center mt-10 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: '#BBBBCC' }}>
            All figures verified automatically — no self-reporting
          </motion.p>
        </div>
      </section>

      {/* 4. WALLET & EARNINGS ────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Split header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.div variants={fadeUp}><SectionLabel>Wallet & Earnings</SectionLabel></motion.div>
              <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
                Your earnings,<br />always transparent.
              </motion.h2>
            </div>
            <motion.p variants={fadeUp}
              className="text-base text-[#4A4A6A] max-w-xs md:text-right md:pb-1"
              style={{ lineHeight: 1.6 }}>
              Every naira tracked and timestamped. No more chasing sponsors or waiting on spreadsheets.
            </motion.p>
          </motion.div>

          {/* Big browser card — green editorial */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
            className="relative overflow-hidden rounded-[28px] mb-4"
            style={{ background: 'rgba(0,160,80,0.05)', border: '1.5px solid rgba(0,160,80,0.14)' }}>
            {/* Horizontal rules pattern */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: 'repeating-linear-gradient(180deg, rgba(0,160,80,0.06) 0px, rgba(0,160,80,0.06) 1px, transparent 1px, transparent 22px)',
            }} />
            <div className="relative z-10">
              {/* Top rule bar */}
              <div className="flex items-center justify-between px-8 md:px-10 pt-6 pb-4"
                style={{ borderBottom: '1px solid rgba(0,160,80,0.12)' }}>
                <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#00A050' }}>
                  Creator Wallet
                </span>
                <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: '#00A050' }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: '#00A050' }} />
                  Live balance
                </span>
              </div>
              <div className="p-6 md:p-10 pt-7">
                <p className="font-black text-[#0F0F1A] tracking-tight mb-6"
                  style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.15 }}>
                  Automatic payouts the moment<br className="hidden md:block" /> your content is validated.
                </p>
                <div className="relative rounded-xl overflow-hidden"
                  style={{ border: '1px solid rgba(0,160,80,0.10)', boxShadow: '0 4px 24px rgba(0,160,80,0.08)' }}>
                  <BrowserChrome url="app.varmply.com/wallet" />
                  <div className="bg-[#FAFAFA] overflow-hidden" style={{ height: 340 }}>
                    <WalletMockup />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3 wallet feature cards */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                accent: '#00A050', bgTint: 'rgba(0,160,80,0.05)', border: 'rgba(0,160,80,0.14)',
                Icon: DollarSign, label: 'Instant Payouts',
                title: "Paid the moment you're validated.",
                desc: 'Funds release from escrow automatically. No chasing, no waiting on a sponsor to log in.',
                pattern: 'radial-gradient(circle, rgba(0,160,80,0.13) 1px, transparent 1px)',
                patternSize: '18px 18px',
                stats: [{ val: '24–72h', label: 'Avg. payout' }, { val: '100%', label: 'Automated' }],
              },
              {
                accent: '#7C3BED', bgTint: 'rgba(124,59,237,0.05)', border: 'rgba(124,59,237,0.14)',
                Icon: Zap, label: 'Escrow Guarantee',
                title: 'Budget locked before you apply.',
                desc: 'Sponsor funds are in escrow before the campaign goes live. If you deliver, you get paid. Full stop.',
                pattern: 'repeating-linear-gradient(-45deg, rgba(124,59,237,0.06) 0px, rgba(124,59,237,0.06) 1px, transparent 1px, transparent 14px)',
                stats: [{ val: '₦0', label: 'Ghosted payouts' }, { val: '100%', label: 'Pre-secured' }],
              },
              {
                accent: '#D97706', bgTint: 'rgba(217,119,6,0.05)', border: 'rgba(217,119,6,0.14)',
                Icon: Search, label: 'Full Transparency',
                title: 'Every naira tracked.',
                desc: 'See your pending earnings, released funds, and full transaction history. Nothing hidden.',
                pattern: 'repeating-linear-gradient(90deg, rgba(217,119,6,0.06) 0px, rgba(217,119,6,0.06) 1px, transparent 1px, transparent 20px)',
                stats: [{ val: '0', label: 'Hidden fees' }, { val: 'Live', label: 'Balance' }],
              },
            ].map((f, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="relative overflow-hidden rounded-[28px] flex flex-col"
                  style={{ background: f.bgTint, border: `1.5px solid ${f.border}`, minHeight: 260 }}>
                  <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: f.pattern, backgroundSize: f.patternSize,
                  }} />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between px-7 pt-5 pb-4"
                      style={{ borderBottom: `1px solid ${f.border}` }}>
                      <span className="text-[9px] font-black uppercase tracking-[0.22em]"
                        style={{ color: f.accent }}>{f.label}</span>
                      <div className="h-6 w-6 rounded-lg flex items-center justify-center"
                        style={{ background: `${f.accent}15` }}>
                        <f.Icon size={13} style={{ color: f.accent }} />
                      </div>
                    </div>
                    <div className="flex-1 px-7 pt-6 pb-4">
                      <h3 className="font-black text-[#0F0F1A] tracking-tight mb-3"
                        style={{ fontSize: 'clamp(16px, 1.5vw, 19px)', lineHeight: 1.2 }}>{f.title}</h3>
                      <p className="text-sm text-[#4A4A6A] leading-relaxed">{f.desc}</p>
                    </div>
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

      {/* 5. WHY VARMPLY ──────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Centered header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-14 flex flex-col items-center text-center gap-4">
            <motion.div variants={fadeUp}><SectionLabel>Why Varmply</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              Built around<br />accountability.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-[#4A4A6A]"
              style={{ maxWidth: 420, lineHeight: 1.6 }}>
              No vague requirements. No missing payouts. Built to give creators peace of mind from day one.
            </motion.p>
          </motion.div>

          {/* 3 editorial trust cards */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Card 1 — Clear Rules · crosshatch */}
            <motion.div variants={fadeUp}>
              <div className="relative overflow-hidden rounded-[28px] flex flex-col"
                style={{ background: 'rgba(124,59,237,0.05)', border: '1.5px solid rgba(124,59,237,0.14)', minHeight: 380 }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: 'repeating-linear-gradient(-45deg, rgba(124,59,237,0.06) 0px, rgba(124,59,237,0.06) 1px, transparent 1px, transparent 14px)',
                }} />
                <span className="absolute -bottom-6 -right-2 font-black select-none pointer-events-none leading-none"
                  style={{ fontSize: '13rem', color: '#7C3BED', opacity: 0.055, letterSpacing: '-0.06em' }}>01</span>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between px-7 pt-6 pb-4"
                    style={{ borderBottom: '1px solid rgba(124,59,237,0.12)' }}>
                    <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#7C3BED' }}>Rules</span>
                    <Zap size={12} style={{ color: '#7C3BED' }} />
                  </div>
                  <div className="flex-1 px-7 pt-8 pb-4 flex flex-col">
                    <p className="font-black leading-none mb-1"
                      style={{ fontSize: 'clamp(52px, 6vw, 72px)', color: '#7C3BED', letterSpacing: '-0.04em' }}>100%</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] mb-8"
                      style={{ color: 'rgba(124,59,237,0.45)' }}>Clear upfront</p>
                    <div className="h-px mb-6" style={{ background: 'rgba(124,59,237,0.14)' }} />
                    <h3 className="font-bold text-base mb-2 text-[#0F0F1A]">Clear rules upfront</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed flex-1">
                      Every campaign shows exactly what's required before you commit. No hidden clauses, no last-minute surprises.
                    </p>
                  </div>
                  <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(124,59,237,0.12)' }}>
                    {[{ val: '0', label: 'Hidden terms' }, { val: 'Pre-read', label: 'Brief' }].map((s, j) => (
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

            {/* Card 2 — Verified Payouts · dot grid */}
            <motion.div variants={fadeUp}>
              <div className="relative overflow-hidden rounded-[28px] flex flex-col"
                style={{ background: 'rgba(0,160,80,0.05)', border: '1.5px solid rgba(0,160,80,0.14)', minHeight: 380 }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(0,160,80,0.13) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }} />
                <span className="absolute -bottom-6 -right-2 font-black select-none pointer-events-none leading-none"
                  style={{ fontSize: '13rem', color: '#00A050', opacity: 0.055, letterSpacing: '-0.06em' }}>02</span>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between px-7 pt-6 pb-4"
                    style={{ borderBottom: '1px solid rgba(0,160,80,0.12)' }}>
                    <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#00A050' }}>Payouts</span>
                    <CheckCircle size={12} style={{ color: '#00A050' }} />
                  </div>
                  <div className="flex-1 px-7 pt-8 pb-4 flex flex-col">
                    <p className="font-black leading-none mb-1"
                      style={{ fontSize: 'clamp(52px, 6vw, 72px)', color: '#00A050', letterSpacing: '-0.04em' }}>98%</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] mb-8"
                      style={{ color: 'rgba(0,160,80,0.45)' }}>On-time payouts</p>
                    <div className="h-px mb-6" style={{ background: 'rgba(0,160,80,0.14)' }} />
                    <h3 className="font-bold text-base mb-2 text-[#0F0F1A]">Verified payouts</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed flex-1">
                      Sponsor money is locked in escrow before campaigns go live. If you deliver, you get paid. No exceptions.
                    </p>
                  </div>
                  <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(0,160,80,0.12)' }}>
                    {[{ val: '₦2.4M', label: 'Distributed' }, { val: '48h', label: 'Avg. release' }].map((s, j) => (
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

            {/* Card 3 — One Place · horizontal rules */}
            <motion.div variants={fadeUp}>
              <div className="relative overflow-hidden rounded-[28px] flex flex-col"
                style={{ background: 'rgba(217,119,6,0.05)', border: '1.5px solid rgba(217,119,6,0.14)', minHeight: 380 }}>
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: 'repeating-linear-gradient(180deg, rgba(217,119,6,0.07) 0px, rgba(217,119,6,0.07) 1px, transparent 1px, transparent 22px)',
                }} />
                <span className="absolute -bottom-6 -right-2 font-black select-none pointer-events-none leading-none"
                  style={{ fontSize: '13rem', color: '#D97706', opacity: 0.055, letterSpacing: '-0.06em' }}>03</span>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between px-7 pt-6 pb-4"
                    style={{ borderBottom: '1px solid rgba(217,119,6,0.12)' }}>
                    <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#D97706' }}>Platform</span>
                    <ArrowRight size={12} style={{ color: '#D97706' }} />
                  </div>
                  <div className="flex-1 px-7 pt-8 pb-4 flex flex-col">
                    <p className="font-black leading-none mb-1"
                      style={{ fontSize: 'clamp(52px, 6vw, 72px)', color: '#D97706', letterSpacing: '-0.04em' }}>1</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] mb-8"
                      style={{ color: 'rgba(217,119,6,0.45)' }}>Place for everything</p>
                    <div className="h-px mb-6" style={{ background: 'rgba(217,119,6,0.14)' }} />
                    <h3 className="font-bold text-base mb-2 text-[#0F0F1A]">One place for all</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed flex-1">
                      Browse, apply, submit, and get paid without switching tools. Your entire creator workflow in one structured platform.
                    </p>
                  </div>
                  <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(217,119,6,0.12)' }}>
                    {[{ val: '4', label: 'Platforms' }, { val: '0', label: 'Extra tools' }].map((s, j) => (
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

          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
            className="text-center mt-10 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: '#BBBBCC' }}>
            Free for creators — we charge sponsors, not you
          </motion.p>
        </div>
      </section>

      {/* 6. FAQ ──────────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-14 flex flex-col items-center text-center gap-4">
            <motion.div variants={fadeUp}><SectionLabel>FAQ</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              Creator questions,<br />answered.
            </motion.h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={vp} transition={{ duration: 0.5 }}>
            <FAQAccordion items={faqItems} />
          </motion.div>
        </div>
      </section>

    </div>
  );
}
