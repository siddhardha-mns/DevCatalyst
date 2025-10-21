import React from 'react';
import { GlowingEffect } from './glowing-effect';
import { GlowingDebug } from './glowing-debug';

export function SimpleGlowTest() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-2xl font-bold text-center text-foreground">
          Glowing Effect Tests
        </h2>
        
        {/* Debug Version - Simplified */}
        <div className="w-80 h-60 relative">
          <div className="relative h-full rounded-xl border-2 border-border bg-card p-6">
            <GlowingDebug
              disabled={false}
              proximity={100}
            />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Debug Version (Simplified)
              </h3>
              <p className="text-sm text-muted-foreground">
                This uses a simpler conic-gradient that should be more visible.
                Move your mouse around this card.
              </p>
            </div>
          </div>
        </div>

        {/* Original Version */}
        <div className="w-80 h-60 relative">
          <div className="relative h-full rounded-xl border-2 border-border bg-card p-6">
            <GlowingEffect
              disabled={false}
              glow={true}
              proximity={100}
              spread={60}
              borderWidth={2}
              inactiveZone={0.1}
              movementDuration={1}
            />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Original Version (Complex)
              </h3>
              <p className="text-sm text-muted-foreground">
                This uses the complex mask-based approach.
                Move your mouse around this card.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
