import React, { useEffect } from 'react';
import '../styles/Meteors.scss';

const Meteors = () => {
  useEffect(() => {
    const meteorContainer = document.querySelector('.meteor-container');
    if (!meteorContainer) {
      console.error('Meteor container not found!');
      return;
    }

    const numberOfMeteors = 15;

    // Create meteors dynamically
    for (let i = 1; i <= numberOfMeteors; i++) {
      const meteor = document.createElement('div');
      meteor.className = `meteor meteor-${i}`;
      meteorContainer.appendChild(meteor);
    }

    const updateMeteorPosition = () => {
      const viewportTop = window.scrollY || document.documentElement.scrollTop;

      for (let i = 1; i <= numberOfMeteors; i++) {
        const meteor = document.querySelector(`.meteor-${i}`);
        if (meteor) {
          const randomVerticalOffset = Math.random() * 250 + 50;
          const randomHorizontalOffset = Math.random() * 90 + 5;

          meteor.style.top = `${viewportTop + randomVerticalOffset}px`;
          meteor.style.left = `${randomHorizontalOffset}vw`;
        }
      }
    };

    // Initial position setup
    updateMeteorPosition();

    // Update dynamically
    window.addEventListener('scroll', updateMeteorPosition);
    window.addEventListener('resize', updateMeteorPosition);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateMeteorPosition);
      window.removeEventListener('resize', updateMeteorPosition);
      meteorContainer.innerHTML = '';
    };
  }, []);

  return <div className="meteor-container"></div>;
};

export default Meteors;
