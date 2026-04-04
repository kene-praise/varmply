# Hero Section Specification

## Overview
- **Target file:** `components/launchfolio/HeroSection.tsx`
- **Screenshot:** `docs/design-references/section-01-hero.png`
- **Interaction model:** Static

## DOM Structure
Full-width section, light background (#FAFAFA).
- Left column (50%): badge + heading + subtext + CTA button
- Right column (50%): stacked/rotated browser mockup cards (4 cards overlapping)

## Computed Styles

### Section container
- backgroundColor: #FAFAFA
- paddingTop: 120px (push down to clear fixed nav)
- paddingBottom: 80px
- paddingLeft: 120px
- paddingRight: 120px
- display: flex
- alignItems: center
- minHeight: 700px
- gap: 80px

### Left column
- maxWidth: 540px
- display: flex
- flexDirection: column
- gap: 24px

### Availability badge
- display: inline-flex
- alignItems: center
- gap: 8px
- backgroundColor: #FFFFFF
- border: 1px solid #D9D9D9
- borderRadius: 9999px
- padding: 6px 14px
- fontSize: 13px
- fontWeight: 500
- color: #000000
- Badge dot: 8px circle, backgroundColor: #12B33F (green)

### H1 heading
The heading is TWO lines:
- Line 1: "Design that" — color: rgb(130, 130, 130) (gray/muted)
- Line 2: "delivers results." — color: rgb(0, 0, 0) (black/bold)
- fontSize: 72px
- fontWeight: 500
- lineHeight: 0.95
- letterSpacing: -2.16px (-0.03em)
- fontFamily: Switzer
- margin: 0

### Subtext paragraph
- fontSize: 16px
- fontWeight: 400
- lineHeight: 1.6
- color: rgb(0,0,0)
- maxWidth: 440px
- "Strategic design that drives growth, not just looks good." is bold (fontWeight: 700)
- rest of text is regular weight

### CTA button "Book a call with me"
- backgroundColor: #000000
- color: #FFFFFF
- borderRadius: 9999px
- padding: 14px 24px
- fontSize: 15px
- fontWeight: 500
- display: flex
- alignItems: center
- gap: 12px
- Has a small circular avatar (24px) inside the button on the left

### Right column — stacked mockup cards
Container is absolutely positioned, approx 600px wide, 500px tall.
4 browser mockup cards (484×363px each), rotated and layered:

Card 1 (Kora - front, z:3): rotate(10deg) scale(0.7), translate roughly center-right
Card 2 (KYMA - back-left, z:auto): rotate(15deg) scale(0.68)
Card 3 (Mugen - back, z:1): rotate(-5deg) scale(0.7)
Card 4 (Axiom - z:2): rotate(5deg) scale(0.7)

Each card:
- width: 484px → rendered at ~340px (70% scale)
- height: 363px → rendered at ~254px
- borderRadius: 16px
- overflow: hidden
- boxShadow: 0 20px 60px rgba(0,0,0,0.15)

The right column is positioned using absolute layout within a relative container.
Create a stacked composition using position:absolute + transform per card.

## Assets
- Card images (in /images/):
  - `project-kora.jpg` — Kora consulting site mockup
  - `project-kyma.jpg` — KYMA AI agency mockup
  - `project-mugen.jpg` — Mugen design studio mockup
  - `project-axiom.jpg` — Axiom ecommerce site mockup
- Avatar in button: `/images/avatar.jpg`

## Text Content
- Badge: "Available for August'25"
- H1 line 1 (muted): "Design that"
- H1 line 2 (black): "delivers results."
- Subtext: "**Strategic design that drives growth, not just looks good.** I create everything your brand needs to attract customers and turn them into sales."
- Button: "Book a call with me"

## Responsive Behavior
- **Desktop (1440px):** Side-by-side 2-col layout; cards visible right side
- **Mobile (390px):** Single column; heading smaller (44px); cards hidden or shown below text
- **Breakpoint:** Stacks at ~768px

## Logo bar (bottom of hero section)
Below the main hero, a thin strip:
- Left: 5 stacked avatars (24px each, -8px overlap) + star rating (5 ★) + "99+ Happy clients"
- Right: 4 brand logos: Kintsugi | CoreOS | Luminary | 45 Degrees° (partial)
- Border-top: 1px solid #D9D9D9
- padding: 20px 0
- backgroundColor: #FAFAFA
- logos: color: #828282 (muted gray), fontSize varies

## Implementation notes
- The "Book a call with me" button has a mini avatar inside it (circular, 24px)
- For the stacked cards, use a `relative` wrapper with `absolute` children
- Use CSS transform: `rotate(Xdeg) scale(0.7)` for each card
- Do NOT worry about exact Framer matrix3d values — visual approximation is fine
