import React from 'react';

const WhoWeAre = () => {
    return (
        <section 
            className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 md:px-16 lg:px-24 xl:px-32" 
            aria-labelledby="who-we-are-heading" 
        >
            <div className="container mx-auto text-center">
                <h1 
                    id="who-we-are-heading"
                    className='text-3xl md:text-4xl lg:text-5xl font-thin text-center tracking-wider mb-4 heading-font text-shadow'
                >
                    <span className='heading-font'>Who</span>
                    <span className='text-[rgb(255,102,0)] heading-font'> We Are</span>
                </h1>

                <p 
                    className="text-base md:text-lg lg:text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10" 
                    aria-describedby="who-we-are-description" 
                >
                    We specialize in expert financial services, insurance solutions, and real estate advisory, 
                    empowering individuals, families, and businesses to achieve their goals. Our tailored solutions address unique 
                    needs, ensuring optimized financial health and comprehensive protection.
                </p>

                {/* Services section */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    <article 
                        className="bg-white shadow-lg p-6 lg:p-8 rounded-lg transition-transform transform hover:scale-105" 
                        aria-labelledby="financial-solutions-heading"
                    >
                        <h2 
                            id="financial-solutions-heading" 
                            className="text-lg md:text-xl lg:text-2xl text-[rgb(58,59,59)] mb-4 heading-font tracking-wider"
                        >
                            Comprehensive Financial Solutions
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base lg:text-sm">
                            From investment management and business funding to customized insurance plans, we guide 
                            you every step of the way with our expert solutions.
                        </p>
                    </article>

                    <article 
                        className="bg-white shadow-lg p-6 lg:p-8 rounded-lg transition-transform transform hover:scale-105" 
                        aria-labelledby="real-estate-advisory-heading"
                    >
                        <h2 
                            id="real-estate-advisory-heading" 
                            className="text-lg md:text-xl lg:text-2xl text-[rgb(58,59,59)] mb-4 heading-font tracking-wider"
                        >
                            Strategic Real Estate Advisory
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base lg:text-sm">
                            As trusted real estate advisors, we help you navigate market complexities, providing the 
                            strategic insights you need to make informed decisions.
                        </p>
                    </article>
                </div>

                {/* Our Commitment Section */}
                <div className="mt-12">
                    <h1 
                        className='text-2xl md:text-4xl lg:text-5xl font-thin text-center tracking-wider mb-4 heading-font text-shadow'
                    >
                        <span className='heading-font'>Our</span>
                        <span className='text-[rgb(255,102,0)] heading-font'> Commitment</span>
                    </h1>
                    <p 
                        className="text-base md:text-lg lg:text-sm text-gray-700 max-w-2xl mx-auto leading-relaxed" 
                        aria-describedby="commitment-description" // Added aria-describedby for context
                    >
                        With a commitment to trust, integrity, and exceptional service, 
                        we strive to exceed your expectations, helping you secure your future and grow your investments.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
