import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <ChatBot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
}

export default App;

