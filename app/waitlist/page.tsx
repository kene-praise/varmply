'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Info } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

type Role = 'sponsor' | 'creator';

const ROLE_COLOR: Record<Role, string> = {
  sponsor: '#1A40B8',
  creator: '#006B35',
};

// ─── Inner component (needs useSearchParams) ──────────────────────────────────

function WaitlistContent() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get('role');
  const initialRole: Role | null =
    roleParam === 'sponsor' || roleParam === 'creator' ? roleParam : null;

  const [role, setRole] = useState<Role | null>(initialRole);
  const [infoOpen, setInfoOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [intent, setIntent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const accentColor = role ? ROLE_COLOR[role] : '#6406CF';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role || !name || !email) return;
    setSubmitted(true);
  };

  // ── Success screen ──────────────────────────────────────────────────────────
  if (submitted) {
    const isCreator = role === 'creator';
    const heroBg = isCreator ? '#006B35' : '#1A40B8';
    const color = ROLE_COLOR[role!];
    const pattern = isCreator
      ? 'radial-gradient(circle, rgba(255,255,255,0.13) 1px, transparent 1px)'
      : 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.055) 0px, rgba(255,255,255,0.055) 1px, transparent 1px, transparent 18px)';
    const patternSize = isCreator ? '18px 18px' : undefined;

    return (
      <div className="relative overflow-hidden flex flex-col items-center justify-center px-6 text-center"
        style={{ background: heroBg, minHeight: '100dvh' }}>
        {/* Pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: pattern,
          ...(patternSize ? { backgroundSize: patternSize } : {}),
        }} />
        {/* Soft bloom */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.10) 0%, transparent 70%)',
        }} />

        <motion.div className="relative z-10 max-w-md w-full" variants={stagger} initial="hidden" animate="visible">
          {/* Check */}
          <motion.div variants={fadeUp} className="flex justify-center mb-7">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 280, damping: 20 }}
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.18)', border: '1.5px solid rgba(255,255,255,0.3)' }}
            >
              <CheckCircle size={26} className="text-white" />
            </motion.div>
          </motion.div>

          <motion.span variants={fadeUp}
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.22em] mb-5 border border-white/20 text-white/65">
            <span className="w-1 h-1 rounded-full bg-white/60 animate-pulse" />
            {isCreator ? 'Creator Waitlist' : 'Sponsor Waitlist'}
          </motion.span>

          <motion.h1 variants={fadeUp}
            className="font-black tracking-tight text-white mb-3"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, paddingBottom: '0.1em' }}>
            You're on the list.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/55 text-sm leading-relaxed mb-10 max-w-xs mx-auto">
            We'll reach out when Varmply opens to {isCreator ? 'creators' : 'sponsors'} like you. In the meantime, explore what's coming.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col gap-3 w-full">
            <Link
              href={isCreator ? '/creators' : '/sponsors'}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: 'white', color: heroBg }}
            >
              Explore the {isCreator ? 'Creator' : 'Sponsor'} experience <ArrowRight size={14} />
            </Link>
            <Link href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-white/60 hover:text-white transition-colors"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}
            >
              Back to home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // ── Main form ───────────────────────────────────────────────────────────────
  return (
    <div style={{ background: '#FFFFFF' }}>

      {/* Hero strip */}
      <section className="relative overflow-hidden pt-20 md:pt-[152px] pb-16 md:pb-[72px]" style={{ background: '#0F0F1A' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundSize: '60px 60px',
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          maskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
        }} />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6"
          variants={stagger} initial="hidden" animate="visible"
        >
          {/* Early access tag — green pulse */}
          <motion.span variants={fadeUp}
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.22em] mb-6 border"
            style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.15)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#4ADE80' }} />
            Early Access
          </motion.span>

          <motion.h1 variants={fadeUp}
            className="font-black tracking-tight mb-4"
            style={{
              fontSize: 'clamp(44px, 5.5vw, 78px)', lineHeight: 1.0,
              background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.52) 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              paddingBottom: '0.15em',
            }}>
            Get early access.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/45 text-base leading-relaxed max-w-xs">
            Tell us who you are. We'll get you in.
          </motion.p>
        </motion.div>
      </section>

      {/* Main content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>

          {/* 01 — Role */}
          <motion.div variants={fadeUp} className="relative flex items-center gap-2 mb-6"
            onMouseLeave={() => setInfoOpen(false)}>
            <p className="text-[10px] font-black uppercase tracking-[0.24em]" style={{ color: '#BBBBCC' }}>
              01 — Pick your path
            </p>

            <button
              type="button"
              onMouseEnter={() => setInfoOpen(true)}
              onClick={() => setInfoOpen(v => !v)}
              className="flex items-center justify-center w-5 h-5 rounded-full transition-colors shrink-0"
              style={{ color: '#CCCCDA' }}
              aria-label="More info"
            >
              <Info size={13} />
            </button>

            <AnimatePresence>
              {infoOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-8 z-50 w-[min(320px,calc(100vw-2rem))]"
                >
                  {/* Arrow */}
                  <div className="ml-[calc(theme(spacing.5)*3+2px)] w-2.5 h-2.5 rotate-45 rounded-[2px] mb-[-6px] relative z-10"
                    style={{ background: '#FFFFFF', border: '1px solid #E4E4EC', borderBottom: 'none', borderRight: 'none' }} />
                  {/* Card */}
                  <div className="rounded-2xl p-4"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E4E4EC',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
                    }}>
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: 'rgba(124,59,237,0.08)', border: '1px solid rgba(124,59,237,0.14)' }}>
                        <Info size={13} style={{ color: '#7C3BED' }} />
                      </div>
                      <p className="text-[13px] text-[#4A4A6A] leading-relaxed">
                        Varmply works for two kinds of people. Pick the one that fits —{' '}
                        <span className="text-[#0F0F1A] font-semibold">it shapes your experience on the platform.</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">

            {/* Sponsor card — diagonal lines */}
            <button
              type="button"
              onClick={() => setRole('sponsor')}
              className="relative overflow-hidden rounded-2xl text-left cursor-pointer"
              style={{
                background: '#1A40B8',
                minHeight: 220,
                outline: role === 'sponsor' ? '2.5px solid rgba(255,255,255,0.65)' : '2.5px solid transparent',
                transform: role === 'sponsor' ? 'translateY(-3px)' : 'none',
                opacity: role === 'creator' ? 0.5 : 1,
                transition: 'all 0.22s ease',
              }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.055) 0px, rgba(255,255,255,0.055) 1px, transparent 1px, transparent 18px)',
              }} />
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: 'rgba(255,255,255,0.06)', filter: 'blur(32px)' }} />

              <div className="relative z-10 p-5 sm:p-6 flex flex-col" style={{ minHeight: 220 }}>
                <div className="flex items-start justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.22em] text-white/40">Sponsors</span>
                  <AnimatePresence>
                    {role === 'sponsor' && (
                      <motion.span key="chk-s"
                        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                        className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                        <CheckCircle size={11} style={{ color: '#1A40B8' }} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <div className="mt-6 flex-1">
                  <p className="font-black text-white leading-[1.0] tracking-tight mb-2.5"
                    style={{ fontSize: 'clamp(22px, 2.8vw, 32px)' }}>
                    Promote<br />my music.
                  </p>
                  <p className="text-white/50 text-xs leading-relaxed">
                    Run creator campaigns.<br />Pay only for verified results.
                  </p>
                </div>
                <div className="mt-5 pt-4 flex items-center gap-3 sm:gap-4 flex-wrap" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
                  {['₦0 upfront', 'Auto-verified', 'Escrow'].map(s => (
                    <span key={s} className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/30">{s}</span>
                  ))}
                </div>
              </div>
            </button>

            {/* Creator card — dot grid */}
            <button
              type="button"
              onClick={() => setRole('creator')}
              className="relative overflow-hidden rounded-2xl text-left cursor-pointer"
              style={{
                background: '#006B35',
                minHeight: 220,
                outline: role === 'creator' ? '2.5px solid rgba(255,255,255,0.65)' : '2.5px solid transparent',
                transform: role === 'creator' ? 'translateY(-3px)' : 'none',
                opacity: role === 'sponsor' ? 0.5 : 1,
                transition: 'all 0.22s ease',
              }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.13) 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }} />
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: 'rgba(255,255,255,0.05)', filter: 'blur(32px)' }} />

              <div className="relative z-10 p-5 sm:p-6 flex flex-col" style={{ minHeight: 220 }}>
                <div className="flex items-start justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.22em] text-white/40">Creators</span>
                  <AnimatePresence>
                    {role === 'creator' && (
                      <motion.span key="chk-c"
                        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                        className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                        <CheckCircle size={11} style={{ color: '#006B35' }} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <div className="mt-6 flex-1">
                  <p className="font-black text-white leading-[1.0] tracking-tight mb-2.5"
                    style={{ fontSize: 'clamp(22px, 2.8vw, 32px)' }}>
                    Monetize<br />my views.
                  </p>
                  <p className="text-white/50 text-xs leading-relaxed">
                    Join campaigns. Post content.<br />Get paid automatically.
                  </p>
                </div>
                <div className="mt-5 pt-4 flex items-center gap-3 sm:gap-4 flex-wrap" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
                  {['Free to join', 'Auto-payouts', 'Real campaigns'].map(s => (
                    <span key={s} className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/30">{s}</span>
                  ))}
                </div>
              </div>
            </button>
          </motion.div>

          {/* Disclaimer */}
          <motion.p variants={fadeUp} className="text-xs sm:text-sm text-[#AAAABC] mb-10 -mt-4">
            Not sure yet? Pick either — you can always switch roles later.
          </motion.p>

          {/* 02 — Details */}
          <motion.div variants={fadeUp}>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] mb-5" style={{ color: '#BBBBCC' }}>
              02 — Your details
            </p>

            <form onSubmit={handleSubmit}
              className="rounded-2xl border p-5 sm:p-8 flex flex-col gap-5"
              style={{ borderColor: '#E4E4EC' }}>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Name">
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-xl border text-sm text-[#0F0F1A] placeholder:text-[#CCCCDA] outline-none"
                    style={{
                      borderColor: name && role ? `${accentColor}55` : '#E4E4EC',
                      background: '#FAFAFA',
                      transition: 'border-color 0.18s ease',
                    }}
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-xl border text-sm text-[#0F0F1A] placeholder:text-[#CCCCDA] outline-none"
                    style={{
                      borderColor: email && role ? `${accentColor}55` : '#E4E4EC',
                      background: '#FAFAFA',
                      transition: 'border-color 0.18s ease',
                    }}
                  />
                </Field>
              </div>

              <Field label="How do you intend to use the platform?">
                <textarea
                  value={intent}
                  onChange={e => setIntent(e.target.value)}
                  rows={4}
                  autoComplete="off"
                  placeholder={
                    role === 'sponsor'
                      ? 'e.g. I want to run TikTok campaigns for my new single release…'
                      : role === 'creator'
                      ? 'e.g. I post music content on TikTok and want to earn from campaigns…'
                      : 'Tell us a bit about your plans…'
                  }
                  className="w-full px-4 py-3 rounded-xl border text-sm text-[#0F0F1A] placeholder:text-[#CCCCDA] outline-none resize-none leading-relaxed"
                  style={{
                    borderColor: intent && role ? `${accentColor}55` : '#E4E4EC',
                    background: '#FAFAFA',
                    transition: 'border-color 0.18s ease',
                  }}
                />
              </Field>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-1">
                <button
                  type="submit"
                  disabled={!role || !name || !email}
                  className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 w-full sm:w-auto"
                  style={{ background: accentColor }}
                >
                  Join the Waitlist <ArrowRight size={14} />
                </button>
                <AnimatePresence>
                  {!role && (
                    <motion.p
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="text-[11px] text-center sm:text-left"
                      style={{ color: '#BBBBCC' }}
                    >
                      Select a role above to get started
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

          {/* Explore links */}
          <motion.div variants={fadeUp}
            className="mt-10 pt-8 flex flex-col sm:flex-row gap-3 sm:gap-8"
            style={{ borderTop: '1px solid #E4E4EC' }}>
            <Link href="/sponsors"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#1A40B8]"
              style={{ color: '#4A4A6A' }}>
              <ArrowRight size={13} /> Explore the Sponsor experience
            </Link>
            <Link href="/creators"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#006B35]"
              style={{ color: '#4A4A6A' }}>
              <ArrowRight size={13} /> Explore the Creator experience
            </Link>
          </motion.div>

        </motion.div>
      </section>
    </div>
  );
}

// ─── Field helper ─────────────────────────────────────────────────────────────

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: '#AAAABC' }}>
        {label}
      </label>
      {children}
    </div>
  );
}

// ─── Page export with Suspense boundary ───────────────────────────────────────

export default function WaitlistPage() {
  return (
    <Suspense>
      <WaitlistContent />
    </Suspense>
  );
}
