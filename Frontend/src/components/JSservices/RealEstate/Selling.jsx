import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaChartLine, FaHandshake, FaFileContract } from 'react-icons/fa';

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

const Selling = () => {
  return (
    <section 
      className='w-full flex flex-col items-center px-4 my-10'
      aria-labelledby="selling-section-title"
    >
      <motion.h2 
        id="selling-section-title" 
        className='text-4xl heading-font font-semibold tracking-wider text-[rgb(255,102,0)] mb-6'
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        Ready to Sell <span className='heading-font font-semibold tracking-wider text-black'>Your Property?</span>
      </motion.h2>
      <motion.p 
        className='text-lg mb-4 text-center'
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        Our expert team is here to help you get the best value for your property. 
        Whether it's residential or commercial, we provide personalized service to meet your needs.
      </motion.p>

      <div className='flex flex-wrap justify-center my-6'>
        {[
          { title: 'Free Property Valuation', description: 'Get an accurate assessment of your property’s worth.', icon: <FaHome className='text-[rgb(255,102,0)] w-8 h-8 mb-2' /> },
          { title: 'Marketing Strategies', description: 'We use effective marketing techniques to reach potential buyers.', icon: <FaChartLine className='text-[rgb(255,102,0)] w-8 h-8 mb-2' /> },
          { title: 'Expert Negotiation', description: 'Our agents are skilled negotiators to ensure you get the best deal.', icon: <FaHandshake className='text-[rgb(255,102,0)] w-8 h-8 mb-2' /> },
          { title: 'Smooth Closing Process', description: 'We handle all the paperwork for a hassle-free experience.', icon: <FaFileContract className='text-[rgb(255,102,0)] w-8 h-8 mb-2' /> },
        ].map((item, index) => (
          <motion.article 
            key={index}
            className='bg-white p-4 rounded-lg shadow-md m-2 w-full sm:w-1/2 md:w-1/3 transform transition-transform duration-300 hover:scale-105'
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            aria-labelledby={`selling-card-${index}`}
          >
            <div className='flex items-center justify-center'>{item.icon}</div>
            <h3 id={`selling-card-${index}`} className='text-xl font-semibold text-[rgb(255,102,0)] text-center'>{item.title}</h3>
            <p className='text-center'>{item.description}</p>
          </motion.article>
        ))}
      </div>

      <div className='mt-8'>
        <a 
          href="tel:+912245120755" 
          className='px-6 py-2 bg-[rgb(255,102,0)] text-white rounded-full hover:bg-orange-600 transition duration-300 shadow-lg transform hover:scale-105'
          aria-label="Contact us to get started with selling your property"
        >
          Contact Us to Get Started!
        </a>
      </div>
    </section>
  );
};

export default Selling;
