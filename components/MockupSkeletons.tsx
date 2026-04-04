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

// Skeleton primitive — light lavender-gray blocks
export function Sk({ w, h = 10, r = 5, style }: { w?: string | number; h?: number; r?: number; style?: React.CSSProperties }) {
    return <div style={{ width: w, height: h, borderRadius: r, background: '#EAEAF0', flexShrink: 0, ...style }} />;
}

// ── Dashboard skeleton: sidebar + stat cards + table ──────────────────────────
export function DashboardSkeleton() {
    return (
        <div style={{ display: 'flex', background: '#FAFAFA', minHeight: 220 }}>
            {/* Sidebar */}
            <div style={{ width: 76, background: '#F3F3F8', padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0, borderRight: '1px solid #EBEBF2' }}>
                <Sk w={40} h={18} r={6} style={{ marginBottom: 6 }} />
                {[0, 1, 2, 3, 4].map(i => <Sk key={i} w="100%" h={26} r={7} />)}
            </div>
            {/* Main */}
            <div style={{ flex: 1, padding: '14px 16px' }}>
                {/* Topbar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                    <Sk w={130} h={14} r={4} />
                    <div style={{ display: 'flex', gap: 6 }}>
                        <Sk w={64} h={24} r={20} />
                        <Sk w={64} h={24} r={20} />
                        <Sk w={28} h={28} r={28} />
                    </div>
                </div>
                {/* Stat cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 14 }}>
                    {[0, 1, 2, 3].map(i => (
                        <div key={i} style={{ background: 'white', borderRadius: 10, padding: '10px 12px', border: '1px solid #EBEBF2' }}>
                            <Sk w="55%" h={8} r={3} style={{ marginBottom: 8 }} />
                            <Sk w="75%" h={20} r={4} style={{ marginBottom: 6 }} />
                            <Sk w="40%" h={7} r={3} />
                        </div>
                    ))}
                </div>
                {/* Table */}
                <div style={{ background: 'white', borderRadius: 10, border: '1px solid #EBEBF2', overflow: 'hidden' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 0.8fr', gap: 10, padding: '8px 14px', background: '#F7F7FA', borderBottom: '1px solid #EBEBF2' }}>
                        {[100, 60, 60, 60, 50].map((w, i) => <Sk key={i} w={w} h={7} r={3} />)}
                    </div>
                    {[0, 1, 2, 3].map(row => (
                        <div key={row} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 0.8fr', gap: 10, padding: '9px 14px', borderBottom: '1px solid #F2F2F7', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <Sk w={28} h={28} r={7} />
                                <div>
                                    <Sk w={90} h={8} r={3} style={{ marginBottom: 5 }} />
                                    <Sk w={60} h={6} r={3} />
                                </div>
                            </div>
                            <Sk w={52} h={20} r={20} />
                            <Sk w={44} h={8} r={3} />
                            <Sk w={50} h={8} r={3} />
                            <Sk w={36} h={22} r={6} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ── Create campaign form skeleton ─────────────────────────────────────────────
export function CreateCampaignSkeleton() {
    return (
        <div style={{ display: 'flex', background: '#FAFAFA', minHeight: 200 }}>
            {/* Sidebar */}
            <div style={{ width: 68, background: '#F3F3F8', padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0, borderRight: '1px solid #EBEBF2' }}>
                <Sk w={36} h={16} r={5} style={{ marginBottom: 8 }} />
                {[0, 1, 2, 3].map(i => <Sk key={i} w="100%" h={26} r={7} />)}
            </div>
            {/* Form */}
            <div style={{ flex: 1, padding: '12px 14px' }}>
                {/* Step tabs */}
                <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
                    {[0, 1, 2, 3].map(i => <Sk key={i} w={70} h={7} r={3} style={{ background: i === 0 ? '#C4B5FD' : '#EAEAF0' }} />)}
                </div>
                {/* Section heading */}
                <Sk w={140} h={13} r={4} style={{ marginBottom: 4 }} />
                <Sk w={200} h={8} r={3} style={{ marginBottom: 14 }} />
                {/* Fields */}
                {['Campaign Name *', 'Description *'].map((_, i) => (
                    <div key={i} style={{ marginBottom: 12 }}>
                        <Sk w={100} h={8} r={3} style={{ marginBottom: 5 }} />
                        <Sk w="100%" h={i === 1 ? 52 : 30} r={7} />
                    </div>
                ))}
            </div>
            {/* Preview panel */}
            <div style={{ width: 120, background: '#F0F0F8', padding: '12px 10px', flexShrink: 0, borderLeft: '1px solid #EBEBF2' }}>
                <Sk w={80} h={8} r={3} style={{ marginBottom: 10 }} />
                <Sk w="100%" h={72} r={10} style={{ marginBottom: 10 }} />
                <Sk w="100%" h={8} r={3} style={{ marginBottom: 6 }} />
                <Sk w="80%" h={8} r={3} style={{ marginBottom: 6 }} />
                <Sk w="60%" h={8} r={3} style={{ marginBottom: 12 }} />
                <div style={{ display: 'flex', gap: 5 }}>
                    <Sk w="50%" h={22} r={6} />
                    <Sk w="50%" h={22} r={6} />
                </div>
            </div>
        </div>
    );
}

// ── Marketplace skeleton ───────────────────────────────────────────────────────
export function MarketplaceSkeleton() {
    return (
        <div style={{ background: '#FAFAFA', padding: '14px' }}>
            {/* Search + filter */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 14, alignItems: 'center' }}>
                <Sk w="100%" h={30} r={20} />
                <Sk w={30} h={30} r={30} />
                <Sk w={72} h={30} r={20} />
            </div>
            {/* Filter chips */}
            <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
                {[80, 64, 72, 56].map((w, i) => <Sk key={i} w={w} h={24} r={20} style={{ background: i === 0 ? '#C4B5FD' : '#EAEAF0' }} />)}
            </div>
            {/* Campaign cards */}
            {[0, 1, 2].map(i => (
                <div key={i} style={{ display: 'flex', gap: 12, background: 'white', borderRadius: 12, padding: '10px 12px', border: '1px solid #EBEBF2', marginBottom: 8, alignItems: 'center' }}>
                    <Sk w={52} h={52} r={10} />
                    <div style={{ flex: 1 }}>
                        <Sk w="55%" h={10} r={3} style={{ marginBottom: 6 }} />
                        <Sk w="35%" h={7} r={3} style={{ marginBottom: 8 }} />
                        <div style={{ display: 'flex', gap: 6 }}>
                            <Sk w={52} h={20} r={20} />
                            <Sk w={52} h={20} r={20} />
                            <Sk w={44} h={20} r={20} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                        <Sk w={64} h={12} r={3} />
                        <Sk w={72} h={28} r={8} />
                    </div>
                </div>
            ))}
        </div>
    );
}
