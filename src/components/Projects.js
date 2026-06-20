import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMobileAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'OMNIYAT Concierge App',
      category: 'professional',
      description:
        'Luxury real estate concierge app for Dubai residents — valet, laundry, maintenance, restaurant and spa bookings, billing, and 24/7 chat support.',
      tech: ['Flutter', 'Firebase', 'Real-time Chat', 'REST APIs'],
      icon: '🏢',
      status: 'In UAT',
      highlights: ['Built from scratch', 'Sole mobile developer', 'Client-facing delivery'],
      link: 'https://www.omniyat.com/',
    },
    {
      title: 'Primp & Blow',
      category: 'professional',
      description:
        'Salon booking app for a U.S.-based chain — appointment scheduling for blowouts, makeup, and hair extensions.',
      tech: ['React Native', 'Booker.io API', 'Face ID', 'Keychain', 'iOS', 'Android'],
      icon: '💇‍♀️',
      status: 'Live',
      highlights: ['App Store & Play Store', 'Biometric auth', 'Payment integration'],
      link: 'https://apps.apple.com/ca/app/primp-and-blow/id921704948',
    },
    {
      title: 'Syra Coffee',
      category: 'professional',
      description:
        'E-commerce app for premium coffee — product catalog, cart, checkout, and order management.',
      tech: ['React Native', 'Supabase', 'GraphQL'],
      icon: '☕',
      status: 'Live',
      highlights: ['Production maintenance', 'Supabase & GraphQL', 'E-commerce flows'],
      link: 'https://apps.apple.com/tr/app/syra-coffee/id1609933400',
    },
    {
      title: 'On Target Romance (OTR)',
      category: 'professional',
      description:
        'Community platform for romance authors, beta readers, bloggers, and vendors to connect and manage events.',
      tech: ['React Native', 'Braintree', 'Push Notifications', 'Social Auth'],
      icon: '📚',
      status: 'In Development',
      highlights: ['Legacy refactor', 'Payment integration', 'Push notifications'],
    },
    {
      title: 'Jamrio Community App',
      category: 'professional',
      description:
        'Social networking app for musicians, photographers, dancers, and artists to share content and grow their audience.',
      tech: ['React Native', 'Redux', 'WebSockets', 'Push Notifications'],
      icon: '🎵',
      status: 'Live',
      highlights: ['Real-time features', 'Redux state management', 'Performance optimization'],
      link: 'https://jamr-production.firebaseapp.com/',
    },
    {
      title: 'EVC Finder',
      category: 'personal',
      description:
        'EV charging station locator helping owners find nearby stations with maps and geolocation.',
      tech: ['React Native', 'Google Maps API', 'Geolocation', 'Firebase'],
      icon: '⚡',
      status: 'Personal Project',
      highlights: ['Maps integration', 'Real-time location', 'Firebase backend'],
      link: 'https://github.com/shiv-thacker/EV-charging-app',
    },
    {
      title: 'Social Media App',
      category: 'personal',
      description:
        'Full-stack social platform with post creation, likes, comments, and user profiles.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Redux'],
      icon: '📱',
      status: 'Personal Project',
      highlights: ['Full-stack', 'AWS media storage', 'Social features'],
      link: 'https://github.com/shiv-thacker/socialmedia_frontend',
    },
    {
      title: 'Amazon Clone',
      category: 'personal',
      description:
        'E-commerce app with product listings, shopping cart, and Stripe checkout.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      icon: '🛒',
      status: 'Personal Project',
      highlights: ['E-commerce flows', 'Stripe payments', 'Redux state'],
      link: 'https://github.com/shiv-thacker/e-commers',
    },
    {
      title: 'Firebase Chat App',
      category: 'personal',
      description: 'Real-time messaging app with Firebase authentication and database.',
      tech: ['React Native', 'Firebase', 'Real-time Database', 'Authentication'],
      icon: '💬',
      status: 'Personal Project',
      highlights: ['Real-time messaging', 'Firebase auth', 'Chat UI'],
      link: 'https://github.com/shiv-thacker/firebase_chat_application',
    },
    {
      title: 'Noise Detector',
      category: 'personal',
      description:
        'Environment noise detection app measuring and visualizing decibel levels.',
      tech: ['React Native', 'Audio API', 'Data Visualization'],
      icon: '🔊',
      status: 'Personal Project',
      highlights: ['Audio processing', 'Decibel measurement', 'Data visualization'],
      link: 'https://github.com/shiv-thacker/Noise_Detector',
    },
    {
      title: 'Dating Fullstack App',
      category: 'personal',
      description:
        'Full-stack matching app with chat, swipe interactions, and subscription billing.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'WebSockets', 'Stripe'],
      icon: '💝',
      status: 'Personal Project',
      highlights: ['Full-stack', 'Real-time chat', 'Stripe subscriptions'],
      link: 'https://github.com/shiv-thacker/date',
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="projects">
      <motion.div
        ref={ref}
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Production apps and personal projects — React Native & Flutter
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="filter-buttons">
          <motion.button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Projects
          </motion.button>
          <motion.button
            className={`filter-btn ${filter === 'professional' ? 'active' : ''}`}
            onClick={() => setFilter('professional')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Professional
          </motion.button>
          <motion.button
            className={`filter-btn ${filter === 'personal' ? 'active' : ''}`}
            onClick={() => setFilter('personal')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Personal
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="project-card"
                whileHover={{ y: -10, scale: 1.02 }}
                layout
              >
                <div className="project-header">
                  <div className="project-icon">{project.icon}</div>
                  <span className="project-status">{project.status}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <span key={i} className="highlight-badge">
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  {project.link ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaMobileAlt /> View Details
                    </motion.a>
                  ) : (
                    <motion.button
                      className="project-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaMobileAlt /> View Details
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
