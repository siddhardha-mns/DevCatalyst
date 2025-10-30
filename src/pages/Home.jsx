import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Users, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/common/Layout';
import { DevCatalystHeroScroll } from '../components/DevCatalystHeroScroll';
import { StarsCanvas } from '../components/ui/stars-canvas';
import { GradientButton } from '../components/ui/gradient-button';
import { GradientText } from '../components/ui/animated-hero';
import { CtaButton } from '@/components/ui/cta-button';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    // Show the intro only once per tab session
    const alreadyShown = typeof window !== 'undefined' && sessionStorage.getItem('dc_loading_shown') === '1';
    if (alreadyShown) {
      setIsLoading(false);
      setShowContent(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
    script.async = true;
    script.onload = () => initAnimations();
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const initAnimations = () => {
    if (typeof window.anime === 'undefined') return;

    // Loading animation
    window.anime
      .timeline()
      .add({
        targets: '.loading-logo',
        scale: [0, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutElastic(1, .6)',
      })
      .add(
        {
          targets: '.loading-logo',
          rotate: [0, 360],
          duration: 1000,
          easing: 'easeInOutQuad',
        },
        '-=400',
      )
      .add({
        targets: '.loading-text span',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        delay: window.anime.stagger(80),
        easing: 'easeOutExpo',
      })
      .add({
        targets: '.loading-screen',
        opacity: [1, 0],
        duration: 600,
        delay: 800,
        easing: 'easeInExpo',
        complete: () => {
          setIsLoading(false);
          setShowContent(true);
          try {
            sessionStorage.setItem('dc_loading_shown', '1');
          } catch {}
        },
      });
  };

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Real Projects',
      description: 'Build portfolio-worthy projects that solve real problems',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Mentorship',
      description: 'Get guidance from peers and industry professionals',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Career Growth',
      description: 'Access to internships, referrals, and networking opportunities',
    },
  ];

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="loading-screen fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
          {/* Stars Background for Loading */}
          <StarsCanvas
            transparent={false}
            maxStars={1000}
            hue={0}
            brightness={1.2}
            speedMultiplier={1.5}
            twinkleIntensity={15}
            className="z-0"
          />
          <div className="relative flex flex-col items-center justify-center z-10">
            <motion.div
              className="loading-logo mb-12 opacity-0 relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: 'spring' }}
            >
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-56 h-56 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan-400/25 via-blue-500/20 to-purple-600/25 blur-3xl" />
              </div>
              <div className="w-44 h-44 md:w-64 md:h-64 mx-auto rounded-2xl ring-2 ring-white/20 shadow-[0_0_40px_rgba(34,211,238,0.25)] overflow-hidden">
                <img
                  src="/logo.png"
                  alt="DevCatalyst Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_28px_rgba(59,130,246,0.55)] saturate-150 contrast-125"
                />
              </div>
            </motion.div>

            <div className="loading-text text-5xl md:text-8xl font-bold flex relative z-10 tracking-tight">
              {'DevCatalyst'.split('').map((char, i) => (
                <span
                  key={i}
                  className="opacity-0 inline-block"
                  style={{
                    background:
                      'linear-gradient(135deg, #e8e8e8 0%, #ffffff 25%, #d4d4d4 50%, #ffffff 75%, #e8e8e8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))',
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <Layout>
        {/* Main Content */}
        <div
          className={`relative ${!showContent ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
          style={{ zIndex: 10, position: 'relative' }}
        >
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
            <motion.div className="max-w-5xl mx-auto text-center relative z-10" style={{ y: y1 }}>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-cyan-500/30 rounded-full text-white text-sm font-medium backdrop-blur-md shadow-lg shadow-cyan-500/10">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold">
                    Student-Led Developer Community
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <span
                  className="bg-gradient-to-r from-slate-100 via-white to-slate-100 bg-clip-text text-transparent"
                  style={{ textShadow: '0 0 40px rgba(255,255,255,0.2)' }}
                >
                  Build. Learn.{' '}
                </span>
                <GradientText gradient="from-cyan-400 via-blue-500 to-purple-500">
                  Grow.
                </GradientText>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                Join DevCatalyst—where curious minds become industry-ready developers through
                hands-on projects, mentorship, and real-world experience.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8, type: 'spring' }}
              >
                <Link to="/workshops" className="group">
<CtaButton size="lg" variant="primary">
                    <span className="pr-2">Get Started</span>
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </CtaButton>
                </Link>
                <Link to="/about">
                  <GradientButton variant="ghost" size="lg">
                    Learn More
                  </GradientButton>
                </Link>
              </motion.div>
            </motion.div>

            {/* Animated background elements */}
            <motion.div className="absolute inset-0 pointer-events-none" style={{ y: y2 }}>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 2,
                  }}
                />
              ))}
            </motion.div>
          </section>

          {/* Hero Scroll Demo Section */}
          <DevCatalystHeroScroll />

          {/* Features Preview */}
          <section className="relative py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-white">Why Choose </span>
                  <GradientText>DevCatalyst?</GradientText>
                </h2>
                <p className="text-xl text-slate-300">
                  Accelerate your development journey with us
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-cyan-400">{feature.icon}</div>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">
                      <GradientText gradient="from-white via-cyan-100 to-blue-200">
                        {feature.title}
                      </GradientText>
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link to="/about">
                  <GradientButton variant="secondary" size="lg">
                    Explore All Features
                  </GradientButton>
                </Link>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Home;
