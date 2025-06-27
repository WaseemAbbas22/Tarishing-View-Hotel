import React from 'react';
import './RoomGallery.css';

const rooms = [
  {
    title: 'Deluxe Room ',
    image: './assets/IMG_6277.jpg',
    adults: 2,
    children: 4,
  },
  {
    title: 'Deluxe Room ',
    image: './assets/IMG_6292.jpg',
    adults: 2,
    children: 4,
  },
  {
    title: 'Deluxe Room ',
    image: './assets/IMG_6291.jpg',
    adults: 2,
    children: 4,
  },
  {
    title: 'Deluxe Room ',
    image: './assets/IMG_6304.jpg',
    adults: 2,
    children: 4,
  },
  {
    title: 'Deluxe Room ',
    image: './assets/IMG_6309.jpg',
    adults: 2,
    children: 4,
  },
  {
    title: 'Deluxe Room ',
    image: './assets/IMG_6302.jpg',
    adults: 2,
    children: 4,
  },
];

const RoomGallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-heading">
        A <span>shelter</span> from the frenzy of everyday life
      </h2>
      <p className="gallery-subtext">
        When you host a party or family reunion, the special celebrations let you strengthen bonds with.
      </p>
      <div className="rooms-grid">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <img src={room.image} alt={room.title} className="room-image" />
            <h3 className="room-title">{room.title}</h3>
            <div className="room-info">
              <div>
                <strong>{room.adults}</strong>
                <div> ADULTS</div>
              </div>
              <div>
                <strong>{room.children}</strong>
                <div>MAX</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomGallery;
