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
    <div className="flex justify-center py-8" role="img" aria-labelledby="showcase-heading">
      <h2 id="showcase-heading" className="sr-only">Our Story Showcase</h2>
      <motion.img
        ref={ref}
        src={ShowCase}
        className="object-cover"
        alt="A visual representation of our story and achievements at J&S Group" // More descriptive alt text
        initial={{ opacity: 0, scale: 0.9 }} // Start slightly transparent and scaled down
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} // Animate based on visibility
        transition={{ duration: 1, ease: "easeInOut" }} // Animation settings
        onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/placeholder/image.png'; }} // Fallback image on error
      />
    </div>
  );
}

export default StoryShowCase;
