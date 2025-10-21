import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Components', path: '/components' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav
      className="fixed top-8 inset-x-0 z-50 flex justify-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 shadow-2xl inline-flex mx-auto">
        <div className="flex items-center justify-center space-x-6">
          {/* First 3 nav items */}
          {navItems.slice(0, 3).map((item) => (
            <NavLink key={item.name} item={item} currentPath={location.pathname} />
          ))}
          
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
          {navItems.slice(3).map((item) => (
            <NavLink key={item.name} item={item} currentPath={location.pathname} />
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ item, currentPath }) => {
  const isActive = currentPath === item.path;
  
  return (
    <Link to={item.path}>
      <motion.span
        className={`relative text-sm font-medium transition-colors ${
          isActive ? 'text-blue-400' : 'text-white hover:text-blue-400'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {item.name}
        {isActive && (
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
            layoutId="activeTab"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </motion.span>
    </Link>
  );
};

export default Navigation;