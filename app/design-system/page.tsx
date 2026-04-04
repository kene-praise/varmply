'use client';

import { ArrowRight, Zap, Users, BarChart2, Wallet, Star, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import CampaignMockup from '@/components/UIComponents/CampaignMockup';
import WalletMockup from '@/components/UIComponents/WalletMockup';
import AnalyticsMockup from '@/components/UIComponents/AnalyticsMockup';
import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { StatusBadge, CategoryBadge, DarkBadge, HighlightBadge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { SectionWrap, SectionLabel, SectionHeading } from '@/components/ui/Section';
import { VideoCard, MediaGrid, FloatingChip } from '@/components/ui/VideoCard';
import { PhoneFrame } from '@/components/ui/PhoneFrame';
import { BrowserWindow, BrowserFrame } from '@/components/ui/ScreenshotFrame';
import { WorkHistory } from '@/components/ui/WorkHistory';
import { GlassHeader } from '@/components/ui/GlassHeader';
import { colors } from '@/lib/tokens';
import {
  fadeUp,
  fadeIn,
  scaleIn,
  revealUp,
  popIn,
  tiltIn,
  slideUp,
  staggerContainer,
  viewportOptions,
} from '@/lib/motion';

// ── Browser chrome strip (reused in bento + clip cards) ──────────────────────
function BrowserChrome({ url }: { url: string }) {
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

// ── Shared layout helpers ─────────────────────────────────────────────────────

function DsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-[var(--border-subtle)] py-14">
      <div className="mb-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          Component
        </p>
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">{label}</p>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

function DarkRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">{label}</p>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

// ── Colour swatch ─────────────────────────────────────────────────────────────

function Swatch({ color, label, textDark }: { color: string; label: string; textDark?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="h-14 w-20 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] shadow-sm"
        style={{ background: color }}
      />
      <p className={`text-center text-[10px] font-medium ${textDark ? 'text-[var(--text-secondary)]' : 'text-[var(--text-muted)]'}`}>
        {label}
      </p>
      <p className="font-mono text-[9px] text-[var(--text-muted)] opacity-70">{color}</p>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DesignSystemPage() {
  return (
    <div style={{ background: 'var(--bg-subtle)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: 'var(--bg-dark)', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">Varmply</p>
          <h1 className="text-4xl font-bold text-white md:text-5xl">Design System</h1>
          <p className="mt-3 text-base text-white/50">
            All primitives, tokens, and patterns — built before they're applied.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">

        {/* ── 1. COLOURS ─────────────────────────────────────────────────────── */}
        <DsSection title="Colours">

          <Row label="Brand">
            <Swatch color="#7C3BED" label="accent" />
            <Swatch color="#6B28D9" label="accent-hover" />
            <Swatch color="#9D6FF5" label="accent-soft" />
            <Swatch color="#EDE9FF" label="accent-light" textDark />
          </Row>

          <Row label="Money / Earnings">
            <Swatch color="#00C566" label="money-green" />
            <Swatch color="#00A855" label="money-green-hover" />
            <Swatch color="#E6FFF4" label="money-green-bg" textDark />
            <Swatch color="#002E18" label="money-green-dark" />
          </Row>

          <Row label="Light Surfaces">
            <Swatch color="#FFFFFF" label="bg-base" textDark />
            <Swatch color="#F7F7F9" label="bg-subtle" textDark />
            <Swatch color="#F0F0F4" label="bg-muted" textDark />
            <Swatch color="#E4E4EC" label="border-subtle" textDark />
            <Swatch color="#D1D1DE" label="border-default" textDark />
          </Row>

          <Row label="Dark Surfaces">
            <Swatch color="#07071A" label="bg-dark" />
            <Swatch color="#0D0D2B" label="bg-dark-card" />
            <Swatch color="#13132E" label="bg-dark-raised" />
          </Row>

          <Row label="Status">
            <Swatch color="#16A34A" label="status-green" />
            <Swatch color="#F0FDF4" label="status-green-bg" textDark />
            <Swatch color="#D97706" label="status-amber" />
            <Swatch color="#FFFBEB" label="status-amber-bg" textDark />
            <Swatch color="#DC2626" label="status-red" />
            <Swatch color="#FEF2F2" label="status-red-bg" textDark />
          </Row>

          {/* Bento card palette */}
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">Bento card palette</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {(Object.entries(colors.bento) as [string, { bg: string; accent: string; border: string }][]).map(([name, cfg]) => (
              <div
                key={name}
                className="rounded-[var(--radius-xl)] p-4"
                style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}
              >
                <div className="mb-3 h-6 w-6 rounded-full bg-white/25" />
                <p className="text-sm font-semibold capitalize text-white">{name}</p>
                <p className="font-mono text-[10px] text-white/60">{cfg.bg}</p>
              </div>
            ))}
          </div>
        </DsSection>

        {/* ── 2. TYPOGRAPHY ──────────────────────────────────────────────────── */}
        <DsSection title="Typography">
          <div className="space-y-4">
            {[
              { size: 'clamp(36px,5vw,64px)', weight: '800', label: 'Display / Hero' },
              { size: 'clamp(28px,4vw,48px)', weight: '700', label: 'Section Heading' },
              { size: 'clamp(22px,3vw,36px)', weight: '700', label: 'Card Heading' },
              { size: '20px', weight: '600', label: 'Sub-heading' },
              { size: '16px', weight: '400', label: 'Body — regular' },
              { size: '14px', weight: '400', label: 'Body — small' },
              { size: '12px', weight: '600', label: 'Label / Caption' },
            ].map(({ size, weight, label }) => (
              <div key={label} className="flex items-baseline gap-4 border-b border-[var(--border-subtle)] pb-4">
                <p className="w-44 shrink-0 text-xs text-[var(--text-muted)]">{label}</p>
                <p
                  className="text-[var(--text-primary)]"
                  style={{ fontSize: size, fontWeight: weight, lineHeight: 1.2 }}
                >
                  The campaign ends Sunday.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-6">
            {(['400', '500', '600', '700', '800'] as const).map((w) => (
              <div key={w}>
                <p className="mb-1 text-xs text-[var(--text-muted)]">{w}</p>
                <p className="text-base text-[var(--text-primary)]" style={{ fontWeight: w }}>
                  Inter {w}
                </p>
              </div>
            ))}
          </div>
        </DsSection>

        {/* ── 3. BUTTONS ─────────────────────────────────────────────────────── */}
        <DsSection title="Button">
          <Row label="Variants — md">
            <Button variant="primary" icon={<ArrowRight size={14} />}>Join Campaign</Button>
            <Button variant="ghost">View Details</Button>
          </Row>
          <Row label="Sizes — primary">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </Row>
          <Row label="States">
            <Button variant="primary" loading>Loading</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </Row>

          {/* On-dark surface */}
          <div className="mt-6 rounded-[var(--radius-lg)] p-8" style={{ background: 'var(--bg-dark)' }}>
            <DarkRow label="On dark surface">
              <Button variant="on-dark" icon={<ArrowRight size={14} />}>Get Started</Button>
              <Button variant="on-dark-ghost">Learn More</Button>
            </DarkRow>
          </div>
        </DsSection>

        {/* ── 4. BADGES ──────────────────────────────────────────────────────── */}
        <DsSection title="Badge">
          <Row label="Status badges">
            <StatusBadge status="eligible" />
            <StatusBadge status="not-eligible" />
            <StatusBadge status="joined" />
            <StatusBadge status="active" />
            <StatusBadge status="closed" />
            <StatusBadge status="pending" />
            <StatusBadge status="failed" />
          </Row>
          <Row label="Category pills">
            <CategoryBadge>General</CategoryBadge>
            <CategoryBadge type="accent">Campaign</CategoryBadge>
            <CategoryBadge>Music</CategoryBadge>
            <CategoryBadge type="accent">Sponsored</CategoryBadge>
          </Row>
          <div className="mt-4 rounded-[var(--radius-lg)] p-6" style={{ background: 'var(--bg-dark)' }}>
            <DarkRow label="Dark badges">
              <DarkBadge color="#7C3BED">Creator</DarkBadge>
              <DarkBadge color="#00C566">Verified</DarkBadge>
              <DarkBadge color="#F59E0B">Pending</DarkBadge>
              <DarkBadge>Default</DarkBadge>
            </DarkRow>
          </div>
        </DsSection>

        {/* ── 5. CARDS ───────────────────────────────────────────────────────── */}
        <DsSection title="Card">
          <Row label="Light / Subtle / Glass">
            <Card variant="light" padding="md" className="w-56">
              <p className="text-sm font-semibold text-[var(--text-primary)]">Light Card</p>
              <p className="mt-1 text-xs text-[var(--text-muted)]">White bg, subtle border, md shadow</p>
            </Card>
            <Card variant="subtle" padding="md" hoverable className="w-56">
              <p className="text-sm font-semibold text-[var(--text-primary)]">Subtle Card</p>
              <p className="mt-1 text-xs text-[var(--text-muted)]">Muted bg, hoverable</p>
            </Card>
          </Row>

          {/* Dark card */}
          <div className="mb-8 rounded-[var(--radius-lg)] p-8" style={{ background: 'var(--bg-dark)' }}>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-white/30">Dark surface</p>
            <Card variant="dark" padding="md" glow className="max-w-sm">
              <p className="text-base font-semibold text-white">Dark Card</p>
              <p className="mt-1 text-sm text-white/50">Dark bg with dot-grid texture and glow blobs</p>
            </Card>
          </div>

          {/* Bento cards */}
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">Bento variants (pocketapp energy)</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {(['purple', 'green', 'amber', 'blue', 'rose'] as const).map((c) => (
              <Card key={c} variant="bento" color={c} padding="md" hoverable>
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `${colors.bento[c].accent}22` }}
                >
                  <Zap size={18} color={colors.bento[c].accent} />
                </div>
                <p className="text-sm font-semibold capitalize text-white">{c}</p>
                <p className="mt-1 text-xs text-white/50">Feature card</p>
              </Card>
            ))}
          </div>
        </DsSection>

        {/* ── 6. SECTION COMPONENTS ──────────────────────────────────────────── */}
        <DsSection title="Section primitives">
          <Row label="SectionLabel — light surface">
            <SectionLabel>How It Works</SectionLabel>
            <SectionLabel>For Creators</SectionLabel>
            <SectionLabel>Campaign Types</SectionLabel>
          </Row>
          <div className="rounded-[var(--radius-lg)] p-6 mb-4" style={{ background: 'var(--bg-dark)' }}>
            <DarkRow label="SectionLabel — dark surface">
              <SectionLabel surface="dark">Transparency</SectionLabel>
              <SectionLabel surface="dark">Escrow System</SectionLabel>
            </DarkRow>
          </div>
          <div className="py-8 bg-white rounded-[var(--radius-lg)] px-8">
            <SectionHeading
              label="Section Heading"
              headline="Structured campaigns, verified results"
              sub="No scattered DMs. No vague agreements. Just clear rules and measurable outcomes."
            />
          </div>
        </DsSection>

        {/* ── 8. MOTION DEMOS ────────────────────────────────────────────────── */}
        <DsSection title="Motion">
          <p className="mb-6 text-sm text-[var(--text-muted)]">Scroll to trigger — all animations use <code className="rounded bg-[var(--bg-muted)] px-1.5 py-0.5 text-xs">viewport once: true</code></p>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { label: 'fadeUp', variant: fadeUp },
              { label: 'revealUp (jeton)', variant: revealUp },
              { label: 'popIn', variant: popIn },
              { label: 'scaleIn', variant: scaleIn },
              { label: 'fadeIn', variant: fadeIn },
            ].map(({ label, variant }) => (
              <motion.div
                key={label}
                variants={variant}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white p-6 shadow-[var(--shadow-sm)]"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">{label}</p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">Motion variant demo</p>
              </motion.div>
            ))}

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white p-6 shadow-[var(--shadow-sm)]"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">staggerContainer</p>
              {['Item one', 'Item two', 'Item three'].map((item) => (
                <motion.p key={item} variants={fadeUp} className="text-sm text-[var(--text-secondary)]">
                  {item}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </DsSection>

        {/* ── 9. BENTO FEATURE SECTIONS ─────────────────────────────────────── */}
        <DsSection title="Bento feature sections">
          <p className="mb-8 text-sm text-[var(--text-muted)]">
            Asymmetric bento layout — vivid card backgrounds, browser screenshots clipped at corners, copy in the exposed colored zone.
          </p>

          <div className="grid grid-cols-3 gap-4">

            {/* ── Row 1 ─────────────────────────────────────────────────────── */}

            {/* Purple hero (col-span-2) — My Campaigns, browser fills card width */}
            <div
              className="relative overflow-hidden rounded-[var(--radius-xl)] col-span-2"
              style={{ background: '#7C3BED', height: 440 }}
            >
              <p className="absolute z-20 top-7 left-7 text-[10px] font-semibold text-white/50 uppercase tracking-widest">Campaign Management</p>
              <p className="absolute z-20 top-[46px] left-7 text-xl font-bold text-white leading-tight mt-0.5">My campaigns</p>
              <div
                className="absolute rounded-[var(--radius-md)] overflow-hidden"
                style={{ top: 108, left: 36, right: -80, boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}
              >
                <BrowserChrome url="app.varmply.com/campaigns" />
                <Image
                  src="/mockups/my-campaigns.png"
                  alt=""
                  width={1512}
                  height={1023}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Green earnings stat card */}
            <div
              className="relative overflow-hidden rounded-[var(--radius-xl)] p-7"
              style={{ background: '#00A050', height: 440 }}
            >
              <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />
              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: 'rgba(255,255,255,0.22)' }}>
                  <Wallet size={22} color="white" />
                </div>
                <p className="text-4xl font-bold text-white">₦285K</p>
                <p className="mt-1.5 text-sm font-semibold text-white">earned this month</p>
                <p className="mt-1 text-xs text-white/70">across 3 active campaigns</p>
                <div className="mt-auto flex flex-col gap-2.5 pt-8">
                  {['Paystack ₦25K', 'PiggyVest ₦18K', 'Flutterwave ₦40K'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-white/80">
                      <CheckCircle size={11} color="white" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Row 2 ─────────────────────────────────────────────────────── */}

            {/* Amber — Create Campaign, browser clips left, text top-left */}
            <div
              className="relative overflow-hidden rounded-[var(--radius-xl)]"
              style={{ background: '#D97706', height: 360 }}
            >
              <p className="absolute z-20 top-7 left-6 text-[10px] font-semibold text-white/50 uppercase tracking-widest">Sponsor Tools</p>
              <p className="absolute z-20 top-[46px] left-6 text-lg font-bold text-white leading-snug mt-0.5">Create a campaign<br/>in minutes</p>
              <div
                className="absolute rounded-[var(--radius-md)] overflow-hidden"
                style={{ top: 116, left: -100, width: 480, boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}
              >
                <BrowserChrome url="app.varmply.com/campaigns/create" />
                <div className="relative overflow-hidden" style={{ height: 300 }}>
                  <Image src="/mockups/create-campaign.png" alt="" width={756} height={574} style={{ position: 'absolute', top: -60, left: 0 }} />
                </div>
              </div>
            </div>

            {/* Rose — Create Campaign, chrome clips at top, text at bottom-left */}
            <div
              className="relative overflow-hidden rounded-[var(--radius-xl)]"
              style={{ background: '#E11D48', height: 360 }}
            >
              <div
                className="absolute rounded-[var(--radius-md)] overflow-hidden"
                style={{ top: -22, left: 14, width: 380, boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}
              >
                <BrowserChrome url="app.varmply.com/campaigns/create" />
                <div className="relative overflow-hidden" style={{ height: 240 }}>
                  <Image src="/mockups/create-campaign.png" alt="" width={756} height={574} style={{ position: 'absolute', top: 0, left: 0 }} />
                </div>
              </div>
              <p className="absolute z-20 bottom-6 left-6 text-[10px] font-semibold text-white/50 uppercase tracking-widest">Clear requirements</p>
              <p className="absolute z-20 bottom-[38px] left-6 text-lg font-bold text-white leading-snug mb-0.5">Set rules.<br/>Creators apply.</p>
            </div>

            {/* Dark trust card */}
            <div
              className="relative overflow-hidden rounded-[var(--radius-xl)] p-7"
              style={{ background: '#0D0D2B', border: '1px solid rgba(255,255,255,0.08)', height: 360 }}
            >
              <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: 'rgba(124,59,237,0.20)' }}>
                  <Shield size={22} color="#9D6FF5" />
                </div>
                <p className="text-lg font-bold text-white">0% payment risk</p>
                <p className="mt-2 text-sm text-white/50">Funds only leave escrow when performance is validated. No pay-and-pray.</p>
                <div className="mt-auto flex flex-col gap-2.5 pt-6">
                  {['Escrow-protected budget', 'Automated validation', 'Transparent reporting'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle size={11} color="#9D6FF5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </DsSection>

        {/* ── 10. TESTIMONIALS (pocketapp style) ────────────────────────────── */}
        <DsSection title="Testimonials">
          <p className="mb-8 text-sm text-[var(--text-muted)]">
            Tweet-style cards — clean white, avatar + handle, short copy. Matches pocketapp testimonial pattern.
          </p>

          {/* Header row like pocketapp */}
          <div className="mb-8 flex items-center gap-3">
            <p className="text-2xl font-bold text-[var(--text-primary)]">What creators are saying</p>
            <span className="rounded-full bg-[#E6FFF4] px-3 py-1 text-xs font-semibold text-[#00A855]">
              ★ Top reviews
            </span>
          </div>
          <p className="mb-8 -mt-4 text-sm text-[var(--text-secondary)]">Here&apos;s what some users on the Varmply platform have to say.</p>

          {/* Testimonial grid — 3 columns, scrollable on mobile */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Tolu Adeyemi',
                handle: 'toluade_',
                avatar: 'T',
                avatarBg: '#7C3BED',
                text: "Finally a platform that actually pays. I used to get ghosted after posting. With Varmply, there's an escrow — my ₦25K was in my wallet within 48 hours. 🙌",
              },
              {
                name: 'Dami Oluwole',
                handle: 'dami.creates',
                avatar: 'D',
                avatarBg: '#00C566',
                text: "The eligibility system is underrated. I don't waste time applying for campaigns I won't get. Varmply only shows me what I qualify for. That alone saves hours.",
              },
              {
                name: 'Chidi Eze',
                handle: 'chidieze_',
                avatar: 'C',
                avatarBg: '#3B82F6',
                text: "I was skeptical at first. But the campaign requirements were so clear — no back-and-forth with the brand. I posted, hit the metrics, got validated. Done.",
              },
              {
                name: 'Funke Adesanya',
                handle: 'funkecreates',
                avatar: 'F',
                avatarBg: '#F43F5E',
                text: "As a sponsor, I've tried other influencer platforms. Varmply is the first one where I actually feel in control. I set the rules and only pay when results are real.",
              },
              {
                name: 'Biodun Akinsola',
                handle: 'biodun.a',
                avatar: 'B',
                avatarBg: '#F59E0B',
                text: "Set up my first campaign in less than 10 minutes. Had 12 eligible creators apply by morning. The analytics dashboard is genuinely impressive.",
              },
              {
                name: 'Remi Okonkwo',
                handle: 'remi_ok',
                avatar: 'R',
                avatarBg: '#9D6FF5',
                text: "The transparency is what got me. I can see exactly why a payout was released or held. No black box. That trust factor is what made me keep using it.",
              },
            ].map((t) => (
              <div
                key={t.handle}
                className="rounded-[var(--radius-lg)] p-5"
                style={{ background: 'white', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}
              >
                {/* Avatar row */}
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: t.avatarBg }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{t.name}</p>
                    <p className="text-xs text-[var(--accent)]">@{t.handle}</p>
                  </div>
                </div>
                {/* Tweet text */}
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{t.text}</p>
              </div>
            ))}
          </div>
        </DsSection>

        {/* ── 11. MEDIA — VideoCard & MediaGrid (cutflow style) ─────────────── */}
        <DsSection title="Media — VideoCard & MediaGrid">
          <p className="mb-10 text-sm text-[var(--text-muted)]">
            Cutflow-inspired: clean rounded frames, floating metric chips, bottom gradient overlays, autoplay loops, asymmetric grids. Used for creator content previews, campaign demos, and platform post samples.
          </p>

          {/* ── FloatingChip standalone ── */}
          <Row label="FloatingChip — standalone">
            <FloatingChip position="top-left" variant="dark">48K views</FloatingChip>
            <FloatingChip position="top-left" variant="light">Instagram</FloatingChip>
            <FloatingChip position="top-left" variant="accent">Live</FloatingChip>
            <FloatingChip position="top-left" variant="green">✓ Verified</FloatingChip>
          </Row>

          {/* ── VideoCard variants — 4/5 row ── */}
          <p className="mb-3 mt-2 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">Single cards — 4/5 aspect</p>
          <div className="grid grid-cols-3 gap-4">
            <VideoCard
              imageSrc="/images/hero-mockup-1.jpg"
              imageAlt="Paystack campaign"
              aspectRatio="4/5"
              showGradient
              caption="Paystack Q1 Campaign"
              subcaption="Posted Mar 28 · Instagram"
              chips={[
                { label: '48.2K views', position: 'top-left', variant: 'dark' },
              ]}
            />
            <VideoCard
              imageSrc="/images/hero-mockup-2.jpg"
              imageAlt="Creator submission preview"
              aspectRatio="4/5"
              autoPlay={false}
              showPlayButton
              showGradient
              caption="Creator submission preview"
              subcaption="TikTok · 0:47"
              chips={[
                { label: 'Pending review', position: 'top-left', variant: 'dark' },
              ]}
            />
            <VideoCard
              src="/videos/hero-bg.mp4"
              poster="/images/hero-mockup-3.jpg"
              aspectRatio="4/5"
              showMuteToggle
              showGradient
              caption="PiggyVest Feb Campaign"
              subcaption="9.1% engagement rate"
              chips={[
                { label: 'Live now', position: 'top-left', variant: 'dark' },
              ]}
            />
          </div>

          {/* ── Portrait 9/16 row ── */}
          <p className="mb-3 mt-10 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">Portrait 9/16 — TikTok / Reels style</p>
          <div className="grid grid-cols-4 gap-4">
            {[
              { imageSrc: '/images/joseph-portrait.png', imageAlt: 'Creator dami.creates', chips: [{ label: 'TikTok · 120K', position: 'top-left' as const, variant: 'dark' as const }], caption: '@dami.creates', subcaption: 'PiggyVest campaign' },
              { imageSrc: '/images/avatar-2.jpg', imageAlt: 'Creator toluade', chips: [{ label: 'Instagram', position: 'top-left' as const, variant: 'dark' as const }], caption: '@toluade', subcaption: 'Paystack · eligible' },
              { imageSrc: '/images/avatar-5.jpg', imageAlt: 'Creator chidieze_', chips: [{ label: 'Completed', position: 'top-left' as const, variant: 'dark' as const }], caption: '@chidieze_', subcaption: 'Flutterwave' },
              { imageSrc: '/images/avatar-7.jpg', imageAlt: 'Creator funke.c', chips: [{ label: 'In review', position: 'top-left' as const, variant: 'dark' as const }], caption: '@funke.c', subcaption: 'Cowrywise' },
            ].map((item, i) => (
              <VideoCard
                key={i}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                aspectRatio="9/16"
                showGradient
                caption={item.caption}
                subcaption={item.subcaption}
                chips={item.chips}
                hoverable
              />
            ))}
          </div>

          {/* ── MediaGrid layouts — side by side ── */}
          <p className="mb-3 mt-10 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">MediaGrid layouts</p>
          <div className="grid grid-cols-2 gap-6">
            {/* featured-left */}
            <div>
              <p className="mb-2 text-[11px] text-[var(--text-muted)]">featured-left</p>
              <MediaGrid
                layout="featured-left"
                items={[
                  {
                    imageSrc: '/images/hero-mockup-4.jpg',
                    imageAlt: 'Featured creator post',
                    showGradient: true,
                    caption: 'Featured creator post',
                    subcaption: 'Instagram · 48.2K views',
                    chips: [{ label: '6.2% engagement', position: 'top-left', variant: 'dark' }],
                  },
                  {
                    imageSrc: '/images/avatar-3.jpg',
                    imageAlt: 'TikTok post',
                    showGradient: false,
                    chips: [{ label: 'TikTok', position: 'top-left', variant: 'dark' }],
                  },
                  {
                    imageSrc: '/images/avatar-6.jpg',
                    imageAlt: 'Campaign',
                    showGradient: false,
                    chips: [{ label: 'Paid', position: 'top-left', variant: 'dark' }],
                  },
                ]}
              />
            </div>
            {/* tall-left */}
            <div>
              <p className="mb-2 text-[11px] text-[var(--text-muted)]">tall-left</p>
              <MediaGrid
                layout="tall-left"
                items={[
                  {
                    imageSrc: '/images/joseph-portrait.png',
                    imageAlt: 'Campaign highlight',
                    showGradient: true,
                    caption: 'Campaign highlight',
                    subcaption: 'Paystack · Q1 2025',
                    chips: [{ label: '₦25,000 payout', position: 'bottom-left', variant: 'dark' }],
                  },
                  {
                    imageSrc: '/images/avatar-1.jpg',
                    imageAlt: 'Before',
                    chips: [{ label: 'Before', position: 'top-left', variant: 'dark' }],
                  },
                  {
                    imageSrc: '/images/avatar-4.jpg',
                    imageAlt: 'After',
                    chips: [{ label: 'After', position: 'top-left', variant: 'dark' }],
                  },
                ]}
              />
            </div>
          </div>

          {/* ── On dark surface ── */}
          <p className="mb-3 mt-10 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">On dark surface — equal grid</p>
          <div
            className="rounded-[var(--radius-lg)] p-6"
            style={{ background: 'var(--bg-dark)' }}
          >
            <MediaGrid
              layout="equal"
              surface="dark"
              items={[
                {
                  imageSrc: '/images/hero-mockup-2.jpg',
                  imageAlt: 'Creator submission',
                  showGradient: true,
                  caption: 'Creator submission',
                  subcaption: '9.1% engagement',
                  chips: [{ label: 'Live', position: 'top-right', variant: 'dark' }],
                },
                {
                  imageSrc: '/images/hero-mockup-3.jpg',
                  imageAlt: 'Campaign result',
                  showGradient: true,
                  caption: 'Campaign result',
                  subcaption: '₦40,000 released',
                  chips: [{ label: 'Verified', position: 'top-right', variant: 'dark' }],
                },
              ]}
            />
          </div>
        </DsSection>

        {/* ── 12. PARTYVERSE ELEMENTS ────────────────────────────────────────── */}
        <DsSection title="Partyverse elements">
          <p className="mb-10 text-sm text-[var(--text-muted)]">
            Organic rotations, neon lime highlights, noise grain texture, gradient depth overlay, vertical marquee, and the smooth <code className="rounded bg-[var(--bg-muted)] px-1.5 py-0.5 text-xs">cubic-bezier(.3,1,.7,1)</code> easing.
          </p>

          {/* ── Highlight badges ── */}
          <Row label="HighlightBadge — neon lime, slight tilt">
            <HighlightBadge>New</HighlightBadge>
            <HighlightBadge>48 live campaigns</HighlightBadge>
            <HighlightBadge tilt={false}>No tilt variant</HighlightBadge>
            <HighlightBadge>✦ Verified payout</HighlightBadge>
          </Row>

          {/* ── Accent orange ── */}
          <Row label="Orange accent">
            <Button
              variant="primary"
              style={{ background: 'var(--accent-orange)' } as React.CSSProperties}
              icon={<ArrowRight size={14} />}
            >
              Launch Campaign
            </Button>
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
              style={{ background: 'var(--accent-orange-bg)', color: 'var(--accent-orange)' }}
            >
              Limited spots
            </span>
          </Row>

          {/* ── Organic tilt + noise + featured card ── */}
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
            Featured card — noise grain + depth overlay + hover lift
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

            {/* tiltIn entrance + featured variant */}
            <motion.div
              variants={tiltIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <Card variant="featured" padding="lg" hoverable>
                <HighlightBadge className="mb-4">Featured</HighlightBadge>
                <p className="text-base font-bold text-white">Featured card</p>
                <p className="mt-1 text-sm text-white/60">Dark bg + noise grain texture + bottom gradient. Enters with organic tilt.</p>
              </Card>
            </motion.div>

            {/* Tilted light card */}
            <motion.div
              variants={tiltIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="tilt-micro"
            >
              <Card variant="light" padding="lg" hoverable>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Organic tilt</p>
                <p className="text-base font-bold text-[var(--text-primary)]">Slightly tilted card</p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">Use <code className="text-xs">.tilt-micro</code>, <code className="text-xs">.tilt-left</code>, <code className="text-xs">.tilt-right</code> for partyverse-style organic placement.</p>
              </Card>
            </motion.div>

            {/* slideUp variant */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <Card variant="bento" color="purple" padding="lg">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/50">slideUp</p>
                <p className="text-base font-bold text-white">Smooth entrance</p>
                <p className="mt-1 text-sm text-white/60">partyverse easing: <code className="text-[10px]">cubic-bezier(.3,1,.7,1)</code></p>
              </Card>
            </motion.div>
          </div>

          {/* ── Vertical marquee ── */}
          <div className="mt-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
              Vertical marquee — partyverse testimonial scroll
            </p>
            <div className="flex gap-4 overflow-hidden" style={{ height: '280px' }}>
              {/* Column 1 — scrolls up */}
              <div className="relative flex-1 overflow-hidden">
                <div className="animate-marquee-y flex flex-col gap-3">
                  {['Varmply made my first brand deal feel real.', 'The escrow killed my invoice anxiety.', 'I post, hit the numbers, get paid. Done.', 'Varmply made my first brand deal feel real.', 'The escrow killed my invoice anxiety.', 'I post, hit the numbers, get paid. Done.'].map((text, i) => (
                    <div key={i} className="rounded-lg border border-[var(--border-subtle)] bg-white p-4 shadow-[var(--shadow-sm)]">
                      <p className="text-sm text-[var(--text-secondary)]">{text}</p>
                      <p className="mt-2 text-xs font-semibold text-[var(--text-muted)]">@creator_{i + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Column 2 — scrolls slower */}
              <div className="relative flex-1 overflow-hidden">
                <div className="animate-marquee-y-slow flex flex-col gap-3" style={{ animationDelay: '-8s' }}>
                  {['Set up a campaign in 5 minutes flat.', 'My analytics dashboard actually makes sense.', 'Creators come to me pre-filtered. Love it.', 'Set up a campaign in 5 minutes flat.', 'My analytics dashboard actually makes sense.', 'Creators come to me pre-filtered. Love it.'].map((text, i) => (
                    <div key={i} className="rounded-lg border border-[var(--border-subtle)] bg-white p-4 shadow-[var(--shadow-sm)]">
                      <p className="text-sm text-[var(--text-secondary)]">{text}</p>
                      <p className="mt-2 text-xs font-semibold text-[var(--text-muted)]">@sponsor_{i + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DsSection>

        {/* ── 13. APP FRAMES — iPhone + Browser ───────────────────────────── */}
        <DsSection title="App Frames — iPhone & Browser">
          <p className="mb-10 text-sm text-[var(--text-muted)]">
            Flat illustration-style iPhone mockup — no shadows, no hardware noise. Phone sits directly on a vivid card background. BrowserWindow wraps live components in minimal macOS chrome.
          </p>

          {/* ── Phone cards — pocketapp style: vivid bg, phone bleeds out ── */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">

            {/* Purple — creator earnings */}
            <div
              className="relative overflow-hidden rounded-[var(--radius-xl)] px-8 pt-8"
              style={{ background: '#7C3BED', height: 460 }}
            >
              <p className="mb-1 text-xs font-semibold text-white/50 uppercase tracking-widest">Creator app</p>
              <p className="text-xl font-bold text-white leading-tight">Track every<br />campaign payout</p>
              <div className="mt-6 flex justify-center">
                <PhoneFrame screenBg="#F9FAFB">
                  <div className="h-full w-full overflow-y-auto bg-[#F9FAFB]">
                    {/* pt-11 clears the front camera pill */}
                    <div className="flex items-center justify-between px-5 pt-11 pb-4">
                      <div>
                        <p className="text-[10px] text-[#8A8A9A]">Good morning</p>
                        <p className="text-sm font-bold text-[#1C1C1E]">Dami Adeyemi</p>
                      </div>
                      <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{ background: '#E8E8EE' }}>
                        <span className="text-[10px] font-bold text-[#4A4A60]">DA</span>
                      </div>
                    </div>
                    <div className="mx-4 rounded-xl p-4" style={{ background: '#FFFFFF', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                      <p className="text-[10px] text-[#8A8A9A]">Total earnings</p>
                      <p className="mt-0.5 text-2xl font-bold text-[#1C1C1E]">₦47,500</p>
                      <div className="mt-2 flex gap-2">
                        <div className="flex-1 rounded-lg px-2.5 py-1.5" style={{ background: '#F2F2F7' }}>
                          <p className="text-[9px] text-[#8A8A9A]">Active</p>
                          <p className="text-xs font-semibold text-[#1C1C1E]">3 campaigns</p>
                        </div>
                        <div className="flex-1 rounded-lg px-2.5 py-1.5" style={{ background: '#F2F2F7' }}>
                          <p className="text-[9px] text-[#8A8A9A]">Pending</p>
                          <p className="text-xs font-semibold text-[#1C1C1E]">₦18,000</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 px-4">
                      <p className="mb-2 text-[9px] font-semibold text-[#B0B0C0] uppercase tracking-wider">Campaigns</p>
                      {[
                        { brand: 'Paystack', task: 'Instagram post', reward: '₦25,000' },
                        { brand: 'PiggyVest', task: 'TikTok video', reward: '₦18,000' },
                        { brand: 'Cowrywise', task: 'Twitter thread', reward: '₦8,000' },
                      ].map((c, i) => (
                        <div key={i} className="mb-1.5 flex items-center gap-2.5 rounded-lg px-3 py-2.5" style={{ background: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                          <div className="h-7 w-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#F2F2F7' }}>
                            <span className="text-[9px] font-bold text-[#7C3BED]">{c.brand[0]}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-semibold text-[#1C1C1E] truncate">{c.brand}</p>
                            <p className="text-[9px] text-[#8A8A9A] truncate">{c.task}</p>
                          </div>
                          <span className="text-[10px] font-bold text-[#00A050] shrink-0">{c.reward}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </PhoneFrame>
              </div>
            </div>

            {/* Green — sponsor dashboard */}
            <div
              className="relative overflow-hidden rounded-[var(--radius-xl)] px-8 pt-8"
              style={{ background: '#00A050', height: 460 }}
            >
              <p className="mb-1 text-xs font-semibold text-white/50 uppercase tracking-widest">Sponsor app</p>
              <p className="text-xl font-bold text-white leading-tight">Manage live<br />campaigns</p>
              <div className="mt-6 flex justify-center">
                <PhoneFrame screenBg="#F9FAFB">
                  <div className="h-full w-full overflow-y-auto bg-[#F9FAFB]">
                    <div className="px-5 pt-11 pb-3">
                      <p className="text-[10px] text-[#8A8A9A]">Overview</p>
                      <p className="text-sm font-bold text-[#1C1C1E]">Paystack Dashboard</p>
                    </div>
                    <div className="mx-4 rounded-xl p-4" style={{ background: '#FFFFFF', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                      <p className="text-[10px] text-[#8A8A9A]">Campaign spend</p>
                      <p className="mt-0.5 text-2xl font-bold text-[#1C1C1E]">₦240,000</p>
                      <div className="mt-2 flex gap-2">
                        <div className="flex-1 rounded-lg px-2.5 py-1.5" style={{ background: '#F2F2F7' }}>
                          <p className="text-[9px] text-[#8A8A9A]">Creators</p>
                          <p className="text-xs font-semibold text-[#1C1C1E]">12 joined</p>
                        </div>
                        <div className="flex-1 rounded-lg px-2.5 py-1.5" style={{ background: '#F2F2F7' }}>
                          <p className="text-[9px] text-[#8A8A9A]">Reach</p>
                          <p className="text-xs font-semibold text-[#1C1C1E]">840K</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 px-4">
                      <p className="mb-2 text-[9px] font-semibold text-[#B0B0C0] uppercase tracking-wider">Live campaigns</p>
                      {[
                        { name: 'Q2 Instagram Push', creators: '8 active', budget: '₦120K' },
                        { name: 'TikTok Launch', creators: '4 active', budget: '₦80K' },
                        { name: 'Twitter Awareness', creators: 'Recruiting', budget: '₦40K' },
                      ].map((c, i) => (
                        <div key={i} className="mb-1.5 flex items-center gap-2.5 rounded-lg px-3 py-2.5" style={{ background: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                          <div className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: i === 2 ? '#D0D0DC' : '#00A050' }} />
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-semibold text-[#1C1C1E] truncate">{c.name}</p>
                            <p className="text-[9px] text-[#8A8A9A]">{c.creators}</p>
                          </div>
                          <span className="text-[10px] font-semibold text-[#8A8A9A] shrink-0">{c.budget}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </PhoneFrame>
              </div>
            </div>

            {/* Blue — analytics */}
            <div
              className="relative overflow-hidden rounded-[var(--radius-xl)] px-8 pt-8"
              style={{ background: '#2563EB', height: 460 }}
            >
              <p className="mb-1 text-xs font-semibold text-white/50 uppercase tracking-widest">Analytics</p>
              <p className="text-xl font-bold text-white leading-tight">Real-time<br />performance</p>
              <div className="mt-6 flex justify-center">
                <PhoneFrame screenBg="#F9FAFB">
                  <div className="h-full w-full overflow-y-auto bg-[#F9FAFB]">
                    <div className="px-5 pt-11 pb-3">
                      <p className="text-[10px] text-[#8A8A9A]">Campaign</p>
                      <p className="text-sm font-bold text-[#1C1C1E]">Paystack Q1</p>
                    </div>
                    {[
                      { label: 'Total views', value: '840K', change: '+12%' },
                      { label: 'Engagement', value: '6.2%', change: '+0.8%' },
                      { label: 'Creators paid', value: '₦240K', change: '12 of 12' },
                    ].map((m, i) => (
                      <div key={i} className="mx-4 mb-2 flex items-center justify-between rounded-lg px-3 py-3" style={{ background: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                        <div>
                          <p className="text-[9px] text-[#8A8A9A]">{m.label}</p>
                          <p className="text-base font-bold text-[#1C1C1E]">{m.value}</p>
                        </div>
                        <span className="text-[10px] font-semibold rounded-full px-2 py-0.5" style={{ background: 'rgba(0,160,80,0.10)', color: '#00A050' }}>{m.change}</span>
                      </div>
                    ))}
                    <div className="mx-4 mt-1 rounded-lg p-3" style={{ background: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                      <p className="mb-2 text-[9px] text-[#8A8A9A]">Views over time</p>
                      {/* Simple bar chart */}
                      <div className="flex items-end gap-1 h-14">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                          <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? '#2563EB' : '#DBEAFE' }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </PhoneFrame>
              </div>
            </div>

          </div>

          {/* ── Browser frame — full view ── */}
          <p className="mb-4 text-[11px] font-medium uppercase tracking-wider text-[var(--text-muted)]">BrowserFrame — My Campaigns (full view)</p>
          <BrowserFrame
            src="/mockups/my-campaigns.png"
            alt="My Campaigns dashboard"
            width={1512}
            height={1023}
            url="app.varmply.com/campaigns"
          />

          {/* ── Screenshot clip cards ── */}
          <p className="mt-10 mb-4 text-[11px] font-medium uppercase tracking-wider text-[var(--text-muted)]">BrowserClip — partial viewport cards</p>
          <div className="grid grid-cols-2 gap-4">

            {/* Purple hero — full width, browser stretches to fill card width, bleeds right + bottom */}
            <div
              className="relative overflow-hidden rounded-[var(--radius-xl)] col-span-2"
              style={{ background: '#7C3BED', height: 440 }}
            >
              <p className="absolute z-20 top-7 left-7 text-[10px] font-semibold text-white/50 uppercase tracking-widest">Campaign Management</p>
              <p className="absolute z-20 top-[46px] left-7 text-xl font-bold text-white leading-tight mt-1">My campaigns</p>
              <div
                className="absolute rounded-[var(--radius-md)] overflow-hidden"
                style={{ top: 96, left: 36, right: -80, boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}
              >
                <BrowserChrome url="app.varmply.com/campaigns" />
                <Image
                  src="/mockups/my-campaigns.png"
                  alt=""
                  width={1512}
                  height={1023}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Rose — chrome clipped at top, content ends mid-card, text at bottom */}
            <div
              className="relative overflow-hidden rounded-[var(--radius-xl)]"
              style={{ background: '#E11D48', height: 360 }}
            >
              <div
                className="absolute rounded-[var(--radius-md)] overflow-hidden"
                style={{ top: -22, left: 18, width: 540, boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}
              >
                <BrowserChrome url="app.varmply.com/campaigns/create" />
                {/* browser bottom: -22+32+240=250, clear zone y=250–360 (110px) */}
                <div className="relative overflow-hidden" style={{ height: 240 }}>
                  <Image src="/mockups/create-campaign.png" alt="" width={756} height={574} style={{ position: 'absolute', top: 0, left: 0 }} />
                </div>
              </div>
              <p className="absolute z-20 bottom-6 left-6 text-[10px] font-semibold text-white/50 uppercase tracking-widest">Sponsor Tools</p>
              <p className="absolute z-20 bottom-[38px] left-6 text-lg font-bold text-white leading-tight mb-0.5">Create a campaign</p>
            </div>

            {/* Amber — browser clips left+bottom, clear zone at top for text */}
            <div
              className="relative overflow-hidden rounded-[var(--radius-xl)]"
              style={{ background: '#D97706', height: 360 }}
            >
              <p className="absolute z-20 top-7 left-6 text-[10px] font-semibold text-white/50 uppercase tracking-widest">Campaign Preview</p>
              <p className="absolute z-20 top-[46px] left-6 text-lg font-bold text-white leading-tight mt-0.5">Live preview panel</p>
              <div
                className="absolute rounded-[var(--radius-md)] overflow-hidden"
                style={{ top: 116, left: -170, width: 660, boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}
              >
                <BrowserChrome url="app.varmply.com/campaigns/create" />
                <div className="relative overflow-hidden" style={{ height: 360 }}>
                  <Image src="/mockups/create-campaign.png" alt="" width={756} height={574} style={{ position: 'absolute', top: -80, left: 0 }} />
                </div>
              </div>
            </div>

          </div>
        </DsSection>

        {/* ── 14. WORK HISTORY TIMELINE ────────────────────────────────────── */}
        <DsSection title="Work History Timeline">
          <p className="mb-10 text-sm text-[var(--text-muted)]">
            LaunchFolio-inspired timeline. Large company name, right-aligned role and period. Mono index, divider rows. Use for social proof, featured sponsor history, or any chronological list.
          </p>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Light surface */}
            <div>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-wider text-[var(--text-muted)]">Light surface</p>
              <WorkHistory
                surface="light"
                entries={[
                  { company: 'Paystack', role: 'Lead Campaign Partner', period: '2022–Present', descriptor: 'Fintech · Nigeria' },
                  { company: 'PiggyVest', role: 'Creator Relations', period: '2021–2022', descriptor: 'Savings · Nigeria' },
                  { company: 'Flutterwave', role: 'Brand Sponsor', period: '2020–2021', descriptor: 'Payments · Africa' },
                  { company: 'Cowrywise', role: 'Content Partner', period: '2019–2020', descriptor: 'Investments · Nigeria' },
                ]}
              />
            </div>

            {/* Dark surface */}
            <div
              className="rounded-[var(--radius-lg)] p-8"
              style={{ background: 'var(--bg-dark-card)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="mb-4 text-[11px] font-medium uppercase tracking-wider text-white/30">Dark surface</p>
              <WorkHistory
                surface="dark"
                entries={[
                  { company: 'Paystack', role: 'Lead Campaign Partner', period: '2022–Present' },
                  { company: 'PiggyVest', role: 'Creator Relations', period: '2021–2022' },
                  { company: 'Flutterwave', role: 'Brand Sponsor', period: '2020–2021' },
                  { company: 'Cowrywise', role: 'Content Partner', period: '2019–2020' },
                ]}
              />
            </div>
          </div>
        </DsSection>

        {/* ── 15. GLASS HEADER ────────────────────────────────────────────────── */}
        <DsSection title="Glass Header">
          <p className="mb-10 text-sm text-[var(--text-muted)]">
            LaunchFolio-inspired floating pill nav. Frosted glass with backdrop blur. Dark and light variants — drop it into any hero section.
          </p>

          {/* Dark glass */}
          <div
            className="mb-6 flex items-center justify-center rounded-[var(--radius-lg)] p-10"
            style={{
              background: 'linear-gradient(135deg, #07071A 0%, #0D0D2B 100%)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <GlassHeader
              surface="dark"
              brand="Varmply"
              links={[
                { label: 'Campaigns', active: true },
                { label: 'Creators' },
                { label: 'Pricing' },
                { label: 'Blog' },
              ]}
              action={
                <Button variant="on-dark" size="sm">
                  Get started
                </Button>
              }
            />
          </div>

          {/* Light glass */}
          <div
            className="flex items-center justify-center rounded-[var(--radius-lg)] p-10"
            style={{
              background: 'linear-gradient(135deg, #E8E8F0 0%, #F2F2F8 100%)',
              border: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            <GlassHeader
              surface="light"
              brand="Varmply"
              links={[
                { label: 'Campaigns' },
                { label: 'Creators', active: true },
                { label: 'Pricing' },
                { label: 'Blog' },
              ]}
              action={
                <Button variant="primary" size="sm">
                  Get started
                </Button>
              }
            />
          </div>
        </DsSection>

        {/* Footer note */}
        <div className="py-16 text-center">
          <p className="text-sm text-[var(--text-muted)]">
            Varmply Design System — apply components to the site once all variants are validated here.
          </p>
        </div>

      </div>
    </div>
  );
}
