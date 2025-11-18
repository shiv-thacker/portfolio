import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaMobileAlt, FaDatabase, 
  FaAws, FaGitAlt, FaAndroid, FaApple 
} from 'react-icons/fa';
import { SiExpo, SiRedux, SiMongodb, SiFirebase, SiFlutter } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillCategories = [
    {
      title: 'Frontend & Mobile',
      icon: <FaMobileAlt />,
      skills: [
        { name: 'React Native', icon: <FaReact />, level: 95 },
        { name: 'Expo', icon: <SiExpo />, level: 90 },
        { name: 'React JS', icon: <FaReact />, level: 70 },
        { name: 'Redux', icon: <SiRedux />, level: 85 },
        { name: 'Flutter', icon: <SiFlutter />, level: 40 },
      ]
    },
    {
      title: 'Backend & Database',
      icon: <FaDatabase />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 50 },
        { name: 'Express.js', icon: <FaNodeJs />, level: 50 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 50 },
        { name: 'Firebase', icon: <SiFirebase />, level: 50 },
        { name: 'AWS', icon: <FaAws />, level: 50 },
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: <FaGitAlt />,
      skills: [
        { name: 'Android Studio', icon: <FaAndroid />, level: 60 },
        { name: 'Xcode', icon: <FaApple />, level: 60 },
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'Scrum/Agile', icon: <FaGitAlt />, level: 85 },
      ]
    }
  ];

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills">
      <motion.div
        ref={ref}
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="skill-category"
              whileHover={{ y: -10 }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: (categoryIndex * 0.3) + (skillIndex * 0.1) }}
                  >
                    <div className="skill-info">
                      <div className="skill-name-wrapper">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <motion.div
                        className="skill-bar"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: (categoryIndex * 0.3) + (skillIndex * 0.1) + 0.3, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="technologies-section">
          <h3 className="tech-title">All Technologies</h3>
          <div className="tech-tags">
            {[
              'React Native', 'Expo', 'ReactJS', 'ES2016 JavaScript', 'UI/UX Design',
              'Redux', 'NodeJS', 'MongoDB', 'ExpressJS', 'Axios', 'Firebase', 'AWS',
              'Android', 'Android Studio', 'IOS', 'X-code', 'Scrum', 'Git', 'Flutter',
              'Cursor AI'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="tech-tag"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;

