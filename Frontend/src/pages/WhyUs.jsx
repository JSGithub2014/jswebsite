import React, { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { motion } from 'framer-motion'; // Import motion from framer-motion
import whyUsImage from '../assets/why us.jpeg'; // Adjust the path as necessary

function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility when it goes out of view
        }
      },
      { threshold: 0.3 } // Trigger when 10% of the component is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <main ref={ref} className='flex flex-col md:flex-row items-center justify-center min-h-[50vh] px-4 md:px-24 w-full'>
      <style>
        {`
          @font-face {
            font-family: 'Gendy';
            src: url('/assets/TTF/Gendy.ttf') format('truetype');
          }
          .heading-font {
            font-family: 'Gendy', sans-serif;
          }
        `}
      </style>

      <div className='flex flex-col md:flex-row w-full max-w-7xl mx-auto justify-center items-stretch md:gap-32'> 
        <motion.div 
          className='whyus-img md:w-1/2 mb-4 md:mb-0 flex justify-center'
          initial={{ opacity: 0, scale: 0.8 }} // Initial state
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} // Animate into view
          transition={{ duration: 0.5 }} // Transition effect
        >
          <img
            src={whyUsImage}
            alt="Why choose us for your needs"
            className='object-fit w-full h-full rounded-md' 
          />
        </motion.div>

        <motion.div 
          className='whyus-text w-full md:w-1/2 mt-4 md:mt-0 flex justify-center items-center'
          initial={{ opacity: 0, x: -50 }} // Initial state
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animate into view
          transition={{ duration: 0.5 }} // Transition effect
        >
          <div className='flex flex-col space-y-4 p-4'>
            <h1 className='text-3xl md:text-5xl font-thin heading-font tracking-wider text-center text-shadow'>
              <span className='tracking-wider heading-font'>W</span>hy <span className='text-[rgb(255,102,0)]'>Us</span>?
            </h1>
            {[ 
              'Proven Track Record of Success',
              'Tailored Solutions for Every Need',
              'Client-Centered Approach',
              'Long-Term Relationships',
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }} // Initial state for list items
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} // Animate into view
                transition={{ duration: 0.3, delay: index * 0.1 }} // Delay for each item
                className='flex items-center'
              >
                <MdDone className='text-[#F3BA73]' />
                <p className='ml-2 text-base md:text-lg'>{item}</p>
              </motion.div>
            ))}
            <div className='flex justify-center'>
              <a
                className='flex items-center text-[#F3BA73] transition duration-300 group'
                href="#learn-more" 
              >
                <span className='text-base md:text-lg'>Learn More</span>
                <span className='ml-2 flex items-center justify-center w-8 h-8 border-2 border-transparent rounded-full transition duration-300 transform group-hover:border-[#F3BA73] group-hover:bg-[#F3BA73] group-hover:scale-110'>
                  <FaArrowRight className='text-[#F3BA73] transition duration-300 transform group-hover:text-white' />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default WhyUs;
