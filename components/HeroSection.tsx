'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { LiquidGlass } from '@/components/ui/LiquidGlass';
import HomeHeroFallingIcons from './HomeHeroFallingIcons';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } }
};

// ── shadcn-style app UI ───────────────────────────────────────────────────────
function HeroPhoneApp() {
  const border = '1px solid hsl(214.3 31.8% 91.4%)';
  const muted = 'hsl(215.4 16.3% 46.9%)';
  const mutedBg = 'hsl(210 40% 96.1%)';

  const campaigns = [
    { brand: 'Paystack', task: 'Instagram post', reward: '₦25,000', status: 'Active', statusColor: '#16A34A', statusBg: '#F0FDF4', avatar: '#7C3BED' },
    { brand: 'PiggyVest', task: 'TikTok video', reward: '₦18,000', status: 'Pending', statusColor: '#D97706', statusBg: '#FFFBEB', avatar: '#2563EB' },
    { brand: 'Cowrywise', task: 'TikTok video', reward: '₦8,000', status: 'Active', statusColor: '#16A34A', statusBg: '#F0FDF4', avatar: '#00A050' },
  ];

  const bars = [65, 40, 80, 55, 70, 35, 90];

  return (
    <div className="w-full max-md:h-full max-md:flex max-md:flex-col overflow-hidden" style={{ background: 'hsl(210 40% 98%)', fontFamily: 'system-ui,-apple-system,sans-serif' }}>

      {/* Status bar */}
      <div className="flex items-center justify-between shrink-0 bg-white" style={{ height: 40, padding: '10px 16px 0' }}>
        <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: -0.2 }}>9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="13" height="9" viewBox="0 0 13 9" fill="currentColor" className="text-foreground">
            <rect x="0" y="4.5" width="2.5" height="4.5" rx="0.5" opacity="0.3" />
            <rect x="3.5" y="3" width="2.5" height="6" rx="0.5" opacity="0.55" />
            <rect x="7" y="1.5" width="2.5" height="7.5" rx="0.5" opacity="0.8" />
            <rect x="10.5" y="0" width="2.5" height="9" rx="0.5" />
          </svg>
          <svg width="19" height="9" viewBox="0 0 19 9" fill="none">
            <rect x="0.5" y="0.5" width="15.5" height="8" rx="2" stroke="black" strokeOpacity="0.3" strokeWidth="0.8" />
            <rect x="1.5" y="1.5" width="11" height="6" rx="1.5" fill="black" />
            <path d="M17 3v3c.7-.2 1.2-.8 1.2-1.5S17.7 3.2 17 3z" fill="black" fillOpacity="0.35" />
          </svg>
        </div>
      </div>

      {/* App header */}
      <div className="flex items-center justify-between shrink-0 bg-white" style={{ padding: '8px 16px 10px', borderBottom: border }}>
        <div>
          <p style={{ fontSize: 10, color: muted, marginBottom: 1 }}>Good morning,</p>
          <p style={{ fontSize: 14, fontWeight: 700, color: 'hsl(222.2 84% 4.9%)', letterSpacing: -0.3 }}>Dami Adeyemi</p>
        </div>
        <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#7C3BED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: 'white' }}>DA</span>
        </div>
      </div>

      {/* Earnings card */}
      <div className="shrink-0 mx-3 mt-3" style={{ background: '#7C3BED', borderRadius: 14, padding: '14px 16px 12px' }}>
        <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.65)', marginBottom: 4 }}>Total earnings</p>
        <p style={{ fontSize: 30, fontWeight: 700, color: 'white', letterSpacing: -1, lineHeight: 1, marginBottom: 10 }}>₦47,500</p>
        <div className="flex gap-1.5 items-end" style={{ marginBottom: 6 }}>
          {bars.map((h, i) => (
            <div key={i} style={{ flex: 1, height: h * 0.3, borderRadius: 3, background: i === 6 ? 'white' : 'rgba(255,255,255,0.35)' }} />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)' }}>Last 7 days</span>
          <span style={{ fontSize: 9, fontWeight: 600, color: '#86EFAC', background: 'rgba(255,255,255,0.12)', borderRadius: 20, padding: '2px 7px' }}>+₦12,000</span>
        </div>
      </div>

      {/* Quick stats row */}
      <div className="shrink-0 flex gap-2 mx-3 mt-2.5">
        {[
          { label: 'Active', value: '3', sub: 'campaigns', color: '#7C3BED', bg: '#F5F0FF' },
          { label: 'Pending', value: '₦18K', sub: 'payout', color: '#D97706', bg: '#FFFBEB' },
          { label: 'Reach', value: '340K', sub: 'followers', color: '#2563EB', bg: '#EFF6FF' },
        ].map(({ label, value, sub, color, bg }) => (
          <div key={label} style={{ flex: 1, background: 'white', borderRadius: 10, border, padding: '8px 8px 7px' }}>
            <p style={{ fontSize: 7.5, color: muted, marginBottom: 3 }}>{label}</p>
            <p style={{ fontSize: 15, fontWeight: 700, color, letterSpacing: -0.5, lineHeight: 1, marginBottom: 1 }}>{value}</p>
            <p style={{ fontSize: 7, color: muted }}>{sub}</p>
          </div>
        ))}
      </div>

      {/* Campaigns section */}
      <div className="shrink-0 mx-3 mt-3">
        <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'hsl(222.2 84% 4.9%)' }}>Active campaigns</p>
          <p style={{ fontSize: 10, color: '#7C3BED', fontWeight: 500 }}>See all</p>
        </div>
        <div style={{ background: 'white', borderRadius: 12, border, overflow: 'hidden' }}>
          {campaigns.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5"
              style={{ padding: '9px 12px', borderBottom: i < campaigns.length - 1 ? border : 'none' }}
            >
              <div style={{ width: 32, height: 32, borderRadius: 8, background: c.avatar + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid ${c.avatar}22` }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: c.avatar }}>{c.brand[0]}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 10.5, fontWeight: 600, color: 'hsl(222.2 84% 4.9%)', marginBottom: 1.5 }}>{c.brand}</p>
                <p style={{ fontSize: 9, color: muted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.task}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span style={{ fontSize: 10, fontWeight: 600, color: 'hsl(222.2 84% 4.9%)' }}>{c.reward}</span>
                <span style={{ fontSize: 8, fontWeight: 500, color: c.statusColor, background: c.statusBg, borderRadius: 20, padding: '1px 6px' }}>{c.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}


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
    <div style={{ overflow: 'hidden', paddingBottom: '0.15em', marginBottom: '-0.15em' }} className={className}>
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
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9a8.17 8.17 0 0 0 4.78 1.52V7.06a4.85 4.85 0 0 1-1.01-.37z" />
    </svg>
  );
}
function InstagramIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function YoutubeIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#FF0000">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}
function XIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
          { brand: 'Paystack', task: 'Instagram post', reward: '₦25,000', color: '#7C3BED' },
          { brand: 'PiggyVest', task: 'TikTok video', reward: '₦18,000', color: '#00A050' },
          { brand: 'Cowrywise', task: 'TikTok video', reward: '₦8,000', color: '#2563EB' },
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
      className="relative overflow-hidden cursor-none"
      style={{ minHeight: '100dvh', background: '#6406cf' }}
    >
      <LiquidGlass width={140} height={140} borderRadius={70} blur={2} tintOpacity={0.15} />

      {/* Aurora — white glow, identical to footer */}
      <div
        className="pointer-events-none absolute rounded-[50%]"
        style={{
          width: '80vw',
          height: '60vh',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'hero-breathe 8s ease-in-out infinite alternate',
        }}
      />

      {/* Line grid — identical to footer-bg-grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundSize: '60px 60px',
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        }}
      />
      {/* Concentric rings — centred in the section */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: 800, height: 800, borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.035)',
          top: '50%', left: '36%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          width: 540, height: 540, borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.025)',
          top: '50%', left: '36%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center"
        style={{ minHeight: '100dvh', gap: 48 }}
      >

        {/* ── Left: text ── */}
        <div className="w-full lg:w-1/2 lg:shrink-0 pt-24 pb-2 lg:pb-20">

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
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-extrabold tracking-tight mb-7"
            style={{
              fontSize: 'clamp(40px, 4.4vw, 60px)',
              lineHeight: 1.04,
              background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.58) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0px 0px 28px rgba(255,255,255,0.18))',
              paddingBottom: '0.15em',
            }}
          >
            Turn your <br className="max-md:hidden" />song into a <br className="max-md:hidden" />creator campaign.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="leading-relaxed mb-10 text-base md:max-w-[420px]"
            style={{
              color: 'rgba(255,255,255,0.68)',
            }}
          >
            Launch structured creator campaigns where your track becomes content. Only pay for real performance — payouts happen only when engagement is verified.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mb-6 lg:mb-14"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.3, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <Link
              href="/waitlist"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-[#0F0F1A] transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              style={{
                background: '#FFFFFF',
                boxShadow: '0 4px 24px rgba(0,0,0,0.20)',
              }}
            >
              Join the Waitlist <ArrowRight size={15} />
            </Link>
            <Link
              href="#how-it-works"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all w-full sm:w-auto"
              style={{
                border: '1.5px solid rgba(255,255,255,0.30)',
                color: 'white',
              }}
            >
              How It Works
            </Link>
          </motion.div>

          {/* Trust strip (Desktop) */}
          <motion.div
            className="hidden lg:flex items-center gap-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            {[
              { value: '₦2.4M', label: 'distributed' },
              { value: '847+', label: 'active creators' },
              { value: '98%', label: 'on-time payouts' },
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
          className="flex flex-col justify-center w-full lg:flex-1 -mt-4 lg:mt-0 -mb-12 lg:mb-0"
        >
          {/* Wrapper: fixed height, position:relative — chips anchor here */}
          <div
            className="relative w-full lg:pb-0 h-[clamp(440px,60vh,680px)] lg:h-[clamp(560px,74vh,680px)]"
          >
            {/* Glass panel with human portrait */}
            <motion.div
              className="absolute inset-0 w-full h-full rounded-t-[36px] rounded-b-none lg:rounded-[36px] overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.16)',
              }}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="absolute inset-0">
                <Image
                  src="/mockups/headphones-portrait-2.jpg"
                  alt="Music creator portrait with headphones"
                  fill
                  priority
                  className="object-cover object-center"
                  style={{ transform: 'scaleX(-1)' }}
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                  background: 'linear-gradient(180deg, rgba(100,6,207,0.06) 0%, rgba(100,6,207,0.24) 45%, rgba(100,6,207,0.88) 100%)',
                }}
              />
              {/* Icons rise through the photo, clipped by panel overflow */}
              <div className="hidden lg:block">
                <HomeHeroFallingIcons />
              </div>

              {/* Mobile Trust Strip on the image */}
              <div className="absolute bottom-20 left-6 right-6 lg:hidden z-20 flex items-end justify-between gap-2 flex-wrap">
                {[
                  { value: '₦2.4M', label: 'distributed' },
                  { value: '847+', label: 'active creators' },
                  { value: '98%', label: 'on-time payouts' },
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="text-white font-bold text-xl leading-tight">{value}</span>
                    <span className="text-white/70 text-[10px] uppercase font-bold tracking-[0.1em]">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Orbit chips — siblings of purple box, z-30, fixed px positions ── */}
            <div className="hidden lg:block">
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

      </div>
    </section>
  );
}
