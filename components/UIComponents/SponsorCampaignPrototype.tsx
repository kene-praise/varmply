'use client';

import { useState, useEffect, useRef, useId, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Tokens ────────────────────────────────────────────────────────────────────
const BG          = '#F5F5F7';
const CARD_BORDER = '#EBEBF2';
const PURPLE      = '#7C3AED';
const DARK        = '#0F0F1A';
const MUTED       = '#6D6D78';
const FONT        = 'system-ui, -apple-system, sans-serif';
const CYCLE_MS    = 5500;

// ── Data ──────────────────────────────────────────────────────────────────────
type Stat = { views: string; engage: string; creators: string; tracked: string };

type Campaign = {
  id: string;
  artist: string;
  title: string;
  platform: 'TIKTOK' | 'INSTAGRAM';
  // Real album cover art from iTunes CDN
  coverImage: string;
  gradient: string;
  stats: Stat;
  submissions: { count: number };
  submission: { creator: string; platform: 'TikTok' | 'Instagram'; video: string };
};

const CAMPAIGNS: Campaign[] = [
  {
    id: 'heis-with-you',
    artist: 'HEIS',
    title: 'With You',
    platform: 'TIKTOK',
    // Rema – HEIS (2024)
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/59/ec/75/59ec75eb-42b0-bf6a-38c7-48013ca1b11e/24UM1IM36412.rgb.jpg/600x600bb.jpg',
    gradient: 'linear-gradient(145deg, #1A1035 0%, #3B2070 100%)',
    stats: { views: '890K', engage: '31K', creators: '24', tracked: '21' },
    submissions: { count: 3 },
    submission: { creator: '@davo_steps', platform: 'TikTok', video: '/videos/creator-4.mp4' },
  },
  {
    id: 'olufire-lagos-summer',
    artist: 'Olu Fire',
    title: 'Lagos Summer',
    platform: 'INSTAGRAM',
    // Ayra Starr – Lagos Summer (2024)
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/51/34/a4513420-3e64-cb94-a34e-8cd14b763add/24UMGIM48938.rgb.jpg/600x600bb.jpg',
    gradient: 'linear-gradient(145deg, #7A2000 0%, #D4500A 100%)',
    stats: { views: '1.2M', engage: '88K', creators: '38', tracked: '35' },
    submissions: { count: 5 },
    submission: { creator: '@temi_creates', platform: 'Instagram', video: '/videos/creator-5.mp4' },
  },
  {
    id: 'burna-afrobeats-nights',
    artist: 'Burna Boy',
    title: 'Afrobeats Nights',
    platform: 'TIKTOK',
    // Burna Boy – I Told Them (2023)
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/01/ee/63/01ee6370-1805-15e4-de8c-293a889a439c/075679676351.jpg/600x600bb.jpg',
    gradient: 'linear-gradient(145deg, #003322 0%, #006644 100%)',
    stats: { views: '2.1M', engage: '156K', creators: '61', tracked: '54' },
    submissions: { count: 8 },
    submission: { creator: '@chukwu_dances', platform: 'TikTok', video: '/videos/creator-6.mp4' },
  },
];

// ── Count-up ──────────────────────────────────────────────────────────────────
function parseVal(v: string): { raw: number; suffix: string } {
  if (v.endsWith('M')) return { raw: parseFloat(v) * 1_000_000, suffix: 'M' };
  if (v.endsWith('K')) return { raw: parseFloat(v) * 1_000, suffix: 'K' };
  return { raw: parseInt(v, 10), suffix: '' };
}

function fmtVal(n: number, suffix: string): string {
  if (suffix === 'M') return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (suffix === 'K') return Math.round(n / 1_000) + 'K';
  return String(Math.round(n));
}

function useCountUp(target: string, campaignId: string): string {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const { raw: end, suffix } = parseVal(target);
    const duration = 750;
    const startTime = performance.now();
    let raf: number;

    const frame = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(fmtVal(eased * end, suffix));
      if (t < 1) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campaignId]);

  return display;
}

