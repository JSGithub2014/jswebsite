import React from 'react';

function TestimonialCard({ name, position, quote, photo }) {
  return (
    <div 
      className="bg-white shadow-lg rounded-lg p-5 m-4 flex flex-col md:flex-row" 
      role="blockquote" // Added role for semantic meaning
      aria-labelledby={`testimonial-${name.replace(/\s+/g, '-').toLowerCase()}`} // Unique ID for accessibility
    >
      <img 
        src={photo}
        alt={`Photo of ${name}`} // Descriptive alt text for accessibility
        className="w-16 h-16 rounded-full mr-4 mb-4 md:mb-0 md:mr-4" 
        loading="lazy" 
      />
      <div className="flex-grow">
        <h3 
          id={`testimonial-${name.replace(/\s+/g, '-').toLowerCase()}`} // Matching ID for reference
          className="font-semibold text-sm md:text-base"
        >
          {name}
        </h3>
        <p className="text-gray-500 text-xs md:text-sm">{position}</p>
        <div className="mt-2">
          <p className="text-gray-600 italic text-sm md:text-base">{quote}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
