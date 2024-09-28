import React, { useEffect, useState } from 'react';
import logo from '../assets/reloader-logo.png'; // Adjust the path to your logo

const Loading = () => {
  const [visibleWords, setVisibleWords] = useState([]);
  
  useEffect(() => {
    const words = ['Bouldless', 'Committed', 'Pragmatic'];

    const timeouts = words.map((word, index) =>
      setTimeout(() => {
        setVisibleWords((prev) => [...prev, word]);
      }, index * 400) // Delay of 0.4 seconds for each word
    );

    // Cleanup timeouts on component unmount
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[rgb(255,102,0)] z-50">
      <img src={logo} alt="Company Logo" className=" w-64 h-auto mb-4 -mt-5" />
      <div className="text-xl font-bold">
        {['Bouldless', 'Committed', 'Pragmatic'].map((word, index) => (
          <span 
            key={index} 
            className={`inline-block transition-opacity duration-500 ease-in-out`} // Smooth transition
            style={{ 
              opacity: visibleWords.includes(word) ? 1 : 0, // Fade in effect
              transitionDelay: `${visibleWords.includes(word) ? '0ms' : `${index * 500}ms`}`, // Delay for each word
            }}
          >
            {word}
            {index < 2 && ' | '} {/* Add separator except for the last word */}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
