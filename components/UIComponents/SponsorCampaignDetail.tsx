'use client';

// ui-ux-pro-max applied:
// Radius scale: 8 / 12 / 16 — consistent throughout
// Spacing: 8dp rhythm
// Shadow scale: one value used everywhere
// Icons: Lucide only
// Elevation: cards use border + shadow, not shadow alone

import { useState } from 'react';
import {
  LayoutGrid, Gift, Wallet, BarChart2, Settings,
  Search, Bell, ChevronLeft, Share2, Pencil, MoreHorizontal,
  Eye, Heart, Users, ThumbsUp, ArrowRight, Play,
  Radio, Clock, Hash, AtSign, Tag,
} from 'lucide-react';

// ─── Tokens ───────────────────────────────────────────────────────────────────
const T = {
  purple:      '#7C3BED',
  purpleLight: '#F0EBFF',
  blue:        '#1A40B8',
  blueLight:   '#EEF3FF',
  green:       '#00A050',
  greenLight:  '#E6F8EF',
  amber:       '#D97706',
  amberLight:  '#FEF3C7',
  text:        '#0F0F1A',
  muted:       '#4A4A6A',
  hint:        '#A0A0BA',
  border:      '#E4E4EC',
  borderSoft:  '#F0F0F5',
  surface:     '#FFFFFF',
  surface2:    '#F7F7F9',
} as const;

// Consistent elevation — used on every card
const CARD = {
  background: T.surface,
  border: `1px solid ${T.border}`,
  borderRadius: 12,
  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
} as const;

type Tab = 'overview' | 'submissions' | 'creators';

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar() {
  const items = [
    { id: 'dashboard', label: 'Dashboard', Icon: LayoutGrid },
    { id: 'campaigns', label: 'Campaigns', Icon: Gift       },
    { id: 'wallet',    label: 'Wallet',    Icon: Wallet     },
    { id: 'analytics', label: 'Analytics', Icon: BarChart2  },
  ] as const;

  return (
    <aside style={{
      width: 88, flexShrink: 0,
      background: T.surface, borderRight: `1px solid ${T.border}`,
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      paddingBlock: 24,
    }}>
      <div style={{ marginBottom: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: T.purple, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: 'white', fontWeight: 900, fontSize: 16 }}>V</span>
        </div>
        <span style={{ fontSize: 11, fontWeight: 800, color: T.text }}>Varmply</span>
      </div>

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '100%', padding: '0 8px' }}>
        {items.map(({ id, label, Icon }) => {
          const active = id === 'campaigns';
          return (
            <div key={id} style={{
              width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 4, paddingBlock: 10, paddingInline: 8, borderRadius: 12, cursor: 'pointer',
              background: active ? T.purpleLight : 'transparent',
            }}>
              <Icon size={18} strokeWidth={active ? 2.5 : 1.8} style={{ color: active ? T.purple : T.hint }} />
              <span style={{ fontSize: 10, fontWeight: active ? 700 : 500, color: active ? T.purple : T.hint }}>
                {label}
              </span>
            </div>
          );
        })}
      </nav>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, paddingBlock: 10, paddingInline: 8, borderRadius: 12, width: '100%', margin: '0 8px' }}>
        <Settings size={18} strokeWidth={1.8} style={{ color: T.hint }} />
        <span style={{ fontSize: 10, fontWeight: 500, color: T.hint }}>Settings</span>
      </div>
    </aside>
  );
}

// ─── Top bar ──────────────────────────────────────────────────────────────────

