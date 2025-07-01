import HeroSection from '../components/HeroSection';
import imgNewHero from '/src/assets/IMG_6314.jpg'; // Replace with your new hero image

// Import your grid images
import img1 from '/src/assets/IMG_6066.jpg';
import img2 from '/src/assets/IMG_6011.jpg';
import img3 from '/src/assets/IMG_6299.jpg';
import img4 from '/src/assets/IMG_6037.jpg';
import img5 from '/src/assets/IMG_6049.jpg';
import img6 from '/src/assets/IMG_6039.jpg';
import img7 from '/src/assets/IMG_6008.jpg';
import img8 from '/src/assets/IMG_2404.jpg';
import img9 from '/src/assets/IMG_6288.jpg';
import img10 from '/src/assets/IMG_6011.jpg';
import img11 from '/src/assets/IMG_6011.jpg';
import img12 from '/src/assets/IMG_6011.jpg';

const Gallery = () => {
  const gridImages = [
    img1, img2, img3,
    img4, img5, img6,
    img7, img8, img9,
    img10,img11, img12,
  ];

  return (
    <>
      <HeroSection
        image={imgNewHero}
        title="Explore Our Serene Spaces"
        subtitle="Experience nature, luxury, and timeless beauty"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gridImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
