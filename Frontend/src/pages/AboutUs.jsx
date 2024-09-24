import React from 'react';

function AboutUs() {
  return (
    <React.Fragment>
      <main className="aboutus-page w-full bg-black relative">
        <div className="aboutus-container flex flex-col md:flex-row">
          {/* Main heading for all devices */}
          <h1 className="text-4xl md:text-6xl font-semibold text-center text-black mt-10 mb-4 md:mb-6 md:text-left md:top-[20%] md:left-[25%] absolute left-1/2 transform -translate-x-1/2 z-10">
            W<span className="font-thin">ho</span> <span className="text-orange-500">We</span> A<span className="font-thin">re</span>
          </h1>

          {/* Mobile layout */}
          <div className="block md:hidden w-11/12 bg-white rounded-lg py-4 px-4 text-sm text-justify font-medium shadow-lg leading-relaxed mx-auto mb-6">
            <p className="mb-2">
              We specialize in expert finance, insurance, and real estate advisory services, empowering individuals, families, and businesses to achieve their goals.
            </p>
            <p className="mb-2">
              From investment management and business funding to customized insurance plans, we guide you every step of the way.
            </p>
            <p className="mb-2">
              As real estate advisors, we navigate market complexities, providing strategic insights for informed decisions.
            </p>
            <p>
              With a commitment to trust, integrity, and exceptional service, we strive to exceed expectations, helping you secure your future and grow your investments.
            </p>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:block w-full md:w-1/2 lg:w-2/6 absolute bg-white rounded-lg py-6 md:py-10 md:left-[60%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm md:text-lg text-justify font-medium shadow-lg px-6 md:px-10 leading-relaxed">
            <p className="mb-4">
              We specialize in expert finance, insurance, and real estate advisory services, empowering individuals, families, and businesses to achieve their goals. Our tailored solutions address unique needs, ensuring optimized financial health and comprehensive protection.
            </p>
            <p className="mb-4">
              From investment management and business funding to customized insurance plans, we guide you every step of the way.
            </p>
            <p className="mb-4">
              As real estate advisors, we navigate market complexities, providing strategic insights for informed decisions.
            </p>
            <p>
              With a commitment to trust, integrity, and exceptional service, we strive to exceed expectations, helping you secure your future and grow your investments.
            </p>
          </div>

          {/* Background sections */}
          <div className="color1 bg-[#F6EDE1] w-full md:w-4/6 h-60 md:h-screen"></div>
          <div className="color2 bg-[#F6980B] w-full md:w-2/6 h-60 md:h-screen"></div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default AboutUs;
