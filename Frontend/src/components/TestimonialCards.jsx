import React from 'react';

function TestimonialCard({ name, position, quote, photo }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 m-4 flex flex-col md:flex-row">
      <img 
        src={photo}
        alt={`Photo of ${name}`}
        className="w-16 h-16 rounded-full  mr-4 mb-4 md:mb-0 md:mr-4" 
        loading="lazy" 
      />
      <div className="flex-grow">
        <h3 className="font-semibold text-sm md:text-base">{name}</h3>
        <p className="text-gray-500 text-xs md:text-sm">{position}</p>
        <div className="mt-2">
          <p className="text-gray-600 italic text-sm md:text-base">"{quote}"</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