// ── Stat config ───────────────────────────────────────────────────────────────
const STAT_META = [
  { key: 'views'    as const, label: 'VIEWS',    dot: 'rgba(147,197,253,1)'  },
  { key: 'engage'   as const, label: 'ENGAGE',   dot: 'rgba(196,181,253,1)'  },
  { key: 'creators' as const, label: 'CREATORS', dot: 'rgba(110,231,183,1)'  },
  { key: 'tracked'  as const, label: 'TRACKED',  dot: 'rgba(252,211,77,1)'   },
];

// ── Icons ─────────────────────────────────────────────────────────────────────
const TikTokIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="white">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.16 8.16 0 0 0 4.77 1.52V6.82a4.85 4.85 0 0 1-1-.13z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.856.601 3.698 1.942 5.038 1.34 1.341 3.182 1.857 5.038 1.942C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.856-.085 3.698-.601 5.038-1.942 1.341-1.34 1.857-3.182 1.942-5.038C23.986 15.668 24 15.259 24 12s-.014-3.667-.072-4.947c-.085-1.857-.601-3.699-1.942-5.039C20.646.673 18.804.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const HomeIcon    = ({ c }: { c: string }) => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V9.5z"/></svg>;
const CampIcon    = ({ c }: { c: string }) => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>;
const WalletIcon  = ({ c }: { c: string }) => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h16v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7"/><circle cx="17" cy="13" r="1"/></svg>;
const MoreIcon    = ({ c }: { c: string }) => <svg width="15" height="15" viewBox="0 0 24 24" fill={c}><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>;

