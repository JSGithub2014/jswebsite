import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Faqs = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
    setOpenQuestion(null); // Close questions when changing category
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = {
    finance: [
      { question: "What is my eligibility?", answer: "Your eligibility depends upon your monthly income. For a Salaried person 65% of your Net Salary will be considered for your total EMI payment. In Self-employed case, the monthly income will be evaluated basis on the ITR income and again 70% of your monthly income will be considered for your total EMI payment. On the basis of this total EMI Payment, Eligibility Amount will be calculated." },
      { question: "How do I improve my credit score?", answer: "Credit score is the important number that ease getting the loan from various financial institutions. To improve your credit score, the main and foremost thing is to pay the EMIs and Credit Card bills on time. In Credit Cards, one should not utilize more than 30% of the credit limit and make sure to pay the whole billing amount before the due date and try avoiding minimum due payment." },
      { question: "What is the Rate of Interest in loans?", answer: "Rate of Interest is the main component one has to check while taking the loan. Rate of Interest is basically divided into 2 parts – one is the Base Rate (as provided by RBI) and another is the Margin (which the lending company charges). The Base Rate changes as per the RBI guidelines but the margin remains the same. Always remember that the Rate of Interest for Mortgage Loans is always 1% more than the Home Loan Rate of Interest. Also, there is a difference in Rate of Interest of Banks and NBFCs, NBFC charges little more Rate of Interest than Banks." },
      { question: "What are the types of investments?", answer: "Common types of investments include stocks, bonds, mutual funds, and real estate." },
    ],
    insurance: [
      { question: "What are the types of Insurance?", answer: "There are basically 2 types of Insurances – Life Insurance & General Insurance Life Insurance is the insurance used to cover the family of the Insurer wherein his family gets the Insured Amount post death of the Insurer. General Insurance is further divided into multiple parts – Health Insurance, Vehicle Insurance, Property Insurance, Stock Insurance etc., wherein the Insurer gets protection and compensation on the product insured." },
      { question: "What is the total premium in Insurance?", answer: "The Total Premium in insurance is the evaluated premium + applicable Government Taxes. The Premium is calculated depending upon the Risk of work, Age of Insurer, Diseases and Total Insured Members. You can get the illustration by calling us on our customer care number mentioned above." },
      { question: "What is the Health Insurance and what is the term cashless?", answer: "Health Insurance is an insurance one takes to secure his / her medical and hospital charges. For claiming the Health Insurance a 24 hours hospital admission is mandatory. Hospital Bills, Pre and Post Body Check-up bills as well as surgical implants, if any is insured in the Health Insurance plan (kindly check all the features before opting the Health Insurance Plan). Around 90% of the Health Insurance company provides Cashless Policy wherein the insurer and his family (who are the part of the Health Insurance) can be hospitalized without making any payment at the time of discharge." },
      { question: "Do we get any rebate on Income Tax for the Health Insurance premium paid?", answer: "Yes, one can get rebate Under Section 80D where you can get a tax deduction of upto Rs. 25,000/- each year." },
    ],
    realEstate: [
      { question: "What are the types of properties?", answer: "There are mainly 3 types of properties – Residential, Commercial & Specialized properties. In Residential there comes Flats, Bungalows, Row Houses and Farm Houses etc., in Commercial there comes Shops & Offices and in Specialized there comes Industrial Gala, Hospital Building, Industry (in MIDC Plot) etc." },
      { question: "How to determine the cost of the property?", answer: "The cost of the property is evaluated upon the location of the property and the city where the property is located. One can also find the Ready Recknor rate of the property by visiting www.igrmaharashtra.gov.in. The best way to find the property value is by visiting the Real Estate Agent who is based near that specific property location. No worries, you can also call us for the property costing and market valuation." },
      { question: "How much loan one can opt while purchasing the property?", answer: "Loan Amount depends on the LTV (Loan to Value) of the Market Rate of the property to be purchased. In Residential, the LTV is restricted between 75% to 90% of the Market Value depending upon the Loan Amount. In Commercial, the LTV is restricted between 60% to 75% of the Market Value. In Specialized, the LTV is restricted to 50% of the Market Value." },
      { question: "When should a person gets the possession of the property?", answer: "Possession of the property is only given once the building construction is completed and for that the Developer has to apply for Occupancy Certificate (OC) of the project. Once the OC is received the builder is free to give the possession of the units in that project. But keep in mind, after paying 10% of the Agreement Value, it is must to take Allotment Letter from the Developer and while taking the possession of the unit, it is must to take the Possession Letter from the Developer." },
    ],
  };

  return (
    <React.Fragment>
      <div className="bg-zinc-200">
        <h1 className='text-4xl md:text-5xl lg:text-5xl w-full mb-5 font-thin text-center tracking-wider mt-10 py-4 text-shadow '>
          <span className='heading-font tracking-wider'>Frequently </span>
          <span className='heading-font text-[rgb(255,102,0)]'>Asked Questions</span>
        </h1>
        <div className="max-w-5xl mx-auto p-8 w-full">
          {Object.keys(faqData).map((category) => (
            <div key={category} className="mb-12">
              <button
                className="w-full flex justify-between items-center text-left text-3xl font-semibold text-gray-700 p-4 bg-white hover:bg-orange-100 rounded-lg shadow-md focus:outline-none transition-all duration-300 ease-in-out"
                onClick={() => toggleCategory(category)}
                aria-expanded={openCategory === category}
                aria-controls={`category-${category}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
                <FaChevronDown
                  className={`ml-2 transform transition-transform duration-300 ${openCategory === category ? 'rotate-180 text-orange-600' : ''}`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`category-${category}`}
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openCategory === category ? 'max-h-screen' : 'max-h-0'} mt-4`}
              >
                {faqData[category].map((item, index) => (
                  <div key={index} className="mb-6">
                    <button
                      className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 p-4 bg-white hover:bg-orange-100 rounded-lg shadow-md focus:outline-none transition-all duration-300 ease-in-out"
                      onClick={() => toggleQuestion(index)}
                      aria-expanded={openQuestion === index}
                      aria-controls={`question-${category}-${index}`} // Unique ID
                    >
                      {item.question}
                      <FaChevronDown
                        className={`ml-2 transform transition-transform duration-300 ${openQuestion === index ? 'rotate-180 text-orange-600' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      id={`question-${category}-${index}`} // Unique ID
                      className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openQuestion === index ? 'max-h-screen' : 'max-h-0'}`}
                    >
                      <p className="mt-4 text-gray-600 text-base bg-white p-4 rounded-lg shadow-inner">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Faqs;
