'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOptions } from '@/lib/motion';
import CampaignCard from '@/components/CampaignCard';
import FAQAccordion from '@/components/FAQAccordion';
import WalletMockup from '@/components/UIComponents/WalletMockup';
import CTABanner from '@/components/CTABanner';

/* ─── Data ─────────────────────────────── */
const campaigns = [
  {
    brand: 'Paystack',
    category: 'Fintech · Instagram',
    amount: '₦25,000',
    status: 'eligible' as const,
    deadline: '12 days left',
    applicants: 34,
    description: 'Create a 60-second Instagram Reel showcasing how Paystack simplifies payments for small business owners.',
    engagement: '240K',
    budgetTotal: '₦500K',
    progressPct: 68,
    imageSeed: 'paystack_camp',
  },
  {
    brand: 'PiggyVest',
    category: 'Savings · Twitter + IG',
    amount: '₦18,000',
    status: 'eligible' as const,
    deadline: '7 days left',
    applicants: 58,
    description: 'Share your savings journey with PiggyVest. Authentic, personal content preferred.',
    engagement: '180K',
    budgetTotal: '₦350K',
    progressPct: 82,
    imageSeed: 'piggyvest_camp',
  },
  {
    brand: 'Cowrywise',
    category: 'Investment · YouTube',
    amount: '₦12,000',
    status: 'joined' as const,
    deadline: '3 days left',
    applicants: 72,
    description: 'Explain investment basics through a YouTube Short. Focus on beginner audiences.',
    engagement: '95K',
    budgetTotal: '₦200K',
    progressPct: 91,
    imageSeed: 'cowrywise_camp',
  },
  {
    brand: 'Flutterwave',
    category: 'Payments · TikTok',
    amount: '₦40,000',
    status: 'not-eligible' as const,
    deadline: '5 days left',
    applicants: 91,
    description: 'High-value TikTok campaign for creators with 50K+ followers in the tech or business niche.',
    engagement: '520K',
    budgetTotal: '₦1.2M',
    progressPct: 54,
    imageSeed: 'flutter_camp',
  },
  {
    brand: 'Carbon',
    category: 'Lending · Instagram',
    amount: '₦35,000',
    status: 'closed' as const,
    deadline: 'Ended',
    applicants: 143,
    description: 'Campaign has ended. Carbon is planning new campaigns for Q2.',
    engagement: '310K',
    progressPct: 100,
    imageSeed: 'carbon_camp',
  },
];

const creatorProfiles = [
  { seed: 'amara', handle: '@amara.creates', platform: 'Instagram', followers: '28K', earned: '₦85K' },
  { seed: 'dayo',  handle: '@dayo_creates',  platform: 'TikTok',    followers: '52K', earned: '₦140K' },
  { seed: 'seun',  handle: '@seunvibes',     platform: 'YouTube',   followers: '14K', earned: '₦60K' },
  { seed: 'temi',  handle: '@temitope.ng',   platform: 'Instagram', followers: '31K', earned: '₦95K' },
  { seed: 'chuka', handle: '@chuka.tv',      platform: 'TikTok',    followers: '89K', earned: '₦220K' },
];

const tickerItems = [
  { handle: '@amara.creates', stat: '₦85K earned', platform: 'Instagram' },
  { handle: '@dayo_creates',  stat: '₦140K earned', platform: 'TikTok' },
  { handle: '@seunvibes',     stat: '3 campaigns',   platform: 'YouTube' },
  { handle: '@temitope.ng',   stat: '₦95K earned', platform: 'Instagram' },
  { handle: '@chuka.tv',      stat: '₦220K earned', platform: 'TikTok' },
  { handle: '@layla.ng',      stat: '5 campaigns',   platform: 'Instagram' },
  { handle: '@zara_talks',    stat: '₦72K earned', platform: 'TikTok' },
  { handle: '@joekicks',      stat: '₦55K earned', platform: 'YouTube' },
];

