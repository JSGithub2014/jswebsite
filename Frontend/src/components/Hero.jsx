import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import heroImage from '../assets/hero.png'; // Adjust the path as necessary
import callBtn from '../assets/call-us-img.png'; // Adjust the path as necessary

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
        <React.Fragment>
            <main className='w-full h-auto md:h-screen sm:pt-10 flex items-center justify-center px-4 md:px-10 pt-16 md:pt-0'>
                <div className='hero-wrapper flex flex-col md:flex-row items-center text-center md:text-left px-4 md:px-16'>
                    <aside className='hero-section-left mb-8 md:mb-0 opacity-0'>
                        <h1 className='text-2xl md:text-6xl font-semibold mb-4'>
                            Securing Your Success <br />
                            <div className='landing-text-animation text-lg md:text-4xl inline overflow-hidden'> 
                                <span className='services-name' style={{ opacity: 0, transform: 'translateX(300px)' }}> Expert Guidance in Finance <br /> </span>
                            </div>
                            <div className='landing-text-animation text-lg md:text-4xl inline overflow-hidden'> 
                                <span className='services-name' style={{ opacity: 0, transform: 'translateX(300px)' }}> Insurance, and Real Estate</span>
                            </div>
                            <br />
                        </h1>
                        <p className='text-xs md:text-lg mb-4'>
                            We provide expert guidance and tailored solutions to help you navigate the complex world of finance and real estate.
                        </p>
                        <div className="flex justify-center md:justify-start md:-ml-10">
                            <button 
                                className='flex items-center text-[rgb(255,102,0)] focus:scale-110 px-2 py-1 rounded-md hover:bg-[rgb(255,102,0)] transition duration-300'
                                onClick={handleCall}
                            >
                               <img src={callBtn} className='w-32 md:w-56' alt="Call Us" />
                            </button>
                        </div>
                    </aside>
                    <aside className='hero-section-right flex justify-center md:justify-end w-full md:w-[50vw]'>
                        <img className='w-full max-h-60 md:max-h-none pt-5 md:pt-0 opacity-0' src={heroImage} alt="Finance, Insurance, and Real Estate" />
                    </aside>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Hero;
