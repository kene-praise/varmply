# Varmply Landing Page — Design System

Editorial. Street-vibe. Gen Z energy. Built for music creators and sponsors in Africa.
This is the complete visual and component reference for the landing page codebase.

---

## Brand personality

Varmply lives at the intersection of **music culture** and **financial infrastructure**.
The landing page should feel like a creative agency portfolio — not a SaaS marketing site.
Big type. Bold colour. Confident layouts. Every section should feel intentional and kinetic.

Keywords: **editorial · bold · African street energy · trustworthy · Gen Z**

---

## Tech stack

- **Next.js 16.2** App Router, React 19, TypeScript
- **Tailwind CSS v4** — utility-first, no config file needed for most tokens
- **Framer Motion 12** — all animations
- **Three.js** — 3D hero backgrounds (HeroBackground3D, HeroForeground3D, CreatorBalloons3D)
- **Lucide React** — icons throughout

---

## Pages

| Route           | File                       | Audience  | Accent  |
|-----------------|----------------------------|-----------|---------|
| `/`             | `app/page.tsx`             | General   | Purple  |
| `/sponsors`     | `app/sponsors/page.tsx`    | Sponsors  | Blue    |
| `/creators`     | `app/creators/page.tsx`    | Creators  | Green   |
| `/terms`        | `app/terms/page.tsx`       | —         | —       |
| `/privacy`      | `app/privacy/page.tsx`     | —         | —       |
| `/waitlist`     | (target for all CTAs)      | —         | —       |

---

## Colour system

### Audience accents

| Audience  | Primary    | Use                                              |
|-----------|------------|--------------------------------------------------|
| Home      | `#6406CF`  | Home hero, global nav CTA, shared sections       |
| Sponsors  | `#1A40B8`  | Sponsors page hero, sponsor-scoped UI mockups    |
| Creators  | `#006B35`  | Creators page hero, creator-scoped UI mockups    |

Never mix audience accents. A sponsor section never uses green; a creator section never uses blue.

### Bento card accent palette

Each card in a bento grid gets its own accent — never repeat the same colour in adjacent cards.

```
Purple:   #7C3BED   tint: rgba(124,59,237,0.05)   border: rgba(124,59,237,0.14)
Blue:     #2563EB   tint: rgba(37,99,235,0.05)    border: rgba(37,99,235,0.14)
Green:    #00A050   tint: rgba(0,160,80,0.05)     border: rgba(0,160,80,0.14)
Amber:    #D97706   tint: rgba(217,119,6,0.05)    border: rgba(217,119,6,0.14)
```

### Status / semantic

```
Active / success:  #16A34A  bg #F0FDF4
Pending / warning: #D97706  bg #FFFBEB
Blue accent:       #2563EB  bg #EFF6FF
Muted:             #8888AA  bg #F4F4F8
```

### Rising icon / squarecle accent palette

Used exclusively for the animated icon tiles in hero sections.

```
Heart / like:  #FF2D55   (hot pink)
Comment:       #3B82F6   (electric blue)
Share:         #10B981   (vivid green)
Fire:          #F97316   (neon orange)
Bookmark:      #8B5CF6   (deep purple)
Spotify:       #1DB954
Apple Music:   #FC3C44
SoundCloud:    #FF5500
Audiomack:     #FE6D00
```

### Neutral / surface

```
Page background (dark sections): #0F0F1A  or audience accent
Page background (light sections): #FFFFFF
Card surface:      #FFFFFF
Border divider:    #E4E4EC
Body text:         #0F0F1A  (headings on light)
Secondary text:    #4A4A6A
Muted text:        #AAAABC  /  #8888AA  /  #BBBBCC
```

---

## Typography

### Scale

| Role              | Size                       | Weight | Tracking   | Line-height |
|-------------------|----------------------------|--------|------------|-------------|
| Hero headline     | `clamp(40px, 4.4vw, 64px)` | 900    | tight      | 1.04        |
| Section headline  | `clamp(32px, 5vw, 56px)`   | 900    | tight      | 1.0         |
| Card headline     | `clamp(18px, 2vw, 22px)`   | 900    | tight      | 1.15        |
| Stat hero number  | `clamp(64px, 8vw, 88px)`   | 900    | -0.05em    | 1.0         |
| Large stat        | `clamp(42px, 5vw, 58px)`   | 900    | -0.04em    | 1.0         |
| Oversized stat    | `clamp(72px, 9vw, 108px)`  | 900    | -0.05em    | 1.0         |
| Body              | 16px / `text-base`         | 400    | 0          | 1.6 (relaxed) |
| Small body        | 14px / `text-sm`           | 400    | 0          | 1.6         |
| Section label     | 11px                       | 700    | +0.18em    | 1           |
| Card tag          | 9px                        | 900    | +0.22em    | 1           |

