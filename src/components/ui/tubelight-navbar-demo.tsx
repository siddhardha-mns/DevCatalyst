import Navigation from '@/components/common/Navigation.jsx';

export function TubeLightNavBarDemo() {
  return (
    <div className="relative p-6">
      {/* Demo nav in contained card for consistent theme */}
      <div className="dc-card p-6 max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">TubeLight Navigation</h1>
          <p className="text-slate-300 mt-2">A contained preview of the tube light effect with our accent theme.</p>
        </div>
        {/* Render the shared Navigation in demo mode */}
        <div className="relative h-[240px] flex items-start justify-center pt-16">
          <Navigation demoMode />
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {[
            'Animated tube light effect on active navigation',
            'Smooth spring animations with Framer Motion',
            'Responsive design with icons on mobile',
            'Glassmorphism backdrop with blur effects',
          ].map((t, i) => (
            <div key={i} className="flex items-center space-x-3 text-slate-300">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
