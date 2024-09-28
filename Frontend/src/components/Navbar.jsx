import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import brandLogo from '../assets/Brand.png'; // Adjust the path as necessary

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNavbar(false);
      if (isMenuOpen) {
        setIsMenuOpen(false); // Close menu on scroll
      }
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
  }, [lastScrollY, isMenuOpen]);

  const handleLogin = () => {
    alert('Login feature is not created yet. The site is under construction.');
  };

  const handleSignup = () => {
    alert('Signup feature is not created yet. The site is under construction.');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <React.Fragment>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <nav className="flex justify-between items-center px-4 md:px-20 w-full shadow-md bg-[rgb(58,59,59)]">
          <div className="brand-logo">
            <a href="#Home">
              <img className="w-14 pt-2 py-2" src={brandLogo} alt="Brand Logo" />
            </a>
          </div>
          <div className="flex-1 hidden md:flex justify-center brand-options gap-8 uppercase font-bold">
            <a href="#Home" className="px-4 py-2 text-[rgb(255,102,0)] rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[rgb(255,102,0)]">Home</a>
            <a href="#About" className="px-4 py-2 text-[rgb(255,102,0)] rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[rgb(255,102,0)]">About</a>
            <a href="#Services" className="px-4 py-2 text-[rgb(255,102,0)] rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[rgb(255,102,0)]">Services</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={handleLogin}
              className="bg-white text-[rgb(255,102,0)] px-4 py-2 rounded-full transition duration-300 hover:bg-[#ff7c02] hover:text-white"
            >
              Login
            </button>
            <button 
              onClick={handleSignup}
              className="bg-black text-white px-4 py-2 rounded-full transition duration-300 hover:bg-[#ff7c02] hover:text-black"
            >
              Signup
            </button>
          </div>
          <button
            className={`md:hidden flex items-center justify-center p-2 rounded focus:outline-none transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
            onClick={toggleMenu}
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
          <div className="bg-[rgb(255,102,0)] flex flex-col items-center rounded-b-lg p-6">
            <a href="#landing" className="px-4 py-2 text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[rgb(255,102,0)]">Home</a>
            <a href="#about" className="px-4 py-2 text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[rgb(255,102,0)]">About</a>
            <a href="#services" className="px-4 py-2 text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[rgb(255,102,0)]">Services</a>
            <div className="flex gap-2 mt-4">
              <button 
                onClick={handleLogin}
                className="bg-white text-[rgb(255,102,0)] px-3 py-1 rounded-full text-sm transition duration-300 hover:bg-[rgb(255,102,0)] hover:text-white"
              >
                Login
              </button>
              <button 
                onClick={handleSignup}
                className="bg-black text-white px-3 py-1 rounded-full text-sm transition duration-300 hover:bg-[rgb(255,102,0)] hover:text-black"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Navbar;
