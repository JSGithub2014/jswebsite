import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO

const WhoWeAre = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false); // Reset visibility when out of view
                }
            },
            {
                threshold: 0.3 
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
            className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 md:px-16 lg:px-24 xl:px-32" 
            aria-labelledby="who-we-are-heading"
        >
            <Helmet>
                <title>J&S Group | Real Estate Finance and Insurance Experts</title>
                <meta name="description" content="Learn about our expert financial services, insurance solutions, and real estate advisory to achieve your goals." />
            </Helmet>

            <div className="container mx-auto text-center">
                <motion.h1 
                    id="who-we-are-heading"
                    className='text-3xl md:text-4xl lg:text-5xl font-thin text-center tracking-wider mb-4 heading-font text-shadow'
                    initial={{ opacity: 0, y: -20 }} // Initial state
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} // Animate into view
                    transition={{ duration: 0.5 }} // Animation duration
                >
                    <span className='heading-font'>Who</span>
                    <span className='text-[rgb(255,102,0)] heading-font'> We Are</span>
                </motion.h1>

                <motion.p 
                    className="text-base md:text-lg lg:text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10" 
                    aria-describedby="who-we-are-description"
                    initial={{ opacity: 0, y: 20 }} // Initial state
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate into view
                    transition={{ duration: 0.3 }} // Animation duration
                >
                    We specialize in expert financial services, insurance solutions, and real estate advisory, 
                    empowering individuals, families, and businesses to achieve their goals. Our tailored solutions address unique 
                    needs, ensuring optimized financial health and comprehensive protection.
                </motion.p>

                {/* Services section */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {[ 
                        { 
                            id: "financial-solutions-heading", 
                            title: "Comprehensive Financial Solutions", 
                            description: "From investment management and business funding to customized insurance plans, we guide you every step of the way with our expert solutions." 
                        }, 
                        { 
                            id: "real-estate-advisory-heading", 
                            title: "Strategic Real Estate Advisory", 
                            description: "As trusted real estate advisors, we help you navigate market complexities, providing the strategic insights you need to make informed decisions." 
                        } 
                    ].map(({ id, title, description }) => (
                        <motion.article 
                            key={id}
                            className="bg-white shadow-lg p-6 lg:p-8 rounded-lg transition-transform transform hover:scale-105" 
                            aria-labelledby={id}
                            initial={{ opacity: 0, scale: 0.8 }} // Initial state
                            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} // Animate into view
                            transition={{ duration: 0.5 }} // Animation duration
                        >
                            <h2 
                                id={id} 
                                className="text-lg md:text-xl lg:text-2xl text-[rgb(58,59,59)] mb-4 heading-font tracking-wider"
                            >
                                {title}
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base lg:text-sm">
                                {description}
                            </p>
                        </motion.article>
                    ))}
                </div>

                {/* Our Commitment Section */}
                <div className="mt-12">
                    <motion.h1 
                        className='text-2xl md:text-4xl lg:text-5xl font-thin text-center tracking-wider mb-4 heading-font text-shadow'
                        initial={{ opacity: 0, y: -20 }} // Initial state
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} // Animate into view
                        transition={{ duration: 0.5 }} // Animation duration
                    >
                        <span className='heading-font'>Our</span>
                        <span className='text-[rgb(255,102,0)] heading-font'> Commitment</span>
                    </motion.h1>
                    <motion.p 
                        className="text-base md:text-lg lg:text-sm text-gray-700 max-w-2xl mx-auto leading-relaxed" 
                        aria-describedby="commitment-description"
                        initial={{ opacity: 0, y: 20 }} // Initial state
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate into view
                        transition={{ duration: 0.5 }} // Animation duration
                    >
                        With a commitment to trust, integrity, and exceptional service, 
                        we strive to exceed your expectations, helping you secure your future and grow your investments.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
