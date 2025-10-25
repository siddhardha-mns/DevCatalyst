import React from 'react';
import Navigation from '@/components/common/Navigation';

export function TubeLightNavBarDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      <Navigation demoMode />

      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              TubeLight Navigation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/80">
              Experience the magical tube lighting effect as you navigate through DevCatalyst
            </p>
          </div>

          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-white font-semibold mb-4">Features</h3>
            <div className="text-left space-y-3 text-blue-100/70">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Animated tube light effect on active navigation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Smooth layoutId animations with Framer Motion</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Responsive design with icons on mobile</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Glassmorphism backdrop with blur effects</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Centered logo with hover animations</span>
              </div>
            </div>
          </div>

          <p className="text-blue-200/60 text-sm">
            Click on different navigation items to see the tube light effect in action
          </p>
        </div>
      </div>
    </div>
  );
}
