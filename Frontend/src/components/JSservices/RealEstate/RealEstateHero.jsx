import React from 'react';
import { motion } from 'framer-motion';
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

const cardVariants = {
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
  return (
    <motion.div 
      className='w-full flex flex-col justify-center items-center px-4'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className='pt-20 text-5xl heading-font text-[rgb(255,102,0)] text-center'>Real <span className='text-black heading-font'>Estate</span></h1>
      <div className='w-full md:w-5/6 h-auto'>
        <img src={RealEstateHeroImg} alt="Real Estate Services" className='w-full h-auto object-cover rounded-lg' />
        <div className='flex flex-col md:flex-row justify-center items-center flex-wrap mt-4'>
          {['Selling', 'Leasing'].map((section, index) => (
            <motion.a 
              key={index}
              onClick={() => scrollToSection(section)} 
              className='px-4 py-2 bg-orange-400 text-black text-sm mx-2 my-2 rounded-full cursor-pointer'
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label={section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
            </motion.a>
          ))}
        </div>
      </div>
      <div className='w-full md:w-5/6 mt-10 text-center'>
        <h2 className='text-3xl heading-font font-semibold tracking-wider text-[rgb(255,102,0)] mb-4'>Why Choose Us for Your <span className='heading-font font-semibold tracking-wider text-black'>Real Estate Needs?</span></h2>
        <p className='text-lg mb-4'>
          Our experienced team is dedicated to providing you with the best solutions for buying, selling, and leasing properties. We understand the market and are here to guide you every step of the way.
        </p>
        <div className='flex flex-wrap justify-center mt-6'>
          {[
            { title: 'Market Expertise', text: 'We know the real estate market inside and out.' },
            { title: 'Personalized Service', text: 'Tailored strategies to meet your specific needs.' },
            { title: 'Full Support', text: 'From listing to closing, we’re with you every step.' }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className='bg-gray-100 p-4 rounded-lg w-full md:w-1/3 m-2'
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // Trigger when 20% is in view
            >
              <h3 className='text-xl font-semibold text-[rgb(255,102,0)]'>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RealEstateHero;
