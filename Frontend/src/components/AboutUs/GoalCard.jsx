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

  const renderIcon = () => {
    switch (title) {
      case "Our Vision":
        return <FaEye className="text-6xl text-indigo-600" />;
      case "Our Mission":
        return <FaLightbulb className="text-6xl text-yellow-500" />;
      case "Our Values":
        return <FaHandsHelping className="text-6xl text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <motion.article
      ref={ref}
      className="bg-white border border-gray-300 rounded-xl p-6 m-4 flex flex-col max-w-md shadow-lg transition-transform transform hover:scale-105"
      role="article"
      aria-labelledby={title}
      aria-expanded={isExpanded}
      initial={{ ...initialPosition, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : initialPosition}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center mb-4">
        {renderIcon()}
      </div>
      <h2 className="text-2xl font-bold text-center text-[rgb(255,102,0)] mb-2" id={title}>
        {title}
      </h2>
      <motion.div
        className="flex-grow flex items-center justify-center"
        initial={{ height: 0 }}
        animate={{ height: isExpanded ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <p className={`text-black text-sm text-center ${isExpanded ? '' : 'overflow-hidden max-h-10'}`}>
          {description}
        </p>
      </motion.div>
      <button
        className="flex items-center justify-center text-zinc-700 font-semibold hover:text-zinc-900 mt-4 transition duration-300 rounded-md p-2 bg-gray-100 hover:bg-gray-200"
        onClick={toggleExpand}
        aria-label={isExpanded ? 'Collapse description' : 'Expand description'}
      >
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
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
