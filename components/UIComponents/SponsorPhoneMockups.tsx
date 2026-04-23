'use client';

import {
  Bell, ChevronLeft, SlidersHorizontal, Play,
  LayoutGrid, Megaphone, Wallet, Settings,
  Music2, CheckCircle2, BarChart3, Lock,
  ArrowDownLeft, ArrowUpRight,
  TrendingUp, Users, AlertTriangle, CircleDot,
  Plus, ChevronRight,
} from 'lucide-react';

// ─── Design tokens ────────────────────────────────────────────────────────────
// Style: Clean Minimal · Fintech / Payments · iOS-native light surface
// Radius scale: 4 / 8 / 12 / 16 / 9999 (no random values)
// Spacing: strict 8dp rhythm — 4, 8, 12, 16, 20, 24, 32, 48
// Icons: Lucide only — no emojis as structural icons
const T = {
  blue:       '#1A40B8',
  blueLight:  '#EEF3FF',
  blueMid:    '#2563EB',
  purple:     '#7C3BED',
  purpleLight:'#F0EBFF',
  green:      '#00A050',
  greenLight: '#E6F8EF',
  amber:      '#D97706',
  amberLight: '#FEF3C7',
  red:        '#DC2626',
  redLight:   '#FEF2F2',
  text:       '#0F0F1A',
  muted:      '#4A4A6A',
  hint:       '#A0A0BA',
  border:     '#E4E4EC',
  borderSoft: '#F0F0F5',
  surface:    '#FFFFFF',
  surface2:   '#F7F7FB',
} as const;

// ─── Shared primitives ────────────────────────────────────────────────────────

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-1" style={{ fontSize: 11, fontWeight: 600, color: T.text }}>
      <span>9:41</span>
      <div className="flex items-center gap-1" style={{ color: T.text }}>
        <div className="flex items-end gap-[2px] h-[10px]">
          {[40, 60, 80, 100].map((h, i) => (
            <div key={i} style={{ width: 3, height: `${h}%`, background: i < 3 ? T.text : T.border, borderRadius: 1 }} />
          ))}
        </div>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
          <path d="M7.5 2.5C9.5 2.5 11.3 3.3 12.6 4.6L14 3.2C12.3 1.5 9.9 0.5 7.5 0.5C5.1 0.5 2.7 1.5 1 3.2L2.4 4.6C3.7 3.3 5.5 2.5 7.5 2.5Z" fill={T.text}/>
          <path d="M7.5 5.5C8.7 5.5 9.8 6 10.6 6.8L12 5.4C10.8 4.2 9.2 3.5 7.5 3.5C5.8 3.5 4.2 4.2 3 5.4L4.4 6.8C5.2 6 6.3 5.5 7.5 5.5Z" fill={T.text}/>
          <circle cx="7.5" cy="9.5" r="1.5" fill={T.text}/>
        </svg>
        <div className="flex items-center">
          <div style={{ width: 22, height: 11, borderRadius: 3, border: `1px solid ${T.text}`, padding: 1.5, position: 'relative' }}>
            <div style={{ width: '75%', height: '100%', background: T.text, borderRadius: 1.5 }} />
            <div style={{ position: 'absolute', right: -4, top: '50%', transform: 'translateY(-50%)', width: 2, height: 5, background: T.hint, borderRadius: 1 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar({ initials, size = 32, bg = T.blue, color = 'white' }: { initials: string; size?: number; bg?: string; color?: string }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 9999, background: bg, color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.36, fontWeight: 700, flexShrink: 0 }}>
      {initials}
    </div>
  );
}

function Badge({ label, color, bg }: { label: string; color: string; bg: string }) {
  return (
    <span style={{ fontSize: 9, fontWeight: 700, color, background: bg, borderRadius: 4, paddingInline: 6, paddingBlock: 2, letterSpacing: '0.04em' }}>
      {label}
    </span>
  );
}

function Divider() {
  return <div style={{ height: 1, background: T.borderSoft, marginInline: 0 }} />;
}