const processSteps = [
  {
    step: '01',
    title: 'Browse the marketplace',
    description: 'Filter by niche, platform, payout, and eligibility. Every campaign shows full requirements before you apply.',
    bg: '#7C3BED', text: 'white', tagBg: 'rgba(255,255,255,0.15)',
  },
  {
    step: '02',
    title: 'Connect & apply',
    description: 'Link your social accounts. Varmply checks eligibility automatically — follower count, engagement, niche match.',
    bg: '#059669', text: 'white', tagBg: 'rgba(255,255,255,0.15)',
  },
  {
    step: '03',
    title: 'Submit your content',
    description: 'Post your content, submit the link in Varmply. Attach screenshots and notes. All tracked in one place.',
    bg: '#F59E0B', text: '#0F0A2E', tagBg: 'rgba(15,10,46,0.12)',
  },
  {
    step: '04',
    title: 'Earn after validation',
    description: 'Once your submission meets campaign criteria, funds release from escrow to your wallet. Withdraw anytime.',
    bg: '#0F0A2E', text: 'white', tagBg: 'rgba(255,255,255,0.1)',
  },
];

const faqItems = [
  { question: 'How do I know if I qualify for a campaign?', answer: "Varmply checks your profile against each campaign's eligibility rules automatically. You'll see a clear Eligible or Not Eligible status before you apply — no guessing." },
  { question: 'When do I get paid?', answer: "Payments are released from escrow after your submission is validated — typically 24–72 hours. Funds land in your Varmply wallet immediately and can be withdrawn anytime." },
  { question: 'What counts as a valid submission?', answer: "Each campaign defines its own requirements (tagging the brand, hashtags, minimum video length). Validation is automated. The campaign brief shows exactly what's needed upfront." },
  { question: 'Can I join multiple campaigns at once?', answer: "Yes — as many as you qualify for simultaneously. Some campaigns have exclusivity clauses, which are always disclosed upfront." },
  { question: 'What platforms are supported?', answer: 'Instagram, TikTok, YouTube, and Twitter. Each campaign specifies which platforms count.' },
  { question: 'Is there a fee for creators?', answer: 'Varmply is free for creators. You keep 100% of your campaign earnings. We charge sponsors, not creators.' },
];

const platformColor: Record<string, string> = {
  Instagram: '#FA5FB4',
  TikTok: '#33D478',
  YouTube: '#FF8800',
};

const platformBg: Record<string, string> = {
  Instagram: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCAF45 100%)',
  TikTok: '#010101',
  YouTube: '#FF0000',
};

