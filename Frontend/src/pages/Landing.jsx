import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

function Landing() {
  return (
    <div className='bg-[rgb(255,102,0)]'>
      <Navbar />
      <main className='pt-16 lg:py-8'>
        <Hero />
      </main>
    </div>
  );
}

export default Landing;
