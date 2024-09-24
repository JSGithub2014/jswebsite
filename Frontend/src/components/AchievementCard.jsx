import React from 'react';

function AchievementCard({ imgSrc, title, description, achievementNumber }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-2 flex flex-col">
      {/* Image */}
      <img 
        src={imgSrc} 
        alt={title} 
        className="w-16 h-16 object-contain rounded-md mb-2"
      />

      {/* Achievement number */}
      <p className="text-base md:text-lg font-extrabold text-left mt-2">{achievementNumber}</p>

      {/* Title */}
      <h2 className="text-sm md:text-md font-medium text-left mt-1">{title}</h2>
      
      {/* Description */}
      <p className="text-gray-600 text-xs md:text-sm text-left mt-1">{description}</p>
    </div>
  );
}

export default AchievementCard;
