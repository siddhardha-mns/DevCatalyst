import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import { ScrollProgress, ScrollToTop } from '../ui/scroll-progress';
import { useSmoothScroll } from '../../hooks/useScrollEffects';
import { StarsCanvas } from '../ui/stars-canvas';

const Layout = ({ children }) => {
  const location = useLocation();
  useSmoothScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative select-none">
      {/* Rotating Stars Background */}
      <StarsCanvas
        transparent={false}
        maxStars={800}
        hue={0}
        brightness={1}
        speedMultiplier={0.8}
        twinkleIntensity={25}
        className="z-0"
      />

      <ScrollProgress />
      <Navigation />
      <ScrollToTop />

      {/* Page Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;
