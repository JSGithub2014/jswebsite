import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaPhone } from 'react-icons/fa'; // Import the phone icon
import heroImage from '../assets/hero.png'; // Adjust the path as necessary

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
            <main className='w-full h-screen flex items-center justify-center'>
                <div className='hero-wrapper flex flex-col md:flex-row items-center text-center md:text-left px-8 md:px-16'>
                    <aside className='hero-section-left mb-8 md:mb-0 opacity-0'>
                        <h1 className='text-4xl md:text-7xl font-semibold mb-4'>
                            Your Trusted Partner <br /> in 
                            <div className='landing-text-animation inline overflow-hidden'> 
                                <span className='services-name' style={{ opacity: 0, transform: 'translateX(300px)' }}> Finance,</span>
                            </div>
                            <div className='landing-text-animation inline overflow-hidden'> 
                                <span className='services-name' style={{ opacity: 0, transform: 'translateX(300px)' }}> Insurance,</span>
                            </div>
                            <br /> and 
                            <div className='landing-text-animation inline overflow-hidden'> 
                                <span className='services-name' style={{ opacity: 0, transform: 'translateX(300px)' }}> Real Estate.</span>
                            </div>
                        </h1>
                        <p className='text-lg md:text-xl mb-6'>
                            We provide expert guidance and tailored solutions to help you navigate the complex world of finance and real estate.
                        </p>
                        <button 
                            className='flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-[#e66b00] transition duration-300'
                            onClick={handleCall}
                        >
                            <FaPhone className='mr-2' /> Call Now
                        </button>
                    </aside>
                    <aside className='hero-section-right flex justify-center md:justify-end'>
                        <img className='w-full md:w-[45vw] pt-5 md:pt-0 opacity-0' src={heroImage} alt="Finance, Insurance, and Real Estate" />
                    </aside>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Hero;
