import React from 'react';
import { FaFileDownload, FaPhoneAlt } from 'react-icons/fa';
import RequiredDocument from '../../../assets/Services/LOD.pdf';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function HomeLoan() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl md:text-5xl heading-font mb-4 text-orange-600" role="heading" aria-level="1">
          🏡 Home Loans <span className='text-black heading-font'>Made Easy</span>
        </h1>
        <p className="text-base md:text-lg text-gray-700">Get the keys to your dream home with our flexible home loan options.</p>
      </header>

      <motion.section 
        variants={sectionVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false }} 
        className="mt-8"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800" role="heading" aria-level="2">✨ Why Choose Our Home Loans?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Competitive Interest Rates 💰", description: "We offer some of the most competitive interest rates in the market to help you save." },
            { title: "Flexible Repayment Terms 🔄", description: "Choose a repayment term that fits your budget and lifestyle." },
            { title: "Quick and Easy Application 🖥️", description: "Our online application process is fast and straightforward." },
            { title: "Personalized Support 🤝", description: "Our dedicated team is here to guide you every step of the way." }
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
            {['Fill out our online application form.', 
              'Get pre-approved for your loan.', 
              'Find your dream home.', 
              'Finalize your loan and move in! 🎉'].map((step, index) => (
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
            href="tel:+912245120755" 
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
        {[
          { title: "Age", description: "Min. 21 yrs. Max. 65 yrs. or retirement age whichever is earlier at the time of maturity of loan." },
          { title: "Eligible Profiles", description: "Salaried: 1 year of employment overseas. Self-Employed: 3 years in current business overseas." },
          { title: "Tenure", description: "Home Loan: 30 Years. Home Improvement Loan: 15 Years. Land Loan: 20 Years." },
          { title: "Income", description: "Refer to the table below for income eligibility." },
          { title: "Rate of Interest", description: "As per RBI Guidelines." }
        ].map((item, index) => (
          <div className="mb-4" key={index}>
            <h3 className="text-lg md:text-xl font-semibold text-gray-700" role="heading" aria-level="3">{item.title}</h3>
            <p className="text-sm md:text-gray-600">{item.description}</p>
          </div>
        ))}
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
          aria-label="Download Required Documents for Home Loan"
        >
          <FaFileDownload className="mr-2" /> 
          Download Document
        </a>
      </motion.section>
    </main>
  );
}

export default HomeLoan;
