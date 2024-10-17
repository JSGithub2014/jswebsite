import React, { useEffect, useRef, useState } from 'react';
import ServicesCard from '../components/ServicesCard';
import financeLogo from '../assets/Services-finance.png';
import insuranceLogo from '../assets/Services-insurance.png';
import realEstateLogo from '../assets/Services-real-estate.png';
import { motion } from 'framer-motion';

const services = [
    {
        logo: financeLogo,
        title: 'FINANCE',
        description: 'We specialize in providing expert lending consultancy services tailored to meet the unique needs of small and mid-sized businesses.',
        additionalInfo: 'Our team offers personalized strategies and solutions, ensuring you understand every step of the financing process, from application to funding.',
        generalInfo: 'We believe in transparency and working closely with our clients to achieve their financial goals.'
    },
    {
        logo: insuranceLogo,
        title: 'INSURANCE',
        description: 'We are dedicated to providing exceptional insurance consultancy services tailored to meet the unique needs of individuals and businesses.',
        additionalInfo: 'Our approach focuses on assessing risks and finding the best policies to ensure comprehensive coverage for all our clients.',
        generalInfo: 'We provide regular reviews of policies to ensure you always have the best coverage possible.'
    },
    {
        logo: realEstateLogo,
        title: 'REAL ESTATE',
        description: 'We are committed to providing expert real estate consultancy services that empower clients to make informed decisions.',
        additionalInfo: 'We assist with property evaluation, market analysis, and negotiations to ensure you get the best value in any transaction.',
        generalInfo: 'Our goal is to make the buying and selling process as smooth as possible for our clients.'
    },
];

function Services() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after it becomes visible
                }
            },
            {
                threshold: 0.1 // Trigger when 10% of the component is in view
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
        <section 
            ref={ref}
            className='relative w-full h-auto bg-transparent overflow-hidden flex flex-col justify-center items-center gap-6 py-10 lg:py-10'
        >
            <motion.h1 
                className='text-3xl md:text-4xl lg:text-5xl font-thin text-center tracking-wider text-shadow'
                initial={{ opacity: 0, y: -20 }} // Initial state
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} // Animate into view
                transition={{ duration: 0.5 }} // Animation duration
            >
                <span className='heading-font tracking-wider'>What </span>
                <span className='heading-font tracking-wider'>We </span>
                <span className='heading-font text-[rgb(255,102,0)]'>Offer</span>
            </motion.h1>

            <motion.p 
                className='text-sm md:text-base lg:text-sm text-center max-w-2xl px-4'
                initial={{ opacity: 0, y: 20 }} // Initial state
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate into view
                transition={{ duration: 0.5 }} // Animation duration
            >
                We offer a comprehensive range of advisory services designed to meet the diverse needs of our clients in finance, insurance, and real estate.
            </motion.p>

            <div className="flex justify-center flex-wrap max-w-7xl px-4 lg:px-0">
                {services.map((service, index) => (
                    <motion.div 
                        key={index} 
                        className="w-full sm:w-1/2 lg:w-1/3 p-4"
                        initial={{ opacity: 0, scale: 0.8 }} // Initial state
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} // Animate into view
                        transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for each card based on index
                    >
                        <ServicesCard
                            logo={service.logo}
                            title={service.title}
                            description={service.description}
                            additionalInfo={service.additionalInfo}
                            generalInfo={service.generalInfo}
                        />
                    </motion.div>
                ))}
            </div>
            <div className='absolute right-[-30%] top-[-45%] z-[-1] w-[50vw] h-[50vw] rounded-full bg-[#F6EDE1]'></div>
        </section>
    );
}

export default Services;
