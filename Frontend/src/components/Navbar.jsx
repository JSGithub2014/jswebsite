import React, { useState, useEffect, useRef } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import brandLogo from "../assets/Brand.png";
import { AiFillBulb } from "react-icons/ai";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useFirebaseContext } from "../context/Firebase";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [confirmChecked, setConfirmChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if user is logged in
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null); // Create a ref for the menu
  const firebase = useFirebaseContext();

  const getCookie = (name) => {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    return match ? match[2] : null;
  };

  const handleLogout = () => {
    firebase.Logout();
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setEmail(user.email);
      } else {
        setUser(null);
        setEmail("");
      }
    });
  }, [user]);

  // Check if the user is authenticated
  useEffect(() => {
    // Get the token from cookies
    const token = getCookie("token"); // Replace 'token' with the name of your cookie
    console.log("Token in Navbar:", token); // Debug token

    if (token) {
      setIsAuthenticated(true); // Token exists, user is authenticated
    } else {
      setIsAuthenticated(false); // No token, user is not authenticated
    }
  }, [location]);

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Set API URL based on environment
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? "https://jswebsite-ocj7.vercel.app/api/auth/logout"
      : "http://localhost:5000/api/auth/logout"; // Local dev API URL

  // Handle logout
  const logout = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        credentials: "include", // Ensures the cookie is sent with the request
      });

      if (response.ok) {
        setIsAuthenticated(false);
        document.cookie = "token=; path=/; max-age=0;"; // Clear the cookie
        navigate("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  // Handle login (assuming you already have a login form somewhere)
  const login = async (username, password) => {
    const loginApiUrl =
      process.env.NODE_ENV === "production"
        ? "https://jswebsite-ocj7.vercel.app/api/auth/login"
        : "http://localhost:5000/api/auth/login";

    try {
      const response = await fetch(loginApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include", // Include credentials (cookies) with the request
      });

      const data = await response.json();

      if (response.ok) {
        // If login is successful, store the token in the cookie
        const token = data.token;
        document.cookie = `token=${token}; path=/; max-age=86400; Secure; HttpOnly`; // Store token in cookie with 1-day expiration
        setIsAuthenticated(true);
        navigate("/"); // Redirect to homepage or dashboard
      } else {
        console.error("Login failed:", data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Login request error:", error);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        aria-label="Main Navigation"
      >
        <nav className="flex justify-between items-center px-4 md:px-20 w-full shadow-md bg-[rgb(58,59,59)]">
          <div className="brand-logo">
            <Link to="/" aria-label="Go to Home">
              <img
                className="w-14 pt-2 py-2"
                src={brandLogo}
                alt="Brand Logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex flex-1 justify-center space-x-8 uppercase font-bold text-orange-500">
            <Link
              to="/"
              className="text-sm px-4 py-2 rounded-full transition duration-300 hover:text-white md:hover:bg-orange-500"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-sm px-4 py-2 rounded-full transition uppercase duration-300 hover:text-white md:hover:bg-orange-500">
                About
                <HiChevronDown className="transition-transform duration-300 text-2xl" />
              </button>
              <div className="absolute left-0 bg-[rgb(255,255,255)] text-orange-500 shadow-xl rounded-lg w-40 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                <Link
                  to="/about-us/our-team"
                  className="block px-4 py-2 hover:bg-orange-500 hover:text-white rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Team
                </Link>
                <Link
                  to="/about-us/our-story"
                  className="block px-4 py-2 hover:bg-orange-500 hover:text-white rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Story
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-sm px-4 py-2 rounded-full transition uppercase duration-300 hover:text-white md:hover:bg-orange-500">
                Services
                <HiChevronDown className="transition-transform duration-300 text-2xl" />
              </button>
              <div className="absolute left-0 bg-[rgb(255,255,255)] text-orange-500 shadow-xl rounded-lg w-40 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                <Link
                  to="/services/finance"
                  className="block px-4 py-2 hover:bg-orange-500 hover:text-white rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Finance
                </Link>
                <Link
                  to="/services/insurance"
                  className="block px-4 py-2 hover:bg-orange-500 hover:text-white rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Insurance
                </Link>
                <Link
                  to="/services/real-estate"
                  className="block px-4 py-2 hover:bg-orange-500 hover:text-white rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Real Estate
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {!email ? (
              <>
                <Link
                  to="/login"
                  className="bg-white text-orange-500 px-4 py-2 rounded-full transition duration-300 hover:text-white md:hover:bg-orange-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-black text-white px-4 py-2 rounded-full transition duration-300 hover:text-white md:hover:bg-orange-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Signup
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-full transition duration-300 hover:text-white md:hover:bg-red-600"
              >
                Logout
              </button>
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
            className={`md:hidden flex items-center justify-center p-2 rounded focus:outline-none transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <HiX className="w-8 h-8 text-white" />
            ) : (
              <HiMenu className="w-8 h-8 text-white" />
            )}
          </button>
        </nav>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden flex flex-col items-center bg-[rgb(58,59,59)] -mt-2 p-4"
          >
            <Link
              to="/"
              className="text-orange-500 py-2 text-lg uppercase rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="relative group">
              <button className="text-orange-500 py-2 text-lg rounded-full uppercase flex items-center">
                About
                <HiChevronDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 z-50 bg-white text-black shadow-lg rounded-lg w-40 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                <Link
                  to="/about-us/our-team"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Team
                </Link>
                <Link
                  to="/about-us/our-story"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Story
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-orange-500 py-2 text-lg rounded-full uppercase flex items-center">
                Services
                <HiChevronDown className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-40 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                <Link
                  to="/services/finance"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Finance
                </Link>
                <Link
                  to="/services/insurance"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Insurance
                </Link>
                <Link
                  to="/services/real-estate"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Real Estate
                </Link>
              </div>
            </div>
            {!email ? (
              <div className="flex space-x-2 mt-2">
                <Link
                  to="/login"
                  className="bg-white text-orange-500 px-4 py-2 rounded-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-black text-white px-4 py-2 rounded-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Signup
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  className="bg-red-500 text-white px-4 py-2 rounded-full"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            )}
            <button
              onClick={openModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2"
              aria-label="Check Your CIBIL Score"
            >
              CIBIL Score
            </button>
          </div>
        )}
      </header>

      {/* Modal for CIBIL Score */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-4 sm:p-6 max-w-xs sm:max-w-lg w-full relative z-60 shadow-lg transition-transform transform-gpu"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl sm:text-3xl"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              &times;
            </button>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              CREDIT SCORE
            </h2>
            <hr className="border-gray-300 mb-4" />
            <p className="mb-4 text-gray-700 text-sm sm:text-base">
              You will be redirected to the TransUnion CIBIL official website to
              view your CIBIL report.
            </p>
            <div className="flex items-center text-gray-600 mb-2">
              <AiFillBulb className="w-5 h-5 mr-2 text-yellow-500" />
              <span className="flex-1 text-sm sm:text-lg font-semibold text-[rgb(255,102,0)]">
                Disclaimer:
              </span>
            </div>
            <p className="text-gray-600 mb-4 text-xs sm:text-sm text-justify py-2">
              This is to inform you that by clicking on the CONFIRM button, you
              will be leaving PASPL portal and entering website operated by
              other parties. Such links are provided only for the convenience of
              the client and PASPL portal does not control or endorse such
              website, and is not responsible for their contents. The use of
              such websites is also subject to the terms of use and other terms
              and guidelines, if any, contained within each such website. In the
              event that any of the terms contained herein conflict with the
              terms of use or other terms and guidelines contained within any
              such website, then the terms of use and other terms guidelines for
              such website shall prevail.
            </p>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={confirmChecked}
                onChange={(e) => setConfirmChecked(e.target.checked)}
                className="mr-2"
              />
              <label className="text-gray-700 text-xs sm:text-sm">
                I confirm that I have read the above disclaimer
              </label>
            </div>
            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mt-4">
              <a
                href="https://www.cibil.com/cibilrank"
                className={`bg-gray-300 text-black px-3 py-1 rounded-full text-center transition duration-300 ${
                  !confirmChecked ? "opacity-50 cursor-not-allowed" : ""
                } mb-2 sm:mb-0`}
                onClick={(e) => {
                  if (!confirmChecked) e.preventDefault();
                }}
                aria-label="View CIBIL Rank & CCR"
                disabled={!confirmChecked}
              >
                CIBIL RANK & CCR
              </a>
              <a
                href="https://www.cibil.com/choose-subscription"
                className={`bg-blue-500 text-zinc-100 px-3 py-1 rounded-full text-center transition duration-300 ${
                  !confirmChecked ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={(e) => {
                  if (!confirmChecked) e.preventDefault();
                }}
                aria-label="Individual CIBIL Button"
                disabled={!confirmChecked}
              >
                INDIVIDUAL CIBIL
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
