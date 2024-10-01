import React, { useRef, useEffect } from 'react';
import ourStrengthVideo from '../assets/ourStrength.mp4';

function OurStrength() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    });

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <React.Fragment>
      <div className='w-full h-[94vh] relative overflow-hidden'> 
        <video  
          ref={videoRef}
          src={ourStrengthVideo}
          muted 
          className='absolute inset-0 w-full h-full object-cover' 
          playsInline
        />
      </div>
    </React.Fragment>
  );
}

export default OurStrength;
