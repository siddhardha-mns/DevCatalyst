import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/common/Layout';
import { HeroScrollDemo } from '../components/HeroScrollDemo';

const ScrollDemo = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroScrollDemo />
        </motion.div>
      </div>
    </Layout>
  );
};

export default ScrollDemo;