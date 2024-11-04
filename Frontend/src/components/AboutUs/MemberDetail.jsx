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
      className="full-screen flex flex-col items-center justify-center p-4 md:pt-20 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.button
  className="flex items-center mb-4 text-[rgb(255,102,0)] bg-white border border-[rgb(255,102,0)] rounded-lg px-4 py-2 transition-colors duration-200 ease-in-out transform hover:bg-[rgb(255,102,0)] hover:text-white hover:shadow-xl"
  onClick={handleBackClick}
  aria-label="Go back to team page"
  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
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
  &larr; Back
</motion.button>

      <motion.article
        className="bg-white shadow-xl w-full max-w-md md:max-w-6xl mx-auto flex flex-col md:flex-row p-4 md:p-6 lg:p-8 relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image Container */}
        <motion.div className="flex justify-center items-center mb-4 md:w-1/2 md:mb-0 bg-transparent">
          <motion.img
            src={member.image}
            alt={`Image of ${member.name}`}
            className="h-36 md:h-96 lg:h-96 w-auto object-contain rounded-lg shadow-lg" 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Information Container */}
        <div className="flex flex-col justify-center md:w-1/2 md:ml-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
            {styledName(member.name)}
          </h2>
          <p className="text-md md:text-lg font-medium text-gray-600">{member.role}</p>
          <p className="text-gray-800 text-sm md:text-base mt-2 text-justify">{member.description || 'No description available.'}</p>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700">Connect with {member.name}:</h3>
            <div className="flex space-x-4 mt-2">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline transition-colors duration-200"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                >
                  <FaLinkedin className="mr-1" /> LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.article>
    </motion.section>
  );
};

export default MemberDetail;
