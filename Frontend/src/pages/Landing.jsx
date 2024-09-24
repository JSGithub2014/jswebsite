import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

function Landing() {
  return (
    <React.Fragment>
      <div className='bg-[#ff7c02]'>
        <Navbar />
        <div className="pt-10"> 
          <Hero />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Landing;
