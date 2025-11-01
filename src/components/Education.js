import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaTrophy, FaUniversity } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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

  return (
    <section id="education" className="education">
      <motion.div
        ref={ref}
        className="education-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="education-card"
          whileHover={{ scale: 1.02, y: -10 }}
        >
          <div className="education-icon-wrapper">
            <motion.div
              className="education-icon"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <FaGraduationCap />
            </motion.div>
          </div>

          <div className="education-content">
            <div className="education-header">
              <div>
                <h3 className="degree-title">Bachelor of Technology (B.Tech.)</h3>
                <p className="major">Electronics and Communication Engineering</p>
              </div>
              <div className="year-badge">
                <span>2018 - 2022</span>
              </div>
            </div>

            <div className="university-info">
              <FaUniversity className="university-icon" />
              <div>
                <h4 className="university-name">V.V.P. Engineering College, Rajkot</h4>
                <p className="university-affiliation">Gujarat Technical University</p>
              </div>
            </div>

            <div className="achievement-box">
              <FaTrophy className="trophy-icon" />
              <div className="achievement-content">
                <span className="cgpa">CGPA: 9.54</span>
                <span className="rank">5th Rank in State University</span>
              </div>
            </div>

            <div className="education-details">
              <motion.div
                className="detail-item"
                whileHover={{ x: 10, backgroundColor: 'rgba(74, 158, 255, 0.1)' }}
              >
                <span className="detail-icon">📍</span>
                <span className="detail-text">Rajkot, Gujarat, India - 360005</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="skills-gained-section">
          <h3 className="skills-gained-title">Academic Excellence</h3>
          <div className="skills-gained-grid">
            <motion.div
              className="skill-gained-card"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="skill-gained-icon">🎓</div>
              <h4>Top Performer</h4>
              <p>5th Rank among thousands of students</p>
            </motion.div>

            <motion.div
              className="skill-gained-card"
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <div className="skill-gained-icon">💡</div>
              <h4>Strong Foundation</h4>
              <p>Solid understanding of electronics and communication</p>
            </motion.div>

            <motion.div
              className="skill-gained-card"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="skill-gained-icon">🏆</div>
              <h4>High Achiever</h4>
              <p>Consistent 9.54 CGPA throughout the program</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;

