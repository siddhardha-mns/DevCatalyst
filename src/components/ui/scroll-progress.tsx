import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollEffects';

export const ScrollProgress: React.FC = () => {
  const scrollProgress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 origin-left"
      style={{
        scaleX: scrollProgress / 100,
        transformOrigin: '0%',
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 blur-sm opacity-75" />
    </motion.div>
  );
};

// Scroll to top button
export const ScrollToTop: React.FC = () => {
  const scrollProgress = useScrollProgress();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(scrollProgress > 20);
  }, [scrollProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/50 flex items-center justify-center backdrop-blur-sm border border-white/20"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </motion.button>
  );
};
