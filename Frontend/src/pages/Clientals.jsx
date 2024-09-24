import React from 'react';

const PartnerSection = () => {
  const clientalsLine1 = [
    '../src/assets/clientals/tricity.jpg',
    '../src/assets/clientals/raheja.jpg',
    '../src/assets/clientals/rustomjee.jpg',
    '../src/assets/clientals/oberoy.jpg',
    '../src/assets/clientals/hiranandani.jpg',
    '../src/assets/clientals/dosti.jpg',
    '../src/assets/clientals/godrej.jpg',
    '../src/assets/clientals/akshar.jpg',
    '../src/assets/clientals/the-wadhva-group.jpg',
    '../src/assets/clientals/rajesh.jpg',
  ];

  const clientalsLine2 = [
    '../src/assets/clientals/regency.jpg',
    '../src/assets/clientals/arihant.jpg',
    '../src/assets/clientals/marathon.jpg',
    '../src/assets/clientals/lodha.jpg',
    // Add any additional clientals if necessary
  ];

  const clientalsLine3 = [
    // If you want to add more clientals, continue here
  ];

  return (
    <div className="bg-white py-8">
      <h2 className="text-4xl font-bold text-center text-gray-700 mb-6">Clientele</h2>

      {/* First Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Duplicate the array for seamless scrolling */}
          {clientalsLine1.concat(clientalsLine2).concat(clientalsLine1).concat(clientalsLine2).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client ${index + 1}`}
              className="inline-block mx-4 h-16"
            />
          ))}
        </div>
      </div>

      {/* Second Marquee */}
      <div className="relative overflow-hidden mt-6">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {/* Here you can add additional lines if necessary */}
          {clientalsLine3.concat(clientalsLine3).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client ${index + 11}`}
              className="inline-block mx-4 h-16"
            />
          ))}
        </div>
      </div>

      {/* Tailwind CSS for Animations */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default PartnerSection;
