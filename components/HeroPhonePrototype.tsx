'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// ── Shared chrome ─────────────────────────────────────────────────────────────
function StatusBar() {
  return (
    <div className="flex items-center justify-between px-3.5 shrink-0 bg-white" style={{ height: 30, paddingTop: 4 }}>
      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: -0.2 }}>9:41</span>
      <div className="flex items-center gap-1">
        {/* Signal bars */}
        <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor">
          <rect x="0" y="5" width="3" height="5" rx="0.5" opacity="0.4" />
          <rect x="4.5" y="3.5" width="3" height="6.5" rx="0.5" opacity="0.7" />
          <rect x="9" y="1.5" width="3" height="8.5" rx="0.5" />
          <rect x="13.5" y="0" width="2.5" height="10" rx="0.5" />
        </svg>
        {/* Wifi */}
        <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor">
          <path d="M6.5 6.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
          <path d="M3.8 4.3a3.8 3.8 0 015.4 0l1.2-1.2A5.5 5.5 0 006.5 1a5.5 5.5 0 00-3.9 2.1l1.2 1.2z" opacity="0.6" />
          <path d="M1 1.5A8.2 8.2 0 0112 1.5L13 .5A9.5 9.5 0 000 .5l1 1z" opacity="0.3" />
        </svg>
        {/* Battery */}
        <svg width="24" height="11" viewBox="0 0 24 11" fill="none">
          <rect x="0.5" y="0.5" width="20" height="10" rx="2.5" stroke="black" strokeOpacity="0.35" />
          <rect x="1.5" y="1.5" width="15" height="8" rx="2" fill="black" />
          <path d="M22 3.5v4c.8-.3 1.5-1 1.5-2S22.8 3.8 22 3.5z" fill="black" fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

