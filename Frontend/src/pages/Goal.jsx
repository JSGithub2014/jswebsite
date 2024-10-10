import React from 'react';
import Footer from './Footer';

function Goal() {
  return (
    <React.Fragment>
      <div className='h-screen w-full bg-zinc-700 flex flex-col  items-center text-white p-4'>
        <h1 className='text-5xl font-semiBold heading-font mb-4 mt-20'> <span className='text-[rgb(255,102,0)] heading-font font-semiBold'>Our</span> Goals</h1>
        <p className='text-lg text-center max-w-2xl mb-8'>
          At J&S Group, we are committed to achieving excellence and driving innovation. Our primary goals include:
        </p>
        
        <ul className='list-disc list-inside text-lg mb-8'>
          <li>Delivering high-quality products and services to our customers.</li>
          <li>Promoting sustainability and responsible business practices.</li>
          <li>Fostering a diverse and inclusive workplace culture.</li>
          <li>Building long-lasting relationships with our partners and stakeholders.</li>
        </ul>
        
        <p className='text-lg text-center'>
          Together, we can achieve these goals and make a positive impact in our industry and community.
        </p>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Goal;
