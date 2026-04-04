// Varmply — Create Campaign (Step 1 of 4)
// Recreation of Image #4 — Sponsor account, two-column form layout.
// Designed to sit INSIDE BrowserWindow — no own browser chrome.

import Image from 'next/image';

// ── Sidebar nav ───────────────────────────────────────────────────────────────
function NavItem({ label, active, children }: { label: string; active?: boolean; children: React.ReactNode }) {
  return (
    <div className={`flex flex-col items-center gap-1 py-2 w-full rounded-lg cursor-pointer ${active ? 'bg-[#f5f3ff]' : ''}`}>
      <div className={active ? 'text-[#9810fa]' : 'text-[#9ca3af]'}>{children}</div>
      <span className={`text-[10px] font-medium ${active ? 'text-[#9810fa]' : 'text-[#6b7280]'}`}>{label}</span>
    </div>
  );
}

export default function CreateCampaignMockup() {
  return (
    <div className="flex bg-[#f9fafb] font-sans overflow-hidden" style={{ height: 560, minWidth: 0 }}>

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
          <NavItem label="Campaigns">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <polyline points="20 12 20 22 4 22 4 12"/>
              <rect x="2" y="7" width="20" height="5"/>
              <line x1="12" y1="22" x2="12" y2="7"/>
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
            </svg>
          </NavItem>
          <NavItem label="Wallet">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
              <circle cx="18" cy="15" r="1" fill="currentColor"/>
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

        {/* Scrollable body */}
        <div className="flex-1 overflow-hidden px-6 py-5">

          {/* Page header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button className="w-7 h-7 border border-[#e5e7eb] rounded-lg flex items-center justify-center shrink-0">
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#646464" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
              <div>
                <p className="text-base font-bold text-[#101828]">Create Campaign</p>
                <p className="text-[10px] text-[#6a7282]">Step 1 of 4</p>
              </div>
            </div>
            <button className="text-[11px] text-[#6a7282] border border-[#e5e7eb] rounded-lg px-3 py-1.5">Save Draft</button>
          </div>

          {/* Tabs */}
          <div className="flex gap-5 border-b border-[#e5e7eb] mb-4">
            {[
              { label: 'Basics', active: true },
              { label: 'Content Rules' },
              { label: 'Budget & Timeline' },
              { label: 'Review' },
            ].map((tab) => (
              <div
                key={tab.label}
                className={`pb-2.5 text-[11px] font-medium cursor-pointer relative whitespace-nowrap ${tab.active ? 'text-[#9810fa]' : 'text-[#6a7282]'}`}
              >
                {tab.active && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9810fa] rounded-full" />}
                {tab.label}
              </div>
            ))}
          </div>

          {/* Two-column layout */}
          <div className="flex gap-4" style={{ height: 390 }}>

            {/* Left: Campaign Basics */}
            <div className="flex-1 bg-white border border-[#e5e7eb] rounded-2xl p-5 flex flex-col">
              <p className="text-[13px] font-bold text-[#101828] mb-0.5">Campaign Basics</p>
              <p className="text-[10px] text-[#6a7282] mb-4">Give your campaign a name and tell creators what it's about.</p>

              <div className="mb-3">
                <p className="text-[11px] font-semibold text-[#101828] mb-1.5">Campaign Name <span className="text-[#9810fa]">*</span></p>
                <div className="border border-[#e5e7eb] rounded-lg px-3 py-2 text-[11px] text-[#d1d5db]">e.g. HEIS Album Launch</div>
                <p className="text-[9px] text-[#b9bbc6] mt-1">This is how creators will see your campaign</p>
              </div>

              <div className="mb-4">
                <p className="text-[11px] font-semibold text-[#101828] mb-1.5">Description <span className="text-[#9810fa]">*</span></p>
                <div className="border border-[#e5e7eb] rounded-lg p-3 text-[11px] text-[#d1d5db]" style={{ height: 72 }}>
                  Tell creators what this campaign is about, what you&apos;re looking for, and what makes it special...
                </div>
                <p className="text-[9px] text-[#b9bbc6] mt-1">0/500 characters</p>
              </div>

              <div className="flex-1">
                <p className="text-[11px] font-semibold text-[#101828] mb-1.5">Cover Image</p>
                <div className="border-2 border-dashed border-[#e5e7eb] rounded-xl flex flex-col items-center justify-center gap-1.5" style={{ height: 88 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  <p className="text-[11px] font-medium text-[#374151]">Upload cover image</p>
                  <p className="text-[9px] text-[#b9bbc6]">Recommended: 1200×630px, JPG or PNG</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#f3f4f6] mt-3 shrink-0">
                <button className="flex items-center gap-1 text-[11px] text-[#646464]">
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  Back
                </button>
                <button className="flex items-center gap-1.5 text-[11px] font-semibold text-white bg-[#9810fa] rounded-lg px-4 py-2">
                  Continue
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
              </div>
            </div>

            {/* Right: Campaign Preview */}
            <div className="w-[240px] shrink-0 bg-white border border-[#e5e7eb] rounded-2xl p-4 overflow-hidden flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-bold text-[#101828]">Campaign Preview</p>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              </div>

              <div className="rounded-xl flex items-center justify-center shrink-0" style={{ background: '#EDE9FE', height: 90 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              </div>

              <div>
                <p className="text-[12px] font-bold text-[#101828]">Campaign Name</p>
                <p className="text-[10px] text-[#b9bbc6] mt-0.5">Campaign description will appear here...</p>
              </div>

              <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                {[
                  { label: 'Platform', value: 'Instagram' },
                  { label: 'Timeline', value: 'Not set' },
                  { label: 'Est. Impressions', value: '150k-300k' },
                  { label: 'Est. Engagement', value: '10k-30k' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[8px] font-bold text-[#6a7282] uppercase tracking-wide">{label}</p>
                    <p className="text-[10px] font-semibold text-[#101828] mt-0.5">{value}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-[8px] font-bold text-[#6a7282] uppercase tracking-wide">Content Type</p>
                <p className="text-[10px] text-[#101828] mt-0.5">Not set</p>
              </div>

              <div className="border-t border-[#f3f4f6] pt-2 flex flex-col gap-1.5">
                <div className="flex justify-between">
                  <span className="text-[10px] text-[#6a7282]">Artiste</span>
                  <span className="text-[10px] font-semibold text-[#101828]">Ayra Starr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] text-[#6a7282]">Creator Pool (Est.)</span>
                  <span className="text-[10px] font-semibold text-[#101828]">~1 Creator</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#f3f4f6] pt-2">
                <span className="text-[11px] font-bold text-[#101828]">Total Budget</span>
                <span className="text-[14px] font-bold text-[#9810fa]">₦999,912</span>
              </div>

              <div className="rounded-lg p-2.5 shrink-0" style={{ background: '#EFF6FF', border: '1px solid #BFDBFE' }}>
                <p className="text-[9px] text-[#1447e6] leading-relaxed">
                  By launching, you agree to Varmply&apos;s Creator Terms of Service and secure payment processing rules.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
