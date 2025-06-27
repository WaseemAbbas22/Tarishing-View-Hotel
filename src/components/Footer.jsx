import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-gray-800">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start justify-between px-6 md:px-16 lg:px-24 xl:px-32 pt-12 pb-10 gap-10">

        {/* Logo Column */}
        <div className="flex-shrink-0">
          <img
            src="/assets/LogoTarishing.png"
            alt="Hotel Logo"
            className="h-40 w-auto object-contain mr-10"
          />
        </div>

        {/* Reservation */}
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-2">For Reservations</h2>
          <p>Office no 4 & 5 Lower Ground,</p>
          <p>Areej Tower, E-11/3 Markaz,</p>
          <p>near Tooba Mosque, Islamabad</p>
          <p className="mt-2 font-bold">Call: +92-3555-850462</p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li><Link to="/Rooms">Our Rooms</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="#">FAQs</Link></li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="/assets/IMG_6072.jpg"
            alt="Hotel Sign Board"
            className="h-60 w-auto object-cover rounded-md"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-white px-6 md:px-16 flex flex-col md:flex-row justify-between items-center py-4">
        <div className="flex items-center gap-3">
          <FaWhatsapp className="text-2xl text-green-400" />
          <p className="text-sm">Copyright © 2025 Tarishing View Hotel</p>
        </div>

        <div className="mt-6 md:mt-0">
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
