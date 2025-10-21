import React from 'react';
import { StarsCanvas } from '../components/ui/stars-canvas';

function StarsTest() {
  return (
    <div className="relative min-h-screen">
      <StarsCanvas 
        transparent={false}
        maxStars={600}
        hue={217}
        brightness={1}
        speedMultiplier={1}
        twinkleIntensity={20}
        className="z-0"
      />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4 bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <h1 className="text-4xl font-bold text-white">
            Stars Canvas Test
          </h1>
          <p className="text-white/80">
            You should see animated stars in the background
          </p>
          <div className="text-sm text-white/60">
            Stars moving in circular patterns with twinkling effects
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarsTest;