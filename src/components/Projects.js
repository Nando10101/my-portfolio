// src/components/Projects.js
import React from 'react';
import FloatingHeader from './FloatingHeader';
import './Projects.css';
import Vanityvue from '../images/Vanityvue.jpeg';

const Projects = () => {
  return (
    <section id="projects">
      <FloatingHeader>Projects</FloatingHeader>
      <div className="project-list">
        <div className="project-item">
          <h3>F.I.R.E</h3>
          <p>Researching cheap yet effective methods to sense fires out int the wild</p>
          <a href="https://www.fullerton.edu/bigideas/engineering-wildfire-mitigation.html" target="_blank" rel="noopener noreferrer">More info</a>
        </div>
        <div className="project-item">
          <h3>Senior Project (Vanity Vue) </h3>
          <p>A Mirror that monitors your health via various sensors and then displays it on a integrated screen</p>
          <img src={Vanityvue} alt="Vanity Vue" />
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
