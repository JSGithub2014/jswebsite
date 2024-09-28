import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import brandLogo from '../assets/brand-logo-transperent.png'; // Import the brand logo

function Footer() {
  return (
    <footer className="w-full text-white pt-4 pb-2 relative bg-[rgb(255,102,0)]">
      {/* Decorative Pattern on Top */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-700 to-transparent opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-start gap-6 relative z-10">

        {/* Brand Logo */}
        <div className="brand-logo mb-4 md:mb-0 flex-shrink-0">
          <a href="#landing" aria-label="Brand Logo">
            <img
              className="w-28 hover:scale-110 transition-transform duration-300"
              src={brandLogo}
              alt="Brand Logo"
              loading="lazy"
            />
          </a>
        </div>

        {/* Footer Sections */}
        <div className="flex flex-col md:flex-row w-full justify-between">

          {/* Support Section */}
          <div className="footer-section mb-4 md:mb-0 w-full md:w-1/4 text-right">
            <h3 className="text-lg md:text-xl font-bold mb-2">Support</h3>
            <ul className="space-y-1">
              {["FAQs", "Help Center", "Contact Support"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                    className="hover:text-black transition-colors duration-300 text-sm md:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section */}
          <div className="footer-section mb-4 md:mb-0 w-full md:w-1/4 text-right">
            <h3 className="text-lg md:text-xl font-bold mb-2">Links</h3>
            <ul className="space-y-1">
              {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                    className="hover:text-black transition-colors duration-300 text-sm md:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="footer-section w-full md:w-1/4 text-right flex flex-col ">
            <h3 className="text-lg md:text-xl font-bold mb-2">Contact Us</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li className="flex items-center justify-end space-x-2">
                <FaPhoneAlt />
                <a href="tel:+912245120755" className="hover:text-black transition-colors duration-300">
                  +91 2245120755
                </a>
              </li>
              <li className="flex items-center justify-end space-x-2">
                <FaEnvelope />
                <a href="mailto:info@jsasia.net" className="hover:text-black transition-colors duration-300">
                  info@jsasia.net
                </a>
              </li>
              <li className="flex items-center justify-end  text-right">
                <FaMapMarkerAlt />
                <span className="ml-2 text-left text-xs">
                  1202 Lodha Supremus<br />
                  Saki Vihar Road,Powai<br />
                  Mumbai 400072
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="container mx-auto mt-8 flex justify-center gap-6 text-2xl">
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
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition-colors duration-300 transform hover:scale-110"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Divider */}
      <div className="container mx-auto mt-4">
        <hr className="border-t border-zinc-500 opacity-50" />
      </div>

      {/* Copyright */}
      <div className="text-center mt-2 px-4 relative z-10">
        <p className="text-xs md:text-sm font-light">
          &copy; {new Date().getFullYear()} J&S Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
