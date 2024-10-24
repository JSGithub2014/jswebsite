import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEye, FaLightbulb, FaHandsHelping, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const GoalCard = ({ title, description, direction }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  const initialPosition = direction === 'left' ? { x: -100 } : { x: 100 };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderIcon = (title) => {
    switch (title) {
      case "Our Vision":
        return <FaEye className="text-4xl" />;
      case "Our Mission":
        return <FaLightbulb className="text-4xl" />;
      case "Our Values":
        return <FaHandsHelping className="text-4xl" />;
      default:
        return null;
    }
  };

  return (
    <motion.article
      ref={ref}
      className="bg-gradient-to-r from-orange-500 to-orange-400 text-white md:w-[70vw] shadow-lg rounded-2xl p-6 m-2 flex flex-col w-auto overflow-hidden transition-transform transform hover:scale-105"
      role="article"
      aria-labelledby={title}
      aria-expanded={isExpanded}
      initial={{ ...initialPosition, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : initialPosition}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="hidden md:flex md:w-1/4 justify-start" aria-hidden="true">
          {renderIcon(title)}
        </div>
        <h2 className="text-xl font-bold text-center flex-grow text-shadow-lg" id={title}>
          {title}
        </h2>
        <div className="hidden md:flex md:w-1/4 justify-end" aria-hidden="true">
          {renderIcon(title)}
        </div>
      </div>

      <motion.div
        className="flex-grow flex items-center justify-center"
        initial={{ height: 0 }}
        animate={{ height: isExpanded ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <p className={`text-gray-200 text-sm text-center ${isExpanded ? '' : 'overflow-hidden max-h-10'}`}>
          {description}
        </p>
      </motion.div>

      <button 
        className="flex items-center justify-center text-gray-900 font-semibold hover:text-black mt-4 text-center"
        onClick={toggleExpand}
        aria-label={isExpanded ? 'Collapse description' : 'Expand description'}
      >
        <motion.span
          animate={{ y: isExpanded ? 0 : [0, -5, 0] }} // Up and down movement
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }} 
          className="mr-2"
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </motion.span>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
    </motion.article>
  );
};

export default GoalCard;
