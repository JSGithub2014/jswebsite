import React from 'react';
import { motion } from 'framer-motion';
import { FaKey, FaUsers, FaDollarSign, FaClipboardCheck } from 'react-icons/fa';

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

const Leasing = () => {
  return (
    <section 
      className='w-full flex flex-col items-center px-4 my-10'
      aria-labelledby="leasing-title"
    >
      <motion.h2 
        id="leasing-title" 
        className='text-4xl heading-font font-semibold text-[rgb(255,102,0)] mb-6'
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        Ready to Lease <span className='heading-font font-semibold text-black'>Your Property?</span>
      </motion.h2>
      <motion.p 
        className='text-lg mb-4 md:w-5/6 text-center'
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        Our dedicated team is here to assist you in finding the perfect tenants for your property. 
        We offer comprehensive leasing services to ensure a smooth experience.
      </motion.p>

      <div className='flex flex-wrap justify-center my-6 '>
        {[
          { title: 'Tenant Screening', description: 'Thorough background checks to find reliable tenants.', icon: <FaUsers aria-hidden="true" className='text-[rgb(255,102,0)] w-8 h-8 mb-2' /> },
          { title: 'Property Management', description: 'We manage your property for a hassle-free experience.', icon: <FaKey aria-hidden="true" className='text-[rgb(255,102,0)] w-8 h-8 mb-2' /> },
          { title: 'Competitive Pricing', description: 'We help set the right price to maximize your income.', icon: <FaDollarSign aria-hidden="true" className='text-[rgb(255,102,0)] w-8 h-8 mb-2' /> },
          { title: 'Legal Support', description: 'Comprehensive lease agreements and legal advice.', icon: <FaClipboardCheck aria-hidden="true" className='text-[rgb(255,102,0)] w-8 h-8 mb-2' /> },
        ].map((item, index) => (
          <motion.article 
            key={index}
            className='bg-white p-4 rounded-lg shadow-md m-2 w-full sm:w-1/2 md:w-1/3 transform transition-transform duration-300 hover:scale-105'
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            aria-labelledby={`service-${index}`}
          >
            <div className='flex items-center justify-center'>{item.icon}</div>
            <h3 id={`service-${index}`} className='text-xl font-semibold text-[rgb(255,102,0)] text-center'>{item.title}</h3>
            <p className='text-center'>{item.description}</p>
          </motion.article>
        ))}
      </div>

      <div className='mt-8'>
        <a 
          href="tel:+918012091209" 
          className='px-6 py-2 bg-[rgb(255,102,0)] text-white rounded-full hover:bg-orange-600 transition duration-300 shadow-lg transform hover:scale-105'
        >
          Contact Us to Get Started!
        </a>
      </div>
    </section>
  );
};

export default Leasing;
