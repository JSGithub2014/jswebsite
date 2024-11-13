import React, { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import brandLogo from '../assets/Brand.png';
import { AiFillBulb } from 'react-icons/ai';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [confirmChecked, setConfirmChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if user is logged in
  const [userName, setUserName] = useState(''); // Store the user's name
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null); // Create a ref for the menu

  // Check if the user is authenticated
  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    if (token) {
      setIsAuthenticated(true); // If there's a token, user is logged in
      // Decode the token and set the user's name (assuming it's stored in the token)
      const decodedToken = JSON.parse(atob(token.split('=')[1].split('.')[1])); // Decode the token (assuming it's a JWT)
      setUserName(decodedToken?.user?.name || ''); // Get the user's name from the token payload
    } else {
      setIsAuthenticated(false);
    }
  }, [location]); // Check on location change

  // Toggle Navbar visibility on scroll
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

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle modal open and close
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setConfirmChecked(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Set API URL based on environment
  const apiUrl = process.env.NODE_ENV === 'production'
    ? 'https://jswebsite-ocj7.vercel.app/api/auth/logout' 
    : 'http://localhost:5000/api/auth/logout'; // Local dev API URL

  // Handle logout
  const logout = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        credentials: 'include', // Ensures the cookie is sent with the request
      });

      if (response.ok) {
        // Reset authentication state
        setIsAuthenticated(false);
        setUserName(''); // Reset the user's name on logout
        navigate('/');
        // Clear the authentication token from cookies or localStorage if needed
        document.cookie = 'token=; Max-Age=0; path=/';
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error', error);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} aria-label="Main Navigation">
        <nav className="flex justify-between items-center px-4 md:px-20 w-full shadow-md bg-[rgb(58,59,59)]">
          <div className="brand-logo">
            <Link to="/" aria-label="Go to Home">
              <img className="w-14 pt-2 py-2" src={brandLogo} alt="Brand Logo" />
            </Link>
          </div>
          <div className="hidden md:flex flex-1 justify-center space-x-8 uppercase font-bold text-orange-500">
            <Link to="/" className="text-sm px-4 py-2 rounded-full transition duration-300 hover:text-white md:hover:bg-orange-500">Home</Link>
            <div className="relative group">
              <button className="flex items-center text-sm px-4 py-2 rounded-full transition uppercase duration-300 hover:text-white md:hover:bg-orange-500">
                About
                <HiChevronDown className="transition-transform duration-300 text-2xl" />
              </button>
              <div className="absolute left-0 bg-[rgb(255,255,255)] text-orange-500 shadow-xl rounded-lg w-40 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                <Link to="/about-us/our-team" className="block px-4 py-2 hover:bg-orange-500 hover:text-white rounded-lg" onClick={() => setIsMenuOpen(false)}>Our Team</Link>
                <Link to="/about-us/our-story" className="block px-4 py-2 hover:bg-orange-500 hover:text-white rounded-lg" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-sm px-4 py-2 rounded-full transition uppercase duration-300 hover:text-white md:hover:bg-orange-500">
                Services
                <HiChevronDown className="transition-transform duration-300 text-2xl" />
              </button>
              <div className="absolute left-0 bg-[rgb(255,255,255)] text-orange-500 shadow-xl rounded-lg w-40 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                <Link to="/services/finance" className="block px-4 py-2 hover:bg-orange-500 hover:text-white rounded-lg" onClick={() => setIsMenuOpen(false)}>Finance</Link>
                <Link to="/services/insurance" className="block px-4 py-2 hover:bg-orange-500 hover:text-white rounded-lg" onClick={() => setIsMenuOpen(false)}>Insurance</Link>
                <Link to="/services/real-estate" className="block px-4 py-2 hover:bg-orange-500 hover:text-white rounded-lg" onClick={() => setIsMenuOpen(false)}>Real Estate</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-white text-lg">Hello, {userName}</span>
                <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-full transition duration-300 hover:text-white md:hover:bg-red-600">
                  Logout
                </button>
              </>
            ) : (
              <>
                <div className="flex space-x-4">
                  <Link to="/login" className="bg-white text-orange-500 px-4 py-2 rounded-full transition duration-300 hover:text-white md:hover:bg-orange-500" onClick={() => setIsMenuOpen(false)}>Login</Link>
                  <Link to="/signup" className="bg-black text-white px-4 py-2 rounded-full transition duration-300 hover:text-white md:hover:bg-orange-500" onClick={() => setIsMenuOpen(false)}>Signup</Link>
                </div>
              </>
            )}
            <button
              onClick={openModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 hover:text-white md:hover:bg-blue-600"
              aria-label="Check Your CIBIL Score"
            >
              CIBIL Score
            </button>
          </div>
          <button
            className={`md:hidden flex items-center justify-center p-2 rounded focus:outline-none transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <HiX className="text-white" size={30} /> : <HiMenu className="text-white" size={30} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden flex flex-col items-center bg-[rgb(58,59,59)] -mt-2 p-4">
          <Link to="/" className="text-orange-500 py-2 text-lg uppercase rounded-full" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mt-4 w-full">
            {isAuthenticated ? (
              <>
                <span className="text-orange-500 py-2">Hello, {userName}</span>
                <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-full transition duration-300 hover:text-white md:hover:bg-red-600">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="bg-white text-orange-500 px-4 py-2 rounded-full" onClick={() => setIsMenuOpen(false)}>Login</Link>
                <Link to="/signup" className="bg-black text-white px-4 py-2 rounded-full" onClick={() => setIsMenuOpen(false)}>Signup</Link>
              </>
            )}
          </div>
          <button
            onClick={openModal}
            className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2"
            aria-label="Check Your CIBIL Score"
          >
            CIBIL Score
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
