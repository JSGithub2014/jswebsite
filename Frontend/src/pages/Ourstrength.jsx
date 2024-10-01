import React from 'react';

// Import images directly
import firstPoint from '../assets/first-point-1.png'; // Ensure this path is correct
import secondPoint from '../assets/partners/Second-point-1.png'; // Case-sensitive
import thirdPoint from '../assets/third-point-1.png'; // Ensure this path is correct
import fourthPoint from '../assets/fourth-point-1.png'; // Ensure this path is correct

const StrengthSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto relative">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 w-full h-1 bg-primary"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {/* Strength Points */}
          {[
            {
              img: firstPoint,
              text: "Critical understanding of transactions and deal execution skills.",
              imgAlt: "Strength 1",
            },
            {
              text: "In-depth knowledge of the industry and various sector verticals.",
              img: secondPoint,
              imgAlt: "Strength 2",
            },
            {
              img: thirdPoint,
              text: "Strong relationships with banks, financial institutions, fund houses, and investors.",
              imgAlt: "Strength 3",
            },
            {
              text: "Dynamic relationships with industries, business houses, and Promoters.",
              img: fourthPoint,
              imgAlt: "Strength 4",
            }
          ].map((point, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              {point.img && (
                <img
                  src={point.img}
                  alt={point.imgAlt}
                  className="w-16 h-16"
                />
              )}
              <p className="text-center">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthSection;
