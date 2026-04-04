# Navbar Specification

## Overview
- **Target file:** `components/launchfolio/Navbar.tsx`
- **Screenshot:** `docs/design-references/section-01-hero.png` (top portion)
- **Interaction model:** static (always shows full nav on desktop)

## DOM Structure
Fixed pill nav centered horizontally at the top of the viewport.
- Outer: `position:fixed`, `top:24px`, centered via `left:50%; transform:translateX(-50%)`
- Inner `<nav>`: pill shape with avatar + name + nav links + contact button
  - Avatar (32px circle image)
  - Name "Joseph Alexander" (text)
  - Nav links: Work | Services | Pricing | Blog
  - Contact button (pill outline button)

## Computed Styles

### Nav pill container
- position: fixed
- top: 24px
- left: 50%
- transform: translateX(-50%)
- z-index: 50
- backgroundColor: rgba(255, 255, 255, 0.5)
- backdropFilter: blur(5px)
- WebkitBackdropFilter: blur(5px)
- borderRadius: 32px
- border: 1px solid rgb(217, 217, 217)
- padding: 12px
- display: flex
- alignItems: center
- gap: 32px
- height: 56px
- whiteSpace: nowrap

### Avatar
- width: 32px
- height: 32px
- borderRadius: 50%
- objectFit: cover

### Name text
- fontSize: 15px
- fontWeight: 500
- color: rgb(0,0,0)
- fontFamily: Switzer

### Nav links (Work, Services, Pricing, Blog)
- fontSize: 15px
- fontWeight: 500
- color: rgb(0,0,0)
- textDecoration: none
- gap: 4px between links

### Contact button
- backgroundColor: transparent
- border: 1px solid rgb(217, 217, 217)
- borderRadius: 9999px
- padding: 8px 16px
- fontSize: 14px
- fontWeight: 500
- color: rgb(0,0,0)

## States & Behaviors

### Mobile nav (< 768px)
- Simplified: shows avatar + name + menu icon (3 dots or hamburger)
- Full menu is hidden at mobile widths

### Hover on links
- slight opacity reduction or color change

## Assets
- Avatar: `/images/avatar.jpg` (Joseph Alexander portrait, 32px circle)

## Text Content
- "Joseph Alexander"
- Nav links: "Work" | "Services" | "Pricing" | "Blog"
- Button: "Contact"

## Responsive Behavior
- **Desktop (1440px):** Full pill with all nav items visible
- **Mobile (390px):** Shows avatar + name + "..." (three dots) menu icon, links hidden
- **Breakpoint:** Links hide at ~768px

## Notes
- The nav is NOT in a layout file — it renders at top of page.tsx
- Do NOT use Next.js `<Link>` for hash anchors — use plain `<a>` for Work/Services/Pricing/Blog/Contact since they're anchor links on the same page
- Use `"use client"` since this needs scroll detection
