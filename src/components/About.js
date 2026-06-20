import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { number: '5+', label: 'Production Apps' },
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '2', label: 'Interns Mentored' },
  ];

  return (
    <section id="about" className="about">
      <motion.div
        ref={ref}
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2 className="section-title">Profile Summary</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div variants={itemVariants} className="about-content">
          <div className="about-text">
            <p className="about-description">
              <motion.span
                initial={{ backgroundPosition: '0%' }}
                animate={{ backgroundPosition: '100%' }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                className="highlight"
              >
                Mobile Application Developer
              </motion.span>{' '}
              with 2+ years of experience building and shipping cross-platform apps
              in React Native and Flutter for clients in India, the U.S., and the UAE.
            </p>
            <p className="about-description">
              Experienced in <strong>Agile/Scrum</strong>, end-to-end mobile delivery,
              and client collaboration. Published apps on the App Store and Play Store.
              <strong> Mentor to 2 interns</strong>, including one who built a full
              AI-based OCR mobile application. Recognized with the{' '}
              <strong>Extra Mile Award 2025</strong> at Uncanny Consulting Services LLP.
            </p>
          </div>

          <motion.div 
            variants={itemVariants}
            className="achievement-badge"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="achievement-icon-wrapper">
              <FaTrophy className="achievement-trophy-icon" />
            </div>
            <div className="achievement-content-wrapper">
              <h3 className="achievement-title">Extra Mile Award 2025</h3>
              <p className="achievement-company">Uncanny Consulting Services LLP</p>
              <p className="achievement-description">
                Certificate of Appreciation for exceptional dedication, proactive effort, 
                and consistently going above and beyond expectations.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="about-stats"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="stat-card"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 15px 40px rgba(74, 158, 255, 0.3)',
                  y: -5
                }}
              >
                <motion.div 
                  className="stat-number"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.2, type: 'spring', stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="about-highlights">
          <motion.div
            className="highlight-card"
            whileHover={{ scale: 1.02, x: 10 }}
          >
            <div className="highlight-icon">⚛️</div>
            <div className="highlight-text">
              <h3>React Native</h3>
              <p>Cross-platform mobile apps with production store releases</p>
            </div>
          </motion.div>

          <motion.div
            className="highlight-card"
            whileHover={{ scale: 1.02, x: 10 }}
          >
            <div className="highlight-icon">💙</div>
            <div className="highlight-text">
              <h3>Flutter</h3>
              <p>Native-performance apps built from scratch for iOS and Android</p>
            </div>
          </motion.div>

          <motion.div
            className="highlight-card"
            whileHover={{ scale: 1.02, x: 10 }}
          >
            <div className="highlight-icon">🎨</div>
            <div className="highlight-text">
              <h3>FlutterFlow</h3>
              <p>Visual app development and rapid UI prototyping</p>
            </div>
          </motion.div>

          <motion.div
            className="highlight-card"
            whileHover={{ scale: 1.02, x: 10 }}
          >
            <div className="highlight-icon">🤖</div>
            <div className="highlight-text">
              <h3>Agentic Coding</h3>
              <p>AI-assisted development for faster, smarter delivery</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

