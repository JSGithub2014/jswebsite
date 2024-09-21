import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

function Landing() {
  return (
  <React.Fragment>
    <div className='bg-[#ff7c02]'>
        
    <Navbar />
    <Hero />
    </div>
  </React.Fragment>

  )
}

export default Landing