import React, { useState } from 'react';
import { StarsCanvas } from '../components/ui/stars-canvas';
import { TubeLightNavBarDemo } from '../components/ui/tubelight-navbar-demo';
import TubeLightNavigation from '../components/common/TubeLightNavigation';

const TubeLightTest = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="relative min-h-screen">
      <StarsCanvas 
        transparent={false}
        maxStars={400}
        hue={240}
        brightness={0.4}
        speedMultiplier={0.6}
        twinkleIntensity={30}
        className="z-0"
      />
      
      {showDemo ? (
        <TubeLightNavBarDemo />
      ) : (
        <>
          <TubeLightNavigation />
          
          <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  TubeLight Navigation
                </h1>
                <p className="text-xl md:text-2xl text-blue-100/80">
                  Experience the enhanced DevCatalyst navigation with tube lighting effects
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Enhanced Features</h3>
                  <div className="text-left space-y-2 text-blue-100/70 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Animated tube light on active navigation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Responsive icons for mobile devices</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Smooth spring animations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Glassmorphism design</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Navigation Items</h3>
                  <div className="text-left space-y-2 text-blue-100/70 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>Home - Landing page</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>About - Community values</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>Workshops - Learning sessions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>Gallery - Project showcase</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>Components - UI library</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>Contact - Get in touch</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setShowDemo(!showDemo)}
                  className="px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-400/30 rounded-lg text-white transition-all hover:scale-105"
                >
                  {showDemo ? 'Show Integrated Version' : 'Show Standalone Demo'}
                </button>
                
                <a 
                  href="/components"
                  className="px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-400/30 rounded-lg text-white transition-all hover:scale-105 text-center"
                >
                  View Components Library
                </a>
              </div>
              
              <p className="text-blue-200/60 text-sm">
                Navigate between pages to see the tube light follow your selection
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TubeLightTest;