function BottomNav({ active }: { active: 'home' | 'campaigns' | 'wallet' | 'settings' }) {
  const tabs = [
    { id: 'home',      Icon: LayoutGrid,  label: 'Home' },
    { id: 'campaigns', Icon: Megaphone,   label: 'Campaigns' },
    { id: 'wallet',    Icon: Wallet,      label: 'Wallet' },
    { id: 'settings',  Icon: Settings,    label: 'Settings' },
  ] as const;
  return (
    <div style={{ display: 'flex', borderTop: `1px solid ${T.border}`, background: T.surface, paddingBottom: 16 }}>
      {tabs.map(({ id, Icon, label }) => {
        const isActive = id === active;
        return (
          <div key={id} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 10, gap: 3 }}>
            <Icon size={18} style={{ color: isActive ? T.blue : T.hint, strokeWidth: isActive ? 2.5 : 1.8 }} />
            <span style={{ fontSize: 9, fontWeight: isActive ? 700 : 500, color: isActive ? T.blue : T.hint, letterSpacing: '0.02em' }}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ─── Screen 1: Home ──────────────────────────────────────────────────────────

export function SponsorHomeScreen() {
  const activity = [
    { Icon: Music2,       color: T.purple, bg: T.purpleLight, label: 'BeatDrop Q3 — 4 new submissions', time: '2m ago' },
    { Icon: CheckCircle2, color: T.green,  bg: T.greenLight,  label: 'Dami Creates — payout released',  time: '1h ago' },
    { Icon: BarChart3,    color: T.blue,   bg: T.blueLight,   label: 'SoundSave hit 100K views',        time: '3h ago' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: T.surface2, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <StatusBar />

      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingInline: 20, paddingBlock: 12 }}>
        <div>
          <p style={{ fontSize: 11, color: T.hint, fontWeight: 500 }}>Good morning</p>
          <p style={{ fontSize: 17, fontWeight: 800, color: T.text, letterSpacing: '-0.02em' }}>Emeka</p>
        </div>
        <div style={{ position: 'relative' }}>
          <Avatar initials="EM" size={36} bg={T.blue} />
          <span style={{ position: 'absolute', top: 0, right: 0, width: 9, height: 9, borderRadius: 9999, background: T.green, border: `2px solid ${T.surface2}` }} />
        </div>
      </div>

      {/* Summary card */}
      <div style={{ marginInline: 16, marginBottom: 12, borderRadius: 16, background: T.blue, padding: 20, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: 9999, background: 'rgba(255,255,255,0.06)' }} />
        <div style={{ position: 'absolute', bottom: -30, right: 20, width: 80, height: 80, borderRadius: 9999, background: 'rgba(255,255,255,0.04)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: 9999, background: '#4ADE80', display: 'inline-block' }} />
          <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Active now</span>
        </div>
        <p style={{ fontSize: 28, fontWeight: 900, color: 'white', letterSpacing: '-0.03em', lineHeight: 1 }}>3 Campaigns</p>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 4 }}>₦1.2M locked in escrow</p>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          {[
            { label: 'Reach', val: '142K' },
            { label: 'Creators', val: '18' },
            { label: 'Paid Out', val: '₦900K' },
          ].map((s) => (
            <div key={s.label} style={{ flex: 1, background: 'rgba(255,255,255,0.12)', borderRadius: 8, padding: '8px 0', textAlign: 'center' }}>
              <p style={{ fontSize: 13, fontWeight: 800, color: 'white', letterSpacing: '-0.01em' }}>{s.val}</p>
              <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)', fontWeight: 500, marginTop: 2, letterSpacing: '0.04em' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div style={{ flex: 1, marginInline: 16, background: T.surface, borderRadius: 16, border: `1px solid ${T.border}`, overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px' }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: T.text }}>Recent Activity</span>
          <span style={{ fontSize: 10, fontWeight: 600, color: T.blue }}>See all</span>
        </div>
        <Divider />
        {activity.map(({ Icon, color, bg, label, time }, i) => (
          <div key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 16px' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={14} style={{ color }} strokeWidth={2} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: T.text, lineHeight: 1.3 }}>{label}</p>
                <p style={{ fontSize: 10, color: T.hint, marginTop: 2 }}>{time}</p>
              </div>
              <ChevronRight size={12} style={{ color: T.hint, flexShrink: 0 }} />
            </div>
            {i < activity.length - 1 && <Divider />}
          </div>
        ))}
      </div>

      <div style={{ height: 12 }} />
      <BottomNav active="home" />
    </div>
  );
}

// ─── Screen 2: Inbox / Submissions ───────────────────────────────────────────

export function SponsorInboxScreen() {
  const creators = [
    { initials: 'DC', handle: '@dami_creates', followers: '45.2K', eng: '7.2%', bg: '#7C3BED' },
    { initials: 'CT', handle: '@chuka.tv',     followers: '22.8K', eng: '9.1%', bg: '#1A40B8' },
    { initials: 'TV', handle: '@tunde_vibes',  followers: '89.1K', eng: '11.4%', bg: '#00A050' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: T.surface2, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <StatusBar />

      {/* Nav bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingInline: 16, paddingBlock: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: T.surface, border: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ChevronLeft size={16} style={{ color: T.text }} strokeWidth={2.5} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 14, fontWeight: 800, color: T.text, letterSpacing: '-0.01em' }}>Submissions</p>
          <p style={{ fontSize: 10, color: T.hint, marginTop: 1 }}>BeatDrop Q3</p>
        </div>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: T.surface, border: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SlidersHorizontal size={14} style={{ color: T.text }} strokeWidth={2} />
        </div>
      </div>

      {/* Pending badge */}
      <div style={{ paddingInline: 16, marginBottom: 12 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: T.amberLight, borderRadius: 8, paddingInline: 10, paddingBlock: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: 9999, background: T.amber, display: 'inline-block' }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: T.amber }}>12 pending review</span>
        </div>
      </div>

      {/* Creator cards */}
      <div style={{ flex: 1, paddingInline: 16, display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto' }}>
        {creators.map((c, i) => (
          <div key={i} style={{ background: T.surface, borderRadius: 12, border: `1px solid ${T.border}`, overflow: 'hidden' }}>
            {/* Video preview */}
            <div style={{ height: 80, background: `linear-gradient(135deg, ${c.bg}CC, ${c.bg}66)`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ width: 32, height: 32, borderRadius: 9999, background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={14} fill="white" style={{ color: 'white', marginLeft: 2 }} />
              </div>
              <span style={{ position: 'absolute', bottom: 8, right: 8, fontSize: 9, fontWeight: 700, color: 'white', background: 'rgba(0,0,0,0.4)', borderRadius: 4, paddingInline: 5, paddingBlock: 2 }}>0:27</span>
            </div>
            {/* Creator info */}
            <div style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Avatar initials={c.initials} size={28} bg={c.bg} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: T.text }}>{c.handle}</p>
                <p style={{ fontSize: 10, color: T.hint }}>{c.followers} · {c.eng} eng</p>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <button style={{ fontSize: 10, fontWeight: 700, color: T.muted, background: T.surface2, border: `1px solid ${T.border}`, borderRadius: 9999, paddingInline: 10, paddingBlock: 5 }}>
                  Decline
                </button>
                <button style={{ fontSize: 10, fontWeight: 700, color: 'white', background: T.blue, border: 'none', borderRadius: 9999, paddingInline: 10, paddingBlock: 5 }}>
                  Approve
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: 16 }} />
      <BottomNav active="campaigns" />
    </div>
  );
}

// ─── Screen 3: Campaign Live Tracker ─────────────────────────────────────────

export function SponsorCampaignLiveScreen() {
  const rows = [
    { initials: 'DC', handle: '@dami_creates', views: '44K',  status: 'Verified', statusColor: T.green,  statusBg: T.greenLight, Icon: CheckCircle2 },
    { initials: 'TW', handle: '@tunde_waves',  views: '31K',  status: 'Verified', statusColor: T.green,  statusBg: T.greenLight, Icon: CheckCircle2 },
    { initials: 'LB', handle: '@lagos_biz',    views: '18K',  status: 'Pending',  statusColor: T.blue,   statusBg: T.blueLight,  Icon: CircleDot },
    { initials: 'FM', handle: '@finance_mob',  views: '9K',   status: 'Flagged',  statusColor: T.amber,  statusBg: T.amberLight, Icon: AlertTriangle },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: T.surface2, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <StatusBar />

      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingInline: 16, paddingBlock: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: T.surface, border: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ChevronLeft size={16} strokeWidth={2.5} style={{ color: T.text }} />
        </div>
        <p style={{ flex: 1, fontSize: 14, fontWeight: 800, color: T.text, letterSpacing: '-0.01em' }}>BeatDrop Q3</p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: '#FEE2E2', borderRadius: 9999, paddingInline: 8, paddingBlock: 4 }}>
          <span style={{ width: 6, height: 6, borderRadius: 9999, background: T.red, display: 'inline-block' }} />
          <span style={{ fontSize: 10, fontWeight: 700, color: T.red }}>Live</span>
        </div>
      </div>

      {/* Hero metric */}
      <div style={{ marginInline: 16, marginBottom: 10, background: T.surface, borderRadius: 16, border: `1px solid ${T.border}`, padding: '16px 20px' }}>
        <p style={{ fontSize: 10, fontWeight: 700, color: T.hint, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>Total Views</p>
        <p style={{ fontSize: 30, fontWeight: 900, color: T.text, letterSpacing: '-0.03em', lineHeight: 1 }}>148,204</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
          <TrendingUp size={11} style={{ color: T.green }} strokeWidth={2.5} />
          <span style={{ fontSize: 11, color: T.green, fontWeight: 600 }}>+2,341 in the last hour</span>
        </div>
        {/* Budget bar */}
        <div style={{ marginTop: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 10, color: T.hint, fontWeight: 600 }}>Budget used</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: T.blue }}>72% · ₦360K / ₦500K</span>
          </div>
          <div style={{ height: 6, borderRadius: 9999, background: T.blueLight, overflow: 'hidden' }}>
            <div style={{ width: '72%', height: '100%', background: `linear-gradient(90deg, ${T.blue}, ${T.purple})`, borderRadius: 9999 }} />
          </div>
        </div>
      </div>

      {/* Creator performance */}
      <div style={{ marginInline: 16, background: T.surface, borderRadius: 16, border: `1px solid ${T.border}`, overflow: 'hidden', marginBottom: 10 }}>
        <div style={{ padding: '10px 16px', borderBottom: `1px solid ${T.borderSoft}` }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: T.text }}>Creator Performance</span>
        </div>
        {rows.map(({ initials, handle, views, status, statusColor, statusBg, Icon }, i) => (
          <div key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 16px' }}>
              <Avatar initials={initials} size={26} bg={statusColor} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: T.text }}>{handle}</p>
                <p style={{ fontSize: 10, color: T.hint }}>{views} views</p>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: statusBg, borderRadius: 4, paddingInline: 6, paddingBlock: 3 }}>
                <Icon size={9} style={{ color: statusColor }} strokeWidth={2.5} />
                <span style={{ fontSize: 9, fontWeight: 700, color: statusColor }}>{status}</span>
              </div>
            </div>
            {i < rows.length - 1 && <Divider />}
          </div>
        ))}
      </div>

      {/* Payout queue */}
      <div style={{ marginInline: 16, background: T.surface, borderRadius: 16, border: `1px solid ${T.border}`, overflow: 'hidden', flex: 1 }}>
        <div style={{ padding: '10px 16px', borderBottom: `1px solid ${T.borderSoft}` }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: T.text }}>Payout Queue</span>
        </div>
        {[
          { initials: 'DC', handle: '@dami_creates', amt: '₦25,000' },
          { initials: 'TW', handle: '@tunde_waves',  amt: '₦25,000' },
        ].map((p, i) => (
          <div key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 16px' }}>
              <Avatar initials={p.initials} size={26} bg={T.blue} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: T.text }}>{p.handle}</p>
                <p style={{ fontSize: 10, color: T.hint }}>{p.amt}</p>
              </div>
              <button style={{ fontSize: 10, fontWeight: 700, color: 'white', background: T.green, border: 'none', borderRadius: 9999, paddingInline: 10, paddingBlock: 5 }}>
                Release
              </button>
            </div>
            {i < 1 && <Divider />}
          </div>
        ))}
      </div>

      <div style={{ height: 12 }} />
      <BottomNav active="campaigns" />
    </div>
  );
}

