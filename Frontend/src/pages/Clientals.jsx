import React from 'react';
import Tricity from '../assets/clientals/tricity.jpg';
import Raheja from '../assets/clientals/raheja.jpg';
import Rustomjee from '../assets/clientals/rustomjee.jpg';
import Oberoy from '../assets/clientals/oberoy.jpg';
import Hiranandani from '../assets/clientals/hiranandani.jpg';
import Dosti from '../assets/clientals/dosti.jpg';
import Godrej from '../assets/clientals/godrej.jpg';
import Akshar from '../assets/clientals/akshar.jpg';
import TheWadhvaGroup from '../assets/clientals/The-Wadhva-Group.jpg';
import Rajesh from '../assets/clientals/Rajesh.jpg';
import Regency from '../assets/clientals/Regency.jpg';
import Arihant from '../assets/clientals/arihant.jpg';
import Marathon from '../assets/clientals/marathon.jpg';
import Lodha from '../assets/clientals/lodha.jpg';

const ClientalsSection = () => {
  const clientalsLine1 = [
    Tricity,
    Raheja,
    Rustomjee,
    Oberoy,
    Hiranandani,
    Dosti,
    Godrej,
    Akshar,
    TheWadhvaGroup,
    Rajesh,
    Tricity,
    Raheja,
    Rustomjee,
    Oberoy,
    Hiranandani,
    Dosti,
    Godrej,
    Akshar,
    TheWadhvaGroup,
    Rajesh,
  ];

  const clientalsLine2 = [
    Regency,
    Arihant,
    Marathon,
    Lodha,
    Raheja,
    Rustomjee,
    Oberoy,
    Hiranandani,
    Dosti,
    Godrej,
    Akshar,
    TheWadhvaGroup,
    Rajesh,
    Regency,
    Arihant,
    Marathon,
    Lodha,
    Raheja,
    Rustomjee,
    Oberoy,
    Hiranandani,
    Dosti,
    Godrej,
    Akshar,
    TheWadhvaGroup,
    Rajesh,
  ];

  return (
    <div className="bg-white py-8 flex justify-center items-center flex-col overflow-x-hidden">
      <h2 className="text-4xl font-bold text-center px-10 py-2 text-gray-700  w-full bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg mb-6 transform transition-transform duration-300 hover:scale-105">Clientele</h2>

      {/* First Marquee */}
      <div className="relative ">
        <div className="flex animate-marquee whitespace-nowrap">
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
      <div className="relative overflow-hidden mt-6 w-full">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {clientalsLine2.concat(clientalsLine2).map((logo, index) => (
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
      <style>
        {`
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }

          .animate-marquee-reverse {
            animation: marquee-reverse 40s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(10%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes marquee-reverse {
            0% {
              transform: translateX(-10%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ClientalsSection;
