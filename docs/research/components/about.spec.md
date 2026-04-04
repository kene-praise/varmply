# About Section Specification

## Overview
- **Target file:** `components/launchfolio/AboutSection.tsx`
- **Screenshot:** `docs/design-references/section-03b-services-header.png` and `docs/design-references/section-04-bio-pricing.png`
- **Interaction model:** Static

## DOM Structure
Full-width section, light background.
- Section header: 2-tone large heading "Designing experiences / that solve real problems."
- Below header: 2-column layout
  - Left column (40%): Portrait photo + name + title + social stats + "My work history" items
  - Right column (60%): 3 bio paragraphs + signature image

## Computed Styles

### Section container
- backgroundColor: #FAFAFA
- borderTop: 1px solid #D9D9D9
- paddingTop: 120px
- paddingBottom: 120px
- paddingLeft: 120px
- paddingRight: 120px

### Section heading (2-tone, full width above the 2-col)
Line 1: "Designing experiences" — color: #828282, fontSize: 72px, fontWeight: 500
Line 2: "that solve real problems." — color: #000000, fontSize: 72px, fontWeight: 500
- letterSpacing: -0.03em
- lineHeight: 0.95
- marginBottom: 80px

### Two-column layout below heading
- display: flex
- gap: 80px
- alignItems: flex-start

### LEFT COLUMN

#### Portrait photo
- width: 370px
- height: 494px
- borderRadius: 16px
- objectFit: cover
- objectPosition: top center

#### Social stats row (below photo)
- display: flex
- gap: 8px
- marginTop: 16px
- alignItems: center
- flexWrap: wrap

#### Social stat badge
- backgroundColor: #FFFFFF
- border: 1px solid #D9D9D9
- borderRadius: 9999px
- padding: 6px 12px
- display: flex
- alignItems: center
- gap: 6px
- fontSize: 13px
- fontWeight: 500

#### Name
- fontSize: 20px
- fontWeight: 600
- color: #000000
- marginTop: 16px

#### Title
- fontSize: 13px
- fontWeight: 500
- color: #828282

#### "My work history" label
- fontSize: 13px
- fontWeight: 500
- color: #828282
- marginTop: 32px
- marginBottom: 12px

#### Work history item
- backgroundColor: #FFFFFF
- border: 1px solid #D9D9D9
- borderRadius: 12px
- padding: 16px
- display: flex
- justifyContent: space-between
- alignItems: flex-start
- marginBottom: 8px

#### Work history company name
- fontSize: 16px
- fontWeight: 600
- color: #000000

#### Work history role
- fontSize: 13px
- color: #828282
- marginTop: 4px

#### Work history date range
- fontSize: 13px
- color: #828282

#### "Show all ↗" button
- backgroundColor: #FFFFFF
- border: 1px solid #D9D9D9
- borderRadius: 9999px
- padding: 8px 16px
- fontSize: 13px
- fontWeight: 500
- color: #000000
- marginTop: 12px

### RIGHT COLUMN

#### Bio paragraphs
- 3 paragraphs separated by 24px gap
- fontSize: 16px
- lineHeight: 1.6
- color: #000000
- Bold spans use fontWeight: 700

#### Signature image
- height: 80px
- width: auto
- marginTop: 32px
- objectFit: contain
- (use a handwritten-style SVG or img at /images/signature.png if exists, else skip)

## Content Data

### Heading:
Line 1 (muted): "Designing experiences"
Line 2 (black): "that solve real problems."

### Left column:
- Portrait: `/images/joseph-portrait.png`
- Name: "Joseph Alexander"
- Title: "Full-stack Designer"
- Social stats:
  - Twitter X: 1,214 (twitter icon + "1,214")
  - Instagram (camera icon)
  - Dribbble (basketball icon)
  - Behance (letter B icon)
  - LinkedIn (linked icon)

### Work history items:
1. Company: "KYMA", Role: "Full-Stack Designer", Years: "2012-2024"
(Show only one item, then "Show all ↗" button)

### Right column bio paragraphs:
Paragraph 1 (bold start): "I love turning ideas into something real through design." What started as a hobby turned into a career when I discovered how design can make things both look great and work better.

Paragraph 2 (bold start): "I focus on creating user interfaces that serve a real purpose –" making sure they're not just pretty, but actually solve problems. Whether I'm working on a mobile app or a website, my goal is to make something that feels natural and easy to use.

Paragraph 3 (bold start): "I'm a bit of a perfectionist when it comes to the small stuff," but I think that's what makes good design great. This attention to detail helps me build strong relationships with clients, as they know I'll put the same care into their project that they would.

## Responsive Behavior
- **Desktop (1440px):** 2-col layout, portrait left, bio right
- **Mobile (390px):** Single column, heading, then portrait, then bio
- **Breakpoint:** ~768px

## Icons for social stats
Use from `components/launchfolio/icons.tsx`:
- TwitterXIcon, InstagramIcon, DribbbleIcon, LinkedinIcon
- Behance: use a simple "Be" text badge
