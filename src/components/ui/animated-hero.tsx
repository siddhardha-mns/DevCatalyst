import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface AnimatedHeroProps {
  title: string[];
  subtitle?: string;
  className?: string;
}

export const AnimatedHero: React.FC<AnimatedHeroProps> = ({ title, subtitle, className = '' }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % title.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [title.length]);

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [20, 0],
      transition: { duration: 0.5 },
    });
  }, [currentWordIndex, controls]);

  return (
    <div className={`relative ${className}`}>
      <div className="text-5xl md:text-7xl lg:text-8xl font-bold">
        {/* Static text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-slate-100 via-white to-slate-100 bg-clip-text text-transparent">
            Build. Learn.{' '}
          </span>
        </motion.div>

        {/* Animated rotating word */}
        <div className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
          <motion.div key={currentWordIndex} animate={controls} className="absolute">
            <span
              className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 60px rgba(59, 130, 246, 0.5)',
              }}
            >
              {title[currentWordIndex]}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Subtitle with typewriter effect */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-xl md:text-2xl text-slate-300 max-w-3xl"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
    </div>
  );
};


// Text reveal animation component
export const TextReveal: React.FC<{ children: string; className?: string }> = ({
  children,
  className = '',
}) => {
  const words = children.split(' ');

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// Gradient text component
export const GradientText: React.FC<{
  children: React.ReactNode;
  gradient?: string;
  className?: string;
}> = ({ children, gradient, className = '' }) => {
  const defaultGradient = 'from-[var(--accent-start)] to-[var(--accent-end)]';

  return (
    <span
      className={`bg-gradient-to-r ${gradient || defaultGradient} bg-clip-text text-transparent ${className}`}
      style={{
        textShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
      }}
    >
      {children}
    </span>
  );
};
