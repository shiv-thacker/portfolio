import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './VideoIntro.css';

const LOOM_VIDEO_ID = '57e620f306da40d696d0926abde97b10';

const VideoIntro = () => {
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
    <section id="video" className="video-intro">
      <motion.div
        ref={ref}
        className="video-intro-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2 className="section-title">Video Introduction</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            A quick walkthrough of who I am and what I build
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="video-frame">
          <iframe
            src={`https://www.loom.com/embed/${LOOM_VIDEO_ID}`}
            title="Shivang Thacker - Video Introduction"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>

        <motion.a
          variants={itemVariants}
          href={`https://www.loom.com/share/${LOOM_VIDEO_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="video-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Watch on Loom <FaExternalLinkAlt />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default VideoIntro;
