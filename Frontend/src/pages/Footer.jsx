import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import brandLogo from '../assets/brand-logo-transperent.png'; // Import the brand logo

function Footer() {
  return (
    <footer className="w-full text-white py-10 relative bg-[rgb(255,102,0)]">
      {/* Decorative Pattern on Top */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-700 to-transparent opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-start gap-8 relative z-10">

        {/* Brand Logo */}
        <div className="brand-logo mb-8 md:mb-0 flex-shrink-0">
          <a href="#landing" aria-label="Brand Logo">
            <img
              className="w-32 hover:scale-110 transition-transform duration-300"
              src={brandLogo}
              alt="Brand Logo"
              loading="lazy"
            />
          </a>
        </div>

        {/* Footer Sections */}
        <div className="flex flex-col md:flex-row w-full justify-between">
          {/* Menu Section */}
          <div className="footer-section mb-8 md:mb-0 w-full md:w-1/4 text-right">
            <h3 className="text-lg md:text-xl font-bold mb-3">Menu</h3>
            <ul className="space-y-2">
              {["About Us", "Services", "Contact Us", "Careers"].map((item) => (
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

          {/* Support Section */}
          <div className="footer-section mb-8 md:mb-0 w-full md:w-1/4 text-right">
            <h3 className="text-lg md:text-xl font-bold mb-3">Support</h3>
            <ul className="space-y-2">
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
          <div className="footer-section mb-8 md:mb-0 w-full md:w-1/4 text-right">
            <h3 className="text-lg md:text-xl font-bold mb-3">Links</h3>
            <ul className="space-y-2">
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
          <div className="footer-section w-full md:w-1/4 text-right">
            <h3 className="text-lg md:text-xl font-bold mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-end">
                <FaPhoneAlt className="mr-2" />
                <a href="tel:+912245120755" className="hover:text-black transition-colors duration-300 text-sm md:text-base">
                  +91 2245120755
                </a>
              </li>
              <li className="flex items-center justify-end">
                <FaEnvelope className="mr-2" />
                <a href="mailto:info@jsasia.net" className="hover:text-black transition-colors duration-300 text-sm md:text-base">
                  info@jsasia.net
                </a>
              </li>
              <li className="flex items-center justify-end">
                <FaMapMarkerAlt className="mr-2" />
                <span className="text-sm md:text-base">
                  1202 Lodha Supremus,<br />
                  Saki Vihar Road,<br />
                  Powai, Mumbai 400072, MH
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="container mx-auto mt-10 flex justify-center gap-6 text-3xl">
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
