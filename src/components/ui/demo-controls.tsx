import React from 'react';

interface DemoControlsProps {
  title?: string;
  onReset?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export function DemoControls({ title, onReset, className = '', children }: DemoControlsProps) {
  return (
    <div className={`rounded-xl border border-slate-700 bg-slate-900/70 p-4 md:p-5 ${className}`}>
      <div className="flex items-center justify-between gap-3 mb-3">
        {title ? <h4 className="text-sm font-semibold text-slate-200">{title}</h4> : <div />}
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="h-9 rounded-md border border-slate-600 bg-slate-800 px-3 text-sm text-slate-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Revert to Default
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">{children}</div>
    </div>
  );
}
