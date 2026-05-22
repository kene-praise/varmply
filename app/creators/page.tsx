'use client';

import { Suspense, useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollCarousel } from '@/components/ui/ScrollCarousel';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, DollarSign, Search, Heart, MessageCircle, Share2, Music2, Star } from 'lucide-react';
import Image from 'next/image';
import { VideoCard } from '@/components/ui/VideoCard';
import FAQAccordion from '@/components/FAQAccordion';
import { PhoneFrame } from '@/components/ui/PhoneFrame';

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const vp = { once: true, margin: '-80px' };

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] mb-6"
      style={{ background: 'rgba(124,59,237,0.08)', color: '#7C3BED' }}>
      {children}
    </span>
  );
}

// ─── Video carousel for hero phone ──────────────────────────────────────────

const CREATOR_FEED = [
  {
    src: '/videos/demo-1.mp4#t=4',
    handle: '@dami_creates',
    caption: 'This drop is different 🔥 #WavyVibes #fyp',
    song: 'Wavy Vibes — Burna Boy',
    likes: '34.2K',
    comments: '1.2K',
    avatar: 'DA',
    avatarColor: '#1A40B8',
  },
  {
    src: '/videos/demo-2.mp4',
    handle: '@temi_vibes',
    caption: 'Campaign secured 💸 #Varmply #fyp',
    song: 'Lagos Summer — Olu Fire',
    likes: '89.1K',
    comments: '3.4K',
    avatar: 'TV',
    avatarColor: '#6406CF',
  },
  {
    src: '/videos/demo-3.mp4',
    handle: '@chuka.tv',
    caption: 'When the metrics hit different 📊 #fyp',
    song: 'Afrobeats Nights — Burna Boy',
    likes: '210K',
    comments: '8.7K',
    avatar: 'CT',
    avatarColor: '#00A050',
  },
];

function VideoCarouselScreen() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % CREATOR_FEED.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.play().catch(() => {});
  }, [index]);

  return (
    <div className="h-full w-full relative overflow-hidden" style={{ background: '#000' }}>

      {/* ── Slide-up transition: video + all overlays move together ── */}
      <AnimatePresence initial={false}>
        {CREATOR_FEED.map((item, i) => i === index && (
          <motion.div
            key={i}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.52, ease: [0.32, 0, 0.67, 0] }}
            className="absolute inset-0"
          >
            {/* Video */}
            <video
              ref={videoRef}
              src={item.src}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 22%, transparent 55%, rgba(0,0,0,0.82) 100%)',
            }} />

            {/* Right: action buttons */}
            <div className="absolute right-3 flex flex-col items-center gap-4" style={{ bottom: 80 }}>
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                  style={{ background: item.avatarColor, border: '2px solid white' }}>
                  {item.avatar}
                </div>
                <div className="w-4 h-4 rounded-full flex items-center justify-center -mt-2 z-10"
                  style={{ background: item.avatarColor, border: '1.5px solid white', fontSize: 10, color: 'white', fontWeight: 700 }}>+</div>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.18)' }}>
                  <Heart size={16} fill="white" color="white" />
                </div>
                <span style={{ fontSize: 9, color: 'white', fontWeight: 600 }}>{item.likes}</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.18)' }}>
                  <MessageCircle size={16} fill="white" color="white" />
                </div>
                <span style={{ fontSize: 9, color: 'white', fontWeight: 600 }}>{item.comments}</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.18)' }}>
                  <Share2 size={15} color="white" />
                </div>
                <span style={{ fontSize: 9, color: 'white', fontWeight: 600 }}>Share</span>
              </div>
              <div className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)', border: '2px solid rgba(255,255,255,0.25)' }}>
                <Music2 size={14} color="white" />
              </div>
            </div>

            {/* Bottom: creator info + song */}
            <div className="absolute bottom-0 left-0 px-4 pb-5" style={{ right: 52 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: 'white', marginBottom: 3 }}>{item.handle}</p>
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.80)', marginBottom: 10, lineHeight: 1.4 }}>
                {item.caption}
              </p>
              <div className="flex items-center gap-2 rounded-full px-3 py-1.5"
                style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', display: 'inline-flex' }}>
                <Music2 size={10} color="white" />
                <span style={{ fontSize: 9, color: 'white', fontWeight: 500, whiteSpace: 'nowrap' }}>
                  {item.song}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// ─── Static screenshot phone ─────────────────────────────────────────────────

type PhoneCfg = { top: number; left: number; right: number; bottom: number; scale: number; x: number; y: number };

