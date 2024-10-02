import React, { useRef, useEffect } from 'react';
import ourStrengthVideo from '../assets/ourStrength.mp4';

function OurStrength() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Play the video only if it has been started by touch event
          if (video.paused) {
            video.play();
          }
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2
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

  const handleTouchStart = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play();
    }
  };

  return (
    <React.Fragment>
      <div
        className='w-full h-[94vh] relative overflow-hidden'
        onTouchStart={handleTouchStart} // Start video on touch
      >
        <video  
          ref={videoRef}
          src={ourStrengthVideo}
          muted 
          className='absolute inset-0 w-full h-full object-cover pb-5' // Removed padding for full coverage
          playsInline
        />
      </div>
    </React.Fragment>
  );
}

export default OurStrength;
