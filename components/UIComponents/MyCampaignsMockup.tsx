// Varmply — My Campaigns (Sponsor view, Active tab)
// Recreation of Image #5 — campaign list with stat cards and campaign grid.
// Designed to sit INSIDE BrowserWindow — no own browser chrome.

import Image from 'next/image';

// ── Sidebar nav ───────────────────────────────────────────────────────────────
function NavItem({ label, active, children }: { label: string; active?: boolean; children: React.ReactNode }) {
  return (
    <div className={`flex flex-col items-center gap-1 py-2 w-full rounded-lg cursor-pointer ${active ? 'bg-[#f5f3ff]' : ''}`}>
      <div className={active ? 'text-[#9810fa]' : 'text-[#9ca3af]'}>{children}</div>
      <span className={`text-[10px] font-medium ${active ? 'text-[#9810fa] font-semibold' : 'text-[#6b7280]'}`}>{label}</span>
    </div>
  );
}

const campaigns = Array(4).fill({
  title: 'Beauty Brand Collaboration',
  slots: '8/10',
  days: 5,
  engagement: '310K',
  budget: '₦1,000,000',
  progress: 72,
});

export default function MyCampaignsMockup() {
  return (
    <div className="flex bg-white font-sans overflow-hidden" style={{ height: 560, minWidth: 0 }}>

      {/* ── Sidebar ─────────────────────────────────────────────────── */}
      <aside className="w-[110px] shrink-0 bg-white border-r border-[#e5e7eb] flex flex-col items-center pt-5 pb-5 gap-4">
        <div className="flex flex-col items-center gap-1">
          <div className="w-7 h-6 relative">
            <Image src="/mockups/varmply-logo.png" alt="Varmply" fill className="object-contain" />
          </div>
          <span className="text-[13px] font-bold text-[#1c2024]">Varmply</span>
        </div>

        <nav className="flex flex-col gap-0.5 w-full px-2 flex-1">
          <NavItem label="Dashboard">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
          </NavItem>
          <NavItem label="Campaigns" active>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <polyline points="20 12 20 22 4 22 4 12"/>
              <rect x="2" y="7" width="20" height="5"/>
              <line x1="12" y1="22" x2="12" y2="7"/>
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
            </svg>
          </NavItem>
          <NavItem label="Earnings">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="5" width="20" height="14" rx="2"/>
              <line x1="12" y1="9" x2="12" y2="15"/><line x1="9" y1="12" x2="15" y2="12"/>
            </svg>
          </NavItem>
          <NavItem label="Analytics">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </NavItem>
        </nav>

        <div className="px-2 w-full">
          <NavItem label="Settings">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </NavItem>
        </div>
      </aside>

      {/* ── Main ────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top bar */}
        <div className="shrink-0 bg-white border-b border-[#e5e7eb] flex items-center justify-between px-5 py-2.5">
          <div className="flex items-center gap-2 bg-white border border-[#e8e8e8] rounded-lg px-3 py-1.5 w-52">
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="#b9bbc6" strokeWidth="1.5"/><path d="M11 11l3 3" stroke="#b9bbc6" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <span className="text-[10px] text-[#b9bbc6]">Search for a creator</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#f3f4f6] flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="#646464" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div className="flex items-center gap-2 border border-[#e8e8e8] rounded-xl px-2 py-1.5">
              <div className="w-7 h-7 rounded-lg overflow-hidden relative shrink-0">
                <Image src="/mockups/user-avatar.png" alt="User" fill className="object-cover" sizes="28px" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#202020] leading-tight">Melanie Trump</p>
                <span className="text-[9px] font-medium text-[#1447e6] bg-[#eff6ff] rounded px-1">Sponsor Account</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden px-6 py-5">

          {/* Page header */}
          <div className="mb-4">
            <p className="text-xl font-bold text-[#101828]">My campaigns</p>
            <p className="text-[11px] text-[#6a7282] mt-0.5">Track all your campaigns and earnings</p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            {[
              { label: 'Total Campaigns', value: '35', iconBg: '#EFF6FF', iconColor: '#3B82F6' },
              { label: 'Active Campaigns', value: '4', iconBg: '#FFFBEB', iconColor: '#F59E0B' },
              { label: 'Completed', value: '32', iconBg: '#F0FDF4', iconColor: '#22C55E' },
              { label: 'Total Spend', value: '₦2.4M', iconBg: '#FAF5FF', iconColor: '#9810fa' },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-[#e5e7eb] rounded-xl p-3">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-[10px] text-[#6a7282] leading-tight">{s.label}</p>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: s.iconBg }}>
                    <div className="w-3 h-3 rounded-sm" style={{ background: s.iconColor }} />
                  </div>
                </div>
                <p className="text-xl font-bold text-[#101828]">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-1.5 mb-4">
            {['Draft', 'Active campaign', 'Completed campaign', 'Archived campaign'].map((tab, i) => (
              <div
                key={tab}
                className={`px-3 py-1.5 rounded-full text-[10px] font-medium cursor-pointer whitespace-nowrap ${i === 1 ? 'bg-[#1c2024] text-white' : 'text-[#6a7282] hover:text-[#101828]'}`}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Campaign cards grid */}
          <div className="grid grid-cols-4 gap-3">
            {campaigns.map((c, i) => (
              <div key={i} className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden">
                {/* Campaign image */}
                <div className="relative" style={{ height: 80 }}>
                  <Image
                    src="/mockups/ayra-starr.png"
                    alt="Campaign"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>

                {/* Card body */}
                <div className="p-3">
                  <p className="text-[11px] font-bold text-[#101828] mb-1.5">{c.title}</p>
                  <span className="text-[9px] font-semibold text-[#1447e6] bg-[#eff6ff] border border-[#bedbff] rounded-md px-1.5 py-0.5">Tracking</span>

                  <div className="mt-2.5 flex flex-col gap-1">
                    {[
                      { k: 'Creator slot', v: c.slots },
                      { k: 'Days remaining', v: String(c.days) },
                      { k: 'Engagement so far', v: c.engagement },
                      { k: 'Campaign Budget', v: c.budget },
                    ].map(({ k, v }) => (
                      <div key={k} className="flex items-center justify-between">
                        <span className="text-[9px] text-[#6a7282]">{k}</span>
                        <span className="text-[9px] font-bold text-[#101828]">{v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-2.5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] text-[#6a7282]">Progress</span>
                      <span className="text-[9px] text-[#6a7282]">{c.progress}% of budget spent</span>
                    </div>
                    <div className="h-1.5 bg-[#f3f4f6] rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-[#9810fa]" style={{ width: `${c.progress}%` }} />
                    </div>
                  </div>

                  <button className="mt-2.5 w-full border border-[#e5e7eb] rounded-lg py-1.5 text-[10px] font-semibold text-[#101828]">
                    View Campaign &rsaquo;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
