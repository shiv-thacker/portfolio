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
    { number: '4+', label: 'Apps Delivered' },
    { number: '2+', label: 'Years Experience' },
    { number: '5+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
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
                Mobile App Developer
              </motion.span>{' '}
              with a proven track record of delivering high-quality cross-platform 
              applications using JavaScript frameworks (e.g., React Native). 
            </p>
            <p className="about-description">
              Skilled in <strong>Agile/Scrum practices</strong>, end-to-end app development, 
              and collaborating with clients and teams. A self-starter, problem solver, 
              and fast learner, passionate about building scalable and maintainable 
              mobile solutions.
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
            <div className="highlight-icon">🚀</div>
            <div className="highlight-text">
              <h3>Fast Learner</h3>
              <p>Quickly adapt to new technologies and frameworks</p>
            </div>
          </motion.div>

          <motion.div 
            className="highlight-card"
            whileHover={{ scale: 1.02, x: 10 }}
          >
            <div className="highlight-icon">💡</div>
            <div className="highlight-text">
              <h3>Problem Solver</h3>
              <p>Tackle complex challenges with innovative solutions</p>
            </div>
          </motion.div>

          <motion.div 
            className="highlight-card"
            whileHover={{ scale: 1.02, x: 10 }}
          >
            <div className="highlight-icon">🤝</div>
            <div className="highlight-text">
              <h3>Team Player</h3>
              <p>Collaborate effectively with clients and developers</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

