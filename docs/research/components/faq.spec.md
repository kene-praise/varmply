# FAQ Section Specification

## Overview
- **Target file:** `components/launchfolio/FaqSection.tsx`
- **Screenshot:** `docs/design-references/section-06b-faq-header.png` and `docs/design-references/section-07-faq.png`
- **Interaction model:** Click-driven accordion (click to expand/collapse)

## DOM Structure
Full-width section, light background.
- Section heading: 2-tone "Your questions / answered."
- 2-column layout:
  - Left (60%): FAQ accordion (5 items, first one pre-expanded)
  - Right (40%): "Book a free discovery call" card (sticky)

## Computed Styles

### Section container
- backgroundColor: #FAFAFA
- borderTop: 1px solid #D9D9D9
- paddingTop: 120px
- paddingBottom: 120px
- paddingLeft: 120px
- paddingRight: 120px

### Section heading (full-width, above 2-col)
Line 1 (black): "Your questions"
Line 2 (muted): "answered."
Note: This section uses INVERSE 2-tone — first line is BLACK, second is MUTED
- fontSize: 72px
- fontWeight: 500
- letterSpacing: -0.03em
- lineHeight: 0.95
- marginBottom: 60px

### 2-column layout
- display: flex
- gap: 40px
- alignItems: flex-start

### LEFT: FAQ accordion

#### FAQ list container
- display: flex
- flexDirection: column
- gap: 0
- width: 100%

#### FAQ item (collapsed)
- backgroundColor: #FFFFFF
- border: 1px solid #D9D9D9
- borderRadius: 12px
- padding: 20px 24px
- marginBottom: 8px
- display: flex
- flexDirection: column
- cursor: pointer
- transition: background 0.2s ease

#### FAQ item header row
- display: flex
- justifyContent: space-between
- alignItems: center
- gap: 16px

#### FAQ item number
- fontSize: 13px
- fontWeight: 400
- color: #828282
- minWidth: 28px

#### FAQ question text
- fontSize: 16px
- fontWeight: 600
- color: #000000
- flex: 1

#### FAQ expand icon
- PlusIcon when collapsed (16px, black)
- MinusIcon when expanded (16px, black)

#### FAQ answer (expanded state)
- padding: 16px 0 0 0
- fontSize: 15px
- lineHeight: 1.6
- color: #000000 (or #545454)
- borderTop: 1px solid #D9D9D9
- marginTop: 16px

### RIGHT: Discovery call card
- backgroundColor: #FFFFFF
- border: 1px solid #D9D9D9
- borderRadius: 20px
- padding: 32px
- position: sticky
- top: 100px

#### Portrait image (small circle, top)
- width: 56px
- height: 56px
- borderRadius: 50%
- objectFit: cover
- marginBottom: 16px

#### "Still not sure?" subtitle
- fontSize: 20px
- fontWeight: 400
- color: #828282

#### "Book a free discovery call." title
- fontSize: 24px
- fontWeight: 600
- color: #000000
- lineHeight: 1.2

#### Description
- fontSize: 14px
- color: #828282
- lineHeight: 1.6
- marginTop: 12px

#### CTA row
- display: flex
- alignItems: center
- gap: 16px
- marginTop: 24px

#### "Schedule Now" button
- backgroundColor: #000000
- color: #FFFFFF
- borderRadius: 9999px
- padding: 14px 24px
- fontSize: 15px
- fontWeight: 500
- display: flex, alignItems: center, gap: 8px
- Has calendar icon inside

#### "Cal.com" text
- fontSize: 14px
- color: #828282

## States & Behaviors
### Accordion
- First item pre-expanded (shows answer on page load)
- Click question to toggle open/close
- Only one item open at a time (or allow multiple — original allows one)
- Use useState for activeIndex in React
- Smooth height transition: max-height + transition or use CSS details/summary

## Content Data

FAQ items:
1. (pre-expanded) Q: "How long does a typical project take to complete?"
   A: "Project timelines vary based on complexity. A simple project might take 2-3 weeks, while more comprehensive designs can take 1-2 months. I will provide a specific estimate after our initial consultation."

2. Q: "Can you work with my existing brand and designs?"
   A: "Yes, I can adapt to and build upon your existing brand guidelines and design systems. I'll ensure all new work seamlessly integrates with what you already have."

3. Q: "What makes your design process unique?"
   A: "My process combines strategic thinking with creative execution. I focus on understanding your business goals and target audience before diving into design, ensuring every decision serves a purpose."

4. Q: "Do you offer ongoing support after the project is completed?"
   A: "Yes, I offer maintenance packages and ongoing design support. Whether you need regular updates or occasional tweaks, I have flexible options to keep your digital presence fresh."

5. Q: "How do you handle confidentiality and intellectual property rights?"
   A: "All client work is covered by a standard NDA, and full intellectual property rights are transferred to you upon project completion and final payment."

Discovery card:
- Portrait: `/images/joseph-small.jpg`
- "Still not sure?"
- "Book a free discovery call."
- "Learn more about how I work and how I can help you and your business take the next step."
- Button: "Schedule Now" (with calendar icon)
- Text link: "Cal.com"

## Responsive Behavior
- **Desktop (1440px):** 2-col layout (accordion left, card right)
- **Mobile (390px):** Single column, heading, then accordion, then discovery card
- **Breakpoint:** ~768px

## Implementation Notes
- Use `"use client"` since accordion needs interactivity
- Import PlusIcon, MinusIcon from `components/launchfolio/icons.tsx`
- CalendarIcon from `components/launchfolio/icons.tsx`
