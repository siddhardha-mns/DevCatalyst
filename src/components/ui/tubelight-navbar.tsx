'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

interface TubeLightNavBarProps {
  items: NavItem[];
  className?: string;
  showLogo?: boolean;
  logoSrc?: string;
  logoAlt?: string;
}

export function TubeLightNavBar({
  items,
  className,
  showLogo = true,
  logoSrc = '/devcatalyst-logo.svg',
  logoAlt = 'DevCatalyst Logo',
}: TubeLightNavBarProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [_isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <motion.div
      className={cn(
        'fixed top-4 sm:top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[calc(100vw-2rem)] sm:max-w-none sm:w-auto',
        className,
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
    >
      <div className="flex items-center gap-0.5 sm:gap-1 bg-background/5 border border-white/20 backdrop-blur-xl py-1.5 sm:py-2 px-1.5 sm:px-2 rounded-full shadow-2xl mx-auto">
        {/* First half of navigation items */}
        {items.slice(0, Math.ceil(items.length / 2)).map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setActiveTab(item.path)}
              className={cn(
                'relative cursor-pointer text-xs sm:text-sm font-medium px-2 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300',
                'text-white/80 hover:text-white',
                isActive && 'text-gradient-accent',
              )}
            >
              <span className="hidden sm:inline relative z-10">{item.name}</span>
              <span className="sm:hidden relative z-10">
                <Icon size={16} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 w-full rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Main tube background */}
                  <div className="absolute inset-0 bg-white/10 rounded-full" />

                  {/* Tube light effect on top */}
                  <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-1 sm:h-1.5 bg-cyan-400 rounded-t-full shadow-lg">
                    {/* Outer glow */}
                    <div className="absolute w-12 sm:w-16 h-6 sm:h-8 bg-cyan-400/30 rounded-full blur-lg -top-2 sm:-top-3 -left-2" />
                    {/* Inner glow */}
                    <div className="absolute w-8 sm:w-12 h-4 sm:h-6 bg-cyan-400/40 rounded-full blur-md -top-1 sm:-top-2 left-0" />
                    {/* Core light */}
                    <div className="absolute w-6 sm:w-8 h-3 sm:h-4 bg-cyan-400/60 rounded-full blur-sm -top-0.5 sm:-top-1 left-1 sm:left-2" />
                    {/* Bright center */}
                    <div className="absolute w-3 sm:w-4 h-1.5 sm:h-2 bg-cyan-200/80 rounded-full top-0 left-2.5 sm:left-4" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}

        {/* Logo in the center */}
        {showLogo && (
          <Link to="/">
            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg p-1.5 sm:p-2 mx-1 sm:mx-2"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              <img src={logoSrc} alt={logoAlt} className="w-full h-full object-contain rounded-lg" style={{ borderRadius: '0.5rem' }} />
            </motion.div>
          </Link>
        )}

        {/* Second half of navigation items */}
        {items.slice(Math.ceil(items.length / 2)).map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setActiveTab(item.path)}
              className={cn(
                'relative cursor-pointer text-xs sm:text-sm font-medium px-2 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300',
                'text-white/80 hover:text-white',
                isActive && 'text-gradient-accent',
              )}
            >
              <span className="hidden sm:inline relative z-10">{item.name}</span>
              <span className="sm:hidden relative z-10">
                <Icon size={16} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 w-full rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Main tube background */}
                  <div className="absolute inset-0 bg-white/10 rounded-full" />

                  {/* Tube light effect on top */}
                  <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-1 sm:h-1.5 bg-cyan-400 rounded-t-full shadow-lg">
                    {/* Outer glow */}
                    <div className="absolute w-12 sm:w-16 h-6 sm:h-8 bg-cyan-400/30 rounded-full blur-lg -top-2 sm:-top-3 -left-2" />
                    {/* Inner glow */}
                    <div className="absolute w-8 sm:w-12 h-4 sm:h-6 bg-cyan-400/40 rounded-full blur-md -top-1 sm:-top-2 left-0" />
                    {/* Core light */}
                    <div className="absolute w-6 sm:w-8 h-3 sm:h-4 bg-cyan-400/60 rounded-full blur-sm -top-0.5 sm:-top-1 left-1 sm:left-2" />
                    {/* Bright center */}
                    <div className="absolute w-3 sm:w-4 h-1.5 sm:h-2 bg-cyan-200/80 rounded-full top-0 left-2.5 sm:left-4" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
