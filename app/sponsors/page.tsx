'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Lock, RotateCcw, BarChart2, Users, Shield, Zap } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOptions } from '@/lib/motion';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';
import CampaignBuilderMockup from '@/components/UIComponents/CampaignBuilderMockup';
import SponsorAnalyticsMockup from '@/components/UIComponents/SponsorAnalyticsMockup';

const howItWorksSteps = [
  {
    step: '01',
    title: 'Define your campaign rules',
    description:
      "Set your brief, eligibility requirements, deliverables, payout per creator, and deadline. Everything is crystal clear before any creator applies.",
    icon: BarChart2,
    image: 'right',
  },
  {
    step: '02',
    title: 'Activate with escrow',
    description:
      "Lock your campaign budget in escrow. Creators can see that funds exist before they apply. No budget = no campaign. Trust is built in from day one.",
    icon: Lock,
    image: 'left',
  },
  {
    step: '03',
    title: 'Monitor in real time',
    description:
      'Watch submissions come in. Track reach, engagement, and impressions per creator as they happen. Every metric is validated automatically.',
    icon: BarChart2,
    image: 'right',
  },
  {
    step: '04',
    title: 'Pay for verified results',
    description:
      'Funds are released only when performance is confirmed. Unused budget is returned automatically. You only ever pay for what actually happened.',
    icon: CheckCircle,
    image: 'left',
  },
];

const faqItems = [
  {
    question: 'How does escrow protect my budget?',
    answer:
      "Your campaign budget is locked in escrow when you activate a campaign. It can't be touched until performance is confirmed. If a creator fails to meet requirements, their portion isn't released. Unused funds are returned automatically after the campaign closes.",
  },
  {
    question: 'How are creators verified as eligible?',
    answer:
      'Varmply checks every creator against your campaign criteria automatically — follower count, engagement rate, niche, and platform. Only creators who meet your rules can apply. No manual review needed on your end.',
  },
  {
    question: 'What metrics are tracked?',
    answer:
      "Reach, impressions, engagement (likes, comments, shares), and engagement rate are tracked per creator per campaign. You get a full breakdown in your analytics dashboard, updated in real time.",
  },
  {
    question: 'Can I set different payouts for different creators?',
    answer:
      "Yes. You can set a flat payout per creator, or define tiers based on follower count, engagement rate, or niche. The platform calculates payouts automatically based on the rules you set.",
  },
  {
    question: "What happens if a creator doesn't deliver?",
    answer:
      "If a creator misses the deadline or fails to meet requirements, their portion of the escrow is not released. You receive a notification and the unused funds are queued for return. There's no manual dispute process — the system handles it.",
  },
];

const performanceCampaigns = [
  {
    name: 'Paystack Q1 Launch',
    status: 'Active',
    statusColor: '#16A34A',
    statusBg: '#F0FDF4',
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
    statusColor: '#7C3BED',
    statusBg: '#EDE9FF',
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
    statusColor: '#16A34A',
    statusBg: '#F0FDF4',
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
    description:
      "Reach, impressions, engagement rate — all captured without relying on creator self-reporting. Data you can actually trust.",
    icon: BarChart2,
  },
  {
    title: 'Per-creator breakdown.',
    description:
      'See exactly how each creator performed. Who drove the most reach? Who had the best engagement? Make data-driven decisions for your next campaign.',
    icon: Users,
  },
  {
    title: 'Full budget visibility.',
    description:
      'Track escrow balance, released funds, and projected spend in real time. No financial surprises, ever.',
    icon: Shield,
  },
];

