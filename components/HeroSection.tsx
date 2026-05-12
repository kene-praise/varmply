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

// ── Hero ──────────────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section
      id="hero"
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
