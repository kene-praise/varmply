'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft, Eye, Heart, Users, ThumbsUp,
  Play, Share2, MessageCircle, Music2,
} from 'lucide-react';

// ─── Tokens ──────────────────────────────────────────────────────────────────

const T = {
  purple:      '#7C3BED',
  purpleLight: '#F0EBFF',
  blue:        '#1A40B8',
  green:       '#00A050',
  greenLight:  '#E6F8EF',
  amber:       '#D97706',
  amberLight:  '#FEF3C7',
  rose:        '#E11D48',
  roseLight:   '#FFF1F2',
  text:        '#0F0F1A',
  muted:       '#4A4A6A',
  hint:        '#A0A0BA',
  border:      '#E4E4EC',
  borderSoft:  '#F0F0F5',
  surface:     '#FFFFFF',
  surface2:    '#F7F7F9',
} as const;

const CARD = {
  background:  T.surface,
  border:      `1px solid ${T.border}`,
  borderRadius: 10,
  boxShadow:   '0 1px 3px rgba(0,0,0,0.05)',
} as const;

// ─── Campaigns ───────────────────────────────────────────────────────────────

interface CampaignVideo {
  creator: string;
  handle:  string;
  views:   string;
  likes:   string;
  thumb:   string;
}

interface Campaign {
  name:       string;
  artist:     string;
  platform:   string;
  accent:     string;
  accentBg:   string;
  headerImg:  string;
  stats:      { impressions: string; engagement: string; creators: string; approved: string };
  videos:     CampaignVideo[];
  featured:   number;
}

const CAMPAIGNS: Campaign[] = [
  {
    name:      'With You Album',
    artist:    'HEIS',
    platform:  'TikTok',
    accent:    '#7C3BED',
    accentBg:  '#F0EBFF',
    headerImg: 'https://picsum.photos/seed/concert77/400/180',
    stats:     { impressions: '890K', engagement: '46K', creators: '24', approved: '20' },
    videos: [
      { creator: 'Tunde Bakare',   handle: '@tunde_b',   views: '89.1K', likes: '7.2K', thumb: 'https://picsum.photos/seed/creator03/300/500' },
      { creator: 'Adeola Grace',   handle: '@adeola_g',  views: '44.2K', likes: '3.1K', thumb: 'https://picsum.photos/seed/creator01/300/500' },
      { creator: 'David Okonkwo',  handle: '@david_ok',  views: '31.8K', likes: '2.4K', thumb: 'https://picsum.photos/seed/creator02/300/500' },
    ],
    featured: 0,
  },
  {
    name:      'Lagos Summer',
    artist:    'Rema',
    platform:  'Instagram',
    accent:    '#E11D48',
    accentBg:  '#FFF1F2',
    headerImg: 'https://picsum.photos/seed/stage55/400/180',
    stats:     { impressions: '1.2M', engagement: '91K', creators: '38', approved: '31' },
    videos: [
      { creator: 'Chioma Eze',     handle: '@chioma_ez', views: '55.0K', likes: '5.1K', thumb: 'https://picsum.photos/seed/creator04/300/500' },
      { creator: 'Femi Adeyemi',   handle: '@femi_ade',  views: '38.4K', likes: '3.8K', thumb: 'https://picsum.photos/seed/creator05/300/500' },
      { creator: 'Ngozi Obi',      handle: '@ngozi_obi', views: '27.1K', likes: '2.0K', thumb: 'https://picsum.photos/seed/creator06/300/500' },
    ],
    featured: 0,
  },
  {
    name:      'Afrobeats Nights',
    artist:    'Burna Boy',
    platform:  'TikTok',
    accent:    '#059669',
    accentBg:  '#ECFDF5',
    headerImg: 'https://picsum.photos/seed/nightstage9/400/180',
    stats:     { impressions: '2.1M', engagement: '158K', creators: '61', approved: '47' },
    videos: [
      { creator: 'Kola Martins',   handle: '@kola_m',    views: '112K',  likes: '11K',  thumb: 'https://picsum.photos/seed/creator07/300/500' },
      { creator: 'Amaka Uzor',     handle: '@amaka_uz',  views: '84.0K', likes: '7.8K', thumb: 'https://picsum.photos/seed/creator08/300/500' },
      { creator: 'Bayo Williams',  handle: '@bayo_w',    views: '63.2K', likes: '5.5K', thumb: 'https://picsum.photos/seed/creator09/300/500' },
    ],
    featured: 0,
  },
];

// ─── Sequence ─────────────────────────────────────────────────────────────────

type Step = 'overview' | 'submissions' | 'video' | 'skeleton';

