import React, { useEffect, useRef, useState } from 'react';
import { Github, Twitter, Linkedin, ArrowRight, Code, Users, Rocket, BookOpen, Award, Sparkles } from 'lucide-react';

const DevCatalystLanding = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
    script.async = true;
    script.onload = () => initAnimations();
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initAnimations = () => {
    if (typeof window.anime === 'undefined') return;

    // Logo animation
    window.anime.timeline()
      .add({
        targets: '.loading-logo',
        scale: [0, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutElastic(1, .6)'
      })
      .add({
        targets: '.loading-logo',
        rotate: [0, 360],
        duration: 1000,
        easing: 'easeInOutQuad'
      }, '-=400');

    // Loading animation - DevCatalyst text reveal
    window.anime.timeline()
      .add({
        targets: '.loading-text span',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        delay: window.anime.stagger(80),
        easing: 'easeOutExpo'
      })
      .add({
        targets: '.loading-text span',
        scale: [1, 1.1, 1],
        duration: 400,
        delay: window.anime.stagger(40),
        easing: 'easeInOutQuad'
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
          startMainAnimations();
        }
      });
  };

  const startMainAnimations = () => {
    if (typeof window.anime === 'undefined') return;

    // Hero animation
    window.anime.timeline()
      .add({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1200,
        easing: 'easeOutExpo'
      })
      .add({
        targets: '.hero-subtitle',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: 'easeOutExpo'
      }, '-=800')
      .add({
        targets: '.hero-cta',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 800,
        easing: 'easeOutElastic(1, .8)'
      }, '-=600');

    // Particles animation
    window.anime({
      targets: '.particle',
      translateX: () => window.anime.random(-100, 100),
      translateY: () => window.anime.random(-100, 100),
      scale: () => window.anime.random(0.5, 1.5),
      opacity: [0.3, 0.8],
      duration: () => window.anime.random(3000, 5000),
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true,
      delay: (el, i) => i * 200
    });

    // Scroll animations
    const observerOptions = { threshold: 0.2, rootMargin: '0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.anime({
            targets: entry.target,
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 1000,
            easing: 'easeOutExpo'
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  };

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learn by Building",
      description: "Hands-on workshops and guided learning paths that take you from concept to deployment"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Real Projects",
      description: "Build portfolio-worthy projects that solve real problems and impress recruiters"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Mentorship",
      description: "Get guidance from peers, seniors, and industry professionals who've been there"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Career Growth",
      description: "Access to internships, referrals, and networking opportunities that open doors"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Skill Development",
      description: "Master teamwork, leadership, and public speaking through community involvement"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "All Levels Welcome",
      description: "From complete beginners to advanced developers—everyone has a place here"
    }
  ];

  const activities = [
    "Weekly workshops and interactive code-alongs",
    "Hackathons, coding challenges, and demo days",
    "Speaker sessions and insightful tech talks",
    "Open-source contribution sprints",
    "Study groups and peer learning sessions",
    "Community projects with real-world impact"
  ];

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="loading-screen fixed inset-0 z-[100] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center overflow-hidden">
          <div className="relative flex flex-col items-center justify-center">
            {/* Logo */}
            <div className="loading-logo mb-12 opacity-0">
              <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center p-6 shadow-2xl">
                <img
                  src="/devcatalyst-logo.svg"
                  alt="DevCatalyst Logo"
                  className="w-full h-full object-contain transition-transform hover:scale-110"
                />
              </div>
            </div>

            {/* DevCatalyst Text */}
            <div className="loading-text text-5xl md:text-8xl font-bold flex relative z-10 tracking-tight">
              {'DevCatalyst'.split('').map((char, i) => (
                <span
                  key={i}
                  className="opacity-0 inline-block"
                  style={{ 
                    background: 'linear-gradient(135deg, #e8e8e8 0%, #ffffff 25%, #d4d4d4 50%, #ffffff 75%, #e8e8e8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5)) drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                    fontWeight: '700',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {char}
                </span>
              ))}
            </div>

            {/* Tagline */}
            <div className="loading-text mt-4 text-white text-sm md:text-base tracking-widest opacity-0">
              CATALYSING INNOVATION
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden ${!showContent ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        
        {/* Floating Particles */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 shadow-2xl">
            <div className="flex items-center space-x-8">
              <a href="#about" className="text-white hover:text-blue-400 transition-colors font-medium text-sm">About Us</a>
              <a href="#workshops" className="text-white hover:text-blue-400 transition-colors font-medium text-sm">Workshops</a>

              {/* Center Logo */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg p-2">
                <img
                  src="/devcatalyst-logo.svg"
                  alt="DevCatalyst Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <a href="#gallery" className="text-white hover:text-blue-400 transition-colors font-medium text-sm">Gallery</a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors font-medium text-sm">Contact Us</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-white/10 border border-white/30 rounded-full text-white text-sm font-medium backdrop-blur-sm">
                🥷 Student-Led Developer Ninjas
              </div>
            </div>

            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 text-white opacity-0" style={{ textShadow: '0 0 30px rgba(255,255,255,0.3)' }}>
              Build. Learn. Grow.
            </h1>

            <p className="hero-subtitle text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto opacity-0">
              Join DevCatalyst—where curious minds become industry-ready developers through hands-on projects, mentorship, and real-world experience.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0">
              <button className="group px-8 py-4 bg-white text-black rounded-full font-semibold hover:shadow-2xl hover:shadow-white/50 transition-all flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-white/50 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="animate-on-scroll text-center mb-16 opacity-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What is DevCatalyst?</h2>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto">
                A welcoming space for developers of all levels—beginners to advanced—to learn, experiment, and ship ideas together across web, mobile, AI/ML, and cloud technologies.
              </p>
            </div>

            <div className="animate-on-scroll grid md:grid-cols-2 gap-8 opacity-0">
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                <p className="text-slate-200 leading-relaxed">
                  We're a student-led developer community focused on learning-by-building. Our mission is to bring together curious minds to explore modern technologies, collaborate on real projects, and become industry-ready through practice, mentorship, and engaging events.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <h3 className="text-2xl font-bold mb-4 text-white">Who We Are</h3>
                <p className="text-slate-200 leading-relaxed">
                  A diverse community of passionate developers, designers, and tech enthusiasts united by the desire to learn and create. We believe in peer-to-peer learning, practical experience, and building things that matter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workshops Section */}
        <section id="workshops" className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="animate-on-scroll text-center mb-16 opacity-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Join DevCatalyst?</h2>
              <p className="text-xl text-slate-200">More than just a club—it's your launchpad to a successful tech career</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="animate-on-scroll opacity-0 group bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-white/50 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-black">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery/Activities */}
        <section id="gallery" className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="animate-on-scroll text-center mb-16 opacity-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
              <p className="text-xl text-slate-200">Engage in diverse activities designed to accelerate your growth</p>
            </div>

            <div className="animate-on-scroll grid md:grid-cols-2 gap-4 opacity-0">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-white/50 hover:bg-white/10 transition-all">
                  <div className="flex-shrink-0 w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  <p className="text-slate-200">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-on-scroll bg-white/5 backdrop-blur-sm border border-white/30 rounded-3xl p-12 opacity-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl text-slate-200 mb-8">
                Join a community of passionate developers and start building your future today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-white text-black rounded-full font-semibold hover:shadow-2xl hover:shadow-white/50 transition-all flex items-center justify-center space-x-2">
                  <span>Join DevCatalyst</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-white/50 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-white/20 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-2">
                <h3 className="text-2xl font-bold mb-4">DevCatalyst</h3>
                <p className="text-slate-300 max-w-md">
                  Empowering the next generation of developers through collaboration, creativity, and code.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-slate-300">
                  <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#workshops" className="hover:text-white transition-colors">Workshops</a></li>
                  <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Connect</h4>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400"><Github className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-blue-400"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-blue-400"><Linkedin className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 text-center text-slate-400 text-sm">
              © {new Date().getFullYear()} DevCatalyst. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DevCatalystLanding;