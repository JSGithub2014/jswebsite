import React from 'react';
import { motion, useInView } from 'framer-motion'; // Import motion and useInView
import meetOurTeam from '../../assets/ourTeam/meet-our-team.png';

function AboutMain() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, // Adjust this value based on where you want to scroll
      behavior: 'smooth'
    });
  };

  const refMobile = React.useRef(null);
  const refDesktop = React.useRef(null);
  const isInViewMobile = useInView(refMobile, { once: false }); // Allow repeated triggers for mobile
  const isInViewDesktop = useInView(refDesktop, { once: false }); // Allow repeated triggers for desktop

  return (
    <div className='flex flex-col md:flex-row w-full h-[calc(100vh-60px)] pt-24 lg:pt-0 md:pt-0 md:px-12'>
      {/* Mobile Layout */}
      <div className="flex flex-col justify-center items-center md:hidden w-full h-full p-6 text-center" ref={refMobile}>
        <h1 className='text-3xl font-bold mb-4 text-[rgb(255,102,0)] mt-8 heading-font tracking-wider'>
          Welcome to Our Team
        </h1>
        <p className='text-md text-gray-600 mb-8'>
          Meet the talented <br />
          individuals driving innovation <br />
          and excellence at our <br />
          company.
        </p>
        <motion.div 
          className='relative w-full flex items-center justify-center'
          initial={{ opacity: 0, y: 50 }} // Start from below
          animate={isInViewMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate to original position
          transition={{ duration: 0.5 }} // Animation duration
        >
          <img src={meetOurTeam} alt="Meet Our Team" className='max-w-full object-contain mb-4' />
        </motion.div>
        <div className='flex flex-col items-center justify-center h-1/3 mt-8'>
          <p className='text-gray-400 mb-2 text-xl cursor-pointer' onClick={handleScroll}>
            Scroll down to explore more
          </p>
          <div className='animate-bounce cursor-pointer' onClick={handleScroll}>
            <svg className='w-10 h-10 text-[rgb(255,102,0)] rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 5.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 3z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M10 10a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 12.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 10z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <motion.div 
        className='relative w-full md:w-1/2 h-full flex items-center justify-center bg-cover bg-center'
        ref={refDesktop}
        initial={{ opacity: 0, x: -100 }} // Start from left
        animate={isInViewDesktop ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Animate to original position
        transition={{ duration: 0.5 }} // Animation duration
      >
        <img src={meetOurTeam} alt="Meet Our Team" className='max-w-full max-h-full object-contain mt-24 hidden md:block' />
      </motion.div>

      <motion.div 
        className='flex flex-col justify-center items-center w-full md:w-1/2 p-6 md:p-10 mt-12 font-semibold text-center'
        initial={{ opacity: 0, x: 100 }} // Start from right
        animate={isInViewDesktop ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Animate to original position
        transition={{ duration: 0.5 }} // Animation duration
      >
        <h1 className='text-5xl font-bold mb-4 text-[rgb(255,102,0)] heading-font tracking-wider hidden md:block'>
          Welcome to Our Team
        </h1>
        <p className='text-lg text-gray-600 my-8 hidden md:block'>
          Meet the talented <br />
          individuals driving innovation <br />
          and excellence at our <br />
          company.
        </p>
        <div className='lg:flex flex-col items-center justify-center h-1/3 hidden md:block'>
          <p className='text-gray-400 mb-2 text-xl cursor-pointer' onClick={handleScroll}>
            Scroll down to explore more
          </p>
          <div className='animate-bounce cursor-pointer' onClick={handleScroll}>
            <svg className='w-10 h-10 text-[rgb(255,102,0)] rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 5.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 3z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M10 10a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 12.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 10z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </motion.div>

      <div className="h-screen bg-gray-200">
        {/* Additional content can go here */}
      </div>
    </div>
  );
}

export default AboutMain;
