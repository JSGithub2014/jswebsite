import React, { useRef, useEffect } from 'react';
import ourStrengthVideo from '../assets/ourStrength.mp4';

function OurStrength() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
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
    <div
      className='w-full flex justify-center items-center h-[80vh] overflow-hidden'
      onTouchStart={handleTouchStart}
    >
      <video  
        ref={videoRef}
        src={ourStrengthVideo}
        muted
        className='w-full max-h-full object-cover'
        playsInline
      />
    </div>
  );
}

export default OurStrength;
