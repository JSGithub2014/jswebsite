import React from 'react';

function AchievementCard({ imgSrc, title, description, achievementNumber }) {
  return (
    <article className="bg-white shadow-lg rounded-lg p-4 m-2 flex flex-col" role="article" aria-labelledby={`achievement-${achievementNumber}`}>
      {/* Image with alt text for SEO */}
      <img 
        src={imgSrc} 
        alt={`${title} - ${achievementNumber}`} 
        className="w-16 h-16 object-contain rounded-md mb-2"
        loading="lazy" // Optional: Lazy load images for performance
      />

      {/* Achievement number */}
      <p className="text-base md:text-lg font-extrabold text-left mt-2" id={`achievement-number-${achievementNumber}`}>{achievementNumber}</p>

      {/* Title */}
      <h2 className="text-sm md:text-md font-medium text-left mt-1" id={`achievement-title-${achievementNumber}`}>
        {title}
      </h2>
      
      {/* Description */}
      <p className="text-gray-600 text-xs md:text-sm text-left mt-1" aria-describedby={`achievement-description-${achievementNumber}`}>
        {description}
      </p>
    </article>
  );
}

export default AchievementCard;
