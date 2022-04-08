import React from 'react';
import './animated.scss';
export default function AnimatedBg({ children }) {
  return (
    <div class='animated-wrapper'>
      <div class='bg'></div>
      <div class='bg bg2'></div>
      <div class='bg bg3'></div>
      {children}
    </div>
  );
}
