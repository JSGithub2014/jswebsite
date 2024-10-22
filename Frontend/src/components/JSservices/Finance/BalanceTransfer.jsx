import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import RequiredDocument from '../../../assets/Services/LOD.pdf';

function BalanceTransfer() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="text-center py-10">
        <h1 className="text-5xl heading-font mb-4 text-orange-600">
          💳 Balance Transfer <span className='text-black heading-font'>Simplified</span>
        </h1>
        <p className="text-lg text-gray-700">Transfer your balance with ease and save on interest.</p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">✨ Why Choose Our Balance Transfer?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Low Transfer Rates 💸", description: "Enjoy competitive rates that help you save on interest." },
            { title: "Flexible Repayment Options 🔄", description: "Choose a repayment plan that suits your needs." },
            { title: "Quick and Easy Process 🚀", description: "Transfer your balance in a matter of minutes." },
            { title: "No Hidden Fees 🔍", description: "Transparent terms with no surprises." }
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
            <li>Fill out our online balance transfer application.</li>
            <li>Receive approval and your new interest rate.</li>
            <li>Transfer your existing balance to us.</li>
            <li>Enjoy your savings! 🎉</li>
          </ol>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-lg font-semibold mb-2">Need Help? 📞</h3>
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
          { title: "Eligible Profiles", description: "Salaried: 1 year of employment. Self-Employed: 2 years in business." },
          { title: "Tenure", description: "Balance Transfer: Up to 5 Years." },
          { title: "Income", description: "See below for income requirements." }
        ].map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
        
        <div className="mb-4 overflow-x-auto">
          <h3 className="text-xl font-semibold text-gray-700">Income Requirements</h3>
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
                <td className="border border-gray-300 px-4 py-2">25,000.00 USD</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Other Countries</td>
                <td className="border border-gray-300 px-4 py-2">35,000.00 AED</td>
              </tr>
            </tbody>
          </table>
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
          aria-label="Download required documents"
        >
          <FaFileDownload className="mr-2" />
          Download Document
        </a>
      </section>
    </div>
  );
}

export default BalanceTransfer;
