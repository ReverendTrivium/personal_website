import React, { useEffect, useRef } from 'react';
import '../Styles/About.css';
import TagCloud from '../components/Tagcloud';


const About = ({ sectionRefs }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div
      ref={(el) => (sectionRefs.current['About'] = el)}
      id="About"
      className="about-section px-4 py-4"
    >
      {/* About Text */}
      <div className="about-row">
        <div className="about-text">
          <h2 className="text-xl font-medium uppercase border-box">About</h2>
          <h3 className="text-base mt-4 text-start text-lightgray">
            I'm a Software Engineer and Team Lead with 8 years of experience building scalable, 
            cloud-based, and community-driven applications. My work spans full-stack development 
            with Java, JavaScript, React, and MongoDB, alongside integrations with APIs like Discord, 
            Google Calendar, and Spotify. I've led cross-functional teams to deliver web and mobile 
            apps on schedule, optimized databases for performance, and automated operations to 
            streamline workflows. Beyond engineering, I founded and scaled Tomodachi Street, a 
            DMV-based events group, where I developed custom tools, integrated open-source platforms, 
            and created immersive AV experiences to drive community growth. My portfolio reflects a 
            blend of technical depth, leadership, and creativity—building not just applications, but 
            systems and communities that thrive.
            <br /><br />
            With a strong background in Software Engineering, I have extensive experience with technologies 
            such as Java, MySQL, C++, MongoDB, JavaScript, and HTML. I am currently expanding my skill 
            set to include cloud platforms like AWS and Microsoft Azure, as well as Machine Learning 
            and Artificial Intelligence.
          < br /><br />
            Outside of work, I enjoy cosplaying with friends, working on my car, skateboarding, and 
            challenging myself at the gym.
          </h3>
        </div>

        <div className="photo-wrapper">
          <a href="https://instagram.com/mx.cyberagent" target="_blank" className="photo-card text-decoration-none">
            <img src="/Photo/Profile_Photo.jpg" alt="Portrait" className="rounded-circle photo-img" />
          </a>
        </div>
      </div>

      <div className="tag-cloud">
        {/* TagCloud */}
        {!isMobile && <TagCloud />} {/* Conditionally render TagCloud */}
      </div>
    </div>


  );
};

export default About;