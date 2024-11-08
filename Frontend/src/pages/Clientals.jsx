import React from "react";
import styled, { keyframes, css } from "styled-components";
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
    Raheja, Rustomjee, Oberoy, Hiranandani, Dosti,
    Godrej, Akshar, Rajesh,
  ];

  const clientalsLine2 = [
    Regency, Marathon, Lodha, Bhagwati, Gami, Arihant,
    L_T_Reality, Metro, Haware,
  ];

  return (
    <div className="overflow-hidden flex flex-col justify-center items-center bg-orange-100 pb-10">
      <h2 className="text-4xl md:text-4xl lg:text-5xl heading-font text-center px-10 text-black rounded-full tracking-wider font-thin mb-16 transform transition-transform duration-300 hover:scale-105 text-shadow">
        Our <span className='text-[rgb(255,102,0)] heading-font'>Corporate</span> Clients
      </h2>
      <Marquee>
        <MarqueeGroup>
          {clientalsLine1.map((el, index) => (
            <ImageGroup key={index}>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup>
        <MarqueeGroup>
          {clientalsLine1.map((el, index) => (
            <ImageGroup key={index}>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup>
      </Marquee>
      <Gap />
      <Marquee>
        <MarqueeGroup2>
          {clientalsLine2.map((el, index) => (
            <ImageGroup key={index}>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup2>
        <MarqueeGroup2>
          {clientalsLine2.map((el, index) => (
            <ImageGroup key={index}>
              <Image src={el} />
            </ImageGroup>
          ))}
        </MarqueeGroup2>
      </Marquee>
    </div>
  );
};

export default ClientalsSection;

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

  @media (max-width: 640px) {
    animation-duration: 10s; /* Faster speed for mobile */
  }
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  user-select: none;
  height: auto;
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
  width: 90px; /* Adjust width for larger screens */
  height: auto;
  padding: 0;
  margin: 0 10px; /* Add horizontal margin for spacing */

  @media (max-width: 640px) {
    width: 120px; /* Keep width the same for mobile */
    margin: 0 8px; /* Adjust margin for mobile */
  }

  @media (max-width: 480px) {
    width: 100px; /* Adjust for smaller screens */
    margin: 0 5px; /* Further decrease margin */
  }
`;

const Image = styled.img`
  object-fit: contain; /* Maintain aspect ratio without cropping */
  width: 100%;
  height: auto; /* Allow height to adjust based on image */
  max-height: 120px; /* Increase maximum height for better visibility */
  border-radius: 0.25rem; /* Slightly reduced border radius */
  background: transparent; 
`;

const Gap = styled.div`
  height: 20px; /* Adjust this value to increase or decrease the gap between the lines */
`;
