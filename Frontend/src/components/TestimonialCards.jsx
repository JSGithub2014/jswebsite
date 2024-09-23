import React from 'react';

function TestimonialCard({ name, position, quote, photo }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 items-center m-4 flex">
      <img src={photo} alt={name} className="w-16 h-16 rounded-full mr-4" />
      <div>
        <p className="text-gray-600 italic">"{quote}"</p>
        <h3 className="font-semibold mt-4">{name}</h3>
        <p className="text-gray-500">{position}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
