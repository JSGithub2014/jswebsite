import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import RealEstateHeroImg from '../../../assets/Services/RealEstateHero.png';

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: 'rgb(255, 90, 0)',
    color: 'white',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.95,
  },
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const RealEstateHero = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Updated sections to include 'Buying'
  const sections = ['Buying','Selling', 'Leasing'];

  const formatSectionName = (section) => {
    return section.charAt(0).toUpperCase() + section.slice(1);
  };

  return (
    <motion.section 
      className='w-full flex flex-col justify-center items-center px-4'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      aria-labelledby="real-estate-hero-title"
    >
      <h1 id="real-estate-hero-title" className='pt-20 text-5xl heading-font text-[rgb(255,102,0)] text-center'>
        Real <span className='text-black heading-font'>Estate</span>
      </h1>
      <div className='w-full md:w-5/6 h-auto'>
        <img src={RealEstateHeroImg} alt="Real Estate Services" className='w-full h-auto object-cover rounded-lg' />
        
        {/* Centered Hamburger Menu Button */}
        <motion.button 
          className="flex items-center justify-center bg-orange-400 p-2 rounded-full mx-auto my-4 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          whileHover={{ scale: 1.1 }} // Optional hover effect
        >
          <motion.div 
            variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
            animate={isMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
          </motion.div>
        </motion.button>

        {/* Hamburger Menu */}
        {isMenuOpen && (
          <motion.div 
            className='flex flex-col items-center bg-gray-100 rounded-lg shadow-md w-full my-4 md:hidden'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {sections.map((section, index) => (
              <motion.a 
                key={index}
                onClick={() => {
                  scrollToSection(section);
                  setIsMenuOpen(false); // Close the menu after selection
                }} 
                className='flex items-center justify-center px-4 py-2 bg-orange-400 text-black text-sm mx-2 my-1 rounded-full cursor-pointer w-full'
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label={`Navigate to ${formatSectionName(section)}`}
              >
                {formatSectionName(section)}
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Buttons for larger screens */}
        <div className='hidden md:flex flex-wrap justify-center my-4'>
          {sections.map((section, index) => (
            <motion.a 
              key={index}
              onClick={() => scrollToSection(section)} 
              className='flex items-center justify-center px-6 py-3 bg-orange-400 text-black text-base mx-2 my-2 rounded-full cursor-pointer'
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label={`Navigate to ${formatSectionName(section)}`}
            >
              {formatSectionName(section)}
            </motion.a>
          ))}
        </div>
      </div> 

      <div className='w-full md:w-5/6 mt-10 text-center'>
        <h2 className='text-3xl heading-font font-semibold tracking-wider text-[rgb(255,102,0)] mb-4'>
          Why Choose Us for Your <span className='heading-font font-semibold tracking-wider text-black'>Real Estate Needs?</span>
        </h2>
        <p className='text-lg mb-4'>
          Our experienced team is dedicated to providing you with the best solutions for buying, selling, and leasing properties. We understand the market and are here to guide you every step of the way.
        </p>
        <div className='flex flex-wrap justify-center mt-6'>
          {[ 
            { title: 'Market Expertise', text: 'We know the real estate market inside and out.' },
            { title: 'Personalized Service', text: 'Tailored strategies to meet your specific needs.' },
            { title: 'Full Support', text: 'From listing to closing, we’re with you every step.' }
          ].map((item, index) => (
            <motion.article 
              key={index}
              className='bg-gray-100 p-4 rounded-lg w-full md:w-1/3 m-2'
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              aria-labelledby={`benefit-${index}`}
            >
              <h3 id={`benefit-${index}`} className='text-xl font-semibold text-[rgb(255,102,0)]'>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Buying Section */}
      <div className='w-full md:w-5/6 mt-12 text-center'>
        <h2 className='text-3xl heading-font font-semibold tracking-wider text-[rgb(255,102,0)] mb-4'>
          Find Your Perfect <span className='heading-font font-semibold tracking-wider text-black'>Property</span>
        </h2>
        <p className='text-lg mb-4'>
          Whether you’re buying your first home or looking for an investment, we are committed to helping you find the perfect property at the best price.
        </p>
        <div className='flex flex-wrap justify-center mt-6'>
          {[ 
            { title: 'Wide Range of Listings', text: 'Explore a variety of properties that suit your needs and budget.' },
            { title: 'Expert Advice', text: 'Our team provides personalized advice for your property search.' },
            { title: 'Seamless Process', text: 'From initial consultation to final purchase, we ensure a smooth experience.' }
          ].map((item, index) => (
            <motion.article 
              key={index}
              className='bg-gray-100 p-4 rounded-lg w-full md:w-1/3 m-2'
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              aria-labelledby={`buying-benefit-${index}`}
            >
              <h3 id={`buying-benefit-${index}`} className='text-xl font-semibold text-[rgb(255,102,0)]'>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RealEstateHero;
