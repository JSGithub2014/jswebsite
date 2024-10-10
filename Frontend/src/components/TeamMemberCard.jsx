import React from 'react';

const TeamMemberCard = ({ member, onClick }) => {
  return (
    <div className='flex flex-col items-center'>
      <div 
        className='bg-white rounded-full shadow-lg justify-center cursor-pointer transition-transform transform hover:scale-105 flex flex-col items-center'
        onClick={onClick}
        style={{ width: '240px', height: '240px', margin: '20px' }} 
      >
        <img 
          src={member.image}
          alt={member.name}
          className='w-full h-full rounded-full object-cover' // Ensures it fills the circle
        />
      </div>
      <h3 className='text-lg text-[rgb(255,102,0)] font-semibold tracking-wide'>{member.name}</h3>
      <p className='text-md text-gray-700'>{member.role}</p>
    </div>
  );
};

export default TeamMemberCard;
