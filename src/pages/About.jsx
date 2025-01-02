import React, { useEffect, useRef } from 'react';
import '../Styles/About.css';
import TagCloud from '../components/Tagcloud';


const About = ({ sectionRefs }) => {
  return (
    <div
      ref={(el) => (sectionRefs.current['About'] = el)}
      id="About"
      className="about-container flex flex-row justify-between items-start px-4 py-4"
    >
      {/* About Text */}
      <div className="about-text flex flex-col justify-center items-start text-gray-100 px-4">
        <h2 className="text-xl font-medium uppercase border-box">About</h2>
        <h3 className="text-base mt-4 text-start text-lightgray">
          I am a passionate software engineer specializing in crafting dynamic Java applications
          and engaging data visualizations. My expertise lies in developing fast, user-friendly
          software solutions that prioritize exceptional user experiences. I thrive on bringing
          innovation and precision to every project I take on.
          <br />
          With a strong background in Software Engineering, I've worked extensively with
          technologies like Java, MySQL, C++, MongoDB, JavaScript, and HTML. Currently,
          I'm expanding my skill set to include cloud technologies such as AWS and Microsoft
          Azure. My experience includes building scalable web applications tailored to client needs,
          as well as creating innovative projects for a community group I founded.
          <br />
          Outside of work, I enjoy cosplaying with friends, working on my car, skateboarding,
          and pushing my limits at the gym.
        </h3>
      </div>

      {/* TagCloud */}
      <TagCloud />
    </div>
  );
};

export default About;