function NavBar({ onBack }: { onBack?: boolean }) {
  return (
    <div className="flex items-center justify-between px-3.5 shrink-0 bg-white border-b border-gray-100" style={{ paddingTop: 8, paddingBottom: 8 }}>
      <div className="flex items-center gap-1.5">
        <Image src="/mockups/varmply-logo.png" width={20} height={16} alt="" className="object-contain" />
        <span style={{ fontSize: 14, fontWeight: 700, color: '#1c2024' }}>Varmply</span>
      </div>
      <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
        <path d="M0 1h18M0 6.5h18M0 12h18" stroke="#1c2024" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// ── Screen 1: Marketplace ─────────────────────────────────────────────────────
function MarketplaceScreen() {
  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <StatusBar />
      <NavBar />

      {/* Scrollable featured row */}
      <div className="shrink-0 overflow-x-hidden" style={{ padding: '10px 12px 8px' }}>
        <div className="flex gap-2">
          <div className="shrink-0 rounded-xl overflow-hidden relative" style={{ width: 136, height: 88 }}>
            <Image src="/mockups/art-cover-1.png" alt="" fill className="object-cover" sizes="136px" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)' }} />
          </div>
          <div className="shrink-0 rounded-xl overflow-hidden relative" style={{ width: 136, height: 88 }}>
            <Image src="/mockups/art-cover-2.png" alt="" fill className="object-cover" sizes="136px" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)' }} />
          </div>
        </div>
      </div>

      {/* Heading + filters */}
      <div className="shrink-0 px-3.5">
        <p style={{ fontSize: 17, fontWeight: 700, color: '#101828', marginBottom: 2 }}>Marketplace</p>
        <p style={{ fontSize: 10, color: '#838383', marginBottom: 8 }}>Browse creator opportunities and find campaigns</p>

        {/* Filter pills */}
        <div className="flex gap-1.5" style={{ marginBottom: 10 }}>
          {['All campaign', 'Open now', 'Available to me'].map((t, i) => (
            <div
              key={t}
              style={{
                background: i === 0 ? '#1c2024' : 'transparent',
                border: '1px solid',
                borderColor: i === 0 ? '#1c2024' : '#e5e7eb',
                borderRadius: 99,
                padding: '3px 8px',
                fontSize: 9,
                fontWeight: i === 0 ? 600 : 500,
                color: i === 0 ? 'white' : '#838383',
                whiteSpace: 'nowrap',
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Campaign cards grid */}
      <div className="flex-1 overflow-hidden px-3">
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { title: 'Jazzy Song', artist: 'Ayra Starr', budget: '₦120,000', img: '/mockups/art-cover-3.png', avatar: '/mockups/avatar-1.png' },
            { title: 'Ozeba', artist: 'Rema', budget: '₦135,000', img: '/mockups/art-cover-4.png', avatar: '/mockups/avatar-2.png' },
          ].map((c) => (
            <div key={c.title} style={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: 12, overflow: 'hidden' }}>
              {/* Cover */}
              <div className="relative" style={{ height: 90 }}>
                <Image src={c.img} alt="" fill className="object-cover" sizes="130px" />
                <div
                  style={{
                    position: 'absolute', top: 5, right: 5,
                    background: 'rgba(0,164,51,0.12)',
                    border: '0.5px solid rgba(0,164,51,0.3)',
                    borderRadius: 4,
                    padding: '1.5px 5px',
                    fontSize: 8, fontWeight: 600, color: '#00713f',
                  }}
                >
                  Open
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '7px 8px 8px' }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: '#101828', marginBottom: 4 }}>{c.title}</p>

                {/* Artist row */}
                <div className="flex items-center gap-1" style={{ marginBottom: 5 }}>
                  <div style={{ width: 16, height: 16, borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                    <Image src={c.avatar} alt="" fill className="object-cover" sizes="16px" />
                  </div>
                  <div>
                    <p style={{ fontSize: 8, fontWeight: 600, color: '#202020', lineHeight: 1.2 }}>{c.artist}</p>
                    <p style={{ fontSize: 7, color: '#838383', lineHeight: 1.2 }}>Artist</p>
                  </div>
                  <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                    <p style={{ fontSize: 9, fontWeight: 700, color: '#101828', lineHeight: 1.2 }}>{c.budget}</p>
                    <p style={{ fontSize: 7, color: '#838383', lineHeight: 1.2 }}>budget</p>
                  </div>
                </div>

                {/* Progress */}
                <div style={{ height: 4, background: '#f3f4f6', borderRadius: 99, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '60%', background: '#7433FF', borderRadius: 99 }} />
                </div>
                <p style={{ fontSize: 7, color: '#838383', marginTop: 2 }}>60% of budget spent</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Screen 2: View Campaign ───────────────────────────────────────────────────
function ViewCampaignScreen() {
  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <StatusBar />
      <NavBar />

      <div className="flex-1 overflow-hidden" style={{ padding: '10px 12px 0' }}>
        {/* Back link */}
        <div className="flex items-center gap-1" style={{ marginBottom: 8 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 11L5 7l4-4" stroke="#646464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: 10, color: '#646464' }}>Back</span>
        </div>

        {/* Campaign hero image */}
        <div className="relative rounded-xl overflow-hidden shrink-0" style={{ height: 108, marginBottom: 10 }}>
          <Image src="/mockups/davido-cover.png" alt="" fill className="object-cover" sizes="290px" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }} />

          {/* Small thumbnail + title overlay */}
          <div className="absolute bottom-2 left-2.5 flex items-end gap-2">
            <div className="rounded-lg overflow-hidden relative shrink-0" style={{ width: 36, height: 36, border: '1.5px solid rgba(255,255,255,0.3)' }}>
              <Image src="/mockups/davido-thumb.png" alt="" fill className="object-cover" sizes="36px" />
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: 'white', lineHeight: 1.3 }}>With You —</p>
              <p style={{ fontSize: 10, fontWeight: 500, color: 'rgba(255,255,255,0.85)', lineHeight: 1.3 }}>Davido Ft Omah Lay</p>
            </div>
          </div>
        </div>

        {/* Campaign details card */}
        <div style={{ background: '#f9f9f9', borderRadius: 12, padding: '10px 10px 8px' }}>
          <p style={{ fontSize: 10, fontWeight: 600, color: '#646464', marginBottom: 7 }}>Campaign details</p>
          <div style={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: 9, padding: '10px 10px' }}>
            {/* Detail rows */}
            {[
              { label: 'Campaign status', value: null, badge: { text: 'Open', color: '#00713f', bg: 'rgba(0,164,51,0.1)' } },
              { label: 'Submission deadline', value: '30th Jan, 2025' },
              { label: 'Creator Slots', value: '35' },
              { label: 'Base Payout Rate', value: '₦5 per engagement' },
              { label: 'Competition level', value: null, badge: { text: 'Moderate', color: '#ab6400', bg: 'rgba(255,222,0,0.2)' } },
            ].map(({ label, value, badge }) => (
              <div key={label} className="flex items-center justify-between" style={{ marginBottom: 7 }}>
                <span style={{ fontSize: 9.5, color: '#838383' }}>{label}</span>
                {badge ? (
                  <span style={{ fontSize: 8, fontWeight: 600, color: badge.color, background: badge.bg, borderRadius: 3, padding: '1.5px 5px' }}>{badge.text}</span>
                ) : (
                  <span style={{ fontSize: 9.5, fontWeight: 600, color: '#202020' }}>{value}</span>
                )}
              </div>
            ))}

            {/* Platforms */}
            <div className="flex items-center justify-between" style={{ marginBottom: 7 }}>
              <span style={{ fontSize: 9.5, color: '#838383' }}>Platform</span>
              <div className="flex gap-1">
                {['Instagram', 'TikTok'].map((p) => (
                  <div key={p} style={{ background: 'white', border: '1px solid #e8e8e8', borderRadius: 5, padding: '2px 5px', fontSize: 8, color: '#646464', fontWeight: 500 }}>
                    {p}
                  </div>
                ))}
              </div>
            </div>

            {/* Budget + bar */}
            <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
              <span style={{ fontSize: 9.5, color: '#838383' }}>Budget left (₦)</span>
              <span style={{ fontSize: 9.5, fontWeight: 600, color: '#202020' }}>60,000/120,000</span>
            </div>
            <div style={{ height: 5, background: '#f0f0f0', borderRadius: 99, marginBottom: 10, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '50%', background: '#2b9a66', borderRadius: 99 }} />
            </div>

            {/* CTA */}
            <button style={{ width: '100%', background: '#7433FF', color: 'white', border: 'none', borderRadius: 7, padding: '9px 0', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>
              Make a submission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Screen 3: Campaign Overview ───────────────────────────────────────────────
function CampaignOverviewScreen() {
  const stats = [
    { label: 'Budget', value: '₦500K' },
    { label: 'Spent', value: '₦320K' },
    { label: 'Creators', value: '24' },
    { label: 'Submissions', value: '67' },
    { label: 'Approved', value: '42' },
    { label: 'Reach', value: '890K' },
  ];

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <StatusBar />
      <NavBar />

      {/* Campaign header image */}
      <div className="relative shrink-0" style={{ height: 100 }}>
        <Image src="/mockups/davido-cover.png" alt="" fill className="object-cover" sizes="290px" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)' }} />
        <div className="absolute bottom-0 left-0 right-0" style={{ padding: '6px 12px 8px' }}>
          <div className="flex items-center gap-1.5" style={{ marginBottom: 3 }}>
            <div style={{ background: '#22c55e', borderRadius: 3, padding: '1px 5px', fontSize: 7, fontWeight: 600, color: 'white' }}>Sharing</div>
            <div style={{ border: '0.8px solid rgba(255,255,255,0.5)', borderRadius: 3, padding: '1px 5px', fontSize: 7, color: 'white', display: 'flex', alignItems: 'center', gap: 3 }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white" strokeWidth="2" /></svg>
              Instagram
            </div>
          </div>
          <p style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>With You Album</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex shrink-0 border-b border-gray-100" style={{ paddingLeft: 12 }}>
        {['Overview', 'Submissions 17', 'Creators', 'Settings'].map((t, i) => (
          <div
            key={t}
            style={{
              padding: '8px 10px',
              fontSize: 9.5,
              fontWeight: i === 0 ? 600 : 500,
              color: i === 0 ? '#7433FF' : '#838383',
              borderBottom: i === 0 ? '1.5px solid #7433FF' : '1.5px solid transparent',
              whiteSpace: 'nowrap',
            }}
          >
            {t}
          </div>
        ))}
      </div>

      {/* Stats grid */}
      <div style={{ padding: '10px 12px 8px', flexShrink: 0 }}>
        <div className="grid grid-cols-2 gap-2">
          {stats.map((s) => (
            <div key={s.label} style={{ background: '#f9f9f9', borderRadius: 8, padding: '8px 10px' }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#101828', lineHeight: 1.2 }}>{s.value}</p>
              <p style={{ fontSize: 8.5, color: '#838383', marginTop: 1 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Budget breakdown */}
      <div style={{ padding: '0 12px', flexShrink: 0 }}>
        <div style={{ background: '#f9f9f9', borderRadius: 10, padding: '10px 10px' }}>
          <p style={{ fontSize: 10.5, fontWeight: 600, color: '#101828', marginBottom: 8 }}>Budget Breakdown</p>
          {[
            { label: 'Total Budget', value: '₦500,000', bold: false },
            { label: 'Spent', value: '₦320,000', bold: false },
            { label: 'Remaining', value: '₦180,000', bold: true, green: true },
            { label: 'Payout/Post', value: '₦15,000', bold: false },
            { label: 'Slots', value: '24/40 filled', bold: false },
          ].map(({ label, value, bold, green }) => (
            <div key={label} className="flex items-center justify-between" style={{ marginBottom: 4 }}>
              <span style={{ fontSize: 9, color: '#838383' }}>{label}</span>
              <span style={{ fontSize: 9, fontWeight: bold ? 700 : 600, color: green ? '#2b9a66' : '#101828' }}>{value}</span>
            </div>
          ))}

          {/* Progress bar */}
          <div style={{ height: 6, background: '#e5e7eb', borderRadius: 99, marginTop: 6, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '64%', background: '#7433FF', borderRadius: 99 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Screen 4: Campaign Creators ───────────────────────────────────────────────
function CreatorsScreen() {
  const creators = [
    { name: 'Banky W', avatar: '/mockups/avatar-3.png', earned: '₦45,250', followers: '120K', reach: '80K', posts: 3 },
    { name: 'Ayra Starr', avatar: '/mockups/avatar-1.png', earned: '₦45,250', followers: '120K', reach: '80K', posts: 3 },
    { name: 'Rema', avatar: '/mockups/avatar-2.png', earned: '₦45,250', followers: '20K', reach: '10K', posts: 3 },
  ];

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <StatusBar />
      <NavBar />

      {/* Campaign header image */}
      <div className="relative shrink-0" style={{ height: 100 }}>
        <Image src="/mockups/davido-cover.png" alt="" fill className="object-cover" sizes="290px" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)' }} />
        <div className="absolute bottom-0 left-0 right-0" style={{ padding: '6px 12px 8px' }}>
          <div className="flex items-center gap-1.5" style={{ marginBottom: 3 }}>
            <div style={{ background: '#22c55e', borderRadius: 3, padding: '1px 5px', fontSize: 7, fontWeight: 600, color: 'white' }}>Sharing</div>
            <div style={{ border: '0.8px solid rgba(255,255,255,0.5)', borderRadius: 3, padding: '1px 5px', fontSize: 7, color: 'white', display: 'flex', alignItems: 'center', gap: 3 }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white" strokeWidth="2" /></svg>
              Instagram
            </div>
          </div>
          <p style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>With You Album</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex shrink-0 border-b border-gray-100" style={{ paddingLeft: 12 }}>
        {['Overview', 'Submissions 17', 'Creators', 'Settings'].map((t, i) => (
          <div
            key={t}
            style={{
              padding: '8px 10px',
              fontSize: 9.5,
              fontWeight: i === 2 ? 600 : 500,
              color: i === 2 ? '#7433FF' : '#838383',
              borderBottom: i === 2 ? '1.5px solid #7433FF' : '1.5px solid transparent',
              whiteSpace: 'nowrap',
            }}
          >
            {t}
          </div>
        ))}
      </div>

      {/* Creators list */}
      <div style={{ padding: '10px 12px', flex: 1, overflow: 'hidden' }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: '#101828', marginBottom: 2 }}>Campaign Creators</p>
        <p style={{ fontSize: 9, color: '#838383', marginBottom: 10 }}>5 creators joined this campaign</p>

        <div style={{ background: '#f9f9f9', borderRadius: 10, padding: '4px 0' }}>
          <p style={{ fontSize: 8.5, fontWeight: 600, color: '#838383', padding: '6px 10px 4px', letterSpacing: 0.5 }}>ALL CAMPAIGNS</p>
          {creators.map((c, i) => (
            <div
              key={c.name}
              style={{
                background: 'white',
                margin: '0 8px 6px',
                borderRadius: 8,
                padding: '8px 10px',
                border: '0.5px solid #f0f0f0',
              }}
            >
              <div className="flex items-center gap-2">
                <div style={{ width: 30, height: 30, borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                  <Image src={c.avatar} alt={c.name} fill className="object-cover" sizes="30px" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#101828' }}>{c.name}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#101828' }}>
                      {c.earned} <span style={{ fontSize: 8, fontWeight: 400, color: '#838383' }}>earned</span>
                    </span>
                  </div>
                  <div style={{ fontSize: 8.5, color: '#838383', marginTop: 2 }}>
                    Followers: <span style={{ fontWeight: 600 }}>{c.followers}</span>
                    {'  '}Reach: <span style={{ fontWeight: 600 }}>{c.reach}</span>
                    {'  '}Posts: <span style={{ fontWeight: 600 }}>{c.posts}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Tap positions per screen (x%, y% of screen) ───────────────────────────────
const TAP_POSITIONS = [
  { x: 35, y: 75 },  // Marketplace → tap left campaign card
  { x: 50, y: 88 },  // View Campaign → tap "Make a submission"
  { x: 68, y: 38 },  // Overview → tap "Creators" tab
  { x: 50, y: 55 },  // Creators → tap creator row
];

const SCREENS = [MarketplaceScreen, ViewCampaignScreen, CampaignOverviewScreen, CreatorsScreen];

// ── Main export ───────────────────────────────────────────────────────────────
export default function HeroPhonePrototype() {
  const [current, setCurrent] = useState(0);
  const [tapping, setTapping] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const advance = () => {
      // Show tap ripple
      setTapping(true);
      setTimeout(() => {
        setTapping(false);
        setDirection(1);
        setCurrent((c) => (c + 1) % SCREENS.length);
      }, 550);
    };

    const timer = setInterval(advance, 4000);
    return () => clearInterval(timer);
  }, []);

  const Screen = SCREENS[current];
  const tap = TAP_POSITIONS[current];

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: '#F9FAFB' }}>
      {/* Screen content */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0.8 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0.6 }}
          transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
        >
          <Screen />
        </motion.div>
      </AnimatePresence>

      {/* Tap ripple effect */}
      <AnimatePresence>
        {tapping && (
          <motion.div
            key="tap"
            className="absolute pointer-events-none z-50"
            style={{
              left: `${tap.x}%`,
              top: `${tap.y}%`,
              translateX: '-50%',
              translateY: '-50%',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Outer ring */}
            <motion.div
              className="absolute rounded-full"
              style={{ background: 'rgba(116, 51, 255, 0.15)', left: '50%', top: '50%', translateX: '-50%', translateY: '-50%' }}
              initial={{ width: 0, height: 0 }}
              animate={{ width: 52, height: 52 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            />
            {/* Inner dot */}
            <motion.div
              className="w-5 h-5 rounded-full"
              style={{ background: 'rgba(116, 51, 255, 0.35)' }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screen indicator dots */}
      <div
        className="absolute left-1/2 flex gap-1.5 z-30 pointer-events-none"
        style={{ bottom: 8, transform: 'translateX(-50%)' }}
      >
        {SCREENS.map((_, i) => (
          <motion.div
            key={i}
            className="rounded-full"
            animate={{
              width: i === current ? 14 : 5,
              height: 5,
              background: i === current ? '#7433FF' : 'rgba(0,0,0,0.2)',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </div>
  );
}
