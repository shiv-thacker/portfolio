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
      description: 'Luxury real estate concierge app for Dubai residents providing services like valet, laundry, maintenance, restaurant reservations, spa bookings, and 24/7 chat support.',
      tech: ['Flutter', 'Firebase', 'AI Integration', 'Cursor AI', 'Real-time Chat'],
      icon: '🏢',
      status: 'In UAT',
      highlights: ['Built from scratch', 'AI native flow', 'Client collaboration'],
      link: 'https://www.omniyat.com/'
    },
    {
      title: 'Syra Coffee',
      category: 'professional',
      description: 'E-commerce mobile application for coffee products, enabling users to browse, order, and purchase premium coffee products with seamless shopping experience.',
      tech: ['React Native', 'Supabase', 'GraphQL'],
      icon: '☕',
      status: 'Live',
      highlights: ['Team collaboration', 'Already created project & handle it', 'E-commerce app'],
      link: 'https://apps.apple.com/tr/app/syra-coffee/id1609933400'
    },
    {
      title: 'On Target Romance (OTR)',
      category: 'professional',
      description: 'Community & networking platform for romance authors, beta readers, bloggers, and vendors to connect and manage events.',
      tech: ['React Native', 'Braintree', 'Push Notifications', 'Document Picker'],
      icon: '📚',
      status: 'In Development',
      highlights: ['Code restructuring', 'Payment integration', 'Social auth']
    },
    {
      title: 'Primp & Blow',
      category: 'professional',
      description: 'Salon booking app for U.S.-based chain allowing appointment scheduling for blowouts, makeup, and hair extensions.',
      tech: ['React Native', 'Booker.io API', 'Face ID', 'Keychain', 'iOS', 'Android'],
      icon: '💇‍♀️',
      status: 'Live',
      highlights: ['Biometric auth', 'E-commerce integration', 'Cross-platform'],
      link: 'https://apps.apple.com/ca/app/primp-and-blow/id921704948'
    },
    {
      title: 'Jamrio Community App',
      category: 'professional',
      description: 'Social networking platform empowering musicians, photographers, dancers, and artists to connect and showcase talents.',
      tech: ['React Native', 'Redux', 'WebSockets', 'Push Notifications', 'Video Sharing'],
      icon: '🎵',
      status: 'Live',
      highlights: ['Real-time features', 'State management', 'Performance optimization'],
      link: 'https://jamr-production.firebaseapp.com/'
    },
   
    {
      title: 'EVC Finder',
      category: 'personal',
      description: 'Electric vehicle charging station locator app helping EV owners find nearby charging stations.',
      tech: ['React Native', 'Google Maps API', 'Geolocation', 'Firebase'],
      icon: '⚡',
      status: 'Personal Project',
      highlights: ['Maps integration', 'Real-time location'],
      link: 'https://github.com/shiv-thacker/EV-charging-app'
    },
    {
      title: 'Dating Fullstack App',
      category: 'personal',
      description: 'Complete dating application with chat, swipe, like, dislike, and subscription features.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'WebSockets', 'Stripe'],
      icon: '💝',
      status: 'Personal Project',
      highlights: ['Full-stack', 'Real-time chat', 'Payment integration'],
      link: 'https://github.com/shiv-thacker/date'
    },
    {
      title: 'Firebase Chat App',
      category: 'personal',
      description: 'Real-time messaging application with Firebase backend.',
      tech: ['React Native', 'Firebase', 'Real-time Database', 'Authentication'],
      icon: '💬',
      status: 'Personal Project',
      highlights: ['Real-time messaging', 'Firebase integration'],
      link: 'https://github.com/shiv-thacker/firebase_chat_application'
    },
    {
      title: 'Amazon Clone',
      category: 'personal',
      description: 'E-commerce application clone with shopping cart, product listings, and checkout.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      icon: '🛒',
      status: 'Personal Project',
      highlights: ['E-commerce features', 'Payment gateway'],
      link: 'https://github.com/shiv-thacker/e-commers'
    },
    {
      title: 'Social Media App',
      category: 'personal',
      description: 'Full-stack social media platform with post creation, likes, comments, and user profiles.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Redux'],
      icon: '📱',
      status: 'Personal Project',
      highlights: ['Full-stack', 'Social features', 'Cloud storage'],
      link: 'https://github.com/shiv-thacker/socialmedia_frontend'
    },
    {
      title: 'Noise Detector',
      category: 'personal',
      description: 'Environment noise detection and visualization app measuring decibel levels.',
      tech: ['React Native', 'Audio API', 'Data Visualization'],
      icon: '🔊',
      status: 'Personal Project',
      highlights: ['Audio processing', 'Data visualization'],
      link: 'https://github.com/shiv-thacker/Noise_Detector'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="projects">
      <motion.div
        ref={ref}
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Showcase of professional and personal mobile applications
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

