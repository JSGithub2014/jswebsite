import React, { useState } from 'react';
import ManagementTeam from '../components/AboutUs/ManagementTeam';
import TeamMemberCard from '../components/AboutUs/TeamMemberCard'; 
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Footer from './Footer';
import j_m_Img from '../assets/ourTeam/j.mittal.jpeg';
import s_p_Img from '../assets/ourTeam/s.p.jpeg';
import s_chaurasiya from '../assets/ourTeam/s.chaurasia.jpeg';
import AboutMain from '../components/AboutUs/AboutMain';

// Updated management team members with social media handles
const managementTeamMembers = [
  {
    name: 'Jayant Mittal',
    role: 'Founder',
    image: j_m_Img,
    description: 'A visionary leader with a passion for innovation, Jayant Mittal drives the strategic direction of the company, fostering a culture of excellence and growth. He believes in empowering his team and creating a collaborative environment where everyone can thrive and contribute their best work.',
    social: {
      linkedin: 'https://www.linkedin.com/in/jayant-mittal-3297b3147/',
      twitter: 'https://twitter.com/jayant_mittal',
    },
  },
  {
    name: 'Sanil Pandit',
    role: 'Director',
    image: s_p_Img,
    description: 'An expert in strategic planning and execution, Sanil Pandit utilizes his extensive experience to craft effective strategies that advance the company’s goals. His analytical mindset ensures flawless project execution while aligning with the overall vision of the organization.',
    social: {
      linkedin: 'https://www.linkedin.com/in/sanil-pandit-474a52161/',
      twitter: 'https://twitter.com/sanil_pandit',
    },
  },
  {
    name: 'Sayali KC',
    role: 'Chief Marketing Officer',
    image: s_chaurasiya,
    description: 'With a keen eye for branding and market trends, Sayali K. Chaurasia spearheads innovative marketing strategies that enhance the company\'s visibility and engagement. She is passionate about storytelling and believes in the power of authentic communication to connect with audiences.',
    social: {
      linkedin: 'https://www.linkedin.com/in/sayali-kc',
      twitter: 'https://www.linkedin.com/in/sayali-chaurasiya-0a31a4162/',
    },
  },
];


const teamMembers = [
  {
    name: 'Random One',
    role: 'Random',
    image: 'https://via.placeholder.com/150',
    description: 'This team member specializes in various aspects of project management, ensuring seamless execution and timely delivery of projects.',
  },
  {
    name: 'Random Two',
    role: 'Random',
    image: 'https://via.placeholder.com/150',
    description: 'An innovative thinker, this member focuses on developing creative solutions to complex problems within the team.',
  },
  {
    name: 'Random Three',
    role: 'Random',
    image: 'https://via.placeholder.com/150',
    description: 'With expertise in technical skills, this member contributes significantly to the development and implementation of project initiatives.',
  },
  {
    name: 'Random Four',
    role: 'Random',
    image: 'https://via.placeholder.com/150',
    description: 'Dedicated to improving user experiences, this team member ensures that all products meet high standards of usability.',
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
        
        <AboutMain />
        <ManagementTeam teamMembers={managementTeamMembers} onClick={openModal} />
        <TeamMemberCard teamMembers={teamMembers} onClick={openModal} />

        {selectedMember && (
  <>
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50'></div>
    <div className='fixed inset-0 flex items-center justify-center z-50'>
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
          <p className='text-gray-800 text-justify text-lg mb-4'>{selectedMember.description || 'No description available.'}</p>

          {/* Social Media Links with Icons */}
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
    </div>
  </>
)}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default OurTeam;
