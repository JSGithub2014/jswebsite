import React from 'react';
import Raheja from '../assets/clientals/raheja.jpg';
import Rustomjee from '../assets/clientals/rustomjee.jpg';
import Oberoy from '../assets/clientals/oberoy.jpg';
import Hiranandani from '../assets/clientals/hiranandani.jpg';
import Dosti from '../assets/clientals/dosti.jpg';
import Godrej from '../assets/clientals/godrej.jpg';
import Akshar from '../assets/clientals/akshar.jpg';
import Rajesh from '../assets/clientals/Rajesh.jpg';
import Regency from '../assets/clientals/Regency.jpg';
import Arihant from '../assets/clientals/arihant.jpg';
import Marathon from '../assets/clientals/marathon.jpg';
import Lodha from '../assets/clientals/lodha.jpg';
import Bhagwati from '../assets/clientals/bhagwati.png';
import Gami from '../assets/clientals/Gami.png';
import L_T_Reality from '../assets/clientals/L&T-Reality.png';
import Metro from '../assets/clientals/Metro.png';
import Haware from '../assets/clientals/Haware.png';

const ClientalsSection = () => {
  const clientalsLine1 = [
    Raheja,
    Rustomjee,
    Oberoy,
    Hiranandani,
    Dosti,
    Godrej,
    Akshar,
    Rajesh,
    Raheja,
    Rustomjee,
    Oberoy,
    Hiranandani,
    Dosti,
    Godrej,
    Akshar,
    Rajesh,
    Raheja,
    Rustomjee,
    Oberoy,
    Hiranandani,
    Dosti,
    Godrej,
    Akshar,
    Rajesh,
    Raheja,
    Rustomjee,
    Oberoy,
    Hiranandani,
    Dosti,
    Godrej,
    Akshar,
    Rajesh,
    Raheja,
    Rustomjee,
    Oberoy,
    Hiranandani,
    Dosti,
    Godrej,
    Akshar,
    Rajesh,
    Raheja,
    Rustomjee,
    Oberoy,
    Hiranandani,
    Dosti,
    Godrej,
    Akshar,
    Rajesh,
    Raheja,
    Rustomjee,
    Oberoy,
    Hiranandani,
    Dosti,
    Godrej,
    Akshar,
    Rajesh,
    
  ];

  const clientalsLine2 = [
    Regency,
    Marathon,
    Lodha,
    Bhagwati,
    Gami,
    L_T_Reality, 
    Metro, 
    Haware,
    Regency,
    Arihant,
    Regency,
    Marathon,
    Lodha,
    Bhagwati,
    Gami,
    L_T_Reality, 
    Regency,
    Metro, 
    Haware,
    Arihant,
    Regency,
    Marathon,
    Lodha,
    Bhagwati,
    Gami,
    Regency,
    L_T_Reality, 
    Metro, 
    Haware,
    Arihant,
    Regency,
    Marathon,
    Lodha,
    Bhagwati,
    Gami,
    L_T_Reality, 
    Metro, 
    Haware,
    Regency,
    Arihant,
    Regency,
    Marathon,
    Lodha,
    Bhagwati,
    Gami,
    Regency,
    L_T_Reality, 
    Metro, 
    Haware,
    Arihant,
    Regency,
    Marathon,
    Lodha,
    Bhagwati,
    Gami,
    L_T_Reality, 
    Metro, 
    Haware,
    Regency,
    Arihant,
    Marathon,
    Lodha,
    Bhagwati,
    Regency,
    Gami,
    L_T_Reality, 
    Metro, 
    Haware,
    Regency,
    Arihant,
  ];

  return (
    <div className="py-8 flex justify-center items-center flex-col overflow-x-hidden bg-orange-100">
      <h2 className="text-4xl md:text-4xl lg:text-5xl  heading-font text-center px-10 py-3 text-black rounded-full tracking-wider font-thin mb-10 transform transition-transform duration-300 hover:scale-105 text-shadow">
        Our <span className='text-[rgb(255,102,0)] heading-font'>Corporate</span> Clients
      </h2>

      {/* First Marquee */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {clientalsLine1.concat(clientalsLine2).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="inline-block h-20 w-20 mx-3"
              loading="lazy" // Improve SEO by lazy loading the images
            />
          ))}
        </div>
      </div>

      {/* Second Marquee */}
      <div className="relative overflow-hidden mt-6 w-full bg-orange-100">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {clientalsLine2.concat(clientalsLine2).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client logo ${index + 11}`}
              className="inline-block mx-5 w-20 h-20 -translate-x-[7000%]"
              loading="lazy" // Improve SEO by lazy loading the images
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
            animation: marquee-reverse 30s linear infinite;
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
