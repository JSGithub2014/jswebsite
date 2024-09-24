import React from 'react';

function ServicesCard({ logo, title, description }) {
  return (
    <article className="bg-white shadow-lg rounded-lg p-4 sm:p-6 m-4 max-w-sm transition-transform duration-300 ease-in-out transform hover:scale-105 overflow-hidden">
      <img 
        src={logo} 
        alt={`${title} service logo`} 
        className="w-20 h-20 mx-auto mb-4" 
      />
      <h2 className="text-lg sm:text-xl font-semibold text-center mb-2" aria-label={title}>
        {title}
      </h2>
      <p className="text-sm sm:text-gray-600 text-justify overflow-hidden text-ellipsis">
        {description}{' '}
        <a 
          href={`/services/${title.toLowerCase()}`} 
          className="text-[#ff7c02] font-semibold cursor-pointer hover:underline"
          aria-label={`Read more about ${title}`}
        >
          read more...
        </a>
      </p>
    </article>
  );
}

export default ServicesCard;
