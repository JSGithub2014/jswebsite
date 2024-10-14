import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import heroImage from '../assets/hero.png';
import callBtn from '../assets/call-us-img.png';

function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.hero-section-left', { opacity: 1, y: 0, duration: 1 })
      .to('.hero-section-right img', { opacity: 1, scale: 1, duration: 1 }, "-=0.5")
      .to('.services-name', { opacity: 1, x: 0, duration: 1, stagger: 0.5, ease: 'power2.out' }, "<");
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+912245120755';
  };

  return (
    <main className='w-full h-auto md:h-screen sm:pt-10 flex items-center justify-center md:px-10 pt-0 md:pt-0 mt-12 md:mt-10 z-0' role="banner">
      <div className='hero-wrapper flex flex-col md:flex-row items-center text-center md:text-left px-4 md:px-16 w-full lg:gap-36 md:gap-20'>
        <aside className='hero-section-left mb-8 md:mb-0 opacity-0'>
          <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold mb-4 landing-font text-white'>
            Securing Your <br /> Success <span className='text-5xl lg:text-7xl font-serif'>!</span> <br />
            <div className='landing-text-animation text-lg md:text-2xl lg:text-4xl inline overflow-hidden'> 
              <span className='services-name font-thin landing-font text-black whitespace-nowrap' style={{ opacity: 0 }}>
                Expert Guidance in Finance
              </span>
            </div>
            <div className='landing-text-animation text-lg md:text-2xl lg:text-4xl overflow-hidden'> 
              <span className='services-name font-thin landing-font text-black' style={{ opacity: 0 }}>
                Insurance, and Real Estate
              </span>
            </div>
            <br />
          </h1>
          <div className="flex justify-center md:justify-start mt-2 sm:mt-0">
            <button 
              className='flex items-center focus:scale-110 px-2 py-1 rounded-md hover:bg-[rgb(255,102,0)] transition duration-300'
              onClick={handleCall}
              aria-label="Call Us"
            >
              <img 
                src={callBtn} 
                className='w-28 md:w-44 lg:w-56'
                alt="Call Us" 
                loading="lazy" 
              />
            </button>
          </div>
        </aside>
        <aside className='hero-section-right flex justify-center md:justify-end w-full md:w-[50vw]'>
          <img 
            className='w-full h-auto max-h-56 md:max-h-full object-contain opacity-0 mb-0 sm:mb-0' 
            src={heroImage} 
            alt="Illustration representing Finance, Insurance, and Real Estate" 
            loading="lazy"
          />
        </aside>
      </div>
    </main>
  );
}

export default Hero;
