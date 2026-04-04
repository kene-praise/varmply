import { clsx } from 'clsx';

// ── SectionWrap ──────────────────────────────────────────────────────────────
// Consistent max-width container used across all landing sections.

interface SectionWrapProps {
  children: React.ReactNode;
  className?: string;
  py?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  // Set to true when section has its own dark/colored bg (skips default bg)
  flush?: boolean;
}

const pyMap = {
  none: '',
  sm:   'py-12 md:py-16',
  md:   'py-16 md:py-24',
  lg:   'py-20 md:py-28',
  xl:   'py-24 md:py-32',
};

export function SectionWrap({ children, className, py = 'md', flush }: SectionWrapProps) {
  return (
    <section className={clsx(!flush && 'bg-white', pyMap[py], className)}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

// ── SectionLabel ─────────────────────────────────────────────────────────────
// Small uppercase pill that sits above section headings.
// Comes in light (default) and dark surface variants.

interface SectionLabelProps {
  children: React.ReactNode;
  surface?: 'light' | 'dark';
  className?: string;
}

export function SectionLabel({ children, surface = 'light', className }: SectionLabelProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest',
        surface === 'dark'
          ? 'bg-white/10 text-white/70'
          : 'bg-[var(--accent-light)] text-[var(--accent)]',
        className
      )}
    >
      {children}
    </span>
  );
}

// ── SectionHeading ────────────────────────────────────────────────────────────
// Opinionated heading block: label + headline + optional sub, pre-centered.

interface SectionHeadingProps {
  label?: string;
  headline: React.ReactNode;
  sub?: string;
  surface?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  label,
  headline,
  sub,
  surface = 'light',
  align = 'center',
  className,
}: SectionHeadingProps) {
  const textColor = surface === 'dark' ? 'text-white' : 'text-[var(--text-primary)]';
  const subColor = surface === 'dark' ? 'text-white/60' : 'text-[var(--text-secondary)]';

  return (
    <div className={clsx('flex flex-col gap-3', align === 'center' && 'items-center text-center', className)}>
      {label && <SectionLabel surface={surface}>{label}</SectionLabel>}
      <h2 className={clsx('font-bold leading-tight', textColor)} style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
        {headline}
      </h2>
      {sub && (
        <p className={clsx('max-w-lg text-base leading-relaxed', subColor)}>
          {sub}
        </p>
      )}
    </div>
  );
}
