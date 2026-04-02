'use client';

export default function AnalyticsMockup() {
  // Simple SVG chart path points
  const points = [
    [0, 80], [40, 60], [80, 70], [120, 40], [160, 55], [200, 25], [240, 35], [280, 15],
  ];

  const pathD = points.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(' ');
  const areaD = pathD + ` L 280 100 L 0 100 Z`;

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{ boxShadow: 'var(--shadow-xl)', border: '1px solid #E4E4EC', width: '360px' }}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-[#E4E4EC] flex items-center gap-2 bg-[#F7F7F9]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-auto text-xs text-[#8888AA]">Analytics Dashboard</span>
      </div>

      <div className="p-4">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { label: 'Engagement', value: '12.4K', delta: '+18%' },
            { label: 'Impressions', value: '48.2K', delta: '+24%' },
            { label: 'Campaigns', value: '3', delta: 'Active' },
          ].map((stat, i) => (
            <div key={i} className="bg-[#F7F7F9] rounded-lg p-2.5">
              <p className="text-[9px] text-[#8888AA] mb-0.5 font-medium uppercase tracking-wide">{stat.label}</p>
              <p
                className="text-base font-bold text-[#0F0F1A]"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {stat.value}
              </p>
              <p className="text-[9px] text-[#16A34A] font-semibold">{stat.delta}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-[#F7F7F9] rounded-xl p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-[#0F0F1A]">Engagement Rate</p>
            <div className="flex gap-1">
              {['7D', '30D', '90D'].map((t, i) => (
                <button
                  key={t}
                  className="rounded-full px-2 py-0.5 text-[9px]"
                  style={{
                    background: i === 1 ? '#7C5CFC' : 'transparent',
                    color: i === 1 ? 'white' : '#8888AA',
                    fontWeight: i === 1 ? 600 : 400,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <svg viewBox="0 0 280 100" className="w-full h-20" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7C5CFC" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#7C5CFC" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={areaD} fill="url(#chartGrad)" />
            <path d={pathD} fill="none" stroke="#7C5CFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {/* dots */}
            {points.map((p, i) => (
              <circle key={i} cx={p[0]} cy={p[1]} r="3" fill="#7C5CFC" />
            ))}
          </svg>
        </div>

        {/* Campaign list */}
        <div className="flex flex-col gap-1.5">
          {[
            { name: 'Paystack Q1', progress: 85, color: '#7C5CFC' },
            { name: 'PiggyVest Feb', progress: 100, color: '#16A34A' },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[10px] text-[#4A4A6A] w-24 truncate">{c.name}</span>
              <div className="flex-1 bg-[#E4E4EC] rounded-full h-1.5 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${c.progress}%`, background: c.color }}
                />
              </div>
              <span className="text-[10px] font-semibold" style={{ color: c.color, fontFamily: 'JetBrains Mono, monospace' }}>
                {c.progress}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
