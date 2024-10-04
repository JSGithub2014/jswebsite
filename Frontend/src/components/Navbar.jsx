import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import brandLogo from '../assets/Brand.png';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setShowNavbar(path !== '/login' && path !== '/signup');
  }, [location]);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        aria-label="Main Navigation"
      >
        <nav className="flex justify-between items-center px-4 md:px-20 w-full shadow-md bg-[rgb(58,59,59)]">
          <div className="brand-logo">
            <a href="#Home" aria-label="Go to Home">
              <img className="w-14 pt-2 py-2" src={brandLogo} alt="Brand Logo" />
            </a>
          </div>
          <div className="hidden md:flex flex-1 justify-center space-x-8 uppercase font-bold text-orange-500">
            <a href="#Home" className="px-4 py-2 rounded-full transition duration-300 hover:text-white md:hover:bg-orange-500">Home</a>
            <a href="#About" className="px-4 py-2 rounded-full transition duration-300 hover:text-white md:hover:bg-orange-500">About</a>
            <a href="#Services" className="px-4 py-2 rounded-full transition duration-300 hover:text-white md:hover:bg-orange-500">Services</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="bg-white text-orange-500 px-4 py-2 rounded-full transition duration-300 hover:text-white md:hover:bg-orange-500">Login</Link>
            <Link to="/signup" className="bg-black text-white px-4 py-2 rounded-full transition duration-300 hover:text-white md:hover:bg-orange-500">Signup</Link>
            <a
              href="https://myscore.cibil.com/CreditView/login.page?enterprise=CIBIL"
              className="bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 hover:text-white md:hover:bg-blue-600"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check Your CIBIL"
            >
              CIBIL Score
            </a>
          </div>
          <button
            className={`md:hidden flex items-center justify-center p-2 rounded focus:outline-none transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <HiX className="w-8 h-8 text-white" /> : <HiMenu className="w-8 h-8 text-white" />}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-[rgb(58,59,59)] p-4">
            <a href="#Home" className="text-orange-500 py-2 rounded-full">Home</a>
            <a href="#About" className="text-orange-500 py-2 rounded-full">About</a>
            <a href="#Services" className="text-orange-500 py-2 rounded-full">Services</a>
            <div className="flex space-x-2 mt-2">
              <Link to="/login" className="bg-white text-orange-500 px-4 py-2 rounded-full">Login</Link>
              <Link to="/signup" className="bg-black text-white px-4 py-2 rounded-full">Signup</Link>
            </div>
            <a
              href="https://myscore.cibil.com/CreditView/login.page?enterprise=CIBIL"
              className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check Your CIBIL"
            >
              CIBIL Score
            </a>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
