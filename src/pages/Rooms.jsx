
import React, { useState } from 'react';
import RoomGallery from '../components/RoomGallery';
import HeroSection from '../components/HeroSection';

const Rooms = () => {
  const [mainImage, setMainImage] = useState(
    '/assets/IMG_6304.jpg'
  );
  const [stopScroll, setStopScroll] = useState(false);

  const thumbnails = [
    '/assets/IMG_6309.jpg',
    '/assets/IMG_6277.jpg',
    '/assets/IMG_6291.jpg',
    '/assets/IMG_6304.jpg',
  ];

  const cardData = [
    {
      title: " Deluxe Room (2-4 Persons)",
      image: "./assets/IMG_6302.jpg",
    },
    {
      title: "Deluxe Room (2-4 Persons)",
      image: "./assets/IMG_6277.jpg",
    },
    {
      title: "Deluxe Room (2-4 Persons)",
      image: "./assets/IMG_6291.jpg",
    },
    {
      title: "Deluxe Room (2-4 Persons)",
      image: "./assets/IMG_6304.jpg",
    },
  ];

  return (
    <>
    
    <HeroSection image="./assets/IMG_E6024.jpg" title="Explore Our Rooms" />

    {/*  Marquee Styles */} 
    <RoomGallery />
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
 
       {/* 🔄 Scrolling Cards Section */} 
      <div className="overflow-hidden w-full relative max-w-6xl mx-auto mt-10"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        <div className="left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#F5F7FF] to-transparent" />
        <div className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: cardData.length * 2500 + "ms"
          }}
        >
          <div className="flex">
            {[...cardData, ...cardData].map((card, index) => (
              <div key={index} className="w-80 mx-4 h-[30rem] relative group hover:scale-90 transition-all duration-300">
                <img src={card.image} alt="card" className="w-full h-full object-cover" />
                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                  <p className="text-white text-xl font-semibold text-center">{card.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#F5F7FF] to-transparent" />
      </div>
 
      {/* 🖼️ Image Gallery Section */}
      <div className="flex flex-col items-center space-y-4 py-10">
        <div className="w-full max-w-3xl px-4">
          <img
            src={mainImage}
            className="w-full rounded-lg"
            alt="Main"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl px-4">
          {thumbnails.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumb ${index + 1}`}
              onClick={() => setMainImage(img)}
              className="rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80 transition"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Rooms; 
{/*import React from 'react'

const Rooms = () => {
  return (
    <div>Rooms</div>
  )
}

export default Rooms */}