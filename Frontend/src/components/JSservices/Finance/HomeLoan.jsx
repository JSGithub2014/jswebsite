import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

function HomeLoan() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="text-center py-10">
        <h1 className="text-5xl heading-font mb-4 text-orange-600">
          🏡 Home Loans <span className='text-black heading-font'>Made Easy</span>
        </h1>
        <p className="text-lg text-gray-700">Get the keys to your dream home with our flexible home loan options.</p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">✨ Why Choose Our Home Loans?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{ title: "Competitive Interest Rates 💰", description: "We offer some of the most competitive interest rates in the market to help you save." },
            { title: "Flexible Repayment Terms 🔄", description: "Choose a repayment term that fits your budget and lifestyle." },
            { title: "Quick and Easy Application 🖥️", description: "Our online application process is fast and straightforward." },
            { title: "Personalized Support 🤝", description: "Our dedicated team is here to guide you every step of the way." }].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-[rgb(255,102,0)]">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 flex flex-col md:flex-row justify-center">
        <div className="text-left flex flex-col w-full md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">🚀 How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Fill out our online application form.</li>
            <li>Get pre-approved for your loan.</li>
            <li>Find your dream home.</li>
            <li>Finalize your loan and move in! 🎉</li>
          </ol>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-lg font-semibold mb-2">Need Expert Guidance? 📞</h3>
          <a href="tel:+912245120755" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 whitespace-nowrap">
            📞 +91 2245-120-755
          </a>
        </div>
      </section>

      <section className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Eligibility</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Age</h3>
          <p className="text-gray-600">Min. 21 yrs. Max. 65 yrs. or retirement age whichever is earlier at the time of maturity of loan.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Eligible Profiles</h3>
          <p className="text-gray-600">Salaried: 1 year of employment overseas. Self-Employed: 3 years in current business overseas.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Tenure</h3>
          <p className="text-gray-600">Home Loan: 30 Years. Home Improvement Loan: 15 Years. Land Loan: 20 Years.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Income</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full mt-2 border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">Country/Employment Type</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Merchant Navy</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Other Than Merchant Navy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">GCC</td>
                  <td className="border border-gray-300 px-4 py-2">26,000.00 USD</td>
                  <td className="border border-gray-300 px-4 py-2">84,000.00 AED</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Other Countries</td>
                  <td className="border border-gray-300 px-4 py-2">26,000.00 USD</td>
                  <td className="border border-gray-300 px-4 py-2">42,000.00 AED</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Rate of Interest</h3>
          <p className="text-gray-600">As per RBI Guidelines.</p>
        </div>
      </section>

      <section className="mt-10 flex items-center justify-center text-center">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">📄 Required Documents</h2>
        <a
          href="/path-to-your-document.pdf" 
          download
          className="flex items-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 ml-3"
        >
          <FaFileDownload className="mr-2" /> 
          Download Document
        </a>
      </section>
    </div>
  );
}

export default HomeLoan;
