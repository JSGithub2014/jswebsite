import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import brandLogo from '../assets/brand-logo-transperent.png'; // Import the brand logo

function Footer() {
  return (
    <footer className="w-full bg-zinc-700 text-white py-10 relative">
      {/* Decorative Pattern on Top */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-700 to-transparent opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8 relative z-10">

        {/* Brand Logo */}
        <div className="brand-logo mb-8 md:mb-0">
          <a href="#landing" aria-label="Brand Logo">
            <img
              className="w-28 hover:scale-110 transition-transform duration-300"
              src={brandLogo} // Use the imported logo
              alt="Brand Logo"
              loading="lazy"
            />
          </a>
        </div>

        {/* Menu Section */}
        <div className="footer-section">
          <h3 className="text-xl font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105">About Us</a></li>
            <li><a href="#services" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105">Services</a></li>
            <li><a href="#contact" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105">Contact Us</a></li>
            <li><a href="#careers" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105">Careers</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#faq" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105">FAQs</a></li>
            <li><a href="#help" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105">Help Center</a></li>
            <li><a href="#contact-support" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105">Contact Support</a></li>
          </ul>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#privacy" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105">Terms & Conditions</a></li>
            <li><a href="#sitemap" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105">Sitemap</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li><a href="tel:+123456789" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105">+1 234 567 89</a></li>
            <li><a href="mailto:support@example.com" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105">support@example.com</a></li>
            <li><a href="#location" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105">1234 Main St, City, Country</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="container mx-auto mt-10 flex justify-center gap-8 text-3xl">
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
