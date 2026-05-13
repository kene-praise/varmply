'use client';

import Image from 'next/image';
import {
  CheckCircle,
  Eye,
  Heart,
  Info,
  Megaphone,
  Search,
  TrendingUp,
  Wallet,
  Users,
} from 'lucide-react';

const T = {
  bg: '#F7F8FA',
  card: '#FFFFFF',
  ink: '#111827',
  muted: '#6B7280',
  hint: '#A3A8B8',
  line: '#E6E8EE',
  purple: '#7C3BED',
  purpleDark: '#6406CF',
  blue: '#2563EB',
  green: '#00A050',
  pink: '#E60073',
};

function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className={compact ? 'relative h-6 w-8 shrink-0' : 'relative h-5 w-7 shrink-0'}>
        <Image
          src="/mockups/varmply-logo.png"
          alt=""
          fill
          sizes={compact ? '32px' : '28px'}
          className="object-contain"
          priority
        />
      </span>
      <span className={compact ? 'text-[13px] font-black' : 'text-[14px] font-black'}>Varmply</span>
    </div>
  );
}

function Shell({
  role,
  active,
  compact = false,
  children,
}: {
  role: 'Sponsor' | 'Creator';
  active: string;
  compact?: boolean;
  children: React.ReactNode;
}) {
  const nav = role === 'Sponsor'
    ? ['Dashboard', 'Campaigns', 'Wallet', 'Analytics']
    : ['Dashboard', 'Marketplace', 'Campaigns', 'Wallet', 'Analytics'];

  return (
    <div className="h-full w-full overflow-hidden bg-[#F7F8FA] text-[#111827]" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      {!compact && (
        <aside className="absolute inset-y-0 left-0 w-[132px] border-r border-[#E6E8EE] bg-white px-4 py-5">
          <div className="mb-8">
            <BrandLockup />
          </div>
          <div className="mb-6 rounded-lg border border-[#E9D5FF] bg-[#FAF5FF] px-2.5 py-2 text-[9px] font-extrabold text-[#6406CF]">
            {role} account
          </div>
          <div className="space-y-1">
            {nav.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-lg px-2 py-2 text-[10px] font-bold"
                style={{
                  color: active === item ? T.purple : '#4B5563',
                  background: active === item ? 'rgba(124,59,237,0.08)' : 'transparent',
                }}
              >
                <span className="h-2 w-2 rounded-sm" style={{ background: active === item ? T.purple : '#D1D5DB' }} />
                {item}
              </div>
            ))}
          </div>
        </aside>
      )}
      <main className={compact ? 'h-full overflow-hidden p-4 pt-14' : 'h-full overflow-hidden pl-[132px]'}>
        {!compact && (
          <div className="flex h-16 items-center justify-between border-b border-[#E6E8EE] bg-white px-7">
            <div className="flex h-9 w-[280px] items-center gap-2 rounded-xl border border-[#E6E8EE] px-3 text-[11px] text-[#A3A8B8]">
              <Search size={13} />
              Search for {role === 'Sponsor' ? 'a creator' : 'campaigns'}
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full border border-[#E6E8EE]" />
              <div className="rounded-2xl border border-[#E6E8EE] bg-white px-4 py-2 text-[11px] font-bold">
                {role === 'Sponsor' ? 'Nova Rae' : 'Kemi Gold'}
              </div>
            </div>
          </div>
        )}
        <div className={compact ? 'h-full' : 'h-[calc(100%-64px)] overflow-hidden p-7'}>
          {children}
        </div>
      </main>
    </div>
  );
}

function MetricCard({ label, value, accent, icon: Icon }: { label: string; value: string; accent: string; icon: React.ElementType }) {
  return (
    <div className="rounded-[22px] border border-[#E6E8EE] bg-white p-4 shadow-[0_14px_34px_rgba(17,24,39,0.05)]">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#A3A8B8]">{label}</span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full" style={{ background: `${accent}16`, color: accent }}>
          <Icon size={13} />
        </span>
      </div>
      <div className="text-[24px] font-black leading-none tracking-[-0.04em]">{value}</div>
    </div>
  );
}

function MiniBars({ color }: { color: string }) {
  return (
    <div className="mt-5 flex h-12 items-end gap-1.5">
      {[14, 18, 12, 25, 31, 42, 38].map((h, i) => (
        <div key={i} className="flex-1 rounded-t" style={{ height: h, background: i > 4 ? color : `${color}30` }} />
      ))}
    </div>
  );
}

function PlatformIcon({ platform, size = 16 }: { platform: 'instagram' | 'tiktok'; size?: number }) {
  if (platform === 'instagram') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 4.2c.8 1.8 2.2 3 4.1 3.2v3.2c-1.5 0-2.8-.4-4-1.2v5.9c0 3.1-2.2 5.4-5.4 5.4-3 0-5.3-2.1-5.3-5 0-3.1 2.6-5.3 5.8-4.8v3.3c-1.4-.5-2.6.3-2.6 1.5 0 1.1.9 1.8 2 1.8 1.3 0 2.1-.8 2.1-2.4V3.3h3.3v.9Z" />
    </svg>
  );
}

