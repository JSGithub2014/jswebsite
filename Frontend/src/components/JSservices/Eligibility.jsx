import React from 'react';

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
        <table className="min-w-full mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Country/Employment Type</th>
              <th className="py-2 px-4 text-left">Merchant Navy</th>
              <th className="py-2 px-4 text-left">Other Than Merchant Navy</th>
            </tr>
          </thead>
          <tbody>
            {income.map((item, index) => (
              <tr key={index}>
                <td className="border-t py-2 px-4">{item.country}</td>
                <td className="border-t py-2 px-4">{item.merchantNavy}</td>
                <td className="border-t py-2 px-4">{item.otherThanMerchantNavy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Rate of Interest</h3>
        <p className="text-gray-600">{roi}</p>
      </div>
    </div>
  );
}

export default Eligibility;
