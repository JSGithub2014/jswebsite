import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import brandLogo from '../assets/Brand.png';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Hide navbar on login and signup pages
  useEffect(() => {
    const path = location.pathname;
    setShowNavbar(path !== '/login' && path !== '/signup');
  }, [location]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Smoothly hide/show navbar
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
          <div className="flex-1 hidden md:flex justify-center brand-options gap-8 uppercase font-bold">
            <a href="#Home" className="px-4 py-2 text-[rgb(255,102,0)] rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[rgb(255,102,0)]" aria-label="Home">Home</a>
            <a href="#About" className="px-4 py-2 text-[rgb(255,102,0)] rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[rgb(255,102,0)]" aria-label="About Us">About</a>
            <a href="#Services" className="px-4 py-2 text-[rgb(255,102,0)] rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[rgb(255,102,0)]" aria-label="Services">Services</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="bg-white text-[rgb(255,102,0)] px-4 py-2 rounded-full transition duration-300 hover:bg-[#ff7c02] hover:text-white" aria-label="Login">Login</Link>
            <Link to="/signup" className="bg-black text-white px-4 py-2 rounded-full transition duration-300 hover:bg-[#ff7c02] hover:text-black" aria-label="Sign Up">Signup</Link>
            <a
              href="https://myscore.cibil.com/CreditView/login.page?enterprise=CIBIL&_gl=1*1jktei7*_gcl_aw*R0NMLjE3Mjc4NTk4NTUuQ2owS0NRanczdk8zQmhDcUFSSXNBRVdibGNDcmo4WGR4aEtod0Vzd3Nsa0NGX1hCN29IcVN6am5YcjlYQXk2NDhXZGlqMWtna0FLc1BRQWFBdVR0RUFMd193Y0I.*_gcl_au*MTc1OTg4NzQ4OC4xNzI1ODg0MjY1*_ga*ODE1MDQwMTQxLjE2NjY4NzMxMTM.*_ga_WVCRSGNX36*MTcyNzk1NzE1MC4xMC4xLjE3Mjc5NTcxNTUuMC4wLjA.*_ga_GGL6JJ79K2*MTcyNzk1NzE1MS43NC4xLjE3Mjc5NTcxNTUuNTYuMC4w&_ga=2.240802886.459507043.1727957151-815040141.1666873113&_gac=1.128965118.1727859855.Cj0KCQjw3vO3BhCqARIsAEWblcCrj8XdxhKhwEswslkCF_XB7oHqSzjnXr9XAy648Wdij1kgkAKsPQAaAuTtEALw_wcB&atvy=%7B%22231005%22%3A%22Experience+B%22%7D"
              className="bg-white text-[rgb(255,102,0)] px-4 py-2 rounded-full transition duration-300 hover:bg-[#ff7c02] hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check Your CIBIL"
            >
              Check Your CIBIL
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
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="bg-[rgb(255,102,0)] flex flex-col items-center rounded-b-lg p-6">
            <a href="#Home" className="px-4 py-2 text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[rgb(255,102,0)]" aria-label="Home">Home</a>
            <a href="#About" className="px-4 py-2 text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[rgb(255,102,0)]" aria-label="About Us">About</a>
            <a href="#Services" className="px-4 py-2 text-gray-800 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[rgb(255,102,0)]" aria-label="Services">Services</a>
            <div className="flex gap-2 mt-4">
              <Link to="/login" className="bg-white text-[rgb(255,102,0)] px-3 py-1 rounded-full text-sm transition duration-300 hover:bg-[rgb(255,102,0)] hover:text-white" aria-label="Login">Login</Link>
              <Link to="/signup" className="bg-black text-white px-3 py-1 rounded-full text-sm transition duration-300 hover:bg-[rgb(255,102,0)] hover:text-black" aria-label="Sign Up">Signup</Link>
              <a
  href="https://myscore.cibil.com/CreditView/login.page?enterprise=CIBIL&_gl=1*1jktei7*_gcl_aw*R0NMLjE3Mjc4NTk4NTUuQ2owS0NRanczdk8zQmhDcUFSSXNBRVdibGNDcmo4WGR4aEtod0Vzd3Nsa0NGX1hCN29IcVN6am5YcjlYQXk2NDhXZGlqMWtna0FLc1BRQWFBdVR0RUFMd193Y0I.*_gcl_au*MTc1OTg4NzQ4OC4xNzI1ODg0MjY1*_ga*ODE1MDQwMTQxLjE2NjY4NzMxMTM.*_ga_WVCRSGNX36*MTcyNzk1NzE1MC4xMC4xLjE3Mjc5NTcxNTUuMC4wLjA.*_ga_GGL6JJ79K2*MTcyNzk1NzE1MS43NC4xLjE3Mjc5NTcxNTUuNTYuMC4w&_ga=2.240802886.459507043.1727957151-815040141.1666873113&_gac=1.128965118.1727859855.Cj0KCQjw3vO3BhCqARIsAEWblcCrj8XdxhKhwEswslkCF_XB7oHqSzjnXr9XAy648Wdij1kgkAKsPQAaAuTtEALw_wcB&atvy=%7B%22231005%22%3A%22Experience+B%22%7D"
  className="bg-white text-blue-500 px-3 py-1 rounded-full text-sm transition duration-300 hover:bg-blue-500 hover:text-white"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="CIBIL"
>
  CIBIL
</a>

            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
