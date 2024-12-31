import React, { useEffect } from 'react';
import styled from 'styled-components';

const Radio = ({ nav }) => {
  useEffect(() => {
    const radioButtons = document.querySelectorAll('.radio-container input');
    radioButtons.forEach((radio) => {
      if (radio.id === `radio-${nav.toLowerCase()}`) {
        radio.checked = true;
      }
    });
  }, [nav]);

  return (
    <StyledWrapper nav={nav}>
      <div className="radio-container">
        <input
          onClick={() => {
            document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' });
          }}
          defaultChecked
          id="radio-about"
          name="radio"
          type="radio"
        />
        <label htmlFor="radio-about" className={nav === 'About' ? 'active' : ''}>
          ABOUT
        </label>

        <input
          onClick={() => {
            document.getElementById('Experience')?.scrollIntoView({ behavior: 'smooth' });
          }}
          id="radio-experience"
          name="radio"
          type="radio"
        />
        <label htmlFor="radio-experience" className={nav === 'Experience' ? 'active' : ''}>
          EXPERIENCE
        </label>

        <input
          onClick={() => {
            document.getElementById('Projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          id="radio-projects"
          name="radio"
          type="radio"
        />
        <label htmlFor="radio-projects" className={nav === 'Projects' ? 'active' : ''}>
          PROJECTS
        </label>

        <input
          onClick={() => {
            document.getElementById('Education')?.scrollIntoView({ behavior: 'smooth' });
          }}
          id="radio-education"
          name="radio"
          type="radio"
        />
        <label htmlFor="radio-education" className={nav === 'Education' ? 'active' : ''}>
          EDUCATION
        </label>

        <input
          onClick={() => {
            document.getElementById('Certifications')?.scrollIntoView({ behavior: 'smooth' });
          }}
          id="radio-certifications"
          name="radio"
          type="radio"
        />
        <label htmlFor="radio-certifications" className={nav === 'Certifications' ? 'active' : ''}>
          CERTIFICATIONS
        </label>

        <input
          onClick={() => {
            document.getElementById('Achievements')?.scrollIntoView({ behavior: 'smooth' });
          }}
          id="radio-achievements"
          name="radio"
          type="radio"
        />
        <label htmlFor="radio-achievements" className={nav === 'Achievements' ? 'active' : ''}>
          ACHIEVEMENTS
        </label>

        <div className="glider-container">
          <div className="glider" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .radio-container {
    --main-color: #008080;
    --main-color-opacity: #f7e4791c;
    --total-radio: 6;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-right: 0.5rem;
    align-items: flex-start;
    width: auto;
    margin-left: 20px;
    margin-top: calc(1rem + 50px);
    z-index: 30;
  }

  .radio-container input {
    cursor: pointer;
    appearance: none;
    display: none;
  }

  .radio-container .glider-container {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(27, 27, 27, 1) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    width: 1px;
  }

  .radio-container .glider-container .glider {
    position: relative;
    height: calc(100% / var(--total-radio));
    width: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      var(--main-color) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56);
  }

  .radio-container label {
    cursor: pointer;
    padding: 1rem;
    position: relative;
    color: grey;
    transition: all 0.3s ease-in-out;
  }

  .radio-container input:checked + label {
    color: white;
  }

  .radio-container label.active + label:hover {
    color: white;
  }

  .radio-container label:not(.active) + label:hover {
    color: grey;
  }

  .radio-container input:nth-of-type(1):checked ~ .glider-container .glider {
    transform: translateY(0);
  }

  .radio-container input:nth-of-type(2):checked ~ .glider-container .glider {
    transform: translateY(100%);
  }

  .radio-container input:nth-of-type(3):checked ~ .glider-container .glider {
    transform: translateY(200%);
  }

  .radio-container input:nth-of-type(4):checked ~ .glider-container .glider {
    transform: translateY(300%);
  }

  .radio-container input:nth-of-type(5):checked ~ .glider-container .glider {
    transform: translateY(400%);
  }

  .radio-container input:nth-of-type(6):checked ~ .glider-container .glider {
    transform: translateY(500%);
  }

  .radio-container input:nth-of-type(7):checked ~ .glider-container .glider {
    transform: translateY(600%);
  }

  .radio-container input:nth-of-type(8):checked ~ .glider-container .glider {
    transform: translateY(700%);
  }

  .radio-container input:nth-of-type(9):checked ~ .glider-container .glider {
    transform: translateY(800%);
  }

  .radio-container input:nth-of-type(10):checked ~ .glider-container .glider {
    transform: translateY(900%);
  }
`;

export default Radio;