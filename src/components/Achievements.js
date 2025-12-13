import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaTimes } from 'react-icons/fa';
import './Achievements.css';
import certificateImage from '../assets/20251213_134329.jpg';
import awardImage from '../assets/IMG_2798.jpg';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState(null);

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
    <section id="achievements" className="achievements">
      <motion.div
        ref={ref}
        className="achievements-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-header">
          <h2 className="section-title">Achievements</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Recognition and awards for exceptional dedication and performance
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="achievements-grid">
          <motion.div
            className="achievement-card"
            whileHover={{ scale: 1.03, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="achievement-icon">
              <FaTrophy />
            </div>
            <div 
              className="achievement-image-container"
              onClick={() => setSelectedImage(certificateImage)}
            >
              <img 
                src={certificateImage} 
                alt="Certificate of Appreciation - Extra Mile Award 2025" 
                className="achievement-image certificate-image"
              />
            </div>
            <div className="achievement-content">
              <h3 className="achievement-title">Certificate of Appreciation</h3>
              <p className="achievement-description">
                Extra Mile Award for the year 2025 - In recognition of exceptional dedication, 
                proactive effort, and consistently going above and beyond expectations.
              </p>
              <div className="achievement-badge">
                <span>Uncanny Consulting Services LLP</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="achievement-card"
            whileHover={{ scale: 1.03, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="achievement-icon">
              <FaTrophy />
            </div>
            <div 
              className="achievement-image-container"
              onClick={() => setSelectedImage(awardImage)}
            >
              <img 
                src={awardImage} 
                alt="Award Ceremony - Extra Mile Award Presentation" 
                className="achievement-image"
              />
            </div>
            <div className="achievement-content">
              <h3 className="achievement-title">Award Ceremony</h3>
              <p className="achievement-description">
                Recognition ceremony for the Extra Mile Award 2025, presented by the CEO 
                of Uncanny Consulting Services LLP.
              </p>
              <div className="achievement-badge">
                <span>2025 Recognition</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="image-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              <img
                src={selectedImage}
                alt="Achievement"
                className={`modal-image ${selectedImage === certificateImage ? 'certificate-image' : ''}`}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;

