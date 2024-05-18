// src/components/FloatingHeader.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const FloatingHeader = ({ children }) => {
  const float = useSpring({
    loop: { reverse: true },
    to: { transform: 'translateY(-10px)' },
    from: { transform: 'translateY(0px)' },
    config: { duration: 2000 }
  });

  return <animated.h2 style={float}>{children}</animated.h2>;
};

export default FloatingHeader;
