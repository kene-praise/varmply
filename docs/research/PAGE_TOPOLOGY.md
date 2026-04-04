# Page Topology

## URL
https://launchfolio.framer.website/

## Overall Structure
- Single scroll page, ~9545px tall
- Background: `rgb(43,43,43)` on html/body but page content sits in `rgb(250,250,250)` container
- Sections alternate: light `#FAFAFA` ↔ dark `#121212` / `#000`
- Main container: `#main > div` with `position:relative`

## Z-Index Layers
1. Page content (z-auto)
2. Fixed navbar (`position:fixed`, centered top)
3. "Speak to me" FAB (`position:fixed`, bottom right)
4. KYMA promo widget (`position:fixed`, bottom right, appears after scrolling)

## Section Map (top to bottom)

| # | Name | Approx scroll range | Background | Interaction |
|---|------|---------------------|------------|-------------|
| 0 | Navbar | fixed overlay | rgba(255,255,255,0.5) | static pill |
| 1 | Hero | 0–700px | #FAFAFA | static |
| 2 | Logo bar | 700–800px | #FAFAFA | static |
| 3 | Works grid | 800–1600px | #FAFAFA | hover on cards |
| 4 | Featured quote | 1600–1900px | #FAFAFA | static |
| 5 | Services | 1900–2800px | #FAFAFA | static |
| 6 | About header | 2800–3100px | #FAFAFA | static |
| 7 | About/Bio | 3100–4000px | #FAFAFA | static |
| 8 | Pricing intro | 4000–4400px | #FAFAFA | static |
| 9 | Pricing cards | 4400–5200px | #FAFAFA | static |
| 10 | Logos ticker 2 | 5200–5450px | #FAFAFA | marquee scroll |
| 11 | Testimonials | 5450–6400px | #FAFAFA | static grid |
| 12 | FAQ | 6400–7200px | #FAFAFA | click accordion |
| 13 | Blog | 7200–9000px | #FAFAFA | static |
| 14 | CTA/Footer | 9000–9545px | #000000 | text cycle animation |

## Component File Plan

```
src/components/
  Navbar.tsx          — fixed pill nav
  HeroSection.tsx     — hero heading + image composition
  LogoBar.tsx         — social proof + logo strip (reused for #2 and #10)
  WorksGrid.tsx       — 2×2 project cards
  FeaturedQuote.tsx   — single large quote
  ServicesSection.tsx — heading + service list + tech stack
  AboutSection.tsx    — about header + bio + photo + work history
  PricingSection.tsx  — pricing intro + 3-step process
  PricingCards.tsx    — subscription card + unlimited design card + single project banner
  TestimonialsSection.tsx — 3×2 testimonial grid
  FaqSection.tsx      — accordion + discovery call card
  BlogSection.tsx     — featured post + 2 smaller posts
  CtaFooter.tsx       — CTA + contact info + giant JOSEPH text
  SpeakToMeFab.tsx    — floating "Speak to me" button (email+calendar)
  icons.tsx           — all SVG icons as React components
```

## Page-level wiring (src/app/page.tsx)
- Import all section components
- Wrap with Lenis smooth scroll provider
- Sections stack vertically in DOM order
- Sections separated by thin `1px solid rgb(230,230,230)` borders at breakpoints
