'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RoleSelectMockup from './UIComponents/RoleSelectMockup';
import CampaignMockup from './UIComponents/CampaignMockup';
import SubmissionForm from './UIComponents/SubmissionForm';
import MetricsTracker from './UIComponents/MetricsTracker';
import WalletMockup from './UIComponents/WalletMockup';

const steps = [
  {
    number: '01',
    title: 'Create your account',
    description:
      'Sign up as a creator or sponsor in minutes. Choose your role, connect your platforms, and complete your profile to unlock access to campaigns.',
    mockup: RoleSelectMockup,
  },
  {
    number: '02',
    title: 'Campaigns with clear rules',
    description:
      'Browse campaigns with explicit briefs — deliverables, deadlines, eligibility criteria, and payout amounts are all defined upfront. No surprises.',
    mockup: CampaignMockup,
  },
  {
    number: '03',
    title: 'Apply and submit your content',
    description:
      'Once approved, submit your content directly in the platform. Attach links, screenshots, and notes. All validated against campaign requirements.',
    mockup: SubmissionForm,
  },
  {
    number: '04',
    title: 'Performance tracked automatically',
    description:
      'Your reach, engagement, and impressions are captured in real time. No manual reporting. Sponsors see verified metrics, not guesses.',
    mockup: MetricsTracker,
  },
  {
    number: '05',
    title: 'Payouts linked to results',
    description:
      'Once performance is confirmed, funds are released from escrow directly to your wallet. Transparent, fast, and always tied to real outcomes.',
    mockup: WalletMockup,
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let pinTrigger: { kill: (reset?: boolean) => void } | null = null;

    (async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (cancelled) return;

      const section = sectionRef.current;
      const container = containerRef.current;
      if (!section || !container) return;

      const totalSteps = steps.length;

      pinTrigger = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${totalSteps * 100}%`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const step = Math.min(Math.floor(self.progress * totalSteps), totalSteps - 1);
          setActiveStep(step);
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

  const ActiveMockup = steps[activeStep].mockup;

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="overflow-hidden"
      style={{ height: '100vh', background: '#0F0A2E' }}
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div ref={containerRef} className="max-w-6xl mx-auto px-6 h-full flex items-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left: step content */}
          <div className="relative">
            {/* Section label */}
            <div className="tag mb-6" style={{ color: '#C4B5FD', background: 'rgba(124,59,237,0.25)' }}>
              How It Works
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-5xl font-extrabold"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: 'rgba(196,181,253,0.25)',
                    }}
                  >
                    {steps[activeStep].number}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.35)' }}>/ 05</span>
                </div>
                <h2
                  className="font-bold text-white mb-4"
                  style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.2 }}
                >
                  {steps[activeStep].title}
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {steps[activeStep].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div
              className="mt-8 flex items-center justify-start gap-2.5"
              role="list"
              aria-label="Step progress"
            >
              {steps.map((_, i) => (
                <div
                  key={i}
                  role="listitem"
                  aria-current={i === activeStep ? 'step' : undefined}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeStep ? 10 : 8,
                    height: i === activeStep ? 10 : 8,
                    background: i <= activeStep ? '#A78BFA' : 'rgba(255,255,255,0.2)',
                    transform: i === activeStep ? 'scale(1.25)' : 'scale(1)',
                    outline: i === activeStep ? '2px solid rgba(167,139,250,0.4)' : 'none',
                    outlineOffset: 3,
                  }}
                />
              ))}
            </div>

            <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.3)' }}>Scroll to continue</p>
          </div>

          {/* Right: mockup */}
          <div className="flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.95 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <ActiveMockup />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
