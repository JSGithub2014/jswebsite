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
      className="flex flex-col items-center justify-evenly md:h-screen min-h-screen md:min-h-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Member Detail Card */}
      <motion.article
        className="w-full max-w-md md:max-w-7xl mx-auto md:flex block flex-col md:flex-row relative rounded-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 120,
          damping: 25,
        }}
      >
        {/* Image Container */}
        <motion.div
          className="flex justify-center items-center md:w-1/2 bg-transparent h-full"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 120, damping: 25 }}
        >
          <motion.img
            src={member.image}
            alt={`Image of ${member.name}`}
            className="object-contain h-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Information Container */}
        <motion.div
          className="text-zinc-800 bg-zinc-300 flex flex-col justify-start w-full md:w-1/2 md:ml-4 p-6 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Back Button inside the Info Container */}
          <motion.button
  className="flex items-center mb-6 text-[rgb(255,102,0)] bg-white border border-[rgb(255,102,0)] rounded-lg px-4 py-2 md:px-6 md:py-3 transition-colors duration-200 ease-in-out transform hover:bg-[rgb(255,102,0)] hover:text-white hover:shadow-xl z-20 text-sm md:text-base max-w-xs mx-auto"
  onClick={handleBackClick}
  aria-label="Go back to team page"
  whileHover={{
    scale: 1.1,
    transition: { duration: 0.2 },
  }}
  whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
>
  <svg
    className="w-4 h-4 mr-2 md:w-5 md:h-5"
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

          <h2 className="text-lg md:text-xl  lg:text-3xl font-semibold text-[rgb(255,102,0)]">
            {styledName(member.name)}
          </h2>
          <p className="text-md md:text-xl font-medium">{member.role}</p>
          <p className="text-xs md:text-lg mt-2 text-justify">
            {member.description || 'No description available.'}
          </p>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-500">Connect with {member.name}:</h3>
            <div className="flex space-x-4 mt-2">
              {member.social.linkedin && (
                <motion.a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline transition-colors duration-200"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                  whileHover={{
                    scale: 1.1,
                    textShadow: '0 0 5px rgba(255, 102, 0, 0.7)',
                    transition: { duration: 0.3 },
                  }}
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
