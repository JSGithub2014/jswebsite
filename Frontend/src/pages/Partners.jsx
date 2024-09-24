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
    '../src/assets/partners/Rajesh.jpg',
    '../src/assets/partners/Regency.jpg',
  ];

  const partnersLine3 = [
    '../src/assets/partners/SBI.jpg',
    '../src/assets/partners/SVC.jpg',
    '../src/assets/partners/TJSB.jpg',
    '../src/assets/partners/The-Wadhva-Group.jpg',
    '../src/assets/partners/YES.jpg',
    '../src/assets/partners/abhyuday.jpg',
    '../src/assets/partners/akshar.jpg',
    '../src/assets/partners/apna-sahakari.jpg',
    '../src/assets/partners/arihant.jpg',
    '../src/assets/partners/axis.jpg',
  ];

  const partnersLine4 = [
    '../src/assets/partners/bajaj.jpg',
    '../src/assets/partners/bankofbaroda.jpg',
    '../src/assets/partners/bharat.jpg',
    '../src/assets/partners/canara.jpg',
    '../src/assets/partners/centralbank.jpg',
    '../src/assets/partners/cosmos.jpg',
    '../src/assets/partners/dhanalakshmi.jpg',
    '../src/assets/partners/dosti.jpg',
    '../src/assets/partners/godrej.jpg',
    '../src/assets/partners/greater.jpg',
  ];

  const partnersLine5 = [
    '../src/assets/partners/hiranandani.jpg',
    '../src/assets/partners/indiabulls.jpg',
    '../src/assets/partners/indian.jpg',
    '../src/assets/partners/indian_overseas.jpg',
    '../src/assets/partners/indusind.jpg',
    '../src/assets/partners/kotak.jpg',
    '../src/assets/partners/lakshmi.jpg',
    '../src/assets/partners/lodha.jpg',
    '../src/assets/partners/marathon.jpg',
    '../src/assets/partners/muthut.jpg',
  ];

  const partnersLine6 = [
    '../src/assets/partners/oberoy.jpg',
    '../src/assets/partners/punjab-sind.jpg',
    '../src/assets/partners/punjab.jpg',
    '../src/assets/partners/raheja.jpg',
    '../src/assets/partners/rustomjee.jpg',
    '../src/assets/partners/saraswat.jpg',
    '../src/assets/partners/stdcharted.jpg',
    '../src/assets/partners/sundharam.jpg',
    '../src/assets/partners/tata-capital.jpg',
    '../src/assets/partners/tricity.jpg',
    '../src/assets/partners/uco.jpg',
    '../src/assets/partners/union.jpg',
  ];

  return (
    <div className="bg-white py-8">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Our Partners</h2>

      {/* First Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Duplicate the array for seamless scrolling */}
          {partnersLine1.concat(partnersLine2).concat(partnersLine1).concat(partnersLine2).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="inline-block mx-4 h-16"
            />
          ))}
        </div>
      </div>

      {/* Second Marquee */}
      <div className="relative overflow-hidden mt-6">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {/* Duplicate the array for seamless scrolling */}
          {partnersLine3.concat(partnersLine4).concat(partnersLine5).concat(partnersLine6).concat(partnersLine3).concat(partnersLine4).concat(partnersLine5).concat(partnersLine6).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 11}`}
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