function StaticPhone({ imgSrc, alt, cfg, frameWidth = 280, wrapClass = 'w-full' }: {
  imgSrc: string; alt: string; cfg: PhoneCfg; frameWidth?: number; wrapClass?: string;
}) {
  return (
    <div className={wrapClass}>
      <div className="relative h-[420px] flex justify-center overflow-hidden pointer-events-none">
        <div className="absolute top-0 flex justify-center">
          <PhoneFrame screenBg="#FFFFFF" frameWidth={frameWidth}>
            <div className="absolute overflow-hidden" style={{ top: cfg.top, left: cfg.left, right: cfg.right, bottom: cfg.bottom }}>
              <div style={{ transform: `scale(${cfg.scale}) translate(${cfg.x}px, ${cfg.y}px)`, transformOrigin: 'top center', width: '100%' }}>
                <Image src={imgSrc} alt={alt} width={390} height={844} className="w-full h-auto" />
              </div>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const faqItems = [
  { question: 'How do I know if I qualify for a campaign?', answer: "Varmply checks your profile against each campaign's eligibility rules automatically. You'll see a clear Eligible or Not Eligible status before you apply — no guessing." },
  { question: 'When do I get paid?', answer: "Payments are released from escrow after your submission is validated — typically 24–72 hours. Funds land in your Varmply wallet immediately and can be withdrawn anytime." },
  { question: 'What counts as a valid submission?', answer: "Each campaign defines its own requirements (tagging the brand, hashtags, minimum video length). Validation is automated. The campaign brief shows exactly what's needed upfront." },
  { question: 'Can I join multiple campaigns at once?', answer: "Yes — as many as you qualify for simultaneously. Some campaigns have exclusivity clauses, which are always disclosed upfront." },
  { question: 'What platforms are supported?', answer: 'TikTok alone for now. More platforms are coming up soon.' },
  { question: 'Is there a fee for creators?', answer: 'Varmply is free for creators. You keep 100% of your campaign earnings. We charge sponsors, not creators.' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

function SectionIsolator() {
  const searchParams = useSearchParams();
  const section = searchParams.get('section');
  useLayoutEffect(() => {
    if (!section) return;
    document.querySelectorAll<HTMLElement>('[data-section]').forEach(el => {
      el.style.display = el.dataset.section === section ? '' : 'none';
    });
  }, [section]);
  useEffect(() => {
    if (!section) return;
    // The footer lives outside [data-section] blocks, in the layout
    const el = section === 'site-footer'
      ? document.querySelector<HTMLElement>('#site-footer') ?? document.body
      : document.querySelector<HTMLElement>(`[data-section="${section}"]`);
    if (!el) return;
    const report = () => window.parent.postMessage({ type: 'varmply-section-height', height: el.scrollHeight }, '*');
    report();
    const ro = new ResizeObserver(report);
    ro.observe(el);
    return () => ro.disconnect();
  }, [section]);
  return null;
}

export default function CreatorsPage() {
  return (
    <div style={{ background: '#FFFFFF' }}>
      <Suspense><SectionIsolator /></Suspense>

      {/* 1. HERO ─────────────────────────────────────────────────────────────── */}
      <section data-section="creator-hero" id="creator-hero" className="relative overflow-hidden"
        style={{ minHeight: '100dvh', background: '#1A40B8' }}>
        {/* Aurora bloom */}
        <div className="pointer-events-none absolute rounded-[50%]" style={{
          width: '80vw', height: '60vh',
          top: '50%', left: '50%',
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'hero-breathe 8s ease-in-out infinite alternate',
        }} />
        {/* Line grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundSize: '60px 60px',
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center"
          style={{ minHeight: '100dvh', gap: 48 }}>

          {/* ── Left: text ── */}
          <motion.div
            className="w-full lg:w-1/2 lg:shrink-0 pt-20 pb-0 lg:pt-28 lg:pb-20"
            variants={stagger} initial="hidden" animate="visible"
          >
            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.22em] mb-6 text-white/70 border"
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
              <span className="w-1 h-1 rounded-full bg-white/60 animate-pulse" />
              For Creators
            </motion.span>
            <motion.h1 variants={fadeUp}
              className="font-black tracking-tight mb-6"
              style={{
                fontSize: 'clamp(40px, 4.4vw, 64px)', lineHeight: 1.04,
                background: 'linear-gradient(160deg, #ffffff 0%, #93C5FD 35%, #ffffff 60%, rgba(255,255,255,0.65) 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0px 0px 40px rgba(147,197,253,0.45))',
                paddingBottom: '0.15em',
              }}>
              Get Paid for the Content <br className="max-md:hidden" />You Already Make.
            </motion.h1>
            <motion.p variants={fadeUp}
              className="text-base leading-relaxed mb-6 md:mb-10 md:max-w-[420px]"
              style={{ color: 'rgba(255,255,255,0.78)' }}>
              Join campaigns, post content, and get paid as soon as your performance is verified.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-10">
              <Link href="/waitlist?role=creator"
                className="flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:opacity-90 w-full sm:w-auto"
                style={{ background: 'white', color: '#1A40B8', boxShadow: '0 4px 24px rgba(0,0,0,0.20)' }}>
                Join the Waitlist <ArrowRight size={15} />
              </Link>
              <Link href="#how-it-works"
                className="flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold w-full sm:w-auto"
                style={{ color: 'white', border: '1.5px solid rgba(255,255,255,0.30)' }}>
                How It Works
              </Link>
            </motion.div>
            {/* Mobile hero phone: 70% visible, bottom clipped by hero */}
            <motion.div variants={fadeUp} className="lg:hidden mt-8">
              <div className="relative w-full overflow-hidden h-[420px]">
                <div className="absolute top-0 left-1/2" style={{ transform: 'translateX(-50%)' }}>
                  <PhoneFrame screenBg="#000">
                    <VideoCarouselScreen />
                  </PhoneFrame>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="hidden lg:flex items-center flex-wrap gap-y-2">
              {['Guaranteed payouts', 'No scattered DMs', 'Top-tier brands', 'Free to join'].map((b, i) => (
                <span key={b} className="flex items-center">
                  <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50">
                    <CheckCircle size={9} style={{ color: '#93C5FD', flexShrink: 0 }} /> {b}
                  </span>
                  {i < 3 && <span className="mx-3.5 text-white/20 text-xs select-none">·</span>}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: phone with video ── */}
          <div className="hidden lg:flex flex-col justify-center" style={{ flex: 1 }}>
            <div className="relative" style={{ height: 'clamp(640px, 84vh, 800px)' }}>
              {/* Glass card */}
              <motion.div
                className="absolute inset-0 rounded-[36px] overflow-hidden"
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
                <div
                  className="pointer-events-none absolute bottom-0 inset-x-0 z-10"
                  style={{ height: 110, background: 'linear-gradient(to bottom, transparent, rgba(10,20,80,0.90))' }}
                />
                <div className="creator-hero-phone absolute bottom-0 w-full flex justify-center">
                  <PhoneFrame screenBg="#000">
                    <VideoCarouselScreen />
                  </PhoneFrame>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

      </section>

      {/* 2. HOW IT WORKS ─────────────────────────────────────────────────────── */}
      <section data-section="how-it-works" id="how-it-works" className="py-12 md:py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-8 md:mb-14 flex flex-col items-start text-left md:items-center md:text-center gap-4">
            <motion.div variants={fadeUp}><SectionLabel>How it works</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              From content to cash <br className="max-md:hidden" />fully structured.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base text-[#4A4A6A] md:max-w-[440px]"
              style={{ lineHeight: 1.6 }}>
              Four steps, fully structured. No chasing, no surprises — just clear briefs and automatic payments.
            </motion.p>
          </motion.div>

          {/* 2×2 editorial bento */}
          <ScrollCarousel count={4} gridClass="md:grid-cols-2">
            {[
              {
                step: '01', accent: '#7C3BED', bgTint: 'rgba(124,59,237,0.05)', border: 'rgba(124,59,237,0.14)',
                label: 'Browse the marketplace', tag: 'DISCOVERY',
                description: 'Discover campaigns curated for you, all in one place. Every campaign shows full requirements before you apply.',
                imgSrc: '/images/creators/app-campaign-detail.png',
                cfg: { top: 60, left: 0, right: 0, bottom: 0, scale: 105, x: 4, y: -7 },
              },
              {
                step: '02', accent: '#00A050', bgTint: 'rgba(0,160,80,0.05)', border: 'rgba(0,160,80,0.14)',
                label: 'Connect & apply', tag: 'APPLICATION',
                description: 'Link your social accounts to unlock your access to campaign feed and enable performance tracking. Varmply handles the reporting, you do the chilling.',
                imgSrc: '/images/creators/app-connect-platforms.png',
                cfg: { top: 60, left: 6, right: 6, bottom: 0, scale: 100, x: -7, y: 0 },
              },
              {
                step: '03', accent: '#D97706', bgTint: 'rgba(217,119,6,0.05)', border: 'rgba(217,119,6,0.14)',
                label: 'Submit your content', tag: 'DELIVERY',
                description: 'Create content that matches the campaign brief, post it, then drop your link. From there, Varmply handles the heavy lifting—tracking, verification, and everything in between.',
                imgSrc: '/images/creators/app-submit-post.png',
                cfg: { top: 60, left: 0, right: 0, bottom: 0, scale: 103, x: 0, y: 0 },
              },
              {
                step: '04', accent: '#2563EB', bgTint: 'rgba(37,99,235,0.05)', border: 'rgba(37,99,235,0.14)',
                label: 'Result-backed earnings', tag: 'EARNINGS',
                description: 'Your earnings are tied directly to the results you generate. At the end of each campaign, you receive payment based on the total value of engagement you delivered.',
                imgSrc: '/images/creators/app-earnings-mobile.png',
                cfg: { top: 60, left: 0, right: 0, bottom: 0, scale: 100, x: 0, y: -7 },
              },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto self-stretch flex flex-col">
                <div className="relative overflow-hidden rounded-[32px] flex flex-col flex-1"
                  style={{ background: s.bgTint, border: `1px solid ${s.border}`, minHeight: 700 }}>
                  {/* Ghost step number */}
                  <span className="absolute -bottom-6 -right-2 font-black select-none pointer-events-none leading-none"
                    style={{ fontSize: '13rem', color: s.accent, opacity: 0.055, letterSpacing: '-0.06em' }}>
                    {s.step}
                  </span>
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top rule bar */}
                    <div className="flex items-center justify-between px-8 pt-6 pb-4"
                      style={{ borderBottom: `1px solid ${s.border}` }}>
                      <span className="text-[9px] font-black uppercase tracking-[0.22em]"
                        style={{ color: s.accent }}>Step {s.step}</span>
                      <span className="text-[9px] font-black uppercase tracking-[0.22em]"
                        style={{ color: `${s.accent}60` }}>— {s.tag}</span>
                    </div>
                    <div className="px-8 pt-7 pb-0 flex-1 flex flex-col">
                      <h3 className="font-black text-[#0F0F1A] tracking-tight mb-3"
                        style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.15 }}>{s.label}</h3>
                      <p className="text-sm text-[#4A4A6A] leading-relaxed" style={{ maxWidth: 340 }}>{s.description}</p>
                    </div>
                    {/* Baked phone visual — physical resize, not CSS scale */}
                    {/* Mobile — keep existing dimensions */}
                    <div className="md:hidden mt-8 relative h-[420px] w-full flex justify-center overflow-hidden pointer-events-none">
                      <div className="absolute top-0 flex justify-center">
                        <PhoneFrame screenBg="#FFFFFF" frameWidth={260}>
                          <div className="absolute overflow-hidden"
                            style={{ top: s.cfg.top, left: s.cfg.left, right: s.cfg.right, bottom: s.cfg.bottom }}>
                            <div style={{ transform: `scale(${s.cfg.scale / 100}) translate(${s.cfg.x}px, ${s.cfg.y}px)`, transformOrigin: 'top center', width: '100%' }}>
                              <Image src={s.imgSrc} alt={s.label} width={390} height={844} className="w-full h-auto" />
                            </div>
                          </div>
                        </PhoneFrame>
                      </div>
                    </div>
                    {/* Desktop — larger phone, shorter container */}
                    <div className="hidden md:flex mt-8 -mx-8 relative h-[440px] w-[calc(100%+64px)] justify-center overflow-hidden pointer-events-none">
                      <div className="absolute top-0 flex justify-center">
                        <PhoneFrame screenBg="#FFFFFF" frameWidth={310}>
                          <div className="absolute overflow-hidden"
                            style={{ top: s.cfg.top, left: s.cfg.left, right: s.cfg.right, bottom: s.cfg.bottom }}>
                            <div style={{ transform: `scale(${s.cfg.scale / 100}) translate(${s.cfg.x}px, ${s.cfg.y}px)`, transformOrigin: 'top center', width: '100%' }}>
                              <Image src={s.imgSrc} alt={s.label} width={390} height={844} className="w-full h-auto" />
                            </div>
                          </div>
                        </PhoneFrame>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </ScrollCarousel>
        </div>
      </section>

      {/* 3. CREATOR COMMUNITY ────────────────────────────────────────────────── */}
      <section data-section="creator-community" className="py-12 md:py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Split header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-8 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.div variants={fadeUp}><SectionLabel>Community</SectionLabel></motion.div>
              <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
                Real creators. <br className="max-md:hidden" />Real payouts.
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} className="flex gap-8 md:gap-10 md:pb-1 shrink-0">
              {[
                { value: 'Early', label: 'Access open' },
                { value: '100%', label: 'Escrow-backed' },
                { value: '48h', label: 'Payout target' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-black leading-none"
                    style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', color: '#0F0F1A' }}>{s.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest mt-1.5"
                    style={{ color: '#AAAABC' }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Video grid */}
          <ScrollCarousel count={3} gridClass="md:grid-cols-3">
            {[
              { imageSrc: '/images/creators/creator-1.jpg', subcaption: 'Joining early · TikTok', chips: [{ label: '120K followers', position: 'top-left' as const, variant: 'dark' as const }] },
              { imageSrc: '/images/creators/creator-2.jpg', subcaption: 'Joining early · Instagram', chips: [{ label: '88K followers', position: 'top-left' as const, variant: 'dark' as const }] },
              { imageSrc: '/images/creators/creator-3.jpg', subcaption: 'Joining early · TikTok', chips: [{ label: '54K followers', position: 'top-left' as const, variant: 'dark' as const }] },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="shrink-0 w-[72vw] snap-start md:w-auto">
                <VideoCard {...item} aspectRatio="4/5" surface="light" showGradient hoverable />
              </motion.div>
            ))}
          </ScrollCarousel>

          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
            className="text-center mt-10 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: '#BBBBCC' }}>
            All figures verified automatically — no self-reporting
          </motion.p>
        </div>
      </section>

      {/* 5 (was 4). WALLET & EARNINGS ──────────────────────────────────────────── */}
      <section data-section="creator-wallet" className="py-12 md:py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Split header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-8 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.div variants={fadeUp}><SectionLabel>Wallet & Earnings</SectionLabel></motion.div>
              <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
                Your earnings, <br className="max-md:hidden" />always transparent.
              </motion.h2>
            </div>
            <motion.p variants={fadeUp}
              className="text-base text-[#4A4A6A] md:max-w-xs md:text-right md:pb-1"
              style={{ lineHeight: 1.6 }}>
              Every naira tracked and timestamped. No more chasing sponsors or waiting on spreadsheets.
            </motion.p>
          </motion.div>

          {/* Big browser card — green editorial */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
            className="relative overflow-hidden rounded-[28px] mb-4"
            style={{ background: 'rgba(124,59,237,0.05)', border: '1.5px solid rgba(124,59,237,0.14)' }}>
            <div className="relative z-10">
              {/* Top rule bar */}
              <div className="flex items-center justify-between px-8 md:px-10 pt-6 pb-4"
                style={{ borderBottom: '1px solid rgba(124,59,237,0.12)' }}>
                <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#7C3BED' }}>
                  Creator Wallet
                </span>
                <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: '#7C3BED' }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: '#7C3BED' }} />
                  Live balance
                </span>
              </div>
              <div className="px-6 md:px-10 pt-7 pb-6 md:pb-8">
                <p className="font-black text-[#0F0F1A] tracking-tight mb-0"
                  style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.15 }}>
                  Automatic payouts the moment <br className="max-md:hidden" /> your content is validated.
                </p>
              </div>
              {/* Mobile version */}
              <div className="md:hidden -mb-8 mt-2">
                <StaticPhone
                  imgSrc="/images/creators/app-earnings-mobile.png"
                  alt="Earnings"
                  frameWidth={280}
                  cfg={{ top: 60, left: 6, right: 6, bottom: 0, scale: 0.96, x: 0, y: -50 }}
                />
              </div>
              {/* Desktop image — left padding only, bleeds off right edge */}
              <div className="hidden md:block pl-6 md:pl-10">
                <div className="relative overflow-hidden rounded-tl-xl">
                  {/* Styled browser chrome */}
                  <div style={{
                    background: 'linear-gradient(180deg, #1C1528 0%, #160F22 100%)',
                    borderBottom: '1px solid rgba(124,59,237,0.25)',
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                    {/* Traffic lights */}
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                      {[
                        { color: '#FF5F57', glow: 'rgba(255,95,87,0.5)' },
                        { color: '#FFBD2E', glow: 'rgba(255,189,46,0.5)' },
                        { color: '#28C840', glow: 'rgba(40,200,64,0.5)' },
                      ].map(({ color, glow }) => (
                        <span key={color} style={{
                          display: 'block', width: 11, height: 11, borderRadius: '50%',
                          background: color,
                          boxShadow: `0 0 6px 1px ${glow}`,
                        }} />
                      ))}
                    </div>
                    {/* Nav arrows */}
                    <div style={{ display: 'flex', gap: 4 }}>
                      {['‹', '›'].map((a, i) => (
                        <span key={i} style={{ fontSize: 14, lineHeight: 1, color: i === 0 ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.5)', fontWeight: 600, userSelect: 'none' }}>{a}</span>
                      ))}
                    </div>
                    {/* URL pill */}
                    <div style={{
                      flex: 1,
                      display: 'flex', alignItems: 'center', gap: 6,
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(124,59,237,0.3)',
                      borderRadius: 8,
                      padding: '5px 10px',
                    }}>
                      {/* Lock */}
                      <svg width="10" height="11" viewBox="0 0 10 11" fill="none">
                        <rect x="1.5" y="4.5" width="7" height="6" rx="1.5" stroke="rgba(124,59,237,0.9)" strokeWidth="1.2"/>
                        <path d="M3 4.5V3a2 2 0 1 1 4 0v1.5" stroke="rgba(124,59,237,0.9)" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                      {/* Favicon */}
                      <Image src="/images/logo-symbol.png" alt="" width={14} height={14} style={{ flexShrink: 0, mixBlendMode: 'screen' }} />
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.65)', fontFamily: 'monospace', letterSpacing: '0.02em', flex: 1 }}>
                        app.varmply.com<span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>/wallet</span>
                      </span>
                    </div>
                    {/* Spacer for symmetry */}
                    <div style={{ width: 40 }} />
                  </div>
                  <div className="bg-[#FAFAFA] overflow-hidden relative" style={{ height: 340 }}>
                    <div className="absolute inset-0 flex items-start justify-center overflow-hidden">
                      <div style={{ width: '100%' }}>
                        <Image src="/images/creators/app-earnings-desktop.png" alt="Earnings dashboard" width={1440} height={900} className="w-full h-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3 wallet feature cards */}
          <ScrollCarousel count={3} gridClass="md:grid-cols-3">
            {[
              {
                accent: '#00A050', bgTint: 'rgba(0,160,80,0.05)', border: 'rgba(0,160,80,0.14)',
                Icon: DollarSign, label: 'Instant Payouts',
                title: "Paid the moment you're validated.",
                desc: 'Funds release from escrow automatically. No chasing, no waiting on a sponsor to log in.',
                stats: [{ val: '24–72h', label: 'Avg. payout' }, { val: '100%', label: 'Automated' }],
              },
              {
                accent: '#7C3BED', bgTint: 'rgba(124,59,237,0.05)', border: 'rgba(124,59,237,0.14)',
                Icon: Zap, label: 'Escrow Guarantee',
                title: 'Budget locked before you apply.',
                desc: 'Sponsor funds are in escrow before the campaign goes live. If you deliver, you get paid. Full stop.',
                stats: [{ val: '₦0', label: 'Ghosted payouts' }, { val: '100%', label: 'Pre-secured' }],
              },
              {
                accent: '#D97706', bgTint: 'rgba(217,119,6,0.05)', border: 'rgba(217,119,6,0.14)',
                Icon: Search, label: 'Full Transparency',
                title: 'Every naira tracked.',
                desc: 'See your pending earnings, released funds, and full transaction history. Nothing hidden.',
                stats: [{ val: '0', label: 'Hidden fees' }, { val: 'Live', label: 'Balance' }],
              },
            ].map((f, i) => (
              <motion.div key={i} variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto self-stretch flex flex-col">
                <div className="relative overflow-hidden rounded-[28px] flex flex-col flex-1"
                  style={{ background: f.bgTint, border: `1.5px solid ${f.border}`, minHeight: 260 }}>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between px-7 pt-5 pb-4"
                      style={{ borderBottom: `1px solid ${f.border}` }}>
                      <span className="text-[9px] font-black uppercase tracking-[0.22em]"
                        style={{ color: f.accent }}>{f.label}</span>
                      <div className="h-6 w-6 rounded-lg flex items-center justify-center"
                        style={{ background: `${f.accent}15` }}>
                        <f.Icon size={13} style={{ color: f.accent }} />
                      </div>
                    </div>
                    <div className="flex-1 px-7 pt-6 pb-4">
                      <h3 className="font-black text-[#0F0F1A] tracking-tight mb-3"
                        style={{ fontSize: 'clamp(16px, 1.5vw, 19px)', lineHeight: 1.2 }}>{f.title}</h3>
                      <p className="text-sm text-[#4A4A6A] leading-relaxed">{f.desc}</p>
                    </div>
                    <div className="grid grid-cols-2" style={{ borderTop: `1px solid ${f.border}` }}>
                      {f.stats.map((s, j) => (
                        <div key={j} className="py-3.5 text-center"
                          style={{ borderRight: j === 0 ? `1px solid ${f.border}` : 'none' }}>
                          <p className="font-black text-sm leading-none" style={{ color: f.accent }}>{s.val}</p>
                          <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1"
                            style={{ color: `${f.accent}60` }}>{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </ScrollCarousel>
        </div>
      </section>

      {/* 5. WHY VARMPLY ──────────────────────────────────────────────────────── */}
      <section data-section="creator-why" className="py-12 md:py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-8 md:mb-14 flex flex-col items-start text-left md:items-center md:text-center gap-4">
            <motion.div variants={fadeUp}><SectionLabel>Why Varmply</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              Built around <br className="max-md:hidden" />accountability.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-[#4A4A6A] md:max-w-[420px]"
              style={{ lineHeight: 1.6 }}>
              No vague requirements. No missing payouts. Built to give creators peace of mind from day one.
            </motion.p>
          </motion.div>

          {/* 3 editorial trust cards */}
          <ScrollCarousel count={3} gridClass="md:grid-cols-3">

            {/* Card 1 — Clear Rules · crosshatch */}
            <motion.div variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto self-stretch flex flex-col">
              <div className="relative overflow-hidden rounded-[28px] flex flex-col flex-1"
                style={{ background: 'rgba(124,59,237,0.05)', border: '1.5px solid rgba(124,59,237,0.14)', minHeight: 380 }}>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between px-7 pt-6 pb-4"
                    style={{ borderBottom: '1px solid rgba(124,59,237,0.12)' }}>
                    <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#7C3BED' }}>Rules</span>
                    <Zap size={12} style={{ color: '#7C3BED' }} />
                  </div>
                  <div className="flex-1 px-7 pt-8 pb-4 flex flex-col">
                    <p className="font-black leading-none mb-1"
                      style={{ fontSize: 'clamp(52px, 6vw, 72px)', color: '#7C3BED', letterSpacing: '-0.04em' }}>100%</p>
                    <p className="text-[13px] font-black uppercase tracking-[0.12em] mb-8"
                      style={{ color: '#7C3BED' }}>Clear upfront</p>
                    <div className="h-px mb-6" style={{ background: 'rgba(124,59,237,0.14)' }} />
                    <h3 className="font-bold text-base mb-2 text-[#0F0F1A]">Clear rules upfront</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed flex-1">
                      Every campaign shows exactly what&apos;s required before you commit. No hidden clauses, no last-minute surprises.
                    </p>
                  </div>
                  <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(124,59,237,0.12)' }}>
                    {[{ val: '0', label: 'Hidden terms' }, { val: 'Pre-read', label: 'Brief' }].map((s, j) => (
                      <div key={j} className="py-4 text-center"
                        style={{ borderRight: j === 0 ? '1px solid rgba(124,59,237,0.10)' : 'none' }}>
                        <p className="font-black text-sm leading-none" style={{ color: '#7C3BED' }}>{s.val}</p>
                        <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1" style={{ color: 'rgba(124,59,237,0.45)' }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 — Verified Payouts · dot grid */}
            <motion.div variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto self-stretch flex flex-col">
              <div className="relative overflow-hidden rounded-[28px] flex flex-col flex-1"
                style={{ background: 'rgba(0,160,80,0.05)', border: '1.5px solid rgba(0,160,80,0.14)', minHeight: 380 }}>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between px-7 pt-6 pb-4"
                    style={{ borderBottom: '1px solid rgba(0,160,80,0.12)' }}>
                    <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#00A050' }}>Payouts</span>
                    <CheckCircle size={12} style={{ color: '#00A050' }} />
                  </div>
                  <div className="flex-1 px-7 pt-8 pb-4 flex flex-col">
                    <p className="font-black leading-none mb-1"
                      style={{ fontSize: 'clamp(52px, 6vw, 72px)', color: '#00A050', letterSpacing: '-0.04em' }}>98%</p>
                    <p className="text-[13px] font-black uppercase tracking-[0.12em] mb-8"
                      style={{ color: '#00A050' }}>On-time payouts</p>
                    <div className="h-px mb-6" style={{ background: 'rgba(0,160,80,0.14)' }} />
                    <h3 className="font-bold text-base mb-2 text-[#0F0F1A]">Verified payouts</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed flex-1">
                      Sponsor money is locked in escrow before campaigns go live. If you deliver, you get paid. No exceptions.
                    </p>
                  </div>
                  <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(0,160,80,0.12)' }}>
                    {[{ val: '100%', label: 'Escrow-backed' }, { val: '48h', label: 'Payout target' }].map((s, j) => (
                      <div key={j} className="py-4 text-center"
                        style={{ borderRight: j === 0 ? '1px solid rgba(0,160,80,0.10)' : 'none' }}>
                        <p className="font-black text-sm leading-none" style={{ color: '#00A050' }}>{s.val}</p>
                        <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1" style={{ color: 'rgba(0,160,80,0.45)' }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 — One Place · horizontal rules */}
            <motion.div variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto self-stretch flex flex-col">
              <div className="relative overflow-hidden rounded-[28px] flex flex-col flex-1"
                style={{ background: 'rgba(217,119,6,0.05)', border: '1.5px solid rgba(217,119,6,0.14)', minHeight: 380 }}>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between px-7 pt-6 pb-4"
                    style={{ borderBottom: '1px solid rgba(217,119,6,0.12)' }}>
                    <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: '#D97706' }}>Platform</span>
                    <ArrowRight size={12} style={{ color: '#D97706' }} />
                  </div>
                  <div className="flex-1 px-7 pt-8 pb-4 flex flex-col">
                    <p className="font-black leading-none mb-1"
                      style={{ fontSize: 'clamp(52px, 6vw, 72px)', color: '#D97706', letterSpacing: '-0.04em' }}>1</p>
                    <p className="text-[13px] font-black uppercase tracking-[0.12em] mb-8"
                      style={{ color: '#D97706' }}>Place for everything</p>
                    <div className="h-px mb-6" style={{ background: 'rgba(217,119,6,0.14)' }} />
                    <h3 className="font-bold text-base mb-2 text-[#0F0F1A]">One place for all</h3>
                    <p className="text-sm text-[#4A4A6A] leading-relaxed flex-1">
                      Browse, apply, submit, and get paid without switching tools. Your entire creator workflow in one structured platform.
                    </p>
                  </div>
                  <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(217,119,6,0.12)' }}>
                    {[{ val: '4', label: 'Platforms' }, { val: '0', label: 'Extra tools' }].map((s, j) => (
                      <div key={j} className="py-4 text-center"
                        style={{ borderRight: j === 0 ? '1px solid rgba(217,119,6,0.10)' : 'none' }}>
                        <p className="font-black text-sm leading-none" style={{ color: '#D97706' }}>{s.val}</p>
                        <p className="text-[8px] font-bold uppercase tracking-[0.18em] mt-1" style={{ color: 'rgba(217,119,6,0.45)' }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </ScrollCarousel>

          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
            className="text-center mt-10 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: '#BBBBCC' }}>
            Free for creators — we charge sponsors, not you
          </motion.p>
        </div>
      </section>

      {/* 7. TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section data-section="creator-testimonials" className="py-12 md:py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="flex flex-col items-start text-left md:items-center md:text-center mb-8 md:mb-14 gap-4">
            <motion.div variants={fadeUp}><SectionLabel>Testimonials</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              Creators who <br />get paid on time.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-[#4A4A6A] md:max-w-[420px]" style={{ lineHeight: 1.6 }}>
              Real experiences from verified creators on Varmply.
            </motion.p>
          </motion.div>

          <ScrollCarousel count={3} gridClass="md:grid-cols-3">
            {[
              {
                name: 'Tolu Adeyemi', handle: 'toluade_', initials: 'T', accent: '#7C3BED',
                bgTint: 'rgba(124,59,237,0.05)', border: 'rgba(124,59,237,0.14)',
                role: 'Content Creator',
                text: "Finally a platform that actually pays. I used to get ghosted after posting. With Varmply, there's an escrow — my ₦25K was in my wallet within 48 hours.",
              },
              {
                name: 'Dami Oluwole', handle: 'dami.creates', initials: 'D', accent: '#00A050',
                bgTint: 'rgba(0,160,80,0.05)', border: 'rgba(0,160,80,0.14)',
                role: 'UGC Creator',
                text: "The eligibility system is underrated. I don't waste time applying for campaigns I won't get. Varmply only shows me what I qualify for.",
              },
              {
                name: 'Sarah Jenkins', handle: 'sarah.j', initials: 'S', accent: '#E11D48',
                bgTint: 'rgba(225,29,72,0.05)', border: 'rgba(225,29,72,0.14)',
                role: 'Lifestyle Creator',
                text: "Finally a platform that treats creators like professionals. The brief was clear, the timeline was fair, and the payment came through exactly as promised.",
              },
              {
                name: 'Chidi Eze', handle: 'chidieze_', initials: 'C', accent: '#2563EB',
                bgTint: 'rgba(37,99,235,0.05)', border: 'rgba(37,99,235,0.14)',
                role: 'Brand Creator',
                text: "I was skeptical at first. But the campaign requirements were so clear — no back-and-forth with the brand. I posted, hit the metrics, got validated. Done.",
              },
              {
                name: 'Marcus Thorne', handle: 'marcus_t', initials: 'M', accent: '#0891B2',
                bgTint: 'rgba(8,145,178,0.05)', border: 'rgba(8,145,178,0.14)',
                role: 'Creator',
                text: "The escrow system removed so much anxiety from the process. I knew from day one that if I delivered the work, the money would be there. No chasing required.",
              },
              {
                name: 'Kemi Ade', handle: 'keminade_', initials: 'K', accent: '#D97706',
                bgTint: 'rgba(217,119,6,0.05)', border: 'rgba(217,119,6,0.14)',
                role: 'UGC Creator',
                text: "Every campaign I've done on Varmply paid exactly what was promised. The verified metrics mean I can't be shorted — the numbers are right there for everyone to see.",
              },
            ].map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="shrink-0 w-[82vw] snap-start md:w-auto h-full">
                <div className="relative overflow-hidden rounded-[28px] flex flex-col h-full"
                  style={{ background: t.bgTint, border: `1.5px solid ${t.border}`, minHeight: 280 }}>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between px-7 pt-5 pb-4" style={{ borderBottom: `1px solid ${t.border}` }}>
                      <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: t.accent }}>@{t.handle}</span>
                      <div className="flex items-center gap-0.5">
                        {Array(5).fill(0).map((_, s) => <Star key={s} size={9} fill={t.accent} color={t.accent} />)}
                      </div>
                    </div>
                    <div className="flex-1 px-7 pt-6 pb-4">
                      <p className="text-sm font-semibold leading-relaxed text-[#0F0F1A]">&ldquo;{t.text}&rdquo;</p>
                    </div>
                    <div className="flex items-center gap-3 px-7 py-4" style={{ borderTop: `1px solid ${t.border}` }}>
                      <div className="h-8 w-8 rounded-lg shrink-0 flex items-center justify-center font-black text-xs text-white"
                        style={{ background: t.accent }}>
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-xs font-black tracking-tight text-[#0F0F1A]">{t.name}</p>
                        <p className="text-[9px] font-bold uppercase tracking-[0.14em] mt-0.5" style={{ color: t.accent }}>{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </ScrollCarousel>
        </div>
      </section>

      {/* 8. FAQ ──────────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-12 md:py-24" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E4EC' }}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={vp}
            className="mb-8 md:mb-14 flex flex-col items-start text-left md:items-center md:text-center gap-4">
            <motion.div variants={fadeUp}><SectionLabel>FAQ</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="font-black text-[#0F0F1A] tracking-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.0 }}>
              Creator questions, <br className="max-md:hidden" />answered.
            </motion.h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={vp} transition={{ duration: 0.5 }}>
            <FAQAccordion items={faqItems} />
          </motion.div>
        </div>
      </section>

    </div>
  );
}
