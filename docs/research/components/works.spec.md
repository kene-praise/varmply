# Works Grid Section Specification

## Overview
- **Target file:** `components/launchfolio/WorksGrid.tsx`
- **Screenshot:** `docs/design-references/section-02-works.png`
- **Interaction model:** Static grid (hover: slight opacity/scale on cards)

## DOM Structure
Full-width section with light background.
- Section heading: "My Work" with "View all my projects ↗" link
- 2×2 grid of project cards
- Below grid: "View all my projects ↗" centered link

## Computed Styles

### Section container
- backgroundColor: #FAFAFA
- paddingTop: 80px
- paddingBottom: 80px
- paddingLeft: 120px
- paddingRight: 120px
- borderTop: 1px solid #D9D9D9

### Grid
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 16px
- maxWidth: 1200px
- margin: 0 auto

### Project card
- position: relative
- borderRadius: 16px
- overflow: hidden
- backgroundColor: #1A1A1A (dark background shows through)
- cursor: pointer

### Card image
- width: 100%
- aspectRatio: 4/3 (approx 460×345px)
- objectFit: cover
- display: block
- transition: transform 0.3s ease

### Card image on hover
- transform: scale(1.02)

### Card label area (below image)
- padding: 16px 0
- display: flex
- justifyContent: space-between
- alignItems: flex-start
- backgroundColor: transparent

### Project name
- fontSize: 18px
- fontWeight: 500
- color: #000000
- fontFamily: Switzer

### Project category
- fontSize: 13px
- fontWeight: 400
- color: #828282

### "View Project ↗" link
- fontSize: 13px
- fontWeight: 500
- color: #000000
- display: flex
- alignItems: center
- gap: 4px
- textDecoration: none

## States & Behaviors
### Card hover
- Image scales to 1.02x
- transition: 0.3s ease

## Content Data
Project 1: name="Kora", category="Consulting Site", image="/images/project-kora.jpg"
Project 2: name="KYMA", category="AI Agency", image="/images/project-kyma.jpg"
Project 3: name="Mugen", category="Design Studio", image="/images/project-mugen.jpg"
Project 4: name="Axiom", category="Ecommerce Site", image="/images/project-axiom.jpg"

## Text Content (verbatim)
- Each card shows: Project name + category + "View Project ↗"
- Below grid: "View all my projects ↗" (centered, fontSize:15px, fontWeight:500)

## Responsive Behavior
- **Desktop (1440px):** 2×2 grid
- **Mobile (390px):** Single column, 1×4 stack
- **Breakpoint:** Stacks at ~768px

## Icons
- Arrow icon: use `ArrowUpRightIcon` from `components/launchfolio/icons.tsx`
