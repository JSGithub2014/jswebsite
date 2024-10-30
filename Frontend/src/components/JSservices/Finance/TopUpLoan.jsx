import React from 'react';
import { FaFileDownload, FaPhoneAlt } from 'react-icons/fa';
import RequiredDocument from '../../../assets/Services/LOD.pdf';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function TopUpLoan() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl md:text-5xl heading-font mb-4 text-orange-600" role="heading" aria-level="1">
          💰 Top-Up Loan Facilities <span className='text-black heading-font'>Made Easy</span>
        </h1>
        <p className="text-base md:text-lg text-gray-700">Enhance your financing with our flexible top-up loan options.</p>
      </header>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mt-8"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800" role="heading" aria-level="2">✨ Why Choose Our Top-Up Loans?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Low Rate of Interest 💰", description: "Top-up loans are generally funded with low rates of interest, only 0.20% to 0.40% higher than the Balance Transfer loan." },
            { title: "Quick and Easy Application 🖥️", description: "Only KYC documents are needed along with the Balance Transfer Loan Application. No major documents required." },
            { title: "Personalized Support 🤝", description: "A dedicated Relationship Manager will assist you throughout the documentation and loan process." }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[rgb(255,102,0)]" role="heading" aria-level="3">{item.title}</h3>
              <p className="text-sm md:text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mt-10 flex flex-col md:flex-row justify-center"
      >
        <div className="text-left flex flex-col w-full md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800" role="heading" aria-level="2">🚀 How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm md:text-gray-600">
            {[
              'The process is the same as the Balance Transfer process.',
              'Once the original documents from the parental bank are submitted, the top-up loan disbursement executes within 3 working days.',
              'The Sanction Letter for the top-up loan is issued along with the Balance Transfer loan sanction letter.'
            ].map((step, index) => (
              <motion.li
                key={index}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                {step}
              </motion.li>
            ))}
          </ol>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-lg font-semibold mb-2" role="heading" aria-level="3">Need Expert Guidance? </h3>
          <a
            href="tel:+918012091209"
            className="flex items-center justify-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 whitespace-nowrap"
          >
            <FaPhoneAlt className="mr-2" /> Connect Now!!
          </a>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mt-10 bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4" role="heading" aria-level="2">Eligibility</h2>
        <div className="mb-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700" role="heading" aria-level="3">Age</h3>
          <p className="text-sm md:text-gray-600">Minimum 24 years</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700" role="heading" aria-level="3">Eligible Profiles</h3>
          <p className="text-sm md:text-gray-600">
            Salaried Individual – Min Salary 18K with 2 years of job continuation proof
            <br />
            Self-employed – Min ITR 3 lakhs and above with at least 3 years of business continuation proof
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700" role="heading" aria-level="3">Max Tenure</h3>
          <p className="text-sm md:text-gray-600">
            Top-up Loan – The balance tenure of the parental loan will be carried forward.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700" role="heading" aria-level="3">Rate of Interest</h3>
          <p className="text-sm md:text-gray-600">Slightly higher than the Balance Transfer ROI.</p>
        </div>
        <div className="mb-4 overflow-x-auto max-h-60 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-200">
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
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mt-10 flex items-center justify-center text-center"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800" role="heading" aria-level="2">📄 Required Documents</h2>
        <a
          href={RequiredDocument}
          download
          className="flex items-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 ml-3 transform hover:scale-105"
          aria-label="Download Required Documents for Top-Up Loan"
        >
          <FaFileDownload className="mr-2" />
          Download Document
        </a>
      </motion.section>
    </main>
  );
}

export default TopUpLoan;
