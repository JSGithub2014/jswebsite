import React from 'react';
import Footer from './Footer';
import GoalBanner from '../assets/goal.jpeg';

function Goal() {
  return (
    <React.Fragment>
      <div className="min-h-screen w-full bg-[rgb(58,59,59)] flex flex-col items-center text-white p-6 relative">
        {/* Header Section */}
        <h1 className="text-5xl font-semibold heading-font mb-4 mt-20 text-center">
          <span className="text-[rgb(255,102,0)] heading-font font-semibold">Our</span> Goals
        </h1>
        <p className="text-lg text-center max-w-2xl mb-8">
          At J&S Group, we are committed to achieving excellence and driving innovation.
        </p>

        {/* Main Image Section */}
        <div className="w-full max-w-3xl mb-10">
          <img 
            src={GoalBanner}
            alt="Inspiring Visual" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Goals List Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg max-w-3xl w-full mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Key Goals</h2>
          <ul className="list-disc list-inside text-lg mb-8">
            <li>Delivering high-quality products and services to our customers.</li>
            <li>Promoting sustainability and responsible business practices.</li>
            <li>Fostering a diverse and inclusive workplace culture.</li>
            <li>Building long-lasting relationships with our partners and stakeholders.</li>
          </ul>
        </div>

        {/* Vision Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg max-w-3xl w-full mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Vision</h2>
          <p className="text-lg text-center">
            To be a leading organization that drives innovation and excellence, setting benchmarks in quality and sustainability across all sectors.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg max-w-3xl w-full mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Mission</h2>
          <p className="text-lg text-center">
            Our mission is to empower communities through innovative solutions, fostering a culture of excellence while maintaining a commitment to sustainability.
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg max-w-3xl w-full mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Values</h2>
          <ul className="list-disc list-inside text-lg mb-8">
            <li>Integrity: Upholding the highest standards of honesty and ethics.</li>
            <li>Innovation: Embracing creativity and new ideas to drive progress.</li>
            <li>Collaboration: Working together to achieve common goals.</li>
            <li>Excellence: Striving for the highest quality in everything we do.</li>
          </ul>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 pointer-events-none" />

        {/* Conclusion Section */}
        <p className="text-lg text-center mt-6 max-w-2xl">
          Together, we can achieve these goals and make a positive impact in our industry and community.
        </p>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Goal;
