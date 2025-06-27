
import React from 'react';
import './HeroSection.css';

const HeroSection = ({ image, title, subtitle }) => {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
 