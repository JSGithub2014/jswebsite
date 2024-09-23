// src/components/AchievementCard.jsx
import React from 'react';

function AchievementCard({ imgSrc, title, description, achievementNumber, additionalText }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 flex flex-col">
      {/* Image */}
      <img 
        src={imgSrc} 
        alt={title} 
        className="w-16 h-16 object-contain rounded-md mb-2" // Image at the top with margin below
      />

      {/* Additional text below the image */}
      <p className="text-sm font-medium text-left mt-1">{additionalText}</p> {/* New text above title */}
      
      {/* Title below the additional text */}
      <h1 className="text-md font-bold text-left">{title}</h1> {/* Title aligned to left */}
      
      {/* Achievement number */}
      <p className="text-lg font-semibold text-left mt-1">{achievementNumber}</p> {/* Number of achievements */}
      
      {/* Description Paragraph */}
      <p className="text-gray-600 text-xs text-left">{description}</p> {/* Smaller description, aligned to left */}
    </div>
  );
}

export default AchievementCard;
