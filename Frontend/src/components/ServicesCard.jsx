import React from 'react';

function ServicesCard({ logo, title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm ">
      <img 
        src={logo} 
        alt="Service Logo" 
        className="w-24 h-24 mx-auto mb-4" 
      />
      <h2 className="text-xl font-semibold text-center mb-2">{title}</h2>
      <p className="text-gray-600  text-justify">{description} <span className='text-[#ff7c02] font-semibold cursor-pointer'>read more..</span></p>
    </div>
  );
}

export default ServicesCard;
