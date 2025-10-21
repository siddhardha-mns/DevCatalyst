import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Sparkles, Star, Palette, Mouse, Zap, Eye, Play, Navigation } from 'lucide-react';
import Layout from '../components/common/Layout';
import { StarsCanvas } from '../components/ui/stars-canvas';
import { GlowingEffect } from '../components/ui/glowing-effect';
import { GlowingEffectDemo } from '../components/ui/glowing-effect-demo';
import { StarsDemo } from '../components/ui/stars-demo';
import { TubeLightNavBarDemo } from '../components/ui/tubelight-navbar-demo';
import { LiquidButton } from '../components/ui/liquid-glass-button';

const Components = () => {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const componentCategories = [
    {
      id: 'backgrounds',
      name: 'Background Effects',
      icon: <Star className="w-5 h-5" />,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'interactive',
      name: 'Interactive Elements',
      icon: <Mouse className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'buttons',
      name: 'Buttons & Controls',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-green-500 to-cyan-600'
    },
    {
      id: 'navigation',
      name: 'Navigation',
      icon: <Navigation className="w-5 h-5" />,
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const components = [
    {
      id: 'stars-canvas',
      name: 'Stars Canvas',
      category: 'backgrounds',
      description: 'Animated starfield background with customizable colors, speed, and twinkle effects',
      features: ['1200+ animated stars', 'Customizable colors', 'Twinkling effects', 'Responsive design'],
      demo: 'stars-demo',
      color: 'from-blue-500 to-indigo-600',
      icon: '✨'
    },
    {
      id: 'glowing-effect',
      name: 'Glowing Effect',
      category: 'interactive',
      description: 'Interactive glowing border that follows mouse movement with smooth animations',
      features: ['Mouse proximity detection', 'Gradient rotation', 'Smooth transitions', 'Customizable spread'],
      demo: 'glowing-demo',
      color: 'from-purple-500 to-pink-600',
      icon: '🌟'
    },
    {
      id: 'liquid-button',
      name: 'Liquid Glass Button',
      category: 'buttons',
      description: 'Modern glass-morphism buttons with liquid animations and hover effects',
      features: ['Glass morphism design', 'Liquid animations', 'Multiple variants', 'Smooth hover effects'],
      demo: 'button-demo',
      color: 'from-cyan-500 to-teal-600',
      icon: '🔘'
    },
    {
      id: 'tubelight-navbar',
      name: 'TubeLight Navigation',
      category: 'navigation',
      description: 'Animated navigation bar with tube light effect that follows active selection',
      features: ['Tube light animation', 'Responsive design', 'Icon support', 'Smooth transitions'],
      demo: 'tubelight-demo',
      color: 'from-indigo-500 to-purple-600',
      icon: '💡'
    }
  ];

  const demoComponents = {
    'stars-demo': <StarsDemo />,
    'glowing-demo': <GlowingEffectDemo />,
    'button-demo': <ButtonDemo />,
    'tubelight-demo': <TubeLightNavBarDemo />
  };

  return (
    <Layout>
      {/* Stars Background */}
      <StarsCanvas 
        transparent={false}
        maxStars={400}
        hue={240}
        brightness={0.4}
        speedMultiplier={0.5}
        twinkleIntensity={40}
        className="z-0"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div 
          className="max-w-6xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-white/30 rounded-full text-white text-lg font-medium backdrop-blur-sm">
              🎨 UI Components
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{ textShadow: '0 0 30px rgba(255,255,255,0.3)' }}
          >
            Component Library
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
              Beautiful & Interactive
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Explore our collection of modern, animated UI components built with React, Tailwind CSS, and Framer Motion. 
            Each component is designed for performance and visual appeal.
          </motion.p>

          {/* Component Categories */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {componentCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className={`flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${category.color} rounded-full text-white font-medium shadow-lg backdrop-blur-sm`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {category.icon}
                <span>{category.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Components Grid */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Available Components</h2>
            <p className="text-xl text-slate-200">Click on any component to see it in action</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {components.map((component, index) => (
              <motion.div
                key={component.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden hover:border-white/40 transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                onClick={() => setSelectedDemo(component.demo)}
              >
                <GlowingEffect
                  disabled={false}
                  glow={true}
                  proximity={80}
                  spread={45}
                  borderWidth={2}
                  inactiveZone={0.1}
                />

                {/* Component Header */}
                <div className={`h-40 bg-gradient-to-r ${component.color} relative overflow-hidden flex items-center justify-center`}>
                  <motion.div
                    className="text-6xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {component.icon}
                  </motion.div>

                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 40% 20%, white 1px, transparent 1px)',
                      backgroundSize: '30px 30px'
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%']
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  />
                </div>

                {/* Component Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {component.name}
                  </h3>

                  <p className="text-slate-300 text-sm mb-4">
                    {component.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {component.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-2 text-xs text-slate-400"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + featureIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Demo Button */}
                  <LiquidButton
                    size="sm"
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-cyan-600 text-white"
                  >
                    <Play className="w-4 h-4" />
                    <span>View Demo</span>
                  </LiquidButton>
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-white">Ready to Use These Components?</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                All components are open source and ready to integrate into your projects. 
                Join our community to access the full library and contribute new components.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LiquidButton 
                  size="lg" 
                  className="bg-white text-black hover:shadow-[0_20px_40px_rgba(255,255,255,0.3)]"
                  onClick={() => window.open('https://github.com/devcatalyst', '_blank')}
                >
                  <Code className="w-5 h-5 mr-2" />
                  View on GitHub
                </LiquidButton>
                <LiquidButton
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/50 !text-black bg-white hover:bg-white/90"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Browse Documentation
                </LiquidButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Screen Demo Modal */}
      {selectedDemo && (
        <motion.div
          className="fixed inset-0 z-50 bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute top-6 right-6 z-20">
            <LiquidButton
              onClick={() => setSelectedDemo(null)}
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white/10"
            >
              Close Demo
            </LiquidButton>
          </div>
          {demoComponents[selectedDemo]}
        </motion.div>
      )}
    </Layout>
  );
};

// Button Demo Component
const ButtonDemo = () => {
  const [buttonStates, setButtonStates] = useState({
    loading: false,
    success: false
  });

  const handleAsyncAction = async () => {
    setButtonStates({ loading: true, success: false });
    await new Promise(resolve => setTimeout(resolve, 2000));
    setButtonStates({ loading: false, success: true });
    setTimeout(() => setButtonStates({ loading: false, success: false }), 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h1 className="text-5xl font-bold text-white mb-8">
          Liquid Glass Buttons
        </h1>

        {/* Size Variants */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white">Size Variants</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <LiquidButton size="sm">Small Button</LiquidButton>
            <LiquidButton size="md">Medium Button</LiquidButton>
            <LiquidButton size="lg">Large Button</LiquidButton>
          </div>
        </div>

        {/* Style Variants */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white">Style Variants</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <LiquidButton className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              Primary
            </LiquidButton>
            <LiquidButton variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
              Secondary
            </LiquidButton>
            <LiquidButton variant="outline" className="border-2 border-white/50 text-white hover:bg-white/10">
              Outline
            </LiquidButton>
          </div>
        </div>

        {/* Interactive Examples */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white">Interactive Examples</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <LiquidButton
              size="lg"
              onClick={handleAsyncAction}
              disabled={buttonStates.loading}
              className={`${buttonStates.loading ? 'opacity-70' : ''} ${buttonStates.success ? 'bg-green-500' : 'bg-gradient-to-r from-orange-500 to-red-600'} text-white transition-all`}
            >
              {buttonStates.loading ? 'Loading...' : buttonStates.success ? '✅ Success!' : 'Async Action'}
            </LiquidButton>
            
            <LiquidButton
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              With Icon
            </LiquidButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;