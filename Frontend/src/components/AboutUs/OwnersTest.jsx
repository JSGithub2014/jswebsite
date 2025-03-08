import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const OwnerTest = ({ teamMembers, handleCardClick }) => {
  const styledName = (name) => {
    return name.split(' ').map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join(' ');
  };

  return (
    <div className="w-full py-20 bg-zinc-800 flex flex-col items-center">
      <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 heading-font tracking-wider text-shadow">
        Meet our
        <span className="text-[rgb(255,102,0)] heading-font tracking-wider"> Management</span>
      </h1>
      <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 heading-font text-gray-500 tracking-wider text-shadow">
        Passionate. Proactive. Expert.
      </h2>
      <p className="text-md text-gray-700 font-semibold pr-8 mt-5 text-center">
        We prioritize empathy in our leadership fostering connections <br /> that unite the world.
      </p>

      {/* Flex container for the images */}
      <div className="flex justify-center gap-0 flex-wrap mt-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 relative" // Ensuring no gaps between the items
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => handleCardClick(member.name, member)} // Handle the click to navigate
          >
            <div className="relative group overflow-hidden shadow-lg transition-all duration-300">
              {/* Image with hover zoom effect */}
              <motion.img
                src={member.image} // Image for the team grid
                alt={`Image of ${member.name}`}
                className="w-[200px] h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay for hover effect */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Hover Text (Role) */}
              <div className="absolute inset-0 flex items-end justify-center pb-10 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {member.hoverText}
              </div>
            </div>

            {/* Name and Role displayed below the image */}
            <div className="mt-4 text-center">
              <p className="font-semibold text-2xl">{styledName(member.name)}</p>
              <p className="text-lg text-gray-500 font-extrabold">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OwnerTest;
