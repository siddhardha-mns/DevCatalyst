import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, Star, ChevronRight, Code, Database, Smartphone, Brain } from 'lucide-react';
import Layout from '../components/common/Layout';

const Workshops = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredWorkshop, setHoveredWorkshop] = useState(null);

  const categories = [
    { id: 'all', name: 'All Workshops', icon: <Star className="w-5 h-5" /> },
    { id: 'web', name: 'Web Development', icon: <Code className="w-5 h-5" /> },
    { id: 'mobile', name: 'Mobile Apps', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'data', name: 'Data Science', icon: <Database className="w-5 h-5" /> },
    { id: 'ai', name: 'AI/ML', icon: <Brain className="w-5 h-5" /> }
  ];

  const workshops = [
    {
      id: 1,
      title: "React Masterclass: Building Modern UIs",
      category: "web",
      level: "Intermediate",
      duration: "3 hours",
      participants: 24,
      date: "Nov 25, 2024",
      time: "2:00 PM - 5:00 PM",
      instructor: "Sarah Chen",
      description: "Deep dive into React hooks, context, and modern patterns for building scalable applications.",
      tags: ["React", "JavaScript", "Frontend"],
      image: "🚀",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Full-Stack App with Node.js & PostgreSQL",
      category: "web",
      level: "Advanced",
      duration: "4 hours",
      participants: 18,
      date: "Nov 28, 2024",
      time: "10:00 AM - 2:00 PM",
      instructor: "Mike Rodriguez",
      description: "Build a complete REST API with authentication, database design, and deployment strategies.",
      tags: ["Node.js", "PostgreSQL", "API Design"],
      image: "⚡",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Flutter Mobile Development Bootcamp",
      category: "mobile",
      level: "Beginner",
      duration: "5 hours",
      participants: 30,
      date: "Dec 2, 2024",
      time: "9:00 AM - 2:00 PM",
      instructor: "Alex Kim",
      description: "Create beautiful cross-platform mobile apps with Flutter and Dart programming language.",
      tags: ["Flutter", "Dart", "Mobile"],
      image: "📱",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Machine Learning with Python",
      category: "ai",
      level: "Intermediate",
      duration: "6 hours",
      participants: 20,
      date: "Dec 5, 2024",
      time: "10:00 AM - 4:00 PM",
      instructor: "Dr. Lisa Wang",
      description: "Hands-on introduction to ML algorithms, data preprocessing, and model deployment.",
      tags: ["Python", "Scikit-learn", "TensorFlow"],
      image: "🧠",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Data Analysis with SQL & Python",
      category: "data",
      level: "Beginner",
      duration: "4 hours",
      participants: 25,
      date: "Dec 8, 2024",
      time: "1:00 PM - 5:00 PM",
      instructor: "John Martinez",
      description: "Learn to extract insights from data using SQL queries and Python data analysis libraries.",
      tags: ["SQL", "Pandas", "Data Visualization"],
      image: "📊",
      color: "from-teal-500 to-blue-500"
    },
    {
      id: 6,
      title: "DevOps Fundamentals: Docker & CI/CD",
      category: "web",
      level: "Advanced",
      duration: "3.5 hours",
      participants: 15,
      date: "Dec 12, 2024",
      time: "3:00 PM - 6:30 PM",
      instructor: "Emma Thompson",
      description: "Master containerization and continuous deployment for modern development workflows.",
      tags: ["Docker", "GitHub Actions", "AWS"],
      image: "🐳",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const filteredWorkshops = selectedCategory === 'all' 
    ? workshops 
    : workshops.filter(workshop => workshop.category === selectedCategory);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div 
          className="max-w-6xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/30 rounded-full text-white text-lg font-medium backdrop-blur-sm">
              🎯 Learn by Doing
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{ textShadow: '0 0 30px rgba(255,255,255,0.3)' }}
          >
            Interactive Workshops
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
              That Transform Skills
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Dive deep into cutting-edge technologies with hands-on workshops led by industry experts. Build real projects, gain practical skills, and accelerate your development journey.
          </motion.p>

          {/* Quick Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { number: "25+", label: "Workshops" },
              { number: "500+", label: "Students Trained" },
              { number: "4.8★", label: "Average Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-2xl md:text-3xl font-bold text-white mb-1"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(147,51,234,0.5)",
                      "0 0 20px rgba(219,39,119,0.5)",
                      "0 0 10px rgba(147,51,234,0.5)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronRight className="w-6 h-6 text-white/60 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Workshops Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-white text-black shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                {category.icon}
                <span>{category.name}</span>
                {selectedCategory === category.id && (
                  <motion.div
                    className="w-2 h-2 bg-blue-500 rounded-full"
                    layoutId="activeCategory"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Workshops Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredWorkshops.map((workshop, index) => (
                <motion.div
                  key={workshop.id}
                  className={`group relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden hover:border-white/40 transition-all duration-500 cursor-pointer`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onHoverStart={() => setHoveredWorkshop(workshop.id)}
                  onHoverEnd={() => setHoveredWorkshop(null)}
                >
                  {/* Workshop Header */}
                  <div className={`h-32 bg-gradient-to-r ${workshop.color} relative overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center text-6xl"
                      animate={hoveredWorkshop === workshop.id ? { scale: 1.2, rotate: 360 } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      {workshop.image}
                    </motion.div>
                    
                    {/* Animated particles */}
                    {hoveredWorkshop === workshop.id && (
                      <div className="absolute inset-0">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              delay: i * 0.1,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Workshop Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(workshop.level)}`}>
                        {workshop.level}
                      </span>
                      <div className="flex items-center space-x-1 text-slate-400 text-sm">
                        <Users className="w-4 h-4" />
                        <span>{workshop.participants}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {workshop.title}
                    </h3>

                    <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                      {workshop.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {workshop.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-lg"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Workshop Details */}
                    <div className="space-y-2 text-sm text-slate-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{workshop.time} ({workshop.duration})</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4" />
                        <span>Instructor: {workshop.instructor}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <motion.button
                      className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 group-hover:from-blue-400 group-hover:to-purple-500 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Register Now</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-white">Can't Find What You're Looking For?</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Have a specific topic in mind? We regularly add new workshops based on community interest. 
                Suggest a workshop and we'll make it happen!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-white text-black rounded-full font-semibold"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Suggest a Workshop
                </motion.button>
                <motion.button
                  className="px-8 py-4 border-2 border-white/50 text-white rounded-full font-semibold"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Past Workshops
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Workshops;