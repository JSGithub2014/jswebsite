import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import RequiredDocument from '../../../assets/Services/LOD.pdf'


function OverDraft() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="text-center py-10">
        <h1 className="text-5xl heading-font mb-4 text-orange-600">
          💳 Overdraft Services <span className='text-black heading-font'>Made Easy</span>
        </h1>
        <p className="text-lg text-gray-700">Access funds whenever you need with our flexible overdraft options.</p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">✨ Why Choose Our Overdraft Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Instant Access to Funds 🚀", description: "Get immediate access to cash when you need it most." },
            { title: "Flexible Repayment Options 🔄", description: "Repay as per your convenience without any stress." },
            { title: "No Hidden Charges 🔍", description: "Transparent terms with no surprises." },
            { title: "Competitive Interest Rates 💸", description: "Benefit from some of the best rates in the market." }
          ].map((item, index) => (
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
            <li>Apply for an overdraft facility online.</li>
            <li>Get your application approved quickly.</li>
            <li>Access funds directly from your bank account.</li>
            <li>Repay as per your convenience! 🎉</li>
          </ol>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-lg font-semibold mb-2">Need Assistance? 📞</h3>
          <a href="tel:+912245120755" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 whitespace-nowrap">
            📞 +91 2245-120-755
          </a>
        </div>
      </section>

      <section className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Eligibility</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Age</h3>
          <p className="text-gray-600">Min. 21 yrs. Max. 65 yrs. or retirement age whichever is earlier at the time of application.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Eligible Profiles</h3>
          <p className="text-gray-600">Salaried: 1 year of employment. Self-Employed: 2 years in business.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Limit</h3>
          <p className="text-gray-600">Overdraft limit up to 50% of your monthly income.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Rate of Interest</h3>
          <p className="text-gray-600">As per applicable guidelines.</p>
        </div>
      </section>

      <section className="mt-10 flex items-center justify-center text-center">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">📄 Required Documents</h2>
        <a
          href={RequiredDocument}
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

export default OverDraft;
