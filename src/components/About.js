// src/components/About.js
import React from 'react';
import FloatingHeader from './FloatingHeader';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <FloatingHeader>About me</FloatingHeader>
      <p>Eudcation: Bachelor of Science, Computer engineering from california State university Fullerton</p>
      <p>First Generation student</p>
      <p>Open to work!</p>
    </section>
  );
};

export default About;
