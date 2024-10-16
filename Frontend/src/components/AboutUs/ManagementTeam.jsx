import React from 'react';

const ManagementTeam = ({ teamMembers, onClick }) => {
  return (
    <div className="w-[80vw] mt-28 p-6">
      <div className=" p-4 gap-10 ">
        <div className="w-full mb-6 ">
          <p className="text-4xl w-full  md:text-4xl lg:text-5xl font-bold mb-4 heading-font tracking-wider text-shadow">
            Meet our  
            <span className='text-[rgb(255,102,0)] heading-font tracking-wider '> Management</span>
          </p>
          <p className="text-4xl w-full  md:text-4xl lg:text-5xl font-bold mb-4 heading-font text-gray-500 tracking-wider text-shadow">
          Passionate. Proactive. Expert.
          </p>
          <p className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 heading-font tracking-wider ">
            
          </p>
          <p className="text-md text-gray-700 font-semibold text-justify pr-8 mt-5">
          We prioritize empathy in our leadership fostering connections <br /> that unite the world.
            </p>
        </div>
        <div className=" flex flex-wrap">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
              <div
                className="p-4 flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => onClick(member)}
              >
                <img
                  className="w-full h-72 object-fit mb-4 rounded-lg" 
                  src={member.image}
                  alt={member.name}
                />
                <p className="font-semibold text-lg text-center mt-2">{member.name}</p>
                <p className="text-gray-700 text-center mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;
