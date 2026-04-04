# Blog Section Specification

## Overview
- **Target file:** `components/launchfolio/BlogSection.tsx`
- **Screenshot:** `docs/design-references/section-07b-blog-header.png` and `docs/design-references/section-08-blog.png`
- **Interaction model:** Static (hover effects on cards)

## DOM Structure
Full-width section, light background.
- Header row: 2-tone heading + "View All ↗" link (right-aligned)
- Featured post: large card (full-width, 2-col: left=image, right=text)
- 2 smaller posts: side-by-side grid (each: image on top, text below)

## Computed Styles

### Section container
- backgroundColor: #FAFAFA
- borderTop: 1px solid #D9D9D9
- paddingTop: 120px
- paddingBottom: 120px
- paddingLeft: 120px
- paddingRight: 120px

### Header row
- display: flex
- justifyContent: space-between
- alignItems: flex-end
- marginBottom: 48px

### Heading (2-tone)
Line 1 (muted): "From my blog,"
Line 2 (black): "design insights."
- fontSize: 56px
- fontWeight: 500
- letterSpacing: -0.025em
- lineHeight: 0.95

### "View All ↗" link
- fontSize: 15px
- fontWeight: 500
- color: #000000
- display: flex, alignItems: center, gap: 4px
- textDecoration: none

### FEATURED POST card
- backgroundColor: #FFFFFF
- border: 1px solid #D9D9D9
- borderRadius: 16px
- overflow: hidden
- display: flex (side by side)
- marginBottom: 16px

#### Featured image (left, 50%)
- width: 50%
- height: 480px
- objectFit: cover

#### Featured text (right, 50%)
- padding: 48px
- display: flex
- flexDirection: column
- justifyContent: center

#### Featured title
- fontSize: 32px
- fontWeight: 600
- lineHeight: 1.2
- color: #000000

#### Featured meta row
- display: flex
- alignItems: center
- gap: 16px
- marginBottom: 16px
- fontSize: 13px
- color: #828282

#### Featured excerpt
- fontSize: 15px
- lineHeight: 1.6
- color: #545454
- marginTop: 16px

### SMALLER POSTS grid
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 16px
- marginTop: 16px

#### Small post card
- backgroundColor: transparent
- borderRadius: 16px
- overflow: hidden

#### Small post image
- width: 100%
- height: 260px
- objectFit: cover
- borderRadius: 16px

#### Small post text area
- padding: 20px 0

#### Small post title
- fontSize: 22px
- fontWeight: 600
- color: #000000
- lineHeight: 1.2

#### Small post meta
- display: flex
- gap: 8px
- fontSize: 12px
- color: #828282
- marginTop: 8px

## Content Data

Featured post:
- Image: `/images/blog-post-1.jpg`
- Date: "Mar 6, 2025"
- Author: "By Joseph Alexander"
- Title: "How designers and developers can actually collaborate."
- Excerpt: "Discover proven strategies to bridge the designer-developer gap. Learn how top teams eliminate handoff friction and ship better products faster through true collaboration."

Small post 1:
- Image: `/images/blog-post-2.jpg`
- Date: "Apr 22, 2025"
- Author: "By Joseph Alexander"
- Title: "Why faster isn't always better."

Small post 2:
- Image: `/images/blog-post-3.jpg`
- Date: "Apr 1, 2025"
- Author: "By Joseph Alexander"
- Title: "Designing for human connection."

## Responsive Behavior
- **Desktop (1440px):** Featured post 2-col; smaller posts 2-col grid
- **Mobile (390px):** Featured post stacks (image top, text below); smaller posts stack single column
- **Breakpoint:** ~768px

## Icons
- ArrowUpRightIcon from `components/launchfolio/icons.tsx`
