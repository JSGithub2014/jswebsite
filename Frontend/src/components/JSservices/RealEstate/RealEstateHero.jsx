import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import RealEstateHeroImg from '../../../assets/Services/RealEstateHero.png';

const buttonVariants = {
  hover: { scale: 1.05, backgroundColor: 'rgb(255, 90, 0)', color: 'white' },
  tap: { scale: 0.95 },
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const RealEstateHero = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['Buying', 'Selling', 'Leasing'];

  return (
    <motion.section 
      className='w-full flex flex-col justify-center items-center px-4'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main Heading */}
      <h1 className='pt-20 text-5xl font-bold text-[rgb(255,102,0)] text-center'>
        Find Your <span className='text-black'>Dream Property</span>
      </h1>

      {/* Hero Image */}
      <div className='w-full md:w-5/6 h-auto'>
        <img src={RealEstateHeroImg} alt="Real Estate Services" className='w-full h-auto object-cover rounded-lg' />
      </div>

      {/* Navigation Buttons */}
      <div className='flex flex-wrap justify-center my-6 space-x-3'>
        {sections.map((section, index) => (
          <motion.a 
            key={index}
            onClick={() => scrollToSection(section)} 
            className='px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full shadow-lg cursor-pointer hover:bg-orange-600 transition duration-300'
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {section}
          </motion.a>
        ))}
      </div>

      {/* Quick Highlights */}
      <div className='w-full md:w-5/6 mt-8 text-center'>
        <h2 className='text-3xl font-bold text-[rgb(255,102,0)] mb-4'>Why Choose Us?</h2>
        <div className='flex flex-wrap justify-center mt-4'>
          {[
            { title: 'Top Listings', text: 'Handpicked properties just for you.' },
            { title: 'Expert Guidance', text: 'From search to keys in hand.' },
            { title: 'Best Deals', text: 'Smart investments, great prices.' },
          ].map((item, index) => (
            <motion.article 
              key={index}
              className='bg-gray-100 p-4 rounded-lg w-full md:w-1/3 m-2 shadow-md'
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className='text-xl font-semibold text-[rgb(255,102,0)]'>{item.title}</h3>
              <p className='text-gray-700'>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RealEstateHero;
