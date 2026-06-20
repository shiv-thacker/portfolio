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
    role: "Mobile Application Developer",
    email: "shivangthacker555@gmail.com",
    phone: "+91 8320567250",
    location: "Ahmedabad, Gujarat, India",
    linkedin: "https://www.linkedin.com/in/shivang-thacker-4b1a481b9/",
    
    // Skills
    skills: [
      "React Native", "Flutter", "Expo", "Redux", "Node.js", "MongoDB",
      "Firebase", "Supabase", "GraphQL", "AWS", "Braintree", "Git", "Agile/Scrum"
    ],
    
    // Experience
    currentCompany: "Uncanny Consulting Services LLP",
    currentRole: "Mobile Application Developer (React Native & Flutter)",
    currentDuration: "May 2024 - Present",
    totalExperience: "2+ years",
    
    // Projects
    projects: {
      omniyat: "OMNIYAT Concierge App — Luxury real estate concierge app for Dubai residents. Built from scratch in Flutter as sole mobile developer. Currently in UAT.",
      primpblow: "Primp & Blow — Salon booking app for a U.S.-based chain with Booker.io API, biometric auth, and App Store / Play Store release.",
      syracoffee: "Syra Coffee — E-commerce coffee app with React Native, Supabase, and GraphQL. Live on the Apple App Store.",
      otr: "On Target Romance (OTR) — Community platform for romance authors. Refactored legacy React Native codebase; integrated Braintree payments and social auth.",
      jamrio: "Jamrio Community App — Social networking platform for artists with Redux, WebSockets, and push notifications.",
      mentorship: "Intern Mentorship — Mentored 2 mobile development interns at Uncanny Consulting. Guided one intern through the full delivery of an AI-based OCR mobile application.",
      personal: "Personal projects include EVC Finder, Social Media App, Amazon Clone, Firebase Chat App, and Noise Detector."
    },
    
    // Education
    education: "B.Tech in Electronics and Communication Engineering from V.V.P. Engineering College, Rajkot (2018-2022). CGPA: 9.54 with 5th rank in Gujarat Technical University.",
    
    // Key Achievements
    achievements: [
      "Delivered 5+ production mobile applications using React Native and Flutter",
      "Mentored 2 interns — one delivered a full AI-based OCR mobile application",
      "Owned end-to-end mobile lifecycles from requirements through store publishing",
      "Shipped apps to Google Play Store and Apple App Store",
      "Applied MVVM and Clean Architecture for scalable codebases",
      "Extra Mile Award 2025 at Uncanny Consulting Services LLP"
    ],
    
    mentorship: "Shivang mentors 2 mobile development interns at Uncanny Consulting Services LLP. He guides them on React Native, code quality, and Agile delivery — including one intern who implemented a full AI-based OCR mobile application.",
    
    // Awards & Recognition
    award: {
      title: "Extra Mile Award 2025",
      company: "Uncanny Consulting Services LLP",
      description: "Certificate of Appreciation for exceptional dedication, proactive effort, and consistently going above and beyond expectations.",
      year: "2025"
    }
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
      return `Shivang is proficient in:\n\n**Mobile:** ${knowledgeBase.skills.slice(0, 4).join(', ')}\n\n**Backend & Services:** ${knowledgeBase.skills.slice(4, 11).join(', ')}\n\n**Tools:** ${knowledgeBase.skills.slice(11).join(', ')}\n\nHe has delivered 5+ production mobile apps across React Native and Flutter.`;
    }
    
    // Experience
    if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('company')) {
      return `Shivang currently works as a ${knowledgeBase.currentRole} at ${knowledgeBase.currentCompany} (${knowledgeBase.currentDuration}).\n\nHe has ${knowledgeBase.totalExperience} of professional experience building cross-platform mobile applications for clients in India, the U.S., and the UAE. He also mentors 2 mobile development interns, including one who built a full AI-based OCR application.\n\n🏆 He received the ${knowledgeBase.award.title} (${knowledgeBase.award.year}) from ${knowledgeBase.award.company}.`;
    }

    // Mentorship
    if (message.includes('mentor') || message.includes('intern') || message.includes('ocr')) {
      return `**Intern Mentorship:**\n${knowledgeBase.mentorship}\n\n${knowledgeBase.projects.mentorship}`;
    }
    
    // Projects
    if (message.includes('project') || message.includes('app') || message.includes('built') || message.includes('developed')) {
      if (message.includes('omniyat')) {
        return `**OMNIYAT Concierge App:**\n${knowledgeBase.projects.omniyat}\n\nThis was built from scratch and showcases Shivang's ability to handle complex, high-end applications for luxury real estate.`;
      }
      if (message.includes('otr') || message.includes('romance')) {
        return `**On Target Romance (OTR):**\n${knowledgeBase.projects.otr}\n\nShivang inherited a legacy codebase, refactored it, and integrated Braintree payments.`;
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
      if (message.includes('ocr') || message.includes('intern') || message.includes('mentor')) {
        return `**Intern Mentorship — AI OCR App:**\n${knowledgeBase.projects.mentorship}`;
      }
      return `Shivang has worked on several production projects:\n\n1. **OMNIYAT** — Luxury concierge app (Flutter, in UAT)\n2. **Intern Mentorship** — AI-based OCR app (guided intern delivery)\n3. **Primp & Blow** — Salon booking (App Store & Play Store)\n4. **Syra Coffee** — E-commerce coffee app (Live)\n5. **OTR** — Author networking platform\n6. **Jamrio** — Social platform for artists\n\nHe has also built personal projects including EVC Finder, e-commerce apps, and chat apps. Would you like details about any specific project?`;
    }
    
    // Education
    if (message.includes('education') || message.includes('degree') || message.includes('college') || message.includes('university') || message.includes('study')) {
      return `${knowledgeBase.education}\n\nHis academic excellence (5th rank statewide!) demonstrates his strong problem-solving abilities and dedication to learning.`;
    }
    
    // Achievements
    if (message.includes('achievement') || message.includes('accomplish') || message.includes('success')) {
      const achievementList = knowledgeBase.achievements.map((a, i) => `${i + 1}. ${a}`).join('\n');
      return `Shivang's key achievements include:\n\n${achievementList}\n\n🏆 **Award Recognition:**\n${knowledgeBase.award.title} (${knowledgeBase.award.year}) from ${knowledgeBase.award.company}\n${knowledgeBase.award.description}\n\nHe has a proven track record of delivering high-quality mobile solutions!`;
    }
    
    // Award/Recognition
    if (message.includes('award') || message.includes('recognition') || message.includes('certificate') || message.includes('extra mile')) {
      return `🏆 **${knowledgeBase.award.title}**\n\nShivang received the ${knowledgeBase.award.title} in ${knowledgeBase.award.year} from ${knowledgeBase.award.company}.\n\n${knowledgeBase.award.description}\n\nThis award recognizes his exceptional dedication, proactive effort, and consistently going above and beyond expectations in his work.`;
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
      return `React Native is Shivang's primary expertise! He has:\n• 2+ years of React Native development\n• Built 5+ production apps using React Native\n• Experience with Expo, Redux, navigation, and native modules\n• Published apps on both iOS and Android stores\n• Integrated biometric auth, payments, real-time chat, and GraphQL/Supabase\n\nHe's also proficient in Flutter, having built the OMNIYAT app from scratch.`;
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
    return `I'm not sure I understood that. Here are some things you can ask me:\n\n• "What are Shivang's skills?"\n• "Tell me about his experience"\n• "What projects has he built?"\n• "What's his education background?"\n• "Tell me about his achievements"\n• "What awards has he received?"\n• "How can I contact him?"\n• "Is he available for hire?"\n\nWhat would you like to know?`;
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
    "Tell me about your achievements",
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

