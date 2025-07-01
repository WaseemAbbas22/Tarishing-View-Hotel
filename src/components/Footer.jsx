import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import logoTarishing from '/src/assets/LogoTarishing.png';
import img6072 from '/src/assets/IMG_6072.jpg';

const Footer = () => {
  return (
    <footer className="w-full text-gray-800 bg-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-6 gap-6">

        {/* Logo + Reservation Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 text-center md:text-left w-full md:w-auto">
          <img
            src={logoTarishing}
            alt="Hotel Logo"
            className="h-14 w-auto object-contain mx-auto md:mx-0"
          />
          <div className="mt-2 md:mt-0">
            <p className="font-bold text-sm md:text-lg">Call: +92-3555-850462</p>
            <p className="text-xs md:text-base">Muhammad Hassan</p>
            <p className="text-xs md:text-base">Tarishing Village, Astore</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full md:flex-1 text-center md:text-center">
          <h2 className="text-base md:text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm md:text-base">
            <li><Link to="/Rooms">Our Rooms</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="#">FAQs</Link></li>
          </ul>
        </div>

        {/* Image (Hidden on mobile) */}
        <div className="hidden md:block flex-shrink-0">
          <img
            src={img6072}
            alt="Hotel Sign Board"
            className="h-32 w-auto object-cover rounded-md"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-white px-4 sm:px-6 md:px-16 flex flex-col md:flex-row justify-center md:justify-between items-center py-3 space-y-3 md:space-y-0">
        <div className="flex items-center gap-2 text-xs md:text-base">
          <FaWhatsapp className="text-xl md:text-2xl text-green-400" />
          <p>© 2025 Tarishing View Hotel</p>
        </div>

        <button
          className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm md:text-base"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
