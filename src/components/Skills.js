// src/components/Skills.js
import React from 'react';
import FloatingHeader from './FloatingHeader';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <FloatingHeader>Skills</FloatingHeader>
      <div className="skills-list">
        <div className="skill-item">JavaScript</div>
        <div className="skill-item">React</div>
        <div className="skill-item">CSS</div>
        <div className="skill-item">HTML</div>
        <div className="skill-item">Node.js</div>
        <div className="skill-item">C++</div>
        <div className="skill-item">Swift/swiftUi</div>
        <div className="skill-item">Spanish</div>
        {/* Add more skills as needed */}
      </div>
    </section>
  );
};

export default Skills;
