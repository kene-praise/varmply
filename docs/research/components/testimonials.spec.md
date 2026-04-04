# Testimonials Section Specification

## Overview
- **Target file:** `components/launchfolio/TestimonialsSection.tsx`
- **Screenshot:** `docs/design-references/section-05b-testimonials-header.png` and `docs/design-references/section-06-testimonials.png`
- **Interaction model:** Static

## DOM Structure
Full-width section, light background.
1. Section header (2-tone heading) + social proof cluster (top right)
2. 3×2 grid of testimonial cards

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
Line 1 (muted): "Hear from what my"
Line 2 (black): "clients have to say."
- fontSize: 56px
- fontWeight: 500
- letterSpacing: -0.025em
- lineHeight: 0.95

### Social proof cluster (right side)
- display: flex
- alignItems: center
- gap: 12px
- Stacked avatars: 5 avatars, 32px each, -8px overlap (marginLeft: -8px)
- Stars: 5 × StarIcon (12px, gold color #FFB800 or use black)
- "99+ Happy clients" — fontSize: 13px, fontWeight: 500, color: #000

### Testimonials grid
- display: grid
- gridTemplateColumns: 1fr 1fr 1fr
- gap: 16px

### Testimonial card
- backgroundColor: #FFFFFF
- border: 1px solid #D9D9D9
- borderRadius: 16px
- padding: 28px
- display: flex
- flexDirection: column
- justifyContent: space-between
- minHeight: 220px

### Quote mark
- fontSize: 24px
- fontWeight: 700
- color: #000000
- lineHeight: 1
- marginBottom: 12px
- fontFamily: serif or use `"` character styled large

### Quote text
- fontSize: 14px
- lineHeight: 1.6
- color: #000000
- Bold words use fontWeight: 700

### Card footer
- display: flex
- alignItems: center
- gap: 12px
- marginTop: 24px
- paddingTop: 20px
- borderTop: 1px solid #D9D9D9

### Avatar
- width: 40px
- height: 40px
- borderRadius: 50%
- objectFit: cover

### Author info
- Name: fontSize: 14px, fontWeight: 600, color: #000
- Role: fontSize: 12px, fontWeight: 400, color: #828282

## Content Data (6 testimonials, 2 rows × 3 cols):

Row 1:
1. Quote: 'The new UI design **cut our customer support tickets in half**. It\'s been a game-changer for us.'
   Name: "Martina Martinez", Role: "Customer Manager at SupportEase", Avatar: "/images/avatar-1.jpg"

2. Quote: 'Working with Joseph felt like having a seasoned design partner **who truly understood our vision for Zazzle** and brought it to life in ways we hadn\'t even imagined.'
   Name: "Thomas Weber", Role: "Co-founder of KYMA", Avatar: "/images/avatar-2.jpg"

3. Quote: 'Our website **conversion rate improved significantly** thanks to Joseph\'s expertise.'
   Name: "Ben Harper", Role: "CTO of Nexus", Avatar: "/images/avatar-3.jpg"

Row 2:
4. Quote: "Joseph's design approach brought clarity to our complex data visualizations. Our users are thrilled!"
   Name: "Michael Wong", Role: "Data Scientist at DataSphere", Avatar: "/images/avatar-4.jpg"

5. Quote: 'The rebranding exceeded our expectations. **It\'s given us a competitive edge in our industry.**'
   Name: "Natalie Rivera", Role: "Brand Manager at UnityBrands", Avatar: "/images/avatar-5.jpg"

6. Quote: 'The redesign transformed our brand image. **We\'ve seen a 30% increase in engagement** since launch.'
   Name: "Emma Kraft", Role: "CMO of TechVista", Avatar: "/images/avatar-6.jpg"

## Responsive Behavior
- **Desktop (1440px):** 3×2 grid
- **Mobile (390px):** Single column, 6 stacked cards, header social proof below heading
- **Breakpoint:** ~768px tablets go 2 col, mobile goes 1 col

## Icons
- StarIcon from `components/launchfolio/icons.tsx`