### Rules

- **All headlines**: `font-black` (weight 900), `tracking-tight`
- **On dark hero surfaces**: gradient text — `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.58) 100%)` with `WebkitBackgroundClip: 'text'`, `WebkitTextFillColor: 'transparent'` + `filter: drop-shadow(0px 0px 28px rgba(255,255,255,0.18))`; always add `paddingBottom: '0.15em'` to prevent gradient clip
- **On light surfaces**: `#0F0F1A` — never `#000000`
- **Section labels**: `SectionLabel` component — small pill, `text-[11px] font-bold uppercase tracking-[0.18em]`, audience accent with 8% opacity background, `rounded-full`, `mb-6`
- **Card top-bar tags**: `text-[9px] font-black uppercase tracking-[0.22em]` in card accent colour

---

## Animation system

### Framer Motion variants (used on every page)

```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const vp = { once: true, margin: '-80px' };
```

Use `variants={stagger} initial="hidden" whileInView="visible" viewport={vp}` on section wrappers, and `variants={fadeUp}` on each child element.

### Keyframe animations (CSS)

```css
/* Hero breathe — used on aurora bloom divs */
@keyframes hero-breathe {
  from { opacity: 0.6; transform: scale(0.97); }
  to   { opacity: 1.0; transform: scale(1.03); }
}

/* Music platform icons rising through home hero glass panel */
@keyframes icon-rise {
  from { transform: translateY(0);      opacity: 0; }
  10%  {                                opacity: 1; }
  75%  {                                opacity: 1; }
  to   { transform: translateY(-900px); opacity: 0; }
}

/* Creator engagement icons rising through creators hero glass panel */
@keyframes engagement-rise {
  from { transform: translateY(0);      opacity: 0; }
  10%  {                                opacity: 1; }
  75%  {                                opacity: 1; }
  to   { transform: translateY(-750px); opacity: 0; }
}
```

### Orbit chips (floating stat badges on hero)

```tsx
animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
transition={{
  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
}}
```

---

## Section structure

Every content section follows this exact pattern:

```
1. SectionLabel pill
2. <h2> headline (font-black, clamp size)
3. Optional subtitle paragraph (text-base text-[#4A4A6A] leading-relaxed)
4. Content — bento grid, ScrollCarousel, or full-width card
5. Optional editorial footnote:
   text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BBBBCC] text-center mt-10
```

Section spacing: `py-12 md:py-24`. Border top between sections: `1px solid #E4E4EC`.

---

## Hero sections

### Structure

Every hero section:
- `<section className="relative overflow-hidden">` with `minHeight: '100dvh'` and audience-accent background
- Inner flex container: `relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center` with `minHeight: '100dvh', gap: 48`
- Left: text panel — `w-full lg:w-1/2 lg:shrink-0 pt-20 pb-8 lg:pt-28 lg:pb-20`
- Right: glass panel — `hidden lg:flex flex-col justify-center` with `flex: 1` (desktop only)

### Background layers (stack order, back to front)

1. `HeroBackground3D` / `CreatorBalloons3D` — Three.js canvas, 3D objects behind glass panel
2. Aurora bloom — `pointer-events-none absolute rounded-[50%]`, radial-gradient white glow, `filter: blur(80px)`, `animation: hero-breathe`
3. Line grid — absolute inset, `backgroundSize: '60px 60px'`, masked to fade at top/bottom edges, `opacity: 0.4`
4. Concentric rings — 2× absolute circles (800px + 540px), `border: 1px solid rgba(255,255,255,0.07)`, centred left-of-centre
5. `HeroForeground3D` — transparent canvas, 3D objects in front of glass panel
6. `LiquidGlass` — decorative liquid glass blob

### Glass panel (right side, desktop)

