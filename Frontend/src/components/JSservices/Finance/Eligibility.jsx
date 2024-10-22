import React from 'react';
import PropTypes from 'prop-types';

function Eligibility({ age, eligibleProfiles, tenure, income, roi }) {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Eligibility</h2>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Age</h3>
        <p className="text-gray-600">{age}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Eligible Profiles</h3>
        <p className="text-gray-600">{eligibleProfiles}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Tenure</h3>
        <p className="text-gray-600">{tenure}</p>
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
  age: PropTypes.string.isRequired,
  eligibleProfiles: PropTypes.string.isRequired,
  tenure: PropTypes.string.isRequired,
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
