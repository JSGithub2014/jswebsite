import React, { useRef } from 'react';
import InsuranceHero from '../components/JSservices/Insurance/InsuranceHero';
import GeneralInsurance from '../components/JSservices/Insurance/GeneralInsurance';
import LifeInsurance from '../components/JSservices/Insurance/LifeInsurance';
import HealthInsurance from '../components/JSservices/Insurance/HealthInsurance';

const Insurance = () => {
  const generalInsuranceRef = useRef(null);
  const lifeInsuranceRef = useRef(null); // Ref for another section if needed
  const HealthInsuranceRef = useRef(null); // Ref for another section if needed

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
        ref = HealthInsuranceRef;
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
        <div ref={HealthInsuranceRef}>
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
