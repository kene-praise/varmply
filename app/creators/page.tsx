'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOptions, tiltIn, slideUp } from '@/lib/motion';
import { Button } from '@/components/ui/Button';
import { HighlightBadge, CategoryBadge, StatusBadge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { SectionLabel, SectionHeading } from '@/components/ui/Section';
import { VideoCard, MediaGrid, FloatingChip } from '@/components/ui/VideoCard';
import FAQAccordion from '@/components/FAQAccordion';
import WalletMockup from '@/components/UIComponents/WalletMockup';
import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { BrowserChrome } from '@/components/MockupSkeletons';
import { colors } from '@/lib/tokens';
import { LiquidGlass } from '@/components/ui/LiquidGlass';

// --- Data ---
const tickerItems = [
  { handle: '@amara.creates', stat: '₦85K earned', platform: 'Instagram' },
  { handle: '@dayo_creates', stat: '₦140K earned', platform: 'TikTok' },
  { handle: '@seunvibes', stat: '3 campaigns', platform: 'YouTube' },
  { handle: '@temitope.ng', stat: '₦95K earned', platform: 'Instagram' },
  { handle: '@chuka.tv', stat: '₦220K earned', platform: 'TikTok' },
  { handle: '@layla.ng', stat: '5 campaigns', platform: 'Instagram' },
  { handle: '@layla.ng', stat: '5 campaigns', platform: 'Instagram' },
  { handle: '@zara_talks', stat: '₦72K earned', platform: 'TikTok' },
];

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

const processSteps = [
  {
    step: '01',
    title: 'Browse the marketplace',
    description: 'Filter by niche, platform, payout, and eligibility. Every campaign shows full requirements before you apply.',
    bg: colors.bento.purple.bg, text: 'white', tagBg: 'rgba(255,255,255,0.15)', accent: colors.bento.purple.accent,
    customVisual: (
      <div className="mt-8 relative h-[200px] md:h-[250px] w-full flex justify-center overflow-visible pointer-events-none">
        <div className="absolute top-0 flex justify-center" style={{ transform: 'scale(0.85)', transformOrigin: 'top center', width: 320 }}>
          <PhoneFrame screenBg="#FFFFFF">
            <div className="w-full h-[696px] bg-white pt-10">
              <MobileMarketplaceSkeleton />
            </div>
          </PhoneFrame>
        </div>
      </div>
    )
  },
  {
    step: '02',
    title: 'Connect & apply',
    description: 'Link your social accounts. Varmply checks eligibility automatically — follower count, engagement, niche match.',
    bg: colors.bento.green.bg, text: 'white', tagBg: 'rgba(255,255,255,0.15)', accent: colors.bento.green.accent,
    customVisual: (
      <div className="mt-8 relative h-[200px] md:h-[250px] w-full flex justify-center overflow-visible pointer-events-none">
        <div className="absolute top-0 flex justify-center" style={{ transform: 'scale(0.85)', transformOrigin: 'top center', width: 320 }}>
          <PhoneFrame screenBg="#FFFFFF">
            <div className="w-full h-[696px] bg-white pt-10">
              <MobileProfileSkeleton />
            </div>
          </PhoneFrame>
        </div>
      </div>
    )
  },
  {
    step: '03',
    title: 'Submit your content',
    description: 'Post your content, submit the link in Varmply. Attach screenshots and notes. All tracked in one place.',
    bg: colors.bento.amber.bg, text: 'white', tagBg: 'rgba(255,255,255,0.15)', accent: colors.bento.amber.accent,
    customVisual: (
      <div className="mt-8 relative h-[200px] md:h-[250px] w-full flex justify-center overflow-visible pointer-events-none">
        <div className="absolute top-0 flex justify-center" style={{ transform: 'scale(0.85)', transformOrigin: 'top center', width: 320 }}>
          <PhoneFrame screenBg="#FFFFFF">
            <div className="w-full h-[696px] bg-white pt-10">
              <MobileSubmitSkeleton />
            </div>
          </PhoneFrame>
        </div>
      </div>
    )
  },
  {
    step: '04',
    title: 'Earn after validation',
    description: 'Once your submission meets campaign criteria, funds release from escrow to your wallet. Withdraw anytime.',
    bg: '#0F0A2E', text: 'white', tagBg: 'rgba(255,255,255,0.1)', accent: 'white',
    customVisual: (
      <div className="mt-8 relative h-[200px] md:h-[250px] w-full flex justify-center overflow-visible pointer-events-none">
        <div className="absolute top-0 flex justify-center" style={{ transform: 'scale(0.85)', transformOrigin: 'top center', width: 320 }}>
          <PhoneFrame screenBg="#FFFFFF">
            <div className="w-full h-[696px] bg-white pt-10">
              <MobileWalletSkeleton />
            </div>
          </PhoneFrame>
        </div>
      </div>
    )
  },
];

const faqItems = [
  { question: 'How do I know if I qualify for a campaign?', answer: "Varmply checks your profile against each campaign's eligibility rules automatically. You'll see a clear Eligible or Not Eligible status before you apply — no guessing." },
  { question: 'When do I get paid?', answer: "Payments are released from escrow after your submission is validated — typically 24–72 hours. Funds land in your Varmply wallet immediately and can be withdrawn anytime." },
  { question: 'What counts as a valid submission?', answer: "Each campaign defines its own requirements (tagging the brand, hashtags, minimum video length). Validation is automated. The campaign brief shows exactly what's needed upfront." },
  { question: 'Can I join multiple campaigns at once?', answer: "Yes — as many as you qualify for simultaneously. Some campaigns have exclusivity clauses, which are always disclosed upfront." },
  { question: 'What platforms are supported?', answer: 'Instagram, TikTok, YouTube, and Twitter. Each campaign specifies which platforms count.' },
  { question: 'Is there a fee for creators?', answer: 'Varmply is free for creators. You keep 100% of your campaign earnings. We charge sponsors, not creators.' },
];

import CreatorBalloons3D from '@/components/CreatorBalloons3D';

export default function CreatorsPage() {
  return (
    <div className="bg-white overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden cursor-none" style={{ minHeight: '100dvh', background: colors.bento.green.bg }}>
        <LiquidGlass width={140} height={140} borderRadius={70} blur={2} tintOpacity={0.15} />
        <CreatorBalloons3D />
        {/* Subtle grid pattern for creators */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center justify-center min-h-[90dvh] pt-32 pb-20">

            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-center">
              <motion.span variants={fadeUp} className="tag mb-6 inline-flex shadow-sm" style={{ color: 'white', background: 'rgba(255,255,255,0.15)' }}>
                For Creators
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="font-extrabold text-white mb-6"
                style={{ fontSize: 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.08, letterSpacing: '-0.02em' }}
              >
                Structure your campaigns.<br />
                <span style={{ color: 'var(--money-green-bg)' }}>Guarantee your payouts.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-xl leading-relaxed mb-10"
                style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '640px' }}
              >
                Stop waiting on DMs and spreadsheets. Link your accounts, browse transparent briefs, and withdraw your earnings the moment your content is validated.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button variant="on-dark" icon={<ArrowRight size={15} />} size="lg">Create Creator Account</Button>
                <Button variant="on-dark-ghost" size="lg">Browse Campaigns</Button>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
                {[
                  { label: 'Guaranteed payouts' },
                  { label: 'No scattered DMs' },
                  { label: 'Top-tier brands' },
                ].map((b, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full text-white"
                    style={{ background: 'rgba(255,255,255,0.15)' }}
                  >
                    <CheckCircle size={14} style={{ color: 'var(--money-green-bg)' }} /> {b.label}
                  </span>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. TICKER SECTION */}
      <div className="overflow-hidden py-4" style={{ background: 'var(--bg-dark)', borderTop: '1px solid var(--border-dark-subtle)' }}>
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6">
              <span className="text-white/80 text-sm font-medium">{item.handle}</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>{item.platform}</span>
              <span className="text-[var(--status-green)] text-xs font-semibold">{item.stat}</span>
              <span className="text-white/15 mx-2">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. HOW IT WORKS (BENTO GRID) */}
      <section className="py-24" style={{ background: 'var(--bg-subtle)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} className="mb-14 text-center">
            <motion.div variants={fadeUp}><SectionLabel>Process</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-bold text-[var(--text-primary)]" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
              How it works for creators
            </motion.h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {processSteps.map((s, i) => (
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

      {/* 4. CREATOR MEDIA GRID / COMMUNITY */}
      <section className="py-24" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} className="mb-12">
            <motion.div variants={fadeUp}><SectionLabel surface="dark">Community</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="text-white font-bold mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
              Join creators already earning.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[var(--text-on-dark-muted)] text-lg">
              Real creators, real payouts, structured campaigns.
            </motion.p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { imageSrc: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80', caption: '@dami.creates', subcaption: '₦140K earned · TikTok', chips: [{ label: '120K followers', position: 'top-left' as const, variant: 'dark' as const }] },
              { imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', caption: '@chuka.tv', subcaption: '₦95K earned · Instagram', chips: [{ label: '88K followers', position: 'top-left' as const, variant: 'dark' as const }] },
              { imageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80', caption: '@amara.creates', subcaption: '₦85K earned · YouTube', chips: [{ label: '54K followers', position: 'top-left' as const, variant: 'dark' as const }] },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <VideoCard {...item} aspectRatio="4/5" surface="dark" showGradient hoverable />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. WALLET & EARNINGS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={tiltIn} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            <Card variant="dark" className="p-0 overflow-hidden flex flex-col rounded-[32px] min-h-[400px] relative" style={{ background: '#00A050', boxShadow: '0 16px 48px rgba(0,160,80,0.12), 0 4px 16px rgba(0,160,80,0.07)', border: 'none' }}>
              <div className="flex flex-col lg:flex-row relative z-10 w-full h-full min-h-[400px]">
                {/* Left Text Box */}
                <div className="p-10 lg:p-12 flex-1 flex flex-col justify-center min-h-[400px] z-20">
                  <SectionLabel surface="dark" className="bg-white/20 text-white mb-6 w-max">WALLET & EARNINGS</SectionLabel>
                  <h2 className="text-white font-bold tracking-tight mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1 }}>
                    Your earnings, always transparent.
                  </h2>
                  <p className="text-[var(--text-on-dark-muted)] text-base leading-relaxed max-w-sm">
                    Every naira tracked & timestamped. No more waiting on spreadsheets or chasing sponsors.
                  </p>
                </div>

                {/* Right Overflowing UI Frame */}
                <div className="lg:w-1/2 relative w-full h-[220px] lg:h-auto">
                  <div className="absolute left-4 lg:left-0 top-0 lg:top-[60px] w-[800px] rounded-tl-[20px] shadow-2xl border-t border-l border-white/20 flex flex-col overflow-hidden bg-[#FAFAFA]" style={{ height: '600px' }}>
                    <BrowserChrome url="app.varmply.com/wallet" />
                    <div className="flex-1 w-full bg-[#FAFAFA]">
                      <WalletMockup />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 6. WHY CREATORS CHOOSE VARMPLY (BENTO) */}
      <section className="py-24" style={{ background: 'var(--bg-subtle)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading label="Why Varmply" headline="Built around accountability" sub="No vague requirements. No missing payouts. It's built to give creators peace of mind." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {[
              { title: 'Clear rules upfront', desc: "Every campaign shows exactly what's required before you commit.", bg: colors.bento.purple.bg, text: 'white', icon: <Zap size={20} color="white" /> },
              { title: 'Verified payouts', desc: "Sponsor money is locked in escrow before campaigns go live.", bg: colors.bento.green.bg, text: 'white', icon: <CheckCircle size={20} color="white" /> },
              { title: 'One place for all', desc: 'Browse, apply, submit, and get paid without switching tools.', bg: 'white', text: 'var(--text-primary)', icon: <ArrowRight size={20} color="var(--accent)" /> },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card hoverable className="h-full flex flex-col p-8 rounded-[var(--radius-xl)]" style={{ background: item.bg, border: item.bg === 'white' ? '1px solid var(--border-subtle)' : 'none' }}>
                  <div className="mb-6 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: item.bg === 'white' ? 'var(--accent-glow)' : 'rgba(255,255,255,0.15)' }}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3" style={{ color: item.text }}>{item.title}</h3>
                  <p className="text-base leading-relaxed" style={{ color: item.text, opacity: item.bg === 'white' ? 1 : 0.8 }}>{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading label="FAQ" headline="Creator questions, answered." />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOptions} transition={{ duration: 0.5 }} className="mt-12">
            <FAQAccordion items={faqItems} />
          </motion.div>
        </div>
      </section>

    </div>
  );
}
