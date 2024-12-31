import './App.css';
import Header from './pages/Header';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Certifications from './pages/Certifications';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Radio from './components/Radio';

import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  function createStar() {
    const container = document.querySelector('.star-container'); // Change target to a dedicated star container
    if (!container) return; // Ensure container exists

    // Create a star element
    const star = document.createElement('div');
    star.className = 'star';

    // Set random position within the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    let startX = Math.random() * viewportWidth - 100;
    let startY = Math.random() * viewportHeight - 100;

    const starSize = Math.random() * 16 + 0.01;
    star.style.width = `${starSize}px`;
    star.style.height = `${starSize}px`;

    // Ensure the star stays within the viewport boundaries
    startX = Math.min(startX, viewportWidth - starSize);
    startY = Math.min(startY, viewportHeight - starSize);

    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    // Append the star to the container
    container.appendChild(star);

    // Remove the star after the animation ends
    star.addEventListener('animationend', () => {
      star.remove();
    });

    // Initial position check
    checkStarPosition(star, container);
  }

  function checkStarPosition(star, container) {
    const starRect = star.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    if (starRect.right < 0 || starRect.left > viewportWidth) {
      star.remove();
    }

    // Check overlap with section areas
    const sectionArray = Object.values(sectionRefs.current);

    sectionArray.forEach((sect) => {
      if (sect) {
        const textRect = sect.getBoundingClientRect();
        if (
          starRect.left < textRect.right &&
          starRect.right > textRect.left &&
          starRect.top < textRect.bottom &&
          starRect.bottom > textRect.top
        ) {
          star.classList.add('blur'); // Add blur effect
        }
      }
    });
  }

  // Create stars immediately on page load
  useEffect(() => {
    for (let i = 0; i < 25; i++) {
      createStar();
    }
  }, []);

  // Launch a star at random intervals
  useEffect(() => {
    const interval = setInterval(() => {
      createStar();
    }, Math.random() * 1000 + 500); // Random interval

    return () => clearInterval(interval);
  }, []);

  const [nav, setNav] = useState('About');
  const sectionRefs = useRef({});

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
    <body className="w-full h-full bg-[#000000]">
      <div className="header-container">
        <Header />
      </div>

      {/* Star container for stars only */}
      <div className="star-container"></div>
      
      {/* Main content container */}
      <div className="content">
      
        {/* Radio menu */}
        <div className="radio-container-wrapper">
          <Radio nav={nav} />
        </div>

        {/* Sections container */}
        <div className="sections-container">
          <About sectionRefs={sectionRefs} />
          <Experience sectionRefs={sectionRefs} />
          <Education sectionRefs={sectionRefs} />
          <Projects sectionRefs={sectionRefs} />
          <Certifications sectionRefs={sectionRefs} />
          <Achievements sectionRefs={sectionRefs} />
        </div>
      </div>
    </body>
  );
};

export default App;