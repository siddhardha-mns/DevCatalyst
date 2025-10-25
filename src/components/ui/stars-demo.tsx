import { StarsCanvas } from '@/components/ui/stars-canvas';
import { useState } from 'react';
import { DemoControls } from '@/components/ui/demo-controls';

export function StarsDemo() {
  const defaults = {
    transparent: false,
    maxStars: 800,
    hue: 217,
    brightness: 0.8,
    speedMultiplier: 1,
    twinkleIntensity: 20,
    paused: false,
  };
  const [config, setConfig] = useState(defaults);

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

      {/* Controls overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="w-full max-w-3xl mx-auto text-center space-y-6">
          <DemoControls title="Controls" onReset={() => setConfig(defaults)}>
              <label className="flex flex-col">
                <span className="text-blue-100/80 mb-1">Stars Count</span>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="100"
                  value={config.maxStars}
                  onChange={(e) => setConfig({ ...config, maxStars: parseInt(e.target.value) })}
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
                  onChange={(e) => setConfig({ ...config, hue: parseInt(e.target.value) })}
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
                  onChange={(e) =>
                    setConfig({ ...config, speedMultiplier: parseFloat(e.target.value) })
                  }
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
                  onChange={(e) => setConfig({ ...config, brightness: parseFloat(e.target.value) })}
                  className="w-full"
                />
                <span className="text-white text-xs">{config.brightness}</span>
              </label>
            </DemoControls>
            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              <button
                onClick={() => setConfig({ ...config, paused: !config.paused })}
                className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-400/30 rounded text-white transition-colors"
              >
                {config.paused ? 'Resume' : 'Pause'} Animation
              </button>
              <button
                onClick={() => setConfig({ ...config, transparent: !config.transparent })}
                className="px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-400/30 rounded text-white transition-colors"
              >
                {config.transparent ? 'Solid Background' : 'Transparent'}
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
