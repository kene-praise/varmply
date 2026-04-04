// Varmply — Individual Campaign Screen (Joined state)
// Based on Figma node 5748:19212 from Varmply Drafts.
// Designed to sit INSIDE BrowserWindow — no own browser chrome.

import Image from 'next/image';

// ── Sidebar nav item ─────────────────────────────────────────────────────────
function NavItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 py-2 w-full rounded-lg cursor-pointer ${active ? 'bg-white shadow-sm border border-black/6' : ''}`}>
      <div className={`w-5 h-5 rounded ${active ? 'bg-[#9810fa]/15' : 'bg-[#e8e8e8]'}`} />
      <span className={`text-[11px] font-medium ${active ? 'text-[#202020]' : 'text-[#646464]'}`}>{label}</span>
    </div>
  );
}

export default function CampaignDetailMockup() {
  return (
    <div className="flex bg-[#f9fafb] font-sans overflow-hidden" style={{ height: 560, minWidth: 0 }}>

      {/* ── Sidebar ──────────────────────────────────────────────────── */}
      <aside className="w-[120px] shrink-0 bg-white border-r border-[#e5e7eb] flex flex-col items-center pt-6 pb-8 gap-6">
        {/* Logo */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-7 h-5 relative">
            <Image src="/mockups/varmply-logo.png" alt="Varmply" fill className="object-contain" />
          </div>
          <span className="text-[13px] font-bold text-[#1c2024]">Varmply</span>
        </div>

        {/* Role badge */}
        <div className="bg-[#faf5ff] border border-[#e9d4ff] rounded-lg px-2 py-0.5 w-full mx-2">
          <span className="text-[10px] font-semibold text-[#8200db] block text-center">Creator Account</span>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1 w-full px-2 flex-1">
          <NavItem label="Dashboard" />
          <NavItem label="Marketplace" />
          <NavItem label="Campaigns" active />
          <NavItem label="Earnings" />
          <NavItem label="Analytics" />
        </nav>

        <NavItem label="Settings" />
      </aside>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">

        {/* Top bar */}
        <div className="shrink-0 bg-white border-b border-[#e5e7eb] flex items-center justify-between px-5 py-2.5">
          <div className="flex items-center gap-2 bg-white border border-[#e8e8e8] rounded-lg px-3 py-1.5 w-52">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="#b9bbc6" strokeWidth="1.5"/><path d="M11 11l3 3" stroke="#b9bbc6" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <span className="text-[11px] text-[#b9bbc6]">Search for available campaign</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#f3f4f6] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="#646464" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div className="flex items-center gap-2 bg-white border border-[#e8e8e8] rounded-xl px-2 py-1.5">
              <div className="w-7 h-7 rounded-lg overflow-hidden relative shrink-0">
                <Image src="/mockups/user-avatar.jpg" alt="User" fill className="object-cover" sizes="28px" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#202020] leading-tight">Melanie Trump</p>
                <span className="text-[9px] font-medium text-[#52009a] bg-[rgba(142,0,241,0.07)] rounded px-1">Creator Account</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto">

          {/* Back link */}
          <div className="px-6 pt-4 pb-2">
            <button className="flex items-center gap-1.5 text-[11px] text-[#646464]">
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              Back to marketplace
            </button>
          </div>

          {/* Hero banner */}
          <div className="mx-6 mb-4 rounded-2xl overflow-hidden relative h-[130px]">
            <Image src="/mockups/campaign-hero.png" alt="Campaign hero" fill className="object-cover" sizes="100%" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.55) 100%)' }} />
            {/* Album art float */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-lg overflow-hidden border-2 border-white/20 shadow-lg">
              <Image src="/mockups/album-art.png" alt="Album art" fill className="object-cover" sizes="64px" />
            </div>
            <p className="absolute bottom-3 left-24 text-white font-bold text-sm leading-tight drop-shadow">With You — Davido Ft Omah Lay</p>
          </div>

          {/* Two-column layout */}
          <div className="mx-6 flex gap-4 pb-6">

            {/* Left col */}
            <div className="w-[220px] shrink-0 flex flex-col gap-3">

              {/* Campaign details */}
              <div className="bg-white border border-[#e5e7eb] rounded-2xl p-4">
                <p className="text-[11px] font-bold text-[#101828] mb-3">Campaign Details</p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { label: 'Campaign status', value: <span className="text-[10px] font-semibold text-[#1447e6] bg-[#eff6ff] border border-[#bedbff] rounded-lg px-2 py-0.5">Joined</span> },
                    { label: 'Submission deadline', value: <span className="text-[11px] font-bold text-[#101828]">Jan 30, 2025</span> },
                    { label: 'Creator Slots', value: <span className="text-[11px] font-bold text-[#101828]">35/50</span> },
                    { label: 'Base Payout Rate', value: <span className="text-[11px] font-bold text-[#9810fa]">₦5 per engagement</span> },
                    { label: 'Competition level', value: <span className="text-[10px] font-semibold text-[#bb4d00] bg-[#fffbeb] border border-[#fee685] rounded-lg px-2 py-0.5">Moderate</span> },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-[11px] text-[#4a5565]">{label}</span>
                      {value}
                    </div>
                  ))}
                </div>

                {/* Platforms */}
                <div className="border-t border-[#f3f4f6] mt-3 pt-3">
                  <p className="text-[11px] text-[#4a5565] mb-2">Platform:</p>
                  <div className="flex gap-1.5">
                    {['Instagram', 'TikTok'].map(p => (
                      <span key={p} className="text-[10px] font-semibold text-[#8200db] bg-[#faf5ff] border border-[#e9d4ff] rounded-lg px-2 py-0.5">{p}</span>
                    ))}
                  </div>
                </div>

                {/* Budget bar */}
                <div className="border-t border-[#f3f4f6] mt-3 pt-3">
                  <p className="text-[11px] text-[#4a5565] mb-2">Budget left (₦):</p>
                  <div className="h-2 bg-[#f3f4f6] rounded-full overflow-hidden">
                    <div className="h-full bg-[#9810fa] rounded-full w-[57%]" />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-[10px] font-semibold text-[#9810fa]">60,000</span>
                    <span className="text-[10px] text-[#99a1af]">120,000</span>
                  </div>
                </div>
              </div>

              {/* Your submission */}
              <div className="bg-white border border-[#e5e7eb] rounded-2xl p-4">
                <p className="text-[11px] font-bold text-[#101828] mb-3">Your Submission</p>
                <div className="bg-gradient-to-br from-[#f9fafb] to-[rgba(250,245,255,0.3)] border border-[#e5e7eb] rounded-xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white border border-[#e5e7eb] rounded-lg flex items-center justify-center shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#6a7282" strokeWidth="1.5"/><path d="M8 10h8M8 14h5" stroke="#6a7282" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[#101828]">Dance video.mp4</p>
                        <p className="text-[9px] text-[#6a7282]">Uploaded Jan 22, 2025</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-semibold text-[#1447e6] bg-[#eff6ff] border border-[#bedbff] rounded-lg px-1.5 py-0.5">Tracking</span>
                  </div>
                  <div className="flex gap-4 py-1.5 border-b border-[#e5e7eb] mb-2">
                    <span className="text-[10px] text-[#101828] font-bold">12,340 <span className="text-[#6a7282] font-normal">impressions</span></span>
                    <span className="text-[10px] text-[#101828] font-bold">4,215 <span className="text-[#6a7282] font-normal">engagements</span></span>
                  </div>
                  <p className="text-[9px] text-[#9810fa]">instagram.com/p/def456</p>
                </div>
              </div>
            </div>

            {/* Right col */}
            <div className="flex-1 min-w-0 flex flex-col gap-3">

              {/* About */}
              <div className="bg-white border border-[#e5e7eb] rounded-2xl p-4">
                <p className="text-[11px] font-bold text-[#101828] mb-3">About this campaign</p>
                <p className="text-[10px] uppercase font-bold text-[#6a7282] tracking-wide mb-1">Artiste Intro</p>
                <p className="text-[11px] text-[#4a5565] leading-relaxed mb-3">
                  Ayra Starr is a rising Afrobeats sensation known for her unique sound and powerful vocals. Join this campaign to promote her latest single "Jazzy".
                </p>

                <div className="border-t border-[#f3f4f6] pt-3 mb-3">
                  <p className="text-[10px] uppercase font-bold text-[#6a7282] tracking-wide mb-2">Streaming Links</p>
                  {['soundcloud.com/ayrastarr/jazzy', 'music.apple.com/album/jazzy', 'open.spotify.com/track/jazzy'].map(link => (
                    <p key={link} className="text-[10px] text-[#9810fa] mb-1">↗ {link}</p>
                  ))}
                </div>

                <div className="border-t border-[#f3f4f6] pt-3">
                  <p className="text-[10px] uppercase font-bold text-[#6a7282] tracking-wide mb-2">TikTok Sound</p>
                  <div className="flex items-center gap-3 bg-[#fcfcfc] border border-[#f0f0f0] rounded-lg p-2.5">
                    <div className="w-10 h-10 rounded overflow-hidden relative shrink-0">
                      <Image src="/mockups/album-art.png" alt="Album" fill className="object-cover" sizes="40px" />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#646464]">With You — Davido ft Omay Lay</p>
                      <p className="text-[10px] text-[#8347b9] font-medium">Open on TikTok</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white border border-[#e5e7eb] rounded-2xl p-4">
                <p className="text-[11px] font-bold text-[#101828] mb-3">Campaign requirements</p>
                <div className="flex flex-col gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#9810fa]/15 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#9810fa]" />
                    </div>
                    <span className="text-[11px] text-[#364153]">Instagram connection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#f3f4f6] flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#99a1af]" />
                    </div>
                    <span className="text-[11px] text-[#99a1af]">TikTok connection</span>
                  </div>
                </div>
                <div className="border-t border-[#f3f4f6] pt-3">
                  <p className="text-[10px] uppercase font-bold text-[#6a7282] tracking-wide mb-2">Submission Rules</p>
                  {[
                    <>Must use hashtags: <span className="font-semibold text-[#101828]">#JazzySong #AyraStarr</span></>,
                    <>Mention: <span className="font-semibold text-[#101828]">@ayrastarr</span></>,
                    <>Content types: <span className="font-semibold text-[#101828]">Reels and Stories</span></>,
                  ].map((rule, i) => (
                    <div key={i} className="flex items-start gap-2 mb-1.5">
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-[#9810fa]/40 mt-0.5 shrink-0" />
                      <p className="text-[11px] text-[#4a5565]">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Campaign team */}
              <div className="bg-white border border-[#e5e7eb] rounded-2xl p-4">
                <p className="text-[11px] font-bold text-[#101828] mb-3">Campaign Team</p>
                <div className="flex flex-col divide-y divide-[#f3f4f6]">
                  {[
                    { name: 'Ayra Starr', role: 'Artist', img: '/mockups/ayra-starr.png' },
                    { name: 'Don Jazzy', role: 'Sponsor · Mavin Records', img: null },
                    { name: 'Sarah Chen', role: 'Campaign Manager', img: null },
                  ].map(({ name, role, img }) => (
                    <div key={name} className="flex items-center gap-3 py-2.5">
                      <div className="w-9 h-9 rounded-full overflow-hidden relative shrink-0 bg-gradient-to-br from-[#f3e8ff] to-[#dbeafe]">
                        {img && <Image src={img} alt={name} fill className="object-cover" sizes="36px" />}
                        {!img && <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#8200db]">{name[0]}</span>}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-[#101828]">{name}</p>
                        <p className="text-[10px] text-[#6a7282]">{role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
