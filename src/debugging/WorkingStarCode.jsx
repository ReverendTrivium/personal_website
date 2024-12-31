import './App.css'
import Header from './pages/Header';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Certifications from './pages/Certifications';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Radio from './components/Radio';


import React, { useState, useEffect, useRef } from 'react'

const App = () => {
  function createStar() {
    const container = document.querySelector('.container');
    // Create a star element
    const star = document.createElement('div');
    star.className = 'star';

    // Set random position within the container
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

    // Function to check if the star is outside the viewport
    function checkStarPosition() {
      const starRect = star.getBoundingClientRect();
      if (starRect.right < 0 || starRect.left > viewportWidth) {
        star.remove();
      }

      // Check for overlap with the right panel sections
      const sectionArray = Object.values(sectionRefs.current);
 
      sectionArray.forEach((sect) => {
        let textRect = sect.getBoundingClientRect();
        if (
          starRect.left < textRect.right &&
          starRect.right > textRect.left &&
          starRect.top < textRect.bottom &&
          starRect.bottom > textRect.top
        ) {
          star.classList.add('blur');
        }
      })
    }


    // Remove the star after the animation ends
    star.addEventListener('animationiteration', checkStarPosition);
    star.addEventListener('animationend', () => {
      star.remove();
    });
    // Initial check for overlap
    checkStarPosition();
  }
 // Create stars immediately on page load
 useEffect(() => {
  for (let i = 0; i < 25; i++) { // Adjust the number of initial stars as needed
    createStar();
  }
  }, []);

  // Launch a star at random intervals
  useEffect(() => {
    const interval = setInterval(() => {
      createStar();
    }, Math.random() * 20 + 10); // Random interval

    return () => clearInterval(interval);
  }, []);

  // Used to keep the state of tabs which will also change through scrolling
  const [nav, setNav] = useState("About")
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
      { threshold: 0.6 } // Adjust threshold as needed
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full h-full bg-[#000000]">
    <div className="flex flex-col md:flex-row 2xl:w-1/2 2xl:mx-auto">
      <div className="md:w-1/2 items-center justify-center">
        {/* Header component */}
        <Header />
      </div>
      <div className="md:w-1/2">
        <div className="p-4 container overflow-y-scroll">
          <About sectionRefs={sectionRefs} />
          <Experience sectionRefs={sectionRefs} />
          <Education sectionRefs={sectionRefs} />
          <Projects sectionRefs={sectionRefs} />
          <Certifications sectionRefs={sectionRefs} />
          <Achievements sectionRefs={sectionRefs} />
        </div>
      </div>
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2">
        <Radio nav={nav} />
      </div>
    </div>
  </main>
);
};

export default App;