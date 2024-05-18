// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { useSpring, animated } from '@react-spring/web';

const Footer = () => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 800
  });

  return (
    <animated.footer style={styles}>
      <p>&copy; 2024 Your Name. All rights reserved.</p>
    </animated.footer>
  );
};

export default Footer;
