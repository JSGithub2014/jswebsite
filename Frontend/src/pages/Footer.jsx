import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import the map icon
import brandLogo from '../assets/reloader-logo.png'; // Import the brand logo

function Footer() {
  return (
    <footer className="w-full text-white pt-6 pb-4 relative bg-[rgb(255,102,0)]">
      {/* Decorative Pattern on Top */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-700 to-transparent opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-start gap-6 relative z-10">

        {/* Brand Logo */}
        <div className="brand-logo mb-4 md:mb-0 flex-shrink-0 w-full md:w-1/4 flex justify-center md:justify-start">
          <a href="#landing" aria-label="Brand Logo">
            <img
              className="w-24 md:w-32 hover:scale-110 transition-transform duration-300"
              src={brandLogo}
              alt="Brand Logo"
              loading="lazy"
            />
          </a>
        </div>

        {/* Footer Sections */}
        <div className="flex flex-col w-full justify-between gap-6 md:flex-row">

          {/* Support Section */}
          <div className="footer-section mb-4 md:mb-0 w-full text-center md:text-left">
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
          <div className="footer-section mb-4 md:mb-0 w-full text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-2">Links</h3>
            <ul className="space-y-1">
              {["Privacy Policy", "Terms & Conditions"].map((item) => (
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
          <div className="footer-section w-full text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-2">Contact Us</h3>
            <ul className="space-y-4">
              {/* Mobile Number */}
              <li className="flex items-center justify-center md:justify-start">
                <div className="flex-shrink-0 mr-3">
                  <FaPhoneAlt className="text-lg" />
                </div>
                <div className="flex flex-col justify-center text-left">
                  <a href="tel:+912245120755" className="hover:text-black transition-colors duration-300">
                    +91 2245120755
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center justify-center md:justify-start">
                <div className="flex-shrink-0 mr-3">
                  <FaEnvelope className="text-lg" />
                </div>
                <div className="flex flex-col justify-center text-left">
                  <a href="mailto:info@jsasia.net" className="hover:text-black transition-colors duration-300">
                    info@jsasia.net
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-center justify-center md:justify-start">
                <div className="flex-shrink-0 mr-3">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>
                <div className="flex flex-col justify-center text-left">
                  <span className="text-base">1202, 12th Floor, Lodha Supremus</span>
                  <span className="text-base">Saki Vihar Road, Andheri East,</span>
                  <span className="text-base">Mumbai 400072 Maharashtra</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="container mx-auto mt-6 flex justify-center gap-6 text-2xl">
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
