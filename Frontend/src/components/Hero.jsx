import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png';
import callBtn from '../assets/call-us-img.png';

function Hero() {
  const handleCall = () => {
    window.location.href = 'tel:+918012091209';
  };

  // Animation variants
  const leftVariants = {
    hidden: { opacity: 0, x: -100 }, // Start from the left and invisible
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Slide in and become visible
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 }, // Start from the right and invisible
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Slide in and become visible
  };

  return (
    <section className='w-full h-screen flex items-center justify-center px-4 md:px-36 text-center md:text-left lg:mt-5 pt-12 z-0'>
      <div className='hero-wrapper flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-12'>
        <motion.header
          className='hero-section-left mb-8 md:mb-0 md:w-1/2'
          initial="hidden"
          animate="visible"
          variants={leftVariants}
        >
          <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold mb-4 landing-font text-white whitespace-nowrap'>
            Securing Your <br /> Success<span className='text-5xl lg:text-7xl font-serif'>!</span> <br />
          </h1>
          <div className='landing-text-animation text-lg md:text-xl lg:text-2xl overflow-hidden my-10'>
            <span className='services-name font-thin landing-font text-black whitespace-nowrap'>
              Expert Guidance in Finance <br />
            </span>
            <span className='services-name font-thin landing-font text-black'>
              Insurance, and Real Estate
            </span>
          </div>
          <div className="flex justify-center md:justify-start mt-4">
            <button
              className='flex items-center focus:scale-110 px-2 py-1 rounded-md hover:bg-[rgb(255,102,0)] transition duration-300'
              onClick={handleCall}
              aria-label="Call Us"
            >
              <img
                src={callBtn}
                className='w-28 md:w-44 lg:w-56'
                alt="Call Us for expert guidance in finance, insurance, and real estate"
                loading="lazy"
              />
            </button>
          </div>
        </motion.header>
        <motion.aside
          className='hero-section-right flex justify-center md:justify-end md:w-1/2 opacity-100'
          initial="hidden"
          animate="visible"
          variants={rightVariants}
        >
          <img
            className='w-full h-auto max-h-52 md:max-h-[35vw] object-contain'
            src={heroImage}
            alt="Illustration representing finance, insurance, and real estate"
            loading="lazy"
            style={{ opacity: 1 }}
          />
        </motion.aside>
      </div>
    </section>
  );
}

export default Hero;
