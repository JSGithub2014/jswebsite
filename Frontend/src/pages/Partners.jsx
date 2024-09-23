import React from 'react';

const PartnerSection = () => {
  const partnersLine1 = [
    '/path-to-logo1.png',
    '/path-to-logo2.png',
    '/path-to-logo3.png',
    '/path-to-logo4.png',
    // Add more logos as needed
  ];

  const partnersLine2 = [
    '/path-to-logo5.png',
    '/path-to-logo6.png',
    '/path-to-logo7.png',
    '/path-to-logo8.png',
    // Add more logos as needed
  ];

  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Our Partners</h2>

      <div className="overflow-hidden">
        <div direction="left" className="marquee whitespace-nowrap w-full">
          
          {partnersLine1.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="inline-block mx-8 h-16"
            />
          ))}
        </div>
      </div>

      <div className="overflow-hidden mt-6">
        <div className="marquee-reverse whitespace-nowrap w-full">
          {partnersLine2.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 5}`}
              className="inline-block mx-8 h-16"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
