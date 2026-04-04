# Services Section Specification

## Overview
- **Target file:** `components/launchfolio/ServicesSection.tsx`
- **Screenshot:** `docs/design-references/section-03-about.png`
- **Interaction model:** Static

## DOM Structure
Full-width section, light background.
- Left column (40%): Large 2-tone heading + "My tech stack" label + 8 tool icon badges
- Right column (60%): Numbered list of 7 services, each with dark circle icon

## Computed Styles

### Section container
- backgroundColor: #FAFAFA
- borderTop: 1px solid #D9D9D9
- paddingTop: 120px
- paddingBottom: 120px
- paddingLeft: 120px
- paddingRight: 120px

### Inner layout
- display: flex
- gap: 80px
- alignItems: flex-start

### Left column heading (2-tone)
Line 1: "Services that" — color: #828282 (muted gray), fontSize: 56px, fontWeight: 500
Line 2: "supercharge your" — color: #000000, fontSize: 56px, fontWeight: 500
Line 3: "business." — color: #000000, fontSize: 56px, fontWeight: 500
- letterSpacing: -0.025em
- lineHeight: 0.95
- fontFamily: Switzer

### "My tech stack" label
- fontSize: 13px
- fontWeight: 500
- color: #828282
- marginTop: 48px
- marginBottom: 16px

### Tech stack icon grid
- display: flex
- gap: 8px
- flexWrap: wrap
- marginTop: 16px

### Tech stack icon badge
- width: 48px
- height: 48px
- backgroundColor: #FFFFFF
- border: 1px solid #D9D9D9
- borderRadius: 12px
- display: flex
- alignItems: center
- justifyContent: center
- padding: 10px
- (icon is an SVG/image inside)

### Right column — services list
- display: flex
- flexDirection: column
- gap: 0 (items are separated by bottom borders only)
- paddingTop: 8px

### Service item
- display: flex
- alignItems: center
- gap: 16px
- paddingTop: 20px
- paddingBottom: 20px
- borderBottom: 1px solid #D9D9D9

### Service icon circle
- width: 40px
- height: 40px
- borderRadius: 50%
- backgroundColor: #000000
- display: flex
- alignItems: center
- justifyContent: center
- flexShrink: 0
- (white SVG icon inside, 20px)

### Service name text
- fontSize: 20px
- fontWeight: 500
- color: #000000
- fontFamily: Switzer

## Content Data

### Services list (7 items):
1. Framer Development
2. Brand Design
3. Web Apps
4. Landing Pages
5. Motion Graphics
6. 3D Design
7. UX / UI Consultation

### Tech stack icons (use lucide-react or simple colored squares as placeholders):
Figma, Framer, Webflow, Relay, Blender, Trello, ChatGPT/OpenAI, Claude/Anthropic
(These are small tool logo images - render as 30px × 30px SVG icons or placeholder squares with tool name initials if SVG not available)

## Responsive Behavior
- **Desktop (1440px):** 2-col side-by-side
- **Mobile (390px):** Single column, heading first, services list below, tech stack grid
- **Breakpoint:** ~768px

## Icons for services
Use simple white icons inside black circles. Since we don't have exact icon SVGs, use abstract shapes:
- Framer Development: triangle/arrow icon
- Brand Design: diamond/sparkle icon
- Web Apps: square icon
- Landing Pages: browser/window icon
- Motion Graphics: sparkle/star icon
- 3D Design: globe icon
- UX / UI Consultation: browser/window icon

Use Lucide icons from `lucide-react` package (already installed): Triangle, Diamond, Square, Monitor, Sparkles, Globe, Layout
