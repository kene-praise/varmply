'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, BarChart2, Star, Zap } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOptions } from '@/lib/motion';
import CampaignCard from '@/components/CampaignCard';
import FAQAccordion from '@/components/FAQAccordion';
import WalletMockup from '@/components/UIComponents/WalletMockup';
import AnalyticsMockup from '@/components/UIComponents/AnalyticsMockup';
import CTABanner from '@/components/CTABanner';

const campaigns = [
  {
    brand: 'Paystack',
    category: 'Fintech · Instagram',
    amount: '₦25,000',
    status: 'eligible' as const,
    deadline: '12 days left',
    applicants: 34,
    description: 'Create a 60-second Instagram Reel showcasing how Paystack simplifies payments for small business owners.',
  },
  {
    brand: 'PiggyVest',
    category: 'Savings · Twitter + IG',
    amount: '₦18,000',
    status: 'eligible' as const,
    deadline: '7 days left',
    applicants: 58,
    description: 'Share your savings journey with PiggyVest. Authentic, personal content preferred. Multi-platform bonus.',
  },
  {
    brand: 'Cowrywise',
    category: 'Investment · YouTube',
    amount: '₦12,000',
    status: 'joined' as const,
    deadline: '3 days left',
    applicants: 72,
    description: 'Explain investment basics through a YouTube Short. Focus on beginner audiences new to investing.',
  },
  {
    brand: 'Flutterwave',
    category: 'Payments · TikTok',
    amount: '₦40,000',
    status: 'not-eligible' as const,
    deadline: '5 days left',
    applicants: 91,
    description: 'High-value TikTok campaign for creators with 50K+ followers in the tech or business niche.',
  },
  {
    brand: 'Carbon',
    category: 'Lending · Instagram',
    amount: '₦35,000',
    status: 'closed' as const,
    deadline: 'Ended',
    applicants: 143,
    description: 'Campaign has ended. Carbon is planning new campaigns for Q2. Check back soon for new opportunities.',
  },
];

const howItWorksSteps = [
  {
    step: '01',
    title: 'Browse the marketplace',
    description:
      'Filter campaigns by niche, platform, payout, and eligibility. Every campaign shows full requirements before you apply — no surprises.',
    icon: BarChart2,
    image: 'right',
  },
  {
    step: '02',
    title: 'Connect & apply',
    description:
      'Link your social accounts. Varmply checks your eligibility automatically — follower count, engagement, niche match. Apply in one click.',
    icon: Users,
    image: 'left',
  },
  {
    step: '03',
    title: 'Submit your content',
    description:
      'Post your content, then submit the link directly in Varmply. Attach screenshots, notes, and relevant data. All tracked in one place.',
    icon: Star,
    image: 'right',
  },
  {
    step: '04',
    title: 'Earn after validation',
    description:
      'Once your submission meets the campaign criteria, funds are released from escrow to your Varmply wallet. Withdraw anytime.',
    icon: Zap,
    image: 'left',
  },
];

const eligibilityFactors = [
  {
    label: 'Follower Count',
    description: 'Each campaign sets a minimum follower threshold. Yours is checked automatically.',
    icon: Users,
    color: '#7C5CFC',
    bg: '#EDE9FF',
  },
  {
    label: 'Niche / Category',
    description: 'Campaigns target specific niches. Tech, finance, lifestyle — match your content, match the brief.',
    icon: BarChart2,
    color: '#16A34A',
    bg: '#F0FDF4',
  },
  {
    label: 'Engagement Rate',
    description: "Some campaigns care more about engagement than reach. High engagement = more campaign access.",
    icon: Star,
    color: '#D97706',
    bg: '#FFFBEB',
  },
  {
    label: 'Platform',
    description: 'Instagram, TikTok, YouTube, Twitter — each campaign specifies which platforms qualify.',
    icon: Zap,
    color: '#DC2626',
    bg: '#FEF2F2',
  },
];

