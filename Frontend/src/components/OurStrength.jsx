import React, { useRef, useEffect } from 'react';
import ourStrengthImage from '../assets/ourStrength.png';

function OurStrength() {
  

  return (
    <div
      className='w-full flex justify-center items-center overflow-hidden'>

        <img src={ourStrengthImage} alt="ourStrengthImage" className='object-cover' />
     
    </div>
  );
}

export default OurStrength;
