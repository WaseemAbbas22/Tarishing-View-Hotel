"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Handle scroll background
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");

    const handleToggle = () => {
      mobileMenu.classList.toggle("hidden");
    };

    menuBtn?.addEventListener("click", handleToggle);
    return () => {
      menuBtn?.removeEventListener("click", handleToggle);
    };
  }, []);

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
            className="h-15"
            src="./assets/LogoTarishing.png"
            alt="Hotel Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-12 md:pl-28 text-base md:text-lg font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Rooms">Rooms</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Dining">Dining</Link></li>
          <li><Link to="/Gallery">Gallery</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>

        {/* Creative Button 
        <button className={`hidden md:inline px-6 py-2 rounded-full transition-all duration-200 font-semibold ${
          scrolled
            ? "bg-gradient-to-r from-red-400 to-yellow-400 text-white shadow hover:scale-105"
            : "bg-white/20 text-white border border-white hover:bg-white hover:text-black"
        }`}>
        {/*  Book Your Escape 
        </button> 
                   */}
        {/* Mobile Menu Button */}
        <button
          aria-label="menu-btn"
          type="button"
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

        {/* Mobile Menu */}
        <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 hidden md:hidden">
        <ul className="hidden md:flex items-center space-x-12 md:pl-28 text-[17px] font-medium">
  {["Home", "Rooms", "About", "Dining", "Gallery", "Contact"].map((item, idx) => (
    <li key={idx} className="relative group">
      <Link
        to={`/${item === "Home" ? "" : item}`}
        className={`transition duration-300 ease-in-out ${
          scrolled ? "text-gray-800 hover:text-red-600" : "text-white hover:text-yellow-400"
        }`}
      >
        <span className="tracking-wide">{item}</span>

        {/* Animated underline */}
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  ))}
</ul>


          <button className="bg-gray-100 text-gray-700 mt-6 w-40 h-11 rounded-full border hover:bg-gray-200 transition">
            Book Now
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
