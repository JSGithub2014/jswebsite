import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; 
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

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

function FinanceHero({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    'homeLoan', 
    'mortgageLoan', 
    'balanceTransfer', 
    'overDraft', 
    'cashCredit', 
    'cgtmse', 
    'msmeLoans'
  ];

  const formatSectionName = (section) => {
    return section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1');
  };

  return (
    <motion.header 
      className='w-full flex flex-col justify-center items-center px-4'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className='pt-20 text-5xl heading-font text-[rgb(255,102,0)] text-center'>Finance</h1>
      <div className='w-full h-auto'>
        <img 
          src={ServiceHeroImg} 
          alt="A visual representation of finance services including loans and credit" 
          className='w-full object-cover rounded-lg mb-4' 
        />

        <motion.button 
          className="flex items-center justify-center bg-orange-400 p-2 rounded-full mx-auto my-4 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          whileHover={{ scale: 1.1 }} 
        >
          <motion.div 
            variants={iconVariants}
            animate={isMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
          </motion.div>
        </motion.button>

        {isMenuOpen && (
          <>
            <div className="fixed inset-0 bg-black opacity-50" onClick={() => setIsMenuOpen(false)} aria-hidden="true" />
            <motion.div 
              className='flex flex-col items-center bg-gray-100 rounded-lg shadow-md w-full my-4 md:hidden'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {sections.map((section, index) => (
                <motion.a 
                  key={index}
                  onClick={() => {
                    scrollToSection(section);
                    setIsMenuOpen(false);
                  }} 
                  className='flex items-center justify-center px-4 py-2 bg-orange-400 text-black text-sm mx-2 my-1 rounded-full cursor-pointer w-full'
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  aria-label={`Navigate to ${formatSectionName(section)}`}
                >
                  {formatSectionName(section)}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}

        <div className='hidden md:flex flex-wrap justify-center my-4'>
          {sections.map((section, index) => (
            <motion.a 
              key={index}
              onClick={() => scrollToSection(section)} 
              className='flex items-center justify-center px-6 py-3 bg-orange-400 text-black text-base mx-2 my-2 rounded-full cursor-pointer'
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label={`Navigate to ${formatSectionName(section)}`}
            >
              {formatSectionName(section)}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.header>
  );
}

export default FinanceHero;
