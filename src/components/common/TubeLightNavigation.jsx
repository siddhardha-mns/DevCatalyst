import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Target, Image, Palette, Phone } from 'lucide-react';

const TubeLightNavigation = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Workshops', path: '/workshops', icon: Target },
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'Components', path: '/components', icon: Palette },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

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
    <motion.nav
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div className="flex items-center gap-1 bg-white/5 border border-white/20 backdrop-blur-xl py-2 px-2 rounded-full shadow-2xl">
        {/* First 3 nav items */}
        {navItems.slice(0, 3).map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setActiveTab(item.path)}
              className="relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 text-white/80 hover:text-white"
            >
              <span className="hidden md:inline relative z-10">{item.name}</span>
              <span className="md:hidden relative z-10">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 w-full rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Main tube background */}
                  <div className="absolute inset-0 bg-white/10 rounded-full" />
                  
                  {/* Tube light effect on top */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-blue-400 rounded-t-full shadow-lg">
                    {/* Outer glow */}
                    <div className="absolute w-16 h-8 bg-blue-400/30 rounded-full blur-lg -top-3 -left-2" />
                    {/* Inner glow */}
                    <div className="absolute w-12 h-6 bg-blue-400/40 rounded-full blur-md -top-2 left-0" />
                    {/* Core light */}
                    <div className="absolute w-8 h-4 bg-blue-400/60 rounded-full blur-sm -top-1 left-2" />
                    {/* Bright center */}
                    <div className="absolute w-4 h-2 bg-blue-300/80 rounded-full top-0 left-4" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
        
        {/* Logo */}
        <Link to="/">
          <motion.div 
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg p-2 mx-2"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <img
              src="/devcatalyst-logo.svg"
              alt="DevCatalyst Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </Link>
        
        {/* Last 3 nav items */}
        {navItems.slice(3).map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setActiveTab(item.path)}
              className="relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 text-white/80 hover:text-white"
            >
              <span className="hidden md:inline relative z-10">{item.name}</span>
              <span className="md:hidden relative z-10">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 w-full rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Main tube background */}
                  <div className="absolute inset-0 bg-white/10 rounded-full" />
                  
                  {/* Tube light effect on top */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-blue-400 rounded-t-full shadow-lg">
                    {/* Outer glow */}
                    <div className="absolute w-16 h-8 bg-blue-400/30 rounded-full blur-lg -top-3 -left-2" />
                    {/* Inner glow */}
                    <div className="absolute w-12 h-6 bg-blue-400/40 rounded-full blur-md -top-2 left-0" />
                    {/* Core light */}
                    <div className="absolute w-8 h-4 bg-blue-400/60 rounded-full blur-sm -top-1 left-2" />
                    {/* Bright center */}
                    <div className="absolute w-4 h-2 bg-blue-300/80 rounded-full top-0 left-4" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default TubeLightNavigation;