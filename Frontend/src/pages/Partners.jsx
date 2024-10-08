import React from 'react';
import BOI from '../assets/partners/BOI.jpg';
import BOM from '../assets/partners/BOM.jpg';
import DCB from '../assets/partners/DCB.jpg';
import HDFC_Ltd from '../assets/partners/HDFC-Ltd.jpg';
import HDFC from '../assets/partners/HDFC.jpg';
import HSBC from '../assets/partners/HSBC.jpg';
import ICICI_Finance from '../assets/partners/ICICI-finance.jpg';
import ICICI from '../assets/partners/ICICI.jpg';
import IDBI from '../assets/partners/IDBI.jpg';
import IDFC1st from '../assets/partners/IDFC1st.jpg';
import LT_Fin_1 from '../assets/partners/L&T-Fin-1.jpg';
import LIC_HFL from '../assets/partners/LIC-HFL.jpg';
import PNB from '../assets/partners/PNB-1.jpg';
import RBL from '../assets/partners/RBL.jpg';

const PartnerSection = () => {
  const partnersLine1 = [
    BOI,
    BOM,
    DCB,
    HDFC_Ltd,
    HDFC,
    HSBC,
    BOI,
    BOM,
    DCB,
    HDFC_Ltd,
    HDFC,
    HSBC,
    BOI,
    BOM,
    DCB,
    HDFC_Ltd,
    HDFC,
    HSBC,
    BOI,
    BOM,
    DCB,
    HDFC_Ltd,
    HDFC,
    HSBC,
    BOI,
    BOM,
    DCB,
    HDFC_Ltd,
    HDFC,
    HSBC,
    BOI,
    BOM,
    DCB,
    HDFC_Ltd,
    HDFC,
    HSBC,
  ];

  const partnersLine2 = [
    ICICI_Finance,
    ICICI,
    IDBI,
    IDFC1st,
    LT_Fin_1,
    LIC_HFL,
    PNB,
    RBL,
    ICICI_Finance,
    ICICI,
    IDBI,
    IDFC1st,
    LT_Fin_1,
    LIC_HFL,
    PNB,
    RBL,
    ICICI_Finance,
    ICICI,
    IDBI,
    IDFC1st,
    LT_Fin_1,
    LIC_HFL,
    PNB,
    RBL,
    ICICI_Finance,
    ICICI,
    IDBI,
    IDFC1st,
    LT_Fin_1,
    LIC_HFL,
    PNB,
    RBL,
    ICICI_Finance,
    ICICI,
    IDBI,
    IDFC1st,
    LT_Fin_1,
    LIC_HFL,
    PNB,
    RBL,
    ICICI_Finance,
    ICICI,
    IDBI,
    IDFC1st,
    LT_Fin_1,
    LIC_HFL,
    PNB,
    RBL,
  ];

  return (
    <div className="py-8 overflow-hidden flex flex-col justify-center items-center bg-orange-100">
      <h2 className="text-4xl md:text-4xl lg:text-5xl heading-font text-center px-10 text-black rounded-full tracking-wider font-thin mb-10 transform transition-transform duration-300 hover:scale-105 text-shadow ">
        <span className='heading-font'>Our</span> <span className='tracking-wider text-[rgb(255,102,0)] heading-font'>Partners</span>
      </h2>

      {/* First Marquee Line */}
      <div className="relative overflow-hidden mb-6 w-full">
        <div className="flex animate-marquee">
          {partnersLine1.concat(partnersLine1).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="inline-block h-20 w-20 mx-5"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Second Marquee Line */}
      <div className="relative overflow-hidden w-full">
        <div className="flex animate-marquee-reverse">
          {partnersLine2.concat(partnersLine2).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="inline-block h-20 w-20 mx-5 -translate-x-[8000%]"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Styles for animation and text shadow */}
      <style>
        {`
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }

          .animate-marquee-reverse {
            animation: marquee-reverse 30s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes marquee-reverse {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(0);
            }
          }

          /* Remove default margins between images */
          img {
            margin: 0; /* Ensure no extra margins are applied */
          }

          /* Custom text shadow */
          .text-shadow {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </div>
  );
};

export default PartnerSection;
