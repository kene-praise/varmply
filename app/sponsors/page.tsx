'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Lock, RotateCcw, BarChart2, Users, Shield } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOptions, tiltIn } from '@/lib/motion';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';
import CampaignBuilderMockup from '@/components/UIComponents/CampaignBuilderMockup';
import SponsorAnalyticsMockup from '@/components/UIComponents/SponsorAnalyticsMockup';
import { BrowserChrome, DashboardSkeleton, CreateCampaignSkeleton, MarketplaceSkeleton } from '@/components/MockupSkeletons';
import { VideoCard } from '@/components/ui/VideoCard';
import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { Card } from '@/components/ui/Card';
import { SectionHeading, SectionLabel } from '@/components/ui/Section';
import { StatusBadge } from '@/components/ui/Badge';
import { colors } from '@/lib/tokens';
import { LiquidGlass } from '@/components/ui/LiquidGlass';

// --- Mobile skeletons for how-it-works ---
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
          <div key={l} className="flex-1 rounded-lg p-2 flex flex-col items-center gap-1" style={{ background: i === 0 ? '#DBEAFE' : '#F0F0F5' }}>
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
        {[['Total Reach', '148K'], ['Eng. Rate', '8.4%'], ['Creators', '18'], ['Budget Used', '90%']].map(([l, v]) => (
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

// --- Data ---
const tickerItems = [
  { brand: 'Paystack', stat: '₦500K funded', result: '148K reach' },
  { brand: 'PiggyVest', stat: '14 creators', result: '9.1% eng. rate' },
  { brand: 'Carbon Credit', stat: '₦350K escrowed', result: '67K reach' },
  { brand: 'Kuda Bank', stat: '₦280K funded', result: '22 creators' },
  { brand: 'Flutterwave', stat: '₦620K funded', result: '3.4x ROI' },
  { brand: 'Cowrywise', stat: '18 creators', result: '8.7% eng. rate' },
];

const phoneVisual = (children: React.ReactNode) => (
  <div className="mt-8 relative h-[200px] md:h-[250px] w-full flex justify-center overflow-visible pointer-events-none">
    <div className="absolute top-0 flex justify-center" style={{ transform: 'scale(0.85)', transformOrigin: 'top center', width: 320 }}>
      <PhoneFrame screenBg="#FFFFFF">
        <div className="w-full h-[696px] bg-white pt-10">
          {children}
        </div>
      </PhoneFrame>
    </div>
  </div>
);

const howItWorksSteps = [
  {
    step: '01',
    title: 'Define your campaign rules',
    description: "Set your brief, eligibility requirements, deliverables, payout per creator, and deadline. Everything is crystal clear before any creator applies.",
    bg: colors.bento.purple.bg, text: 'white', tagBg: 'rgba(255,255,255,0.15)',
    customVisual: phoneVisual(<MobileCampaignSkeleton />),
  },
  {
    step: '02',
    title: 'Activate with escrow',
    description: "Lock your campaign budget in escrow. Creators can see funds exist before they apply. No budget = no campaign. Trust is built in from day one.",
    bg: colors.bento.green.bg, text: 'white', tagBg: 'rgba(255,255,255,0.15)',
    customVisual: phoneVisual(<MobileEscrowSkeleton />),
  },
  {
    step: '03',
    title: 'Monitor in real time',
    description: "Watch submissions come in. Track reach, engagement, and impressions per creator as they happen. Every metric is validated automatically.",
    bg: colors.bento.amber.bg, text: 'white', tagBg: 'rgba(255,255,255,0.15)',
    customVisual: phoneVisual(<MobileAnalyticsSkeleton />),
  },
  {
    step: '04',
    title: 'Pay for verified results',
    description: 'Funds are released only when performance is confirmed. Unused budget is returned automatically. You only ever pay for what actually happened.',
    bg: '#0F0A2E', text: 'white', tagBg: 'rgba(255,255,255,0.1)',
    customVisual: phoneVisual(<MobilePayoutSkeleton />),
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

const performanceCampaigns = [
  {
    name: 'Paystack Q1 Launch',
    status: 'Active',
    budget: '₦500,000',
    spent: '₦450,000',
    progress: 90,
    creators: 18,
    reach: '148K',
    engRate: '8.4%',
  },
  {
    name: 'PiggyVest February Drive',
    status: 'Completed',
    budget: '₦280,000',
    spent: '₦280,000',
    progress: 100,
    creators: 14,
    reach: '92K',
    engRate: '9.1%',
  },
  {
    name: 'Carbon Credit Campaign',
    status: 'Active',
    budget: '₦350,000',
    spent: '₦210,000',
    progress: 60,
    creators: 12,
    reach: '67K',
    engRate: '7.3%',
  },
];

const analyticsFeatures = [
  {
    title: 'Every metric. Automatically tracked.',
    description: "Reach, impressions, engagement rate — all captured without relying on creator self-reporting. Data you can actually trust.",
    icon: BarChart2,
  },
  {
    title: 'Per-creator breakdown.',
    description: 'See exactly how each creator performed. Who drove the most reach? Who had the best engagement? Make data-driven decisions for your next campaign.',
    icon: Users,
  },
  {
    title: 'Full budget visibility.',
    description: 'Track escrow balance, released funds, and projected spend in real time. No financial surprises, ever.',
    icon: Shield,
  },
];

export default function SponsorsPage() {

  return (
    <div className="bg-white overflow-hidden">

      {/* 1. HERO */}
      <section className="relative flex flex-col justify-center overflow-hidden bg-[#2563EB] pt-32 pb-24 cursor-none" style={{ minHeight: '100dvh' }}>
        <LiquidGlass width={140} height={140} borderRadius={70} blur={2} tintOpacity={0.15} />
        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        {/* Radial glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(147,197,253,0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translate(30%, -30%)',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.span variants={fadeUp} className="tag mb-6 inline-flex shadow-sm" style={{ color: 'white', background: 'rgba(255,255,255,0.15)' }}>
                For Sponsors
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="mb-5 text-white font-extrabold leading-[1.08]"
                style={{ fontSize: 'clamp(36px, 4.5vw, 60px)', letterSpacing: '-0.02em' }}
              >
                Creator campaigns with{' '}
                <span style={{ color: '#93C5FD' }}>full accountability.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-white/80 text-lg leading-relaxed mb-8" style={{ maxWidth: 480 }}>
                Set your rules, lock your budget, and watch verified results come in. Varmply handles eligibility, submission validation, and payouts — automatically.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:opacity-90"
                  style={{ background: 'white', color: '#2563EB' }}
                >
                  Launch a Campaign <ArrowRight size={15} />
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10"
                  style={{ color: 'white', border: '1.5px solid rgba(255,255,255,0.3)' }}
                >
                  See How It Works
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {['Escrow-protected budget', 'Auto-validated submissions', 'Pay for results only'].map((b, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full text-white" style={{ background: 'rgba(255,255,255,0.12)' }}>
                    <CheckCircle size={13} style={{ color: '#93C5FD' }} /> {b}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Campaign builder mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex justify-center lg:justify-end"
            >
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
                <CampaignBuilderMockup />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. STATS TICKER */}
      <div className="overflow-hidden py-4" style={{ background: 'var(--bg-dark)', borderTop: '1px solid var(--border-dark-subtle)' }}>
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6">
              <span className="text-white/80 text-sm font-semibold">{item.brand}</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>{item.stat}</span>
              <span className="text-[#93C5FD] text-xs font-semibold">{item.result}</span>
              <span className="text-white/15 mx-2">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="py-24" style={{ background: '#FCFCFC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} className="mb-14 text-center">
            <motion.div variants={fadeUp}><SectionLabel>Process</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-bold text-[var(--text-primary)]" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
              How it works for sponsors
            </motion.h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {howItWorksSteps.map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card variant="bento" hoverable className="h-full flex flex-col pt-8 px-8 pb-0 overflow-hidden rounded-[var(--radius-xl)]" style={{ background: s.bg }}>
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider self-start" style={{ background: s.tagBg, color: s.text }}>
                    STEP {s.step}
                  </span>
                  <h3 className="font-bold text-2xl mb-3 leading-tight" style={{ color: s.text }}>{s.title}</h3>
                  <p className="text-base leading-relaxed flex-1" style={{ color: s.text, opacity: 0.8 }}>{s.description}</p>
                  <div className="absolute top-4 right-6 font-extrabold select-none pointer-events-none" style={{ fontSize: '6rem', lineHeight: 1, color: s.text, opacity: 0.1 }}>
                    {s.step}
                  </div>
                  {s.customVisual && s.customVisual}
                  {!s.customVisual && <div className="flex-1 pb-8" />}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. DASHBOARD & ANALYTICS SHOWCASE */}
      <section id="analytics" className="py-24" style={{ background: '#FCFCFC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} className="mb-16">
            <motion.div variants={fadeUp}><SectionLabel>Dashboard & Analytics</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-bold text-[var(--text-primary)] mt-4" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: 640 }}>
              Total visibility.<br />Zero guesswork.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-[var(--text-muted)]" style={{ maxWidth: 480 }}>
              Every campaign, creator, and naira — tracked automatically from activation to payout.
            </motion.p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {[
              {
                label: 'CAMPAIGN DASHBOARD',
                bg: '#2563EB',
                shadow: '0 16px 48px rgba(37,99,235,0.18), 0 4px 16px rgba(37,99,235,0.10)',
                title: 'Total campaign control. One dashboard.',
                desc: 'Every active campaign, submission, and spend tracked in real time — without chasing creator reports or digging through spreadsheets.',
                icon: null,
                url: 'app.varmply.com/campaigns',
                mockup: <DashboardSkeleton />,
              },
              {
                label: 'METRICS',
                bg: '#7C3BED',
                shadow: '0 16px 48px rgba(124,59,237,0.18), 0 4px 16px rgba(124,59,237,0.10)',
                title: analyticsFeatures[0].title,
                desc: analyticsFeatures[0].description,
                icon: analyticsFeatures[0].icon,
                url: 'app.varmply.com/analytics',
                mockup: <CreateCampaignSkeleton />,
              },
              {
                label: 'CREATOR INSIGHTS',
                bg: '#D97706',
                shadow: '0 16px 48px rgba(217,119,6,0.18), 0 4px 16px rgba(217,119,6,0.10)',
                title: analyticsFeatures[1].title,
                desc: analyticsFeatures[1].description,
                icon: analyticsFeatures[1].icon,
                url: 'app.varmply.com/analytics/creators',
                mockup: <MarketplaceSkeleton />,
              },
              {
                label: 'BUDGET TRACKING',
                bg: '#0F0A2E',
                shadow: '0 16px 48px rgba(0,0,0,0.30), 0 4px 16px rgba(0,0,0,0.15)',
                title: analyticsFeatures[2].title,
                desc: analyticsFeatures[2].description,
                icon: analyticsFeatures[2].icon,
                url: 'app.varmply.com/analytics/budget',
                mockup: <DashboardSkeleton />,
              },
            ].map(({ label, bg, shadow, title, desc, icon: Icon, url, mockup }, i) => {
              const reversed = i % 2 !== 0;
              return (
                <motion.div key={i} variants={tiltIn} initial="hidden" whileInView="visible" viewport={viewportOptions}>
                  <Card variant="dark" className="p-0 overflow-hidden flex flex-col rounded-[32px] min-h-[400px] relative" style={{ background: bg, boxShadow: shadow, border: 'none' }}>
                    {/* Pattern */}
                    <div className="absolute inset-0 pointer-events-none" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 0, transparent 50%), radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)`,
                      backgroundSize: '14px 14px, 28px 28px',
                    }} />
                    <div className={`flex flex-col relative z-10 w-full h-full min-h-[400px] ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                      {/* Text */}
                      <div className="p-10 lg:p-12 flex-1 flex flex-col justify-center min-h-[400px] z-20">
                        <SectionLabel surface="dark" className="bg-white/20 text-white mb-6 w-max">{label}</SectionLabel>
                        {Icon && (
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.15)' }}>
                              <Icon size={18} color="white" />
                            </div>
                            <h2 className="text-white font-bold tracking-tight" style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.1 }}>
                              {title}
                            </h2>
                          </div>
                        )}
                        {!Icon && (
                          <h2 className="text-white font-bold tracking-tight mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1 }}>
                            {title}
                          </h2>
                        )}
                        <p className="text-[var(--text-on-dark-muted)] text-base leading-relaxed max-w-sm">
                          {desc}
                        </p>
                      </div>
                      {/* Mockup */}
                      <div className="lg:w-1/2 relative w-full h-[220px] lg:h-auto">
                        {reversed ? (
                          <div className="absolute right-4 lg:right-0 top-0 lg:top-[60px] w-[800px] rounded-tr-[20px] shadow-2xl border-t border-r border-white/20 flex flex-col overflow-hidden bg-[#FAFAFA]" style={{ height: '600px' }}>
                            <BrowserChrome url={url} />
                            <div className="flex-1 w-full bg-[#FAFAFA] overflow-hidden">{mockup}</div>
                          </div>
                        ) : (
                          <div className="absolute left-4 lg:left-0 top-0 lg:top-[60px] w-[800px] rounded-tl-[20px] shadow-2xl border-t border-l border-white/20 flex flex-col overflow-hidden bg-[#FAFAFA]" style={{ height: '600px' }}>
                            <BrowserChrome url={url} />
                            <div className="flex-1 w-full bg-[#FAFAFA] overflow-hidden">{mockup}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. LIVE CAMPAIGN PERFORMANCE */}
      <section id="performance" className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header row */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <motion.div variants={fadeUp}><SectionLabel>Live Performance</SectionLabel></motion.div>
              <motion.h2 variants={fadeUp} className="font-extrabold text-[var(--text-primary)] mt-3 leading-none" style={{ fontSize: 'clamp(36px, 5vw, 68px)', letterSpacing: '-0.03em' }}>
                Real campaigns.<br />Verified results.
              </motion.h2>
            </div>
            {/* Aggregate bar */}
            <motion.div variants={fadeUp} className="flex gap-8 mb-1 shrink-0">
              {[
                { value: '₦1.13M', label: 'Total budget' },
                { value: '44', label: 'Creators' },
                { value: '8.9%', label: 'Avg. eng. rate' },
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-extrabold text-[var(--text-primary)]" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', letterSpacing: '-0.02em' }}>{s.value}</span>
                  <span className="text-xs text-[var(--text-muted)] mt-0.5 font-medium uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Poster cards */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { ...performanceCampaigns[0], accent: '#2563EB', accentLight: '#DBEAFE', accentMuted: 'rgba(37,99,235,0.08)', heroStat: '148K', heroLabel: 'TOTAL REACH', idx: '01' },
              { ...performanceCampaigns[1], accent: '#7C3BED', accentLight: '#EDE9FF', accentMuted: 'rgba(124,59,237,0.08)', heroStat: '9.1%', heroLabel: 'ENG. RATE', idx: '02' },
              { ...performanceCampaigns[2], accent: '#D97706', accentLight: '#FEF3C7', accentMuted: 'rgba(217,119,6,0.08)', heroStat: '67K', heroLabel: 'TOTAL REACH', idx: '03' },
            ].map((c, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div
                  className="relative overflow-hidden rounded-[28px] flex flex-col"
                  style={{ background: c.accentMuted, border: `1.5px solid ${c.accent}18`, minHeight: 380 }}
                >
                  {/* Giant ghost index number */}
                  <span
                    className="absolute -bottom-4 -right-3 font-extrabold select-none pointer-events-none leading-none"
                    style={{ fontSize: '11rem', color: c.accent, opacity: 0.06, letterSpacing: '-0.05em' }}
                  >
                    {c.idx}
                  </span>

                  <div className="relative z-10 flex flex-col h-full p-7">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-[0.12em]" style={{ color: c.accent }}>{c.name}</span>
                      <StatusBadge status={c.status === 'Completed' ? 'closed' : 'active'} />
                    </div>

                    {/* Hero stat */}
                    <div className="flex-1 flex flex-col justify-center mb-6">
                      <p className="font-extrabold leading-none" style={{ fontSize: 'clamp(56px, 7vw, 80px)', color: c.accent, letterSpacing: '-0.04em' }}>
                        {c.heroStat}
                      </p>
                      <p className="text-[10px] font-bold tracking-[0.15em] mt-2" style={{ color: c.accent, opacity: 0.5 }}>
                        {c.heroLabel}
                      </p>
                    </div>

                    {/* Budget bar */}
                    <div className="mb-5">
                      <div className="flex justify-between text-xs font-medium mb-2" style={{ color: c.accent, opacity: 0.6 }}>
                        <span>{c.spent} spent</span>
                        <span>{c.progress}%</span>
                      </div>
                      <div className="rounded-full h-1.5 overflow-hidden" style={{ background: `${c.accent}20` }}>
                        <div className="h-full rounded-full" style={{ width: `${c.progress}%`, background: c.accent }} />
                      </div>
                    </div>

                    {/* Bottom stats */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'Creators', value: c.creators.toString() },
                        { label: 'Budget', value: c.budget },
                        { label: 'Eng. Rate', value: c.engRate },
                      ].map((s, j) => (
                        <div key={j} className="rounded-xl p-2.5 text-center" style={{ background: c.accentLight }}>
                          <p className="font-bold text-sm" style={{ color: c.accent }}>{s.value}</p>
                          <p className="text-[9px] mt-0.5 font-medium uppercase tracking-wider" style={{ color: c.accent, opacity: 0.55 }}>{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer note */}
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOptions}
            className="mt-8 text-center text-xs font-medium text-[var(--text-muted)] uppercase tracking-widest"
          >
            All figures validated automatically — no self-reporting
          </motion.p>

        </div>
      </section>

      {/* 7. ESCROW */}
      <section id="escrow" className="py-24" style={{ background: '#FCFCFC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={tiltIn} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            <div className="relative overflow-hidden rounded-[32px] p-0" style={{ background: '#0F0A2E', boxShadow: '0 24px 64px rgba(0,0,0,0.28), 0 4px 16px rgba(0,0,0,0.14)' }}>
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 0, transparent 50%), radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: '14px 14px, 28px 28px' }} />
              <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,59,237,0.18) 0%, transparent 70%)' }} />
              <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)' }} />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <SectionLabel surface="dark" className="bg-white/15 text-white mb-8 w-max">Escrow System</SectionLabel>
                  <h2 className="text-white font-bold mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                    Your budget moves<br />on your terms.
                  </h2>
                  <div className="flex flex-col gap-5">
                    {[
                      { icon: Lock, color: '#A78BFA', bg: 'rgba(124,59,237,0.2)', title: 'Locked on activation', desc: 'Budget enters escrow the moment your campaign goes live. No creator can access it until performance is confirmed.' },
                      { icon: CheckCircle, color: '#6EE7B7', bg: 'rgba(16,185,129,0.15)', title: 'Released on verified results', desc: "Each creator's portion unlocks automatically once their submission meets every requirement you set." },
                      { icon: RotateCcw, color: '#FCD34D', bg: 'rgba(245,158,11,0.15)', title: 'Refunded if unused', desc: 'Unfilled slots and missed deadlines trigger automatic returns. You never lose budget to non-performance.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: item.bg }}>
                          <item.icon size={16} style={{ color: item.color }} />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                          <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-10 lg:p-14 flex items-center justify-center border-t lg:border-t-0 lg:border-l" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                  <div className="w-full max-w-xs flex flex-col items-center gap-0">
                    <div className="w-full rounded-2xl p-4 flex items-center gap-3" style={{ background: 'rgba(124,59,237,0.15)', border: '1px solid rgba(124,59,237,0.3)' }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(124,59,237,0.3)' }}><Lock size={16} style={{ color: '#A78BFA' }} /></div>
                      <div>
                        <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider">Sponsor Wallet</p>
                        <p className="text-white font-bold text-lg">₦500,000</p>
                      </div>
                      <span className="ml-auto text-[10px] font-bold px-2 py-1 rounded-full" style={{ background: 'rgba(124,59,237,0.3)', color: '#A78BFA' }}>Locked</span>
                    </div>
                    <div className="flex flex-col items-center py-2">
                      <div className="w-px h-6 bg-white/10" />
                      <ArrowRight size={14} className="rotate-90 text-white/20" />
                    </div>
                    <div className="w-full rounded-2xl p-4 flex items-center gap-3" style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)' }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(245,158,11,0.2)' }}><Shield size={16} style={{ color: '#FCD34D' }} /></div>
                      <div>
                        <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider">Escrow</p>
                        <p className="text-white font-bold text-lg">₦500,000</p>
                      </div>
                      <span className="ml-auto text-[10px] font-bold px-2 py-1 rounded-full" style={{ background: 'rgba(245,158,11,0.2)', color: '#FCD34D' }}>Held</span>
                    </div>
                    <div className="flex flex-col items-center py-2">
                      <div className="w-px h-3 bg-white/10" />
                      <p className="text-white/25 text-[10px] font-semibold uppercase tracking-wider my-1">Auto-validated</p>
                      <ArrowRight size={14} className="rotate-90 text-white/20" />
                    </div>
                    <div className="w-full grid grid-cols-2 gap-3">
                      <div className="rounded-2xl p-3 flex flex-col gap-1.5" style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)' }}>
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.2)' }}><CheckCircle size={13} style={{ color: '#6EE7B7' }} /></div>
                        <p className="text-white font-semibold text-xs">Creator Wallet</p>
                        <p className="text-white/40 text-[10px] leading-tight">Released after verified delivery</p>
                      </div>
                      <div className="rounded-2xl p-3 flex flex-col gap-1.5" style={{ background: 'rgba(239,68,68,0.10)', border: '1px solid rgba(239,68,68,0.2)' }}>
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.18)' }}><RotateCcw size={13} style={{ color: '#FCA5A5' }} /></div>
                        <p className="text-white font-semibold text-xs">Refunded</p>
                        <p className="text-white/40 text-[10px] leading-tight">Returned if unused or missed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. CREATOR CONTENT — REEL WALL */}
      <section className="py-24 overflow-hidden" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <motion.div variants={fadeUp}><SectionLabel surface="dark">Creator Content</SectionLabel></motion.div>
              <motion.h2 variants={fadeUp} className="text-white font-extrabold mt-3 leading-none" style={{ fontSize: 'clamp(32px, 4.5vw, 60px)', letterSpacing: '-0.03em' }}>
                The content your<br />campaigns produce.
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="text-[var(--text-on-dark-muted)] text-base leading-relaxed md:max-w-xs md:mb-1">
              Real creators, real deliverables. Every post tied to a verified campaign brief.
            </motion.p>
          </motion.div>

          {/* Reel grid */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              {
                imageSrc: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80',
                caption: '@amara.creates',
                subcaption: 'Paystack Q1 · TikTok',
                chips: [{ label: '120K views', position: 'top-left' as const, variant: 'dark' as const }],
              },
              {
                imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
                caption: '@dayo_creates',
                subcaption: 'PiggyVest · Instagram',
                chips: [{ label: '88K views', position: 'top-left' as const, variant: 'dark' as const }],
              },
              {
                imageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80',
                caption: '@layla.ng',
                subcaption: 'Carbon Credit · TikTok',
                chips: [{ label: '54K views', position: 'top-left' as const, variant: 'dark' as const }],
              },
              {
                imageSrc: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&q=80',
                caption: '@seunvibes',
                subcaption: 'Paystack Q1 · YouTube',
                chips: [{ label: '210K views', position: 'top-left' as const, variant: 'dark' as const }],
              },
              {
                imageSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80',
                caption: '@chuka.tv',
                subcaption: 'PiggyVest · TikTok',
                chips: [{ label: '67K views', position: 'top-left' as const, variant: 'dark' as const }],
              },
            ].map((reel, i) => (
              <motion.div key={i} variants={fadeUp} className={i % 2 !== 0 ? 'md:mt-8' : ''}>
                <VideoCard
                  {...reel}
                  aspectRatio="9/16"
                  surface="dark"
                  showGradient
                  hoverable
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading label="FAQ" headline="Sponsor questions, answered." />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <FAQAccordion items={faqItems} />
          </motion.div>
        </div>
      </section>

      {/* 9. CTA */}
      <CTABanner
        headline="Ready to run campaigns that actually perform?"
        subtext="Set your rules, protect your budget, and only pay for verified results. Varmply handles the rest."
        cta1={{ label: 'Launch a Campaign →', href: '#' }}
        cta2={{ label: 'See How It Works', href: '#how-it-works' }}
        theme="blue"
      />
    </div>
  );
}
