import './App.css';
import Header from './pages/Header';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Certifications from './pages/Certifications';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Radio from './components/Radio';
import './styles/Meteors.scss';

import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [nav, setNav] = useState('About');
  const sectionRefs = useRef({});
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Dynamic Star Background.
  useEffect(() => {
    const starBackground = document.querySelector('.star-background');
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * window.innerHeight}px`;
      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.width = `${Math.random() * 2 + 1}px`;
      star.style.height = `${Math.random() * 2 + 1}px`;
      starBackground.appendChild(star);
    }
  }, []);
  

    // Handle scroll for header visibility
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
  
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setHeaderVisible(false); // Hide header when scrolling down
        } else {
          setHeaderVisible(true); // Show header when scrolling up
        }
  
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);
  
    // Keep IntersectionObserver for stars or other elements
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setNav(entry.target.id);
            }
          });
        },
        { threshold: 0.6 }
      );
  
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.observe(ref);
      });
  
      return () => observer.disconnect();
    }, []);

    return (
      <div className="w-full h-full">
        <div className={`header-container ${isHeaderVisible ? 'visible' : 'hidden'}`}>
          <Header />
        </div>
        
        {/* Background Layers */}
        <div className="star-background"></div>
        {/* Meteor containers */}
        <div className="meteor-container">
          <div className="meteor-1"></div>
          <div className="meteor-2"></div>
          <div className="meteor-3"></div>
          <div className="meteor-4"></div>
          <div className="meteor-5"></div>
          <div className="meteor-6"></div>
          <div className="meteor-7"></div>
          <div className="meteor-8"></div>
          <div className="meteor-9"></div>
          <div className="meteor-10"></div>
          <div className="meteor-11"></div>
          <div className="meteor-12"></div>
          <div className="meteor-13"></div>
          <div className="meteor-14"></div>
          <div className="meteor-15"></div>
        </div>
  
        {/* Main content container */}
        <div className="content">
          <div className="radio-container-wrapper">
            <Radio nav={nav} />
          </div>
  
          <div className="sections-container">
            <About sectionRefs={sectionRefs} />
            <Experience sectionRefs={sectionRefs} />
            <Education sectionRefs={sectionRefs} />
            <Projects sectionRefs={sectionRefs} />
            <Certifications sectionRefs={sectionRefs} />
            <Achievements sectionRefs={sectionRefs} />
          </div>
        </div>
      </div>
    );
};

export default App;