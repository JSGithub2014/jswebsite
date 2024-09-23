import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import brandLogo from '../assets/brand-logo-transperent.png'; // Adjust the path as necessary

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <React.Fragment>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex justify-between items-center px-4 md:px-20 w-full shadow-md bg-[#ff7c02]">
          <div className="brand-logo">
            <a href="#landing">
              <img className="w-20 pt-2" src={brandLogo} alt="Brand Logo" />
            </a>
          </div>
          <div className="hidden md:flex brand-options flex-row gap-8 uppercase font-semibold">
            <a href="#landing" className="px-4 py-2 text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[#ff7c02]">Home</a>
            <a href="#about" className="px-4 py-2 text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[#ff7c02]">About</a>
            <a href="#services" className="px-4 py-2 text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[#ff7c02]">Services</a>
            <a href="#testimonials" className="px-4 py-2 text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[#ff7c02]">Testimonials</a>
          </div>
          <button
            className={`md:hidden flex items-center justify-center p-2 rounded focus:outline-none transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiX className="w-8 h-8 transition-transform duration-300 ease-in-out" />
            ) : (
              <HiMenu className="w-8 h-8 transition-transform duration-300 ease-in-out" />
            )}
          </button>
        </nav>
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
          <div className="bg-[#ff7c02] flex flex-col items-center">
            <a href="#landing" className="px-4 py-2 text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[#ff7c02]">Home</a>
            <a href="#about" className="px-4 py-2 text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[#ff7c02]">About</a>
            <a href="#services" className="px-4 py-2 text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[#ff7c02]">Services</a>
            <a href="#testimonials" className="px-4 py-2 text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[#ff7c02]">Testimonials</a>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Navbar;
