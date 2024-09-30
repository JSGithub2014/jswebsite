import React from 'react';

const WhoWeAre = () => {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 md:px-16">
            <div className="container mx-auto text-center">
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-thin text-center tracking-wider mb-4 heading-font'>
                    <span >Who</span>
                    <span className=' text-[rgb(255,102,0)]'> We Are</span>
                </h1>

                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
                    We specialize in expert financial services, insurance solutions, and real estate advisory, 
                    empowering individuals, families, and businesses to achieve their goals. Our tailored solutions address unique 
                    needs, ensuring optimized financial health and comprehensive protection.
                </p>

                {/* Services section */}
                <div className="grid md:grid-cols-2 gap-8">
                    <article className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
                        <h2 className="text-xl text-[rgb(58,59,59)] mb-4 heading-font tracking-wider">
                            Comprehensive Financial Solutions
                        </h2>
                        <p className="text-gray-600">
                            From investment management and business funding to customized insurance plans, we guide 
                            you every step of the way with our expert solutions.
                        </p>
                    </article>

                    <article className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
                        <h2 className="text-xl  text-[rgb(58,59,59)] mb-4 heading-font tracking-wider">
                            Strategic Real Estate Advisory
                        </h2>
                        <p className="text-gray-600">
                            As trusted real estate advisors, we help you navigate market complexities, providing the 
                            strategic insights you need to make informed decisions.
                        </p>
                    </article>
                </div>

                {/* Our Commitment Section */}
                <div className="mt-12">
                    <h1 className='text-2xl md:text-5xl lg:text-6xl font-thin text-center tracking-wider mb-4 heading-font'>
                        <span >Our</span>
                        <span className=' text-[rgb(255,102,0)]'> Commitment</span>
                    </h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        With a commitment to trust, integrity, and exceptional service, 
                        we strive to exceed your expectations, helping you secure your future and grow your investments.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
