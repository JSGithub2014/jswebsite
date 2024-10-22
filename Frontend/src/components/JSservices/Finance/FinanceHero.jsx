import React from 'react';
import { motion } from 'framer-motion';
import ServiceHeroImg from '../../../assets/Services/ServiceHero.png';

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

function FinanceHero({ scrollToSection }) {
  return (
    <motion.header 
      className='w-full flex flex-col justify-center items-center px-4'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className='pt-20 text-5xl heading-font text-[rgb(255,102,0)] text-center' role="heading" aria-level="1">Finance</h1>
      <div className='w-full h-auto'>
        <img 
          src={ServiceHeroImg} 
          alt="A visual representation of finance services including loans and credit" 
          className='w-full object-cover rounded-lg mb-4' 
        />
        <div className='flex flex-wrap justify-center my-4'>
          {['homeLoan', 'mortgageLoan', 'balanceTransfer', 'overDraft', 'cashCredit', 'cgtmse', 'msmeLoans'].map((section, index) => (
            <motion.a 
              key={index}
              onClick={() => scrollToSection(section)} 
              className='px-4 py-2 bg-orange-400 text-black text-sm mx-2 my-2 rounded-full cursor-pointer w-1/2 md:w-auto'
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label={`Navigate to ${section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' ')}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.header>
  );
}

export default FinanceHero;
