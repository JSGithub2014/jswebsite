import React, { useState } from 'react';
import ManagementTeam from '../components/AboutUs/ManagementTeam';
import TeamMemberCard from '../components/AboutUs/TeamMemberCard'; 
import Footer from './Footer';
import j_m_Img from '../assets/ourTeam/j.mittal.jpeg';
import s_p_Img from '../assets/ourTeam/s.p.jpeg';
import s_chaurasiya from '../assets/ourTeam/s.chaurasia.jpeg';
import AboutMain from '../components/AboutUs/AboutMain';

const managementTeamMembers = [
  {
    name: 'Jayant Mittal',
    role: 'Founder',
    image: j_m_Img,
    description: 'A visionary leader with a passion for innovation, Jayant Mittal drives the strategic direction of the company, fostering a culture of excellence and growth.',
  },
  {
    name: 'Sanil Pandit',
    role: 'Director',
    image: s_p_Img,
    description: 'An expert in strategic planning and execution, Sanil Pandit utilizes his extensive experience to craft effective strategies that advance the company’s goals.',
  },
  {
    name: 'Sayali KC',
    role: 'Chief Marketing Officer',
    image: s_chaurasiya,
    description: "With a keen eye for branding and market trends, Sayali K. Chaurasia spearheads innovative marketing strategies that enhance the company's visibility and engagement.",
  },
];

const teamMembers = [
  {
    name: 'Random',
    role: 'Random',
    image: 'https://via.placeholder.com/150',
    description: 'A skilled developer specializing in front-end technologies, Alice is passionate about creating intuitive user experiences.',
  },
  {
    name: 'Random',
    role: 'Random',
    image: 'https://via.placeholder.com/150',
    description: 'With a background in UX design, Michael ensures that products meet user needs and align with business goals.',
  },
  {
    name: 'Random',
    role: 'Random',
    image: 'https://via.placeholder.com/150',
    description: 'Emma designs engaging interfaces and ensures a seamless user experience across all platforms.',
  },
  {
    name: 'Random',
    role: 'Random',
    image: 'https://via.placeholder.com/150',
    description: 'With a background in UX design, Michael ensures that products meet user needs and align with business goals.',
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

  return (
    <React.Fragment>
      <div className='relative w-full bg-[rgb(231,231,231)] flex flex-col items-center text-black overflow-hidden'>
        
        {/* Full-height Banner with Image */}
        
<AboutMain/>
        <ManagementTeam teamMembers={managementTeamMembers} onClick={openModal} />
        <TeamMemberCard teamMembers={teamMembers} onClick={openModal} />

        {selectedMember && (
          <>
            <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50'></div>
            <div className='fixed inset-0 flex items-center justify-center z-50 w-[70vw]'>
              <div className='bg-zinc-100 rounded-lg p-6 max-w-xs w-full relative shadow-lg z-50'>
                <button
                  className='absolute top-2 right-2 text-gray-600 text-2xl hover:text-gray-900'
                  onClick={closeModal}
                >
                  &times;
                </button>
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className='w-full h-auto object-fit rounded-lg mb-4'
                  style={{ aspectRatio: '1 / 1' }}
                />
                <h2 className='text-xl mb-2 font-semibold text-[rgb(255,102,0)]'>{selectedMember.name}</h2>
                <p className='text-md mb-4 font-medium text-gray-600'>{selectedMember.role}</p>
                <p className='text-gray-800 text-justify'>{selectedMember.description || 'No description available.'}</p>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default OurTeam;
