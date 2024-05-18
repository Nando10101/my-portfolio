// src/components/Photo.js
import React from 'react';
import './Photo.css';
import { useSpring, animated } from '@react-spring/web';
import fernando from '../images/fernando.jpeg';

const Photo = () => {
  const float = useSpring({
    loop: { reverse: true },
    to: { transform: 'translateY(-10px)' },
    from: { transform: 'translateY(0px)' },
    config: { duration: 2000 }
  });

  return (
    <animated.div style={float} className="photo-container">
      <img src={fernando} alt="Fernando Cerna" className="profile-photo" />
    </animated.div>
  );
};

export default Photo;
