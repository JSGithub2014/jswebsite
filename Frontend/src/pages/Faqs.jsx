import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = {
    finance: [
      { question: "What is a budget?", answer: "A budget is a plan for managing your income and expenses over a set period." },
      { question: "How do I improve my credit score?", answer: "To improve your credit score, pay bills on time, reduce outstanding debts, and avoid applying for new credit too frequently." },
      { question: "What is compound interest?", answer: "Compound interest is the interest on a loan or deposit that is calculated based on both the initial principal and the accumulated interest." },
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
    <div className="max-w-5xl mx-auto p-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-orange-600">Frequently Asked Questions</h2>

      {/* Finance Section */}
      <div>
        <h3 className="text-3xl font-semibold mb-6 text-gray-700 border-b-4 border-orange-500 pb-2">Finance</h3>
        {faqData.finance.map((item, index) => (
          <div key={index} className="mb-6">
            <button
              className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 p-4 bg-white hover:bg-orange-100 rounded-lg shadow-md focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => toggleQuestion(`finance-${index}`)}
            >
              {item.question}
              <FaChevronDown
                className={`ml-2 transform transition-transform duration-300 ${
                  openQuestion === `finance-${index}` ? 'rotate-180 text-orange-600' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openQuestion === `finance-${index}` ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <p className="mt-4 text-gray-600 text-base bg-white p-4 rounded-lg shadow-inner">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Insurance Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-semibold mb-6 text-gray-700 border-b-4 border-orange-500 pb-2">Insurance</h3>
        {faqData.insurance.map((item, index) => (
          <div key={index} className="mb-6">
            <button
              className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 p-4 bg-white hover:bg-orange-100 rounded-lg shadow-md focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => toggleQuestion(`insurance-${index}`)}
            >
              {item.question}
              <FaChevronDown
                className={`ml-2 transform transition-transform duration-300 ${
                  openQuestion === `insurance-${index}` ? 'rotate-180 text-orange-600' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openQuestion === `insurance-${index}` ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <p className="mt-4 text-gray-600 text-base bg-white p-4 rounded-lg shadow-inner">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Real Estate Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-semibold mb-6 text-gray-700 border-b-4 border-orange-500 pb-2">Real Estate</h3>
        {faqData.realEstate.map((item, index) => (
          <div key={index} className="mb-6">
            <button
              className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 p-4 bg-white hover:bg-orange-100 rounded-lg shadow-md focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => toggleQuestion(`realEstate-${index}`)}
            >
              {item.question}
              <FaChevronDown
                className={`ml-2 transform transition-transform duration-300 ${
                  openQuestion === `realEstate-${index}` ? 'rotate-180 text-orange-600' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openQuestion === `realEstate-${index}` ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <p className="mt-4 text-gray-600 text-base bg-white p-4 rounded-lg shadow-inner">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