```
Container height:   clamp(560px, 74vh, 680px)
Border-radius:      36px
Background:         rgba(255,255,255,0.08)
Backdrop-filter:    blur(24px)
Border:             1px solid rgba(255,255,255,0.16)
Entry animation:    opacity 0→1, y 32→0, scale 0.97→1, duration 1.0s, delay 0.5s

Bottom gradient:    absolute bottom-0 inset-x-0 z-10, height 110px
                    linear-gradient(to bottom, transparent, <audience-colour-at-90%>)

Phone position:     absolute bottom-0 w-full flex justify-center
                    transform: translateY(20%)  (shows mid-section of phone, clips top/bottom)
```

### Mobile hero phone (no glass)

```
Element:            lg:hidden absolute bottom-0 inset-x-0 pointer-events-none overflow-hidden
Height:             260px  (clips to show top 260px of phone from section base)
Phone inside:       absolute top-0 left-1/2 translateX(-50%)
```

### Feature pills (hero bottom row)

```
Hidden on mobile:   hidden lg:flex flex-wrap gap-3
Pill style:         flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full text-white
                    bg: rgba(255,255,255,0.12)
Icon:               CheckCircle size 13, audience light colour
```

---

## Bento grid cards

The core of the How It Works and other feature sections.

### Anatomy

```
Container:    relative overflow-hidden rounded-[28px] md:rounded-[32px] flex flex-col
              bg: accent-tint  border: 1.5px solid accent-border  minHeight: 380px

Pattern:      absolute inset-0 pointer-events-none
              (choose one: diagonal crosshatch / dot grid / horizontal rules / vertical rules)

Ghost number: absolute -bottom-6 -right-2 font-black select-none pointer-events-none
              fontSize: 13rem  colour: accent  opacity: 0.055  letterSpacing: -0.06em

Top rule bar: flex items-center justify-between px-8 pt-6 pb-4
              borderBottom: accent-border
              Left:  "Step 01"  text-[9px] font-black uppercase tracking-[0.22em] accent
              Right: "— TAG"    same style at 60% opacity

Body:         px-8 pt-7 pb-0 flex-1 flex flex-col
              h3: font-black tracking-tight mb-3  clamp(18px,2vw,22px)
              p:  text-sm text-[#4A4A6A] leading-relaxed max-w-[340px]

Phone visual: mt-8, cropped at h-[200px] md:h-[250px], scale(0.85) from top
Box score:    grid border-top, cols × (py-4 text-center)
              val: font-black text-sm md:text-base  accent
              label: text-[8px] font-bold uppercase tracking-[0.18em]  accent at 60% opacity
```

### Background patterns

```tsx
// Diagonal crosshatch
'repeating-linear-gradient(-45deg, rgba(accent,0.06) 0px, rgba(accent,0.06) 1px, transparent 1px, transparent 14px)'

// Fine dot grid
'radial-gradient(circle, rgba(accent,0.13) 1px, transparent 1px)'  backgroundSize: '18px 18px'

// Horizontal rules
'repeating-linear-gradient(180deg, rgba(accent,0.07) 0px, rgba(accent,0.07) 1px, transparent 1px, transparent 22px)'

// Vertical rules
'repeating-linear-gradient(90deg, rgba(accent,0.06) 0px, rgba(accent,0.06) 1px, transparent 1px, transparent 20px)'
```

---

## ScrollCarousel

Responsive pattern used for all multi-card sections:
- Mobile: horizontal scroll snap (`overflow-x-auto snap-x snap-mandatory`), cards at `w-[82vw] shrink-0 snap-start`
- Desktop: switches to a CSS grid via `gridClass` prop (e.g. `md:grid-cols-2`, `md:grid-cols-3`)

```tsx
<ScrollCarousel count={4} gridClass="md:grid-cols-2">
  {/* cards */}
</ScrollCarousel>
```

---

## Buttons / CTAs

```
Primary (on dark):
  rounded-full px-7 py-3.5 text-sm font-semibold
  bg: white  text: audience-accent
  boxShadow: '0 4px 24px rgba(0,0,0,0.20)'
  hover: opacity 0.90

Ghost (on dark):
  rounded-full px-7 py-3.5 text-sm font-semibold
  border: 1.5px solid rgba(255,255,255,0.28)  text: white
  hover: bg rgba(255,255,255,0.08)

Primary (on light):
  rounded-full px-7 py-3.5 text-sm font-semibold
  bg: audience-accent  text: white
  boxShadow: '0 4px 24px rgba(accent,0.30)'

Ghost (on light):
  border: 1.5px solid rgba(255,255,255,0.28) or #E4E4EC
  text: #0F0F1A  bg: transparent
```