const SEQUENCE: Step[] = ['overview', 'skeleton', 'submissions', 'skeleton', 'video', 'skeleton'];

const STEP_DURATION: Record<Step, number> = {
  overview:    2900,
  submissions: 2700,
  video:       2700,
  skeleton:    460,
};

// ─── Skeleton screen ──────────────────────────────────────────────────────────

function Shimmer({ style }: { style: React.CSSProperties }) {
  return (
    <div style={{
      borderRadius: 8,
      background: 'linear-gradient(90deg, #EAEAF2 0%, #F5F5FA 50%, #EAEAF2 100%)',
      backgroundSize: '200% 100%',
      animation: 'proto-shimmer 1.1s ease-in-out infinite',
      ...style,
    }} />
  );
}

function SkeletonScreen() {
  return (
    <div style={{ width: '100%', height: '100%', background: T.surface2, padding: '52px 10px 10px', display: 'flex', flexDirection: 'column', gap: 7, overflow: 'hidden' }}>
      <style>{`@keyframes proto-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
      {/* Nav row */}
      <Shimmer style={{ height: 28, width: 160, borderRadius: 8 }} />
      {/* Hero banner */}
      <Shimmer style={{ height: 88, borderRadius: 10 }} />
      {/* Stats 2×2 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
        {[0, 1, 2, 3].map(i => <Shimmer key={i} style={{ height: 48, borderRadius: 10 }} />)}
      </div>
      {/* Tabs */}
      <Shimmer style={{ height: 32, borderRadius: 8 }} />
      {/* Content rows */}
      <Shimmer style={{ height: 68, borderRadius: 10 }} />
      <Shimmer style={{ height: 52, borderRadius: 10 }} />
      <Shimmer style={{ height: 52, borderRadius: 10 }} />
    </div>
  );
}

// ─── Shared sub-components ────────────────────────────────────────────────────

function HeroBanner({ c, compact = false }: { c: Campaign; compact?: boolean }) {
  return (
    <div style={{ height: compact ? 76 : 92, borderRadius: 10, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={c.headerImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(8,4,20,0.90) 0%, rgba(8,4,20,0.4) 65%, rgba(8,4,20,0.15) 100%)' }} />
      <div style={{ position: 'absolute', bottom: compact ? 8 : 10, left: 12 }}>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 5 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: 'rgba(0,160,80,0.28)', border: '1px solid rgba(0,160,80,0.5)', borderRadius: 5, paddingInline: 5, paddingBlock: 2 }}>
            <span style={{ width: 4, height: 4, borderRadius: 9999, background: '#4ADE80', display: 'inline-block' }} />
            <span style={{ fontSize: 7, fontWeight: 800, color: '#4ADE80', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Live</span>
          </div>
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{c.platform}</span>
        </div>
        <p style={{ fontSize: compact ? 13 : 15, fontWeight: 900, color: 'white', letterSpacing: '-0.03em', lineHeight: 1 }}>{c.name}</p>
      </div>
    </div>
  );
}

function StatsGrid({ c }: { c: Campaign }) {
  const items = [
    { Icon: Eye,      color: '#EC4899', bg: '#FDF2F8', val: c.stats.impressions, label: 'Impressions' },
    { Icon: Heart,    color: '#EF4444', bg: '#FEF2F2', val: c.stats.engagement,  label: 'Engagement'  },
    { Icon: Users,    color: c.accent,  bg: c.accentBg, val: c.stats.creators,  label: 'Creators'    },
    { Icon: ThumbsUp, color: T.green,   bg: T.greenLight, val: c.stats.approved, label: 'Approved'   },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5, flexShrink: 0 }}>
      {items.map(({ Icon, color, bg, val, label }) => (
        <div key={label} style={{ ...CARD, padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon size={10} strokeWidth={2} style={{ color }} />
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 900, color: T.text, letterSpacing: '-0.03em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{val}</p>
            <p style={{ fontSize: 8, color: T.hint, fontWeight: 500, marginTop: 1 }}>{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function TabBar({ active }: { active: 0 | 1 | 2 }) {
  return (
    <div style={{ display: 'flex', borderBottom: `1px solid ${T.border}`, flexShrink: 0, background: T.surface }}>
      {['Overview', 'Submissions', 'Creators'].map((t, i) => (
        <div key={t} style={{
          flex: 1, textAlign: 'center', paddingBlock: 9, fontSize: 10,
          fontWeight: i === active ? 700 : 500,
          color: i === active ? T.purple : T.hint,
          borderBottom: i === active ? `2px solid ${T.purple}` : '2px solid transparent',
        }}>{t}</div>
      ))}
    </div>
  );
}

// ─── Overview scene ───────────────────────────────────────────────────────────

function OverviewScene({ c }: { c: Campaign }) {
  return (
    <div style={{ width: '100%', height: '100%', background: T.surface2, display: 'flex', flexDirection: 'column', overflow: 'hidden', fontFamily: 'system-ui,-apple-system,sans-serif' }}>
      {/* Dynamic island clearance */}
      <div style={{ flexShrink: 0, height: 52 }} />
      <div style={{ flex: 1, overflow: 'hidden', padding: '0 10px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {/* Back nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, height: 30, flexShrink: 0 }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, border: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', background: T.surface }}>
            <ChevronLeft size={11} strokeWidth={2.5} style={{ color: T.text }} />
          </div>
          <span style={{ fontSize: 12, fontWeight: 800, color: T.text }}>{c.name}</span>
        </div>

        <HeroBanner c={c} />
        <StatsGrid c={c} />
        <TabBar active={0} />

        {/* Submissions preview list */}
        <div style={{ ...CARD, overflow: 'hidden', flexShrink: 0 }}>
          <div style={{ padding: '9px 12px', borderBottom: `1px solid ${T.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: T.text }}>Latest Submissions</span>
            <span style={{ fontSize: 9, color: T.purple, fontWeight: 700 }}>View All</span>
          </div>
          {c.videos.map((v, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderBottom: i < c.videos.length - 1 ? `1px solid ${T.borderSoft}` : 'none' }}>
              <div style={{ width: 26, height: 26, borderRadius: 9999, flexShrink: 0, background: `linear-gradient(135deg, ${c.accent}, ${T.blue})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700, color: 'white' }}>
                {v.creator.split(' ').map(n => n[0]).join('')}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: T.text }}>{v.creator}</p>
                <p style={{ fontSize: 8, color: T.hint }}>{c.platform} · {v.views} views</p>
              </div>
              <span style={{ fontSize: 8, fontWeight: 700, color: T.amber, background: T.amberLight, borderRadius: 5, paddingInline: 5, paddingBlock: 2 }}>Pending</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Submissions scene ────────────────────────────────────────────────────────

function SubmissionsScene({ c }: { c: Campaign }) {
  const allVids = [...c.videos, ...c.videos].slice(0, 4); // show 4 cards in 2×2

  return (
    <div style={{ width: '100%', height: '100%', background: T.surface2, display: 'flex', flexDirection: 'column', overflow: 'hidden', fontFamily: 'system-ui,-apple-system,sans-serif' }}>
      <div style={{ flexShrink: 0, height: 52 }} />
      <div style={{ flex: 1, overflow: 'hidden', padding: '0 10px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {/* Back nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, height: 30, flexShrink: 0 }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, border: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', background: T.surface }}>
            <ChevronLeft size={11} strokeWidth={2.5} style={{ color: T.text }} />
          </div>
          <span style={{ fontSize: 12, fontWeight: 800, color: T.text }}>{c.name}</span>
        </div>

        <HeroBanner c={c} compact />
        <StatsGrid c={c} />
        <TabBar active={1} />

        {/* 2×2 video thumbnail grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5, flex: 1, overflow: 'hidden' }}>
          {allVids.map((v, i) => (
            <div key={i} style={{ ...CARD, overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
              {/* Thumbnail */}
              <div style={{ position: 'relative', paddingTop: '115%', flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.thumb} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.28)' }} />
                {/* Play */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 24, height: 24, borderRadius: 9999, background: 'rgba(255,255,255,0.22)', border: '1px solid rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Play size={10} fill="white" style={{ color: 'white', marginLeft: 1 }} />
                  </div>
                </div>
                {/* Views */}
                <div style={{ position: 'absolute', bottom: 5, left: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Eye size={8} style={{ color: 'rgba(255,255,255,0.9)' }} strokeWidth={2} />
                  <span style={{ fontSize: 8, fontWeight: 700, color: 'white' }}>{v.views}</span>
                </div>
              </div>
              {/* Creator info */}
              <div style={{ padding: '5px 7px' }}>
                <p style={{ fontSize: 9, fontWeight: 700, color: T.text, lineHeight: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{v.creator}</p>
                <p style={{ fontSize: 7.5, color: T.hint, marginTop: 1 }}>{v.likes} likes</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Video player scene ───────────────────────────────────────────────────────

function VideoScene({ c }: { c: Campaign }) {
  const v = c.videos[c.featured];
  const ini = v.creator.split(' ').map(n => n[0]).join('');

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: '#000', overflow: 'hidden', fontFamily: 'system-ui,-apple-system,sans-serif' }}>
      {/* Full-screen thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={v.thumb} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />

      {/* Gradient overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.52) 0%, transparent 22%, transparent 55%, rgba(0,0,0,0.80) 100%)' }} />

      {/* Top bar */}
      <div style={{ position: 'absolute', top: 52, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px' }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(0,0,0,0.36)', border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ChevronLeft size={13} strokeWidth={2.5} style={{ color: 'white' }} />
        </div>
        {/* Campaign badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 9999, paddingInline: 10, paddingBlock: 4 }}>
          <span style={{ width: 5, height: 5, borderRadius: 9999, background: '#4ADE80', display: 'inline-block' }} />
          <span style={{ fontSize: 9, fontWeight: 700, color: 'white', letterSpacing: '0.02em' }}>{c.name}</span>
        </div>
        <div style={{ width: 28 }} />
      </div>

      {/* Right: action buttons */}
      <div style={{ position: 'absolute', right: 12, bottom: 110, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        {/* Avatar */}
        <div style={{ position: 'relative' }}>
          <div style={{ width: 36, height: 36, borderRadius: 9999, background: `linear-gradient(135deg, ${c.accent}, ${T.blue})`, border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: 'white' }}>{ini}</div>
          <div style={{ position: 'absolute', bottom: -6, left: '50%', transform: 'translateX(-50%)', width: 16, height: 16, borderRadius: 9999, background: c.accent, border: '1.5px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'white', fontWeight: 700 }}>+</div>
        </div>
        {/* Heart */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          <div style={{ width: 36, height: 36, borderRadius: 9999, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Heart size={16} fill="white" style={{ color: 'white' }} />
          </div>
          <span style={{ fontSize: 9, color: 'white', fontWeight: 600 }}>{v.likes}</span>
        </div>
        {/* Comment */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          <div style={{ width: 36, height: 36, borderRadius: 9999, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MessageCircle size={16} fill="white" style={{ color: 'white' }} />
          </div>
          <span style={{ fontSize: 9, color: 'white', fontWeight: 600 }}>1.2K</span>
        </div>
        {/* Share */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          <div style={{ width: 36, height: 36, borderRadius: 9999, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Share2 size={15} style={{ color: 'white' }} />
          </div>
          <span style={{ fontSize: 9, color: 'white', fontWeight: 600 }}>Share</span>
        </div>
        {/* Spinning disc */}
        <div style={{ width: 36, height: 36, borderRadius: 9999, background: `linear-gradient(135deg, #1a1a2e, #2d2d44)`, border: '2px solid rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Music2 size={14} style={{ color: 'white' }} />
        </div>
      </div>

      {/* Bottom: creator info */}
      <div style={{ position: 'absolute', bottom: 28, left: 14, right: 60 }}>
        {/* Views badge */}
        <div style={{ marginBottom: 8 }}>
          <span style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.85)', background: 'rgba(255,255,255,0.12)', borderRadius: 9999, paddingInline: 8, paddingBlock: 3 }}>
            👁 {v.views} views
          </span>
        </div>
        <p style={{ fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 4, letterSpacing: '-0.01em' }}>{v.handle}</p>
        <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.80)', lineHeight: 1.4, marginBottom: 10 }}>
          Promoting {c.name} 🎵 #{c.artist.replace(' ', '')}
        </p>
        {/* Song pill */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.12)', borderRadius: 9999, paddingInline: 10, paddingBlock: 5 }}>
          <Music2 size={9} style={{ color: 'white' }} />
          <span style={{ fontSize: 9, color: 'white', fontWeight: 500 }}>{c.name} — {c.artist}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function SponsorCampaignPrototype() {
  const [campaignIdx, setCampaignIdx] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);

  useEffect(() => {
    const step = SEQUENCE[stepIdx];
    const timer = setTimeout(() => {
      const nextIdx = (stepIdx + 1) % SEQUENCE.length;
      setStepIdx(nextIdx);
      if (nextIdx === 0) {
        setCampaignIdx(prev => (prev + 1) % CAMPAIGNS.length);
      }
    }, STEP_DURATION[step]);
    return () => clearTimeout(timer);
  }, [stepIdx]);

  const campaign = CAMPAIGNS[campaignIdx];
  const step = SEQUENCE[stepIdx];

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative', background: T.surface2 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${campaignIdx}-${stepIdx}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0 }}
        >
          {step === 'skeleton'    && <SkeletonScreen />}
          {step === 'overview'    && <OverviewScene    c={campaign} />}
          {step === 'submissions' && <SubmissionsScene c={campaign} />}
          {step === 'video'       && <VideoScene       c={campaign} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
