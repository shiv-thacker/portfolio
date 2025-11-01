import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Uncanny Consulting Services',
      role: 'React Native & Flutter Developer',
      duration: 'May 2024 - Present',
      location: 'Remote',
      projects: [
        {
          name: 'OMNIYAT (Luxury Real Estate Concierge App)',
          description: 'A renowned real estate developer in Dubai. The OMNIYAT Concierge App provides residents with seamless access to services like valet, laundry, luggage assistance, maintenance requests, restaurant reservations, spa bookings, billing, and 24/7 chat support.',
          achievements: [
            'Developed the entire mobile app from scratch using Flutter',
            'Integrated AI native flow in Cursor',
            'Solely responsible for the mobile app development lifecycle',
            'Actively participated in daily client meetings (1 PM IST)',
            'Managed the backend team and developed the admin panel'
          ]
        },
        {
          name: 'OTR (On Target Romance)',
          description: 'A specialized platform designed for romance authors, beta readers, bloggers, and vendors to connect and manage their own events.',
          achievements: [
            'Took over and restructured a messy third-party codebase',
            'Debugging and refactoring existing code structures',
            'Solely managed the entire mobile app development lifecycle',
            'Skills Gained: Braintree payment gateway, messaging, push notifications, document picker and social authentication'
          ]
        },
        {
          name: 'Primp & Blow (Salon Booking App)',
          description: 'A salon booking app for a U.S.-based chain allowing users to book appointments for services like blowouts, makeup, and hair extensions.',
          achievements: [
            'Developed a cross-platform app for salon appointment booking',
            'Integrated with Booker.io E-commerce management API',
            'Published on both Google Play Store and Apple App Store',
            'Skills Gained: Biometric login with Face ID and Fingerprint, secure credentials using React Native Keychain'
          ]
        }
      ]
    },
    {
      company: 'Jamrio Technologies Private Limited',
      role: 'React Native Intern & React Native Developer',
      duration: 'Sep 2023 - May 2024',
      location: 'Rajkot, Gujarat',
      projects: [
        {
          name: 'Jamrio Community App',
          description: 'A social networking platform like Instagram that empowers musicians, photographers, dancers, and other artists to connect and showcase their talents.',
          achievements: [
            'Leading mobile app development for a community-based content platform',
            'Responsible for bug fixing, feature updates, and performance optimization',
            'Managed entire app development lifecycle from frontend perspective',
            'Skills Gained: Redux for state management, Real-time communication with WebSockets, Push notifications'
          ]
        }
      ]
    },
    {
      company: 'Independent Software Development',
      role: 'React Native Developer (Sole Mobile App Developer)',
      duration: 'May 2023 - Sep 2023',
      location: 'Freelance',
      projects: [
        {
          name: 'Personal Projects',
          description: 'Developed multiple full-stack mobile applications independently.',
          achievements: [
            'EVC Finder - Electric vehicle charging station locator',
            'Dating Fullstack App - Dating app with chat, swipe, like, dislike, subscription',
            'Firebase Chat App - Real-time messaging app',
            'Amazon Clone - E-commerce app',
            'Social Media App - Full-stack social platform with React native/Nodejs',
            'Noise Detector - Environment noise detection and visualization'
          ]
        }
      ]
    }
  ];

  const keyAchievements = [
    'Led end-to-end development of 4 fully functional cross-platform mobile applications',
    'Owned the entire mobile app lifecycle, including requirements gathering, architecture design, development, testing, and publishing',
    'Collaborated closely with clients and backend developers to align mobile features with business needs',
    'Estimated project timelines and deliverables, enabling transparent client communication',
    'Implemented scalable code architectures (MVVM, Clean Architecture)',
    'Performed thorough manual testing and debugging',
    'Maintained high code quality, app performance, and stability across multiple OS versions'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="experience">
      <motion.div
        ref={ref}
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-line"></div>
        </motion.div>

        {/* Key Achievements Section */}
        <motion.div variants={itemVariants} className="key-achievements">
          <h3 className="achievements-title">Key Responsibilities & Achievements</h3>
          <div className="achievements-grid">
            {keyAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-item"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <FaCheckCircle className="check-icon" />
                <p>{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="timeline-item"
            >
              <div className="timeline-marker">
                <motion.div
                  className="timeline-icon"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaBriefcase />
                </motion.div>
                {index < experiences.length - 1 && <div className="timeline-line" />}
              </div>

              <motion.div
                className="timeline-content"
                whileHover={{ scale: 1.02 }}
              >
                <div className="experience-header">
                  <div>
                    <h3 className="company-name">{exp.company}</h3>
                    <p className="role-title">{exp.role}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="duration">{exp.duration}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>

                <div className="projects-section">
                  {exp.projects.map((project, pIndex) => (
                    <motion.div
                      key={pIndex}
                      className="project-card"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: (index * 0.3) + (pIndex * 0.2) }}
                    >
                      <h4 className="project-name">{project.name}</h4>
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-achievements">
                        {project.achievements.map((achievement, aIndex) => (
                          <motion.div
                            key={aIndex}
                            className="achievement-bullet"
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ delay: (index * 0.3) + (pIndex * 0.2) + (aIndex * 0.1) }}
                          >
                            <span className="bullet">•</span>
                            <span>{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