**Global CTA labels:**
- Primary: **"Join the Waitlist"** → `/waitlist`
- Secondary: **"How It Works"** → `#how-it-works`

---

## Navigation (SiteHeader)

```
Sticky top-0 z-50
Background (scrolled): white with blur backdrop, border-bottom #E4E4EC
Background (at top):   transparent (glass effect)
Logo: Varmply wordmark + bird icon
Nav links: "How It Works" → #how-it-works  |  "FAQ" → #faq  (in-page anchors, NOT /#faq)
CTA: "Join Waitlist →" rounded-full px-4 py-2 text-sm font-semibold, audience-accent bg
Mobile: hamburger menu, same links
Note: NO "Sign In" button — waitlist only
```

---

## Footer (MotionFooter)

Each page has its own footer config (colour, headline, CTAs). The footer entry animation triggers on scroll.

```
cta1: { label: 'Join the Waitlist', href: '/waitlist' }
cta2: { label: 'How It Works',      href: '#how-it-works' }

Home accent:     #6406CF
Sponsors accent: #1A40B8
Creators accent: #006B35
```

---

## Phone frames

### PhoneFrame component

```
Width:  320px
Height: ~696px  (aspect ratio 999:2173)
screenBg: "#FFFFFF"  for light app UI
screenBg: "#000"     for dark video content
```

### Phone content components

- **HeroPhoneApp** (sponsors page) — light UI: status bar, "Good morning" header, earnings card (`#1A40B8` bg), stats row, campaign list
- **VideoCarouselScreen** (creators page) — dark TikTok-style video with payout chip, action buttons (heart/comment/share), creator info, music bar. Videos rotate every 4s with slide-up transition.

---

## Rising icon tiles (squarecles)

Animated tiles that float upward through the glass panel in hero sections, clipped by `overflow:hidden`.

### Anatomy

```
Shape:      rounded square — borderRadius: sz * 0.28
Size:       sz: 42–45px  (reduced 20% from original)
Position:   absolute bottom: -60px, animates upward
Bg:         solid brand colour
Icon:       white, 52% of tile size
Shadow:     0 4px 18px rgba(0,0,0,0.32)
Animation:  8–11s linear loop with negative delays for natural stagger

3D lighting overlay (on every tile):
  radial-gradient(circle at 32% 26%, rgba(255,255,255,0.52) 0%, rgba(255,255,255,0.14) 38%, transparent 60%),
  radial-gradient(circle at 72% 78%, rgba(0,0,0,0.22) 0%, transparent 45%)
  position: absolute inset-0  zIndex: 20

PNG logos (Spotify, Apple Music, SoundCloud): object-cover fill — no contain padding
SVG logos (Audiomack): contain: true — padded object-contain + lighting overlay applied
```

### Home hero — music platforms (`HomeHeroFallingIcons`)

Rendered INSIDE the glass panel in `HeroSection` — clipped by panel's `overflow:hidden rounded-[36px]`.
11 tiles cycling through Spotify, Apple Music, SoundCloud, Audiomack.
Assets: `/public/brand-icons/` (PNG + SVG).

### Creators hero — engagement icons (`CreatorHeroRisingIcons`)

Rendered INSIDE the glass panel in the creators hero.
11 tiles cycling through heart, comment, share (paper plane), fire, bookmark.
All inline SVGs — no image files needed. Icons use the bright accent palette.
Sway animation (`icon-sway` keyframe) adds lateral drift via `--drift` CSS variable.

---

## Video cards (VideoCard component)

Used in creator content reel sections.

```
Aspect ratio:  9/16  (portrait video / TikTok style)
Object-fit:    cover
Gradient:      dark overlay bottom-up for caption readability
Caption:       @handle  font-semibold white
Subcaption:    CampaignName · Platform  text-xs muted
Chips:         view count badge top-left  variant: 'dark'
Hover:         scale(1.02)  transition 200ms
```

