import React from "react";
import styled, { keyframes, css } from "styled-components";
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
    BOI, BOM, DCB, HDFC_Ltd, HDFC, HSBC, RBL, BOI, BOM,
  ];

  const partnersLine2 = [
    ICICI_Finance, ICICI, IDBI, IDFC1st, LT_Fin_1, LIC_HFL, PNB, ICICI_Finance, ICICI,
  ];

  return (
    <div className="py-8 overflow-hidden flex flex-col justify-center items-center bg-orange-100">
      <h2 className="text-4xl md:text-4xl lg:text-5xl heading-font text-center px-10 text-black rounded-full tracking-wider font-thin mb-10 transform transition-transform duration-300 hover:scale-105 text-shadow">
        <span className='heading-font'>Our</span> <span className='tracking-wider text-[rgb(255,102,0)] heading-font'>Partners</span>
      </h2>
      <Marquee>
        <MarqueeGroup>
          {partnersLine1.map((el, index) => (
            <ImageGroup key={index}>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup>
        <MarqueeGroup>
          {partnersLine1.map((el, index) => (
            <ImageGroup key={index}>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup>
      </Marquee>
      <Gap />
      <Marquee>
        <MarqueeGroup2>
          {partnersLine2.map((el, index) => (
            <ImageGroup key={index}>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup2>
        <MarqueeGroup2>
          {partnersLine2.map((el, index) => (
            <ImageGroup key={index}>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup2>
      </Marquee>
    </div>
  );
};

export default PartnerSection;

// Styled components below...

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 15s linear infinite;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%; /* Full width */
  max-width: 1200px; /* Set a max width */
  user-select: none;
  height: auto; /* Allow height to adjust automatically */
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 100px; /* Increased width for larger screens */
  height: auto; /* Allow height to adjust based on image */
  padding: 0; /* Remove padding */
  margin-right: 50px; /* Set consistent margin for both lines */

  @media (max-width: 640px) {
    width: 120px; /* Adjust width for mobile */
    margin-right: 20px; /* Decrease margin on mobile */
  }

  @media (max-width: 480px) {
    width: 100px; /* Further adjust for smaller screens */
    margin-right: 10px; /* Further decrease margin on smaller screens */
  }
`;

const Image = styled.img`
  object-fit: contain; /* Maintain aspect ratio without cropping */
  width: 100%;
  height: auto; /* Allow height to adjust based on image */
  max-height: 120px; /* Increased maximum height */
  border-radius: 0.25rem; /* Slightly reduced border radius */
  background: transparent; 
`;

const Gap = styled.div`
  height: 20px; /* Adjust this value to increase or decrease the gap between the lines */
`;

