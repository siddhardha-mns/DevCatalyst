import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'md' | 'lg';
}

export const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base = 'cta relative isolate inline-flex items-center justify-center gap-2 rounded-xl font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:opacity-60 disabled:pointer-events-none transition-all';
    const sizes: Record<NonNullable<CtaButtonProps['size']>, string> = {
      md: 'min-h-[48px] px-5 py-3 text-sm',
      lg: 'min-h-[56px] px-8 py-4 text-base',
    };
    const variants: Record<NonNullable<CtaButtonProps['variant']>, string> = {
'primary':
        'text-white bg-[linear-gradient(90deg,var(--accent-start),var(--accent-end))] shadow-[0_8px_30px_rgba(30,144,255,0.35)] hover:shadow-[0_8px_40px_rgba(30,144,255,0.55)] hover:brightness-110 transition-[filter] duration-200',
      outline:
        'text-slate-200 bg-slate-900/40 border border-slate-700 hover:bg-slate-900/60',
      ghost: 'text-slate-200 bg-transparent hover:bg-white/10',
    };

    return (
      <button ref={ref} className={cn(base, sizes[size], variants[variant], className)} {...props}>
        {/* glow ring */}
        <span className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-indigo-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
        {/* shine sweep */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
          <span className="shine-sweep absolute -left-full top-0 h-full w-1/2 translate-x-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] opacity-0 group-hover:opacity-100 group-hover:translate-x-[250%] transition-all duration-700" />
        </span>
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </button>
    );
  },
);
CtaButton.displayName = 'CtaButton';