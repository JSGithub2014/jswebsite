import React from 'react';

const PartnerSection = () => {
  const partnersLine1 = [
    '../src/assets/partners/BOI.jpg',
    '../src/assets/partners/BOM.jpg',
    '../src/assets/partners/DBS.jpg',
    '../src/assets/partners/DCB.jpg',
    '../src/assets/partners/DNS.jpg',
    '../src/assets/partners/GP-parsik.jpg',
    '../src/assets/partners/GS-maha.jpg',
    '../src/assets/partners/HDFC-ltd.jpg',
    '../src/assets/partners/HDFC.jpg',
    '../src/assets/partners/HSBC.jpg',
  ];

  const partnersLine2 = [
    '../src/assets/partners/ICICI-finance.jpg',
    '../src/assets/partners/ICICI.jpg',
    '../src/assets/partners/IDBI.jpg',
    '../src/assets/partners/IDFC1st.jpg',
    '../src/assets/partners/KNS.jpg',
    '../src/assets/partners/L&T-Fin-1.jpg',
    '../src/assets/partners/LIC-HFL.jpg',
    '../src/assets/partners/PNB-1.jpg',
    '../src/assets/partners/RBL.jpg',
  ];

  const duplicateLogos = (logos) => {
    return [...logos, ...logos, ...logos]; // Duplicate three times for seamless effect
  };

  return (
    <div className="bg-white py-8 overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-gray-700 mb-6">Our Partners</h2>

      {/* First Marquee Line */}
      <div className="relative overflow-hidden mb-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicateLogos(partnersLine1).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="inline-block mx-4 h-16"
            />
          ))}
        </div>
      </div>

      {/* Second Marquee Line */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {duplicateLogos(partnersLine2).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + partnersLine1.length + 1}`}
              className="inline-block mx-4 h-16"
            />
          ))}
        </div>
      </div>

      {/* Tailwind CSS for Animations */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%); /* Adjust this based on the number of duplicates */
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PartnerSection;
