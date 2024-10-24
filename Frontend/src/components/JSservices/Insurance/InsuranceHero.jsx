import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import ServiceHeroImg from '../../../assets/Services/insurance-banner.jpg';

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

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const InsuranceHero = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = ['General Insurance', 'Life Insurance', 'Health Insurance'];

  const formatSectionName = (section) => {
    return section.charAt(0).toUpperCase() + section.slice(1);
  };

  return (
    <motion.section 
      className='w-full flex flex-col justify-center items-center px-4'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className='pt-20 text-4xl md:text-5xl heading-font text-[rgb(255,102,0)] text-center'>Insurance</h1>
      <figure className='w-full md:w-5/6 h-auto'>
        <img 
          src={ServiceHeroImg} 
          alt="Insurance Services Banner" 
          className='w-full h-auto object-cover my-5 rounded-lg' 
          title="Explore our insurance services"
        />
      </figure>

      {/* Hamburger Menu Button */}
      <motion.button 
        className="md:hidden flex items-center justify-center bg-orange-400 p-2 rounded-full"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
        whileHover={{ scale: 1.1 }} // Optional hover effect
      >
        <motion.div 
          variants={iconVariants}
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

      <div className='w-full md:w-5/6 mt-10 text-center'>
        <h2 className='text-2xl md:text-3xl heading-font font-semibold tracking-wider text-[rgb(255,102,0)] mb-4'>
          Why Choose Us for Your <span className='heading-font font-semibold tracking-wider text-black'>Insurance Needs?</span>
        </h2>
        <p className='text-base md:text-lg mb-4'>
          We offer a wide range of insurance products tailored to your needs. Our experienced team is here to help you find the right coverage to protect your assets and secure your future.
        </p>
        <div className='flex flex-wrap justify-center mt-6'>
          {[ 
            { title: 'Comprehensive Coverage', text: 'From health to property, we\'ve got you covered.' },
            { title: 'Expert Guidance', text: 'Our advisors provide personalized recommendations.' },
            { title: 'Customer Support', text: 'We\'re here for you every step of the way.' }
          ].map((item, index) => (
            <motion.article 
              key={index}
              className='bg-gray-100 p-4 rounded-lg w-full md:w-1/3 m-2'
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // Trigger when 20% is in view
            >
              <h3 className='text-lg md:text-xl font-semibold text-[rgb(255,102,0)]'>{item.title}</h3>
              <p className='text-sm md:text-base'>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default InsuranceHero;
