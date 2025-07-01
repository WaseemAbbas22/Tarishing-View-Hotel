"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoTarishing from '/src/assets/LogoTarishing.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="text-sm text-white w-full">
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-0 h-[60px] transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md text-gray-900"
            : "bg-transparent text-white"
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <img
            className="h-14"
            src={logoTarishing}
            alt="Hotel Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-12 md:pl-28 text-base md:text-lg font-medium">
          {["Home", "Rooms", "About", "Dining", "Gallery", "Contact"].map((item, idx) => (
            <li key={idx} className="relative group">
              <Link
                to={`/${item === "Home" ? "" : item}`}
                className="transition duration-300 ease-in-out hover:text-yellow-400"
              >
                <span className="tracking-wide">{item}</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          aria-label="menu-btn"
          type="button"
          onClick={toggleMenu}
          className="menu-btn inline-block md:hidden active:scale-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-full bg-white shadow-sm p-6 z-40 transition-transform duration-300 ease-in-out">
          <ul className="flex flex-col space-y-4 text-gray-800 text-lg font-medium">
            {["Home", "Rooms", "About", "Dining", "Gallery", "Contact"].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={`/${item === "Home" ? "" : item}`}
                  className="block"
                  onClick={() => setMenuOpen(false)} // close menu on link click
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <button className="bg-gray-100 text-gray-700 mt-6 w-40 h-11 rounded-full border hover:bg-gray-200 transition">
            Book Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
