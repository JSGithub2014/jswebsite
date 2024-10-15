import React from 'react';

const ManagementTeam = ({ teamMembers, onClick }) => {
  return (
    <div className="max-w-screen-xl mx-auto mt-28 p-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6">
          <p className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 heading-font tracking-wider">Meet our <br /> <span className='text-[rgb(255,102,0)] heading-font tracking-wider'>Management Team</span></p>
          <p className="text-md text-gray-600 text-justify pr-8 mt-5">
          Our management team is a powerhouse of visionary leaders committed to driving success and innovation. With a wealth of experience, they inspire excellence and empower our team to reach new heights, ensuring we deliver outstanding results for our clients.</p>
        </div>
        <div className="md:w-2/3 flex flex-wrap">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
              <div
                className="border rounded-lg bg-[rgba(255,102,0,0.8)] p-4 flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => onClick(member)}
              >
                <img
                  className="w-full h-64 object-fit mb-4 rounded-lg"
                  src={member.image}
                  alt={member.name}
                />
                <p className="font-semibold text-lg text-center">{member.name}</p>
                <p className="text-gray-700 text-center">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;
