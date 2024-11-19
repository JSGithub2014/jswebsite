import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaRegHandshake, FaHome } from 'react-icons/fa';

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

const Buying = () => {
  const [visibleElements, setVisibleElements] = useState(Array(6).fill(false));
  const sectionRef = useRef(null);

  const observeElement = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Number(entry.target.dataset.index);
        setVisibleElements(prev => {
          const newVisibleElements = [...prev];
          newVisibleElements[index] = true;
          return newVisibleElements;
        });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observeElement, {
      threshold: 0.2,
    });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  useEffect(() => {
    setVisibleElements(Array(6).fill(false)); // Reset on mount
  }, []);

  return (
    <section 
      className='w-full flex flex-col items-center px-4 my-10'
      ref={sectionRef}
      aria-labelledby="buying-section-title"
    >
      <motion.h2 
        id="buying-section-title" 
        className='text-4xl heading-font font-semibold tracking-wider text-[rgb(255,102,0)] mb-6 fade-in'
        initial="hidden"
        animate={visibleElements[0] ? "visible" : "hidden"}
        variants={containerVariants}
        data-index={0} // Ensure the heading is observed
      >
        Ready to Buy Your<span className='heading-font font-semibold tracking-wider text-black'> Dream Property?</span>
      </motion.h2>

      <motion.p 
        className='text-lg mb-4 md:w-5/6 text-center fade-in'
        initial="hidden"
        animate={visibleElements[1] ? "visible" : "hidden"}
        variants={containerVariants}
        data-index={1} // Ensure the paragraph is observed
      >
        Whether you’re a first-time homebuyer or searching for an investment property, our team is dedicated to finding the right fit for you.
      </motion.p>

      <div className='flex flex-wrap justify-center my-6'>
        {[ 
          { title: 'Wide Range of Listings', description: 'Explore a variety of properties that suit your preferences and budget.', icon: <FaSearch className='text-[rgb(255,102,0)] w-8 h-8 mb-2' /> },
          { title: 'Financial Guidance', description: 'Our experts will assist you with financing options to make your purchase easy and affordable.', icon: <span className='text-[rgb(255,102,0)] text-4xl mb-2 font-extrabold'>₹</span> },
          { title: 'Professional Negotiation', description: 'We ensure you get the best deal possible with our skilled negotiators.', icon: <FaRegHandshake className='text-[rgb(255,102,0)] w-8 h-8 mb-2' /> },
          { title: 'Seamless Closing Process', description: 'We handle all paperwork and ensure a smooth transaction from start to finish.', icon: <FaHome className='text-[rgb(255,102,0)] w-8 h-8 mb-2' /> },
        ].map((item, index) => (
          <motion.article 
            key={index}
            className='fade-in bg-white p-4 rounded-lg shadow-md m-2 w-full sm:w-1/2 md:w-1/3 transform transition-transform duration-300 hover:scale-105'
            data-index={index + 2} // Adjust index for visibility tracking
            initial="hidden"
            animate={visibleElements[index + 2] ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className='flex items-center justify-center'>{item.icon}</div>
            <h3 id={`buying-card-${index}`} className='text-xl font-semibold text-[rgb(255,102,0)] text-center'>{item.title}</h3>
            <p className='text-center'>{item.description}</p>
          </motion.article>
        ))}
      </div>

      <div className='mt-8'>
        <a 
          href="tel:+918012091209" 
          className='px-6 py-2 bg-[rgb(255,102,0)] text-white rounded-full hover:bg-orange-600 transition duration-300 shadow-lg transform hover:scale-105'
          aria-label="Contact us to get started with buying your property"
        >
          Contact Us to Get Started!
        </a>
      </div>
    </section>
  );
};

export default Buying;
