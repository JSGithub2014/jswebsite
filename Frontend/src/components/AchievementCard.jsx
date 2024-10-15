import React from 'react';

function AchievementCard({ imgSrc, title, description, achievementNumber }) {
  return (
    <article
      className="bg-white shadow-lg rounded-lg p-4 m-2 flex items-center h-32 overflow-hidden" // Adjusted padding
      role="article"
      aria-labelledby={`achievement-${achievementNumber}`}
    >
      {/* Image with alt text for SEO */}
      <img
        src={imgSrc}
        alt={`${title} - ${achievementNumber}`}
        className="w-16 h-16 object-contain rounded-md mr-4"
        loading="lazy"
      />

      {/* Content Container */}
      <div className="flex flex-col flex-grow">
        <div className="flex items-center">
          {/* Achievement number */}
          <p
            className="text-base md:text-2xl font-extrabold text-left mt-1 overflow-hidden text-ellipsis"
            id={`achievement-number-${achievementNumber}`}
          >
            {achievementNumber}
          </p>
          {/* Title */}
          <h2
            className="text-sm md:text-md font-medium text-left mt-1 ml-2 overflow-hidden text-ellipsis"
            id={`achievement-title-${achievementNumber}`}
          >
            {title}
          </h2>
        </div>

        {/* Description */}
        <p
          className="text-gray-600 text-xs md:text-sm text-justify mt-1 pb-2 overflow-hidden text-ellipsis"
          aria-describedby={`achievement-description-${achievementNumber}`}
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export default AchievementCard;
