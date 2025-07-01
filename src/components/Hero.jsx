import heroBg from '/src/assets/IMG_6011.jpg';

const Hero = () => {
  return (
    <div
      className="flex flex-col justify-center md:justify-start px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-20 md:py-32 text-white bg-no-repeat bg-cover bg-center h-[80vh] md:h-screen"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      {/* Tagline */}
      <p className="bg-[#49B9FF]/70 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base text-black w-max mt-16 md:mt-28">
        The Ultimate Hotel Experience
      </p>

      {/* Main Heading */}
      <h1 className="font-playfair text-black text-2xl sm:text-3xl md:text-5xl md:leading-[60px] font-bold max-w-lg mt-3">
        Discover your Perfect Gateway Destination
      </h1>

      {/* Subtext */}
      <p className="max-w-md mt-2 text-xs sm:text-sm md:text-base text-black">
        Unparalleled luxury and comfort await at the worlds most exclusive hotels and resorts. Start your journey today.
      </p>

      {/* Call to Action Button (Optional) */}
      {/* <button className="mt-6 bg-[#49B9FF] hover:bg-[#36a3e6] text-black font-semibold px-5 py-2 rounded-full text-sm md:text-base transition">
        Book Now
      </button> */}
    </div>
  );
};

export default Hero;
