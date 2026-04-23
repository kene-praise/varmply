"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. DARK THEME STYLES — hardcoded against Varmply's dark palette
// -------------------------------------------------------------------------

// bg: #07071A  |  fg: rgba(255,255,255,0.92)  |  accent: #7C3BED
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}

@keyframes footer-breathe {
  0%   { transform: translate(-50%, -50%) scale(1);   opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.12); opacity: 0.9; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1);   filter: drop-shadow(0 0 5px rgba(220,38,38,0.5)); }
  15%, 45% { transform: scale(1.25); filter: drop-shadow(0 0 10px rgba(220,38,38,0.85)); }
  30%      { transform: scale(1); }
}

.animate-footer-breathe      { animation: footer-breathe 8s ease-in-out infinite alternate; }
.animate-footer-scroll-marquee { animation: footer-scroll-marquee 40s linear infinite; }
.animate-footer-heartbeat     { animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite; }

/* Dot-grid background */
.footer-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

/* Aurora — white glow from accent */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0.05) 40%,
    transparent 70%
  );
}

/* Glass pill — clean transparent glass */
.footer-glass-pill {
  background: linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
  box-shadow:
    0 12px 32px -12px rgba(0,0,0,0.35),
    inset 0 1px 1px rgba(255,255,255,0.3),
    inset 0 -1px 1px rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  color: rgba(255,255,255,0.95);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 100%);
  border-color: rgba(255,255,255,0.30);
  box-shadow:
    0 20px 40px -10px rgba(0,0,0,0.5),
    inset 0 1px 1px rgba(255,255,255,0.5),
    inset 0 -1px 2px rgba(255,255,255,0.25);
  color: rgba(255,255,255,1);
}

/* Giant watermark text */
.footer-giant-bg-text {
  font-size: 26vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.06);
  background: linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Heading with metallic fade */
.footer-text-glow {
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.60) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 24px rgba(255,255,255,0.20));
}

/* Marquee muted text */
.footer-marquee-text { color: rgba(255,255,255,0.5); }
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE (Zero Dependency)
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        as?: React.ElementType;
    };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
    ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
        const localRef = useRef<HTMLElement>(null);

        useEffect(() => {
            if (typeof window === "undefined") return;
            const element = localRef.current;
            if (!element) return;

            const ctx = gsap.context(() => {
                const handleMouseMove = (e: MouseEvent) => {
                    const rect = element.getBoundingClientRect();
                    const h = rect.width / 2;
                    const w = rect.height / 2;
                    const x = e.clientX - rect.left - h;
                    const y = e.clientY - rect.top - w;

                    gsap.to(element, {
                        x: x * 0.4,
                        y: y * 0.4,
                        rotationX: -y * 0.15,
                        rotationY: x * 0.15,
                        scale: 1.05,
                        ease: "power2.out",
                        duration: 0.4,
                    });
                };

                const handleMouseLeave = () => {
                    gsap.to(element, {
                        x: 0,
                        y: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        ease: "elastic.out(1, 0.3)",
                        duration: 1.2,
                    });
                };

                element.addEventListener("mousemove", handleMouseMove as any);
                element.addEventListener("mouseleave", handleMouseLeave);

                return () => {
                    element.removeEventListener("mousemove", handleMouseMove as any);
                    element.removeEventListener("mouseleave", handleMouseLeave);
                };
            }, element);

            return () => ctx.revert();
        }, []);

        return (
            <Component
                ref={(node: HTMLElement) => {
                    (localRef as any).current = node;
                    if (typeof forwardedRef === "function") forwardedRef(node);
                    else if (forwardedRef) (forwardedRef as any).current = node;
                }}
                className={cn("cursor-pointer", className)}
                {...props}
            >
                {children}
            </Component>
        );
    }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. PER-PAGE CONFIG
// -------------------------------------------------------------------------

