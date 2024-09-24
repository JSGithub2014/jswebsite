// src/components/AchievementCard.jsx
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

      {/* Achievement number below the image, aligned to the left */}
      <p className="text-lg font-extrabold text-left mt-2">{achievementNumber}</p> {/* Updated alignment */}

      {/* Title below the achievement number */}
      <h1 className="text-md font-medium text-left mt-1">{title}</h1>
      
      {/* Description Paragraph */}
      <p className="text-gray-600 text-xs text-left mt-1">{description}</p>
    </div>
  );
}

export default AchievementCard;
