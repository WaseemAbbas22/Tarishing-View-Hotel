import React from 'react';

const images = [
  "./assets/IMG_6071.jpg",
  "./assets/IMG_6059.jpg",
  "./assets/IMG_E6003.jpg",
  "./assets/IMG_6070.jpg",
  "./assets/IMG_E6007.jpg",
  "./assets/IMG_6063.jpg"
];

const OwnerGallery = () => {
  return (
    <section className="px-6 md:px-20 py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Moments with Our Owner
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow hover:shadow-lg transition-all duration-300">
            <img
              src={src}
              alt={`Owner Gallery ${idx + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OwnerGallery;
