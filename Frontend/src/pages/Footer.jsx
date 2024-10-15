import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import brandLogo from '../assets/reloader-logo.png';

function Footer() {
  return (
    <footer className="w-full text-white pt-2 pb-2 relative bg-[rgb(255,102,0)]">
      {/* Decorative Pattern on Top */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-700 to-transparent opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-4 relative z-10">

        {/* Brand Logo */}
        <div className="brand-logo mb-2 md:mb-0 flex-shrink-0 w-full md:w-1/4 flex justify-center md:justify-start">
          <a href="#landing" aria-label="Brand Logo">
            <img
              className="w-20 md:w-24 hover:scale-110 transition-transform duration-300 lg:mt-8"
              src={brandLogo}
              alt="Brand Logo"
              loading="lazy"
            />
          </a>
        </div>

        {/* Footer Sections */}
        <div className="flex flex-col w-full justify-between gap-2 md:flex-row">

          {/* Support Section */}
          <div className="footer-section mb-2 md:mb-0 w-full text-center md:text-left">
            <h3 className="text-sm md:text-lg font-bold mb-1">Support</h3>
            <ul className="space-y-1">
              {["FAQs", "Help Center", "Contact Support"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                    className="hover:text-black transition-colors duration-300 text-xs md:text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section */}
          <div className="footer-section mb-2 md:mb-0 w-full text-center md:text-left">
            <h3 className="text-sm md:text-lg font-bold mb-1">Links</h3>
            <ul className="space-y-1">
              {["Privacy Policy", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                    className="hover:text-black transition-colors duration-300 text-xs md:text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="footer-section w-full text-center md:text-left">
            <h3 className="text-sm md:text-lg font-bold mb-1">Contact Us</h3>
            <ul className="space-y-1">
              {/* Mobile Number */}
              <li className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="text-lg mr-2" />
                <a href="tel:+912245120755" className="hover:text-black transition-colors duration-300 text-xs md:text-sm">
                  +91 2245120755
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="text-lg mr-2" />
                <a href="mailto:info@jsasia.net" className="hover:text-black transition-colors duration-300 text-xs md:text-sm">
                  info@jsasia.net
                </a>
              </li>

              {/* Address */}
              <li className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="text-2xl mr-2" />
                <div className="flex flex-col text-left text-xs md:text-sm -ml-1">
                  <span>1202 Lodha Supremus</span>
                  <span>Saki Vihar Road, Andheri East,</span>
                  <span>Mumbai 400072 Maharashtra</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="container mx-auto mt-2 flex justify-center gap-4 text-xl">
        {[ 
          { icon: FaFacebookF, link: "https://facebook.com", color: "hover:text-blue-600", label: "Facebook" },
          { icon: FaTwitter, link: "https://twitter.com", color: "hover:text-blue-400", label: "Twitter" },
          { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/jsasia/posts/?feedView=all", color: "hover:text-blue-700", label: "LinkedIn" },
          { icon: FaInstagram, link: "https://www.instagram.com", color: "hover:text-pink-500", label: "Instagram" },
        ].map(({ icon: Icon, link, color, label }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`${color} transition-colors duration-300 transform hover:scale-110`}
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="container mx-auto mt-2">
        <hr className="border-t border-zinc-500 opacity-50" />
      </div>

      {/* Copyright */}
      <div className="text-center mt-1 px-4 relative z-10">
        <p className="text-xs font-light">
          &copy; {new Date().getFullYear()} J&S Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
