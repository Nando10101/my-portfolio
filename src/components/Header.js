// src/components/Header.js
import React from 'react';
import './Header.css';
import { useSpring, animated } from '@react-spring/web';

const Header = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translateY(-100px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  });

  return (
    <animated.header style={styles}>
      <h1>Fernando Cerna</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </animated.header>
  );
};

export default Header;
