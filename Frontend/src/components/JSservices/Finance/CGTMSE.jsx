import React from 'react';
import { FaFileDownload,FaPhoneAlt } from 'react-icons/fa';
import RequiredDocument from '../../../assets/Services/LOD.pdf';

function CGTMSE() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="text-center py-10">
        <h1 className="text-3xl md:text-5xl heading-font mb-4 text-orange-600">
          🌟 CGTMSE Scheme <span className='text-black heading-font'>Simplified</span>
        </h1>
        <p className="text-sm md:text-lg text-gray-700">Empowering small businesses with credit guarantee schemes.</p>
      </header>

      <section className="mt-8">
        <h2 className="text-lg md:text-2xl font-semibold mb-4 text-gray-800">✨ Why Choose CGTMSE?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Credit Guarantee 💼", description: "Receive guarantees for loans up to a specified limit." },
            { title: "Support for MSMEs 🏢", description: "Designed specifically for Micro, Small, and Medium Enterprises." },
            { title: "Boosts Confidence 🚀", description: "Facilitates easier access to credit." },
            { title: "No Collateral Required 🔒", description: "Access funds without needing collateral." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-base md:text-xl font-bold mb-2 text-[rgb(255,102,0)]">{item.title}</h3>
              <p className="text-sm md:text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 flex flex-col md:flex-row justify-center">
        <div className="text-left flex flex-col w-full md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-lg md:text-2xl font-semibold mb-4 text-gray-800">🚀 How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm md:text-gray-600">
            <li>Apply for a loan through an accredited lending institution.</li>
            <li>Indicate that you wish to avail of the CGTMSE scheme.</li>
            <li>Receive approval based on the eligibility criteria.</li>
            <li>Get the loan amount with CGTMSE coverage! 🎉</li>
          </ol>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-sm md:text-lg font-semibold mb-2">Need Assistance? 📞</h3>
          <a href="tel:+912245120755" className="flex items-center justify-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 whitespace-nowrap">
            <FaPhoneAlt className="mr-2" /> Connect Now!!
          </a>
        </div>
      </section>

      <section className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg md:text-3xl font-semibold text-gray-800 mb-4">Eligibility</h2>
        {[
          { title: "Age", description: "Minimum age of 18 years with no upper age limit." },
          { title: "Eligible Profiles", description: "Micro, Small, and Medium Enterprises as defined by the MSME Act." },
          { title: "Loan Amount", description: "Coverage up to ₹2 crore, depending on the specific scheme." },
          { title: "Rate of Interest", description: "As per the lender's guidelines." }
        ].map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-base md:text-xl font-semibold text-gray-700">{item.title}</h3>
            <p className="text-sm md:text-gray-600">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 flex items-center justify-center text-center">
        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-gray-800">📄 Required Documents</h2>
        <a
          href={RequiredDocument}
          download
          className="flex items-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 ml-3"
          aria-label="Download required documents for CGTMSE"
        >
          <FaFileDownload className="mr-2" />
          Download Document
        </a>
      </section>
    </div>
  );
}

export default CGTMSE;
