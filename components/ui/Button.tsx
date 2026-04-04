'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

type ButtonVariant = 'primary' | 'ghost' | 'on-dark' | 'on-dark-ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  loading?: boolean;
  href?: string;
  asChild?: boolean;
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs gap-1.5',
  md: 'px-6 py-2.5 text-sm gap-2',
  lg: 'px-8 py-3.5 text-base gap-2',
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-[var(--accent)] text-white',
    'hover:bg-[var(--accent-hover)]',
    'shadow-[0_2px_12px_rgba(124,59,237,0.30)]',
    'hover:shadow-[0_4px_20px_rgba(124,59,237,0.40)]',
  ].join(' '),

  ghost: [
    'bg-transparent text-[var(--text-secondary)]',
    'border border-[var(--border-default)]',
    'hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)]',
  ].join(' '),

  'on-dark': [
    'bg-white text-[var(--accent)]',
    'hover:bg-white/90',
    'shadow-[0_2px_12px_rgba(0,0,0,0.15)]',
  ].join(' '),

  'on-dark-ghost': [
    'bg-white/10 text-white',
    'border border-white/20',
    'hover:bg-white/15 hover:border-white/30',
  ].join(' '),
};

const base =
  'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', icon, loading, href, children, className, ...props }, ref) => {
    const classes = clsx(base, variantStyles[variant], sizeStyles[size], className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {loading ? <Spinner /> : children}
          {icon && !loading && icon}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} disabled={loading || props.disabled} {...props}>
        {loading ? <Spinner /> : children}
        {icon && !loading && icon}
      </button>
    );
  }
);

Button.displayName = 'Button';

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
      <path d="M12 2a10 10 0 0 1 10 10" />
    </svg>
  );
}
