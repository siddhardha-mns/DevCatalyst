import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ demoMode = false }) => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [demoPath, setDemoPath] = useState(location.pathname);

  useEffect(() => {
    const unsub = scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
    return () => unsub();
  }, [scrollY]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Components', path: '/components' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      className="fixed top-4 inset-x-0 flex justify-center px-4"
      style={{ zIndex: 50 }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 140 }}
    >
      <motion.div
        className="relative inline-flex mx-auto max-w-[calc(100vw-2rem)] group"
        animate={{
          backgroundColor: scrolled ? 'rgba(2, 6, 23, 0.7)' : 'rgba(2, 6, 23, 0.4)',
        }}
        transition={{ duration: 0.2 }}
        style={{
          backdropFilter: 'blur(20px) saturate(140%)',
          WebkitBackdropFilter: 'blur(20px) saturate(140%)',
          border: '1px solid rgba(148, 163, 184, 0.25)',
          borderRadius: '9999px',
          padding: '12px 28px',
          boxShadow: scrolled
            ? '0 10px 30px rgba(0, 0, 0, 0.45)'
            : '0 6px 18px rgba(0, 0, 0, 0.35)',
        }}
      >
        {/* subtle highlight */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
        </div>

        <div className="flex items-center justify-center space-x-2 sm:space-x-6 relative z-10">
          {navItems.slice(0, 3).map((item) => (
            <NavLink
              key={item.name}
              item={item}
              currentPath={demoMode ? demoPath : location.pathname}
              demoMode={demoMode}
              onActivate={(path) => setDemoPath(path)}
            />
          ))}
          <Link to="/">
            <motion.div
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mx-2 sm:mx-3 relative"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <img
                src="/logo.png"
                alt="DevCatalyst Logo"
                className="w-full h-full object-contain relative z-10 rounded-full"
              />
            </motion.div>
          </Link>
          {navItems.slice(3).map((item) => (
            <NavLink
              key={item.name}
              item={item}
              currentPath={demoMode ? demoPath : location.pathname}
              demoMode={demoMode}
              onActivate={(path) => setDemoPath(path)}
            />
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

const NavLink = ({ item, currentPath, demoMode = false, onActivate }) => {
  const isActive = currentPath === item.path;

  return (
    <Link
      to={demoMode ? '#' : item.path}
      onClick={(e) => {
        if (demoMode) {
          e.preventDefault();
          onActivate && onActivate(item.path);
        }
      }}
    >
      <motion.span
        className="relative text-xs sm:text-sm font-bold transition-colors block px-3 py-2"
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span
          className={`relative z-10 tracking-wide ${
            isActive ? 'text-cyan-300' : 'text-slate-200 hover:text-white'
          }`}
        >
          {item.name}
        </span>

        {/* Existing underline effect remains */}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-2 right-2 h-0.5 bg-cyan-400/70 rounded-full"
            layoutId="activeTabUnderline"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}

        {/* Added tubelight effect on active tab */}
        {isActive && (
          <motion.div
            layoutId="tubelight"
            className="absolute inset-0 w-full rounded-full -z-10"
            initial={false}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Main tube background */}
            <div className="absolute inset-0 bg-white/10 rounded-full" />

            {/* Tube light effect on top */}
            <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-1 sm:h-1.5 bg-blue-400 rounded-t-full shadow-lg">
              {/* Outer glow */}
              <div className="absolute w-12 sm:w-16 h-6 sm:h-8 bg-blue-400/30 rounded-full blur-lg -top-2 sm:-top-3 -left-2" />
              {/* Inner glow */}
              <div className="absolute w-8 sm:w-12 h-4 sm:h-6 bg-blue-400/40 rounded-full blur-md -top-1 sm:-top-2 left-0" />
              {/* Core light */}
              <div className="absolute w-6 sm:w-8 h-3 sm:h-4 bg-blue-400/60 rounded-full blur-sm -top-0.5 sm:-top-1 left-1 sm:left-2" />
              {/* Bright center */}
              <div className="absolute w-3 sm:w-4 h-1.5 sm:h-2 bg-blue-300/80 rounded-full top-0 left-2.5 sm:left-4" />
            </div>
          </motion.div>
        )}
      </motion.span>
    </Link>
  );
};

export default Navigation;
