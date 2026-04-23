import React from 'react';

export function BrowserChrome({ url }: { url: string }) {
    return (
        <div className="flex items-center gap-2 px-3 py-2 shrink-0" style={{ background: '#F5F5F7', borderBottom: '1px solid #E0E0E4' }}>
            <div className="flex gap-1">
                <span className="block w-2 h-2 rounded-full bg-[#FF5F56]" />
                <span className="block w-2 h-2 rounded-full bg-[#FFBD2E]" />
                <span className="block w-2 h-2 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex-1 bg-white rounded-full px-2.5 py-0.5 text-[9px] text-[#ABABAB] border border-[#EBEBEB] truncate text-center">{url}</div>
            <div className="w-8" />
        </div>
    );
}

// Skeleton primitive — kept for backward compatibility if used anywhere else
export function Sk({ w, h = 10, r = 5, style }: { w?: string | number; h?: number; r?: number; style?: React.CSSProperties }) {
    return <div style={{ width: w, height: h, borderRadius: r, background: '#EAEAF0', flexShrink: 0, ...style }} />;
}

// ── Dashboard Mockup: proper UI replacement ──────────────────────────
export function DashboardSkeleton() {
    return (
        <div className="flex bg-[#FAFAFA] min-h-[220px] font-sans w-full cursor-default select-none h-full">
            {/* Sidebar */}
            <div className="w-[76px] bg-white border-r border-[#EBEBF2] py-4 px-2.5 flex flex-col items-center gap-3 shrink-0 h-full">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs mb-2 shadow-sm">V</div>
                {['#F0F6FF', '#FFFFFF', '#FFFFFF', '#FFFFFF'].map((bg, i) => (
                    <div key={i} className="w-full h-8 rounded-lg border" style={{ background: bg, borderColor: bg === '#F0F6FF' ? '#BFDBFE' : 'transparent' }} />
                ))}
            </div>
            {/* Main */}
            <div className="flex-1 p-4 flex flex-col h-full overflow-hidden">
                {/* Topbar */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] font-bold text-[#0F0F1A]">Campaign Overview</span>
                    <div className="flex items-center gap-2">
                        <div className="px-3 py-1 rounded-full text-[9px] font-bold text-[#2563EB] bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.15)] shadow-sm">Export Report</div>
                        <div className="w-6 h-6 rounded-full bg-[#1A40B8] text-[9px] text-white flex items-center justify-center font-bold shadow-sm">DA</div>
                    </div>
                </div>
                {/* Stat cards */}
                <div className="grid grid-cols-4 gap-2 mb-4 shrink-0">
                    {[
                        { label: 'Total Reach', value: '2.4M', accent: '#00A050' },
                        { label: 'Eng. Rate', value: '8.4%', accent: '#7C3BED' },
                        { label: 'Active Creators', value: '34', accent: '#2563EB' },
                        { label: 'Total Spent', value: '₦450K', accent: '#D97706' }
                    ].map((s, i) => (
                        <div key={i} className="bg-white rounded-xl p-3 border border-[#EBEBF2] shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-8 h-8 opacity-10 rounded-bl-full" style={{ background: s.accent }} />
                            <p className="text-[8px] font-bold text-[#A0A0BA] uppercase mb-1">{s.label}</p>
                            <p className="text-sm font-black text-[#0F0F1A]">{s.value}</p>
                        </div>
                    ))}
                </div>
                {/* Table layout */}
                <div className="bg-white rounded-xl border border-[#EBEBF2] overflow-hidden flex-1 flex flex-col shadow-sm">
                    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_0.8fr] gap-2 px-4 py-2.5 bg-[#F9F9FB] border-b border-[#EBEBF2]">
                        {['Creator', 'Platform', 'Reach', 'Engagement', 'Status'].map((h, i) => (
                            <span key={i} className={`text-[9px] font-bold text-[#6A6A80] uppercase ${i === 4 ? 'text-right' : ''}`}>{h}</span>
                        ))}
                    </div>
                    {[
                        { name: 'Dami Adeyemi', handle: '@dami_creates', plat: 'TikTok', r: '148K', e: '12%', status: 'Active' },
                        { name: 'Chuks Video', handle: '@chuka.tv', plat: 'Instagram', r: '88K', e: '6%', status: 'Pending' },
                        { name: 'Kemi Songs', handle: '@kemisongs', plat: 'TikTok', r: '45K', e: '8%', status: 'Active' },
                        { name: 'Femi Vibes', handle: '@femivibe', plat: 'Instagram', r: '12K', e: '4%', status: 'Paid' }
                    ].map((r, i) => (
                        <div key={i} className="grid grid-cols-[2fr_1fr_1fr_1fr_0.8fr] gap-2 px-4 py-3 border-b border-[#F5F5F7] items-center last:border-0">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-[#EAEAF0] shrink-0 overflow-hidden relative border border-[#EBEBF2]" />
                                <div className="min-w-0">
                                    <p className="text-[10px] font-bold text-[#0F0F1A] truncate leading-tight mb-[1px]">{r.name}</p>
                                    <p className="text-[8.5px] text-[#A0A0BA] truncate leading-none">{r.handle}</p>
                                </div>
                            </div>
                            <span className="text-[9px] font-semibold text-[#4A4A6A]">{r.plat}</span>
                            <span className="text-[10px] font-bold text-[#0F0F1A]">{r.r}</span>
                            <span className="text-[10px] font-bold text-[#00A050] bg-[rgba(0,160,80,0.06)] px-1 rounded inline-block w-max">{r.e}</span>
                            <div className="text-right">
                                <span className={`inline-block px-[6px] py-0.5 rounded-sm text-[8px] font-bold tracking-wide ${
                                    r.status === 'Paid' || r.status === 'Active' ? 'bg-[#E6F4EA] text-[#137333]' : 'bg-[#FEF7E0] text-[#B06000]'
                                }`}>{r.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ── Create campaign form mockup ─────────────────────────────────────────────
export function CreateCampaignSkeleton() {
    return (
        <div className="flex bg-[#FAFAFA] min-h-[200px] font-sans w-full cursor-default select-none h-full">
            {/* Sidebar */}
            <div className="w-[68px] bg-[#FFFFFF] border-r border-[#EBEBF2] py-4 px-2 flex flex-col items-center gap-3 shrink-0 h-full">
                <div className="w-6 h-6 rounded-lg bg-[#7C3BED] text-white flex items-center justify-center font-bold text-[10px] mb-2 shadow-sm">V</div>
                <div className="w-full h-7 rounded border border-[#EBEBF2] bg-[#F9F9FB]" />
                <div className="w-full h-7 rounded" />
                <div className="w-full h-7 rounded" />
            </div>
            {/* Form */}
            <div className="flex-1 p-4 flex flex-col h-full overflow-hidden">
                {/* Step tabs */}
                <div className="flex gap-3 mb-4 border-b border-[#EBEBF2]">
                    {['Content', 'Rules', 'Budget', 'Verify'].map((tab, i) => (
                        <span key={i} className={`text-[9px] font-bold uppercase tracking-wide px-1 py-1.5 ${i === 0 ? 'text-[#7C3BED] border-b-[2px] border-[#7C3BED] -mb-[1px]' : 'text-[#A0A0BA]'}`}>{tab}</span>
                    ))}
                </div>
                <span className="text-[13px] font-bold text-[#0F0F1A] mb-1">New Campaign</span>
                <span className="text-[9px] text-[#A0A0BA] mb-4">Set your requirements and distribute.</span>

                <div className="mb-3 shrink-0">
                    <span className="text-[9px] font-bold text-[#4A4A6A] mb-1.5 block">Campaign Name *</span>
                    <div className="border border-[#EBEBF2] bg-white rounded-lg px-3 py-1.5 text-[10.5px] text-[#0F0F1A] font-semibold shadow-sm">Summer Launch Q3</div>
                </div>

                <div className="mb-3 shrink-0">
                    <span className="text-[9px] font-bold text-[#4A4A6A] mb-1.5 block">Brief / Description *</span>
                    <div className="border border-[#EBEBF2] bg-white rounded-lg px-3 py-2 text-[10px] text-[#4A4A6A] shadow-sm leading-relaxed min-h-[52px]">
                        We are looking for high-energy creators to feature our new track. Must include the main choreography and tag our brand profile.
                    </div>
                </div>
            </div>
            {/* Preview panel */}
            <div className="w-[130px] bg-[#F9F9FB] border-l border-[#EBEBF2] p-3 flex flex-col shrink-0 h-full">
                <span className="text-[10px] font-bold text-[#0F0F1A] mb-3 border-b border-[#EBEBF2] pb-2">Preview</span>
                <div className="w-full h-[72px] bg-[rgba(124,59,237,0.06)] rounded-lg border border-[rgba(124,59,237,0.15)] flex items-center justify-center mb-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3BED" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                </div>
                <span className="text-[10px] font-bold text-[#0F0F1A] mb-1 line-clamp-1">Summer Launch Q3</span>
                <span className="text-[8.5px] text-[#A0A0BA] mb-3 line-clamp-2 leading-relaxed">We are looking for high-energy creators...</span>
                <div className="flex items-center gap-1.5 mt-auto">
                    <div className="flex-1 bg-white border border-[#EBEBF2] rounded py-1 text-center text-[8px] font-bold text-[#4A4A6A]">Draft</div>
                    <div className="flex-1 bg-[#7C3BED] rounded py-1 text-center text-[8px] font-bold text-white shadow">Next</div>
                </div>
            </div>
        </div>
    );
}

// ── Marketplace mockup ───────────────────────────────────────────────────────
export function MarketplaceSkeleton() {
    return (
        <div className="p-4 bg-[#FAFAFA] font-sans h-full w-full cursor-default select-none flex flex-col">
            <div className="flex gap-2 items-center mb-4 shrink-0">
                <div className="flex-1 bg-white border border-[#EBEBF2] rounded-full px-3 py-1.5 text-[10px] text-[#A0A0BA] flex items-center gap-2 shadow-sm">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2"/></svg>
                    Search campaigns
                </div>
                <div className="w-7 h-7 bg-white border border-[#EBEBF2] rounded-full flex items-center justify-center shadow-sm">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4A4A6A" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                </div>
            </div>

            <div className="flex gap-2 mb-4 overflow-hidden shrink-0">
                {['All', 'Music', 'Tech', 'Lifestyle'].map((t, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-[9px] font-bold whitespace-nowrap shadow-sm ${i === 0 ? 'bg-[#7C3BED] text-white border border-[#7C3BED]' : 'bg-white border border-[#EBEBF2] text-[#4A4A6A]'}`}>{t}</span>
                ))}
            </div>

            <div className="flex flex-col gap-2 flex-1 overflow-hidden">
                {[
                    { icon: '🎵', brand: 'Universal Music', title: 'Viral Dance Challenge', reward: '₦45K', tag: 'TikTok' },
                    { icon: '🏦', brand: 'PiggyVest', title: 'Q3 Promo Drive', reward: '₦20K', tag: 'Instagram' },
                    { icon: '🍔', brand: 'Foodie Deliveries', title: 'Lunch Hour Push', reward: '₦15K', tag: 'Both' }
                ].map((c, i) => (
                    <div key={i} className="bg-white border border-[#EBEBF2] rounded-xl p-3 flex gap-3 shadow-sm items-center">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[18px] bg-[#F5F5F7] border border-[#EAEAF0] shrink-0 shadow-inner">{c.icon}</div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[8px] font-bold text-[#A0A0BA] uppercase mb-[2px]">{c.brand}</p>
                            <p className="text-[11px] font-bold text-[#0F0F1A] truncate mb-1.5 leading-tight">{c.title}</p>
                            <div className="flex items-center gap-1.5">
                                <span className="text-[8px] font-bold px-1.5 py-0.5 bg-[rgba(124,59,237,0.06)] text-[#7C3BED] rounded border border-[rgba(124,59,237,0.15)]">{c.tag}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                            <span className="text-[11px] font-black text-[#00A050] bg-[rgba(0,160,80,0.06)] px-1.5 py-0.5 rounded">{c.reward}</span>
                            <span className="text-[8px] font-bold text-white bg-[#0F0F1A] px-2.5 py-1 rounded-sm shadow">Apply</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
