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
      company: 'Uncanny Consulting Services LLP',
      role: 'Mobile Application Developer (React Native & Flutter)',
      duration: 'May 2024 - Present',
      location: 'Ahmedabad, Gujarat',
      projects: [
        {
          name: 'OMNIYAT — Luxury Real Estate Concierge App',
          period: 'Jan 2025 - Present',
          description:
            'Concierge mobile app for OMNIYAT, a luxury real estate developer in Dubai, giving residents access to valet, laundry, maintenance, restaurant and spa bookings, billing, and 24/7 support.',
          achievements: [
            'Built the Flutter app from scratch (0→1) as sole mobile developer',
            'Designed and implemented service booking, billing, and in-app chat modules',
            'Led daily client syncs and coordinated mobile requirements with backend and admin teams',
            'Currently in UAT; preparing for production release on iOS and Android',
          ],
        },
        {
          name: 'Intern Mentorship — AI OCR Application',
          period: '2024 - Present',
          description:
            'Technical mentor to 2 mobile development interns at Uncanny Consulting Services, supporting their growth through hands-on guidance and project delivery.',
          achievements: [
            'Mentored 2 interns on React Native development, code quality, and Agile delivery practices',
            'Guided one intern through the full implementation of an AI-based OCR mobile application',
            'Led code reviews, architecture discussions, and sprint planning to ensure production-ready output',
            'Helped interns take ownership of features from design through testing and deployment',
          ],
        },
        {
          name: 'Primp & Blow — Salon Booking App',
          period: 'May 2024 - Oct 2024',
          description:
            'Cross-platform appointment booking app for a U.S.-based salon chain offering blowouts, makeup, and hair extension services.',
          achievements: [
            'Developed and shipped the React Native app for iOS and Android',
            'Integrated Booker.io API for appointment scheduling and service management',
            'Implemented biometric login (Face ID / fingerprint) with secure credential storage via Keychain',
            'Published to Google Play Store and Apple App Store',
          ],
        },
        {
          name: 'Syra Coffee — E-commerce App',
          period: 'Nov 2024 - Present',
          description:
            'E-commerce mobile app for premium coffee products with product catalog, cart, and checkout flows.',
          achievements: [
            'Took ownership of an existing codebase and led ongoing feature development and maintenance',
            'Built and enhanced catalog, cart, and checkout using Supabase and GraphQL',
            'Collaborated with designers and backend engineers to improve app stability and UX',
            'App live on the Apple App Store',
          ],
        },
        {
          name: 'OTR (On Target Romance)',
          period: 'Aug 2024 - Mar 2025',
          description:
            'Community platform for romance authors, beta readers, bloggers, and vendors to connect and manage events.',
          achievements: [
            'Inherited a legacy React Native codebase; refactored architecture and resolved critical bugs',
            'Integrated Braintree payments, push notifications, document picker, and social authentication',
            'Owned the full mobile lifecycle from debugging through feature delivery',
          ],
        },
      ],
    },
    {
      company: 'Jamrio Technologies Private Limited',
      role: 'React Native Developer',
      duration: 'Sep 2023 - May 2024',
      location: 'Rajkot, Gujarat',
      projects: [
        {
          name: 'Jamrio Community App',
          period: 'Sep 2023 - May 2024',
          description:
            'Social networking app for musicians, photographers, dancers, and artists to share content and connect with their audience.',
          achievements: [
            'Joined as intern and progressed to lead mobile development on the community platform',
            'Implemented Redux state management, WebSocket-based real-time features, and push notifications',
            'Delivered bug fixes, feature updates, and performance improvements across releases',
            'Managed the mobile frontend lifecycle from development through deployment',
          ],
        },
      ],
    },
    {
      company: 'Independent Mobile Development',
      role: 'React Native Developer',
      duration: 'May 2023 - Sep 2023',
      location: 'Remote · Freelance',
      projects: [
        {
          name: 'EVC Finder — EV Charging Locator',
          period: 'Jul 2023 - Sep 2023',
          description:
            'Mobile app helping electric vehicle owners locate nearby charging stations using maps and geolocation.',
          achievements: [
            'Built end-to-end with React Native, Google Maps API, and Firebase',
            'Implemented real-time location tracking and station search with distance filtering',
          ],
        },
        {
          name: 'Social Media App (Full-Stack)',
          period: 'Jun 2023 - Aug 2023',
          description:
            'Full-stack social platform with posts, likes, comments, and user profiles.',
          achievements: [
            'Developed React Native frontend and Node.js/MongoDB backend',
            'Integrated AWS for media storage and Redux for client-side state management',
          ],
        },
        {
          name: 'Amazon Clone — E-commerce App',
          period: 'May 2023 - Jul 2023',
          description:
            'E-commerce prototype with product listings, shopping cart, and Stripe checkout.',
          achievements: [
            'Implemented catalog browsing, cart management, and payment integration',
            'Built with React Native, Node.js, MongoDB, and Redux',
          ],
        },
      ],
    },
  ];

  const keyAchievements = [
    'Delivered 5+ production mobile applications using React Native and Flutter',
    'Mentored 2 interns — one delivered a full AI-based OCR mobile application end to end',
    'Owned end-to-end mobile lifecycles — requirements, architecture, development, testing, and store publishing',
    'Shipped apps to Google Play Store and Apple App Store with biometric auth and payment integrations',
    'Collaborated with clients and cross-functional teams through Agile/Scrum ceremonies and daily standups',
    'Applied MVVM and Clean Architecture patterns for scalable, maintainable codebases',
    'Refactored legacy codebases, improving stability and enabling faster feature delivery',
    'Recognized with the Extra Mile Award 2025 at Uncanny Consulting Services LLP',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="experience">
      <motion.div
        ref={ref}
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-line"></div>
        </motion.div>

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

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="timeline-item">
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

              <motion.div className="timeline-content" whileHover={{ scale: 1.02 }}>
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
                      transition={{ delay: index * 0.3 + pIndex * 0.2 }}
                    >
                      <div className="project-header">
                        <h4 className="project-name">{project.name}</h4>
                        {project.period && (
                          <span className="project-period">{project.period}</span>
                        )}
                      </div>
                      <p className="project-description">{project.description}</p>

                      <div className="project-achievements">
                        {project.achievements.map((achievement, aIndex) => (
                          <motion.div
                            key={aIndex}
                            className="achievement-bullet"
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{
                              delay: index * 0.3 + pIndex * 0.2 + aIndex * 0.1,
                            }}
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
