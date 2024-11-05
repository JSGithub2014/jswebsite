import React, { useState, useRef, useEffect } from 'react';

function ServicesCard({ logo, title, description, additionalInfo, generalInfo }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(prevState => !prevState);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, { threshold: 0.5 });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <article 
      ref={cardRef} 
      className={`bg-white shadow-lg rounded-lg p-6 transition-all duration-300 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} flex flex-col justify-between`} 
      aria-labelledby={`service-${title.toLowerCase()}`}
    >
      <img 
        src={logo} 
        alt={`${title} service logo`} 
        className="w-20 h-20 mx-auto mb-4" 
        loading="lazy"
      />
      <h2 
        id={`service-${title.toLowerCase()}`} 
        className="text-lg sm:text-xl font-semibold text-center mb-2" 
        aria-label={title}
      >
        {title}
      </h2>
      <p className="text-sm sm:text-gray-600 text-justify flex-grow overflow-hidden">
        {description}
      </p>
      <div 
        className={`mt-2 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[300px]' : 'max-h-0'}`} 
      >
        <p className="text-sm sm:text-gray-600 text-justify">{additionalInfo}</p>
        <p className="mt-2 text-sm sm:text-gray-600">{generalInfo}</p>
      </div>
      <button 
        onClick={toggleExpand} 
        className="text-[rgb(255,102,0)] font-semibold cursor-pointer hover:underline mt-2"
        aria-label={`Toggle more information about ${title}`}
      >
        {isExpanded ? 'Read Less' : 'Read More...'}
      </button>
    </article>
  );
}

export default ServicesCard;
