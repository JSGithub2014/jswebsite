import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

function Landing() {
  return (
    <React.Fragment>
      <div className='bg-[rgb(255,102,0)]'>
        <Navbar />
        <div className="pt-10"> 
          <Hero />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Landing;
