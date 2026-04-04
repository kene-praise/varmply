# Pricing Section Specification

## Overview
- **Target file:** `components/launchfolio/PricingSection.tsx`
- **Screenshot:** `docs/design-references/section-04b-pricing-intro.png` and `docs/design-references/section-05-pricing.png`
- **Interaction model:** Static

## DOM Structure
Full-width section, light background, 2 sub-sections:
1. Pricing intro: 2-tone heading + 3-step process columns
2. Pricing cards: 2-column layout (subscription card dark | plan card light) + 1 full-width dark banner

## Computed Styles

### Section container
- backgroundColor: #FAFAFA
- borderTop: 1px solid #D9D9D9
- paddingTop: 120px
- paddingBottom: 120px
- paddingLeft: 120px
- paddingRight: 120px

### PRICING INTRO

#### Heading (2-tone, left column)
Line 1 (muted): "Simple pricing."
Line 2 (black): "Standout designs."
- fontSize: 56px
- fontWeight: 500
- letterSpacing: -0.025em
- lineHeight: 0.95

#### Right column subtitle
- "Clear costs, no hidden fees." — fontSize: 16px, fontWeight: 700, color: #000
- "Select from monthly subscriptions or individual project rates." — fontSize: 16px, fontWeight: 400, color: #828282

#### 3-step process (below heading area, full-width, 3-col grid)
- display: grid
- gridTemplateColumns: 1fr 1fr 1fr
- gap: 32px
- marginTop: 60px
- paddingTop: 40px
- borderTop: 1px solid #D9D9D9

#### Process step
- Icon: small 20px SVG icon before label
- Label: fontSize: 16px, fontWeight: 600
- Description: fontSize: 14px, fontWeight: 400, color: #828282, marginTop: 8px

Steps:
1. Icon: cycle arrows, Label: "Subscribe", Desc: "Subscribe via stripe & start requesting through my trello board."
2. Icon: chat bubble, Label: "Request", Desc: "Request whatever service I offer, from branding to web design."
3. Icon: download/receive, Label: "Receive", Desc: "Receive your design within 48 hours on average."

### PRICING CARDS ROW

#### Layout
- display: grid
- gridTemplateColumns: 1fr 2fr (left is narrower)
- gap: 16px
- marginTop: 48px

#### LEFT CARD — Subscription dark card
- backgroundColor: #000000
- borderRadius: 24px
- padding: 32px
- display: flex
- flexDirection: column
- justifyContent: space-between
- overflow: hidden

##### "Pause or cancel anytime" badge (in dark card)
- backgroundColor: rgba(255,255,255,0.15)
- border: 1px solid rgba(255,255,255,0.2)
- borderRadius: 9999px
- padding: 6px 14px
- fontSize: 12px
- color: #FFFFFF
- alignSelf: flex-start

##### Lightning bolt 3D image
- width: 140px
- height: 140px
- objectFit: contain
- position: absolute or floated right

##### Dark card text
- Title: "Subscription design services for brands who move fast."
  - fontSize: 24px, fontWeight: 500, color: #FFFFFF
- Green badge: "Slots available" with green dot
  - backgroundColor: rgba(255,255,255,0.1), border: 1px solid rgba(255,255,255,0.2)
  - borderRadius: 9999px, padding: 6px 14px
  - fontSize: 12px, color: #FFFFFF
  - dot: #12B33F
- Subtitle: "Hire me today"
  - fontSize: 32px, fontWeight: 500, color: #FFFFFF
- Description: "Skip the agency markup and work directly with an experienced designer."
  - fontSize: 14px, color: rgba(255,255,255,0.7)

#### RIGHT CARD — Unlimited Design plan
- backgroundColor: #FFFFFF
- border: 1px solid #D9D9D9
- borderRadius: 24px
- padding: 40px

##### Plan title
- fontSize: 32px, fontWeight: 600, color: #000

##### Plan description
- "One flat monthly rate for unlimited design requests." — fontSize: 15px, color: #000, fontWeight: 500
- "Ideal for ongoing design requirements." — fontSize: 15px, color: #828282

##### Divider
- borderTop: 1px solid #D9D9D9
- marginTop: 24px
- marginBottom: 24px

##### Price
- "$8,000" — fontSize: 56px, fontWeight: 600, letterSpacing: -0.02em
- "/ month" — fontSize: 16px, fontWeight: 400, color: #828282, verticalAlign: super

##### Features grid (2 columns)
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 12px 32px
- marginTop: 24px

##### Feature item
- display: flex
- alignItems: center
- gap: 8px
- fontSize: 14px
- fontWeight: 500
- Check icon: 14px, color: #000

Features:
Col 1: No contracts or commitments | Multiple Brands | Avg 48 hour turnaround
Col 2: Pause or cancel anytime | Unlimited requests | Framer development

##### CTA row
- display: flex
- alignItems: center
- gap: 16px
- marginTop: 32px

##### "Get Started" button
- backgroundColor: #000000
- color: #FFFFFF
- borderRadius: 9999px
- padding: 14px 28px
- fontSize: 15px
- fontWeight: 500
- display: flex, alignItems: center, gap: 8px
- Stripe icon inside button

##### "stripe" text
- fontSize: 20px
- fontWeight: 600
- color: #D9D9D9
- letterSpacing: 0.02em

#### SINGLE PROJECT BANNER (full-width dark)
- backgroundColor: #000000 (or #1A1A1A)
- borderRadius: 24px
- padding: 40px
- marginTop: 16px
- display: flex
- alignItems: center
- justifyContent: space-between
- gap: 32px

##### Banner left
- Title: "Single Project" — fontSize: 28px, fontWeight: 600, color: #FFFFFF
- Desc: "Comprehensive design services for any project scope." — fontSize: 15px, color: #FFFFFF
- "Ideal for one-time design needs or individual tasks." — fontSize: 15px, color: rgba(255,255,255,0.5)

##### Banner features (middle, 2 columns)
- Clearly defined scope | Fixed timeline | 3 revision rounds | Milestone updates
- fontSize: 14px, color: rgba(255,255,255,0.7)
- Check icons: white

##### "Get quote" button
- backgroundColor: #FFFFFF
- color: #000000
- borderRadius: 9999px
- padding: 14px 28px
- fontSize: 15px
- fontWeight: 500
- Has clipboard icon

## Assets
- Lightning bolt image: `/images/lightning-bolt-3d.png`

## Responsive Behavior
- **Desktop (1440px):** 2-col pricing cards, full-width banner
- **Mobile (390px):** Single column, process steps stack, cards stack
- **Breakpoint:** ~768px

## Icons
- Use lucide-react: RefreshCw (Subscribe), MessageSquare (Request), Download (Receive)
- Use CheckIcon from `components/launchfolio/icons.tsx`
- Clipboard icon for "Get quote"
