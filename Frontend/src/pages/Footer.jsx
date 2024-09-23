import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-zinc-700 text-white py-10 relative">
      {/* Decorative Pattern on Top */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-700 to-transparent opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">

        {/* Brand Logo */}
        <div className="brand-logo">
          <a href="#landing" aria-label="Brand Logo">
            <img
              className="w-28 hover:scale-110 transition-transform duration-300"
              src="./src/assets/brand-logo-transperent.png"
              alt="Brand Logo"
              loading="lazy"
            />
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons flex gap-8 text-3xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition-colors duration-300 transform hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-colors duration-300 transform hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Footer Links */}
        <nav className="footer-links flex flex-col md:flex-row gap-6">
          <a
            href="#privacy"
            className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105"
            aria-label="Terms and Conditions"
          >
            Terms & Conditions
          </a>
        </nav>
      </div>

      {/* Divider */}
      <div className="container mx-auto mt-10">
        <hr className="border-t border-zinc-500 opacity-50" />
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 px-4 relative z-10">
        <p className="text-sm font-light">
          &copy; {new Date().getFullYear()} J&S Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
