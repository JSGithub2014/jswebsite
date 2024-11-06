import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MemberDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const member = location.state?.member;

  if (!member) {
    return <div>No member data available.</div>;
  }

  const handleBackClick = () => {
    navigate('/about-us/our-team');
  };

  const styledName = (name) => {
    if (!name) return '';
    const words = name.split(' ');
    return (
      <span>
        <span className="text-[rgb(255,102,0)]">{words[0]} </span>
        {words.slice(1).join(' ')}
      </span>
    );
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-evenly p-4 pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Back Button with Animation */}
      <motion.button
        className="flex items-center mb-6 text-[rgb(255,102,0)] bg-white border border-[rgb(255,102,0)] rounded-lg px-4 py-2 transition-colors duration-200 ease-in-out transform hover:bg-[rgb(255,102,0)] hover:text-white hover:shadow-xl z-20"
        onClick={handleBackClick}
        aria-label="Go back to team page"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
      >
        <svg
          className="w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </motion.button>

      {/* Member Detail Card with Needle at the Top Center */}
      <motion.article
        className="bg-white shadow-xl w-full max-w-md md:max-w-7xl mx-auto flex flex-col md:flex-row p-4 md:p-6 lg:p-8 relative rounded-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 120,
          damping: 25,
        }}
        drag="x" // Allow dragging along the X-axis
        dragConstraints={{ left: 0, right: 0 }} // Optional: restrict dragging to a specific range
      >
        {/* Needle (Pin) */}
        <div
          className="absolute hidden md:block top-[-7px] left-1/2 transform -translate-x-1/2 md:top-[-7px] md:left-1/2 md:transform md:-translate-x-1/2 z-10"
          style={{
            width: '2px', // Needle shaft thickness
            height: '30px', // Increased length for a more realistic pin size
            backgroundColor: 'gray', // Needle shaft color
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)', // Stronger shadow for depth
            borderRadius: '2px', // Slightly rounded for realism
          }}
        >
          {/* Needle Head with Reflection */}
          <div
            className="absolute hidden md:block top-0 left-0 transform -translate-x-1/2 md:left-1/2 md:transform md:-translate-x-1/2"
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: 'rgb(255,102,0)', // Needle head color
              borderRadius: '50%',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)', // Shadow to give depth
              position: 'relative',
            }}
          >
            {/* Light reflection on the needle head */}
            <div
              className="absolute hidden md:block top-1 left-1"
              style={{
                width: '5px',
                height: '5px',
                backgroundColor: 'white', // Light reflection
                borderRadius: '50%',
                opacity: 0.8, // Slight transparency to simulate light reflection
              }}
            />
          </div>
        </div>

        {/* Image Container with Bounce Effect */}
        <motion.div
          className="flex justify-center items-center mb-4 md:w-1/2 md:mb-0 bg-transparent"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 120, damping: 25 }}
        >
          <motion.img
            src={member.image}
            alt={`Image of ${member.name}`}
            className="h-36 md:h-96 lg:h-96 w-auto object-contain rounded-lg shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Information Container with Fade-In Effect */}
        <motion.div
          className="flex flex-col justify-center md:w-1/2 md:ml-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-lg md:text-xl lg:text-3xl font-semibold text-gray-800 heading-font">
            {styledName(member.name)}
          </h2>
          <p className="text-md md:text-xl font-medium text-gray-600">{member.role}</p>
          <p className="text-gray-800 text-xs md:text-lg mt-2 text-justify">
            {member.description || 'No description available.'}
          </p>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700">Connect with {member.name}:</h3>
            <div className="flex space-x-4 mt-2">
              {member.social.linkedin && (
                <motion.a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline transition-colors duration-200"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                  whileHover={{ scale: 1.1, textShadow: '0 0 5px rgba(255, 102, 0, 0.7)', transition: { duration: 0.3 } }}
                >
                  <FaLinkedin className="mr-1" /> LinkedIn
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.article>
    </motion.section>
  );
};

export default MemberDetail;
