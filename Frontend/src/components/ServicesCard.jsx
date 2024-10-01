import React from 'react';

function ServicesCard({ logo, title, description }) {
  return (
    <article 
      className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 h-80 w-80 flex flex-col justify-between" 
      aria-labelledby={`service-${title.toLowerCase()}`} // Adding an ID for better accessibility
    >
      <img 
        src={logo} 
        alt={`${title} service logo`} 
        className="w-20 h-20 mx-auto mb-4" 
        loading="lazy" // Lazy loading for better performance
      />
      <h2 
        id={`service-${title.toLowerCase()}`} // Associating the heading with the article
        className="text-lg sm:text-xl font-semibold text-center mb-2" 
        aria-label={title}
      >
        {title}
      </h2>
      <p className="text-sm sm:text-gray-600 text-justify flex-grow">
        {description}
        <a 
          href={`/services/${title.toLowerCase()}`} 
          className="text-[rgb(255,102,0)] font-semibold cursor-pointer hover:underline"
          aria-label={`Read more about ${title}`}
        >
          read more...
        </a>
      </p>
    </article>
  );
}

export default ServicesCard;
