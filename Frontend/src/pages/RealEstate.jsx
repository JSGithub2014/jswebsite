import React, { useRef } from 'react';
import RealEstateHero from '../components/JSservices/RealEstate/RealEstateHero';
import Selling from '../components/JSservices/RealEstate/Selling';
import Leasing from '../components/JSservices/RealEstate/Leasing';

const RealEstate = () => {
  const sellingRef = useRef(null);
  const leasingRef = useRef(null);

  const scrollToSection = (section) => {
    let ref;
    switch (section) {
      case 'Selling':
        ref = sellingRef;
        break;
      case 'Leasing':
        ref = leasingRef;
        break;
      default:
        return;
    }
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <RealEstateHero scrollToSection={scrollToSection} />
      
      <div ref={sellingRef} className="my-10">
        <Selling />
      </div>

      <div ref={leasingRef} className="my-10">
        <Leasing />
      </div>
    </>
  );
};

export default RealEstate;
