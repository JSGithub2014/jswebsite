import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const ManagementTeam = ({ teamMembers }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger visibility for animations
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full md:w-[80vw] mt-8 p-6">
      <div className="p-4 gap-10">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }} 
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} 
          transition={{ duration: 0.5 }}
          className="w-full mb-6"
        >
          <p className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 heading-font tracking-wider text-shadow">
            Meet our  
            <span className='text-[rgb(255,102,0)] heading-font tracking-wider'> Management</span>
          </p>
          <p className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 heading-font text-gray-500 tracking-wider text-shadow">
            Passionate. Proactive. Expert.
          </p>
          <p className="text-md text-gray-700 font-semibold text-justify pr-8 mt-5">
            We prioritize empathy in our leadership fostering connections <br /> that unite the world.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="w-full sm:w-1/2 lg:w-1/3 p-4"
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
            >
              <div
                className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => navigate(`/member/${index}`, { state: { member } })} // Pass the member data
              >
                <img
                  className="w-full h-80 md:h-96 object-cover mb-4 rounded-lg"
                  src={member.image}
                  alt={member.name}
                />
                <p className="font-semibold text-lg text-center mt-2">{member.name}</p>
                <p className="text-gray-700 text-center mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;
