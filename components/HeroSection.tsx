'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, CheckCircle, Zap, Sparkles } from 'lucide-react';

const HeroBackground3D = dynamic(() => import('./HeroBackground3D'), { ssr: false });

/* ─────────────────────────────────────────
   Character-split headline — Jeton style
──────────────────────────────────────────*/
function SplitLine({
  text,
  delay = 0,
  className = '',
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`block ${className}`} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', lineHeight: 1.08 }}
        >
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.026,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ─────────────────────────────────────────
   Floating product moment cards — PocketApp style
──────────────────────────────────────────*/
function FloatCard({
  delay,
  floatOffset = 0,
  children,
}: {
  delay: number;
  floatOffset?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="rounded-2xl px-4 py-3.5 text-left flex-shrink-0"
      style={{
        background: 'rgba(255,255,255,0.10)',
        border: '1px solid rgba(255,255,255,0.18)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
      }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: [24, floatOffset, floatOffset + 6, floatOffset] }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: {
          times: [0, 0.2, 0.6, 1],
          duration: 5 + floatOffset * 0.3,
          delay,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Hero
──────────────────────────────────────────*/
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[100dvh] flex items-center -mt-16">

      {/* ── Three.js 3D background ── */}
      <HeroBackground3D />

      {/* ── Radial vignette — opens around centre text ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 38% 50%, transparent 25%, rgba(10,2,40,0.45) 100%)',
        }}
      />

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(10,2,40,0.6))' }}
      />

      {/* ── Content — centred column ── */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center justify-center min-h-[100dvh] py-32">

          {/* Live pill */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-semibold text-white tracking-wide">
              Live Platform — Open Signups
            </span>
          </motion.div>

          {/* Headline */}
          <h1
            className="text-white font-extrabold tracking-tight mb-7"
            style={{ fontSize: 'clamp(46px, 6vw, 88px)', lineHeight: 1.05 }}
          >
            <SplitLine text="Campaigns that" delay={0.55} />
            <SplitLine text="actually perform." delay={0.72} />
          </h1>

          {/* Subtext */}
          <motion.p
            className="leading-relaxed mb-10 mx-auto"
            style={{
              fontSize: 'clamp(16px, 1.3vw, 19px)',
              maxWidth: '500px',
              color: 'rgba(255,255,255,0.68)',
            }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.45, ease: [0.16, 1, 0.3, 1] }}
          >
            Structured campaigns, verified metrics, and escrow payouts —
            connecting creators and sponsors across Nigeria.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/creators"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'white',
                color: '#7C3BED',
                boxShadow: '0 4px 24px rgba(0,0,0,0.22)',
              }}
            >
              Join as Creator <ArrowRight size={15} />
            </Link>
            <Link
              href="/sponsors"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:bg-white/20"
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.28)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              Run a Campaign
            </Link>
          </motion.div>

          {/* ── Floating product moment cards — PocketApp style ── */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 2.1 }}
          >

            {/* Card 1 — live campaign */}
            <FloatCard delay={2.1} floatOffset={-6}>
              <div className="flex items-center gap-1.5 mb-2">
                <Zap size={11} className="text-[#FBBF24]" />
                <span className="text-[10px] font-semibold text-[#FBBF24] uppercase tracking-wider">Campaign live</span>
              </div>
              <p className="text-white text-sm font-semibold leading-tight mb-2">Skincare by Zara</p>
              <div className="w-full h-1 rounded-full bg-white/15 overflow-hidden mb-1.5">
                <div className="h-full rounded-full bg-[#FBBF24]" style={{ width: '127%', maxWidth: '100%' }} />
              </div>
              <p className="text-white/50 text-[11px]">₦450K goal · <span className="text-white/80">127% funded</span></p>
            </FloatCard>

            {/* Card 2 — payout sent */}
            <FloatCard delay={2.25} floatOffset={0}>
              <div className="flex items-center gap-1.5 mb-2">
                <CheckCircle size={11} className="text-[#34D399]" />
                <span className="text-[10px] font-semibold text-[#34D399] uppercase tracking-wider">Payout sent</span>
              </div>
              <p className="text-white text-sm font-semibold leading-tight">Amara K.</p>
              <p className="text-white/80 text-sm font-bold mt-0.5">₦85,000</p>
              <p className="text-white/40 text-[11px] mt-1">2 mins ago · escrow released</p>
            </FloatCard>

            {/* Card 3 — new match */}
            <FloatCard delay={2.4} floatOffset={-4}>
              <div className="flex items-center gap-1.5 mb-2">
                <Sparkles size={11} className="text-[#A78BFA]" />
                <span className="text-[10px] font-semibold text-[#A78BFA] uppercase tracking-wider">New match</span>
              </div>
              <p className="text-white text-sm font-semibold leading-tight mb-0.5">TechBrand NG</p>
              <p className="text-white/55 text-[11px]">Tech &amp; Lifestyle</p>
              <p className="text-white/80 text-[11px] font-semibold mt-1">Up to ₦200,000</p>
            </FloatCard>

          </motion.div>

          {/* Trust strip */}
          <motion.div
            className="flex items-center justify-center gap-6 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 2.7 }}
          >
            {[
              { value: '₦2.4M', label: 'distributed' },
              { value: '847+', label: 'active creators' },
              { value: '98%', label: 'on-time payouts' },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-white font-bold text-sm">{value}</span>
                <span className="text-white/45 text-xs">{label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
