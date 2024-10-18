import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GoalCard = ({ title, description, direction }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const initialPosition = direction === 'left' ? { x: -100 } : { x: 100 };
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.article
      className="bg-[rgba(255,102,0,0.86)] text-white shadow-lg rounded-2xl p-4 m-2 flex flex-col h-auto w-[70vw] max-w-5xl overflow-hidden"
      role="article"
      aria-labelledby={title}
      initial={{ ...initialPosition, opacity: 0 }} // Initial position and opacity
      whileInView={{ x: 0, opacity: 1 }} // Animate to position and opacity when in view
      transition={{ duration: 0.5 }} // Transition duration
      viewport={{ once: true }} // Animation triggers only once
    >
      {/* Title */}
      <h2
        className="text-xl font-semibold text-center mb-2"
        id={title}
      >
        {title}
      </h2>

      {/* Description */}
      <div className="flex-grow flex items-center justify-center"> 
        <p className={`text-gray-200 text-sm text-center overflow-hidden ${isExpanded ? 'max-h-none' : 'max-h-10 overflow-hidden'}`}>
          {description}
        </p>
      </div>

      {/* Read More / Read Less Button */}
      <button 
        className="text-[rgb(58,59,59)] font-semibold hover:text-black mt-2 text-center underline"
        onClick={toggleExpand}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </motion.article>
  );
};

export default GoalCard;
