import React, { useState, useEffect } from 'react';
import ManagementTeam from '../components/AboutUs/ManagementTeam';
import TeamMemberCard from '../components/AboutUs/TeamMemberCard'; 
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Footer from './Footer';
import j_m_Img from '../assets/ourTeam/j.mittal.jpeg';
import s_p_Img from '../assets/ourTeam/s.p.jpeg';
import s_chaurasiya from '../assets/ourTeam/s.chaurasia.jpeg';
import AboutMain from '../components/AboutUs/AboutHero';
import { motion } from 'framer-motion';

// Updated management team members with social media handles
const managementTeamMembers = [
  {
    name: 'Jayant Mittal',
    role: 'Founder',
    image: j_m_Img,
    description: 'Jayant Mittal is a visionary leader with a passion for innovation and technology. With over a decade of experience in the industry, he has successfully led multiple projects that have transformed businesses. His expertise lies in strategic planning, product development, and fostering a culture of creativity and collaboration. Jayant believes in harnessing the power of technology to drive change and is committed to mentoring the next generation of leaders in the field.',
    social: {
      linkedin: 'https://www.linkedin.com/in/jayant-mittal-3297b3147/',
      twitter: 'https://twitter.com/jayant_mittal',
    },
  },
  {
    name: 'Sanil Pandit',
    role: 'Director',
    image: s_p_Img,
    description: 'Sanil Pandit is an accomplished Director with a robust background in strategic planning and execution. He has a proven track record of driving growth and improving operational efficiencies in various organizations. Sanil is known for his analytical skills and ability to develop effective business strategies that align with company goals. His leadership style emphasizes teamwork and open communication, fostering an environment where innovative ideas can flourish.',
    social: {
      linkedin: 'https://www.linkedin.com/in/sanil-pandit-474a52161/',
      twitter: 'https://twitter.com/sanil_pandit',
    },
  },
  {
    name: 'Sayali KC',
    role: 'Chief Marketing Officer',
    image: s_chaurasiya,
    description: 'Sayali KC is a dynamic Chief Marketing Officer with a keen eye for branding and market trends. With extensive experience in digital marketing and consumer behavior, she excels at crafting compelling marketing strategies that resonate with target audiences. Sayali is passionate about leveraging data-driven insights to enhance brand visibility and engagement. She believes in the power of storytelling and creativity to connect brands with consumers, driving both awareness and loyalty.',
    social: {
      linkedin: 'https://www.linkedin.com/in/sayali-kc',
      twitter: 'https://www.linkedin.com/in/sayali-chaurasiya-0a31a4162/',
    },
  },
];


function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  useEffect(() => {
    const body = document.body;

    if (selectedMember) {
      body.style.overflow = 'hidden'; // Disable scroll
    } else {
      body.style.overflow = ''; // Re-enable scroll
    }

    return () => {
      body.style.overflow = '';
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
              className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
           <motion.div
  className='fixed inset-0 flex items-center justify-center z-50'
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.8, opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  <div className='bg-white rounded-lg p-8 w-[90%] max-w-5xl mx-auto relative shadow-lg z-50 flex'>
    <button
      className='absolute top-2 right-2 text-gray-600 text-2xl hover:text-gray-900'
      onClick={closeModal}
    >
      &times;
    </button>
    <img
      src={selectedMember.image}
      alt={selectedMember.name}
      className='w-96 h-96 object-cover rounded-lg mr-8'
    />
    <div className='flex flex-col justify-center'>
      <h2 className='text-4xl mb-2 font-semibold text-[rgb(255,102,0)]'>{selectedMember.name}</h2>
      <p className='text-lg mb-2 font-medium text-gray-600'>{selectedMember.role}</p>
      <p className='text-gray-800 text-justify text-md mb-4 max-h-[200px] '>{selectedMember.description || 'No description available.'}</p>
      {/* Social Media Links */}
      <div className='mt-4'>
        <h3 className='text-lg font-semibold text-gray-700'>Connect with {selectedMember.name}:</h3>
        <div className='flex space-x-4 mt-2'>
          {selectedMember.social.linkedin && (
            <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer" className='flex items-center text-blue-600 hover:underline'>
              <FaLinkedin className='mr-1' /> LinkedIn
            </a>
          )}
          {selectedMember.social.twitter && (
            <a href={selectedMember.social.twitter} target="_blank" rel="noopener noreferrer" className='flex items-center text-blue-400 hover:underline'>
              <FaTwitter className='mr-1' /> Twitter
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
      <Footer />
    </React.Fragment>
  );
}

export default OurTeam;
