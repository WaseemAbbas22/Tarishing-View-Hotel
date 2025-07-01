import img6071 from '/src/assets/IMG_6071.jpg';
import img6059 from '/src/assets/IMG_6059.jpg';
import imgE6003 from '/src/assets/IMG_E6003.jpg';
import img6070 from '/src/assets/IMG_6070.jpg';
import imgE6007 from '/src/assets/IMG_E6007.jpg';
import img6063 from '/src/assets/IMG_6063.jpg';
//imort React from 'react';

const images = [
  img6071,
  img6059,
  imgE6003,
  img6070,
  imgE6007,
  img6063
];

const OwnerGallery = () => {
  return (
    <section className="px-6 md:px-20 py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Moments Become Memories
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
