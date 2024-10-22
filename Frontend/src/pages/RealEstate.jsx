import React, { useRef } from 'react';
import { Helmet } from 'react-helmet'; // Importing Helmet for SEO
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
      <Helmet>
        <title>Real Estate Services | Buy, Sell, and Lease Properties</title>
        <meta name="description" content="Explore our real estate services, including buying, selling, and leasing properties. Get expert guidance from our team." />
        <meta name="keywords" content="Real Estate, Selling, Leasing, Property Management, Buy Property" />
      </Helmet>

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