const faqItems = [
  {
    question: 'How do I know if I qualify for a campaign?',
    answer:
      "Varmply checks your profile against each campaign's eligibility rules automatically. When you browse campaigns, you'll see a clear Eligible or Not Eligible status before you apply. No guessing, no wasted time.",
  },
  {
    question: 'When do I get paid?',
    answer:
      "Payments are released from escrow after your submission is validated against the campaign requirements. This typically takes 24-72 hours after submission. Funds land in your Varmply wallet immediately and can be withdrawn at any time.",
  },
  {
    question: 'What counts as a valid submission?',
    answer:
      "Each campaign defines its requirements (e.g., tagging the brand, using specific hashtags, minimum video length). Your submission is validated against these requirements automatically. The campaign brief shows exactly what's needed before you apply.",
  },
  {
    question: 'Can I join multiple campaigns at once?',
    answer:
      "Yes. You can join as many campaigns as you qualify for simultaneously, as long as they don't conflict (some campaigns have exclusivity clauses, which are always disclosed upfront).",
  },
  {
    question: 'What platforms are supported?',
    answer:
      'Currently, Varmply supports Instagram, TikTok, YouTube, and Twitter. More platforms are being added. Each campaign specifies which platforms count for submissions.',
  },
  {
    question: 'Is there a fee for creators?',
    answer:
      'Varmply is free for creators. You keep 100% of your campaign earnings. We charge sponsors a platform fee, not creators.',
  },
];

