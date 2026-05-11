# Varmply Landing Page — Design Decision Log

Raw material for portfolio case study. Reconstructed from git history + session memory.
Log is append-only. Output on request: "give me the log" / "export the log" / "session log".

---

### INITIAL STACK CHOICE — 2026-04-02

**What changed:** Chose Plus Jakarta Sans as the initial typeface and grey card surfaces with hard borders (no shadows) for the first build.

**Why:** Plus Jakarta reads contemporary and African-adjacent. No-shadow cards aimed for a "dashboard seriousness" feel — functional, not decorative.

**What was considered but not done:** System font stack was briefly on the table but felt too generic for a brand launch.

**Tags:** typography | color | constraint-driven

---

### FONT SYSTEM PURGED — 2026-04-03

**What changed:** JetBrains Mono was removed from every page; all text and numbers switched to Inter.

**Why:** JetBrains Mono was bleeding into body copy and numbers, making everything read as a dev tool rather than a product. Inter unified the register.

**What was considered but not done:** Keeping Mono only for stat numbers as a hybrid — rejected because it broke the typographic consistency.

**Tags:** typography | scrapped

---

### HEADER MADE STATIC — 2026-04-04

**What changed:** Scroll-triggered header style changes were removed. SiteHeader moved outside LenisProvider.

**Why:** Lenis was overriding the scroll detection logic, causing the header to flicker between states. Moving it outside the provider fixed positioning and eliminated the bug. Static header won for stability.

**What was considered but not done:** Custom Lenis-compatible scroll listener — scrapped, too fragile.

**Tags:** component-structure | constraint-driven

---

### THREE.JS HERO BACKGROUNDS — 2026-04-04

**What changed:** HeroBackground3D and HeroForeground3D (Three.js canvas) added behind and in front of hero glass panels.

**Why:** Static gradient backgrounds weren't matching the kinetic music-campaign energy the brand needed. 3D floating orbs/particles added depth without competing with the copy.

**What was considered but not done:** CSS-only aurora gradients; kept as a fallback layer but Three.js became primary.

**Tags:** animation | visual-hierarchy

---

### LIQUIDGLASS CURSOR — 2026-04-04

**What changed:** A LiquidGlass custom cursor was added across all three hero sections.

**Why:** Interaction detail that signals craft. Hero sections are where first impressions form — the cursor becoming a liquid element extends the glass aesthetic into the pointer itself.

**What was considered but not done:** Magnet effect on CTA buttons — skipped, would have competed with the cursor interaction.

**Tags:** animation | visual-hierarchy

---

### EDITORIAL PRINT DESIGN SYSTEM — 2026-04-08

**What changed:** Full design system overhaul. White backgrounds throughout, `clamp(36px,5vw,56px)` section headlines at weight 900, pastel-tinted data cards (purple/green/amber/blue/rose), diagonal crosshatch / dot grid / horizontal rule / vertical rule texture patterns per card, ALL CAPS tracked labels, box-score stat rows with column dividers, 13rem ghost index watermarks.

**Why:** The original grey-surface system read like a generic SaaS landing. The editorial print direction — drawn from Highsnobiety and financial newspaper aesthetics — matched the brand personality: music culture meets financial infrastructure. Bold type + restrained colour creates authority without corporate stiffness.

**What was considered but not done:** Dark hero sections for WhyVarmply and TrustPillars — cut because white background sections give the stat numbers more punch.

**Tags:** layout | color | typography | visual-hierarchy | user-direction

---

### MOTIONFOOTER GSAP CURTAIN — 2026-04-08

**What changed:** Footer rebuilt with GSAP ScrollTrigger + Lenis sync. Cinematic fixed/clip-path curtain reveal — footer content clips upward into view as the user scrolls into the section.

**Why:** A standard fade-up footer felt flat after the editorial card sections above it. The curtain effect gives the page a cinematic closing moment, reinforcing the music-campaign brand energy.

**What was considered but not done:** Parallax image in footer — rejected for performance reasons.

**Tags:** animation | visual-hierarchy

---

### PER-PAGE FOOTER THEMING — 2026-04-08

**What changed:** MotionFooter given per-page colour config. Redundant CTABanner sections removed — footer now carries the final CTA.

**Why:** CTABanner and footer were duplicating the conversion ask at the bottom of every page. Consolidating into the footer reduced noise and gave each page a cleaner close.

**What was considered but not done:** Shared CTA banner between pages — kept structure but removed instance-level redundancy.

**Tags:** layout | copy-pivot | scrapped

---

### CREATORS PAGE EDITORIAL REWRITE — 2026-04-09

