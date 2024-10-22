import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import RequiredDocument from '../../../assets/Services/LOD.pdf';

function MSMELoans() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <header className="text-center py-10">
        <h1 className="text-5xl heading-font mb-4 text-orange-600" role="heading" aria-level="1">
          🏢 MSME Loans <span className='text-black heading-font'>Empowering Growth</span>
        </h1>
        <p className="text-lg text-gray-700">Fuel your business ambitions with our tailored MSME loan options.</p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800" role="heading" aria-level="2">✨ Why Choose Our MSME Loans?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Flexible Loan Amounts 💰", description: "Choose from a range of loan amounts tailored to your business needs." },
            { title: "Quick Disbursement ⚡", description: "Get funds transferred to your account quickly and efficiently." },
            { title: "Competitive Interest Rates 🏷️", description: "Enjoy attractive interest rates to help your business thrive." },
            { title: "No Hidden Charges 🔍", description: "Transparent fee structure with no surprises." }
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
            <li>Fill out the MSME loan application form online.</li>
            <li>Submit required documentation for verification.</li>
            <li>Receive a loan offer tailored to your business.</li>
            <li>Accept the offer and receive funds to grow your business! 🎉</li>
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
          <p className="text-gray-600">Min. 18 yrs. No upper age limit.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700" role="heading" aria-level="3">Eligible Profiles</h3>
          <p className="text-gray-600">Registered MSMEs under the MSME Act.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700" role="heading" aria-level="3">Loan Amount</h3>
          <p className="text-gray-600">Amounts ranging from ₹50,000 to ₹2 crore.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700" role="heading" aria-level="3">Rate of Interest</h3>
          <p className="text-gray-600">Competitive rates as per market standards.</p>
        </div>
      </section>

      <section className="mt-10 flex items-center justify-center text-center">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800" role="heading" aria-level="2">📄 Required Documents</h2>
        <a
          href={RequiredDocument}
          download
          className="flex items-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 ml-3"
          aria-label="Download Required Documents for MSME Loans"
        >
          <FaFileDownload className="mr-2" />
          Download Document
        </a>
      </section>
    </main>
  );
}

export default MSMELoans;
