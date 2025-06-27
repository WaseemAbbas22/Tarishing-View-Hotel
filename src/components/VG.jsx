import React from 'react';
import { useNavigate } from 'react-router-dom';

const VG = () => {
  const navigate = useNavigate();

  const sections = [
    {
      image: './assets/IMG_6011.jpg',
      title: 'Experience Fine Dining',
      button: 'Visit Us',
      link: '/dining',
      textPosition: 'top-left',
    },
    {
      image: './assets/IMG_6314.jpg',
      title: 'Explore Our Hotel Tour',
      button: 'Visit Us',
      link: '/tour',
      textPosition: 'center-right',
    },
    {
      image: './assets/IMG_E6024.jpg',
      title: 'View Our Gallery',
      button: 'Visit Us',
      link: '/gallery',
      textPosition: 'bottom-left',
    },
  ];

  const getPositionClass = (position) => {
    switch (position) {
      case 'top-left':
        return 'top-10 left-10';
      case 'center-right':
        return 'top-1/2 right-10 transform -translate-y-1/2';
      case 'bottom-left':
        return 'bottom-10 left-10';
      default:
        return 'bottom-10 left-10';
    }
  };

  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <div
          key={index}
          className="relative h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${section.image})` }}
        >
          <div className={`absolute ${getPositionClass(section.textPosition)} text-white max-w-md`}>
            <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">{section.title}</h2>
            <button
              onClick={() => navigate(section.link)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition"
            >
              {section.button}
            </button>
          </div>
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
      ))}
    </div>
  );
};

export default VG;
