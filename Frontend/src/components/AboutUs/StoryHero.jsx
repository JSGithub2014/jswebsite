import React from 'react';
import { motion } from 'framer-motion';
import ourStory from '../../assets/ourStory/story-hero.png';

function AboutMain() {
  return (
    <section className='flex flex-col md:flex-row w-full h-[calc(100vh-60px)]' aria-labelledby="about-heading">
      <motion.div 
        className='flex flex-col justify-evenly items-center w-full md:w-1/2 p-6 md:p-10 font-semibold text-center'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 id="about-heading" className='text-3xl md:text-5xl font-bold mb-4 text-[rgb(255,102,0)] mt-8 heading-font tracking-wider whitespace-nowrap'>
          The Story Behind <br /> <span className='text-black heading-font'>J&S Group</span>
        </h1>
        <p className='text-md md:text-md text-gray-600 text-justify'>
          At J&S Group, we believe navigating real estate finance and insurance should be simple and accessible. Founded by a team of industry experts, we’re dedicated to providing tailored solutions that empower you to make confident decisions. With a focus on transparency and integrity, we’re here to help you build a secure financial future—one step at a time. Join us as we transform your real estate dreams into reality!
        </p>
      </motion.div>

      <motion.div 
        className='relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center bg-cover bg-center'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img 
          src={ourStory} 
          alt="Meet Our Team at J&S Group" 
          className='max-w-full max-h-full object-contain' 
          loading="lazy"
          width="600" 
          height="400"
        />
      </motion.div>
    </section>
  );
}

export default AboutMain;
