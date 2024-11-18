import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ManagementTeam from '../components/AboutUs/ManagementTeam';
import j_m_Img from '../assets/ourTeam/j.mittal.jpg';
import s_p_Img from '../assets/ourTeam/s.p.jpg';
import s_chaurasiya from '../assets/ourTeam/s.chaurasia.jpg';
import AboutMain from '../components/AboutUs/AboutHero';

const managementTeamMembers = [
  {
    name: 'Jayant Mittal',
    role: 'Founder',
    image: j_m_Img,
    description:
      'Jayant Mittal is a visionary leader with a passion for innovation and technology. With over a decade of experience in the industry, he has successfully led multiple projects that have transformed businesses. His expertise lies in strategic planning, product development, and fostering a culture of creativity and collaboration. Jayant believes in harnessing the power of technology to drive change and is committed to mentoring the next generation of leaders in the field.',
    social: {
      linkedin: 'https://www.linkedin.com/in/jayant-mittal-3297b3147/',
    },
    hoverText: 'Strategic Visionary & Innovator',
  },
  {
    name: 'Sanil Pandit',
    role: 'Director',
    image: s_p_Img,
    description:
      'Sanil Pandit is an accomplished Director with a robust background in strategic planning and execution. He has a proven track record of driving growth and improving operational efficiencies in various organizations. Sanil is known for his analytical skills and ability to develop effective business strategies that align with company goals. His leadership style emphasizes teamwork and open communication, fostering an environment where innovative ideas can flourish.',
    social: {
      linkedin: 'https://www.linkedin.com/in/sanil-pandit-474a52161/',
    },
    hoverText: 'Growth & Strategy Expert',
  },
  {
    name: 'Sayali KC',
    role: 'Chief Marketing Officer',
    image: s_chaurasiya,
    description:
      'Sayali KC is a dynamic Chief Marketing Officer with a keen eye for branding and market trends. With extensive experience in digital marketing and consumer behavior, she excels at crafting compelling marketing strategies that resonate with target audiences. Sayali is passionate about leveraging data-driven insights to enhance brand visibility and engagement. She believes in the power of storytelling and creativity to connect brands with consumers, driving both awareness and loyalty.',
    social: {
      linkedin: 'https://www.linkedin.com/in/sayali-chaurasiya-0a31a4162/',
    },
    hoverText: 'Branding & Digital Marketing',
  },
];

function OurTeam() {
  const navigate = useNavigate();

  const handleCardClick = (name, member) => {
    navigate(`/member/${name}`, { state: { member } });
  };

  return (
    <div className='relative w-full bg-[rgb(231,231,231)] flex flex-col items-center text-black overflow-hidden'>
      <AboutMain />
      <ManagementTeam teamMembers={managementTeamMembers} onCardClick={handleCardClick} />
    </div>
  );
}

export default OurTeam;
