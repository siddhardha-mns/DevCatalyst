import { StarsCanvas } from "@/components/ui/stars-canvas";
import { useState } from "react";

export function StarsDemo() {
  const [config, setConfig] = useState({
    transparent: false,
    maxStars: 800,
    hue: 217,
    brightness: 0.8,
    speedMultiplier: 1,
    twinkleIntensity: 20,
    paused: false,
  });

  return (
    <div className="relative min-h-screen">
      <StarsCanvas 
        transparent={config.transparent}
        maxStars={config.maxStars}
        hue={config.hue}
        brightness={config.brightness}
        speedMultiplier={config.speedMultiplier}
        twinkleIntensity={config.twinkleIntensity}
        paused={config.paused}
        className="z-0"
      />
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              DevCatalyst
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/80">
              A student-led developer community focused on learning-by-building
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Learn by Building</h3>
              <p className="text-blue-100/70 text-sm">
                Hands-on workshops and guided learning paths
              </p>
            </div>
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Expert Mentorship</h3>
              <p className="text-blue-100/70 text-sm">
                Guidance from industry professionals
              </p>
            </div>
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Real Projects</h3>
              <p className="text-blue-100/70 text-sm">
                Portfolio-worthy applications
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-12 p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10">
            <h3 className="text-white font-semibold mb-4">Stars Configuration</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <label className="flex flex-col">
                <span className="text-blue-100/80 mb-1">Stars Count</span>
                <input 
                  type="range" 
                  min="100" 
                  max="2000" 
                  step="100"
                  value={config.maxStars}
                  onChange={(e) => setConfig({...config, maxStars: parseInt(e.target.value)})}
                  className="w-full"
                />
                <span className="text-white text-xs">{config.maxStars}</span>
              </label>
              
              <label className="flex flex-col">
                <span className="text-blue-100/80 mb-1">Color Hue</span>
                <input 
                  type="range" 
                  min="0" 
                  max="360" 
                  value={config.hue}
                  onChange={(e) => setConfig({...config, hue: parseInt(e.target.value)})}
                  className="w-full"
                />
                <span className="text-white text-xs">{config.hue}°</span>
              </label>
              
              <label className="flex flex-col">
                <span className="text-blue-100/80 mb-1">Speed</span>
                <input 
                  type="range" 
                  min="0.1" 
                  max="3" 
                  step="0.1"
                  value={config.speedMultiplier}
                  onChange={(e) => setConfig({...config, speedMultiplier: parseFloat(e.target.value)})}
                  className="w-full"
                />
                <span className="text-white text-xs">{config.speedMultiplier}x</span>
              </label>
              
              <label className="flex flex-col">
                <span className="text-blue-100/80 mb-1">Brightness</span>
                <input 
                  type="range" 
                  min="0.1" 
                  max="2" 
                  step="0.1"
                  value={config.brightness}
                  onChange={(e) => setConfig({...config, brightness: parseFloat(e.target.value)})}
                  className="w-full"
                />
                <span className="text-white text-xs">{config.brightness}</span>
              </label>
            </div>
            
            <div className="flex gap-4 mt-4">
              <button 
                onClick={() => setConfig({...config, paused: !config.paused})}
                className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-400/30 rounded text-white transition-colors"
              >
                {config.paused ? 'Resume' : 'Pause'} Animation
              </button>
              <button 
                onClick={() => setConfig({...config, transparent: !config.transparent})}
                className="px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-400/30 rounded text-white transition-colors"
              >
                {config.transparent ? 'Solid Background' : 'Transparent'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}