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
    window.location.href = 'tel:+912245120755'; // Replace with the actual phone number
  };

  return (
    <main className='w-full h-auto md:h-screen sm:pt-10 flex items-center justify-center px-4 md:px-10 pt-16 md:pt-0' role="banner">
      <div className='hero-wrapper flex flex-col md:flex-row items-center text-center md:text-left px-4 md:px-16 w-full'>
        <aside className='hero-section-left mb-8 md:mb-0 opacity-0'>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 landing-font text-white'>
            Securing Your <br /> Success <span className='text-5xl lg:text-7xl font-serif'>!</span> <br />
            <div className='landing-text-animation text-lg md:text-2xl lg:text-4xl inline overflow-hidden'> 
              <span className='services-name font-thin text-black' style={{ opacity: 0, transform: 'translateX(300px)' }}> Expert Guidance in Finance <br /> </span>
            </div>
            <div className='landing-text-animation text-lg md:text-2xl lg:text-4xl inline overflow-hidden'> 
              <span className='services-name font-thin text-black' style={{ opacity: 0, transform: 'translateX(300px)' }}> Insurance, and Real Estate</span>
            </div>
            <br />
          </h1>
          <p className='text-xs md:text-base lg:text-lg mb-4'>
            We provide expert guidance and tailored solutions to help you navigate the complex world of finance and real estate.
          </p>
          <div className="flex justify-center md:justify-start">
            <button 
              className='flex items-center text-[rgb(255,102,0)] focus:scale-110 px-2 py-1 rounded-md hover:bg-[rgb(255,102,0)] transition duration-300'
              onClick={handleCall}
              aria-label="Call Us"
            >
              <img 
                src={callBtn} 
                className='w-24 md:w-32 lg:w-56' // Use responsive width for button image
                alt="Call Us" 
                loading="lazy" // Optional: Lazy load images for performance
              />
            </button>
          </div>
        </aside>
        <aside className='hero-section-right flex justify-center md:justify-end w-full md:w-[50vw]'>
          <img 
            className='w-full max-h-48 md:max-h-60 lg:max-h-none pt-5 md:pt-0 opacity-0' 
            src={heroImage} 
            alt="Illustration representing Finance, Insurance, and Real Estate" 
            loading="lazy" // Optional: Lazy load images for performance
          />
        </aside>
      </div>
    </main>
  );
}

export default Hero;
