import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEye, FaLightbulb, FaHandsHelping, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const GoalCard = ({ title, description, direction }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  const initialPosition = direction === 'left' ? { x: -100 } : { x: 100 };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.article
      ref={ref}
      className="bg-[rgba(255,102,0,0.94)] text-white md:w-[70vw] shadow-lg rounded-2xl p-4 m-2 flex flex-col w-auto overflow-hidden"
      role="article"
      aria-labelledby={title}
      initial={{ ...initialPosition, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : initialPosition}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-2">
        {/* Left Icon for Vision */}
        {title === "Our Vision" && (
          <div className="hidden md:flex md:w-1/4 justify-start">
            <FaEye className="text-4xl" /> {/* Increased size */}
          </div>
        )}
        {/* Left Icon for Mission */}
        {title === "Our Mission" && (
          <div className="hidden md:flex md:w-1/4 justify-start">
            <FaLightbulb className="text-4xl" /> {/* Increased size */}
          </div>
        )}
        {/* Left Icon for Values */}
        {title === "Our Values" && (
          <div className="hidden md:flex md:w-1/4 justify-start">
            <FaHandsHelping className="text-4xl" /> {/* Increased size */}
          </div>
        )}

        <h2 className="text-xl font-semibold text-center flex-grow" id={title}>
          {title}
        </h2>

        {/* Right Icon */}
        <div className="hidden md:flex md:w-1/4 justify-end">
          <FaStar className="text-4xl" /> {/* Increased size */}
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
        className="flex items-center justify-center text-[rgb(58,59,59)] font-semibold hover:text-black mt-2 text-center"
        onClick={toggleExpand}
      >
        {isExpanded ? (
          <>
            <FaChevronUp className="mr-1" /> {/* Chevron Up for Read Less */}
            Collapse
          </>
        ) : (
          <>
            <FaChevronDown className="mr-1" /> {/* Chevron Down for Read More */}
            Expand
          </>
        )}
      </button>
    </motion.article>
  );
};

export default GoalCard;
