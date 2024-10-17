import React from 'react';
import { motion, useInView } from 'framer-motion';
import ourStrengthImage from '../assets/ourStrength.png';

function OurStrength() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once

  return (
    <div className='w-full flex justify-center items-center overflow-hidden'>
      <motion.img
        ref={ref}
        src={ourStrengthImage}
        alt="Our Strengths"
        className='object-cover'
        initial={{ opacity: 0, scale: 0.8 }} // Initial state
        animate={isInView ? { opacity: 1, scale: 1 } : {}} // Animate on view
        transition={{ duration: 0.5 }} // Duration of the animation
      />
    </div>
  );
}

export default OurStrength;
