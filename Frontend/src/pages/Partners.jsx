import React from 'react';
import BOI from '../assets/partners/BOI.jpg';
import BOM from '../assets/partners/BOM.jpg';
import DBS from '../assets/partners/DBS.jpg';
import DCB from '../assets/partners/DCB.jpg';
import DNS from '../assets/partners/DNS.jpg';
import GP_Parsik from '../assets/partners/GP-parsik.jpg';
import GS_Maha from '../assets/partners/GS-maha.jpg';
import HDFC_Ltd from '../assets/partners/HDFC-Ltd.jpg';
import HDFC from '../assets/partners/HDFC.jpg';
import HSBC from '../assets/partners/HSBC.jpg';
import ICICI_Finance from '../assets/partners/ICICI-finance.jpg';
import ICICI from '../assets/partners/ICICI.jpg';
import IDBI from '../assets/partners/IDBI.jpg';
import IDFC1st from '../assets/partners/IDFC1st.jpg';
import KNS from '../assets/partners/KNS.jpg';
import LT_Fin_1 from '../assets/partners/L&T-Fin-1.jpg';
import LIC_HFL from '../assets/partners/LIC-HFL.jpg';
import PNB from '../assets/partners/PNB-1.jpg';
import RBL from '../assets/partners/RBL.jpg';

const PartnerSection = () => {
  const partnersLine1 = [
    BOI,
    BOM,
    DBS,
    DCB,
    DNS,
    GP_Parsik,
    GS_Maha,
    HDFC_Ltd,
    HDFC,
    HSBC,
  ];

  const partnersLine2 = [
    ICICI_Finance,
    ICICI,
    IDBI,
    IDFC1st,
    KNS,
    LT_Fin_1,
    LIC_HFL,
    PNB,
    RBL,
    ICICI_Finance,
    ICICI,
    IDBI,
    
  ];

  const duplicateLogos = (logos) => {
    return [...logos, ...logos, ...logos];
  };

  return (
    <div className="bg-white py-8 overflow-hidden flex flex-col justify-center items-center">

<style>
                {`
                  @font-face {
                    font-family: 'Gendy';
                    src: url('/assets/TTF/Gendy.ttf') format('truetype');
                  }
                  .heading-font {
                    font-family: 'Gendy', sans-serif;
                  }
                `}
            </style>

      <h2 className="text-4xl heading-font text-center px-10 py-3 text-gray-700 w-full tracking-wider bg-gradient-to-r from-orange-400 to-yellow-400 shadow-lg mb-6 transform transition-transform duration-300 hover:scale-105">
        <span>Our</span>  <span className='font-thin tracking-wider'>Partners</span>
      </h2>

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

     
      <div className="relative overflow-hidden w-full">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {duplicateLogos(partnersLine2).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + partnersLine1.length + 1}`}
              className="inline-block mx-4 h-16 " 
            />
          ))}
        </div>
      </div>
      <style>
        {`
          .animate-marquee {
            animation: marquee 50s linear infinite;
          }

          .animate-marquee-reverse {
            animation: marquee-reverse 50s linear infinite;
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
        `}
      </style>
    </div>
  );
};
export default PartnerSection;
