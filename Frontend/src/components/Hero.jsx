import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import heroImage from '../assets/hero.png'; // Ensure this path is correct
import callBtn from '../assets/call-us-img.png'; // Ensure this path is correct

function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.hero-section-left', { opacity: 1, y: 0, duration: 1 })
      .to('.hero-section-right', { opacity: 1, duration: 1 }, "-=0.5")
      .to('.services-name', { opacity: 1, x: 0, duration: 1, stagger: 0.5, ease: 'power2.out' }, "<");
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+912245120755';
  };

  return (
    <main className='w-full h-auto md:h-screen flex items-center justify-center px-4 md:px-10 lg:px-24 pt-0 lg:mt-5 mt-14 z-0' role="banner">
      <div className='hero-wrapper flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-10'>
        <aside className='hero-section-left mb-8 md:mb-0 opacity-0 md:w-1/2'>
          <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold mb-4 landing-font text-white whitespace-nowrap'>
            Securing Your <br /> Success <span className='text-5xl lg:text-6xl font-serif'>!</span> <br />
            <div className='landing-text-animation text-lg md:text-xl lg:text-2xl inline overflow-hidden'> 
              <span className='services-name font-thin landing-font text-black whitespace-nowrap' style={{ opacity: 0 }}>
                Expert Guidance in Finance
              </span>
            </div>
            <div className='landing-text-animation text-lg md:text-xl lg:text-2xl overflow-hidden'> 
              <span className='services-name font-thin landing-font text-black' style={{ opacity: 0 }}>
                Insurance, and Real Estate
              </span>
            </div>
            <br />
          </h1>
          <div className="flex justify-center md:justify-start mt-4">
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
        <aside className='hero-section-right flex justify-center md:justify-end opacity-0 md:w-1/2'>
          <img 
            className='w-full h-auto max-h-52 md:max-h-[35vw] object-contain' 
            src={heroImage} 
            alt="Illustration representing Finance, Insurance, and Real Estate" 
            loading="lazy"
            style={{ opacity: 1 }} 
          />
        </aside>
      </div>
    </main>
  );
}

export default Hero;