/* ─────────────────────────────────────────
   Page
──────────────────────────────────────────*/
export default function CreatorsPage() {
  return (
    <div className="bg-white">

      {/* ═══════════════════════════════════
          1. HERO — white + tall creator card
      ═══════════════════════════════════ */}
      <section
        className="relative overflow-hidden min-h-[100dvh] flex items-center -mt-16"
        style={{ background: 'white' }}
      >
        {/* Subtle dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(#D1D1DE 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.45,
        }} />
        {/* Purple glow — top right */}
        <div className="absolute -top-24 -right-24 w-[640px] h-[640px] rounded-full pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(124,59,237,0.08) 0%, transparent 65%)',
        }} />
        {/* Amber glow — bottom left */}
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 65%)',
        }} />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[100dvh] py-32">

            {/* Left: copy */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">

              {/* Amber urgency pill */}
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
                style={{ background: '#FFFBEB', border: '1px solid #FDE68A' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                <span className="text-xs font-bold text-[#92400E] uppercase tracking-widest">Join 5,000+ creators</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="font-extrabold text-[#0F0A2E] mb-6"
                style={{ fontSize: 'clamp(36px, 4.8vw, 60px)', lineHeight: 1.1 }}
              >
                Turn your audience<br />
                into income on
                <br />
                {/* Platform badges inline */}
                <span className="inline-flex items-center gap-2 flex-wrap mt-2">
                  {(['Instagram', 'TikTok', 'YouTube'] as const).map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center px-3 py-1 rounded-xl text-white font-bold"
                      style={{ background: platformBg[p], fontSize: '13px' }}
                    >
                      {p}
                    </span>
                  ))}
                  <em style={{ fontStyle: 'italic', color: '#7C3BED' }}>& more.</em>
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg leading-relaxed mb-8"
                style={{ color: '#4A4A6A', maxWidth: '460px' }}
              >
                Browse structured campaigns with clear rules and guaranteed payouts — no DMs, no guesswork, no chasing.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90"
                  style={{ background: '#7C3BED' }}
                >
                  Create Creator Account <ArrowRight size={15} />
                </Link>
                <Link
                  href="#marketplace"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all"
                  style={{ color: '#0F0A2E', background: '#F4F3F5', border: '1px solid #E4E4EC' }}
                >
                  Browse Campaigns
                </Link>
              </motion.div>

              {/* Social proof strip */}
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {['amara', 'dayo', 'seun', 'temi'].map((seed, i) => (
                    <div
                      key={seed}
                      className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white"
                      style={{ zIndex: 4 - i }}
                    >
                      <Image
                        src={`https://picsum.photos/seed/${seed}_av/36/36`}
                        alt="creator"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="w-px h-8 bg-[#E4E4EC]" />
                <div>
                  <div className="flex items-center gap-0.5 mb-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={11} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <p className="text-xs text-[#8888AA]">
                    Trusted by <strong className="text-[#0F0A2E]">5,000+</strong> creators
                  </p>
                </div>
              </motion.div>

            </motion.div>

            {/* Right: tall creator phone card */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative" style={{ width: '340px', height: '560px' }}>

                {/* Main portrait card */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    borderRadius: '2.5rem',
                    boxShadow: '0 32px 64px rgba(15,10,46,0.14), 0 8px 24px rgba(15,10,46,0.06)',
                    border: '1px solid #E4E4EC',
                  }}
                >
                  <Image
                    src="https://picsum.photos/seed/joanna/340/560"
                    alt="Creator"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Bottom gradient + handle */}
                  <div
                    className="absolute bottom-0 inset-x-0 px-6 pb-6 pt-20"
                    style={{ background: 'linear-gradient(to top, rgba(15,10,46,0.80) 0%, transparent 100%)' }}
                  >
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-white font-bold text-base">@joanna</p>
                      <CheckCircle size={14} color="#A78BFA" fill="transparent" />
                    </div>
                    <p className="text-white/55 text-xs">Content creator · Finance</p>
                  </div>
                </div>

                {/* Badge: active campaigns — top left */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-5 -left-10 rounded-2xl px-4 py-2.5 bg-white"
                  style={{ boxShadow: '0 8px 24px rgba(15,10,46,0.10)', border: '1px solid #EBEBF0' }}
                >
                  <p className="text-[10px] text-[#8888AA] mb-0.5">Campaigns live</p>
                  <p className="text-[#0F0A2E] font-bold text-xl leading-none">100+</p>
                </motion.div>

                {/* Badge: avg engagement — top right, hot pink */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                  className="absolute -top-4 -right-10 rounded-2xl px-4 py-2.5"
                  style={{ background: '#FA5FB4', boxShadow: '0 8px 24px rgba(250,95,180,0.30)' }}
                >
                  <p className="text-white/70 text-[10px] mb-0.5">Avg engagement</p>
                  <p className="text-white font-bold text-xl leading-none">30K</p>
                </motion.div>

                {/* Badge: total earned — bottom left */}
                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  className="absolute -bottom-5 -left-10 rounded-2xl px-4 py-2.5 bg-white"
                  style={{ boxShadow: '0 8px 24px rgba(15,10,46,0.10)', border: '1px solid #EBEBF0' }}
                >
                  <p className="text-[10px] text-[#8888AA] mb-1">Creators earned</p>
                  <p className="font-bold text-xl leading-none" style={{ color: '#059669' }}>₦3.5M+</p>
                </motion.div>

                {/* Badge: total reach — bottom right */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
                  className="absolute -bottom-3 -right-8 rounded-2xl px-4 py-2.5"
                  style={{ background: '#F4F3F5', border: '1px solid #E4E4EC', boxShadow: '0 4px 16px rgba(15,10,46,0.07)' }}
                >
                  <p className="text-[10px] text-[#8888AA] mb-0.5">Total reach</p>
                  <p className="text-[#0F0A2E] font-bold text-xl leading-none">40K+</p>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          2. TICKER — scrolling creator handles
      ═══════════════════════════════════ */}
      <div
        className="overflow-hidden py-4"
        style={{ background: '#0A0720', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6">
              <span className="text-white/80 text-sm font-medium">{item.handle}</span>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{
                  background: `${platformColor[item.platform] ?? '#A78BFA'}18`,
                  color: platformColor[item.platform] ?? '#A78BFA',
                }}
              >
                {item.platform}
              </span>
              <span className="text-white/35 text-xs">{item.stat}</span>
              <span className="text-white/15 mx-2">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════
          3. CAMPAIGN MARKETPLACE
      ═══════════════════════════════════ */}
      <section id="marketplace" className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative overflow-hidden"
            style={{ background: '#0F0A2E', borderRadius: '2rem', padding: '2.5rem' }}
          >
            {/* Dot texture */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }} />
            <div className="absolute -top-20 right-0 w-72 h-72 rounded-full pointer-events-none" style={{
              background: 'radial-gradient(circle, rgba(124,59,237,0.2) 0%, transparent 70%)',
            }} />

            <div className="relative">
              <motion.div variants={fadeUp} className="mb-8">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider"
                  style={{ background: 'rgba(124,59,237,0.25)', color: '#C4B5FD' }}>
                  Marketplace
                </span>
                <h2 className="text-white font-bold mb-2" style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}>
                  Real campaigns. Real payouts.
                </h2>
                <p className="text-white/55 text-base">Browse verified campaigns — your eligibility shown before you even click.</p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative"
              >
                {campaigns.map((c, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <CampaignCard {...c} />
                  </motion.div>
                ))}
                {/* Fade-out overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-center pb-4"
                  style={{ background: 'linear-gradient(to bottom, transparent, #0F0A2E)' }}
                >
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                    style={{ background: 'white', color: '#7C3BED' }}
                  >
                    Join to see all campaigns <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          4. HOW IT WORKS — sequential stagger
      ═══════════════════════════════════ */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <span className="tag mb-3" style={{ color: '#7C3BED', background: '#EDE9FF' }}>Process</span>
              <h2 className="font-bold" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#0F0A2E' }}>
                How it works for creators
              </h2>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {processSteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: 0.65, delay: i * 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden flex flex-col"
                style={{ background: s.bg, borderRadius: '2rem', padding: '2.25rem', minHeight: '240px' }}
              >
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider self-start"
                  style={{ background: s.tagBg, color: s.text }}
                >
                  Step {s.step}
                </span>
                <h3 className="font-bold text-xl mb-3 leading-tight" style={{ color: s.text }}>{s.title}</h3>
                <p className="text-base leading-relaxed flex-1" style={{ color: s.text, opacity: 0.75 }}>
                  {s.description}
                </p>
                <div
                  className="absolute bottom-4 right-6 font-extrabold select-none pointer-events-none"
                  style={{ fontSize: '5rem', lineHeight: 1, color: s.text, opacity: 0.08 }}
                >
                  {s.step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          5. CREATOR IMAGES STRIP
      ═══════════════════════════════════ */}
      <section className="py-20" style={{ background: '#0F0A2E' }}>
        <div className="max-w-6xl mx-auto px-6 mb-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider"
                style={{ background: 'rgba(250,95,180,0.15)', color: '#FA5FB4' }}>
                Community
              </span>
              <h2 className="text-white font-bold mb-2" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
                Join creators already earning.
              </h2>
              <p className="text-white/50">Real creators, real payouts, structured campaigns.</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Horizontal portrait strip */}
        <div className="overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-4 px-6"
            style={{ width: 'max-content' }}
          >
            {creatorProfiles.map((creator, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 overflow-hidden"
                style={{
                  width: '260px',
                  height: '360px',
                  borderRadius: '1.75rem',
                  boxShadow: '0 20px 48px rgba(0,0,0,0.4)',
                }}
              >
                <Image
                  src={`https://picsum.photos/seed/${creator.seed}/260/360`}
                  alt={creator.handle}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(15,10,46,0.9) 0%, rgba(15,10,46,0.2) 55%, transparent 100%)' }}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: `${platformColor[creator.platform] ?? '#A78BFA'}22`,
                      color: platformColor[creator.platform] ?? '#A78BFA',
                      border: `1px solid ${platformColor[creator.platform] ?? '#A78BFA'}35`,
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {creator.platform}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-bold text-sm leading-tight">{creator.handle}</p>
                  <p className="text-white/50 text-xs mt-0.5">{creator.followers} followers</p>
                  <p className="text-sm font-bold mt-1.5" style={{ color: '#33D478' }}>{creator.earned}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          6. WALLET & EARNINGS
      ═══════════════════════════════════ */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative overflow-hidden"
            style={{ background: '#0F0A2E', borderRadius: '2rem', padding: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(51,212,120,0.15) 0%, transparent 70%)' }} />
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }} />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Wallet mockup */}
              <motion.div variants={fadeUp} className="flex justify-center">
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
                  <WalletMockup />
                </motion.div>
              </motion.div>

              {/* Copy */}
              <motion.div variants={fadeUp}>
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider"
                  style={{ background: 'rgba(51,212,120,0.15)', color: '#33D478' }}>
                  Wallet &amp; Earnings
                </span>
                <h2 className="text-white font-bold mb-4" style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.2 }}>
                  Your earnings, always transparent.
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.58)' }}>
                  Every naira tracked, timestamped, and accessible. No chasing payments, no waiting on spreadsheets.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { status: 'Tracking',  color: '#A78BFA', desc: 'Campaign live. Your metrics captured in real time.' },
                    { status: 'Pending',   color: '#F59E0B', desc: 'Submission received, being validated against requirements.' },
                    { status: 'Completed', color: '#33D478', desc: 'Validated. Funds released from escrow to your wallet.' },
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold flex-shrink-0 mt-0.5"
                        style={{ color: s.color, background: `${s.color}18` }}>
                        {s.status}
                      </span>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          7. WHY CREATORS — 3 vivid cards
      ═══════════════════════════════════ */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <h2 className="font-bold" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#0F0A2E' }}>
                Why creators choose Varmply
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Clear rules upfront',       desc: "Every campaign shows exactly what's required before you commit. No vague briefs, no surprises.", bg: '#7C3BED', text: 'white', tagBg: 'rgba(255,255,255,0.15)' },
                { title: 'Verified payouts',           desc: "Sponsor money is locked in escrow before campaigns go live. You'll always get paid for completed work.", bg: '#059669', text: 'white', tagBg: 'rgba(255,255,255,0.15)' },
                { title: 'One place for everything',  desc: 'Browse, apply, submit, and get paid without switching tools. Varmply handles the whole journey.', bg: '#F4F3F5', text: '#0F0A2E', tagBg: 'rgba(15,10,46,0.08)' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative overflow-hidden flex flex-col"
                  style={{ background: item.bg, borderRadius: '2rem', padding: '2.25rem', minHeight: '260px' }}
                >
                  <h3 className="font-bold text-xl mb-3 leading-tight" style={{ color: item.text }}>
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed flex-1" style={{ color: item.text, opacity: 0.75 }}>
                    {item.desc}
                  </p>
                  <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full pointer-events-none"
                    style={{ background: 'rgba(255,255,255,0.05)' }} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          8. FAQ
      ═══════════════════════════════════ */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mb-10"
          >
            <motion.p variants={fadeUp} className="tag mb-3" style={{ color: '#7C3BED', background: '#EDE9FF' }}>FAQ</motion.p>
            <motion.h2 variants={fadeUp} className="font-bold" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#0F0A2E' }}>
              Creator questions, answered.
            </motion.h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOptions} transition={{ duration: 0.5 }}>
            <FAQAccordion items={faqItems} />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          9. CTA
      ═══════════════════════════════════ */}
      <CTABanner
        headline="Ready to turn your audience into structured income?"
        subtext="Free to sign up. Paid to perform. Join Nigerian creators already earning on Varmply."
        cta1={{ label: 'Create Creator Account →', href: '#' }}
        cta2={{ label: 'Browse Campaigns', href: '#marketplace' }}
      />

    </div>
  );
}
