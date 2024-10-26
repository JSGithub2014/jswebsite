import React from 'react';
import PropTypes from 'prop-types';

function Eligibility({ income, roi }) {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Eligibility</h2>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Age</h3>
        <p className="text-gray-600">Minimum 24 years</p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Eligible Profiles</h3>
        <p className="text-gray-600">
          Salaried Individual – Min Salary 18K with 2 years of job continuation proof
          <br />
          Self-employed – Min ITR 3 lakhs and above with at least 3 years of business continuation proof
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Max Tenure</h3>
        <p className="text-gray-600">
          Home Loan – 30 Years | Mortgage Loan – 15 Years | Specialized Property Loan – 10 Years
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Income</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full mt-2 border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 text-left border border-gray-300">Country/Employment Type</th>
                <th className="py-2 px-4 text-left border border-gray-300">Merchant Navy</th>
                <th className="py-2 px-4 text-left border border-gray-300">Other Than Merchant Navy</th>
              </tr>
            </thead>
            <tbody>
              {income.map((item, index) => (
                <tr key={index} className="border-t border-gray-300">
                  <td className="py-2 px-4">{item.country}</td>
                  <td className="py-2 px-4">{item.merchantNavy}</td>
                  <td className="py-2 px-4">{item.otherThanMerchantNavy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Rate of Interest</h3>
        <p className="text-gray-600">{roi}</p>
      </div>
    </div>
  );
}

Eligibility.propTypes = {
  income: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string.isRequired,
      merchantNavy: PropTypes.string.isRequired,
      otherThanMerchantNavy: PropTypes.string.isRequired,
    })
  ).isRequired,
  roi: PropTypes.string.isRequired,
};

export default Eligibility;
