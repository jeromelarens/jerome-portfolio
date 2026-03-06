import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Custom Icon Components (No external library needed)
const Icons = {
  Github: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  
  Linkedin: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  
  Mail: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  
  ExternalLink: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  
  Code2: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  
  Database: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  
  Server: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  
  Terminal: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  
  Zap: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  
  Globe: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  
  ChevronDown: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  
  Send: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  
  Menu: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  
  X: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  
  Star: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  
  Award: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  
  Cpu: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  
  Layers: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  
  GitBranch: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="6" y1="3" x2="6" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  ),
  
  Layout: ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  )
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' }
  ];

  const techStack = [
    { name: 'MongoDB', icon: Icons.Database, color: 'from-green-400 to-green-600', category: 'Database' },
    { name: 'Express.js', icon: Icons.Server, color: 'from-gray-400 to-gray-600', category: 'Backend' },
    { name: 'React.js', icon: Icons.Code2, color: 'from-blue-400 to-cyan-400', category: 'Frontend' },
    { name: 'Node.js', icon: Icons.Terminal, color: 'from-green-500 to-emerald-600', category: 'Backend' },
    { name: 'JavaScript', icon: Icons.Zap, color: 'from-yellow-400 to-orange-500', category: 'Language' },
    { name: 'HTML/CSS', icon: Icons.Layout, color: 'from-orange-400 to-red-500', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: Icons.Layers, color: 'from-cyan-400 to-blue-500', category: 'Styling' },
    { name: 'REST APIs', icon: Icons.Globe, color: 'from-purple-400 to-indigo-500', category: 'API' },
    { name: 'Git & GitHub', icon: Icons.GitBranch, color: 'from-orange-500 to-pink-500', category: 'Tools' },
    { name: 'Postman', icon: Icons.Terminal, color: 'from-orange-400 to-red-500', category: 'Tools' }
  ];

  const projects = [
    {
      title: "AI-Powered Interview Intelligence & Evaluation System",
      description: "An intelligent technical interview evaluation system that analyzes candidate reasoning, detects problem-solving patterns, and generates recruiter-level hiring insights with dynamic follow-up questions and PDF reporting.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API", "JWT", "Tailwind CSS"],
      github: "https://github.com/jeromelarens",
      demo: "#",
      image: "bg-gradient-to-br from-purple-600/20 to-blue-600/20",
      featured: true
    },
    {
      title: "AI-Powered Multi-Modal Content Authenticity Detection",
      description: "Detects and analyzes potentially manipulated or AI-generated text, images, and video content using Hugging Face Transformers with weighted fusion logic for risk scoring and comprehensive analysis dashboards.",
      tech: ["React.js", "Node.js", "MongoDB", "Hugging Face", "Chart.js", "JWT", "Multer"],
      github: "https://github.com/jeromelarens",
      demo: "#",
      image: "bg-gradient-to-br from-emerald-600/20 to-teal-600/20",
      featured: true
    }
  ];

  const milestones = [
    
    {
      year: "2025",
      title: "Full Stack Development",
      description: "Built complete MERN stack applications with authentication and REST APIs",
      icon: Icons.Layers
    },
    {
      year: "2024",
      title: "Backend Architecture",
      description: "Learned Node.js, Express.js, and database design principles",
      icon: Icons.Server
    },
    {
      year: "2024",
      title: "Journey Began",
      description: "Started programming journey with HTML, CSS, and JavaScript fundamentals",
      icon: Icons.Code2
    }
  ];

  const achievements = [
    { icon: Icons.Star, value: "500+", label: "Coding Hours", color: "text-yellow-400" },
    { icon: Icons.Award, value: "2", label: "AI Projects", color: "text-purple-400" },
    { icon: Icons.Zap, value: "100%", label: "Commitment", color: "text-cyan-400" },
    { icon: Icons.Globe, value: "Fresher", label: "Open to Work", color: "text-emerald-400" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans selection:bg-violet-500/30 selection:text-white overflow-x-hidden">
      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        .text-gradient {
          background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .glass-strong {
          background: rgba(139, 92, 246, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.2);
        }
        
        .grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 40px 40px;
        }
        
        .hover-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -15px rgba(139, 92, 246, 0.3);
        }
      `}</style>

      {/* Animated Background Gradient */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`
        }}
      />

      

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-b from-violet-900/20 via-transparent to-transparent"
        />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-violet-600/30 blur-[120px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-indigo-600/30 blur-[100px]" 
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-8 text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm text-violet-200 font-medium">Fresher - Open to Work</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block text-white">Hi, I'm</span>
                <span className="block text-gradient mt-2">JeromeLarens</span>
              </motion.h1>

              <motion.div variants={fadeInUp} className="space-y-4">
                <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                  Full Stack <span className="text-violet-400 font-semibold">MERN Developer</span>
                </h2>
                <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                  I build <span className="text-white font-medium">scalable web applications</span> and 
                  <span className="text-white font-medium"> AI-powered tools</span> that solve real-world problems. 
                  Passionate about clean code, system architecture, and creating exceptional user experiences.
                  <br /><br />
                  <span className="text-violet-400">Seeking MERN Stack opportunities in Chennai.</span>
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-violet-500/25 transition-all"
                >
                  View Projects
                  <Icons.ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl glass text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all border border-white/10"
                >
                  <Icons.Mail size={18} />
                  Contact Me
                </motion.a>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 justify-center lg:justify-start pt-4">
                {['React', 'Node.js', 'MongoDB', 'AI Integration'].map((tech) => (
                  <span key={tech} className="px-4 py-1.5 rounded-full text-sm font-mono text-violet-200 bg-violet-500/10 border border-violet-500/20">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="glass-strong rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-4 text-sm text-gray-500 font-mono">developer.js</span>
                  </div>
                  <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
                    <code className="text-gray-300">
                      <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}
                      {'\n'}  <span className="text-sky-300">name</span>: <span className="text-green-400">'A. Jerome Larens'</span>,
                      {'\n'}  <span className="text-sky-300">role</span>: <span className="text-green-400">'MERN Stack Developer'</span>,
                      {'\n'}  <span className="text-sky-300">education</span>: <span className="text-green-400">'BE.CSE (2026)'</span>,
                      {'\n'}  <span className="text-sky-300">location</span>: <span className="text-green-400">'Chennai'</span>,
                      {'\n'}  <span className="text-sky-300">experience</span>: <span className="text-green-400">'Fresher'</span>,
                      {'\n'}  <span className="text-sky-300">available</span>: <span className="text-orange-400">true</span>
                      {'\n'}{'}'};
                      {'\n'}
                      {'\n'}<span className="text-purple-400">export default</span> developer;
                    </code>
                  </pre>
                </div>
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 glass-strong px-6 py-3 rounded-xl border border-violet-500/30"
                >
                  <div className="flex items-center gap-2">
                    <Icons.Zap className="w-5 h-5 text-yellow-400" />
                    <span className="font-mono text-sm text-violet-200">Open to Work</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div style={{ opacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <Icons.ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl glass-strong p-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 group-hover:opacity-75 transition-opacity" />
                <div className="w-full h-full rounded-2xl bg-[#0a0a1a] flex items-center justify-center relative overflow-hidden">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-4xl font-bold shadow-2xl shadow-violet-500/40">
                      JL
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">A. Jerome Larens</h3>
                      <p className="text-violet-400 font-mono">MERN Stack Developer</p>
                      <p className="text-gray-500 text-sm mt-2">BE.CSE | 2026</p>
                    </div>
                  </div>
                  <div className="absolute top-8 left-8 space-y-2 opacity-30">
                    <div className="h-2 w-20 bg-violet-500 rounded-full" />
                    <div className="h-2 w-32 bg-indigo-500 rounded-full" />
                    <div className="h-2 w-16 bg-purple-500 rounded-full" />
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -bottom-6 -right-6 glass-strong px-6 py-4 rounded-2xl border border-violet-500/30"
              >
                <div className="text-3xl font-bold text-gradient">Fresher</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Open to Work</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <span className="text-violet-400 font-mono text-sm uppercase tracking-widest">About Me</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
                  Crafting Digital <span className="text-gradient">Excellence</span>
                </h2>
              </div>

              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p className="text-lg">
                  I'm <span className="text-white">A. Jerome Larens</span>, a passionate Full Stack Developer specializing in the MERN stack. Currently pursuing <span className="text-white">BE.CSE at St. Michael College of Engineering and Technology</span> (Class of 2026).
                </p>
                <p>
                  I specialize in building <span className="text-white">AI-powered web applications</span> that solve real-world problems. My expertise includes integrating OpenAI APIs, designing RESTful architectures, and creating responsive user interfaces with React and Tailwind CSS.
                </p>
                <p>
                  While I have <span className="text-white">no industry experience</span>, I've developed production-ready academic projects demonstrating full-stack capabilities, AI integration, and system design skills. I'm actively seeking <span className="text-violet-400">MERN Stack Developer opportunities in Chennai</span>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {['Problem Solving', 'System Architecture', 'API Design', 'AI Integration'].map((strength, i) => (
                  <motion.div
                    key={strength}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    {strength}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-violet-400 font-mono text-sm uppercase tracking-widest">Tech Stack</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              Technologies I <span className="text-gradient">Master</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Modern tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 rounded-2xl glass hover-card cursor-pointer"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative flex flex-col items-center text-center space-y-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${tech.color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{tech.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{tech.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-violet-400 font-mono text-sm uppercase tracking-widest">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              Projects That <span className="text-gradient">Stand Out</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Academic projects demonstrating full-stack and AI integration capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden hover-card"
              >
                <div className={`absolute inset-0 ${project.image} opacity-50`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
                
                <div className="relative p-8 h-full flex flex-col justify-end min-h-[400px]">
                  <span className="absolute top-6 right-6 px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-medium border border-violet-500/30">
                    Featured Project
                  </span>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full text-xs font-mono text-violet-200 bg-violet-500/10 border border-violet-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-white text-sm hover:bg-white/10 transition-all"
                      >
                        <Icons.Github size={16} />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm hover:shadow-lg hover:shadow-violet-500/25 transition-all"
                      >
                        <Icons.ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="relative py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-violet-400 font-mono text-sm uppercase tracking-widest">My Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              Learning <span className="text-gradient">Timeline</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-indigo-500/50 to-transparent" />
            
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex items-center gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-strong p-6 rounded-2xl hover-card border border-violet-500/20">
                    <span className="text-violet-400 font-mono text-sm">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{milestone.title}</h3>
                    <p className="text-gray-400 mt-2 text-sm">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                  <milestone.icon size={16} className="text-white" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-indigo-900/20 to-violet-900/20" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {achievements.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="glass-strong p-6 rounded-2xl text-center border border-violet-500/20"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-violet-400 font-mono text-sm uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              Let's Build <span className="text-gradient">Together</span>
            </h2>
            <p className="text-gray-400 mt-4">
              Seeking MERN Stack Developer opportunities in Chennai. Open to work immediately.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-strong p-6 rounded-2xl border border-violet-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:jeromelarens7@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-violet-400 transition-colors">
                    <Icons.Mail className="w-5 h-5" />
                    jeromelarens7@gmail.com
                  </a>
                  <a href="tel:6379623208" className="flex items-center gap-3 text-gray-400 hover:text-violet-400 transition-colors">
                    <Icons.Terminal className="w-5 h-5" />
                    +91 6379623208
                  </a>
                  <a href="https://github.com/jeromelarens" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-violet-400 transition-colors">
                    <Icons.Github className="w-5 h-5" />
                    github.com/jeromelarens
                  </a>
                  <a href="https://www.linkedin.com/in/jerome-larens-5b244b3a9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-violet-400 transition-colors">
                    <Icons.Linkedin className="w-5 h-5" />
                    linkedin.com/in/jerome-larens
                  </a>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-2">Current Status</h3>
                <p className="text-gray-400 text-sm">
                  BE.CSE Student (2026) at St. Michael College of Engineering and Technology. 
                  No industry experience, but strong academic project portfolio. 
                  Seeking <span className="text-violet-400">MERN Stack Developer</span> roles in <span className="text-violet-400">Chennai</span>.
                  Available immediately.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="glass-strong p-8 rounded-2xl border border-violet-500/20 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-violet-500/25 transition-all"
                >
                  <Icons.Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;