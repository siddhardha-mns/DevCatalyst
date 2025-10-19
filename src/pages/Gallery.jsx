import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Play, Image as ImageIcon, Calendar, Users } from 'lucide-react';
import Layout from '../components/common/Layout';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'hackathon', name: 'Hackathons' }
  ];

  const projects = [
    {
      id: 1,
      title: "EcoTracker - Sustainability Dashboard",
      category: "web",
      type: "Web Application",
      description: "A comprehensive dashboard for tracking personal and corporate carbon footprint with real-time analytics and goal setting.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      team: ["Alex Chen", "Sarah Kim", "Mike Rodriguez"],
      date: "October 2024",
      github: "https://github.com/devcatalyst/ecotracker",
      demo: "https://ecotracker-demo.vercel.app",
      image: "🌱",
      color: "from-green-500 to-emerald-600",
      featured: true
    },
    {
      id: 2,
      title: "StudyBuddy - AI Study Companion",
      category: "ai",
      type: "AI Application",
      description: "An intelligent study companion that generates personalized quizzes, summaries, and study schedules using natural language processing.",
      technologies: ["Python", "OpenAI API", "Flask", "React", "SQLite"],
      team: ["Dr. Lisa Wang", "Emma Thompson", "John Martinez"],
      date: "September 2024",
      github: "https://github.com/devcatalyst/studybuddy",
      demo: "https://studybuddy-ai.herokuapp.com",
      image: "🤖",
      color: "from-purple-500 to-indigo-600",
      featured: true
    },
    {
      id: 3,
      title: "LocalConnect - Community Marketplace",
      category: "mobile",
      type: "Mobile Application",
      description: "A Flutter app connecting local businesses with community members, featuring real-time chat, location services, and payment integration.",
      technologies: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
      team: ["Alex Kim", "Rachel Park", "David Liu"],
      date: "August 2024",
      github: "https://github.com/devcatalyst/localconnect",
      demo: "https://localconnect.app",
      image: "📱",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 4,
      title: "CodeCollab - Real-time Coding Platform",
      category: "web",
      type: "Collaborative Tool",
      description: "A real-time collaborative coding environment with video chat, code sharing, and integrated version control.",
      technologies: ["React", "Socket.io", "Monaco Editor", "WebRTC"],
      team: ["Mike Rodriguez", "Sarah Kim", "Tom Wilson"],
      date: "July 2024",
      github: "https://github.com/devcatalyst/codecollab",
      demo: "https://codecollab-live.netlify.app",
      image: "👥",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "HealthTracker Pro",
      category: "mobile",
      type: "Health & Fitness",
      description: "Comprehensive health tracking app with wearable integration, ML-powered insights, and personalized recommendations.",
      technologies: ["React Native", "TensorFlow Lite", "HealthKit", "Firebase"],
      team: ["Emma Thompson", "Dr. Lisa Wang", "Alex Chen"],
      date: "June 2024",
      github: "https://github.com/devcatalyst/healthtracker",
      demo: "https://healthtracker-pro.app",
      image: "💪",
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 6,
      title: "EventHub - Campus Events Manager",
      category: "hackathon",
      type: "Hackathon Winner",
      description: "Winner of University Hackathon 2024. A platform for managing and discovering campus events with social features and real-time updates.",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io"],
      team: ["John Martinez", "Rachel Park", "Tom Wilson"],
      date: "May 2024",
      github: "https://github.com/devcatalyst/eventhub",
      demo: "https://eventhub-campus.vercel.app",
      image: "🎉",
      color: "from-yellow-500 to-orange-600",
      award: "🏆 1st Place Winner"
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

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
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-white/30 rounded-full text-white text-lg font-medium backdrop-blur-sm">
              🎨 Our Creations
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{ textShadow: '0 0 30px rgba(255,255,255,0.3)' }}
          >
            Project Gallery
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block">
              Innovation in Action
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Explore the amazing projects built by our community members. From web applications to mobile apps, AI solutions to hackathon winners—see what's possible when creativity meets code.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { number: "50+", label: "Projects Built" },
              { number: "200+", label: "Contributors" },
              { number: "15+", label: "Awards Won" }
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
                      "0 0 10px rgba(6,182,212,0.5)",
                      "0 0 20px rgba(59,130,246,0.5)",
                      "0 0 10px rgba(6,182,212,0.5)"
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
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? 'bg-white text-black shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
                onClick={() => setSelectedFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                {filter.name}
                {selectedFilter === filter.id && (
                  <motion.div
                    className="w-2 h-2 bg-blue-500 rounded-full ml-2 inline-block"
                    layoutId="activeFilter"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedFilter}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden hover:border-white/40 transition-all duration-500 cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Header */}
                  <div className={`h-40 bg-gradient-to-r ${project.color} relative overflow-hidden flex items-center justify-center`}>
                    <motion.div
                      className="text-6xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.image}
                    </motion.div>
                    
                    {/* Featured badge */}
                    {project.featured && (
                      <motion.div
                        className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                      >
                        ⭐ FEATURED
                      </motion.div>
                    )}

                    {/* Award badge */}
                    {project.award && (
                      <motion.div
                        className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                      >
                        {project.award}
                      </motion.div>
                    )}

                    {/* Animated background pattern */}
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 40% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                      }}
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%']
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                        {project.type}
                      </span>
                      <span className="text-slate-400 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-lg"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-lg">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Team */}
                    <div className="flex items-center text-sm text-slate-400 mb-4">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{project.team.join(', ')}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.button
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </motion.button>
                      <motion.button
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demo, '_blank');
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
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
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-white">Ready to Build Something Amazing?</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Join our community and start working on your next big project. Get mentorship, collaborate with peers, 
                and showcase your work to the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-white text-black rounded-full font-semibold"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                </motion.button>
                <motion.button
                  className="px-8 py-4 border-2 border-white/50 text-white rounded-full font-semibold"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse All Projects
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-48 bg-gradient-to-r ${selectedProject.color} relative flex items-center justify-center`}>
                <div className="text-8xl">{selectedProject.image}</div>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-white">{selectedProject.title}</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">{selectedProject.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-white/10 text-slate-300 text-sm rounded-lg">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Team</h4>
                    <div className="space-y-1">
                      {selectedProject.team.map((member, index) => (
                        <div key={index} className="text-slate-300 text-sm">{member}</div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <motion.button
                    className="flex items-center space-x-2 px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => window.open(selectedProject.github, '_blank')}
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.button>
                  <motion.button
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => window.open(selectedProject.demo, '_blank')}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;