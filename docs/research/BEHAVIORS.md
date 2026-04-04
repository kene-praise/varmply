# Behaviors Inventory

## Scroll Library
- **Lenis v1.3.19** is active. `<html>` has class `lenis lenis-autoToggle`.
- Loaded via: `https://unpkg.com/lenis@1.3.19/dist/lenis.css`
- Must install `lenis` npm package and init in layout/page.

## Navbar
- **Type**: Fixed, centered pill, `position: fixed`, `top: 24px`
- **At rest**: `rgba(255,255,255,0.5)` bg, `backdropFilter: blur(5px)`, `borderRadius: 32px`, `padding: 12px`
- **Framer variant name**: "Nav Closed" at rest
- Content: avatar + "Joseph Alexander" | Work | Services | Pricing | Blog | Contact (pill button)
- Border: `1px solid rgb(217, 217, 217)`
- The nav appears compact (shows avatar + name + "...") at rest and expands when clicked — this is a Framer nav toggle. For our clone, render the full expanded desktop nav always.

## Hero Section
- **Interaction model**: Static
- Badge "Available for August'25" with green dot (`rgb(18, 179, 63)`)
- H1: "Design that / delivers results." — 72px, weight 500, Switzer, letter-spacing -2.16px
- H1 first line "Design that" is gray (`rgb(130, 130, 130)`), second line "delivers results." is black
- Hero image: 3 overlapping browser mockups, slightly rotated, stacked composition

## Logo/Social Proof Bar
- Static horizontal row
- Star icons + "99+ Happy clients" + avatar cluster + brand logos: (Kintsugi, CoreOS, Luminary, 45 Degrees°)
- More logos overflow (scrolling marquee behavior on second instance of this bar lower on page)

## Works Grid
- **Interaction model**: Static grid (hover effects on cards - scale/overlay)
- 2×2 grid of project cards
- Each card: dark background image + project name + category + "View Project ↗" link
- Cards are large (approx 460×380px each)

## Featured Quote
- **Interaction model**: Static, centered, no animation
- Large centered testimonial between Works and Services

## Services Section
- **Interaction model**: Static
- Left: Large heading + "My tech stack" with 8 tool icon badges
- Right: Numbered list of 7 services, each with a dark circle icon

## About/Bio Section
- **Interaction model**: Static
- Section header: "Designing experiences / that solve real problems." (same 2-tone heading style)
- Left: portrait photo + name + title + social follower counts + "My work history" accordion
- Right: 3 bio paragraphs + signature image

## Pricing Section
- **Interaction model**: Static
- Section header: "Simple pricing. / Standout designs." + 3-column process steps
- Subscription card: dark background, "Pause or cancel anytime" badge + lightning bolt 3D image
- "Unlimited Design" plan card: white/light, $8,000/month, feature checklist, "Get Started" + stripe logo
- "Single Project" dark banner: features + "Get quote" button

## Logos Ticker (2nd instance)
- **Interaction model**: Continuous scroll/marquee
- "Trusted by many" label + scrolling logo row (CSS animation or JS scroll)

## Testimonials
- **Interaction model**: Static 3×2 grid
- Section header: "Hear from what my clients have to say." + star rating + "99+ Happy clients"
- 6 testimonial cards: quote mark + text (bold highlights) + avatar + name + role

## FAQ Accordion
- **Interaction model**: Click-driven accordion
- First item is pre-expanded (shows answer)
- Items 2-5 show "+" to expand
- Right side: "Book a free discovery call" sticky card with portrait + CTA

## Blog Section
- **Interaction model**: Static
- "From my blog, design insights." + "View All ↗" link
- Featured post: half-width image + half-width text (large)
- 2 smaller posts: image + title + date + author below

## CTA / Footer
- **Interaction model**: Cycling text animation (Framer variant cycling "build", "design", "create")
- Dark background `rgb(0,0,0)` / `rgb(18,18,18)`
- Large animated headline: "Lets [build/design/create] / incredible work together."
- Contact info: Email, Call Me, Social links
- Menu + Legal links
- Giant "JOSEPH" typographic footer text (overflow hidden, partial display)

## Responsive Behavior
- **Desktop (1440px)**: 2-column layouts, large headings, nav centered pill
- **Mobile (390px)**: Single column, stacked layouts, mobile nav (hamburger or simplified)
- Content wraps at ~768px breakpoint

## Fixed/Floating Elements
- **Navbar**: `position:fixed`, `top:24px`, centered horizontally
- **"Speak to me" FAB**: Bottom right floating button, email + calendar icons
- **KYMA promo widget**: Bottom right, shows when scrolled past hero, promo card
- **"Get Template"/"Made in Framer" banner**: Bottom right overlay (Framer promo, exclude from clone)
