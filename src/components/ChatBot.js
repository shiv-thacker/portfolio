import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';
import './ChatBot.css';

const ChatBot = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm Shivang's AI assistant. Ask me anything about his skills, experience, projects, or education!",
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const knowledgeBase = {
    // Personal Info
    name: "Shivang Thacker",
    role: "React Native Developer",
    email: "shivangthacker555@gmail.com",
    phone: "+91 8320567250",
    location: "Rajkot, Gujarat, India - 360005",
    linkedin: "https://www.linkedin.com/in/shivang-thacker-4b1a481b9/",
    
    // Skills
    skills: [
      "React Native", "Expo", "ReactJS", "ES2016 JavaScript", "Redux", "NodeJS",
      "MongoDB", "ExpressJS", "Firebase", "AWS", "Flutter", "Android", "iOS",
      "UI/UX Design", "Scrum/Agile", "Git"
    ],
    
    // Experience
    currentCompany: "Uncanny Consulting Services",
    currentRole: "React Native & Flutter Developer",
    currentDuration: "May 2024 - Present",
    totalExperience: "2+ years",
    
    // Projects
    projects: {
      omniyat: "OMNIYAT Concierge App - Luxury real estate concierge app for Dubai residents. Built from scratch using Flutter with AI integration.",
      otr: "On Target Romance (OTR) - Community platform for romance authors with Braintree payment integration and social authentication.",
      primpblow: "Primp & Blow - Salon booking app for U.S.-based chain with biometric authentication (Face ID/Fingerprint) and Booker.io API integration.",
      jamrio: "Jamrio Community App - Social networking platform for artists with Redux, WebSockets, and real-time features.",
      syracoffee: "Syra Coffee - E-commerce mobile application for coffee products built with React Native, Supabase, and GraphQL. Managed an already created project with team collaboration.",
      personal: "Personal projects include EVC Finder, Dating App, Firebase Chat App, Amazon Clone, Social Media App, and Noise Detector."
    },
    
    // Education
    education: "B.Tech in Electronics and Communication Engineering from V.V.P. Engineering College, Rajkot (2018-2022). CGPA: 9.54 with 5th rank in Gujarat Technical University.",
    
    // Key Achievements
    achievements: [
      "Led end-to-end development of 4+ fully functional cross-platform mobile applications",
      "Owned entire mobile app lifecycle from concept to deployment",
      "Collaborated with clients and backend developers for seamless integration",
      "Implemented scalable code architectures (MVVM, Clean Architecture)",
      "Published apps on Google Play Store and Apple App Store"
    ]
  };

  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Greetings
    if (message.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
      return `Hello! I'm here to help you learn about Shivang Thacker. You can ask me about his skills, experience, projects, education, or contact information. What would you like to know?`;
    }
    
    // Name
    if (message.includes('name') || message.includes('who are you') || message.includes('who is')) {
      return `I'm an AI assistant for ${knowledgeBase.name}. He's a ${knowledgeBase.role} with ${knowledgeBase.totalExperience} of experience building amazing mobile applications.`;
    }
    
    // Contact
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
      return `You can reach Shivang at:\n📧 Email: ${knowledgeBase.email}\n📱 Phone: ${knowledgeBase.phone}\n📍 Location: ${knowledgeBase.location}\n🔗 LinkedIn: ${knowledgeBase.linkedin}`;
    }
    
    // Skills
    if (message.includes('skill') || message.includes('technology') || message.includes('tech stack') || message.includes('know')) {
      return `Shivang is proficient in:\n\n**Frontend & Mobile:** ${knowledgeBase.skills.slice(0, 6).join(', ')}\n\n**Backend:** ${knowledgeBase.skills.slice(6, 11).join(', ')}\n\n**Tools:** ${knowledgeBase.skills.slice(11).join(', ')}\n\nHe's particularly strong in React Native development and has delivered 4+ production apps!`;
    }
    
    // Experience
    if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('company')) {
      return `Shivang currently works as a ${knowledgeBase.currentRole} at ${knowledgeBase.currentCompany} (${knowledgeBase.currentDuration}).\n\nHe has ${knowledgeBase.totalExperience} of professional experience building cross-platform mobile applications. Previously, he worked at Jamrio Technologies and has done extensive independent development.\n\nKey achievements include leading development of 4+ production apps, managing entire app lifecycles, and collaborating with international clients.`;
    }
    
    // Projects
    if (message.includes('project') || message.includes('app') || message.includes('built') || message.includes('developed')) {
      if (message.includes('omniyat')) {
        return `**OMNIYAT Concierge App:**\n${knowledgeBase.projects.omniyat}\n\nThis was built from scratch and showcases Shivang's ability to handle complex, high-end applications for luxury real estate.`;
      }
      if (message.includes('otr') || message.includes('romance')) {
        return `**On Target Romance (OTR):**\n${knowledgeBase.projects.otr}\n\nShivang restructured a messy codebase and implemented payment gateway integration.`;
      }
      if (message.includes('primp') || message.includes('salon')) {
        return `**Primp & Blow:**\n${knowledgeBase.projects.primpblow}\n\nPublished on both iOS and Android with advanced biometric authentication.`;
      }
      if (message.includes('jamrio')) {
        return `**Jamrio Community App:**\n${knowledgeBase.projects.jamrio}\n\nA feature-rich social platform for artists with real-time communication.`;
      }
      if (message.includes('syra') || message.includes('coffee')) {
        return `**Syra Coffee:**\n${knowledgeBase.projects.syracoffee}\n\nShivang took over and managed this e-commerce project, demonstrating strong team collaboration skills.`;
      }
      return `Shivang has worked on several impressive projects:\n\n1. **OMNIYAT** - Luxury concierge app (Flutter)\n2. **OTR** - Author networking platform\n3. **Primp & Blow** - Salon booking app\n4. **Jamrio** - Social platform for artists\n5. **Syra Coffee** - E-commerce coffee app (React Native, Supabase, GraphQL)\n\nHe's also built 6+ personal projects including dating apps, e-commerce clones, and utility apps. Would you like details about any specific project?`;
    }
    
    // Education
    if (message.includes('education') || message.includes('degree') || message.includes('college') || message.includes('university') || message.includes('study')) {
      return `${knowledgeBase.education}\n\nHis academic excellence (5th rank statewide!) demonstrates his strong problem-solving abilities and dedication to learning.`;
    }
    
    // Achievements
    if (message.includes('achievement') || message.includes('accomplish') || message.includes('success')) {
      const achievementList = knowledgeBase.achievements.map((a, i) => `${i + 1}. ${a}`).join('\n');
      return `Shivang's key achievements include:\n\n${achievementList}\n\nHe's a proven track record of delivering high-quality mobile solutions!`;
    }
    
    // Location
    if (message.includes('location') || message.includes('where') || message.includes('live')) {
      return `Shivang is based in ${knowledgeBase.location}. He's open to remote opportunities and has experience working with international clients.`;
    }
    
    // Hire/Available
    if (message.includes('hire') || message.includes('available') || message.includes('opportunity') || message.includes('position')) {
      return `Shivang is currently employed at ${knowledgeBase.currentCompany} but is always open to discussing exciting opportunities! Feel free to reach out to him at ${knowledgeBase.email} or ${knowledgeBase.phone} to discuss potential collaboration.`;
    }
    
    // Salary/Rate
    if (message.includes('salary') || message.includes('rate') || message.includes('cost') || message.includes('price')) {
      return `For information about rates and compensation, please contact Shivang directly at ${knowledgeBase.email}. He'd be happy to discuss project requirements and provide a tailored quote.`;
    }
    
    // React Native specific
    if (message.includes('react native')) {
      return `React Native is Shivang's primary expertise! He has:\n• 2+ years of React Native development\n• Built 4+ production apps using React Native\n• Experience with Expo, Redux, navigation, and native modules\n• Published apps on both iOS and Android stores\n• Integrated complex features like biometric auth, payments, real-time chat\n\nHe's highly skilled in creating performant, cross-platform mobile applications.`;
    }
    
    // Flutter
    if (message.includes('flutter')) {
      return `Yes! Shivang recently worked with Flutter on the OMNIYAT Concierge App, developing the entire mobile app from scratch. He's proficient in both React Native and Flutter, making him versatile for various mobile development needs.`;
    }
    
    // Thank you
    if (message.match(/thank/)) {
      return `You're welcome! Feel free to ask me anything else about Shivang's experience, skills, or projects. I'm here to help! 😊`;
    }
    
    // Default response with suggestions
    return `I'm not sure I understood that. Here are some things you can ask me:\n\n• "What are Shivang's skills?"\n• "Tell me about his experience"\n• "What projects has he built?"\n• "What's his education background?"\n• "How can I contact him?"\n• "Is he available for hire?"\n\nWhat would you like to know?`;
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      type: 'user',
      text: inputValue,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: generateResponse(inputValue),
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "What are your skills?",
    "Tell me about your projects",
    "What's your experience?",
    "How can I contact you?"
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="chatbot-toggle"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaRobot />
            <span className="chat-badge">AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-container"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <motion.div
                  className="bot-avatar"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaRobot />
                </motion.div>
                <div>
                  <h3>AI Assistant</h3>
                  <p className="bot-status">
                    <span className="status-dot"></span>
                    Online
                  </p>
                </div>
              </div>
              <motion.button
                className="close-btn"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
            </div>

            <div className="chatbot-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`message ${message.type}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="message-avatar">
                    {message.type === 'bot' ? <FaRobot /> : <FaUser />}
                  </div>
                  <div className="message-content">
                    <div className="message-text">{message.text}</div>
                    <div className="message-time">{message.time}</div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  className="message bot"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="message-avatar">
                    <FaRobot />
                  </div>
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="quick-questions">
                <p className="quick-questions-title">Quick questions:</p>
                <div className="quick-questions-buttons">
                  {quickQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      className="quick-question-btn"
                      onClick={() => handleQuickQuestion(question)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            <div className="chatbot-input">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Shivang..."
              />
              <motion.button
                onClick={handleSend}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={!inputValue.trim()}
              >
                <FaPaperPlane />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;

