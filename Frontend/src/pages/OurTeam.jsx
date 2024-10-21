import React, { useState, useEffect, useRef } from 'react';
import ManagementTeam from '../components/AboutUs/ManagementTeam';
import TeamMemberCard from '../components/AboutUs/TeamMemberCard';
import { FaLinkedin } from 'react-icons/fa';
import j_m_Img from '../assets/ourTeam/j.mittal.jpeg';
import s_p_Img from '../assets/ourTeam/s.p.jpeg';
import s_chaurasiya from '../assets/ourTeam/s.chaurasia.jpeg';
import AboutMain from '../components/AboutUs/AboutHero';
import { motion } from 'framer-motion';

const managementTeamMembers = [
  {
    name: 'Jayant Mittal',
    role: 'Founder',
    image: j_m_Img,
    description: 'Jayant Mittal is a visionary leader with a passion for innovation and technology. With over a decade of experience in the industry, he has successfully led multiple projects that have transformed businesses. His expertise lies in strategic planning, product development, and fostering a culture of creativity and collaboration. Jayant believes in harnessing the power of technology to drive change and is committed to mentoring the next generation of leaders in the field.',
    social: {
      linkedin: 'https://www.linkedin.com/in/jayant-mittal-3297b3147/',
    },
  },
  {
    name: 'Sanil Pandit',
    role: 'Director',
    image: s_p_Img,
    description: 'Sanil Pandit is an accomplished Director with a robust background in strategic planning and execution. He has a proven track record of driving growth and improving operational efficiencies in various organizations. Sanil is known for his analytical skills and ability to develop effective business strategies that align with company goals. His leadership style emphasizes teamwork and open communication, fostering an environment where innovative ideas can flourish.',
    social: {
      linkedin: 'https://www.linkedin.com/in/sanil-pandit-474a52161/',
    },
  },
  {
    name: 'Sayali KC',
    role: 'Chief Marketing Officer',
    image: s_chaurasiya,
    description: 'Sayali KC is a dynamic Chief Marketing Officer with a keen eye for branding and market trends. With extensive experience in digital marketing and consumer behavior, she excels at crafting compelling marketing strategies that resonate with target audiences. Sayali is passionate about leveraging data-driven insights to enhance brand visibility and engagement. She believes in the power of storytelling and creativity to connect brands with consumers, driving both awareness and loyalty.',
    social: {
      linkedin: 'https://www.linkedin.com/in/sayali-chaurasiya-0a31a4162/',
    },
  },
];

function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);
  const modalRef = useRef(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    const body = document.body;

    if (selectedMember) {
      body.style.overflow = 'hidden'; // Prevent background scrolling
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      body.style.overflow = ''; // Allow scrolling when modal is closed
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      body.style.overflow = ''; // Cleanup
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedMember]);

  return (
    <React.Fragment>
      <div className='relative w-full bg-[rgb(231,231,231)] flex flex-col items-center text-black overflow-hidden'>
        <AboutMain />
        <ManagementTeam teamMembers={managementTeamMembers} onClick={openModal} />
        <TeamMemberCard teamMembers={[]} onClick={openModal} />

        {selectedMember && (
          <>
            <motion.div
              className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className='fixed inset-0 flex items-center justify-center z-50 p-4'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div ref={modalRef} className='bg-white rounded-lg p-4 sm:p-6 w-full max-w-5xl relative shadow-lg flex flex-col md:flex-row mx-auto'>
                <button
                  className='absolute top-2 right-2 text-gray-600 text-2xl hover:text-gray-900'
                  onClick={closeModal}
                >
                  &times;
                </button>
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className='w-full h-48 sm:h-64 md:w-72 md:h-72 object-contain rounded-lg mb-4 md:mr-8'
                />
                <div className='flex flex-col justify-center overflow-y-auto max-h-[70vh]'>
                  <h2 className='text-lg sm:text-2xl md:text-4xl mb-2 font-semibold text-[rgb(255,102,0)]'>
                    {selectedMember.name}
                  </h2>
                  <p className='text-base sm:text-lg mb-2 font-medium text-gray-600'>
                    {selectedMember.role}
                  </p>
                  <p className='text-gray-800 text-justify text-sm sm:text-md mb-4'>
                    {selectedMember.description || 'No description available.'}
                  </p>
                  <div className='mt-4'>
                    <h3 className='text-base sm:text-lg font-semibold text-gray-700'>
                      Connect with {selectedMember.name}:
                    </h3>
                    <div className='flex space-x-4 mt-2'>
                      {selectedMember.social.linkedin && (
                        <a
                          href={selectedMember.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='flex items-center text-blue-600 hover:underline text-sm sm:text-base'
                        >
                          <FaLinkedin className='mr-1' /> LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </React.Fragment>
  );
}

export default OurTeam;
