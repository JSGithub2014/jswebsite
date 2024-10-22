import React, { useRef } from 'react';
import { Helmet } from 'react-helmet'; // Importing Helmet for SEO
import InsuranceHero from '../components/JSservices/Insurance/InsuranceHero';
import GeneralInsurance from '../components/JSservices/Insurance/GeneralInsurance';
import LifeInsurance from '../components/JSservices/Insurance/LifeInsurance';
import HealthInsurance from '../components/JSservices/Insurance/HealthInsurance';

const Insurance = () => {
  const generalInsuranceRef = useRef(null);
  const lifeInsuranceRef = useRef(null);
  const healthInsuranceRef = useRef(null); // Fixed capitalization for consistency

  const scrollToSection = (section) => {
    let ref;
    switch (section) {
      case 'General Insurance':
        ref = generalInsuranceRef;
        break;
      case 'Life Insurance':
        ref = lifeInsuranceRef;
        break;
      case 'Health Insurance':
        ref = healthInsuranceRef;
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
        <title>Insurance Services | Comprehensive Coverage Solutions</title>
        <meta name="description" content="Explore our insurance services, including general, life, and health insurance. Get the best coverage tailored for your needs." />
        <meta name="keywords" content="Insurance, General Insurance, Life Insurance, Health Insurance, Coverage Solutions" />
      </Helmet>

      <InsuranceHero scrollToSection={scrollToSection} />

      <div className="my-10">
        <div ref={generalInsuranceRef}>
          <GeneralInsurance />
        </div>
        <div className="flex justify-center">
          <hr className="w-1/2 border-gray-300 my-6" />
        </div>
      </div>

      <div className="my-10">
        <div ref={lifeInsuranceRef}>
          <LifeInsurance />
        </div>
        <div className="flex justify-center">
          <hr className="w-1/2 border-gray-300 my-6" />
        </div>
      </div>

      <div className="my-10">
        <div ref={healthInsuranceRef}>
          <HealthInsurance />
        </div>
        <div className="flex justify-center">
          <hr className="w-1/2 border-gray-300 my-6" />
        </div>
      </div>
    </>
  );
};

export default Insurance;
