import React from 'react';
import { motion } from 'framer-motion';
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

const InsuranceHero = ({ scrollToSection }) => {
  return (
    <section 
      className='w-full flex flex-col justify-center items-center px-4'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className='pt-20 text-5xl heading-font text-[rgb(255,102,0)] text-center'>Insurance</h1>
      <figure className='w-full md:w-5/6 h-auto'>
        <img 
          src={ServiceHeroImg} 
          alt="Insurance Services Banner" 
          className='w-full h-auto object-cover my-5 rounded-lg' 
          title="Explore our insurance services"
        />
      </figure>
      <div className='flex flex-col md:flex-row justify-center items-center flex-wrap mt-4'>
        {['General Insurance', 'Life Insurance', 'Health Insurance'].map((section, index) => (
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
      <div className='w-full md:w-5/6 mt-10 text-center'>
        <h2 className='text-3xl heading-font font-semibold tracking-wider text-[rgb(255,102,0)] mb-4'>
          Why Choose Us for Your <span className='heading-font font-semibold tracking-wider text-black'>Insurance Needs?</span>
        </h2>
        <p className='text-lg mb-4'>
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
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // Trigger when 20% is in view
            >
              <h3 className='text-xl font-semibold text-[rgb(255,102,0)]'>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceHero;
