'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye, Heart, Music2, TrendingUp, Users } from 'lucide-react';

const PURPLE      = '#6406CF';
const PURPLE_DARK = '#4A0DAD';

interface CampaignVideo {
  views: string;
  thumb: string;
  video?: string;
}

interface Campaign {
  artist:    string;
  song:      string;
  platform:  string;
  chartData: number[];
  stats:     { views: string; likes: string; creators: string };
  videos:    CampaignVideo[];
}

const CAMPAIGNS: Campaign[] = [
  {
    artist:    'HEIS',
    song:      'With You',
    platform:  'TikTok',
    chartData: [12, 28, 45, 38, 67, 89, 112],
    stats:     { views: '890K', likes: '46K', creators: '24' },
    videos: [
      { views: '89.1K', thumb: 'https://picsum.photos/seed/creator03/300/500', video: '/videos/creator-1.mp4' },
      { views: '44.2K', thumb: 'https://picsum.photos/seed/creator01/300/500', video: '/videos/creator-4.mp4' },
      { views: '31.8K', thumb: 'https://picsum.photos/seed/creator02/300/500' },
      { views: '28.5K', thumb: 'https://picsum.photos/seed/creator10/300/500' },
      { views: '21.0K', thumb: 'https://picsum.photos/seed/creator13/300/500' },
      { views: '18.4K', thumb: 'https://picsum.photos/seed/creator14/300/500' },
    ],
  },
  {
    artist:    'Rema',
    song:      'Lagos Summer',
    platform:  'Instagram',
    chartData: [34, 56, 78, 92, 140, 168, 195],
    stats:     { views: '1.2M', likes: '91K', creators: '38' },
    videos: [
      { views: '55.0K', thumb: 'https://picsum.photos/seed/creator04/300/500', video: '/videos/creator-3.mp4' },
      { views: '38.4K', thumb: 'https://picsum.photos/seed/creator05/300/500', video: '/videos/creator-5.mp4' },
      { views: '27.1K', thumb: 'https://picsum.photos/seed/creator06/300/500' },
      { views: '22.3K', thumb: 'https://picsum.photos/seed/creator11/300/500' },
      { views: '19.8K', thumb: 'https://picsum.photos/seed/creator15/300/500' },
      { views: '14.6K', thumb: 'https://picsum.photos/seed/creator16/300/500' },
    ],
  },
  {
    artist:    'Burna Boy',
    song:      'Afrobeats Nights',
    platform:  'TikTok',
    chartData: [80, 120, 175, 210, 280, 340, 420],
    stats:     { views: '2.1M', likes: '158K', creators: '61' },
    videos: [
      { views: '112K',  thumb: 'https://picsum.photos/seed/creator07/300/500', video: '/videos/creator-6.mp4' },
      { views: '84.0K', thumb: 'https://picsum.photos/seed/creator08/300/500', video: '/videos/creator-7.mp4' },
      { views: '63.2K', thumb: 'https://picsum.photos/seed/creator09/300/500' },
      { views: '51.0K', thumb: 'https://picsum.photos/seed/creator12/300/500' },
      { views: '44.7K', thumb: 'https://picsum.photos/seed/creator17/300/500' },
      { views: '38.1K', thumb: 'https://picsum.photos/seed/creator18/300/500' },
    ],
  },
];

const CAMPAIGN_DURATION = 4000;

function MiniBarChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 30, width: 54 }}>
      {data.map((v, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: `${Math.round((v / max) * 100)}%`,
            minHeight: 3,
            background: i === data.length - 1 ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.30)',
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  );
}

