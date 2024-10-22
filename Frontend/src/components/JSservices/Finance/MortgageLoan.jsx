import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import RequiredDocument from '../../../assets/Services/LOD.pdf';

function MortgageLoan() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <header className="text-center py-10">
        <h1 className="text-5xl heading-font mb-4 text-orange-600" role="heading" aria-level="1">
          🏠 Mortgage Loans <span className='text-black heading-font'>Simplified</span>
        </h1>
        <p className="text-lg text-gray-700">Secure your future with our flexible mortgage loan options.</p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800" role="heading" aria-level="2">✨ Why Choose Our Mortgage Loans?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Low Interest Rates 💵", description: "We provide some of the lowest interest rates to help you save money." },
            { title: "Customizable Loan Terms 📅", description: "Select a loan term that suits your financial situation." },
            { title: "Fast Processing 🏃‍♂️", description: "Our efficient process gets you approved quickly." },
            { title: "Expert Guidance 📘", description: "Our team will assist you in navigating the mortgage process." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-[rgb(255,102,0)]" role="heading" aria-level="3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 flex flex-col md:flex-row justify-center">
        <div className="text-left flex flex-col w-full md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800" role="heading" aria-level="2">🚀 How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Complete our online mortgage application.</li>
            <li>Receive pre-approval for your mortgage.</li>
            <li>Choose your dream property.</li>
            <li>Finalize your mortgage and move in! 🎉</li>
          </ol>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-lg font-semibold mb-2" role="heading" aria-level="3">Need Assistance? 📞</h3>
          <a href="tel:+912245120755" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 whitespace-nowrap">
            📞 +91 2245-120-755
          </a>
        </div>
      </section>

      <section className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4" role="heading" aria-level="2">Eligibility</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700" role="heading" aria-level="3">Age</h3>
          <p className="text-gray-600">Min. 21 yrs. Max. 65 yrs. or retirement age whichever is earlier at the time of maturity of mortgage.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700" role="heading" aria-level="3">Eligible Profiles</h3>
          <p className="text-gray-600">Salaried: 2 years of employment. Self-Employed: 3 years in current business.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700" role="heading" aria-level="3">Tenure</h3>
          <p className="text-gray-600">Mortgage Loan: Up to 30 Years.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700" role="heading" aria-level="3">Income</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full mt-2 border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">Country/Employment Type</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Monthly Income</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">GCC</td>
                  <td className="border border-gray-300 px-4 py-2">30,000.00 USD</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Other Countries</td>
                  <td className="border border-gray-300 px-4 py-2">40,000.00 AED</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700" role="heading" aria-level="3">Rate of Interest</h3>
          <p className="text-gray-600">As per RBI Guidelines.</p>
        </div>
      </section>

      <section className="mt-10 flex items-center justify-center text-center">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800" role="heading" aria-level="2">📄 Required Documents</h2>
        <a
          href={RequiredDocument}
          download
          className="flex items-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 ml-3"
          aria-label="Download Required Documents for Mortgage Loan"
        >
          <FaFileDownload className="mr-2" />
          Download Document
        </a>
      </section>
    </main>
  );
}

export default MortgageLoan;
