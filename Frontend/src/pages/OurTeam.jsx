import React, { useState } from 'react';
import ManagementTeam from '../components/ManagementTeam';
import TeamMemberCard from '../components/TeamMemberCard';
import Footer from './Footer';

const managementTeamMembers = [
  {
    name: 'Jayant Mittal',
    role: 'Founder',
    image: 'https://castlewoodassistedliving.com/wp-content/uploads/2021/01/image-coming-soon-placeholder.png',
    description: 'Leader and visionary behind the company.',
  },
  {
    name: 'Sanil Pandit',
    role: 'Founder',
    image: 'https://castlewoodassistedliving.com/wp-content/uploads/2021/01/image-coming-soon-placeholder.png',
    description: 'Expert in strategic planning and execution.',
  },
  {
    name: 'Sayali K. Chaurasia',
    role: 'Chief Marketing Officer',
    image: 'https://castlewoodassistedliving.com/wp-content/uploads/2021/01/image-coming-soon-placeholder.png',
    description: 'Responsible for marketing strategy and branding.',
  },
];

const teamMembers = [
  {
    name: 'Random',
    role: 'Random',
    image: 'https://castlewoodassistedliving.com/wp-content/uploads/2021/01/image-coming-soon-placeholder.png',
    description: 'Specializes in front-end development.',
  },
  {
    name: 'Random',
    role: 'Random',
    image: 'https://castlewoodassistedliving.com/wp-content/uploads/2021/01/image-coming-soon-placeholder.png',
    description: 'Creative designer focused on user experience.',
  },
  {
    name: 'Random',
    role: 'Random ',
    image: 'https://castlewoodassistedliving.com/wp-content/uploads/2021/01/image-coming-soon-placeholder.png',
    description: 'Oversees product development and strategy.',
  },
  {
    name: 'Random',
    role: 'Random',
    image: 'https://castlewoodassistedliving.com/wp-content/uploads/2021/01/image-coming-soon-placeholder.png',
    description: 'Specializes in front-end development.',
  },
  {
    name: 'Random',
    role: 'Random',
    image: 'https://castlewoodassistedliving.com/wp-content/uploads/2021/01/image-coming-soon-placeholder.png',
    description: 'Creative designer focused on user experience.',
  },
  {
    name: 'Random',
    role: 'Random ',
    image: 'https://castlewoodassistedliving.com/wp-content/uploads/2021/01/image-coming-soon-placeholder.png',
    description: 'Oversees product development and strategy.',
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
      <div className='w-full bg-gradient-to-b from-orange-100 to-orange-200 flex flex-col items-center text-black p-6'>
        <h1 className='text-4xl md:text-5xl heading-font text-center px-10 rounded-full tracking-wider font-thin mb-5 transform transition-transform duration-300 hover:scale-105 text-shadow mt-20'>
          <span className='text-[rgb(255,102,0)] heading-font'>Meet</span> Our Team
        </h1>
        <p className='text-lg mb-8 text-center w-full md:w-2/3 lg:w-1/2 px-4'>
          Meet our dedicated team of professionals who work tirelessly to provide the best services for our clients.
        </p>

        <ManagementTeam teamMembers={managementTeamMembers} onClick={openModal} />

        <div className='flex flex-wrap justify-center gap-6 p-4 px-20'>
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              member={member}
              onClick={() => openModal(member)}
              className="transition-transform transform hover:scale-105 hover:shadow-lg" 
            />
          ))}
        </div>

        {selectedMember && (
  <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mt-10'>
    <div className='bg-white rounded-lg p-6 max-w-md w-full relative shadow-lg transform transition-transform duration-300 scale-100 hover:scale-95'>
      <button
        className='absolute top-2 right-2 text-gray-500 hover:text-gray-800'
        onClick={closeModal}
      >
        &times;
      </button>
      <img
        src={selectedMember.image}
        alt={selectedMember.name}
        className='w-full h-full object-cover rounded-lg mb-4'
        style={{ aspectRatio: '1 / 1' }} // Ensures a square shape
      />
      <h2 className='text-2xl mb-2 font-semibold'>{selectedMember.name}</h2>
      <p className='text-md mb-4 font-medium text-gray-600'>{selectedMember.role}</p>
      <p className='text-gray-800'>{selectedMember.description || 'No description available.'}</p>
    </div>
  </div>
)}

      </div>
      <Footer />
    </React.Fragment>
  );
}

export default OurTeam;
