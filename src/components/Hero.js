import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <motion.div
            className="shape shape-1"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="shape shape-2"
            animate={{
              y: [0, 40, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="shape shape-3"
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-greeting">
          <motion.span
            animate={{ rotate: [0, 20, 0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            className="wave"
          >
            👋
          </motion.span>
          Hi, I'm
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-name">
          SHIVANG THACKER
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-title">
          React Native · Flutter · FlutterFlow · Vibe Coder
        </motion.p>

        <motion.p variants={itemVariants} className="hero-description">
          Mobile Application Developer with 2+ years of experience delivering
          production-ready cross-platform apps in React Native and Flutter.
          Mentor to 2 interns — one built a full AI-based OCR app. Extra Mile Award 2025.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-contact-info">
          <motion.a 
            href="tel:+918320567250"
            whileHover={{ scale: 1.05, x: 5 }}
            className="contact-item"
          >
            <FaPhone /> +91 8320567250
          </motion.a>
          <motion.a 
            href="mailto:shivangthacker555@gmail.com"
            whileHover={{ scale: 1.05, x: 5 }}
            className="contact-item"
          >
            <FaEnvelope /> shivangthacker555@gmail.com
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-buttons">
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-social">
          <motion.a
            href="https://www.linkedin.com/in/shivang-thacker-4b1a481b9/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/shivangthacker"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
      >
        <span>Scroll Down</span>
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </section>
  );
};

export default Hero;

