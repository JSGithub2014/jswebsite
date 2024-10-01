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
      { question: "What is a budget?", answer: "A budget is a plan for managing your income and expenses over a set period." },
      { question: "How do I improve my credit score?", answer: "To improve your credit score, pay bills on time, reduce outstanding debts, and avoid applying for new credit too frequently." },
      { question: "What is compound interest?", answer: "Compound interest is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest." },
      { question: "What are the types of investments?", answer: "Common types of investments include stocks, bonds, mutual funds, and real estate." },
    ],
    insurance: [
      { question: "What is life insurance?", answer: "Life insurance is a contract that pays out a sum of money upon the death of the insured person." },
      { question: "How does health insurance work?", answer: "Health insurance covers medical expenses and can include hospitalization, prescription drugs, and preventive services." },
      { question: "What is a premium in insurance?", answer: "A premium is the amount paid for an insurance policy, typically monthly or annually." },
      { question: "What is an insurance deductible?", answer: "A deductible is the amount you pay out of pocket before your insurance coverage kicks in." },
    ],
    realEstate: [
      { question: "What is a mortgage?", answer: "A mortgage is a loan used to purchase real estate, where the property itself serves as collateral." },
      { question: "What is the difference between a fixed-rate and adjustable-rate mortgage?", answer: "A fixed-rate mortgage has the same interest rate for the entire term, while an adjustable-rate mortgage’s interest rate can change over time." },
      { question: "How do I determine my home's value?", answer: "Your home's value can be determined by factors such as market trends, location, and recent sales of similar properties in your area." },
      { question: "What are closing costs?", answer: "Closing costs are fees associated with the purchase of real estate, including appraisal fees, title insurance, and lawyer fees." },
    ],
  };

  return (
    <React.Fragment>
      <h1 className='text-4xl md:text-5xl lg:text-4xl w-full mb-5 font-thin text-center tracking-wider bg-gradient-to-r from-yellow-400 to-orange-400 mt-10 py-4'>
  <span className='heading-font tracking-wider'>Frequently </span>
  <span className='heading-font text-[rgb(255,102,0)]'>Asked Questions</span>
</h1>
<div className="max-w-5xl mx-auto p-8 w-full">
      

      {Object.keys(faqData).map((category) => (
        <div key={category} className="mb-12">
          <button
            className="w-full flex justify-between items-center text-left text-3xl font-semibold text-gray-700 p-4 bg-white hover:bg-orange-100 rounded-lg shadow-md focus:outline-none transition-all duration-300 ease-in-out"
            onClick={() => toggleCategory(category)}
            aria-expanded={openCategory === category} // Accessibility improvement
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
                  aria-expanded={openQuestion === index} // Accessibility improvement
                  aria-controls={`question-${index}`}
                >
                  {item.question}
                  <FaChevronDown
                    className={`ml-2 transform transition-transform duration-300 ${openQuestion === index ? 'rotate-180 text-orange-600' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`question-${index}`}
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
    </React.Fragment>
    
  );
};

export default Faqs;
