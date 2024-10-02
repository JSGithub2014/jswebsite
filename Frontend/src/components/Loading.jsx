import React, { useEffect, useState } from 'react';
import logo from '../assets/reloader-logo.png'; // Adjust the path to your logo

const Loading = () => {
  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    const words = ['Bouldless', 'Committed', 'Pragmatic'];

    // Initial delay before starting to display words
    const initialDelay = setTimeout(() => {
      const timeouts = words.map((word, index) =>
        setTimeout(() => {
          setVisibleWords((prev) => [...prev, word]);
        }, index * 400) // Delay of 0.4 seconds for each word after the initial delay
      );

      // Cleanup timeouts on component unmount
      return () => {
        timeouts.forEach((timeout) => clearTimeout(timeout));
      };
    }, 1000); // 1.5 seconds delay before starting

    // Cleanup the initial delay
    return () => clearTimeout(initialDelay);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[rgb(255,102,0)] z-50 p-4" role="alert">
      <img 
        src={logo} 
        alt="Company Logo - Bouldless" // Improved alt text for SEO
        className="w-32 h-auto mb-4 md:w-48" 
        loading="lazy" // Optional: Lazy load for performance
      />
      <div className="text-sm md:text-lg font-bold flex justify-center space-x-1" aria-live="polite"> {/* Aria live region for assistive technologies */}
        {['Bouldless', 'Committed', 'Pragmatic'].map((word, index) => (
          <span 
            key={index} 
            className={`inline-block transition-opacity duration-500 ease-in-out`} // Smooth transition
            style={{ 
              opacity: visibleWords.includes(word) ? 1 : 0, // Fade in effect
              transitionDelay: `${visibleWords.includes(word) ? '0ms' : `${index * 400}ms`}`, // Delay for each word
            }}
          >
            {word}
            {index < 2 && <span className="text-sm"> | </span>} {/* Add separator except for the last word */}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