function CampaignScreen({ c }: { c: Campaign }) {
  const statsRow = [
    { Icon: Eye,     val: c.stats.views,    label: 'Views'    },
    { Icon: Heart,   val: c.stats.likes,    label: 'Likes'    },
    { Icon: Users,   val: c.stats.creators, label: 'Creators' },
  ];

  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      background: '#F7F7F9',
      fontFamily: 'system-ui,-apple-system,sans-serif',
      overflow: 'hidden',
    }}>
      {/* Dynamic island clearance */}
      <div style={{ height: 48, flexShrink: 0 }} />

      {/* Purple analytics card */}
      <div style={{
        margin: '0 10px',
        background: PURPLE,
        borderRadius: 14,
        padding: '11px 13px 12px',
        flexShrink: 0,
      }}>
        {/* Top row: platform badge + live indicator */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: 'rgba(255,255,255,0.14)', borderRadius: 5, paddingInline: 6, paddingBlock: 2.5 }}>
            <span style={{ width: 4, height: 4, borderRadius: 9999, background: '#4ADE80', display: 'inline-block' }} />
            <span style={{ fontSize: 7, fontWeight: 800, color: 'white', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.platform}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <TrendingUp size={8} style={{ color: 'rgba(255,255,255,0.6)' }} strokeWidth={2.5} />
            <span style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Live Campaign</span>
          </div>
        </div>

        {/* Artist name + song + chart */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 20, fontWeight: 900, color: 'white', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 4 }}>
              {c.artist}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Music2 size={8} style={{ color: 'rgba(255,255,255,0.55)' }} strokeWidth={2} />
              <p style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{c.song}</p>
            </div>
          </div>
          <MiniBarChart data={c.chartData} />
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', marginTop: 10, paddingTop: 9, borderTop: '1px solid rgba(255,255,255,0.14)' }}>
          {statsRow.map(({ Icon, val, label }, i) => (
            <div key={label} style={{ flex: 1, textAlign: i === 0 ? 'left' : i === 1 ? 'center' : 'right' }}>
              <p style={{ fontSize: 13, fontWeight: 900, color: 'white', letterSpacing: '-0.02em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{val}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: i === 0 ? 'flex-start' : i === 1 ? 'center' : 'flex-end', marginTop: 2 }}>
                <Icon size={7} style={{ color: 'rgba(255,255,255,0.45)' }} strokeWidth={2} />
                <p style={{ fontSize: 7, color: 'rgba(255,255,255,0.45)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery header + grid — flex:1 so it fills remaining height and clips */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px 4px', flexShrink: 0 }}>
          <span style={{ fontSize: 10, fontWeight: 800, color: '#0F0F1A', letterSpacing: '-0.01em' }}>Creator Videos</span>
          <span style={{ fontSize: 8.5, color: PURPLE, fontWeight: 700 }}>View all →</span>
        </div>

      {/* 2-column portrait (9:16) video grid */}
      <div style={{ padding: '0 10px 10px', display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 10, rowGap: 20, overflow: 'hidden', flex: 1 }}>
        {c.videos.slice(0, 4).map((v, i) => (
          <div key={i} style={{ borderRadius: 10, overflow: 'hidden', position: 'relative', paddingTop: '177.78%' }}>
            {v.video ? (
              <video
                src={v.video}
                autoPlay
                muted
                loop
                playsInline
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={v.thumb}
                alt=""
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            )}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.6) 100%)' }} />
            {/* Play */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 22, height: 22, borderRadius: 9999, background: 'rgba(255,255,255,0.22)', border: '1px solid rgba(255,255,255,0.40)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={9} fill="white" style={{ color: 'white', marginLeft: 1 }} />
              </div>
            </div>
            {/* View count */}
            <div style={{ position: 'absolute', bottom: 6, left: 6 }}>
              <p style={{ fontSize: 7.5, fontWeight: 700, color: 'white', lineHeight: 1 }}>{v.views}</p>
            </div>
          </div>
        ))}
      </div>
      </div>{/* end gallery flex wrapper */}
    </div>
  );
}

export default function SponsorCampaignPrototype() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIdx(prev => (prev + 1) % CAMPAIGNS.length);
    }, CAMPAIGN_DURATION);
    return () => clearTimeout(timer);
  }, [idx]);

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <CampaignScreen c={CAMPAIGNS[idx]} />
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div style={{ position: 'absolute', bottom: 8, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 4, zIndex: 10 }}>
        {CAMPAIGNS.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === idx ? 14 : 4,
              height: 4,
              borderRadius: 2,
              background: i === idx ? PURPLE : 'rgba(15,15,26,0.18)',
              transition: 'all 0.35s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
