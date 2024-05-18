// src/components/About.js
import React from 'react';
import FloatingHeader from './FloatingHeader';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <FloatingHeader>About me</FloatingHeader>
      <p>Education: Bachelor of Science, Computer Engineering from California State university Fullerton</p>
      <p>First Generation student</p>
      <p>Open to work!</p>
    </section>
  );
};

export default About;
