import img1 from '/src/assets/1.png';
import img2 from '/src/assets/2.png';

const images = [img1, img2];

const Grid = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 mx-auto">
      
      <h2 className="text-3xl text-center mb-6 font-bold">Our Dining</h2>

      <div className="flex justify-center items-center gap-4 flex-wrap">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="block max-w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
