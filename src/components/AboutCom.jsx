import logoTarishing from '/src/assets/LogoTarishing.png';
import './AboutCom.css';

const AboutCom = () => {
  return (
    <div className="aboutcom-container px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-12 text-center space-y-4" data-aos="fade-up">
      
      {/* Logo */}
      <div className="flex justify-center">
        <img src={logoTarishing} alt="Tarishing View Hotel Logo" className="h-12 sm:h-16 md:h-20" />
      </div>

      {/* Heading */}
      <h2 className="text-l sm:text-xl md:text-xl text-gray-600" data-aos="zoom-in">
        Welcome to Tarishing View Hotel
      </h2>

      {/* Paragraphs */}
      <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-600">
        Nestled amidst the serenity of mountains and lakes, our hotel is a blend of tradition and luxury. From the moment you enter, you are greeted with warmth, elegance, and unmatched hospitality.
      </p>

      <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-600">
        Whether youre here for a relaxing escape, an adventurous trek, or a romantic getaway, our facilities are tailored to provide comfort, class, and unforgettable memories. Discover nature, peace, and personalized service at its finest.
      </p>
    </div>
  );
};

export default AboutCom;