function TopBar({ mobile = false }: { mobile?: boolean }) {
  return (
    <div style={{
      height: mobile ? 48 : 64, flexShrink: 0,
      borderBottom: `1px solid ${T.border}`,
      display: 'flex', alignItems: 'center',
      paddingInline: mobile ? 12 : 24, gap: 12,
      background: T.surface,
    }}>
      {mobile && (
        <div style={{ width: 28, height: 28, borderRadius: 8, border: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ChevronLeft size={14} strokeWidth={2.5} style={{ color: T.text }} />
        </div>
      )}
      {!mobile && (
        <div style={{
          flex: 1, maxWidth: 280, height: 36, borderRadius: 8,
          background: T.surface2, border: `1px solid ${T.border}`,
          display: 'flex', alignItems: 'center', gap: 8, paddingInline: 12,
        }}>
          <Search size={13} strokeWidth={2} style={{ color: T.hint }} />
          <span style={{ fontSize: 12, color: T.hint }}>Search for a creator</span>
        </div>
      )}
      {mobile && (
        <span style={{ flex: 1, fontSize: 13, fontWeight: 800, color: T.text, letterSpacing: '-0.02em' }}>With You Album</span>
      )}
      <div style={{ marginLeft: mobile ? 0 : 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: mobile ? 28 : 36, height: mobile ? 28 : 36, borderRadius: 9999, border: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <Bell size={mobile ? 13 : 15} strokeWidth={2} style={{ color: T.muted }} />
          <span style={{ position: 'absolute', top: mobile ? 5 : 7, right: mobile ? 5 : 7, width: 6, height: 6, borderRadius: 9999, background: T.purple, border: `2px solid ${T.surface}` }} />
        </div>
        {!mobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 12, borderLeft: `1px solid ${T.border}` }}>
            <div style={{ width: 34, height: 34, borderRadius: 9999, background: `linear-gradient(135deg, ${T.purple}, ${T.blue})` }} />
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: T.text, lineHeight: 1.2 }}>Adebayo Sammy</p>
              <p style={{ fontSize: 10, fontWeight: 600, color: T.purple }}>Sponsor Account</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Campaign Hero card (bounded, rounded) ────────────────────────────────────

function CampaignHeroCard({ mobile = false }: { mobile?: boolean }) {
  return (
    <div style={{
      height: mobile ? 100 : 172,
      position: 'relative', overflow: 'hidden',
      borderRadius: mobile ? 10 : 12,
      flexShrink: 0, background: '#0a0414',
    }}>
      {/* Real photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://picsum.photos/seed/concert77/900/300"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
      />
      {/* Directional overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,4,24,0.88) 0%, rgba(10,4,24,0.4) 60%, rgba(10,4,24,0.15) 100%)' }} />

      {/* Back button */}
      {!mobile && (
        <div style={{ position: 'absolute', top: 16, left: 20, display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, paddingInline: 10, paddingBlock: 6, cursor: 'pointer' }}>
          <ChevronLeft size={12} strokeWidth={2.5} style={{ color: 'white' }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: 'white' }}>Back to Dashboard</span>
        </div>
      )}
      {/* Action icons */}
      {!mobile && (
        <div style={{ position: 'absolute', top: 16, right: 20, display: 'flex', gap: 6 }}>
          {[Share2, Pencil, MoreHorizontal].map((Icon, i) => (
            <div key={i} style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Icon size={12} strokeWidth={2} style={{ color: 'white' }} />
            </div>
          ))}
        </div>
      )}
      {/* Text */}
      <div style={{ position: 'absolute', bottom: mobile ? 12 : 20, left: mobile ? 14 : 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: mobile ? 5 : 8 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(0,160,80,0.25)', border: '1px solid rgba(0,160,80,0.5)', borderRadius: 6, paddingInline: 6, paddingBlock: 2 }}>
            <span style={{ width: 5, height: 5, borderRadius: 9999, background: '#4ADE80', display: 'inline-block' }} />
            <span style={{ fontSize: 8, fontWeight: 800, color: '#4ADE80', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Live</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, opacity: 0.7 }}>
            <Radio size={10} strokeWidth={2} style={{ color: 'white' }} />
            <span style={{ fontSize: 10, color: 'white', fontWeight: 500 }}>Instagram</span>
          </div>
        </div>
        <h1 style={{ fontSize: mobile ? 16 : 24, fontWeight: 900, color: 'white', letterSpacing: '-0.03em', lineHeight: 1 }}>
          With You Album
        </h1>
      </div>
    </div>
  );
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

function Tabs({ active, onChange, mobile = false }: { active: Tab; onChange: (t: Tab) => void; mobile?: boolean }) {
  const tabs: { id: Tab; label: string; count?: number }[] = [
    { id: 'overview',    label: 'Overview'                },
    { id: 'submissions', label: 'Submissions', count: 17  },
    { id: 'creators',    label: 'Creators'                },
  ];

  return (
    <div style={{
      display: 'flex', flexShrink: 0,
      background: mobile ? T.surface : 'transparent',
      borderBottom: `1px solid ${T.border}`,
      borderRadius: mobile ? '0 0 10px 10px' : undefined,
    }}>
      {tabs.map(({ id, label, count }) => {
        const isActive = id === active;
        return (
          <button key={id} onClick={() => onChange(id)} style={{
            flex: mobile ? 1 : undefined,
            paddingBlock: mobile ? 10 : 13,
            paddingInline: mobile ? 4 : 4,
            marginRight: mobile ? 0 : 24,
            fontSize: mobile ? 11 : 13,
            fontWeight: isActive ? 700 : 500,
            color: isActive ? T.purple : T.muted,
            background: 'none', border: 'none', cursor: 'pointer',
            borderBottom: isActive ? `2px solid ${T.purple}` : '2px solid transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
            whiteSpace: 'nowrap',
          }}>
            {label}
            {count !== undefined && (
              <span style={{
                fontSize: 9, fontWeight: 700, minWidth: 15, height: 15,
                borderRadius: 9999, paddingInline: 4,
                background: isActive ? T.purpleLight : T.borderSoft,
                color: isActive ? T.purple : T.hint,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

// ─── Stats row (always visible) ───────────────────────────────────────────────

function StatsRow({ mobile = false }: { mobile?: boolean }) {
  const stats = [
    { Icon: Eye,      color: '#EC4899', bg: '#FDF2F8', val: '890K', label: 'Impressions' },
    { Icon: Heart,    color: '#EF4444', bg: '#FEF2F2', val: '46K',  label: 'Engagement'  },
    { Icon: Users,    color: T.purple,  bg: T.purpleLight, val: '24', label: 'Creators'  },
    { Icon: ThumbsUp, color: T.green,   bg: T.greenLight,  val: '20', label: 'Approved'  },
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: mobile ? 5 : 12,
      padding: mobile ? '6px 0' : '16px 0',
      flexShrink: 0,
    }}>
      {stats.map(({ Icon, color, bg, val, label }) => (
        <div key={label} style={{
          ...CARD,
          padding: mobile ? '8px 8px' : '16px 20px',
          display: 'flex', flexDirection: 'column', gap: mobile ? 4 : 8,
        }}>
          <div style={{ width: mobile ? 20 : 32, height: mobile ? 20 : 32, borderRadius: mobile ? 6 : 8, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon size={mobile ? 9 : 14} strokeWidth={2} style={{ color }} />
          </div>
          <div>
            <p style={{ fontSize: mobile ? 13 : 22, fontWeight: 900, color: T.text, letterSpacing: '-0.03em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{val}</p>
            <p style={{ fontSize: mobile ? 8 : 11, color: T.hint, fontWeight: 500, marginTop: 2 }}>{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Budget card ──────────────────────────────────────────────────────────────

function BudgetCard({ mobile = false }: { mobile?: boolean }) {
  const pct = (320000 / 500000) * 100;
  return (
    <div style={{ ...CARD, padding: mobile ? 16 : 24 }}>
      <h3 style={{ fontSize: mobile ? 13 : 15, fontWeight: 800, color: T.text, marginBottom: mobile ? 14 : 20 }}>Budget Breakdown</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: mobile ? 10 : 12 }}>
        {[
          { label: 'Total Budget', val: '₦500,000', color: T.text  },
          { label: 'Spent',        val: '₦320,000', color: T.text  },
          { label: 'Remaining',    val: '₦180,000', color: T.green },
        ].map(({ label, val, color }) => (
          <div key={label} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: mobile ? 12 : 13, color: T.muted, fontWeight: 500 }}>{label}</span>
            <span style={{ fontSize: mobile ? 12 : 13, fontWeight: 700, color, fontVariantNumeric: 'tabular-nums' }}>{val}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: mobile ? 12 : 16, marginBottom: mobile ? 12 : 16 }}>
        <div style={{ height: 5, borderRadius: 9999, background: T.borderSoft, overflow: 'hidden' }}>
          <div style={{ width: `${pct}%`, height: '100%', borderRadius: 9999, background: `linear-gradient(90deg, ${T.purple}, ${T.blue})` }} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: mobile ? 10 : 12, borderTop: `1px solid ${T.borderSoft}` }}>
        <span style={{ fontSize: mobile ? 12 : 13, color: T.muted, fontWeight: 500 }}>Slots</span>
        <span style={{ fontSize: mobile ? 12 : 13, fontWeight: 700, color: T.text }}>24/40 filled</span>
      </div>
    </div>
  );
}

// ─── About card ───────────────────────────────────────────────────────────────

function AboutCard({ mobile = false }: { mobile?: boolean }) {
  return (
    <div style={{ ...CARD, padding: mobile ? 16 : 24, flex: 1 }}>
      <h3 style={{ fontSize: mobile ? 13 : 15, fontWeight: 800, color: T.text, marginBottom: mobile ? 10 : 12 }}>About This Campaign</h3>
      <p style={{ fontSize: mobile ? 12 : 13, color: T.muted, lineHeight: 1.65, marginBottom: mobile ? 14 : 20 }}>
        Promote the new HEIS album with authentic creator content. We want creators to share their favourite tracks, create dance challenges, and share their genuine reactions.
      </p>
      {[
        { Icon: Clock, label: 'Timeline',     content: '2026-01-10 → 2026-01-20'  },
        { Icon: Tag,   label: 'Content Tags', content: null, tags: ['Reel', 'Story', 'Carousel'] },
        { Icon: Hash,  label: 'Hashtags',     content: null, tags: ['#HEIS', '#HEISAlbum', '#RemasHEIS'], tagColor: T.blue },
        { Icon: AtSign,label: 'Mentions',     content: null, tags: ['@emaxxmusic', '@heis_official'], tagColor: T.blue },
      ].map(({ Icon, label, content, tags, tagColor }) => (
        <div key={label} style={{ marginBottom: mobile ? 12 : 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: mobile ? 5 : 7 }}>
            <Icon size={10} strokeWidth={2} style={{ color: T.hint }} />
            <span style={{ fontSize: 9, fontWeight: 700, color: T.hint, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</span>
          </div>
          {content && <p style={{ fontSize: mobile ? 11 : 12, color: T.muted, fontWeight: 500 }}>{content}</p>}
          {tags && (
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {tags.map(t => (
                <span key={t} style={{
                  fontSize: mobile ? 10 : 11, fontWeight: 600,
                  color: tagColor ?? T.purple,
                  background: tagColor ? 'transparent' : T.purpleLight,
                  borderRadius: tagColor ? 0 : 6,
                  paddingInline: tagColor ? 0 : 8,
                  paddingBlock: tagColor ? 0 : 3,
                }}>{t}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Overview content ─────────────────────────────────────────────────────────

function OverviewContent({ mobile = false }: { mobile?: boolean }) {
  const rows = [
    { name: 'Adeola Grace',  time: '2 hours ago', type: 'TikTok', status: 'Submitted', sc: T.amber, sb: T.amberLight },
    { name: 'Adeola Grace',  time: '2 hours ago', type: 'Reel',   status: 'Submitted', sc: T.amber, sb: T.amberLight },
    { name: 'David Okonkwo', time: '4 hours ago', type: 'Story',  status: 'Approved',  sc: T.green, sb: T.greenLight  },
    { name: 'Chioma Eze',    time: '8 hours ago', type: 'Reel',   status: 'Submitted', sc: T.amber, sb: T.amberLight },
    { name: 'Tunde Bakare',  time: '1 day ago',   type: 'Reel',   status: 'Submitted', sc: T.amber, sb: T.amberLight },
  ];
  const ac = [T.purple, T.blue, '#E11D48', '#0891B2', '#059669'];
  const ini = (n: string) => n.split(' ').map(w => w[0]).join('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: mobile ? 10 : 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '320px 1fr', gap: mobile ? 10 : 16 }}>
        <BudgetCard mobile={mobile} />
        <AboutCard mobile={mobile} />
      </div>
      {/* Submissions preview */}
      <div style={{ ...CARD, overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: mobile ? '12px 14px' : '16px 20px', borderBottom: `1px solid ${T.border}` }}>
          <h3 style={{ fontSize: mobile ? 12 : 14, fontWeight: 800, color: T.text }}>Latest Submissions</h3>
          <button style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, color: T.purple, background: 'none', border: 'none', cursor: 'pointer' }}>
            View All <ArrowRight size={11} strokeWidth={2.5} />
          </button>
        </div>
        {rows.map(({ name, time, type, status, sc, sb }, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: mobile ? '10px 14px' : '12px 20px',
            borderBottom: i < rows.length - 1 ? `1px solid ${T.borderSoft}` : 'none',
          }}>
            <div style={{
              width: mobile ? 28 : 32, height: mobile ? 28 : 32, borderRadius: 9999, flexShrink: 0,
              background: `linear-gradient(135deg, ${ac[i % ac.length]}, ${ac[(i + 1) % ac.length]})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 700, color: 'white',
            }}>{ini(name)}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: mobile ? 11 : 12, fontWeight: 700, color: T.text }}>{name}</p>
              <p style={{ fontSize: mobile ? 9 : 10, color: T.hint, marginTop: 1 }}>{type} · {time}</p>
            </div>
            <span style={{ fontSize: 9, fontWeight: 700, color: sc, background: sb, borderRadius: 6, paddingInline: 7, paddingBlock: 3, flexShrink: 0 }}>
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Video data ───────────────────────────────────────────────────────────────

const VIDEOS = [
  { creator: 'Adeola Grace',   handle: '@adeola_g',  views: '44.2K', likes: '3.1K', dur: '0:18', status: 'Submitted', sc: T.amber, sb: T.amberLight, time: '2h ago',  thumb: 'https://picsum.photos/seed/creator01/300/500' },
  { creator: 'David Okonkwo',  handle: '@david_ok',  views: '31.8K', likes: '2.4K', dur: '0:24', status: 'Approved',  sc: T.green, sb: T.greenLight,  time: '4h ago',  thumb: 'https://picsum.photos/seed/creator02/300/500' },
  { creator: 'Tunde Bakare',   handle: '@tunde_b',   views: '89.1K', likes: '7.2K', dur: '0:15', status: 'Submitted', sc: T.amber, sb: T.amberLight, time: '1d ago',  thumb: 'https://picsum.photos/seed/creator03/300/500' },
  { creator: 'Chioma Eze',     handle: '@chioma_ez', views: '12.5K', likes: '980',  dur: '0:30', status: 'Submitted', sc: T.amber, sb: T.amberLight, time: '8h ago',  thumb: 'https://picsum.photos/seed/creator04/300/500' },
  { creator: 'Femi Adeyemi',   handle: '@femi_ade',  views: '55.3K', likes: '4.8K', dur: '0:21', status: 'Approved',  sc: T.green, sb: T.greenLight,  time: '6h ago',  thumb: 'https://picsum.photos/seed/creator05/300/500' },
  { creator: 'Ngozi Obi',      handle: '@ngozi_obi', views: '28.7K', likes: '2.1K', dur: '0:19', status: 'Submitted', sc: T.amber, sb: T.amberLight, time: '12h ago', thumb: 'https://picsum.photos/seed/creator06/300/500' },
  { creator: 'Kola Martins',   handle: '@kola_m',    views: '19.4K', likes: '1.5K', dur: '0:27', status: 'Submitted', sc: T.amber, sb: T.amberLight, time: '15h ago', thumb: 'https://picsum.photos/seed/creator07/300/500' },
  { creator: 'Amaka Uzor',     handle: '@amaka_uz',  views: '63.0K', likes: '5.1K', dur: '0:16', status: 'Approved',  sc: T.green, sb: T.greenLight,  time: '20h ago', thumb: 'https://picsum.photos/seed/creator08/300/500' },
  { creator: 'Bayo Williams',  handle: '@bayo_w',    views: '41.2K', likes: '3.3K', dur: '0:22', status: 'Submitted', sc: T.amber, sb: T.amberLight, time: '1d ago',  thumb: 'https://picsum.photos/seed/creator09/300/500' },
];

function VideoCard({ v, mobile }: { v: typeof VIDEOS[0]; mobile: boolean }) {
  const ini = v.creator.split(' ').map(n => n[0]).join('');
  return (
    <div style={{ ...CARD, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Thumbnail */}
      <div style={{ position: 'relative', paddingTop: mobile ? '120%' : '145%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={v.thumb} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.32)' }} />
        {/* Play button */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: mobile ? 28 : 36, height: mobile ? 28 : 36, borderRadius: 9999, background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Play size={mobile ? 11 : 14} fill="white" style={{ color: 'white', marginLeft: 2 }} />
          </div>
        </div>
        {/* Status badge */}
        <span style={{ position: 'absolute', top: 8, left: 8, fontSize: 9, fontWeight: 700, color: v.sc, background: v.sb, borderRadius: 4, paddingInline: 6, paddingBlock: 2 }}>
          {v.status}
        </span>
        {/* Bottom metadata */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 8px 8px', background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Eye size={9} style={{ color: 'rgba(255,255,255,0.85)' }} strokeWidth={2} />
              <span style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{v.views}</span>
            </div>
            <span style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.85)', background: 'rgba(0,0,0,0.35)', borderRadius: 3, paddingInline: 4, paddingBlock: 1 }}>{v.dur}</span>
          </div>
        </div>
      </div>
      {/* Creator info */}
      <div style={{ padding: mobile ? '8px 10px' : '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{
          width: mobile ? 22 : 26, height: mobile ? 22 : 26, borderRadius: 9999, flexShrink: 0,
          background: `linear-gradient(135deg, ${T.purple}, ${T.blue})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 8, fontWeight: 700, color: 'white',
        }}>{ini}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: mobile ? 9 : 11, fontWeight: 700, color: T.text, lineHeight: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{v.creator}</p>
          <p style={{ fontSize: mobile ? 8 : 10, color: T.hint, marginTop: 1 }}>{v.time}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
          <Heart size={mobile ? 8 : 10} strokeWidth={2} style={{ color: T.hint }} />
          <span style={{ fontSize: mobile ? 8 : 10, color: T.hint, fontWeight: 600 }}>{v.likes}</span>
        </div>
      </div>
    </div>
  );
}

function SubmissionsGallery({ mobile = false }: { mobile?: boolean }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)',
      gap: mobile ? 8 : 16,
    }}>
      {VIDEOS.map((v, i) => <VideoCard key={i} v={v} mobile={mobile} />)}
    </div>
  );
}

// ─── Desktop ──────────────────────────────────────────────────────────────────

export function SponsorCampaignDetailDesktop() {
  const [tab, setTab] = useState<Tab>('overview');

  return (
    <div style={{
      display: 'flex', width: '100%', height: '100%',
      background: T.surface2, fontFamily: 'system-ui, -apple-system, sans-serif',
      borderRadius: 12, overflow: 'hidden', border: `1px solid ${T.border}`,
    }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <TopBar />

        {/* Non-scrolling: hero card + bare tabs */}
        <div style={{ padding: '16px 20px 0', background: T.surface2, flexShrink: 0 }}>
          <div style={{ ...CARD, overflow: 'hidden' }}>
            <CampaignHeroCard />
          </div>
          <Tabs active={tab} onChange={setTab} />
        </div>

        {/* Scrollable tab content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px 20px' }}>
          {tab === 'overview' && (
            <>
              <StatsRow />
              <OverviewContent />
            </>
          )}
          {tab === 'submissions' && <SubmissionsGallery />}
          {tab === 'creators'    && <div style={{ padding: '24px 0', color: T.hint, fontSize: 13 }}>Creator roster coming soon.</div>}
        </div>
      </div>
    </div>
  );
}

// ─── Mobile ───────────────────────────────────────────────────────────────────

export function SponsorCampaignDetailMobile() {
  const [tab, setTab] = useState<Tab>('overview');

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', width: '100%', height: '100%',
      background: T.surface2, fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      {/* Non-scrolling header: hero card + stats + tabs */}
      <div style={{ padding: '56px 10px 0', flexShrink: 0 }}>
        <div style={{ overflow: 'hidden' }}>
          <CampaignHeroCard mobile />
          <StatsRow mobile />
          <Tabs active={tab} onChange={setTab} mobile />
        </div>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 10px 10px' }}>
        {tab === 'overview'    && <OverviewContent mobile />}
        {tab === 'submissions' && <SubmissionsGallery mobile />}
        {tab === 'creators'    && <div style={{ padding: '16px 0', color: T.hint, fontSize: 11 }}>Creator roster coming soon.</div>}
      </div>
    </div>
  );
}
