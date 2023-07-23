import React, { useState, useEffect } from 'react';
import './styles/styles.css';
import { AnimatedBG } from './components/animated-bg';
import { Profile } from './components/profile/profile';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';

function App() {
  const [activeLink, setActiveLink] = useState('');

  const handleScroll = () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        setActiveLink(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <div className="animated-bg">
        <AnimatedBG />
      </div>
      <div className="portfolio">
        <nav className="nav">
          <ul className="sections">
            <li><a href="#profile" className={activeLink === 'profile' ? 'current' : ''}>Profile</a></li>
            <li><a href="#about" className={activeLink === 'about' ? 'current' : ''}>About</a></li>
            <li><a href="#projects" className={activeLink === 'projects' ? 'current' : ''}>Projects</a></li>
            <li><a href="#contact" className={activeLink === 'contact' ? 'current' : ''}>CONTACT</a></li>
          </ul>
        </nav>
        <div className="center">
          <div className="profile section" id="profile"><Profile/></div>
          <div className="about section" id="about"><About/></div>
          <div className="projects section" id="projects"><Projects/></div>
          <div className="contact section" id="contact"><Contact/></div>
        </div>
      </div>
    </div>
  )
}

export default App;