'use client';

import { TrendingUp, Users, DollarSign, Eye } from 'lucide-react';

export default function SponsorAnalyticsMockup() {
  const chartPoints = [
    [0, 70], [35, 55], [70, 60], [105, 35], [140, 45], [175, 20], [210, 30], [245, 10], [280, 18],
  ];
  const pathD = chartPoints.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(' ');
  const areaD = pathD + ` L 280 80 L 0 80 Z`;

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{ boxShadow: 'var(--shadow-xl)', border: '1px solid #E4E4EC', width: '420px' }}
    >
      <div className="px-4 py-3 border-b border-[#E4E4EC] flex items-center gap-2 bg-[#F7F7F9]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-auto text-xs text-[#8888AA]">Sponsor Analytics</span>
      </div>

      <div className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-[#8888AA]">Paystack Q1 Campaign</p>
            <p className="text-base font-bold text-[#0F0F1A]">Performance Overview</p>
          </div>
          <div className="flex gap-1.5">
            {['7D', '30D', 'All'].map((t, i) => (
              <button
                key={t}
                className="rounded-full px-2.5 py-1 text-[10px] font-semibold transition-all"
                style={{
                  background: i === 1 ? '#7C5CFC' : '#F0F0F4',
                  color: i === 1 ? 'white' : '#8888AA',
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: 'Total Reach', value: '148K', icon: Eye, color: '#7C5CFC', bg: '#EDE9FF' },
            { label: 'Creators', value: '18', icon: Users, color: '#16A34A', bg: '#F0FDF4' },
            { label: 'Engagement', value: '8.4%', icon: TrendingUp, color: '#D97706', bg: '#FFFBEB' },
            { label: 'Spent', value: '₦450K', icon: DollarSign, color: '#DC2626', bg: '#FEF2F2' },
          ].map((s, i) => (
            <div key={i} className="bg-[#F7F7F9] rounded-lg p-2.5">
              <div className="w-6 h-6 rounded-md flex items-center justify-center mb-1.5" style={{ background: s.bg }}>
                <s.icon size={11} style={{ color: s.color }} />
              </div>
              <p className="text-sm font-bold text-[#0F0F1A] leading-none mb-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {s.value}
              </p>
              <p className="text-[9px] text-[#8888AA]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-[#F7F7F9] rounded-xl p-3 mb-4">
          <p className="text-xs font-semibold text-[#0F0F1A] mb-2">Daily Impressions</p>
          <svg viewBox="0 0 280 80" className="w-full h-20" preserveAspectRatio="none">
            <defs>
              <linearGradient id="sponsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7C5CFC" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#7C5CFC" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={areaD} fill="url(#sponsGrad)" />
            <path d={pathD} fill="none" stroke="#7C5CFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {chartPoints.map((p, i) => (
              <circle key={i} cx={p[0]} cy={p[1]} r="3" fill="#7C5CFC" />
            ))}
          </svg>
        </div>

        {/* Per creator breakdown */}
        <div>
          <p className="text-xs font-semibold text-[#0F0F1A] mb-2">Per-creator Breakdown</p>
          <div className="flex flex-col gap-2">
            {[
              { name: '@techwithtunde', reach: '22K', eng: '9.1%', status: 'completed', payout: '₦25,000' },
              { name: '@lagosbiz', reach: '18K', eng: '7.4%', status: 'tracking', payout: '₦25,000' },
              { name: '@financeNG', reach: '31K', eng: '11.2%', status: 'tracking', payout: '₦25,000' },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3 py-1.5 border-b border-[#F0F0F4] last:border-0">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7C5CFC] to-[#A78BFA] flex items-center justify-center text-[10px] font-bold text-white">
                  {c.name[1].toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-[#0F0F1A]">{c.name}</p>
                  <p className="text-[10px] text-[#8888AA]">{c.reach} reach · {c.eng} eng</p>
                </div>
                <span
                  className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    color: c.status === 'completed' ? '#16A34A' : '#7C5CFC',
                    background: c.status === 'completed' ? '#F0FDF4' : '#EDE9FF',
                  }}
                >
                  {c.status}
                </span>
                <span className="text-xs font-semibold text-[#0F0F1A]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {c.payout}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
