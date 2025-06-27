import React from 'react';

const images = [
  './assets/1.png',
  './assets/2.png',
  './assets/dining1.jpg',
  './assets/dining2.jpg',
  './assets/dining3.jpg',
  './assets/IMG_6011.jpg',
  './assets/IMG_6039.jpg',
  './assets/IMG_6049.jpg',
  './assets/IMG_6299.jpg',
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
