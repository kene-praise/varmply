'use client';

import { motion } from 'framer-motion';
import {
  LayoutGrid,
  Megaphone,
  Wallet,
  BarChart3,
  CheckCircle2,
  Shield,
  Check,
  Hash,
  AtSign,
  Tag,
} from 'lucide-react';

// ─── Color tokens ─────────────────────────────────────────────────────────────
const PURPLE = '#7C3BED';
const BLUE = '#2563EB';
const BLUE_DEEP = '#1A40B8';
const AMBER = '#D97706';
const GREEN = '#18C253';
const GREEN_BRAND = '#00A050';
const TEXT = '#0F0F1A';
const MUTED = '#4A4A6A';
const HINT = '#A0A0BA';
const BORDER = '#E4E4EC';
const BORDER_SOFT = '#EBEBF2';

// ─── Shared primitives ────────────────────────────────────────────────────────

function TrafficLights() {
  return (
    <div className="flex items-center gap-[5px]">
      <span className="w-[9px] h-[9px] rounded-full bg-[#FF5F57]" />
      <span className="w-[9px] h-[9px] rounded-full bg-[#FEBC2E]" />
      <span className="w-[9px] h-[9px] rounded-full bg-[#28C840]" />
    </div>
  );
}

function MiniBarChart({
  values,
  color,
  height = 22,
}: {
  values: number[];
  color: string;
  height?: number;
}) {
  const max = Math.max(...values);
  return (
    <div className="flex items-end gap-[3px]" style={{ height }}>
      {values.map((v, i) => (
        <div
          key={i}
          className="rounded-sm"
          style={{
            width: 4,
            height: `${(v / max) * 100}%`,
            background: i === values.length - 1 ? color : `${color}40`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Dashboard (Screen 1) ─────────────────────────────────────────────────────

export function SponsorDashboardMockup() {
  const campaigns = [
    {
      name: 'Paystack Q1 Launch',
      accent: BLUE,
      accentBg: 'rgba(37,99,235,0.05)',
      accentBorder: 'rgba(37,99,235,0.14)',
      status: 'Active',
      statusBg: '#DBEAFE',
      progress: 90,
      budget: '₦500K',
      slots: '18/20',
    },
    {
      name: 'PiggyVest Drive',
      accent: PURPLE,
      accentBg: 'rgba(124,59,237,0.05)',
      accentBorder: 'rgba(124,59,237,0.14)',
      status: 'Active',
      statusBg: '#EDE9FF',
      progress: 64,
      budget: '₦280K',
      slots: '14/14',
    },
    {
      name: 'Carbon Futures',
      accent: AMBER,
      accentBg: 'rgba(217,119,6,0.05)',
      accentBorder: 'rgba(217,119,6,0.14)',
      status: 'Active',
      statusBg: '#FEF3C7',
      progress: 38,
      budget: '₦350K',
      slots: '8/12',
    },
  ];

  const rightStats = [
    { label: 'Active', val: '3', color: BLUE },
    { label: 'Creators', val: '18', color: PURPLE },
    { label: 'Impressions', val: '142K', color: GREEN_BRAND },
    { label: 'Distributed', val: '₦900K', color: AMBER },
  ];

  return (
    <div
      className="w-full h-full rounded-[14px] overflow-hidden bg-white font-sans"
      style={{
        border: `1px solid ${BORDER}`,
        boxShadow:
          '0 32px 80px -20px rgba(10,20,60,0.45), 0 12px 32px -8px rgba(10,20,60,0.20)',
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-3 px-3.5 py-2.5"
        style={{ background: '#F5F5F7', borderBottom: `1px solid ${BORDER}` }}
      >
        <TrafficLights />
        <div
          className="flex-1 mx-4 h-[22px] rounded-md flex items-center justify-center gap-1.5 px-3"
          style={{ background: '#FFFFFF', border: `1px solid ${BORDER}` }}
        >
          <Shield size={9} style={{ color: HINT }} />
          <span className="text-[9.5px] font-medium" style={{ color: MUTED }}>
            app.varmply.com/dashboard
          </span>
        </div>
        <div className="w-[48px]" />
      </div>

      {/* App body */}
      <div className="flex" style={{ height: 'calc(100% - 38px)' }}>
        {/* Left sidebar */}
        <div
          className="shrink-0 flex flex-col items-center py-3 gap-1"
          style={{ width: 52, background: '#FAFAFB', borderRight: `1px solid ${BORDER_SOFT}` }}
        >
          <div
            className="w-8 h-8 rounded-[9px] flex items-center justify-center mb-3"
            style={{ background: BLUE_DEEP }}
          >
            <span className="text-white font-black text-[13px] leading-none">V</span>
          </div>
          {[
            { Icon: LayoutGrid, active: true },
            { Icon: Megaphone, active: false },
            { Icon: Wallet, active: false },
            { Icon: BarChart3, active: false },
          ].map(({ Icon, active }, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-[9px] flex items-center justify-center"
              style={{
                background: active ? 'rgba(124,59,237,0.12)' : 'transparent',
              }}
            >
              <Icon size={13} style={{ color: active ? PURPLE : HINT }} strokeWidth={2} />
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0 p-3.5 flex flex-col gap-3 overflow-hidden">
          {/* Top banner */}
          <div
            className="flex items-center justify-between rounded-[10px] px-3.5 py-2.5"
            style={{
              background: 'rgba(26,64,184,0.04)',
              border: `1px solid rgba(26,64,184,0.12)`,
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1 text-[9.5px] font-bold rounded-full px-2 py-[3px]"
                style={{ background: BLUE_DEEP, color: 'white' }}
              >
                <span className="w-1 h-1 rounded-full bg-white" />3 Active Campaigns
              </span>
              <span className="text-[9.5px] font-medium" style={{ color: MUTED }}>
                ₦1.2M budget locked in escrow
              </span>
            </div>
            <span
              className="text-[8.5px] font-bold uppercase tracking-[0.16em]"
              style={{ color: HINT }}
            >
              Live
            </span>
          </div>

          {/* Performance card */}
          <div
            className="rounded-[10px] p-3"
            style={{ background: 'white', border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center justify-between mb-2.5">
              <span
                className="text-[8px] font-bold uppercase tracking-[0.18em]"
                style={{ color: HINT }}
              >
                Performance · Last 7 days
              </span>
              <span className="text-[8.5px] font-bold" style={{ color: GREEN_BRAND }}>
                +18.4%
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                {
                  label: 'Total Engagement',
                  val: '24.8K',
                  color: GREEN,
                  bars: [30, 55, 40, 70, 50, 85, 95],
                },
                {
                  label: 'Impressions',
                  val: '142K',
                  color: BLUE,
                  bars: [45, 60, 50, 75, 65, 80, 90],
                },
                {
                  label: 'Distributed',
                  val: '₦900K',
                  color: PURPLE,
                  bars: [20, 35, 45, 55, 70, 85, 100],
                },
              ].map((m) => (
                <div key={m.label} className="flex flex-col">
                  <p className="text-[14px] font-black leading-none mb-0.5" style={{ color: TEXT }}>
                    {m.val}
                  </p>
                  <p
                    className="text-[7.5px] font-bold uppercase tracking-[0.14em] mb-1.5"
                    style={{ color: HINT }}
                  >
                    {m.label}
                  </p>
                  <MiniBarChart values={m.bars} color={m.color} height={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Campaigns grid */}
          <div className="flex-1 min-h-0 grid grid-cols-3 gap-2.5">
            {campaigns.map((c) => (
              <div
                key={c.name}
                className="rounded-[10px] p-2.5 flex flex-col"
                style={{
                  background: c.accentBg,
                  border: `1px solid ${c.accentBorder}`,
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className="text-[7px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: c.accent }}
                  >
                    Campaign
                  </span>
                  <span
                    className="text-[7.5px] font-bold rounded-full px-1.5 py-[1px]"
                    style={{ background: c.statusBg, color: c.accent }}
                  >
                    {c.status}
                  </span>
                </div>
                <p
                  className="text-[10px] font-black leading-tight mb-2"
                  style={{ color: TEXT }}
                >
                  {c.name}
                </p>
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="text-[7.5px] font-bold"
                      style={{ color: c.accent }}
                    >
                      {c.budget}
                    </span>
                    <span className="text-[7.5px] font-bold" style={{ color: HINT }}>
                      {c.progress}%
                    </span>
                  </div>
                  <div
                    className="h-[3px] rounded-full overflow-hidden mb-1.5"
                    style={{ background: `${c.accent}22` }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${c.progress}%`, background: c.accent }}
                    />
                  </div>
                  <p className="text-[7.5px] font-semibold" style={{ color: MUTED }}>
                    {c.slots} slots filled
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div
          className="shrink-0 p-2.5 flex flex-col gap-2"
          style={{ width: 100, background: '#FAFAFB', borderLeft: `1px solid ${BORDER_SOFT}` }}
        >
          {rightStats.map((s) => (
            <div
              key={s.label}
              className="rounded-[8px] p-2"
              style={{ background: 'white', border: `1px solid ${BORDER}` }}
            >
              <p
                className="text-[7px] font-bold uppercase tracking-[0.16em] mb-1"
                style={{ color: HINT }}
              >
                {s.label}
              </p>
              <p className="text-[13px] font-black leading-none" style={{ color: s.color }}>
                {s.val}
              </p>
            </div>
          ))}
          <div
            className="mt-auto rounded-[8px] p-2 flex items-center justify-center"
            style={{ background: `${GREEN_BRAND}12`, border: `1px solid ${GREEN_BRAND}22` }}
          >
            <span
              className="text-[8px] font-bold uppercase tracking-[0.14em]"
              style={{ color: GREEN_BRAND }}
            >
              All systems ok
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Campaign Builder (Screen 2) ──────────────────────────────────────────────

export function CampaignBuilderScreen() {
  const steps = ['Basics', 'Content Rules', 'Budget', 'Review'];
  const activeStep = 1;

  return (
    <div
      className="w-full h-full rounded-[12px] overflow-hidden bg-white font-sans flex flex-col"
      style={{
        border: `1px solid ${BORDER}`,
        boxShadow:
          '0 28px 60px -18px rgba(10,20,60,0.45), 0 10px 28px -6px rgba(10,20,60,0.22)',
      }}
    >
      {/* Chrome */}
      <div
        className="flex items-center gap-2.5 px-3 py-2"
        style={{ background: '#F5F5F7', borderBottom: `1px solid ${BORDER}` }}
      >
        <TrafficLights />
        <span
          className="ml-auto text-[9px] font-semibold"
          style={{ color: MUTED }}
        >
          Campaign Builder
        </span>
      </div>

      {/* Step progress */}
      <div
        className="flex items-center px-3 pt-2.5 pb-3 gap-1.5"
        style={{ borderBottom: `1px solid ${BORDER_SOFT}` }}
      >
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-1.5 flex-1">
            <div
              className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
              style={{
                background: i < activeStep ? BLUE_DEEP : i === activeStep ? BLUE_DEEP : '#F0F0F5',
                color: i <= activeStep ? 'white' : HINT,
                border: i > activeStep ? `1px solid ${BORDER}` : 'none',
              }}
            >
              {i < activeStep ? (
                <Check size={9} strokeWidth={3} />
              ) : (
                <span className="text-[8px] font-black">{i + 1}</span>
              )}
            </div>
            <span
              className="text-[8px] font-bold uppercase tracking-[0.12em] truncate"
              style={{
                color: i === activeStep ? BLUE_DEEP : i < activeStep ? MUTED : HINT,
              }}
            >
              {s}
            </span>
            {i < steps.length - 1 && (
              <div
                className="flex-1 h-px"
                style={{ background: i < activeStep ? BLUE_DEEP : BORDER_SOFT, minWidth: 4 }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form content */}
      <div className="flex-1 min-h-0 p-3 flex flex-col gap-2.5 overflow-hidden">
        {/* Platforms */}
        <div>
          <p
            className="text-[7.5px] font-bold uppercase tracking-[0.18em] mb-1.5"
            style={{ color: HINT }}
          >
            Platforms
          </p>
          <div className="flex gap-1.5">
            <span
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[9px] font-bold"
              style={{ background: '#000', color: 'white' }}
            >
              <span>TikTok</span>
              <Check size={9} strokeWidth={3} />
            </span>
            <span
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[9px] font-bold"
              style={{
                background: 'linear-gradient(135deg,#F58529,#DD2A7B,#8134AF)',
                color: 'white',
              }}
            >
              <span>Instagram</span>
              <Check size={9} strokeWidth={3} />
            </span>
            <span
              className="inline-flex items-center rounded-md px-2 py-1 text-[9px] font-semibold"
              style={{
                background: '#F5F5F7',
                color: HINT,
                border: `1px dashed ${BORDER}`,
              }}
            >
              + YouTube
            </span>
          </div>
        </div>

        {/* Deliverables */}
        <div>
          <p
            className="text-[7.5px] font-bold uppercase tracking-[0.18em] mb-1.5"
            style={{ color: HINT }}
          >
            Deliverables
          </p>
          <div
            className="rounded-md px-2.5 py-1.5 text-[9.5px] font-semibold flex items-center justify-between"
            style={{
              background: 'rgba(37,99,235,0.06)',
              border: `1px solid rgba(37,99,235,0.22)`,
              color: BLUE_DEEP,
            }}
          >
            <span>15–60 second video</span>
            <Check size={10} strokeWidth={3} />
          </div>
        </div>

        {/* Requirements */}
        <div className="flex-1 min-h-0 flex flex-col">
          <p
            className="text-[7.5px] font-bold uppercase tracking-[0.18em] mb-1.5"
            style={{ color: HINT }}
          >
            Requirements
          </p>
          <div className="flex flex-col gap-1">
            {[
              { Icon: Tag, label: 'Tag @paystack in caption' },
              { Icon: Hash, label: '#PaystackDrive hashtag' },
              { Icon: AtSign, label: 'Mention of product name' },
            ].map(({ Icon, label }, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-md px-2 py-1.5"
                style={{ background: '#FAFAFB', border: `1px solid ${BORDER_SOFT}` }}
              >
                <div
                  className="w-4 h-4 rounded flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(37,99,235,0.10)' }}
                >
                  <Icon size={8} style={{ color: BLUE_DEEP }} strokeWidth={2.5} />
                </div>
                <span
                  className="text-[9px] font-medium flex-1 truncate"
                  style={{ color: TEXT }}
                >
                  {label}
                </span>
                <CheckCircle2 size={10} style={{ color: GREEN_BRAND }} />
              </div>
            ))}
          </div>
        </div>

        {/* Budget preview */}
        <div
          className="rounded-md p-2.5"
          style={{
            background: BLUE_DEEP,
            boxShadow: '0 4px 14px -2px rgba(26,64,184,0.45)',
          }}
        >
          <p
            className="text-[7px] font-bold uppercase tracking-[0.18em] mb-1"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Budget preview
          </p>
          <p className="text-[14px] font-black leading-none text-white mb-1.5">
            ₦500,000 total
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[8.5px] font-semibold text-white/75">
              ₦25,000 per creator
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="text-[8.5px] font-semibold text-white/75">20 slots</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Analytics floating card (Screen 3) ───────────────────────────────────────

export function AnalyticsFloatingCard() {
  const bars = [45, 62, 38, 80, 55, 90, 72];
  return (
    <div
      className="w-full h-full rounded-2xl p-3 flex flex-col font-sans"
      style={{
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.6)',
        boxShadow:
          '0 24px 60px -12px rgba(10,20,60,0.35), 0 8px 24px -6px rgba(10,20,60,0.20)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="relative flex items-center justify-center w-2 h-2">
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: GREEN, opacity: 0.6 }}
            />
            <span
              className="relative w-2 h-2 rounded-full"
              style={{ background: GREEN }}
            />
          </span>
          <span
            className="text-[9px] font-bold uppercase tracking-[0.18em]"
            style={{ color: TEXT }}
          >
            Live Analytics
          </span>
        </div>
        <span className="text-[8px] font-semibold" style={{ color: HINT }}>
          7d
        </span>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <p
            className="text-[15px] font-black leading-none mb-0.5"
            style={{ color: TEXT, letterSpacing: '-0.02em' }}
          >
            8.4%
          </p>
          <p
            className="text-[7px] font-bold uppercase tracking-[0.16em]"
            style={{ color: HINT }}
          >
            Avg. Eng.
          </p>
        </div>
        <div>
          <p
            className="text-[15px] font-black leading-none mb-0.5"
            style={{ color: TEXT, letterSpacing: '-0.02em' }}
          >
            19
          </p>
          <p
            className="text-[7px] font-bold uppercase tracking-[0.16em]"
            style={{ color: HINT }}
          >
            Creators Active
          </p>
        </div>
      </div>

      {/* Bar chart */}
      <div className="flex-1 min-h-0 flex items-end gap-[3px]">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: i === bars.length - 1 ? GREEN : `${GREEN}55`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Orbit chip ───────────────────────────────────────────────────────────────

function OrbitChip({
  children,
  chipStyle,
  delay,
  floatOffset = 7,
}: {
  children: React.ReactNode;
  chipStyle: React.CSSProperties;
  delay: number;
  floatOffset?: number;
}) {
  return (
    <motion.div
      className="absolute flex items-center gap-2 rounded-2xl px-4 py-2.5 text-[11px] font-semibold text-white whitespace-nowrap z-40"
      style={{
        background: 'rgba(255,255,255,0.14)',
        border: '1px solid rgba(255,255,255,0.25)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 6px 28px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.18)',
        ...chipStyle,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -floatOffset, 0] }}
      transition={{
        opacity: { duration: 0.45, delay },
        scale: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
        y: { duration: 4 + delay * 0.3, delay, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Mobile variant (single dashboard, no overlap) ────────────────────────────

function MobileHeroScreens() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 320 }}>
      <motion.div
        className="absolute inset-x-0 top-0 mx-auto"
        style={{ width: '100%', height: 300 }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <SponsorDashboardMockup />
      </motion.div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function SponsorHeroScreens({ mobile = false }: { mobile?: boolean }) {
  if (mobile) return <MobileHeroScreens />;

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{ height: 'clamp(560px, 74vh, 680px)' }}
    >
      {/* Screen 1 — Dashboard (largest, bottom) */}
      <motion.div
        className="absolute"
        style={{
          bottom: 0,
          left: '-2.5%',
          width: '105%',
          top: 100,
          zIndex: 10,
          transform: 'perspective(800px) rotateY(-2deg)',
          transformOrigin: 'center center',
        }}
        initial={{ opacity: 0, y: 36, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.95, delay: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <SponsorDashboardMockup />
      </motion.div>

      {/* Screen 2 — Campaign Builder (top-right overlap) */}
      <motion.div
        className="absolute"
        style={{
          top: 0,
          right: 0,
          width: '52%',
          height: 340,
          zIndex: 20,
          transform: 'perspective(800px) rotateY(2deg)',
          transformOrigin: 'center center',
        }}
        initial={{ opacity: 0, y: -20, x: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <CampaignBuilderScreen />
      </motion.div>

      {/* Screen 3 — Analytics floating card (bottom-left) */}
      <motion.div
        className="absolute"
        style={{
          bottom: 48,
          left: 8,
          width: 240,
          height: 150,
          zIndex: 30,
        }}
        initial={{ opacity: 0, y: 20, x: -16, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        transition={{ duration: 0.85, delay: 1.0, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
        >
          <AnalyticsFloatingCard />
        </motion.div>
      </motion.div>

      {/* Orbit chips */}
      <OrbitChip chipStyle={{ top: 64, left: -18 }} delay={1.5} floatOffset={8}>
        <CheckCircle2 size={14} style={{ color: '#86EFAC' }} />
        <span>₦2.4M+ Released</span>
      </OrbitChip>

      <OrbitChip chipStyle={{ top: '48%', right: -16 }} delay={1.9} floatOffset={9}>
        <Shield size={14} style={{ color: '#93C5FD' }} />
        <span>98% Verified</span>
      </OrbitChip>
    </div>
  );
}
