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
import Meteors from './components/Meteors';
import StarBackground from './components/StarBackground';
import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [nav, setNav] = useState('About');
  const sectionRefs = useRef({});
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [radioWidth, setRadioWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setNav(entry.target.id));
      },
      { threshold: 0.6 }
    );

    Object.values(sectionRefs.current).forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-full">
      <div className={`header-container ${isHeaderVisible ? 'visible' : 'hidden'}`}>
        <Header />
      </div>

      {/* Background Layers */}
      <StarBackground />
      <Meteors />

      {/* Main content container */}
      <div className="content">
        <div className="radio-container-wrapper">
          {/* Pass a callback so Radio can report its width */}
          <Radio nav={nav} onWidthChange={setRadioWidth} />
        </div>

        {/* Offset all sections so they sit under the header, not under the radio */}
        <div
          className="sections-container"
          style={{
            // pass the computed left offset down as a CSS var
            ['--sidebar-offset']: `${radioWidth + 20 + 16}px`, // width + radio margin-left(20) + gap(16)
          }}
        >
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