const pageConfigs = {
    '/': {
        bg: '#6406cf',
        headline: "Turn your next release into a campaign.",
        subtext: "No DMs. No guesswork. Just performance.",
        cta1: { label: 'Run a Campaign', href: '/sponsors' },
        cta2: { label: 'Join as Creator', href: '/creators' },
        marquee: ['Accountability Redefined', 'Transparent Tracking', 'Verified Performance', 'Sponsor Connection', 'Escrow Protected'],
        pattern: null,
    },
    '/sponsors': {
        bg: '#1A40B8',
        headline: "Run campaigns
with full accountability.",
        subtext: "Set your rules, protect your budget, and pay for verified results only. Varmply handles the rest.",
        cta1: { label: 'Launch a Campaign', href: '#' },
        cta2: { label: 'See How It Works', href: '#how-it-works' },
        marquee: ['Escrow Protected Budget', 'Auto-Validated Submissions', 'Pay for Results Only', '₦1.13M Managed', '44 Active Creators'],
        pattern: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        patternSize: '48px 48px',
    },
    '/creators': {
        bg: '#006B35',
        headline: "Start earning from
music campaigns.",
        subtext: "Apply to campaigns you qualify for, deliver the work, get paid automatically. No chasing required.",
        cta1: { label: 'Create Creator Account', href: '#' },
        cta2: { label: 'Browse Campaigns', href: '#campaigns' },
        marquee: ['847+ Active Creators', '₦2.4M Distributed', '98% On-time Payouts', '0 Hidden Terms', 'Verified Automatically'],
        pattern: 'repeating-linear-gradient(180deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 28px)',
        patternSize: undefined,
    },
};

// -------------------------------------------------------------------------
// 4. MAIN COMPONENT
// -------------------------------------------------------------------------

function MarqueeTrack({ items }: { items: string[] }) {
    return (
        <div className="flex items-center space-x-12 px-6">
            {items.map((item, i) => (
                <React.Fragment key={i}>
                    <span>{item}</span>
                    {i < items.length - 1 && <span style={{ opacity: 0.4 }}>✦</span>}
                </React.Fragment>
            ))}
        </div>
    );
}