// ── Stat card (inside banner, glass style) ────────────────────────────────────
function GlassStatCard({ meta, value, campaignId, index }: {
  meta: typeof STAT_META[number];
  value: string;
  campaignId: string;
  index: number;
}) {
  const count = useCountUp(value, campaignId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.055, type: 'spring', stiffness: 420, damping: 28 }}
      style={{
        background: 'rgba(0,0,0,0.38)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.14)',
        borderRadius: 10,
        padding: '6px 9px 7px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top shine */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: meta.dot, display: 'inline-block', flexShrink: 0 }} />
        <span style={{ fontSize: 6.5, fontWeight: 800, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>
          {meta.label}
        </span>
      </div>

      <div style={{
        fontSize: 16, fontWeight: 900,
        letterSpacing: '-0.02em', lineHeight: 1,
        color: 'white',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {count}
      </div>

      {/* Sweep bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: index * 0.055 + 0.18, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 2, background: meta.dot, opacity: 0.55,
          transformOrigin: 'left',
        }}
      />
    </motion.div>
  );
}

// ── Campaign banner (image + stats inside) ────────────────────────────────────
function CampaignBanner({ campaign }: { campaign: Campaign }) {
  const uid = useId().replace(/:/g, '');
  const patId = `dots-${uid}`;
  const stats = campaign.stats;
  const statValues = [stats.views, stats.engage, stats.creators, stats.tracked];

  return (
    <div style={{
      margin: '8px 10px 0',
      height: 195,
      borderRadius: 18,
      background: campaign.gradient,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 6px 24px rgba(0,0,0,0.22)',
    }}>
      {/* Cover art image */}
      <img
        src={campaign.coverImage}
        alt=""
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          opacity: 0.72,
        }}
      />

      {/* Dot texture overlay */}
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none' }}>
        <defs>
          <pattern id={patId} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patId})`} />
      </svg>

      {/* Gradient scrim — heavier at bottom for legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.28) 38%, rgba(0,0,0,0.72) 100%)',
      }} />

      {/* Live badge + artist — top left */}
      <div style={{ position: 'absolute', top: 11, left: 12, display: 'flex', alignItems: 'center', gap: 7, zIndex: 2 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          padding: '2px 7px', borderRadius: 999,
          background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)',
        }}>
          <motion.span
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ADE80', display: 'inline-block' }}
          />
          <span style={{ color: 'white', fontSize: 7.5, fontWeight: 800, letterSpacing: '0.05em' }}>Live</span>
        </span>
        <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          {campaign.artist}
        </span>
      </div>

      {/* Campaign title — sits just above stat grid */}
      <div style={{ position: 'absolute', left: 12, right: 12, bottom: 86, zIndex: 2 }}>
        <div style={{ color: 'white', fontSize: 17, fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.05, textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
          {campaign.title}
        </div>
      </div>

      {/* 2×2 glass stat grid — inside banner, bottom */}
      <div style={{
        position: 'absolute', left: 12, right: 12, bottom: 11, zIndex: 2,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6,
      }}>
        <AnimatePresence mode="wait">
          {STAT_META.map((meta, i) => (
            <GlassStatCard
              key={`${campaign.id}-${meta.key}`}
              meta={meta}
              value={statValues[i]}
              campaignId={campaign.id}
              index={i}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── Tabs ──────────────────────────────────────────────────────────────────────
function Tabs() {
  return (
    <div style={{ margin: '10px 12px 0', display: 'flex', gap: 16, borderBottom: `1px solid ${CARD_BORDER}` }}>
      {(['Overview', 'Submissions', 'Creators'] as const).map((t) => {
        const isActive = t === 'Submissions';
        return (
          <div key={t} style={{
            fontSize: 11, fontWeight: isActive ? 800 : 600,
            color: isActive ? DARK : MUTED,
            padding: '5px 0',
            borderBottom: isActive ? `2.5px solid ${PURPLE}` : '2.5px solid transparent',
            marginBottom: -1,
          }}>
            {t}
          </div>
        );
      })}
    </div>
  );
}

// ── Filter pills ──────────────────────────────────────────────────────────────
function FilterPills({ count }: { count: number }) {
  const pills = [`All (${count})`, 'Action Required', 'Verifying'];
  return (
    <div style={{ display: 'flex', gap: 5, marginTop: 7, paddingInline: 12, overflow: 'hidden' }}>
      {pills.map((p, i) => (
        <div key={p} style={{
          padding: '4px 9px', borderRadius: 999,
          fontSize: 9, fontWeight: 700,
          background: i === 0 ? DARK : 'white',
          color: i === 0 ? 'white' : MUTED,
          border: i === 0 ? `1px solid ${DARK}` : `1px solid ${CARD_BORDER}`,
          whiteSpace: 'nowrap', flexShrink: 0,
        }}>
          {p}
        </div>
      ))}
    </div>
  );
}

// ── Full-bleed submission video ───────────────────────────────────────────────
function SubmissionVideo({ campaign }: { campaign: Campaign }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    const p = v.play();
    if (p) p.catch(() => {});
  }, [campaign.id]);

  const isTikTok = campaign.submission.platform === 'TikTok';

  return (
    <div style={{ marginTop: 10 }}>
      {/* Full-bleed video — no side margins, no border, no card */}
      <div style={{ position: 'relative', height: 190, background: '#000', overflow: 'hidden' }}>
        <video
          ref={videoRef}
          src={campaign.submission.video}
          autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Platform badge */}
        <div style={{
          position: 'absolute', top: 9, left: 12,
          display: 'inline-flex', alignItems: 'center', gap: 5,
          padding: '4px 9px', borderRadius: 999,
          background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)',
          color: 'white', fontSize: 9.5, fontWeight: 700,
        }}>
          {isTikTok ? <TikTokIcon /> : <InstagramIcon />}
          {campaign.submission.platform}
        </div>

        {/* Bottom scrim for meta */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 56,
          background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)',
        }} />

        {/* Creator + status overlaid on video bottom */}
        <div style={{
          position: 'absolute', bottom: 10, left: 12, right: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ fontSize: 11.5, fontWeight: 800, color: 'white' }}>
            {campaign.submission.creator}
          </span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            padding: '3px 9px', borderRadius: 999,
            background: 'rgba(34,197,94,0.22)',
            border: '1px solid rgba(74,222,128,0.35)',
            color: '#4ADE80', fontSize: 9, fontWeight: 800, letterSpacing: '0.05em',
          }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#4ADE80', display: 'inline-block' }} />
            TRACKING
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Bottom nav ────────────────────────────────────────────────────────────────
function BottomNav() {
  const items: { label: string; icon: (c: string) => ReactNode; active?: boolean }[] = [
    { label: 'HOME',      icon: (c) => <HomeIcon c={c} />,   active: true },
    { label: 'CAMPAIGNS', icon: (c) => <CampIcon c={c} />   },
    { label: 'WALLET',    icon: (c) => <WalletIcon c={c} /> },
    { label: 'MORE',      icon: (c) => <MoreIcon c={c} />   },
  ];
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      background: 'white', borderTop: `1px solid ${CARD_BORDER}`,
      display: 'flex', padding: '7px 0 12px',
    }}>
      {items.map((it) => {
        const color = it.active ? PURPLE : MUTED;
        return (
          <div key={it.label} style={{
            flex: 1, display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 3, position: 'relative',
          }}>
            {it.active && (
              <span style={{
                position: 'absolute', top: -7, width: 4, height: 4,
                borderRadius: '50%', background: PURPLE,
              }} />
            )}
            {it.icon(color)}
            <span style={{ fontSize: 7, fontWeight: 700, color, letterSpacing: '0.06em' }}>{it.label}</span>
          </div>
        );
      })}
    </div>
  );
}

// ── Progress dots ─────────────────────────────────────────────────────────────
function ProgressDots({ count, active }: { count: number; active: number }) {
  return (
    <div style={{
      position: 'absolute', bottom: 62, left: 0, right: 0,
      display: 'flex', justifyContent: 'center', gap: 4,
      zIndex: 10, pointerEvents: 'none',
    }}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          animate={{ width: i === active ? 14 : 4, backgroundColor: i === active ? PURPLE : 'rgba(0,0,0,0.15)' }}
          transition={{ duration: 0.3 }}
          style={{ height: 4, borderRadius: 999, display: 'inline-block' }}
        />
      ))}
    </div>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function SponsorCampaignPrototype() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % CAMPAIGNS.length), CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const campaign = CAMPAIGNS[index];

  return (
    <div style={{
      width: '100%', height: '100%',
      background: BG, fontFamily: FONT,
      position: 'relative', overflow: 'hidden', color: DARK,
    }}>
      {/* ── Clears the PhoneFrame status bar + dynamic island ── */}
      <div style={{ height: 60, flexShrink: 0 }} />

      <AnimatePresence mode="wait">
        <motion.div
          key={campaign.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{ paddingBottom: 66 }}
        >
          <CampaignBanner campaign={campaign} />
          <Tabs />

          <div style={{ marginTop: 9, paddingInline: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: PURPLE, display: 'inline-block' }} />
              <span style={{ fontSize: 8.5, fontWeight: 800, color: PURPLE, letterSpacing: '0.11em', textTransform: 'uppercase' }}>
                Submissions
              </span>
            </div>
            <div style={{ fontSize: 12.5, fontWeight: 900, color: DARK, marginTop: 3, letterSpacing: '-0.01em' }}>
              {campaign.submissions.count} posts · filter by status
            </div>
          </div>

          <FilterPills count={campaign.submissions.count} />

          {/* Full-bleed video — outside the padded area */}
          <SubmissionVideo campaign={campaign} />
        </motion.div>
      </AnimatePresence>

      <BottomNav />
      <ProgressDots count={CAMPAIGNS.length} active={index} />
    </div>
  );
}
