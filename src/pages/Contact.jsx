import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Github, Twitter, Linkedin, Send, CheckCircle } from 'lucide-react';
import Layout from '../components/common/Layout';
import { StarsCanvas } from '../components/ui/stars-canvas';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@devcatalyst.dev",
      action: "mailto:hello@devcatalyst.dev",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available 24/7",
      action: "#",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak directly with us",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      description: "Come to our office",
      contact: "123 Tech Street, Silicon Valley",
      action: "https://maps.google.com",
      color: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, name: "GitHub", url: "https://github.com" },
    { icon: <Twitter className="w-6 h-6" />, name: "Twitter", url: "https://twitter.com" },
    { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", url: "https://linkedin.com" }
  ];

  const faqs = [
    {
      question: "How can I join DevCatalyst?",
      answer: "Simply fill out our contact form or join one of our upcoming workshops. We welcome developers of all skill levels!"
    },
    {
      question: "Are your workshops free?",
      answer: "Most of our workshops are free for community members. Some advanced workshops may have a small fee to cover materials."
    },
    {
      question: "Can I propose a workshop topic?",
      answer: "Absolutely! We love hearing from our community. Submit your ideas through our contact form and we'll consider them for future sessions."
    },
    {
      question: "Do you offer mentorship programs?",
      answer: "Yes, we have both peer-to-peer mentorship and connections with industry professionals. Reach out to learn more!"
    }
  ];

  return (
    <Layout>
      {/* Stars Background */}
      <StarsCanvas 
        transparent={false}
        maxStars={500}
        hue={120}
        brightness={0.5}
        speedMultiplier={0.6}
        twinkleIntensity={35}
        className="z-0"
      />
      
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
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-white/30 rounded-full text-white text-lg font-medium backdrop-blur-sm">
              📞 Get In Touch
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{ textShadow: '0 0 30px rgba(255,255,255,0.3)' }}
          >
            Let's Connect
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent block">
              and Build Together
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Have questions, ideas, or want to join our community? We'd love to hear from you. 
            Reach out through any of the channels below, and let's start building something amazing together.
          </motion.p>

          {/* Animated Contact Methods Preview */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-white`}
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(0,0,0,0.3)",
                      "0 0 30px rgba(255,255,255,0.2)",
                      "0 0 20px rgba(0,0,0,0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {method.icon}
                </motion.div>
                <h3 className="font-semibold text-white text-sm">{method.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Methods Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-slate-200">Choose the method that works best for you</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-500 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-white`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {method.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {method.title}
                </h3>
                <p className="text-slate-300 mb-4">{method.description}</p>
                <p className="text-blue-400 font-medium">{method.contact}</p>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                />
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white">Send us a Message</h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-white font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                        placeholder="Your full name"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-white font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-white font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                      placeholder="What's this about?"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all resize-none"
                      placeholder="Tell us more about your message..."
                    />
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl font-semibold transition-all ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-green-400 hover:to-blue-500'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  className="text-center py-12"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                >
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white mb-4">Message Sent!</h4>
                  <p className="text-slate-300">Thanks for reaching out. We'll get back to you soon!</p>
                </motion.div>
              )}
            </motion.div>

            {/* Info & FAQ */}
            <div className="space-y-8">
              {/* Social Links */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Connect With Us</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all"
                      whileHover={{ scale: 1.02, x: 5 }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                        {social.icon}
                      </div>
                      <span className="text-white font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      className="border-b border-white/10 pb-4 last:border-b-0"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-semibold text-white mb-2">{faq.question}</h4>
                      <p className="text-slate-300 text-sm">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;