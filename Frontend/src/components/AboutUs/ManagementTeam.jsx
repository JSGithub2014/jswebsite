import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ManagementTeam = ({ teamMembers = [] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const styledName = (name) => {
    if (!name) return '';
    const words = name.split(' ');
    return (
      <span>
        <span style={{ color: 'rgb(255,102,0)' }}>{words[0]} </span>
        {words.slice(1).join(' ')}
      </span>
    );
  };

  const handleCardClick = (member) => {
    navigate(`/member/${member.name}`, { state: { member } });
  };

  return (
    <section className="w-full mt-8 p-6">
      <div className="p-4 gap-10">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full mb-6"
        >
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 heading-font tracking-wider text-shadow">
            Meet our
            <span className="text-[rgb(255,102,0)] heading-font tracking-wider"> Management</span>
          </h1>
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 heading-font text-gray-500 tracking-wider text-shadow">
            Passionate. Proactive. Expert.
          </h2>
          <p className="text-md text-gray-700 font-semibold pr-8 mt-5">
            We prioritize empathy in our leadership fostering connections <br /> that unite the world.
          </p>
        </motion.div>

        {/* Team Members Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } bg-white shadow-lg rounded-lg cursor-pointer transition-all hover:shadow-xl`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleCardClick(member)}
            >
              {/* Role Badge (Outside Top-Left) */}
              <div className="z-20 absolute -top-4 -left-4 bg-orange-500 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-md shadow-md">
                {member.role}
              </div>

              {/* Image Section */}
              <div className="relative w-full md:w-1/3">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-95"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-75 text-white text-center p-2">
                  <p className="font-semibold text-lg">{styledName(member.name)}</p>
                  <p className="text-sm  text-gray-300">{member.designation}</p>
                </div>
              </div>

              {/* Description Section */}
              <div className="p-6 w-full md:w-2/3 flex flex-col justify-center">
                <p className="text-gray-700 text-xs sm:text-[15px] text-justify leading-relaxed">
                  {member.description}
                </p>
                <p className="text-orange-500 font-bold mt-2 cursor-pointer text-sm sm:text-md md:text-lg">
                  Read more...
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
