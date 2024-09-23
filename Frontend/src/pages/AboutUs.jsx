import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      {/* Left Side with two background colors and animated text */}
      <div className="w-full md:w-1/2 h-64 md:h-screen bg-gradient-to-b from-[#F6EDE1] to-[#F6980B] flex items-center justify-center p-10">
        <p className="text-2xl md:text-4xl text-gray-800 font-semibold animate-fade-in-up">
          Who We Are
        </p>
      </div>

      {/* Right Side with white box, curved corners, and scale-in animation */}
      <div className="w-full md:w-1/2 bg-white rounded-3xl shadow-lg p-10 m-10 animate-fade-in-scale">
        <p className="text-gray-700 text-lg md:text-xl">
          We are a passionate team of developers dedicated to building modern web
          applications. Our goal is to deliver top-notch digital experiences that
          help businesses grow in the online world.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
