
import logoTarishing from '/src/assets/LogoTarishing.png';
import './AboutCom.css';

const AboutCom = () => {
  return (
    <div className="aboutcom-container" data-aos="fade-up">
      <img src={logoTarishing} className='h-12 justify-content ml-80' />      
      <h2 data-aos="zoom-in">Welcome to Tarishing View Hotel</h2>
      <p>
        Nestled amidst the serenity of mountains and lakes, our hotel is a blend of tradition and luxury. From the moment you enter, you are greeted with warmth, elegance, and unmatched hospitality.
      </p>
      <p>
        Whether your here for a relaxing escape, an adventurous trek, or a romantic getaway, our facilities are tailored to provide comfort, class, and unforgettable memories. Discover nature, peace, and personalized service at its finest.
      </p>
    </div>
  );
};

export default AboutCom;
