'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';
import { PhoneFrame } from '@/components/ui/PhoneFrame';
import HeroPhonePrototype from './HeroPhonePrototype';

const HeroBackground3D = dynamic(() => import('./HeroBackground3D'), { ssr: false });
const HeroForeground3D = dynamic(() => import('./HeroForeground3D'), { ssr: false });

// ── Line-level reveal ─────────────────────────────────────────────────────────
function RevealLine({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div style={{ overflow: 'hidden' }} className={className}>
      <motion.div
        initial={{ y: '105%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ── Social icon SVGs ──────────────────────────────────────────────────────────
function TikTokIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9a8.17 8.17 0 0 0 4.78 1.52V7.06a4.85 4.85 0 0 1-1.01-.37z"/>
    </svg>
  );
}
function InstagramIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
function YoutubeIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#FF0000">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  );
}
function XIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

// ── Glassy orbit chip ─────────────────────────────────────────────────────────
function OrbitChip({
  children,
  chipStyle,
  delay,
  floatOffset = 7,
}: {
  children: React.ReactNode;
  chipStyle: React.CSSProperties;
  delay: number;
  floatOffset?: number;
}) {
  return (
    <motion.div
      className="absolute flex items-center gap-2 rounded-2xl px-4 py-2.5 text-[11px] font-semibold text-white whitespace-nowrap z-30"
      style={{
        background: 'rgba(255,255,255,0.12)',
        border: '1px solid rgba(255,255,255,0.22)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.15)',
        ...chipStyle,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -floatOffset, 0] }}
      transition={{
        opacity: { duration: 0.45, delay },
        scale: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
        y: { duration: 4 + delay * 0.3, delay, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      {children}
    </motion.div>
  );
}

// ── Creator phone screen ───────────────────────────────────────────────────────
function CreatorScreen() {
  return (
    <div className="h-full w-full overflow-y-auto bg-[#F9FAFB]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-12 pb-4">
        <div>
          <p className="text-[10px] text-[#8A8A9A]">Good morning</p>
          <p className="text-sm font-bold text-[#1C1C1E]">Dami Adeyemi</p>
        </div>
        <div
          className="h-8 w-8 rounded-full flex items-center justify-center"
          style={{ background: '#E8E8EE' }}
        >
          <span className="text-[10px] font-bold text-[#4A4A60]">DA</span>
        </div>
      </div>

      {/* Earnings card */}
      <div
        className="mx-4 rounded-2xl p-4"
        style={{ background: '#FFFFFF', boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}
      >
        <p className="text-[10px] text-[#8A8A9A]">Total earnings</p>
        <p className="mt-0.5 text-[26px] font-bold text-[#1C1C1E] leading-tight">₦47,500</p>
        <div className="mt-2.5 flex gap-2">
          <div className="flex-1 rounded-xl px-2.5 py-2" style={{ background: '#F2F2F7' }}>
            <p className="text-[9px] text-[#8A8A9A]">Active</p>
            <p className="text-[11px] font-semibold text-[#1C1C1E]">3 campaigns</p>
          </div>
          <div className="flex-1 rounded-xl px-2.5 py-2" style={{ background: '#F2F2F7' }}>
            <p className="text-[9px] text-[#8A8A9A]">Pending</p>
            <p className="text-[11px] font-semibold text-[#1C1C1E]">₦18,000</p>
          </div>
        </div>
      </div>

      {/* Campaign list */}
      <div className="mt-4 px-4">
        <p className="mb-2.5 text-[9px] font-semibold text-[#B0B0C0] uppercase tracking-wider">
          Active campaigns
        </p>
        {[
          { brand: 'Paystack',  task: 'Instagram post',  reward: '₦25,000', color: '#7C3BED' },
          { brand: 'PiggyVest', task: 'TikTok video',    reward: '₦18,000', color: '#00A050' },
          { brand: 'Cowrywise', task: 'Twitter thread',  reward: '₦8,000',  color: '#2563EB' },
        ].map((c, i) => (
          <div
            key={i}
            className="mb-2 flex items-center gap-3 rounded-xl px-3 py-3"
            style={{ background: '#FFFFFF', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
          >
            <div
              className="h-8 w-8 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${c.color}18` }}
            >
              <span className="text-[10px] font-bold" style={{ color: c.color }}>
                {c.brand[0]}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-[#1C1C1E] truncate">{c.brand}</p>
              <p className="text-[9px] text-[#8A8A9A] truncate">{c.task}</p>
            </div>
            <span className="text-[10px] font-bold shrink-0" style={{ color: '#00A050' }}>
              {c.reward}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section
      className="relative -mt-16 overflow-hidden"
      style={{ minHeight: '100dvh', background: '#7433FF' }}
    >
      {/* Background 3D layer — icons fan out behind the glass box */}
      <HeroBackground3D />
      {/* Foreground 3D layer — transparent canvas, icons pass IN FRONT of box */}
      <HeroForeground3D />

      {/* Dot grid pattern on hero background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.10) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Concentric rings — centred in the section */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: 800, height: 800, borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.07)',
          top: '50%', left: '36%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          width: 540, height: 540, borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.06)',
          top: '50%', left: '36%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="relative z-10 max-w-6xl mx-auto px-6 flex items-center"
        style={{ minHeight: '100dvh', gap: 48 }}
      >

        {/* ── Left: text ── */}
        <div style={{ flex: '0 0 50%', paddingTop: 96, paddingBottom: 80 }}>

          {/* Live pill */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.22)',
            }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-semibold text-white tracking-wide">
              Live Platform — Open Signups
            </span>
          </motion.div>

          {/* Headline */}
          <h1
            className="font-extrabold tracking-tight text-white mb-7"
            style={{ fontSize: 'clamp(40px, 4.4vw, 72px)', lineHeight: 1.04 }}
          >
            <RevealLine delay={0.48}>Campaigns</RevealLine>
            <RevealLine delay={0.58}>that actually</RevealLine>
            <RevealLine delay={0.68}>perform.</RevealLine>
          </h1>

          {/* Subtext */}
          <motion.p
            className="leading-relaxed mb-10"
            style={{
              fontSize: 'clamp(15px, 1.1vw, 18px)',
              color: 'rgba(255,255,255,0.68)',
              maxWidth: 420,
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] as const }}
          >
            Structured campaigns, verified metrics, and escrow payouts —
            connecting creators and sponsors across Nigeria.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-3 mb-14"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.3, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <Link
              href="/sponsors"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-[#0F0F1A] transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: '#FFFFFF',
                boxShadow: '0 4px 24px rgba(0,0,0,0.20)',
              }}
            >
              Run a Campaign <ArrowRight size={15} />
            </Link>
            <Link
              href="/creators"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all"
              style={{
                border: '1.5px solid rgba(255,255,255,0.30)',
                color: 'white',
              }}
            >
              Join as Creator
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            className="flex items-center gap-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            {[
              { value: '₦2.4M',  label: 'distributed' },
              { value: '847+',   label: 'active creators' },
              { value: '98%',    label: 'on-time payouts' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-base leading-tight">{value}</span>
                <span className="text-white/50 text-[11px]">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: purple box + phone + chips ── */}
        {/* flex-col + justify-center so we don't need % heights on absolute children */}
        <div
          className="hidden lg:flex flex-col justify-center"
          style={{ flex: 1 }}
        >
          {/* Wrapper: fixed height, position:relative — chips anchor here */}
          <div
            className="relative"
            style={{ height: 'clamp(560px, 74vh, 680px)' }}
          >
            {/* Purple box fills wrapper, clips phone halfway */}
            <motion.div
              className="absolute inset-0 rounded-[36px] overflow-hidden flex items-start justify-center"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.16)',
                paddingTop: 110,
              }}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            >
              {/* Bottom fade */}
              <div
                className="pointer-events-none absolute bottom-0 inset-x-0"
                style={{
                  height: 110,
                  background: 'linear-gradient(to bottom, transparent, rgba(40,10,110,0.85))',
                }}
              />
              {/* Phone — slightly wider, bottom clipped by box */}
              <div className="relative z-10" style={{ transform: 'scaleX(1.12)', transformOrigin: 'top center' }}>
                <PhoneFrame screenBg="#F9FAFB">
                  <HeroPhonePrototype />
                </PhoneFrame>
              </div>
            </motion.div>

            {/* ── Orbit chips — siblings of purple box, z-30, fixed px positions ── */}

            <OrbitChip chipStyle={{ top: 80, left: -24 }} delay={1.6} floatOffset={8}>
              <InstagramIcon size={14} />
              <span>840K reach</span>
            </OrbitChip>

            <OrbitChip chipStyle={{ top: 260, right: -24 }} delay={2.0} floatOffset={9}>
              <TikTokIcon size={14} />
              <span>2.1M views</span>
            </OrbitChip>
          </div>
        </div>

      </div>
    </section>
  );
}
