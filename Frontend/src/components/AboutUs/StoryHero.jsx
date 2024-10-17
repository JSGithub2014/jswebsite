import React from 'react';
import { motion } from 'framer-motion';
import ourStory from '../../assets/ourStory/story-hero.png';

function AboutMain() {
  return (
    <section className='flex flex-col px-10 md:flex-row w-full h-[calc(100vh-60px)]' aria-labelledby="about-heading">
      <motion.div 
        className='flex flex-col justify-center gap-2  items-center w-full md:w-1/2 p-6 md:p-10 font-semibold text-center'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 id="about-heading" className='text-3xl md:text-5xl font-bold mb-4 text-[rgb(255,102,0)] mt-8 heading-font tracking-wider whitespace-nowrap'>
          The Story Behind <br /> <span className='text-black heading-font'>J&S Group</span>
        </h1>
        <p className='text-md md:text-sm text-gray-600 text-justify mb-4'>
          At J&S Group, we believe navigating real estate finance and insurance should be simple and accessible. Founded by a team of industry experts, we’re dedicated to providing tailored solutions that empower you to make confident decisions.
        </p>
        <p className='text-md md:text-md text-gray-600 text-justify mb-4'>
          With a focus on transparency and integrity, we’re here to help you build a secure financial future—one step at a time.
        </p>
        <p className='text-md md:text-md text-gray-600 text-justify mb-4'>
          Join us as we transform your real estate dreams into reality!
        </p>
        {/* Adding bullet points for more detail */}
        <ul className='list-disc text-left text-gray-600 mt-4'>
          <li>Expert Guidance in Real Estate</li>
          <li>Customizable Insurance Solutions</li>
          <li>Transparent and Ethical Practices</li>
          <li>Building Long-term Relationships</li>
        </ul>
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
          style={{ width: '92%', height: '92%' }}
        />
      </motion.div>
    </section>
  );
}

export default AboutMain;
