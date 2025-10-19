import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Award, Sparkles, Target, Heart, Lightbulb } from 'lucide-react';
import Layout from '../components/common/Layout';

const About = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission-Driven",
      description: "We're committed to empowering developers through practical learning and real-world experience."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community First",
      description: "Building a supportive environment where everyone can grow together and help each other succeed."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Focus",
      description: "Encouraging creative thinking and cutting-edge solutions to modern development challenges."
    }
  ];

  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Projects Built" },
    { number: "25+", label: "Workshops Conducted" },
    { number: "98%", label: "Job Placement Rate" }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      image: "/api/placeholder/150/150",
      bio: "Full-stack developer with 5+ years experience in building scalable applications."
    },
    {
      name: "Sarah Kim",
      role: "Head of Community",
      image: "/api/placeholder/150/150",
      bio: "Community builder passionate about creating inclusive tech environments."
    },
    {
      name: "Mike Rodriguez",
      role: "Technical Lead",
      image: "/api/placeholder/150/150",
      bio: "Senior engineer specializing in modern web technologies and mentorship."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div 
          className="max-w-6xl mx-auto text-center relative z-10"
          style={{ y: y1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/30 rounded-full text-white text-lg font-medium backdrop-blur-sm">
              ✨ About DevCatalyst
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            style={{ textShadow: '0 0 30px rgba(255,255,255,0.3)' }}
          >
            Empowering the Next Generation
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              of Developers
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            We're more than just a community—we're a catalyst for transformation. DevCatalyst brings together passionate developers, innovative thinkers, and industry mentors to create something extraordinary.
          </motion.p>

          {/* Animated stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(59,130,246,0.5)",
                      "0 0 20px rgba(147,51,234,0.5)",
                      "0 0 10px rgba(59,130,246,0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-slate-300 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Background animations */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: y2 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2
              }}
            />
          ))}
        </motion.div>
      </section>

      {/* Our Values Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our community culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-500"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.02, 
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)" 
                }}
                viewport={{ once: true }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-white">{value.icon}</div>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-white text-center">{value.title}</h3>
                <p className="text-slate-300 text-center leading-relaxed">{value.description}</p>
                
                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ transform: "translateZ(-1px)" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-slate-200 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  DevCatalyst was born from a simple observation: the gap between what students learn in classrooms and what they need to succeed in the real world.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Founded by a group of passionate developers who experienced this challenge firsthand, we set out to create a community where learning happens through building, mentorship comes naturally, and everyone has the opportunity to grow.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Today, we're proud to be a thriving community of developers, designers, and tech enthusiasts who believe in the power of collaboration and hands-on learning.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-full h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated elements inside the image placeholder */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/50 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
                <div className="text-6xl opacity-20">📸</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-slate-200">The passionate individuals driving our mission forward</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative w-48 h-48 mx-auto mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center text-6xl">
                    👤
                  </div>
                  
                  {/* Animated ring around avatar */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold mb-2 text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  className="text-blue-400 font-medium mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  {member.role}
                </motion.p>
                <motion.p 
                  className="text-slate-300 text-sm leading-relaxed"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {member.bio}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;