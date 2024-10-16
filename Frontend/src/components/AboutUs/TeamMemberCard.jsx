import React from 'react';

const TeamMemberCard = ({ teamMembers, onClick }) => {
  return (
    <div className='flex flex-col md:flex-row p-4 mt-20'>
      {/* Introductory text for small screens */}
      <div className="block md:hidden w-full mb-6">
        <p className="text-4xl lg:text-5xl font-bold mb-4 heading-font tracking-wider text-shadow">
          Meet Our <br /> 
          <span className='text-[rgb(255,102,0)] heading-font tracking-wider'>Talented Team</span>
        </p>
        <p className="text-md text-gray-700 font-semibold text-justify pr-8">
          Our diverse and skilled team is the backbone of our success. Each member brings unique expertise and a passion for excellence, working collaboratively to drive innovation and deliver exceptional results.
        </p>
      </div>

      <div className='flex flex-wrap justify-center w-full md:w-2/3 mb-6 gap-5'>
        {teamMembers.map((member, index) => (
          <div key={index} className='flex flex-col items-center w-full sm:w-1/3 md:w-1/2 lg:w-auto mb-6'>
            <div 
              className='w-[180px] h-[180px]  rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 flex justify-center items-center'
              onClick={() => onClick(member)}
            >
              <img 
                src={member.image}
                alt={member.name}
                className='rounded-lg object-fit mb-4' 
              />
            </div>
            <h3 className='text-xl mt-2 text-[rgb(255,102,0)] font-semibold tracking-wide text-center'>{member.name}</h3>
            <p className='text-md text-gray-700 text-center mt-1'>{member.role}</p>
          </div>
        ))}
      </div>

      <div className="hidden md:block md:w-1/3 mb-6 md:ml-6">
        <p className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 heading-font tracking-wider">
          Meet Our <br /> 
          <span className='text-[rgb(255,102,0)] heading-font tracking-wider'>Talented Team</span>
        </p>
        <p className="text-md text-gray-700 font-semibold text-justify pr-8 mt-5">
          Our diverse and skilled team is the backbone of our success. Each member brings unique expertise and a passion for excellence, working collaboratively to drive innovation and deliver exceptional results. Together, we are committed to achieving our goals and exceeding client expectations.
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