export default function SponsorsPage() {
  const analyticsSectionRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const activeAnalyticsFeature = analyticsFeatures[activeFeature];
  const AnalyticsFeatureIcon = activeAnalyticsFeature.icon;

  useEffect(() => {
    let cancelled = false;
    let pinTrigger: { kill: (reset?: boolean) => void } | null = null;

    (async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (cancelled) return;

      const section = analyticsSectionRef.current;
      if (!section) return;

      const features = analyticsFeatures.length;

      pinTrigger = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${features * 100}%`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const step = Math.min(Math.floor(self.progress * features), features - 1);
          setActiveFeature(step);
        },
      });

      if (cancelled) {
        pinTrigger.kill();
        pinTrigger = null;
      }
    })();

    return () => {
      cancelled = true;
      pinTrigger?.kill();
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F7F7F9] py-24">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(124,59,237,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.span variants={fadeUp} className="tag mb-4 inline-flex" style={{ color: '#D97706', background: '#FFFBEB' }}>
                For Sponsors
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="mb-5 text-[#0F0F1A] font-extrabold leading-[1.12]"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800 }}
              >
                Creator campaigns with{' '}
                <span className="gradient-text">full accountability.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[#4A4A6A] text-lg leading-relaxed mb-8">
                Set your rules, lock your budget, and watch verified results come in. Varmply handles eligibility, submission validation, and payouts — automatically.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                <Link href="#" className="btn-primary">
                  Launch a Campaign <ArrowRight size={16} />
                </Link>
                <Link href="#how-it-works" className="btn-ghost">
                  See How It Works
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                {[
                  { label: 'Escrow-protected budget', color: '#7C3BED', bg: '#EDE9FF' },
                  { label: 'Auto-validated submissions', color: '#16A34A', bg: '#F0FDF4' },
                  { label: 'Pay for results only', color: '#D97706', bg: '#FFFBEB' },
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

            {/* Campaign builder mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <CampaignBuilderMockup />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-[#F7F7F9]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="tag mb-4" style={{ color: '#7C3BED', background: '#EDE9FF', margin: '0 auto 16px' }}>
              Process
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[#0F0F1A] font-bold mb-4"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              How it works for sponsors
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
                <motion.div
                  variants={step.image === 'right' ? fadeRight : fadeLeft}
                  className="flex min-h-[200px] items-center justify-center rounded-2xl border border-[#E4E4EC] bg-white p-8"
                >
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{ background: '#EDE9FF' }}
                    >
                      <step.icon size={28} className="text-[#7C3BED]" />
                    </div>
                    <p className="text-5xl font-extrabold" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(124,59,237,0.15)' }}>
                      {step.step}
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={step.image === 'right' ? fadeLeft : fadeRight}>
                  <div className="text-xs font-bold mb-3" style={{ color: '#7C3BED', fontFamily: 'Inter, sans-serif' }}>
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

      {/* Analytics Pinned Section */}
      <section
        id="analytics"
        ref={analyticsSectionRef}
        className="overflow-hidden bg-[#F7F7F9]"
        style={{ height: '100vh' }}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left: always-visible analytics dashboard */}
            <div className="flex justify-center lg:justify-start">
              <div className="scale-90 origin-left">
                <SponsorAnalyticsMockup />
              </div>
            </div>

            {/* Right: feature callouts that reveal one by one */}
            <div>
              <p className="tag mb-6 inline-flex" style={{ color: '#7C3BED', background: '#EDE9FF' }}>
                Analytics Dashboard
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: '#EDE9FF' }}
                    >
                      {AnalyticsFeatureIcon && (
                        <AnalyticsFeatureIcon size={22} className="text-[#7C3BED]" />
                      )}
                    </div>
                    <h2
                      className="text-[#0F0F1A] font-bold"
                      style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.2 }}
                    >
                      {activeAnalyticsFeature.title}
                    </h2>
                  </div>
                  <p className="text-[#4A4A6A] text-lg leading-relaxed mb-8">
                    {activeAnalyticsFeature.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Feature step indicators */}
              <div className="flex gap-3">
                {analyticsFeatures.map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === activeFeature ? '48px' : '24px',
                      background: i === activeFeature ? '#7C3BED' : '#E4E4EC',
                    }}
                  />
                ))}
              </div>
              <p className="text-xs text-[#8888AA] mt-2">Scroll to explore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Escrow Explainer */}
      <section id="escrow" className="py-24 bg-[#F7F7F9]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="tag mb-4" style={{ color: '#7C3BED', background: '#EDE9FF', margin: '0 auto 16px' }}>
              Escrow System
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[#0F0F1A] font-bold mb-4"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Your budget is always protected.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#4A4A6A] text-lg max-w-2xl mx-auto">
              Varmply's escrow system ensures you only pay for confirmed, validated results — nothing more.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {[
              {
                icon: Lock,
                title: 'Locked Upfront',
                description: 'Budget is placed in escrow when your campaign activates. It cannot be released until performance is verified.',
                color: '#7C3BED',
                bg: '#EDE9FF',
              },
              {
                icon: CheckCircle,
                title: 'Released on Results',
                description: 'When a creator meets all requirements, their portion is released automatically. No manual approval needed.',
                color: '#16A34A',
                bg: '#F0FDF4',
              },
              {
                icon: RotateCcw,
                title: 'Unused Funds Returned',
                description: "Slots that go unfilled, or creators who don't deliver, result in automatic refunds to your account.",
                color: '#D97706',
                bg: '#FFFBEB',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="card-hover bg-white rounded-2xl p-7 border border-[#E4E4EC] text-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: item.bg }}
                >
                  <item.icon size={26} style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#0F0F1A] mb-3">{item.title}</h3>
                <p className="text-[#4A4A6A] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Flow diagram */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="rounded-2xl border border-[#E4E4EC] bg-white p-8"
          >
            <motion.p variants={fadeUp} className="text-center text-sm font-semibold text-[#8888AA] uppercase tracking-wider mb-8">
              Escrow Flow
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center justify-center gap-3">
              {[
                { label: 'Sponsor Wallet', color: '#7C3BED', bg: '#EDE9FF' },
                { label: 'Escrow', color: '#D97706', bg: '#FFFBEB' },
                { label: 'Validation', color: '#8888AA', bg: '#F0F0F4' },
                { label: 'Creator Wallet', color: '#16A34A', bg: '#F0FDF4' },
              ].map((node, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="min-w-[120px] rounded-full px-4 py-3 text-center text-sm font-semibold"
                    style={{ background: node.bg, color: node.color, border: `1.5px solid ${node.color}30` }}
                  >
                    {node.label}
                  </div>
                  {i < 3 && (
                    <div className="flex items-center gap-1 text-[#D1D1DE]">
                      <div className="h-px w-4 bg-[#D1D1DE] hidden md:block" />
                      <ArrowRight size={16} className="text-[#D1D1DE]" />
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Refund branch */}
            <motion.div variants={fadeUp} className="flex justify-center mt-4">
              <div className="flex flex-col items-center gap-2">
                <div className="h-6 w-px bg-[#D1D1DE]" style={{ marginLeft: '0' }} />
                <div className="flex items-center gap-2">
                  <div className="h-px w-8 bg-[#D1D1DE]" />
                  <div
                    className="rounded-full px-4 py-2 text-xs font-semibold"
                    style={{ background: '#FEF2F2', color: '#DC2626', border: '1px solid #DC262620' }}
                  >
                    Refund if unused
                  </div>
                </div>
                <p className="text-xs text-[#8888AA] mt-1">Returned automatically after campaign closes</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Campaign Performance Cards */}
      <section id="performance" className="bg-[#F7F7F9] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="tag mb-4" style={{ color: '#7C3BED', background: '#EDE9FF', margin: '0 auto 16px' }}>
              Live Performance
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[#0F0F1A] font-bold mb-4"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Real campaigns. Real results.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {performanceCampaigns.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="card-hover bg-white rounded-2xl p-6 border border-[#E4E4EC]"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#0F0F1A] text-sm">{c.name}</h3>
                  <span
                    className="text-[10px] font-semibold px-2 py-1 rounded-full"
                    style={{ color: c.statusColor, background: c.statusBg }}
                  >
                    {c.status}
                  </span>
                </div>

                {/* Budget bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-[#8888AA] mb-1.5">
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>{c.spent}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>{c.budget}</span>
                  </div>
                  <div className="bg-[#E4E4EC] rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${c.progress}%`,
                        background: c.status === 'Completed'
                          ? 'linear-gradient(90deg, #7C3BED, #A78BFA)'
                          : 'linear-gradient(90deg, #16A34A, #4ADE80)',
                      }}
                    />
                  </div>
                  <p className="text-[10px] text-[#8888AA] mt-1">{c.progress}% of budget utilized</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Creators', value: c.creators.toString() },
                    { label: 'Reach', value: c.reach },
                    { label: 'Eng. Rate', value: c.engRate },
                  ].map((s, j) => (
                    <div key={j} className="bg-[#F7F7F9] rounded-lg p-2 text-center">
                      <p className="text-sm font-bold text-[#0F0F1A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {s.value}
                      </p>
                      <p className="text-[9px] text-[#8888AA] mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
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
            <motion.p variants={fadeUp} className="tag mb-4" style={{ color: '#7C3BED', background: '#EDE9FF', margin: '0 auto 16px' }}>
              FAQ
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[#0F0F1A] font-bold mb-4"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Sponsor questions, answered.
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
        headline="Ready to run campaigns that actually perform?"
        subtext="Set your rules, protect your budget, and only pay for verified results. Varmply handles the rest."
        cta1={{ label: 'Launch a Campaign →', href: '#' }}
        cta2={{ label: 'Learn How It Works', href: '#how-it-works' }}
      />
    </div>
  );
}
