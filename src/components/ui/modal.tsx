import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  nonSelectable?: boolean;
}

export function Modal({ isOpen, onClose, title, children, nonSelectable = false }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const lastFocused = useRef<Element | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    lastFocused.current = document.activeElement;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        const focusables = contentRef.current?.querySelectorAll<HTMLElement>(
          'a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])',
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement;
        if (e.shiftKey && active === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && active === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    setTimeout(() => {
      const first = contentRef.current?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      first?.focus();
    }, 0);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      if (lastFocused.current instanceof HTMLElement) lastFocused.current.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const body = (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-auto p-4 md:p-8 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        ref={contentRef}
        className={`relative w-full max-w-[1000px] rounded-2xl border border-white/15 bg-[#07121f]/70 text-slate-100 shadow-xl backdrop-blur-xl holo-card holo-edge overflow-hidden ${nonSelectable ? 'select-none' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* hologram scanline */}
        <div className="pointer-events-none absolute inset-0 bg-scanlines opacity-20 sm:opacity-30" />
        {/* edge shimmer */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ boxShadow: 'inset 0 0 40px rgba(0,198,255,0.08)' }} />
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <h3 className="text-base font-semibold neon-heading">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center rounded-md px-3 py-1.5 text-sm bg-slate-800/70 hover:bg-slate-700/80 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 magnetic"
          >
            Close
          </button>
        </div>
        <div className="p-3 md:p-6 relative z-10">{children}</div>
      </div>
    </div>
  );

  return createPortal(body, document.body);
}
