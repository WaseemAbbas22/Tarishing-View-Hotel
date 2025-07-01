// src/components/Gallery.jsx
// import React from 'react';
import { useNavigate } from 'react-router-dom';
import img6291 from '/src/assets/IMG_6291.jpg';
import img6309 from '/src/assets/IMG_6309.jpg';
import img6292 from '/src/assets/IMG_6292.jpg';
import img6277 from '/src/assets/IMG_6277.jpg';
import img6302 from '/src/assets/IMG_6302.jpg';
import img6304 from '/src/assets/IMG_6304.jpg';
const galleryImages = [
  {
    image: img6291,
    title: 'Premium Suite',
    price: 'Rs. 15,000 / night',
    capacity: '4 Adults',
  },
  {
    image: img6309,
    title: 'Double Room',
    price: 'Rs. 7,200 / night',
    capacity: '2 Adults',
  },
  {
    image: img6292,
    title: 'Twin Room',
    price: 'Rs. 6,500 / night',
    capacity: '2 Adults',
  },
  {
    image: img6277,
    title: 'Suite with Balcony',
    price: 'Rs. 13,000 / night',
    capacity: '3 Adults + 1 Child',
  },
  {
    image: img6302,
    title: 'Budget Room',
    price: 'Rs. 4,000 / night',
    capacity: '2 Adults',
  },
  {
    image: img6304,
    title: 'Royal Suite',
    price: 'Rs. 22,000 / night',
    capacity: '5 Adults',
  },
];

const GalleryCom = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/gallery'); // Ensure route is configured
  };

  return (
    <div className="bg-gray-100 py-12 px-4 pt-[100px]">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Rooms</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {galleryImages.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={handleClick}
          >
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-Transperant bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm">{item.price}</p>
              <p className="text-xs">{item.capacity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCom;
