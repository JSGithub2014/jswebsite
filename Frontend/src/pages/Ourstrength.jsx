import React from 'react';

// Import images directly
import firstPoint from '../assets/first-point-1.png';
import secondPoint from '../assets/Second-point-1.png';
import thirdPoint from '../assets/Third-point-1.png';
import fourthPoint from '../assets/fourth-point-1.png';

const StrengthSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto relative">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 w-full h-1 bg-primary"></div>
        
        <div className="grid grid-cols-4 gap-8 relative z-10">
          {/* Box 1 (above the line) */}
          <div className="flex flex-col items-center space-y-4">
            <img src={firstPoint} alt="Strength 1" className="w-16 h-16 animate-spin" />
            <p className="text-center">Critical understanding of transactions and deal execution skills.</p>
          </div>

          {/* Box 2 (below the line) */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-center">In-depth knowledge of the industry and various sector verticals.</p>
            <img src={secondPoint} alt="Strength 2" className="w-16 h-16 animate-bounce" />
          </div>

          {/* Box 3 (above the line) */}
          <div className="flex flex-col items-center space-y-4">
            <img src={thirdPoint} alt="Strength 3" className="w-16 h-16 animate-spin-slow" />
            <p className="text-center">Strong relationships with banks, financial institutions, fund houses, and investors.</p>
          </div>

          {/* Box 4 (below the line) */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-center">Dynamic relationships with industries, business houses, and Promoters.</p>
            <img src={fourthPoint} alt="Strength 4" className="w-16 h-16 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthSection;
