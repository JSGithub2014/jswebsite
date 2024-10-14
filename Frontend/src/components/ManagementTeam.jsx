import React from 'react';

const ManagementTeam = ({ teamMembers, onClick }) => {
    return (
        <div className='flex flex-wrap justify-center gap-6 p-4'>
            {teamMembers.map((member, index) => (
                <div key={index} className='flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-auto'>
                    <div 
                        className='w-[300px] h-[320px] bg-white rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105'
                        onClick={() => onClick(member)} 
                    >
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className='w-full h-full rounded-lg object-fit'
                        />
                    </div>
                    <h3 className='text-xl mt-2 text-[rgb(255,102,0)] font-semibold tracking-wide text-center'>{member.name}</h3>
                    <p className='text-md text-gray-700 text-center'>{member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default ManagementTeam;
