//import React from 'react';

import img1 from '/src/assets/1.png';
import img2 from '/src/assets/2.png';
import dining1 from '/src/assets/dining1.jpg';
import dining2 from '/src/assets/dining2.jpg';
import dining3 from '/src/assets/dining3.jpg';
import img6011 from '/src/assets/IMG_6011.jpg';
import img6039 from '/src/assets/IMG_6039.jpg';
import img6049 from '/src/assets/IMG_6049.jpg';
import img6299 from '/src/assets/IMG_6299.jpg';
const images = [
  img1,
  img2,
  dining1,
  dining2,
  dining3,
  img6011,
  img6039,
  img6049,
  img6299,
];

const Grid = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-3xl text-center mb-6">Our Dining Beauty</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition duration-300"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