export function MotionFooter() {
    const pathname = usePathname();
    const config = pageConfigs[pathname as keyof typeof pageConfigs] ?? pageConfigs['/'];

    const wrapperRef = useRef<HTMLDivElement>(null);
    const giantTextRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (!wrapperRef.current) return;

        // React strict mode compatible GSAP context cleanup
        const ctx = gsap.context(() => {
            // Background Parallax
            gsap.fromTo(
                giantTextRef.current,
                { y: "10vh", scale: 0.8, opacity: 0 },
                {
                    y: "0vh",
                    scale: 1,
                    opacity: 1,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top 80%",
                        end: "bottom bottom",
                        scrub: 1,
                    },
                }
            );

            // Staggered Content Reveal
            gsap.fromTo(
                [headingRef.current, linksRef.current],
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top 40%",
                        end: "bottom bottom",
                        scrub: 1,
                    },
                }
            );
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: STYLES }} />

            {/* 
        The "Curtain Reveal" Wrapper:
        It sits in standard flow. Because it has clip-path, its contents
        are ONLY visible within its bounding box. 
      */}
            <div
                id="site-footer"
                ref={wrapperRef}
                className="relative h-[100dvh] w-full"
                style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
                {/* The actual footer stays fixed to the viewport underneath everything */}
                <footer
                    className="sticky bottom-0 left-0 flex h-[100dvh] w-full flex-col justify-between overflow-hidden cinematic-footer-wrapper z-10"
                    style={{ background: config.bg, color: '#FFFFFF' }}
                >
                    {/* Ambient aurora glow */}
                    <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />

                    {/* Base dot grid */}
                    <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none opacity-40" />

                    {/* Per-page pattern overlay */}
                    {config.pattern && (
                        <div className="absolute inset-0 z-0 pointer-events-none" style={{
                            backgroundImage: config.pattern,
                            backgroundSize: config.patternSize,
                        }} />
                    )}

                    {/* Rings */}
                    <div
                        className="pointer-events-none absolute z-0"
                        style={{
                            width: 800, height: 800, borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.07)',
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                    <div
                        className="pointer-events-none absolute z-0"
                        style={{
                            width: 540, height: 540, borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.06)',
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />

                    {/* Giant watermark */}
                    <div
                        ref={giantTextRef}
                        className="footer-giant-bg-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
                    >
                        VARMPLY
                    </div>

                    {/* 1. Diagonal marquee */}
                    <div
                        className="absolute top-12 left-0 w-full overflow-hidden py-4 z-10 -rotate-2 scale-110 shadow-2xl backdrop-blur-md"
                        style={{ borderTop: '1px solid rgba(255,255,255,0.15)', borderBottom: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}
                    >
                        <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.3em] footer-marquee-text uppercase">
                            <MarqueeTrack items={config.marquee} />
                            <MarqueeTrack items={config.marquee} />
                        </div>
                    </div>

                    {/* 2. Main center content */}
                    <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
                        <div ref={headingRef} className="flex flex-col items-center mb-12">
                            <h2
                                className="text-4xl md:text-5xl lg:text-7xl font-black footer-text-glow tracking-tighter mb-6 text-center max-w-4xl"
                                style={{ lineHeight: 1.05 }}
                            >
                                {config.headline.split('
').map((line, i, arr) => (
                                    <React.Fragment key={i}>
                                        {line}{i < arr.length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </h2>
                            <p className="text-center text-sm md:text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
                                {config.subtext}
                            </p>
                        </div>

                        <div ref={linksRef} className="flex flex-col items-center gap-6 w-full">
                            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full">
                                <MagneticButton
                                    as={Link}
                                    href={config.cta1.href}
                                    className="footer-glass-pill px-10 py-5 rounded-full font-bold text-sm md:text-base flex items-center justify-center gap-3 group w-full sm:w-auto"
                                >
                                    {config.cta1.label} <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </MagneticButton>

                                <MagneticButton
                                    as={Link}
                                    href={config.cta2.href}
                                    className="footer-glass-pill px-10 py-5 rounded-full font-bold text-sm md:text-base flex items-center justify-center gap-3 group w-full sm:w-auto"
                                >
                                    {config.cta2.label}
                                </MagneticButton>
                            </div>
                        </div>
                    </div>

                    {/* 3. Bottom bar */}
                    <div className="relative z-[60] w-full pb-10 md:pb-8 px-6 md:px-12 flex flex-row items-center justify-between gap-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                            <div className="text-[12px] md:text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.40)' }}>
                                © 2026 Varmply. All rights reserved.
                            </div>
                            <div className="flex items-center gap-1 relative z-[100]">
                                <Link
                                    href="/terms"
                                    data-lenis-prevent
                                    className="text-sm md:text-xs px-5 py-4 font-bold tracking-[0.2em] uppercase transition-all cursor-pointer relative z-[110] active:scale-95 active:bg-white/5 rounded-lg whitespace-nowrap"
                                    style={{ color: 'rgba(255,255,255,0.40)', pointerEvents: 'auto', touchAction: 'manipulation' }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,1)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.40)')}
                                >
                                    Terms
                                </Link>
                                <Link
                                    href="/privacy"
                                    data-lenis-prevent
                                    className="text-sm md:text-xs px-5 py-4 font-bold tracking-[0.2em] uppercase transition-all cursor-pointer relative z-[110] active:scale-95 active:bg-white/5 rounded-lg whitespace-nowrap"
                                    style={{ color: 'rgba(255,255,255,0.40)', pointerEvents: 'auto', touchAction: 'manipulation' }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,1)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.40)')}
                                >
                                    Privacy
                                </Link>
                            </div>
                        </div>

                        <MagneticButton
                            as="button"
                            onClick={scrollToTop}
                            className="w-12 h-12 rounded-full footer-glass-pill flex items-center justify-center group"
                            style={{ color: 'rgba(255,255,255,0.40)' }}
                        >
                            <svg className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                            </svg>
                        </MagneticButton>
                    </div>
                </footer>
            </div>
        </>
    );
}
