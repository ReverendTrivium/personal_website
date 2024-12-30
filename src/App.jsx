import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import ShortcutIcon from '@mui/icons-material/ArrowOutward';
import './App.css'
import Bubble from './components/Bubble';
import Radio from './components/Radio';

// assets
import Resume from './assets/26014_Derrick_Eberlein.pdf';

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
      const aboutSection = document.getElementById('About');
      const experienceSection = document.getElementById('Experience');
      const projectsSection = document.getElementById('Projects');
      const educationSection = document.getElementById('Education');
      const certificationsSection = document.getElementById('Certifications');
      const AchievementsSection = document.getElementById('Achievements');
      const headerSection = document.getElementById('Header');
      const sectionArray = [
        aboutSection,
        experienceSection,
        projectsSection,
        educationSection,
        certificationsSection,
        AchievementsSection,
        headerSection
      ];  
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

  const [certifications, setCertifications] = useState([]);
  useEffect(() => {
    // Create Dynamic List for All Current and Future Certifications
    let userInfo = 'AZ-900 – Azure Fundamentals, Microsoft (Sep 2023 – Present) ||';
    let charArry = userInfo.split('||').filter(Boolean); // Filter out empty strings
    setCertifications(charArry);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full h-full bg-[#0b1228]">
      <div className="flex flex-col md:flex-row 2xl:w-1/2 2xl:mx-auto">
        <div className="md:w-1/2 items-center justify-center">
          {/* Left Panel */}
          <div className="md:align-middle p-2 items-center justify-center justify-items-center md:sticky md:top-0 md:h-screen">
            <div id="Header" className="md:text-end text-gray-100 px-4 py-4">
              <h1 className="text-6xl font-bold">Derrick Eberlein</h1>
              <h2 className="text-xl font-medium mt-2">Software Engineer</h2>
              <h3 className="md:text-end text-base text-gray-400 mt-4">
                Turning thoughts into reality.
              </h3>
              <span className="mt-4">
                <Tooltip title="GitHub">
                  <Link
                    href="https://github.com/reverendtrivium/"
                    rel="noopener"
                    target="_blank"
                    underline="none"
                  >
                    <IconButton aria-label="GitHub">
                    <GitHubIcon sx={{ color: 'white', '&:hover': { color: 'lightgray' } }} />
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <Link
                    href="https://www.linkedin.com/in/derrickeberlein/"
                    rel="noopener"
                    target="_blank"
                    underline="none"
                  >
                    <IconButton aria-label="LinkedIn">
                      <LinkedInIcon sx={{ color: 'white', '&:hover': { color: 'lightgray' } }} />
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip title="Instagram">
                  <Link
                    href="https://www.instagram.com/mx.cyberagent/"
                    rel="noopener"
                    target="_blank"
                    underline="none"
                  >
                    <IconButton aria-label="Instagram">
                      <InstagramIcon sx={{ color: 'white', '&:hover': { color: 'lightgray' } }} />
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip title="Email Me">
                  <Link
                    href="mailto:derrickeberlein@gmail.com"
                    target="_blank"
                    rel="noopener"
                    underline="none"
                  >
                    <IconButton aria-label="Email">
                      <EmailIcon sx={{ color: 'white', '&:hover': { color: 'lightgray' } }} />
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip title="Download Resume">
                  <Link
                    href= {Resume}
                    target="_blank"
                  >
                    <IconButton onClick={() => {

                    }} aria-label="Email">
                      <DownloadIcon sx={{ color: 'white', '&:hover': { color: 'lightgray' } }} />
                    </IconButton>
                  </Link>
                </Tooltip>
              </span>
            </div>
            <div className="max-md:hidden flex flex-col items-end text-end">
              <Radio
                nav = {nav}
                setNav = {setNav}
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          {/* Right Panel */}
          <div className="p-4 container overflow-y-scroll"> 
            <div ref={(el) => (sectionRefs.current["About"] = el)} id="About" className="text-overlay md:min-h-screen flex flex-col justify-center items-start text-gray-100 px-4 py-4">
              <h2 className="text-overlay text-xl font-medium uppercase">About</h2>
              <h3 className="text-overlay text-base mt-4 text-gray-400 text-start">
                I am a dedicated software engineer with a strong focus on creating 
                dynamic Java applications and captivating data visualizations.
                I specialize in java software solutions, that deliver fast user-friendly interfaces with
                exceptional user experiences.
                My passion includes bringing innovation and excellence to every project I undertake.
              </h3>
              <h3 className="text-overlay text-base mt-4 text-gray-400 text-start">
                I have a Software Engineering background, specializing in technologies like
                Java, MySQL, C++, SQL, MongoDB, JavaScript, and HTML. I am currently learning more about cloud technologies like AWS and Microsoft Azure. 
                My past products focused on building scalable web applications for clients 
                accomplishing all their requirements while I have many projects I have created for a group I have founded.  
              </h3>
              <h3 className="text-overlay text-base mt-4 text-gray-400 text-start">
                In my free time, I enjoy cosplaying with my friends, working on my car, cosplaying many of my favorite characters,
                practicing guitar, and chasing personal records at the gym.
              </h3>
            </div>

            <div ref={(el) => (sectionRefs.current["Experience"] = el)} id="Experience" className="min-h-screen flex flex-col items-start text-gray-100 px-4 py-4">
              <h2 className="text-xl font-medium mt-2 uppercase py-4">Experience</h2>
              <div className ="text-start my-4">
                <p className="text-sm text-gray-400">Feburary 2024 - Present</p>
                <h2 className="pb-4">
                  <Tooltip title="Company Link">
                    <Link
                      href="https://discord.gg/fB2VQyjWP2"
                      target="_blank"
                      rel="noopener"
                      underline="none"
                    >
                      <p className="text-gray-100">CTO | Founder - Tomodachi Street
                      <ShortcutIcon fontSize="small" sx={{
                        color: 'white',
                        '&:hover': { color: 'lightgray' }
                      }}/>
                      </p>
                    </Link>
                  </Tooltip>
                </h2>
                <div className="text-start text-gray-400">
                  Built and scaled a thriving community in the DMV, growing membership to 100+ and 
                  hosting dynamic events. Spearheaded the development of automated workflows, 
                  secure MongoDB infrastructure, and a messaging platform integration that boosted 
                  regional connections by 40%. Designed immersive AV experiences, driving engagement 
                  and enhancing attendee satisfaction.
                </div>

                <div className="mt-2 mb-2 flex flex-wrap">
                  <Bubble text="Java"/>
                  <Bubble text="MySQL"/>
                  <Bubble text="JavaScript"/>
                  <Bubble text="MongoDB"/>
                  <Bubble text="RESTful APIs"/>
                  <Bubble text="Microservices"/>
                  <Bubble text="Authorization"/>
                  <Bubble text="Authentication"/>
                  <Bubble text="Data Visualization"/>
                  <Bubble text="Java Discord API (JDA)"/>
                  <Bubble text="Springboot"/>
                  <Bubble text="Spring Frameworks"/>
                  <Bubble text="HTML"/>
                </div>
              </div>
              
              <div className="text-start my-4">
                <p className="text-sm text-gray-400">May 2023 - January 2024</p>
                <h2 className="pb-4">
                  <Tooltip title="Company Link">
                    <Link
                      href="https://animealliance.org"
                      target="_blank"
                      rel="noopener"
                      underline="none"
                    >
                      <p className="text-gray-100">Event Staff - Anime Alliance                  
                      <ShortcutIcon fontSize="small" sx={{
                        color: 'white',
                        '&:hover': { color: 'lightgray' }
                      }}/>
                      </p>
                      
                    </Link>
                  </Tooltip>
                </h2>

                <div className="text-start text-gray-400">
                  Played a key role in organizing events for 500+ attendees by setting up 
                  engaging decorations and AV equipment. Ensured safety and security by 
                  monitoring gaming stations, enforcing entry restrictions, and addressing 
                  attendee concerns. Supported efficient event operations, including setup and 
                  teardown, to deliver seamless experiences.
                </div>

                <div className="mt-2 mb-2 flex flex-wrap">
                  <Bubble text="Communication"/>
                  <Bubble text="Customer Service"/>
                  <Bubble text="Leadership"/>
                  <Bubble text="Security"/>
                  <Bubble text="Organization"/>
                  <Bubble text="Planning"/>
                </div>
                
                {/* React - AWS - Node.js - .NET - MaterialUI
                AWS Lambda, DynamoDB, S3, ReactJS, Postman */}
              </div>

              <div className ="text-start my-4">
                <p className="text-sm text-gray-400">January 2023 - April 2023</p>
                <h2 className="pb-4">
                  <Tooltip title="Company Link">
                    <Link
                      href="https://www.ibexcontrols.com"
                      target="_blank"
                      rel="noopener"
                      underline="none"
                    >
                      <p className="text-gray-100">Team Lead | Software Engineer - IBEX Controls
                      <ShortcutIcon fontSize="small" sx={{
                        color: 'white',
                        '&:hover': { color: 'lightgray' }
                      }}/>
                      </p>
                    </Link>
                  </Tooltip>
                </h2>
                <div className="text-start text-gray-400">
                Led a team of four in developing a 508A UL-compliant web application for 
                electrical panels, resolving technical challenges like SSL issues across 
                browsers. Conducted code reviews to ensure quality and compliance, reducing 
                delays and streamlining development. Fostered collaboration, aligned with 
                client needs, and translated complex requirements into actionable solutions, 
                delivering the project on schedule.
                </div>

                <div className="mt-2 mb-2 flex flex-wrap">
                  <Bubble text="JavaScript"/>
                  <Bubble text="SSL"/>
                  <Bubble text="Object Oriented Programming"/>
                  <Bubble text="Containerization"/>
                  <Bubble text="Leadership"/>
                  <Bubble text="Delegation"/>
                  <Bubble text="JIRA"/>
                  <Bubble text="CI/CD Pipelines"/>
                  <Bubble text="HTML"/>
                </div>
              </div>

              <div className ="text-start my-4">
                <p className="text-sm text-gray-400">October 2021 - April 2022</p>
                <h2 className="pb-4">
                  <Tooltip title="Company Link">
                    <Link
                      href="https://www.byui.edu"
                      target="_blank"
                      rel="noopener"
                      underline="none"
                    >
                      <p className="text-gray-100">Team Lead | Software Engineer - BYU-Idaho
                      <ShortcutIcon fontSize="small" sx={{
                        color: 'white',
                        '&:hover': { color: 'lightgray' }
                      }}/>
                      </p>
                    </Link>
                  </Tooltip>
                </h2>
                <div className="text-start text-gray-400">
                Led a team of six to deliver mobile and web applications, 
                increasing user engagement by 30% and efficiency by 23%. Optimized SQL 
                databases and enhanced UI/UX design, boosting app performance and positioning 
                products at the forefront of mobile technology. Facilitated Agile Scrum 
                processes, conducted peer code reviews, and mentored team members, ensuring 
                high-quality deliverables that exceeded expectations.
                </div>

                <div className="mt-2 mb-2 flex flex-wrap">
                  <Bubble text="SQLite"/>
                  <Bubble text="Software Requirements Specification (SRS)"/>
                  <Bubble text="Software Design Document (SDD)"/>
                  <Bubble text="UI Templates"/>
                  <Bubble text="CSS"/>
                  <Bubble text="PHP"/>
                  <Bubble text="SQL Server"/>
                  <Bubble text="Android App Development"/>
                  <Bubble text="Python"/>
                </div>
              </div>

              <div className ="text-start my-4">
                <p className="text-sm text-gray-400">September 2016 - Present</p>
                <h2 className="pb-4">
                  <Tooltip title="Company Link">
                    <Link
                      href="https://www.servicesource.org"
                      target="_blank"
                      rel="noopener"
                      underline="none"
                    >
                      <p className="text-gray-100">General Clerk II - Service Source
                      <ShortcutIcon fontSize="small" sx={{
                        color: 'white',
                        '&:hover': { color: 'lightgray' }
                      }}/>
                      </p>
                    </Link>
                  </Tooltip>
                </h2>
                <div className="text-start text-gray-400">
                Streamlined mailroom operations and expedited customer service, 
                boosting efficiency by 30%. Mastered QA reporting and advanced 
                clerical duties while ensuring IT issue resolution for seamless 
                office functionality. Delivered consistent improvements to operational 
                processes and support systems.
                </div>

                <div className="mt-2 mb-2 flex flex-wrap">
                  <Bubble text="Mail Room Operations"/>
                  <Bubble text="Quality Assurance Reports"/>
                  <Bubble text="IT Troubleshooting"/>
                  <Bubble text="Documentation"/>
                  <Bubble text="Operational Support"/>
                  <Bubble text="Clerical Work"/>
                  <Bubble text="Customer Service"/>
                  <Bubble text="WITS Software"/>
                  <Bubble text="UPS Worldship"/>
                </div>
              </div>
            </div>

            <div ref={(el) => (sectionRefs.current["Projects"] = el)} id="Projects" className ="min-h-screen flex flex-col justify-center items-start text-gray-100 px-4 py-4">
              <h2 className="text-xl font-medium mt-2 uppercase">Projects</h2>
              <div className ="text-start my-4">
                <p className="text-sm text-gray-400">2024</p>
                <h2 className="pb-4">
                  <Tooltip title="Project Link">
                    <Link
                      href="https://github.com/ReverendTrivium/Tomodachi-Street"
                      target="_blank"
                      rel="noopener"
                      underline="none"
                    >
                      <p className="text-gray-100">Event Management Web Application
                      <ShortcutIcon fontSize="small" sx={{
                        color: 'white',
                        '&:hover': { color: 'lightgray' }
                      }}/>
                      </p>
                    </Link>
                  </Tooltip>
                </h2>
                <div className="text-start text-gray-400">
                Designed and developed a responsive event management application using the 
                Java Spring Framework, improving event creation, editing, and listing capabilities. 
                Simplified workflows with a user-friendly interface and secure processes for managing 
                event details.
                </div>
                <div className="mt-2 mb-2 flex flex-wrap">            
                  <Bubble text="Java Spring Framework"/>
                  <Bubble text="MySQL Server 8"/>
                  <Bubble text="Thymeleaf"/>
                  <Bubble text="Bootstrap 5"/>
                  <Bubble text="RESTful API's"/>
                  <Bubble text="Microservices"/>
                  <Bubble text="API Architecture"/>
                  <Bubble text="Git"/>
                </div>

                <br></br>
                <h2 className="pb-4">
                  <Tooltip title="Project Link">
                    <Link
                      href="https://github.com/ReverendTrivium/RedactedBot"
                      target="_blank"
                      rel="noopener"
                      underline="none"
                    >
                      <p className="text-gray-100">Server Management Bot (Discord)
                      <ShortcutIcon fontSize="small" sx={{
                        color: 'white',
                        '&:hover': { color: 'lightgray' }
                      }}/>
                      </p>
                    </Link>
                  </Tooltip>
                </h2>
                <div className="text-start text-gray-400">
                Built a robust Discord server management bot with Java and JDA, automating moderation, 
                content handling, and dynamic blacklist enforcement. Integrated Reddit and Google APIs 
                for media fetching and search functionality, enhancing server engagement.
                </div>
                <div className="mt-2 mb-2 flex flex-wrap">            
                  <Bubble text="Java"/>
                  <Bubble text="Java Discord API (JDA)"/>
                  <Bubble text="MongoDB"/>
                  <Bubble text="Reddit API"/>
                  <Bubble text="Google Custom Search API"/>
                  <Bubble text="ScheduledExecutorService"/>
                  <Bubble text="Regular Expressions (REGEX)"/>
                  <Bubble text="Dotenv"/>
                </div>

              </div>
              <div className ="text-start my-4">
                <p className="text-sm text-gray-400">2023</p>
                <h2 className="">
                  <Tooltip title="Project Link">
                    <Link
                      href="https://github.com/ReverendTrivium/Inventory"
                      target="_blank"
                      rel="noopener"
                      underline="none"
                    >
                      <p className="text-gray-100">Inventory - An Inventory Management and Grocery List Android App.
                      <ShortcutIcon fontSize="small" sx={{
                        color: 'white',
                        '&:hover': { color: 'lightgray' }
                      }}/>
                      </p>
                      
                    </Link>
                  </Tooltip>
                  <div className="text-start text-gray-400">
                  Developed an innovative inventory management and grocery list app, 
                  enabling users to track household inventory and avoid duplicate purchases. 
                  Seamlessly integrates inventory monitoring with grocery list functionality 
                  for smarter shopping decisions.
                  </div>
                  <div className="mt-2 mb-2 flex flex-wrap">
                    <Bubble text="AndroidX"/>           
                    <Bubble text="Material Search Bar"/>
                    <Bubble text="SQLite"/>
                    <Bubble text="SQLiteAssetHelper"/>
                    <Bubble text="Android Flow Layout"/>
                  </div>
                </h2>
              </div>
            </div>

            <div ref={(el) => (sectionRefs.current["Education"] = el)} id="Education" className ="flex flex-col justify-center items-start text-gray-100 px-4 py-4">
              <h2 className="text-xl font-medium mt-2 uppercase">Education</h2>
              <div className ="text-start my-4">
                <p className="text-sm text-gray-400">2018-2023</p>
                <h2 className="">
                  <Tooltip title="University Link">
                    <Link
                      href="https://www.byui.edu"
                      target="_blank"
                      rel="noopener"
                      underline="none"
                    >
                      <p className="text-gray-100">Bachelor of Science - Software Engineering
                      <ShortcutIcon fontSize="small" sx={{
                        color: 'white',
                        '&:hover': { color: 'lightgray' }
                      }}/>
                      </p>
                      
                    </Link>
                  </Tooltip>
                  <div className="text-start text-gray-400">
                  Brigham Young University - Idaho
                  </div>
                  <div className="text-start text-gray-400">
                  GPA 3.97, Magna Cum Laude
                  </div>
                  <div className="mt-2 mb-2 flex flex-wrap">
                    <Bubble text="Java"/>           
                    <Bubble text="Python"/>           
                    <Bubble text="C++"/>
                    <Bubble text="SQL"/>
                    <Bubble text="MySQL"/>
                    <Bubble text="Postman"/>
                    <Bubble text="Object Oriented Programming"/>
                    <Bubble text="Data Structures and Algorithms"/>
                    <Bubble text="Machine Learning"/>
                  </div>
                </h2>
              </div>
            </div> 
            <div ref={(el) => (sectionRefs.current["Certifications"] = el)} id="Certifications" className="flex flex-col items-start text-gray-100 px-4 py-4">
              <h2 className="text-overlay text-xl font-medium uppercase">Certifications</h2>
              <h3 className="text-overlay text-base mt-4 text-gray-400 text-start">
              <ul id="certs">
                {certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
              </h3>
            </div>
            <div ref={(el) => (sectionRefs.current["Achievements"] = el)} id="Achievements" className="flex flex-col justify-center items-start text-gray-100 px-4 py-4">
              <h2 className="text-overlay text-xl font-medium uppercase">Achievements</h2>
              <h3 className="text-overlay text-base mt-4 text-gray-400 text-start">
              <ul>
                <li><strong>Service Excellence Award</strong> – Recognized for outstanding work and exceptional performance, demonstrating a commitment to
                high-quality software development in a trading systems environment</li>
                <br></br>
                <li><strong>Employee of the Year</strong> – Recognized for outstanding work, exceptional
                performance, and dedication to my job, reflecting strong organizational skills and team collaboration in mission-critical projects</li>
              </ul>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
