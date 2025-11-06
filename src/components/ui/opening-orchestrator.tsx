import { useEffect } from 'react';

export function OpeningOrchestrator() {
  useEffect(() => {
    const reduced = typeof window !== 'undefined' &&
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mark document as opened (drives overlay fade-ins via CSS)
    const root = document.documentElement;
    root.classList.add('dc-opened');

    // One-time CTA/primary shine on first visible button (theme accent)
    if (!reduced) {
      const t = setTimeout(() => {
        const candidates = [
          document.querySelector<HTMLButtonElement>('button.cta'),
          document.querySelector<HTMLButtonElement>('.gradient-button'),
          document.querySelector<HTMLButtonElement>('[data-primary-cta]'),
        ];
        const target = candidates.find(Boolean) as HTMLButtonElement | undefined;
        if (target) {
          target.classList.add('once-shine');
          setTimeout(() => target.classList.remove('once-shine'), 1200);
        }
      }, 700);
      return () => clearTimeout(t);
    }
  }, []);
  return null;
}

export default OpeningOrchestrator;