import React from 'react';

function AboutUs() {
  return (
    <React.Fragment>
      <main className="aboutus-page w-full bg-black relative">
        <div className="aboutus-container flex flex-col md:flex-row">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-semibold absolute text-center md:text-left left-1/2 md:left-[25.5%] top-[26%] z-10 transform md:-translate-x-0 -translate-x-1/2 z-10">
            W<span className="font-thin">ho</span> <span className="text-orange-255">We</span> A<span className="font-thin">re</span>
          </h1>

          {/* Text content */}
          <div className="w-full md:w-2/6 absolute bg-white py-8 md:py-10 rounded-lg md:left-[61.5%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-base md:text-lg text-justify font-semibold shadow-lg px-8 md:px-14 leading-loose">
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
          <div className="color1 bg-[#F6EDE1] w-full md:w-4/6 h-96 md:h-screen"></div>
          <div className="color2 bg-[#F6980B] w-full md:w-2/6 h-96 md:h-screen"></div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default AboutUs;