**What changed:** /creators fully rebuilt to match the editorial print system. Green (#006B35) hero, 2×2 bento How It Works, Creator Community with stat trio + video grid, Wallet & Earnings browser card, Why Varmply trust cards. All CSS vars eliminated.

**Why:** Creators needed their own audience-scoped visual register — green throughout, never mixing with home purple or sponsor blue. The editorial system applied per-page gave each audience a distinct but cohesive feel.

**What was considered but not done:** Shared creator/sponsor section components — rejected because audience colour rules make sharing impractical without prop drilling.

**Tags:** audience-split | layout | color

---

### DOME GALLERY 3D CAROUSEL — SCRAPPED — 2026-04-10

**What changed:** Creator reel section was replaced with a 3D cylindrical dome gallery (34 thumbnails, draggable, radius 650, dragDampening 3.4). Reverted same day.

**Why it was tried:** A static marquee felt passive for a section meant to demonstrate creator volume and energy.

**Why it was reverted:** The dome gallery broke mobile entirely and the drag interaction conflicted with Lenis page scroll. The two-row marquee was simpler and more legible.

**What was considered but not done:** Touch-safe drag handling — estimated too complex for a non-primary section.

**Tags:** scrapped | animation | responsive | happy-accident

---

### CREATOR COMMUNITY STRIPE PATTERN — 2026-04-10

**What changed:** Creator community section background given diagonal stripe pattern on a light purple (#F7F4FF) tint with a soft radial glow at centre.

**Why:** The reels marquee section needed visual differentiation from the surrounding white sections. The stripe pattern gave it texture without adding a dark section break.

**What was considered but not done:** Solid purple section background — would have competed with the hero accent and broken the all-white editorial rhythm.

**Tags:** color | visual-hierarchy

---

### HUMANISE HOME HERO PHONE — 2026-04-15

**What changed:** Home hero phone mockup replaced with a portrait photograph treatment. Sponsor hero background colour scoped via HeroBackground3D props.

**Why:** The code-built phone mockup in the home hero was reading as too "app launch" — too direct, too obvious. A portrait treatment (real person) grounded the product in actual human use. Scoping 3D background via props avoided forking the component for each page.

**What was considered but not done:** Video loop behind glass panel — assets not ready, deferred.

**Tags:** visual-hierarchy | component-structure | user-direction

---

### ENGAGEMENT RISING ICONS — CREATOR HERO — 2026-04-16

**What changed:** Heart, comment, share, fire, and bookmark icon tiles added to creator hero glass panel, rising upward on `engagement-rise` keyframe (0→-750px, 8–11s loops, negative delays). Creators hero got its own icon system separate from the home hero's music platform logos.

**Why:** Creator audience resonates with engagement metrics as a signal of earning potential. Rising engagement icons inside the glass panel made the hero feel alive and audience-specific without adding copy.

**What was considered but not done:** Emoji icons instead of Lucide SVGs — rejected for inconsistency with the design system.

**Tags:** animation | audience-split | visual-hierarchy

---

### PLATFORM SCOPE — TIKTOK + INSTAGRAM ONLY — 2026-04-16

**What changed:** All YouTube and Twitter references removed from copy, FAQ, mockups, and UI elements throughout all pages. Platform chips standardised: TikTok (black bg) and Instagram (pink/purple gradient).

**Why:** The product wasn't live on YouTube or Twitter. Listing unsupported platforms was actively misleading to potential users. Clean platform scope also strengthened the brand position — Varmply is short-form social, not broadcast.

**What was considered but not done:** Keeping YouTube as "coming soon" — cut because "coming soon" labels weaken trust on a waitlist product.

**Tags:** copy-pivot | trust-signal | user-direction

---

### GLOBAL CTA STANDARDISED — 2026-04-16

**What changed:** All CTAs across all pages unified to "Join the Waitlist" (primary) and "How It Works" (secondary). Nav anchors (`#how-it-works`, `#faq`) changed to in-page anchors — no more `/#faq` which broke on sub-pages.

**Why:** Multiple CTA labels ("Get Early Access", "Learn More", "See How It Works") were creating decision friction. One primary ask per page simplified the conversion path.

**What was considered but not done:** "Request Access" framing — felt too gatekeeping for a product trying to build creator trust.

**Tags:** copy-pivot | trust-signal

---

### SPONSORS HERO ANIMATED PROTOTYPE — 2026-04-22

**What changed:** Sponsors hero right-side replaced with an animated PhoneFrame prototype cycling through 3 live campaigns (With You Album, Lagos Summer, Afrobeats Nights). Screens cycle: overview → submissions → video player, with skeleton loaders between transitions. SponsorCampaignDetail, SponsorPhoneMockups, and SponsorHeroScreens added as sub-components.

**Why:** Static phone mockup on the sponsors hero wasn't demonstrating the product's core value (campaign management). The animated prototype showed sponsors exactly what running a campaign looks like — concrete and trustworthy.

**What was considered but not done:** Embedded video in the cycle — performance overhead, deferred.

**Tags:** component-structure | trust-signal | visual-hierarchy | animation

---

### WAITLIST PAGE — 2026-04-22

**What changed:** /waitlist page added with role-split signup — sponsor vs creator flow. Form separates audiences at the point of conversion.

**Why:** A single-field email form loses audience signal. Knowing who signed up (creator or sponsor) informs outreach priority and onboarding sequencing.

**What was considered but not done:** Single form with a dropdown — rejected because the visual split (two cards side by side) reinforces Varmply's two-audience positioning more clearly.

**Tags:** audience-split | layout | trust-signal

---

### PORTFOLIO EMBED SYSTEM — 2026-04-22–23

**What changed:** Full embed infrastructure built: CSP `frame-ancestors` for portfolio embedding, `.embed` CSS class to hide SiteHeader and footer chrome, `?section=` query param to isolate individual sections, `postMessage` height reporting via ResizeObserver so portfolio iframes self-size, Lenis disabled in embed mode, Suspense boundaries on all three pages for `useSearchParams`.

**Why:** The Varmply landing page needed to live inside the portfolio project as interactive embedded sections rather than static screenshots. This let the portfolio show the real live product without a second deploy. Height reporting was needed because iframes can't auto-size across origins.

**What was considered but not done:** Screenshot-based portfolio embeds — rejected because static images can't demonstrate the animation and interaction quality that's central to the design.

**Tags:** component-structure | constraint-driven | layout

---
