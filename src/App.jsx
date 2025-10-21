import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Workshops from './pages/Workshops';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Components from './pages/Components';
import GlowingEffectTest from './pages/GlowingEffectTest';
import StarsTest from './pages/StarsTest';
import { StarsDemo } from './components/ui/stars-demo';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/components" element={<Components />} />
          <Route path="/glow-test" element={<GlowingEffectTest />} />
          <Route path="/stars-test" element={<StarsTest />} />
          <Route path="/stars-demo" element={<StarsDemo />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
