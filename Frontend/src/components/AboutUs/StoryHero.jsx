import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ourStory from '../../assets/ourStory/story-hero.png';

function StoryHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); 

  return (
    <section 
      className='flex flex-col px-4 md:px-20 md:flex-row w-full h-[calc(100vh-60px)] pt-10' 
      aria-labelledby="about-heading"
    >
      <motion.div 
        ref={ref}
        className='flex flex-col justify-center gap-2 items-center w-full md:w-1/2 p-4 md:p-10 font-semibold text-center'
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 id="about-heading" className='text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-[rgb(255,102,0)] mt-4 heading-font tracking-wide'>
          The Story Behind <br /> <span className='text-black heading-font'>J&S Group</span>
        </h1>
        <p className='text-sm md:text-base lg:text-lg text-gray-600 text-justify mb-2'>
          At J&S Group, we believe navigating real estate finance and insurance should be simple and accessible.
        </p>
        <p className='text-sm md:text-base lg:text-lg text-gray-600 text-justify mb-2'>
          With a focus on transparency and integrity, we’re here to help you build a secure financial future.
        </p>
        <p className='text-sm md:text-base lg:text-lg text-gray-600 text-justify mb-4'>
          Join us as we transform your real estate dreams into reality!
        </p>
       
      </motion.div>
      
      <motion.div 
        ref={ref}
        className='relative w-full md:w-1/2 flex items-center justify-center bg-cover bg-center'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} 
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img 
          src={ourStory} 
          alt="A representation of the J&S Group's story, featuring team members and real estate activities" // More descriptive alt text
          className='max-w-full max-h-full object-contain' 
          loading="lazy"
          style={{ width: '95%', height: '95%' }}
        />
      </motion.div>
    </section>
  );
}

export default StoryHero;
