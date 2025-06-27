import React from 'react';
import './InfoSectionImageText.css';

const InfoSectionImageText = () => {
  return (
    <div className="info-row-img">
      <div className="info-img" data-aos="zoom-in">
        <img src="./assets/IMG_6288.jpg" alt="Hotel Room" />
      </div>
      <div className="info-text" data-aos="fade-left">
        <h2>Serene Ambiance with a View</h2>
        <p>
          The serene ambiance of our dining space is designed to soothe your senses. With large glass windows offering panoramic views, the gentle sounds of nature, and a warm, welcoming atmosphere, it’s the perfect place to relax and unwind. Whether you’re enjoying a family meal or a quiet cup of tea, the dining experience at our hotel is always wrapped in comfort, care, and unmatched natural beauty.
        </p>
      </div>
    </div>
  );
};

export default InfoSectionImageText;