---

## Browser chrome mockup (BrowserChrome)

Used in dashboard/analytics sections to frame a screenshot or skeleton.

```
Bar:     bg #F4F4F8  h-9  rounded-t-xl  px-4 flex items-center gap-2
Dots:    3× circles (red/amber/green)  8px
URL bar: rounded bg-white  text-xs text-[#8888AA]  flex-1
```

---

## Orbit chips (floating stat badges)

```tsx
// Used in hero right panels, desktop only
<OrbitChip chipStyle={{ top: 80, left: -24 }} delay={1.6} floatOffset={8}>
  <InstagramIcon size={14} />
  <span>840K reach</span>
</OrbitChip>

Style:
  rounded-2xl px-4 py-2.5 text-[11px] font-semibold text-white
  bg: rgba(255,255,255,0.12)  border: 1px solid rgba(255,255,255,0.22)
  backdropFilter: blur(16px)
  boxShadow: 0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.15)
```

---

## Platform rules

**Varmply supports Instagram and TikTok ONLY.**
Never mention YouTube, Twitter, or any other platform in any copy, FAQ, mockup, or UI element.

Platform chips in mockups:
```
TikTok:    black bg  white icon + text
Instagram: pink/purple gradient  white text
```

---

## Page-specific notes

### Home (`/`)

- 3D background: `HomeHeroBackground3D` (purple `#6406CF`) + `HomeHeroForeground3D`
- Rising icons: music platform logos inside glass panel
- Sections: Hero → HowItWorks (id="how-it-works") → BentoGrid → ImageFeature → Testimonials → FAQ (id="faq") → Footer
- FAQ uses `FAQAccordion` with `homeFaqItems` — Instagram/TikTok only, waitlist answers

### Sponsors (`/sponsors`)

- 3D background: `HeroBackground3D backgroundColor="#1A40B8"` + `HeroForeground3D`
- Phone: `HeroPhoneApp` — all purple `#7C3BED` replaced with blue `#1A40B8` throughout
- Mobile: feature pills hidden (`hidden lg:flex`), bare phone at hero base
- Sections: Hero → HowItWorks (4-step bento) → Dashboard → LivePerformance → Escrow → ContentReel → FAQ → Footer

### Creators (`/creators`)

- 3D background: `CreatorBalloons3D` (green `#006B35`)
- Phone: `VideoCarouselScreen` (dark, TikTok-style)
- Rising icons: engagement icons (`CreatorHeroRisingIcons`) inside glass panel
- Mobile: feature pills hidden (`hidden lg:flex`), bare phone at hero base
- Sections: Hero → HowItWorks (4-step bento) → Community → Wallet → WhyVarmply → FAQ → Footer

---

## Mobile-first rules

```
Feature pills:          hidden lg:flex  (never on mobile)
Hero right panel:       hidden lg:flex  (desktop only — glass + phone)
Mobile hero phone:      lg:hidden absolute bottom-0  height 260px clip window
CTA button layout:      flex-col sm:flex-row gap-3  (stacked on smallest screens)
Section text align:     left on mobile, centre on md+ (items-start → md:items-center)
ScrollCarousel:         horizontal snap on mobile, grid on md+
Bento cards (mobile):   w-[82vw] snap-start (visible + hint of next card)
```

---

## DO / DON'T

| DO | DON'T |
|----|-------|
| `font-black` (900) on all headlines and stat numbers | `font-bold` (700) — too weak for editorial style |
| Gradient text on dark hero surfaces | Plain white text on dark (use gradient for visual depth) |
| Use audience accent consistently per page | Mix blue, green, purple on the same page |
| `overflow-hidden` on glass panels and section containers | Let content bleed outside its container |
| Negative animation delays for staggered loop starts | Wait for first loop to complete before staggering |
| Separate `id="how-it-works"` and `id="faq"` anchors on every page | Point all nav links to `/#how-it-works` (breaks on sub-pages) |
| `contain: true` flag on SVG tiles for padded rendering | Fill SVG tiles like PNG (SVGs need breathing room) |
| `translateY(20%)` on phone inside glass panel | `translateY(0)` — phone should be partially clipped to look "docked" |
| Clamp font sizes (`clamp(40px, 4.4vw, 64px)`) | Fixed font sizes that don't scale with viewport |
