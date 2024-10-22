import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import RequiredDocument from '../../../assets/Services/LOD.pdf';

function CashCredit() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="text-center py-10">
        <h1 className="text-5xl heading-font mb-4 text-orange-600">
          💵 Cash Credit Facility <span className='text-black heading-font'>Simplified</span>
        </h1>
        <p className="text-lg text-gray-700">Access flexible funding solutions tailored for your business needs.</p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">✨ Why Choose Our Cash Credit?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Flexible Withdrawal Options 🔄", description: "Withdraw as needed within your credit limit." },
            { title: "Interest Only on Utilized Amount 💳", description: "Pay interest only on the amount you use." },
            { title: "Quick Processing 🚀", description: "Get approved and access funds quickly." },
            { title: "Tailored Solutions 🛠️", description: "Customizable terms to fit your business needs." }
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
            <li>Apply for a cash credit facility online.</li>
            <li>Receive approval based on your creditworthiness.</li>
            <li>Access funds directly as per your requirement.</li>
            <li>Repay as per the agreed terms. 🎉</li>
          </ol>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-lg font-semibold mb-2">Need Assistance? 📞</h3>
          <a
            href="tel:+912245120755"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 whitespace-nowrap"
            aria-label="Call customer service at +91 2245-120-755"
          >
            📞 +91 2245-120-755
          </a>
        </div>
      </section>

      <section className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Eligibility</h2>
        {[
          { title: "Age", description: "Min. 21 yrs. Max. 65 yrs. or retirement age whichever is earlier at the time of application." },
          { title: "Eligible Profiles", description: "Businesses with at least 2 years of operational history." },
          { title: "Credit Limit", description: "Up to 100% of your working capital requirement." },
          { title: "Rate of Interest", description: "As per applicable guidelines." }
        ].map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 flex items-center justify-center text-center">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">📄 Required Documents</h2>
        <a
          href={RequiredDocument}
          download
          className="flex items-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 ml-3"
          aria-label="Download required documents"
        >
          <FaFileDownload className="mr-2" />
          Download Document
        </a>
      </section>
    </div>
  );
}

export default CashCredit;