// ─── Screen 4: Wallet ─────────────────────────────────────────────────────────

export function SponsorWalletScreen() {
  const breakdown = [
    { Icon: Lock,         label: 'Locked',      sub: 'BeatDrop Q3',        val: '₦500,000',  color: T.blue,   bg: T.blueLight   },
    { Icon: Users,        label: 'Distributed', sub: 'SoundSave Campaign', val: '₦420,000',  color: T.purple, bg: T.purpleLight  },
    { Icon: CheckCircle2, label: 'Released',    sub: 'GreenLoop · Done',   val: '₦280,000',  color: T.green,  bg: T.greenLight   },
  ];

  const txns = [
    { Icon: ArrowDownLeft,  label: 'Funds added',          date: 'Apr 20', amt: '+₦500K', color: T.green },
    { Icon: ArrowUpRight,   label: 'Dami Creates payout',  date: 'Apr 18', amt: '−₦25K',  color: T.amber },
    { Icon: ArrowUpRight,   label: 'SoundSave distribution',date: 'Apr 15', amt: '−₦420K', color: T.amber },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: T.surface2, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <StatusBar />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingInline: 20, paddingBlock: 12 }}>
        <p style={{ fontSize: 22, fontWeight: 900, color: T.text, letterSpacing: '-0.03em' }}>Wallet</p>
        <button style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, color: T.blue, background: T.blueLight, border: `1px solid rgba(26,64,184,0.15)`, borderRadius: 9999, paddingInline: 12, paddingBlock: 6 }}>
          <Plus size={12} strokeWidth={2.5} />
          Add Funds
        </button>
      </div>

      {/* Balance card */}
      <div style={{ marginInline: 16, marginBottom: 12, borderRadius: 16, background: `linear-gradient(135deg, ${T.blue} 0%, ${T.purple} 100%)`, padding: '20px 20px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -24, right: -24, width: 96, height: 96, borderRadius: 9999, background: 'rgba(255,255,255,0.07)' }} />
        <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Total in Escrow</p>
        <p style={{ fontSize: 32, fontWeight: 900, color: 'white', letterSpacing: '-0.04em', lineHeight: 1 }}>₦1,200,000</p>
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 6 }}>Across 3 active campaigns</p>
      </div>

      {/* Breakdown */}
      <div style={{ marginInline: 16, background: T.surface, borderRadius: 16, border: `1px solid ${T.border}`, overflow: 'hidden', marginBottom: 10 }}>
        {breakdown.map(({ Icon, label, sub, val, color, bg }, i) => (
          <div key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 16px' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={14} style={{ color }} strokeWidth={2} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: T.text }}>{label}</p>
                <p style={{ fontSize: 10, color: T.hint }}>{sub}</p>
              </div>
              <p style={{ fontSize: 13, fontWeight: 800, color: T.text, letterSpacing: '-0.01em', fontVariantNumeric: 'tabular-nums' }}>{val}</p>
            </div>
            {i < breakdown.length - 1 && <Divider />}
          </div>
        ))}
      </div>

      {/* Transactions */}
      <div style={{ marginInline: 16, background: T.surface, borderRadius: 16, border: `1px solid ${T.border}`, overflow: 'hidden', flex: 1 }}>
        <div style={{ padding: '10px 16px', borderBottom: `1px solid ${T.borderSoft}` }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: T.text }}>Transactions</span>
        </div>
        {txns.map(({ Icon, label, date, amt, color }, i) => (
          <div key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px' }}>
              <div style={{ width: 30, height: 30, borderRadius: 9999, background: color === T.green ? T.greenLight : T.amberLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={13} style={{ color }} strokeWidth={2} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: T.text }}>{label}</p>
                <p style={{ fontSize: 10, color: T.hint }}>{date}</p>
              </div>
              <p style={{ fontSize: 12, fontWeight: 800, color, fontVariantNumeric: 'tabular-nums' }}>{amt}</p>
            </div>
            {i < txns.length - 1 && <Divider />}
          </div>
        ))}
      </div>

      {/* Withdraw CTA */}
      <div style={{ padding: '12px 16px 0' }}>
        <button style={{ width: '100%', height: 44, borderRadius: 9999, background: T.blue, color: 'white', fontSize: 13, fontWeight: 700, border: 'none', letterSpacing: '0.01em' }}>
          Withdraw Available Funds
        </button>
      </div>

      <div style={{ height: 8 }} />
      <BottomNav active="wallet" />
    </div>
  );
}
