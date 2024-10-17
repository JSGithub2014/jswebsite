import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import ShowCase from '../../assets/ourStory/our-story-showcase.png';

function StoryShowCase() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it becomes visible
        }
      },
      {
        threshold: 0.1 // Trigger when 10% of the image is in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center mt-5">
      <motion.img
        ref={ref}
        src={ShowCase}
        className="object-cover"
        alt="Our Story Showcase"
        initial={{ opacity: 0, scale: 0.9 }} // Start slightly transparent and scaled down
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} // Animate based on visibility
        transition={{ duration: 1, ease: "easeInOut" }} // Animation settings
      />
    </div>
  );
}

export default StoryShowCase;
