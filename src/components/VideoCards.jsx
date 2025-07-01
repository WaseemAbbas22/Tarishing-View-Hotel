import img6008 from '/src/assets/IMG_6008.jpg';
import img6009 from '/src/assets/IMG_6009.jpg';

//import React from 'react';

const VideoCards = () => {
  return (
    <div className="px-6 md:px-20 py-10 flex flex-col gap-12 bg-white text-gray-800">
      {/* Video Card 1 */}
      <div className="flex flex-col md:flex-row bg-gray-100 rounded-xl shadow-md overflow-hidden">
        <img
          className="w-full md:w-1/2 h-auto object-cover"
          src={img6008}
        />
        <div className="p-6 flex items-center justify-center md:w-1/2">
          <p className="text-lg font-medium">
            Step into elegance: A glimpse of our grand hotel entrance, where your luxury journey begins.
          </p>
        </div>
      </div>
      {/* Video Card 2 */}
      <div className="flex flex-col md:flex-row-reverse bg-gray-100 rounded-xl shadow-md overflow-hidden">
        
        <img
          className="w-full md:w-1/2 h-auto object-cover"
          src={img6009}
        />
          <p className="text-lg font-medium">
            Hear from our owner: The story, the service, and the heart of hospitality at our mountain retreat.
          </p>
        </div>
      </div>
  );
};

export default VideoCards;