export default function CreatorsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F7F7F9] py-24">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(124,92,252,0.1) 0%, transparent 70%)',
            filter: 'blur(50px)',
            transform: 'translate(20%, -20%)',
          }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                variants={fadeUp}
                className="tag mb-4 inline-flex"
                style={{ color: '#7C5CFC', background: '#EDE9FF' }}
              >
                For Creators
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="mb-5 text-[#0F0F1A] font-extrabold leading-[1.12]"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800 }}
              >
                Structured paid campaigns for{' '}
                <span className="gradient-text">serious creators.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[#4A4A6A] text-lg leading-relaxed mb-8">
                Stop chasing brands in DMs. Browse verified campaigns, apply with one click, submit your content, and get paid — automatically.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                <Link href="#" className="btn-primary">
                  Create Creator Account <ArrowRight size={16} />
                </Link>
                <Link href="#marketplace" className="btn-ghost">
                  Browse Campaigns
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                {[
                  { label: 'Clear eligibility upfront', color: '#16A34A', bg: '#F0FDF4' },
                  { label: 'Escrow-protected pay', color: '#7C5CFC', bg: '#EDE9FF' },
                  { label: 'No manual reporting', color: '#D97706', bg: '#FFFBEB' },
                ].map((b, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full"
                    style={{ color: b.color, background: b.bg }}
                  >
                    <CheckCircle size={13} /> {b.label}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Campaign detail mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div
                  className="bg-white rounded-2xl overflow-hidden"
                  style={{ border: '1px solid #E4E4EC', width: '340px' }}
                >
                  <div className="px-4 py-3 border-b border-[#E4E4EC] flex items-center gap-2 bg-[#F7F7F9]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    <span className="ml-auto text-xs text-[#8888AA]">Campaign Details</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#EDE9FF] flex items-center justify-center">
                          <span className="text-sm font-bold text-[#7C5CFC]">P</span>
                        </div>
                        <div>
                          <p className="font-bold text-[#0F0F1A]">Paystack</p>
                          <p className="text-xs text-[#8888AA]">Fintech · Nigeria</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-[#F0FDF4] text-[#16A34A]">
                        Eligible ✓
                      </span>
                    </div>

                    <p className="text-2xl font-bold text-[#0F0F1A] mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      ₦25,000
                    </p>
                    <p className="text-xs text-[#8888AA] mb-3">per creator · 20 slots open</p>

                    <p className="text-sm text-[#4A4A6A] mb-3 leading-relaxed">
                      Create a 60-second Reel showing how Paystack simplifies business payments.
                    </p>

                    <div className="bg-[#F7F7F9] rounded-xl p-3 mb-3">
                      <p className="text-[10px] font-semibold text-[#8888AA] uppercase tracking-wider mb-2">Requirements</p>
                      {[
                        { text: 'Min. 5,000 followers', done: true },
                        { text: 'Finance or business niche', done: true },
                        { text: 'Tag @Paystack', done: true },
                        { text: 'Use #Paystack2025', done: true },
                        { text: 'Min. 30 second video', done: false },
                      ].map((r, i) => (
                        <div key={i} className="flex items-center gap-2 mb-1.5 last:mb-0">
                          <CheckCircle
                            size={11}
                            style={{ color: r.done ? '#16A34A' : '#D1D1DE' }}
                          />
                          <span className="text-[11px]" style={{ color: r.done ? '#4A4A6A' : '#8888AA' }}>
                            {r.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button className="btn-primary w-full justify-center text-sm !py-2.5">
                      Apply Now →
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campaign Marketplace Preview */}
      <section id="marketplace" className="py-24 bg-[#F7F7F9]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="tag mb-4" style={{ color: '#7C5CFC', background: '#EDE9FF', margin: '0 auto 16px' }}>
              Marketplace
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[#0F0F1A] font-bold mb-4"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Real campaigns. Real payouts.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#4A4A6A] text-lg max-w-2xl mx-auto">
              Browse verified campaigns below. Each one shows your eligibility status before you even click.
            </motion.p>
          </motion.div>

          {/* Campaign grid */}
          <div className="relative">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {campaigns.map((c, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <CampaignCard {...c} />
                </motion.div>
              ))}
            </motion.div>

            {/* Fade-out + CTA overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 h-48 flex items-end justify-center pb-6"
              style={{
                background: 'linear-gradient(to bottom, transparent, #F7F7F9)',
              }}
            >
              <Link href="#" className="btn-primary">
                Join to see all campaigns <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#F7F7F9] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="tag mb-4" style={{ color: '#7C5CFC', background: '#EDE9FF', margin: '0 auto 16px' }}>
              Process
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[#0F0F1A] font-bold mb-4"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              How it works for creators
            </motion.h2>
          </motion.div>

          <div className="flex flex-col gap-16">
            {howItWorksSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  step.image === 'left' ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Visual */}
                <motion.div
                  variants={step.image === 'right' ? fadeRight : fadeLeft}
                  className="bg-[#F7F7F9] rounded-2xl p-8 flex items-center justify-center border border-[#E4E4EC]"
                  style={{ minHeight: '200px' }}
                >
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{ background: '#EDE9FF' }}
                    >
                      <step.icon size={28} className="text-[#7C5CFC]" />
                    </div>
                    <p className="text-5xl font-extrabold" style={{ fontFamily: 'JetBrains Mono', color: 'rgba(124,92,252,0.15)' }}>
                      {step.step}
                    </p>
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div variants={step.image === 'right' ? fadeLeft : fadeRight}>
                  <div
                    className="text-xs font-bold mb-3 font-mono"
                    style={{ color: '#7C5CFC', fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    Step {step.step}
                  </div>
                  <h3
                    className="text-[#0F0F1A] font-bold mb-4"
                    style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#4A4A6A] text-lg leading-relaxed">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Explained */}
      <section id="eligibility" className="py-24 bg-[#F7F7F9]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="tag mb-4" style={{ color: '#7C5CFC', background: '#EDE9FF', margin: '0 auto 16px' }}>
              Eligibility
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[#0F0F1A] font-bold mb-4"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              What determines your eligibility?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#4A4A6A] text-lg max-w-2xl mx-auto">
              Each campaign defines its own rules. Varmply checks all of these automatically — no manual applications needed.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {eligibilityFactors.map((factor, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="card-hover bg-white rounded-2xl p-6 border border-[#E4E4EC] flex items-start gap-5"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: factor.bg }}
                >
                  <factor.icon size={22} style={{ color: factor.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F0F1A] mb-2">{factor.label}</h3>
                  <p className="text-[#4A4A6A]">{factor.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wallet & Earnings */}
      <section id="wallet" className="bg-[#F7F7F9] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Wallet mockup */}
            <motion.div variants={fadeRight} className="flex justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <WalletMockup />
              </motion.div>
            </motion.div>

            {/* Earnings explanation */}
            <motion.div variants={fadeLeft}>
              <span className="tag mb-4 inline-flex" style={{ color: '#16A34A', background: '#F0FDF4' }}>
                Wallet & Earnings
              </span>
              <h2
                className="text-[#0F0F1A] font-bold mb-4"
                style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.2 }}
              >
                Your earnings, always transparent.
              </h2>
              <p className="text-[#4A4A6A] text-lg leading-relaxed mb-8">
                Every naira you earn is tracked, timestamped, and accessible. No waiting for a spreadsheet, no chasing payments.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  {
                    status: 'Tracking',
                    color: '#7C5CFC',
                    bg: '#EDE9FF',
                    desc: 'Campaign is live. Your metrics are being captured in real time.',
                  },
                  {
                    status: 'Pending',
                    color: '#D97706',
                    bg: '#FFFBEB',
                    desc: 'Submission received, currently being validated against campaign requirements.',
                  },
                  {
                    status: 'Completed',
                    color: '#16A34A',
                    bg: '#F0FDF4',
                    desc: 'Validated and approved. Funds released from escrow to your wallet.',
                  },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-[#E4E4EC] bg-[#F7F7F9]">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{ color: s.color, background: s.bg }}
                    >
                      {s.status}
                    </span>
                    <p className="text-[#4A4A6A] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Preview */}
      <section id="analytics" className="py-24 bg-[#F7F7F9]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeRight}>
              <span className="tag mb-4 inline-flex" style={{ color: '#D97706', background: '#FFFBEB' }}>
                Analytics
              </span>
              <h2
                className="text-[#0F0F1A] font-bold mb-4"
                style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.2 }}
              >
                Your performance. Automatically tracked.
              </h2>
              <p className="text-[#4A4A6A] text-lg leading-relaxed mb-6">
                No manual screenshots. No copying numbers from Instagram. Varmply captures your metrics directly and reports them to sponsors — while keeping you fully informed.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Engagement rate per campaign',
                  'Reach and impression tracking',
                  'Campaign-vs-campaign comparison',
                  'Historical earnings breakdown',
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle size={16} className="text-[#D97706] flex-shrink-0" />
                    <span className="text-[#4A4A6A]">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeLeft} className="flex justify-center lg:justify-end">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <AnalyticsMockup />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Creators Use Varmply */}
      <section className="bg-[#F7F7F9] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className="text-[#0F0F1A] font-bold mb-4"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Why creators choose Varmply
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Clear rules upfront',
                description: "Every campaign shows you exactly what's required before you commit. No vague briefs, no last-minute changes.",
                icon: CheckCircle,
                color: '#7C5CFC',
                bg: '#EDE9FF',
              },
              {
                title: 'Verified payouts',
                description: "Sponsor money is locked in escrow before campaigns go live. You'll always get paid for completed work.",
                icon: Star,
                color: '#16A34A',
                bg: '#F0FDF4',
              },
              {
                title: 'Structured participation',
                description: 'One platform for browsing, applying, submitting, and getting paid. No more managing 5 different tools.',
                icon: BarChart2,
                color: '#D97706',
                bg: '#FFFBEB',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="card-hover bg-white rounded-2xl p-7 border border-[#E4E4EC]"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: item.bg }}
                >
                  <item.icon size={22} style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#0F0F1A] mb-3">{item.title}</h3>
                <p className="text-[#4A4A6A] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#F7F7F9]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="tag mb-4" style={{ color: '#7C5CFC', background: '#EDE9FF', margin: '0 auto 16px' }}>
              FAQ
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[#0F0F1A] font-bold mb-4"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Creator questions, answered.
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.5 }}
          >
            <FAQAccordion items={faqItems} />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Ready to turn your audience into structured income?"
        subtext="Join thousands of Nigerian creators already earning on Varmply. Free to sign up. Paid to perform."
        cta1={{ label: 'Create Creator Account →', href: '#' }}
        cta2={{ label: 'Browse Campaigns', href: '#marketplace' }}
      />
    </div>
  );
}