export function CreatorHeroSocialScreen() {
  const cards = [
    { title: 'City Circuit Push', platform: 'instagram' as const, metric: '44.8K', label: 'views', color: T.pink, bg: '#FCE7F3' },
    { title: 'After Hours Replay', platform: 'tiktok' as const, metric: '14.4K', label: 'engagements', color: T.ink, bg: '#F3F4F6' },
    { title: 'Zara K Street Chorus', platform: 'instagram' as const, metric: '₦6.4K', label: 'tracking', color: T.purple, bg: '#F3E8FF' },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#F7F8FA] px-4 pb-5 pt-[88px] text-[#111827]" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <div className="absolute left-4 right-4 top-[60px] flex items-center justify-between">
        <BrandLockup compact />
        <span className="rounded-full bg-[#FEF3C7] px-2.5 py-1 text-[8px] font-black uppercase tracking-wider text-[#B45309]">tracking</span>
      </div>

      <div className="mb-3 rounded-[24px] border border-[#DBEAFE] bg-[linear-gradient(135deg,#EFF6FF,#FFFFFF)] p-4 shadow-[0_18px_45px_rgba(37,99,235,0.12)]">
        <p className="text-[8px] font-black uppercase tracking-[0.22em] text-[#2563EB]">creator dashboard</p>
        <h3 className="mt-2 text-[24px] font-black leading-[0.92] tracking-[-0.05em]">Post once. Track every result.</h3>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white p-3">
            <p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Views</p>
            <p className="mt-1 text-[20px] font-black">246K</p>
          </div>
          <div className="rounded-2xl bg-white p-3">
            <p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Pending</p>
            <p className="mt-1 text-[20px] font-black">₦667K</p>
          </div>
        </div>
      </div>

      <div className="relative h-[182px] overflow-hidden">
        <div
          className="creator-feed-cycle space-y-3"
          style={{ '--creator-card-shift': '182px' } as React.CSSProperties}
        >
          {[...cards, ...cards.slice(0, 1)].map((card, i) => (
            <div key={`${card.title}-${i}`} className="overflow-hidden rounded-[24px] border border-[#E6E8EE] bg-white shadow-[0_14px_34px_rgba(17,24,39,0.06)]">
              <div className="relative h-[90px] overflow-hidden" style={{ background: `linear-gradient(135deg, ${card.color}, #2563EB)` }}>
                <div className="absolute -left-8 top-4 h-24 w-24 rounded-[28px] bg-white/25 rotate-12" />
                <div className="absolute bottom-[-22px] right-[-12px] h-28 w-28 rounded-full bg-white/15" />
                <div className="absolute left-4 bottom-4">
                  <p className="text-[8px] font-black uppercase tracking-[0.24em] text-white/65">live campaign</p>
                  <p className="mt-1 max-w-[150px] text-[18px] font-black leading-[0.95] tracking-[-0.05em] text-white">{card.title}</p>
                </div>
                <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
                  <PlatformIcon platform={card.platform} size={13} />
                </div>
              </div>
              <div className="flex items-center justify-between p-3.5">
                <div>
                  <p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">{card.label}</p>
                  <p className="mt-1 text-[20px] font-black">{card.metric}</p>
                </div>
                <div className="creator-metric-pop rounded-full px-3 py-1.5 text-[9px] font-black" style={{ background: card.bg, color: card.color }}>
                  verified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 rounded-[22px] border border-[#E6E8EE] bg-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Next payout</p>
            <p className="mt-1 text-[21px] font-black">₦9,750</p>
          </div>
          <span className="rounded-full bg-[#DCFCE7] px-3 py-1.5 text-[9px] font-black text-[#047857]">ready</span>
        </div>
      </div>
    </div>
  );
}

export function SponsorHeroLiveScreen() {
  const campaigns = [
    { name: 'City Circuit Push', status: 'collecting submissions', metric: '90K verified' },
    { name: 'After Hours Replay', status: 'escrow releasing', metric: '₦380K paid' },
    { name: 'Zara K Street Chorus', status: 'creator review', metric: '18 active' },
  ];

  const submissions = [
    { creator: 'Kemi Gold', handle: '@kemigold', metric: '18.2K', payout: '₦91K', accent: T.green },
    { creator: 'Dami Creates', handle: '@dami_creates', metric: '12.8K', payout: '₦64K', accent: T.blue },
    { creator: 'Tola Frames', handle: '@tolaframes', metric: '9.6K', payout: '₦48K', accent: T.purple },
  ];

  const bars = [36, 52, 44, 68, 82, 74, 92];

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#F7F8FA] px-4 pb-5 pt-[114px] text-[#111827]" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <div className="absolute left-4 right-4 top-[66px] flex items-center justify-between">
        <BrandLockup compact />
        <span className="rounded-full bg-[#ECFDF5] px-2.5 py-1 text-[8px] font-black uppercase tracking-wider text-[#047857]">live</span>
      </div>

      <div className="mb-3 overflow-hidden rounded-[24px] border border-[#D8C2FF] bg-[radial-gradient(circle_at_84%_12%,rgba(124,59,237,0.24),transparent_34%),linear-gradient(135deg,#FFFFFF,#F4ECFF)] p-4 shadow-[0_18px_45px_rgba(100,6,207,0.16)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[8px] font-black uppercase tracking-[0.22em] text-[#6406CF]">active campaign</p>
            <h3 className="mt-2 text-[25px] font-black leading-[0.9] tracking-[-0.05em]">City Circuit is moving.</h3>
          </div>
          <div className="rounded-2xl border border-white/80 bg-white/75 px-3 py-2 text-right">
            <p className="text-[28px] font-black leading-none text-[#7C3BED]">4</p>
            <p className="text-[7px] font-black uppercase tracking-widest text-[#7C3BED]/70">live</p>
          </div>
        </div>
        <div className="mt-4 overflow-hidden rounded-[18px] border border-white/80 bg-black">
          <div className="relative h-[86px]">
            <video
              src="/videos/demo-1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
              style={{ objectPosition: '50% 14%' }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,39,0.55),transparent_55%),linear-gradient(0deg,rgba(0,0,0,0.35),transparent_55%)]" />
            <div className="absolute left-3 top-3">
              <p className="text-[8px] font-black uppercase tracking-[0.24em] text-white/70">campaign creative</p>
              <p className="mt-1 max-w-[120px] text-[16px] font-black leading-[0.92] tracking-[-0.04em] text-white">Street chorus clip</p>
            </div>
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-white/18 px-2.5 py-1 text-[8px] font-black uppercase tracking-wider text-white backdrop-blur-md">
              <PlatformIcon platform="tiktok" size={11} />
              preview
            </div>
          </div>
        </div>
        <div className="mt-4 h-[54px] overflow-hidden rounded-2xl border border-white/80 bg-white/70">
          <div
            className="sponsor-campaign-cycle"
            style={{ '--sponsor-campaign-shift': '54px' } as React.CSSProperties}
          >
            {[...campaigns, campaigns[0]].map((campaign, index) => (
              <div key={`${campaign.name}-${index}`} className="flex h-[54px] items-center justify-between gap-3 px-3">
                <div className="min-w-0">
                  <p className="truncate text-[12px] font-black">{campaign.name}</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-[8px] font-black uppercase tracking-wider text-[#047857]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00A050] sponsor-live-dot" />
                    {campaign.status}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-[#F3E8FF] px-2.5 py-1 text-[8px] font-black text-[#6406CF]">{campaign.metric}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white p-3">
            <p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Escrow</p>
            <p className="mt-1 text-[19px] font-black">₦2.4M</p>
          </div>
          <div className="rounded-2xl bg-white p-3">
            <p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Verified</p>
            <p className="mt-1 text-[19px] font-black">90K</p>
          </div>
        </div>
      </div>

      <div className="mb-3 rounded-[22px] border border-[#E6E8EE] bg-white p-4 shadow-[0_16px_36px_rgba(17,24,39,0.06)]">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-[8px] font-black uppercase tracking-[0.22em] text-[#A3A8B8]">performance</p>
            <p className="text-[15px] font-black">last 7 days</p>
          </div>
          <span className="rounded-full bg-[#F3E8FF] px-2.5 py-1 text-[8px] font-black text-[#7C3BED]">7D</span>
        </div>
        <div className="flex h-20 items-end gap-2">
          {bars.map((height, index) => (
            <div key={index} className="flex-1 rounded-t-lg bg-[#D8B4FE] sponsor-bars-pulse" style={{ height: `${height}%`, animationDelay: `${index * 120}ms`, background: index > 4 ? T.purple : '#D8B4FE' }} />
          ))}
        </div>
      </div>

      <div className="relative h-[164px] overflow-hidden">
        <div
          className="sponsor-submission-cycle space-y-3"
          style={{ '--sponsor-submission-shift': '94px' } as React.CSSProperties}
        >
          {[...submissions, ...submissions.slice(0, 1)].map((submission, i) => (
            <div key={`${submission.creator}-${i}`} className="rounded-[20px] border border-[#E6E8EE] bg-white p-3 shadow-[0_14px_30px_rgba(17,24,39,0.06)]">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full text-[11px] font-black text-white" style={{ background: submission.accent }}>
                  {submission.creator.split(' ').map((part) => part[0]).join('')}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] font-black">{submission.creator}</p>
                  <p className="text-[9px] font-semibold text-[#6B7280]">{submission.handle}</p>
                </div>
                <div className="text-right">
                  <p className="text-[12px] font-black">{submission.metric}</p>
                  <p className="text-[8px] font-black uppercase tracking-wider text-[#00A050]">{submission.payout}</p>
                </div>
              </div>
              <div className="mt-3 h-2 rounded-full bg-[#E5E7EB]">
                <div className="h-full rounded-full bg-[#00A050]" style={{ width: i % 2 === 0 ? '82%' : '64%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CampaignArtwork({ tone = 'violet' }: { tone?: 'violet' | 'orange' | 'blue' }) {
  const palette = {
    violet: ['#2E1065', '#7C3BED', '#F0ABFC', '#111827'],
    orange: ['#7C2D12', '#EA580C', '#FDBA74', '#111827'],
    blue: ['#172554', '#2563EB', '#93C5FD', '#111827'],
  }[tone];

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${palette[0]}, ${palette[1]})` }}
    >
      <div className="absolute inset-0 opacity-45" style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.55), transparent 18%), radial-gradient(circle at 82% 22%, rgba(255,255,255,0.30), transparent 16%), radial-gradient(circle at 70% 82%, rgba(0,0,0,0.35), transparent 24%)',
      }} />
      <div className="absolute -left-10 top-8 h-28 w-28 rotate-12 rounded-[32px]" style={{ background: palette[2], opacity: 0.45 }} />
      <div className="absolute bottom-[-22px] right-[-18px] h-32 w-32 rounded-full bg-white/15" />
      <div className="absolute left-5 bottom-5">
        <p className="text-[9px] font-black uppercase tracking-[0.28em] text-white/65">Varmply Campaign</p>
        <p className="mt-1 max-w-[145px] text-[22px] font-black leading-[0.9] tracking-[-0.06em] text-white">
          City Circuit Push
        </p>
      </div>
      <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white">
        <PlatformIcon platform="instagram" size={15} />
      </div>
    </div>
  );
}

function Avatar({ name, tone = 'purple' }: { name: string; tone?: 'purple' | 'blue' | 'green' | 'pink' }) {
  const colors = {
    purple: ['#F3E8FF', '#7C3BED'],
    blue: ['#DBEAFE', '#2563EB'],
    green: ['#DCFCE7', '#00A050'],
    pink: ['#FCE7F3', '#DB2777'],
  }[tone];
  return (
    <div
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-black"
      style={{ background: colors[0], color: colors[1] }}
    >
      {name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
    </div>
  );
}

export function SponsorDashboardScreen({ compact = false }: { compact?: boolean }) {
  if (compact) return <PhoneSponsorDashboard />;

  return (
    <Shell role="Sponsor" active="Dashboard" compact={compact}>
      <div className="grid h-full grid-cols-[1fr_230px] gap-5 max-lg:grid-cols-1">
        <div className="min-w-0">
          <div className="mb-5 overflow-hidden rounded-[28px] border border-[#D8C2FF] bg-[radial-gradient(circle_at_84%_16%,rgba(124,59,237,0.20),transparent_32%),linear-gradient(135deg,#FFFFFF_0%,#F4ECFF_100%)] p-6 shadow-[0_24px_70px_rgba(100,6,207,0.10)]">
            <div className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#6406CF]">active campaigns</div>
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-[28px] font-black leading-none tracking-[-0.04em]">Your campaigns are live</h3>
                <p className="mt-2 text-[13px] text-[#4B5563]">Monitor verified submissions, escrow, and creator performance.</p>
              </div>
              <div className="rounded-[24px] border border-white/70 bg-white/70 px-5 py-3 text-right shadow-sm">
                <div className="text-[50px] font-black leading-none text-[#7C3BED]">4</div>
                <div className="text-[9px] font-black uppercase tracking-[0.18em] text-[#7C3BED]/70">live</div>
              </div>
            </div>
          </div>

          <div className="mb-5 rounded-[28px] border border-[#E6E8EE] bg-white p-5 shadow-[0_20px_60px_rgba(17,24,39,0.05)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#B5B9C8]">your performance</div>
                <h4 className="text-[17px] font-black">last 7 days</h4>
              </div>
              <div className="flex gap-4 text-[10px] font-black text-[#B5B9C8]"><span className="text-[#7C3BED]">7D</span><span>30D</span><span>90D</span></div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="rounded-2xl bg-[#F8FAFC] p-4"><div className="text-[10px] font-black uppercase tracking-widest text-[#B5B9C8]">Engagement</div><div className="mt-2 text-[28px] font-black">7,490</div><MiniBars color={T.green} /></div>
              <div className="rounded-2xl bg-[#F8FAFC] p-4"><div className="text-[10px] font-black uppercase tracking-widest text-[#B5B9C8]">Impressions</div><div className="mt-2 text-[28px] font-black">90K</div><MiniBars color={T.blue} /></div>
              <div className="rounded-2xl bg-[#F8FAFC] p-4"><div className="text-[10px] font-black uppercase tracking-widest text-[#B5B9C8]">Distributed</div><div className="mt-2 text-[28px] font-black">₦380K</div><div className="mt-7 h-2 rounded-full bg-[#E5E7EB]"><div className="h-full w-[72%] rounded-full bg-[#7C3BED]" /></div></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {['Nova Rae Hook Replay', 'After Hours Replay'].map((name, i) => (
              <div key={name} className="overflow-hidden rounded-2xl border border-[#E6E8EE] bg-white">
                <div className="h-28">
                  <CampaignArtwork tone={i === 0 ? 'violet' : 'blue'} />
                </div>
                <div className="p-4">
                  <span className="mb-2 inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-[#2563EB]"><span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" /> Tracking</span>
                  <h5 className="text-[15px] font-black">{name}</h5>
                  <div className="mt-4 flex justify-between text-[11px] text-[#6B7280]"><span>{i + 1}/4 slots</span><span>0d left</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {!compact && (
          <div className="space-y-4">
            <MetricCard label="Distributed" value="₦380K" accent={T.green} icon={Wallet} />
            <MetricCard label="Active" value="4" accent={T.purple} icon={Megaphone} />
            <MetricCard label="Creators" value="18" accent={T.blue} icon={Users} />
            <MetricCard label="Impressions" value="176K" accent="#F59E0B" icon={Eye} />
          </div>
        )}
      </div>
    </Shell>
  );
}

function PhoneShell({ children, compactTop = true }: { children: React.ReactNode; compactTop?: boolean }) {
  return (
    <div className="h-full w-full overflow-hidden bg-[#F7F8FA] px-4 pb-5 text-[#111827]" style={{ paddingTop: compactTop ? 112 : 22, fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      {compactTop && (
        <div className="absolute left-4 right-4 top-[66px] flex items-center justify-start">
          <BrandLockup compact />
        </div>
      )}
      {children}
    </div>
  );
}

function PhoneSponsorDashboard() {
  return (
    <PhoneShell>
      <div className="mb-3 rounded-[24px] border border-[#D8C2FF] bg-[radial-gradient(circle_at_85%_12%,rgba(124,59,237,0.22),transparent_36%),linear-gradient(135deg,#FFFFFF,#F4ECFF)] p-4 shadow-[0_18px_45px_rgba(100,6,207,0.12)]">
        <p className="mb-2 text-[8px] font-black uppercase tracking-[0.22em] text-[#6406CF]">active campaigns</p>
        <div className="flex items-end justify-between">
          <h3 className="max-w-[140px] text-[24px] font-black leading-[0.92] tracking-[-0.05em]">Your campaigns are live</h3>
          <span className="text-[46px] font-black leading-none text-[#7C3BED]/55">4</span>
        </div>
        <p className="mt-3 max-w-[160px] text-[10px] leading-relaxed text-[#4B5563]">Monitor submissions, escrow, and creator performance.</p>
      </div>
      <div className="rounded-[22px] border border-[#E6E8EE] bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[7px] font-black uppercase tracking-[0.2em] text-[#B5B9C8]">your performance</p>
            <p className="text-[15px] font-black">last 7 days</p>
          </div>
          <p className="text-[8px] font-black text-[#7C3BED]">7D</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#F8FAFC] p-3">
            <p className="text-[8px] font-black uppercase tracking-widest text-[#B5B9C8]">Engagement</p>
            <p className="mt-1 text-[23px] font-black">7,490</p>
            <MiniBars color={T.green} />
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-3">
            <p className="text-[8px] font-black uppercase tracking-widest text-[#B5B9C8]">Impressions</p>
            <p className="mt-1 text-[23px] font-black">90K</p>
            <MiniBars color={T.blue} />
          </div>
        </div>
      </div>
      <div className="mt-3 overflow-hidden rounded-[22px] border border-[#E6E8EE] bg-white">
        <div className="h-24">
          <CampaignArtwork tone="violet" />
        </div>
        <div className="p-4">
          <span className="text-[8px] font-black uppercase tracking-widest text-[#2563EB]">Tracking</span>
          <h4 className="mt-1 text-[15px] font-black">Nova Rae Hook Replay</h4>
          <div className="mt-3 h-1.5 rounded-full bg-[#E5E7EB]"><div className="h-full w-[72%] rounded-full bg-[#7C3BED]" /></div>
        </div>
      </div>
    </PhoneShell>
  );
}

export function SponsorCampaignDetailScreen({ compact = false }: { compact?: boolean }) {
  if (compact) return <PhoneSponsorCampaignDetail />;

  return (
    <Shell role="Sponsor" active="Campaigns" compact={compact}>
      <div className="h-full overflow-hidden">
        <div className="relative mb-5 overflow-hidden rounded-3xl p-7 text-white">
          <div className="absolute inset-0"><CampaignArtwork tone="orange" /></div>
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative z-10">
          <div className="mb-10 inline-flex rounded-full bg-white/20 px-4 py-2 text-[12px] font-bold backdrop-blur">← Back to dashboard</div>
          <div className="flex items-center gap-3 text-[12px] font-bold text-white/80"><span className="rounded-full bg-emerald-400/25 px-3 py-1 text-emerald-200">Running</span> Instagram</div>
          <h3 className="mt-3 text-[36px] font-black tracking-[-0.05em]">Nova Rae Hook Replay</h3>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <MetricCard label="Impressions" value="176K" accent={T.pink} icon={Eye} />
          <MetricCard label="Engagement" value="14.4K" accent={T.pink} icon={Heart} />
          <MetricCard label="Creators" value="18" accent={T.blue} icon={Users} />
          <MetricCard label="Approved" value="12" accent={T.green} icon={CheckCircle} />
        </div>
        <div className="mt-5 grid grid-cols-[1fr_1.3fr] gap-5">
          <div className="rounded-3xl border border-[#E6E8EE] bg-white p-5">
            <h4 className="mb-4 text-[18px] font-black">Budget breakdown</h4>
            {[
              ['Total budget', '₦2.5M'],
              ['Spent', '₦380K'],
              ['Remaining', '₦2.12M'],
              ['Slots', '18/40 filled'],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-[#EEF0F4] py-3 text-[13px] last:border-0">
                <span className="text-[#6B7280]">{label}</span><span className="font-black">{value}</span>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-[#E6E8EE] bg-white p-5">
            <div className="mb-4 flex items-center justify-between"><h4 className="text-[18px] font-black">Latest submissions</h4><span className="text-[12px] font-bold text-[#7C3BED]">View all →</span></div>
            {['Adeola Grace', 'David Okonkwo', 'Chioma Eze'].map((name, i) => (
              <div key={name} className="flex items-center justify-between border-b border-[#EEF0F4] py-3 last:border-0">
                <div className="flex items-center gap-3"><Avatar name={name} tone={i === 1 ? 'green' : 'purple'} /><div><p className="text-[13px] font-black">{name}</p><p className="text-[11px] text-[#6B7280]">{i === 1 ? 'Story' : 'Reel'} · {i + 2}h ago</p></div></div>
                <span className="rounded-full px-3 py-1 text-[10px] font-bold" style={{ background: i === 1 ? '#DCFCE7' : '#FEF3C7', color: i === 1 ? '#047857' : '#B45309' }}>{i === 1 ? 'Approved' : 'Submitted'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}

function PhoneSponsorCampaignDetail() {
  return (
    <PhoneShell>
      <div className="relative mb-3 overflow-hidden rounded-[24px] p-4 text-white">
        <div className="absolute inset-0"><CampaignArtwork tone="orange" /></div>
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10">
        <span className="rounded-full bg-emerald-400/25 px-2 py-1 text-[8px] font-black uppercase tracking-widest text-emerald-100">Running</span>
        <h3 className="mt-8 text-[25px] font-black leading-none tracking-[-0.05em]">Nova Rae Hook Replay</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-[20px] border border-[#E6E8EE] bg-white p-3"><p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Impressions</p><p className="mt-2 text-[22px] font-black">176K</p></div>
        <div className="rounded-[20px] border border-[#E6E8EE] bg-white p-3"><p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Engagement</p><p className="mt-2 text-[22px] font-black">14.4K</p></div>
      </div>
      <div className="mt-3 rounded-[22px] border border-[#E6E8EE] bg-white p-4">
        <h4 className="mb-3 text-[15px] font-black">Latest submissions</h4>
        {['Adeola Grace', 'David Okonkwo', 'Chioma Eze'].map((name, i) => (
          <div key={name} className="flex items-center justify-between border-b border-[#EEF0F4] py-2.5 last:border-0">
            <div className="flex items-center gap-2.5"><Avatar name={name} tone={i === 1 ? 'green' : 'purple'} /><div><p className="text-[11px] font-black">{name}</p><p className="text-[9px] text-[#6B7280]">{i === 1 ? 'Story' : 'Reel'} · {i + 2}h ago</p></div></div>
            <span className="rounded-full bg-[#FEF3C7] px-2 py-1 text-[8px] font-bold text-[#B45309]">Submitted</span>
          </div>
        ))}
      </div>
    </PhoneShell>
  );
}

export function SponsorSetupScreen({ compact = false }: { compact?: boolean }) {
  if (!compact) return <SponsorCampaignDetailScreen />;

  return (
    <PhoneShell>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#7C3BED]">setup</span>
        <span className="text-[9px] font-bold text-[#6B7280]">Step 1 of 4</span>
      </div>
      <div className="rounded-[24px] border border-[#E6E8EE] bg-white p-4 shadow-[0_14px_34px_rgba(17,24,39,0.06)]">
        <p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Campaign name</p>
        <h3 className="mt-1 text-[17px] font-black tracking-[-0.03em]">Zara K Street Chorus</h3>
        <div className="my-4 h-px bg-[#EEF0F4]" />
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-2xl border border-[#E9D5FF] bg-[#FAF5FF] p-3">
            <p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Platform</p>
            <p className="mt-1 text-[12px] font-black text-[#7C3BED]">TikTok</p>
          </div>
          <div className="rounded-2xl border border-[#DCFCE7] bg-[#F0FDF4] p-3">
            <p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Content</p>
            <p className="mt-1 text-[12px] font-black text-[#00A050]">Video</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Description preview</p>
          <div className="mt-2 rounded-2xl border border-[#E6E8EE] bg-[#F8FAFC] p-3 text-[10px] leading-relaxed text-[#4B5563]">
            Creators should post a chorus hook video, tag the campaign handle, and keep the sound audible.
          </div>
        </div>
      </div>
      <div className="mt-3 rounded-[22px] border border-[#E6E8EE] bg-white p-4">
        <p className="mb-2 text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Requirements</p>
        {['Minimum 20K followers', 'Use #StreetChorus', 'Submit post link'].map((item) => (
          <div key={item} className="flex items-center gap-2 py-1.5 text-[11px] font-bold text-[#111827]">
            <CheckCircle size={12} className="text-[#00A050]" />
            {item}
          </div>
        ))}
      </div>
    </PhoneShell>
  );
}

export function SponsorEscrowScreen({ compact = false }: { compact?: boolean }) {
  if (!compact) return <SponsorDashboardScreen />;

  return (
    <PhoneShell>
      <div className="rounded-[26px] border border-[#DBEAFE] bg-[linear-gradient(135deg,#EFF6FF,#FFFFFF)] p-5 text-center shadow-[0_18px_45px_rgba(37,99,235,0.12)]">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-[20px] border border-[#BFDBFE] bg-[#DBEAFE] text-[22px]">
          <Wallet size={22} className="text-[#2563EB]" />
        </div>
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#93A3B8]">Campaign locked</p>
        <p className="mt-2 text-[31px] font-black tracking-[-0.05em]">₦6,000,000</p>
        <p className="mt-2 text-[10px] leading-relaxed text-[#6B7280]">Budget is secured before creators start applying.</p>
      </div>
      <div className="mt-3 rounded-[22px] border border-[#E6E8EE] bg-white p-4 shadow-[0_14px_34px_rgba(17,24,39,0.06)]">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Allocated budget</p>
          <p className="text-[11px] font-black text-[#2563EB]">85%</p>
        </div>
        <div className="h-2 rounded-full bg-[#E5E7EB]"><div className="h-full w-[85%] rounded-full bg-[#2563EB]" /></div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#F8FAFC] p-3">
            <p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Slots</p>
            <p className="mt-1 text-[18px] font-black">3</p>
          </div>
          <div className="rounded-2xl bg-[#F8FAFC] p-3">
            <p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Rate</p>
            <p className="mt-1 text-[18px] font-black">₦5/eng</p>
          </div>
        </div>
      </div>
    </PhoneShell>
  );
}

export function SponsorMonitoringScreen({ compact = false }: { compact?: boolean }) {
  if (!compact) return <SponsorDashboardScreen />;

  return (
    <PhoneShell>
      <div className="mb-3 rounded-[24px] border border-[#E6E8EE] bg-white p-4 shadow-[0_14px_34px_rgba(17,24,39,0.06)]">
        <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#00A050]">live tracking</p>
        <div className="mt-2 flex items-start justify-between">
          <div>
            <h3 className="text-[18px] font-black tracking-[-0.03em]">Campaign metrics</h3>
            <p className="mt-1 text-[10px] text-[#6B7280]">Zara K Street Chorus</p>
          </div>
          <span className="h-2.5 w-2.5 rounded-full bg-[#00A050]" />
        </div>
        <div className="mt-5 flex h-28 items-end gap-2">
          {[14, 32, 24, 68, 84, 38, 78].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-lg bg-[#D1FAE5]">
              <div className="mt-auto rounded-t-lg bg-[#00A050]" style={{ height: h }} />
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-between text-[8px] font-bold text-[#A3A8B8]">
          {['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'].map((d) => <span key={d}>{d}</span>)}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-[20px] border border-[#E6E8EE] bg-white p-3"><p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Engagement</p><p className="mt-2 text-[21px] font-black">12,034</p></div>
        <div className="rounded-[20px] border border-[#E6E8EE] bg-white p-3"><p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Impressions</p><p className="mt-2 text-[21px] font-black">159K</p></div>
      </div>
    </PhoneShell>
  );
}

export function SponsorPayoutScreen({ compact = false }: { compact?: boolean }) {
  if (!compact) return <SponsorCampaignDetailScreen />;

  return (
    <PhoneShell>
      <div className="rounded-[26px] border border-[#FED7AA] bg-[linear-gradient(135deg,#FFF7ED,#FFFFFF)] p-5 text-center shadow-[0_18px_45px_rgba(217,119,6,0.12)]">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-[20px] border border-[#FED7AA] bg-[#FFEDD5]">
          <CheckCircle size={23} className="text-[#D97706]" />
        </div>
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#C4A484]">Total released</p>
        <p className="mt-2 text-[31px] font-black tracking-[-0.05em]">₦795,000</p>
        <p className="mt-2 text-[10px] leading-relaxed text-[#6B7280]">Funds release only for validated creator performance.</p>
      </div>
      <div className="mt-3 rounded-[22px] border border-[#E6E8EE] bg-white p-4 shadow-[0_14px_34px_rgba(17,24,39,0.06)]">
        {[
          ['Dami Creates', '@dami_creates', '₦25,000'],
          ['Tunde Waves', '@tunde_waves', '₦18,500'],
          ['Lola Beats', '@lola.beats', '₦12,000'],
        ].map(([name, handle, amount], i) => (
          <div key={name} className="flex items-center justify-between border-b border-[#EEF0F4] py-2.5 last:border-0">
            <div className="flex items-center gap-2.5">
              <Avatar name={name} tone={i === 0 ? 'purple' : i === 1 ? 'green' : 'blue'} />
              <div><p className="text-[11px] font-black">{name}</p><p className="text-[9px] text-[#6B7280]">{handle}</p></div>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-black text-[#D97706]">{amount}</p>
              <p className="mt-1 rounded-full bg-[#FEF3C7] px-2 py-0.5 text-[8px] font-bold text-[#B45309]">Paid out</p>
            </div>
          </div>
        ))}
      </div>
    </PhoneShell>
  );
}

export function CreatorSocialConnectScreen({ compact = false }: { compact?: boolean }) {
  if (!compact) return <CreatorCampaignDetailScreen />;

  return (
    <PhoneShell>
      <h3 className="text-[23px] font-black tracking-[-0.05em]">Platform integrations</h3>
      <p className="mb-4 text-[10px] leading-relaxed text-[#6B7280]">
        Connect social accounts so Varmply can validate campaign performance.
      </p>
      {[
        ['instagram', '@kemi.gold', 'Connected', 'over 2 years ago', '#E60073'],
        ['tiktok', '@kemi_gold', 'Connected', 'over 2 years ago', '#111827'],
      ].map(([platform, handle, status, lastConnected, color]) => (
        <div key={platform} className="mb-3 rounded-[22px] border border-[#E6E8EE] bg-white p-4 shadow-[0_14px_34px_rgba(17,24,39,0.06)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: `${color}14`, color }}>
                <PlatformIcon platform={platform as 'instagram' | 'tiktok'} size={18} />
              </div>
              <div>
                <p className="text-[13px] font-black capitalize">{platform}</p>
                <p className="text-[9px] text-[#6B7280]">{handle}</p>
              </div>
            </div>
            <span className="rounded-full bg-[#DCFCE7] px-2.5 py-1 text-[8px] font-black uppercase tracking-wider text-[#047857]">
              {status}
            </span>
          </div>
          <div className="mt-4 rounded-2xl bg-[#F8FAFC] p-3">
            <div className="flex items-center justify-between text-[9px]">
              <span className="font-bold text-[#A3A8B8]">Last connected</span>
              <span className="font-black text-[#111827]">{lastConnected}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="rounded-[22px] border border-[#E6E8EE] bg-white p-4">
        <p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Eligibility signals</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#F8FAFC] p-3"><p className="text-[8px] font-black text-[#A3A8B8]">Followers</p><p className="mt-1 text-[17px] font-black">148K</p></div>
          <div className="rounded-2xl bg-[#F8FAFC] p-3"><p className="text-[8px] font-black text-[#A3A8B8]">Eng. rate</p><p className="mt-1 text-[17px] font-black text-[#00A050]">12.4%</p></div>
        </div>
      </div>
    </PhoneShell>
  );
}

export function CreatorMarketplaceScreen({ compact = false }: { compact?: boolean }) {
  if (compact) return <PhoneCreatorMarketplace />;

  return (
    <Shell role="Creator" active="Marketplace" compact={compact}>
      <div>
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h3 className="text-[28px] font-black tracking-[-0.04em]">Marketplace</h3>
            <p className="text-[13px] text-[#6B7280]">Browse creator opportunities that match your niche.</p>
          </div>
          <div className="flex gap-2"><button className="rounded-xl border border-[#E6E8EE] bg-white px-4 py-2 text-[12px]">Most recent</button><button className="rounded-xl border border-[#E6E8EE] bg-white px-4 py-2 text-[12px]">All budgets</button></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            ['Nova Rae Hook Replay', 'Nova Rae', '₦2.5M', 'Open now', 'violet'],
            ['Zara K Street Chorus', 'Zara K', '₦6M', 'Action required', 'orange'],
            ['Midnight Atlas Run', 'Atlas', '₦8M', 'Open now', 'blue'],
          ].map(([title, artist, budget, status, tone]) => (
            <div key={title} className="overflow-hidden rounded-[24px] border border-[#E6E8EE] bg-white shadow-[0_18px_44px_rgba(17,24,39,0.06)]">
              <div className="h-44"><CampaignArtwork tone={tone as 'violet' | 'orange' | 'blue'} /></div>
              <div className="p-4">
                <div className="mb-3 flex items-center justify-between"><h4 className="truncate text-[15px] font-black">{title}</h4><span className="rounded-full bg-[#FEE2E2] px-2 py-1 text-[9px] font-bold text-[#B91C1C]">{status}</span></div>
                <div className="mb-4 flex justify-between rounded-xl bg-[#F8FAFC] p-3 text-[12px]"><span>{artist}</span><strong>{budget}</strong></div>
                <div className="mb-2 flex justify-between text-[10px] text-[#6B7280]"><span>Campaign progress</span><span>28% spent</span></div>
                <div className="h-1.5 rounded-full bg-[#E5E7EB]"><div className="h-full w-[28%] rounded-full bg-[#7C3BED]" /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function PhoneCreatorMarketplace() {
  return (
    <PhoneShell>
      <h3 className="text-[26px] font-black tracking-[-0.05em]">Marketplace</h3>
      <p className="mb-4 text-[10px] text-[#6B7280]">Find campaigns that match your niche.</p>
      <div className="mb-4 flex gap-2">
        {['All', 'Open', 'Available'].map((tab, i) => (
          <span key={tab} className="rounded-full px-3 py-1.5 text-[9px] font-bold" style={{ background: i === 0 ? '#7C3BED' : '#FFFFFF', color: i === 0 ? '#FFFFFF' : '#6B7280', border: i === 0 ? 'none' : '1px solid #E6E8EE' }}>{tab}</span>
        ))}
      </div>
      {[
        ['Pulse Canvas - City Circuit Push', 'Eligible', '₦6.8M', 'violet'],
        ['After Hours Replay 2 Live', 'Open', '₦6M', 'blue'],
      ].map(([title, status, budget, tone], i) => (
        <div key={title} className="mb-3 overflow-hidden rounded-[22px] border border-[#E6E8EE] bg-white shadow-[0_12px_32px_rgba(17,24,39,0.06)]">
          <div className="h-28">
            <CampaignArtwork tone={tone as 'violet' | 'blue'} />
          </div>
          <div className="p-3.5">
            <div className="mb-2 flex items-center justify-between">
              <span className="rounded-full bg-[#DCFCE7] px-2 py-1 text-[8px] font-black text-[#047857]">{status}</span>
              <span className="text-[9px] font-bold text-[#6B7280]">{i === 0 ? '1 day' : '3 days'} left</span>
            </div>
            <h4 className="truncate text-[13px] font-black">{title}</h4>
            <div className="mt-3 flex justify-between rounded-xl bg-[#F8FAFC] p-2.5 text-[10px]"><span>Campaign budget</span><strong>{budget}</strong></div>
          </div>
        </div>
      ))}
    </PhoneShell>
  );
}

export function CreatorSubmitScreen({ compact = false }: { compact?: boolean }) {
  if (!compact) return <CreatorCampaignDetailScreen />;

  return (
    <PhoneShell>
      <div className="mb-3 overflow-hidden rounded-[24px] border border-[#E6E8EE] bg-white shadow-[0_14px_34px_rgba(17,24,39,0.06)]">
        <div className="h-24">
          <CampaignArtwork tone="orange" />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="rounded-full bg-[#FEF3C7] px-2 py-1 text-[8px] font-black text-[#B45309]">Action required</span>
            <span className="text-[9px] font-bold text-[#6B7280]">28 Apr 2026</span>
          </div>
          <h3 className="text-[15px] font-black tracking-[-0.03em]">Submit your content</h3>
          <p className="mt-1 text-[10px] leading-relaxed text-[#6B7280]">Drop the live post link so tracking and validation can begin.</p>
        </div>
      </div>
      <div className="rounded-[22px] border border-[#E6E8EE] bg-white p-4 shadow-[0_14px_34px_rgba(17,24,39,0.06)]">
        <p className="mb-3 text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Brief checklist</p>
        {['Use campaign sound', 'Tag @citycircuit', 'Keep post public'].map((item) => (
          <div key={item} className="flex items-center gap-2 border-b border-[#EEF0F4] py-2 text-[11px] font-bold last:border-0">
            <CheckCircle size={12} className="text-[#00A050]" />
            {item}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-[22px] border border-[#E6E8EE] bg-white p-4">
        <p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Content link</p>
        <div className="mt-2 rounded-2xl border border-[#E6E8EE] bg-[#F8FAFC] px-3 py-3 text-[10px] font-bold text-[#6B7280]">
          https://instagram.com/reel/...
        </div>
        <button className="mt-3 h-10 w-full rounded-full bg-[#D97706] text-[11px] font-black text-white">
          Submit for validation
        </button>
      </div>
    </PhoneShell>
  );
}

export function CreatorCampaignDetailScreen({ compact = false }: { compact?: boolean }) {
  if (compact) return <PhoneCreatorCampaignDetail />;

  return (
    <Shell role="Creator" active="Campaigns" compact={compact}>
      <div className="grid h-full grid-cols-[0.9fr_1.3fr] gap-5">
        <div className="rounded-[28px] border border-[#E6E8EE] bg-white p-5 shadow-[0_18px_50px_rgba(17,24,39,0.05)]">
          <div className="mb-4 flex items-center gap-2"><Info size={15} color={T.purple} /><h3 className="text-[18px] font-black">Campaign details</h3></div>
          {[
            ['Campaign status', 'Joined'],
            ['Submission deadline', '25 Apr 2026'],
            ['Base payout rate', '₦5 per engagement'],
            ['Platform', 'TikTok · Instagram'],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between gap-4 py-3 text-[13px]"><span className="text-[#6B7280]">{label}</span><strong className="text-right text-[#111827]">{value}</strong></div>
          ))}
          <div className="mt-4 text-[10px] text-[#6B7280]">Budget left</div>
          <div className="mt-2 h-2 rounded-full bg-[#E5E7EB]"><div className="h-full w-[76%] rounded-full bg-[#7C3BED]" /></div>
          <div className="mt-5 rounded-2xl bg-[#F3F4F6] p-4 text-[13px] font-bold text-[#6B7280]">Your submission is tracking and awaiting the next platform sync.</div>
        </div>
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <MetricCard label="Impressions" value="176K" accent={T.blue} icon={Eye} />
            <MetricCard label="Engagements" value="14.4K" accent={T.pink} icon={Heart} />
          </div>
          <div className="rounded-[24px] border border-[#BBD7FF] bg-[#EFF6FF] px-5 py-4 text-[13px] text-[#1E40AF]">Engagement metrics update as platforms refresh their data. Typical sync interval is every 2-4 hours.</div>
          <div className="rounded-[28px] border border-[#E6E8EE] bg-white p-5 shadow-[0_18px_50px_rgba(17,24,39,0.05)]">
            <h3 className="mb-4 text-[18px] font-black">Your submission</h3>
            <div className="rounded-2xl border border-[#E6E8EE] p-4">
              <div className="flex items-center justify-between"><div><p className="font-black">Dance video.mp4</p><p className="text-[12px] text-[#6B7280]">Uploaded · tracking</p></div><span className="rounded-full bg-[#DBEAFE] px-3 py-1 text-[10px] font-bold text-[#2563EB]">Tracking</span></div>
              <div className="mt-4 flex gap-5 text-[15px]"><strong>176K</strong><span className="text-[#6B7280]">impressions</span><strong>14.4K</strong><span className="text-[#6B7280]">engagements</span></div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function PhoneCreatorCampaignDetail() {
  return (
    <PhoneShell>
      <div className="mb-3 rounded-[22px] border border-[#E6E8EE] bg-white p-4 shadow-[0_14px_34px_rgba(17,24,39,0.06)]">
        <div className="mb-4 flex items-center gap-2"><Info size={13} color={T.purple} /><h3 className="text-[17px] font-black">Submission required</h3></div>
        {[
          ['Status', 'Action required'],
          ['Deadline', '28 Apr 2026'],
          ['Payout', '₦5 per engagement'],
          ['Platform', 'Instagram'],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between gap-3 py-2.5 text-[11px]"><span className="text-[#6B7280]">{label}</span><strong className="text-right">{value}</strong></div>
        ))}
        <div className="mt-2 h-2 rounded-full bg-[#E5E7EB]"><div className="h-full w-[76%] rounded-full bg-[#7C3BED]" /></div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-[20px] border border-[#E6E8EE] bg-white p-3"><p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Impressions</p><p className="mt-2 text-[22px] font-black">176K</p></div>
        <div className="rounded-[20px] border border-[#E6E8EE] bg-white p-3"><p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Engagement</p><p className="mt-2 text-[22px] font-black">14.4K</p></div>
      </div>
      <div className="mt-3 rounded-[22px] border border-[#E6E8EE] bg-white p-4 shadow-[0_14px_34px_rgba(17,24,39,0.06)]">
        <h4 className="mb-3 text-[15px] font-black">Your submission</h4>
        <div className="rounded-2xl border border-[#E6E8EE] p-3">
          <p className="text-[12px] font-black">Paste post link</p>
          <p className="mt-1 text-[9px] text-[#6B7280]">https://instagram.com/reel/...</p>
          <div className="mt-3 flex gap-2 text-[10px]"><strong>176K</strong><span className="text-[#6B7280]">impressions</span><strong>14.4K</strong><span className="text-[#6B7280]">eng</span></div>
        </div>
      </div>
    </PhoneShell>
  );
}

export function CreatorEarningsScreen({ compact = false }: { compact?: boolean }) {
  if (compact) return <PhoneCreatorEarnings />;

  return (
    <Shell role="Creator" active="Wallet" compact={compact}>
      <div>
        <h3 className="mb-1 text-[28px] font-black tracking-[-0.04em]">My earnings</h3>
        <p className="mb-5 text-[13px] text-[#6B7280]">View and manage all payouts.</p>
        <div className="mb-5 grid grid-cols-3 gap-4">
          <div className="rounded-[24px] bg-[linear-gradient(135deg,#7C3BED,#2563EB)] p-5 text-white shadow-[0_22px_50px_rgba(124,59,237,0.22)]"><p className="text-[12px] text-white/70">Available balance</p><p className="mt-3 text-[30px] font-black">₦9,750</p><button className="mt-4 rounded-xl bg-white px-5 py-2 text-[13px] font-black text-[#7C3BED]">Withdraw</button></div>
          <MetricCard label="Tracking earnings" value="₦265" accent={T.green} icon={TrendingUp} />
          <MetricCard label="Pending payout" value="₦6,410" accent={T.purple} icon={Wallet} />
        </div>
        <div className="rounded-[28px] border border-[#E6E8EE] bg-white p-5 shadow-[0_18px_50px_rgba(17,24,39,0.05)]">
          <h4 className="mb-4 text-[17px] font-black">Transaction history</h4>
          {['Earnings recorded', 'Withdrawal failed', 'Earnings recorded', 'Campaign payout'].map((label, i) => (
            <div key={`${label}-${i}`} className="flex items-center justify-between border-b border-[#EEF0F4] py-4 last:border-0">
              <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F4F6] text-[#00A050]"><TrendingUp size={14} /></span><div><p className="text-[13px] font-black">{label}</p><p className="text-[11px] text-[#6B7280]">27 Apr 2026</p></div></div>
              <strong className={i === 1 ? 'text-[#111827]' : 'text-[#16A34A]'}>{i === 1 ? '-₦5,000' : '+₦5,000'}</strong>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function PhoneCreatorEarnings() {
  return (
    <PhoneShell>
      <h3 className="text-[25px] font-black tracking-[-0.05em]">My earnings</h3>
      <p className="mb-4 text-[10px] text-[#6B7280]">View and manage payouts.</p>
      <div className="mb-3 rounded-[24px] bg-[linear-gradient(135deg,#7C3BED,#2563EB)] p-4 text-white shadow-[0_18px_45px_rgba(124,59,237,0.22)]">
        <p className="text-[10px] text-white/70">Available balance</p>
        <p className="mt-2 text-[30px] font-black">₦9,750</p>
        <button className="mt-3 rounded-xl bg-white px-4 py-2 text-[11px] font-black text-[#7C3BED]">Withdraw</button>
      </div>
      <div className="mb-3 grid grid-cols-2 gap-3">
        <div className="rounded-[20px] border border-[#E6E8EE] bg-white p-3"><p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Tracking</p><p className="mt-2 text-[20px] font-black">₦265</p></div>
        <div className="rounded-[20px] border border-[#E6E8EE] bg-white p-3"><p className="text-[8px] font-black uppercase tracking-widest text-[#A3A8B8]">Pending</p><p className="mt-2 text-[20px] font-black">₦6,410</p></div>
      </div>
      <div className="rounded-[22px] border border-[#E6E8EE] bg-white p-4">
        <h4 className="mb-2 text-[14px] font-black">Transactions</h4>
        {['Earnings recorded', 'Withdrawal failed', 'Campaign payout'].map((label, i) => (
          <div key={label} className="flex items-center justify-between border-b border-[#EEF0F4] py-2.5 last:border-0">
            <p className="text-[11px] font-black">{label}</p>
            <strong className={i === 1 ? 'text-[11px]' : 'text-[11px] text-[#16A34A]'}>{i === 1 ? '-₦5K' : '+₦5K'}</strong>
          </div>
        ))}
      </div>
    </PhoneShell>
  );
}
