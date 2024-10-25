import React, { useEffect, useRef, useState } from 'react';
import { FaFileDownload, FaPhoneAlt } from 'react-icons/fa';
import RequiredDocument from '../../../assets/Services/LOD.pdf';
import { motion } from 'framer-motion';

function BalanceTransfer() {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionsRef = useRef([]);

  const handleScroll = () => {
    const sectionVisibility = {};
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        sectionVisibility[index] = rect.top < window.innerHeight && rect.bottom > 0;
      }
    });
    setVisibleSections(sectionVisibility);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="text-center py-10">
        <motion.h1
          className="text-3xl md:text-5xl heading-font mb-4 text-orange-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: visibleSections[0] ? 1 : 0, y: visibleSections[0] ? 0 : -20 }}
          transition={{ duration: 0.5 }}
          ref={el => sectionsRef.current[0] = el}
        >
          💳 Balance Transfer <span className='text-black heading-font'>Simplified</span>
        </motion.h1>
        <motion.p
          className="text-sm md:text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: visibleSections[1] ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          ref={el => sectionsRef.current[1] = el}
        >
          Transfer your balance easily and save on interest.
        </motion.p>
      </header>

      <section className="mt-8">
        <motion.h2
          className="text-lg md:text-2xl font-semibold mb-4 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: visibleSections[2] ? 1 : 0, y: visibleSections[2] ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          ref={el => sectionsRef.current[2] = el}
        >
          ✨ Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Low Rates 💸", description: "Save on interest with competitive rates." },
            { title: "Flexible Options 🔄", description: "Choose a repayment plan that fits you." },
            { title: "Quick Process 🚀", description: "Transfer your balance in minutes." },
            { title: "No Hidden Fees 🔍", description: "Transparent terms, no surprises." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: visibleSections[3 + index] ? 1 : 0, scale: visibleSections[3 + index] ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              ref={el => sectionsRef.current[3 + index] = el}
            >
              <h3 className="text-base md:text-xl font-bold mb-2 text-[rgb(255,102,0)]">{item.title}</h3>
              <p className="text-sm md:text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-10 flex flex-col md:flex-row justify-center">
        <motion.div
          className="text-left flex flex-col w-full md:w-2/3 mb-6 md:mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: visibleSections[7] ? 1 : 0, y: visibleSections[7] ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 1 }}
          ref={el => sectionsRef.current[7] = el}
        >
          <div className="text-left flex flex-col w-full md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-lg md:text-2xl font-semibold mb-4 text-gray-800">🚀 How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm md:text-gray-600">
            <li>Fill out our online balance transfer application.</li>
            <li>Receive approval and your new interest rate.</li>
            <li>Transfer your existing balance to us.</li>
            <li>Enjoy your savings! 🎉</li>
          </ol>
        </div>
        </motion.div>

        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-sm md:text-lg font-semibold mb-2">Need Help? 📞</h3>
          <a href="tel:++918012091209" className="flex items-center justify-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 whitespace-nowrap">
            <FaPhoneAlt className="mr-2" /> Connect Now!!
          </a>
        </div>
      </section>

      <section className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <motion.h2
          className="text-lg md:text-3xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: visibleSections[12] ? 1 : 0, y: visibleSections[12] ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          ref={el => sectionsRef.current[12] = el}
        >
          Eligibility
        </motion.h2>
        {[
          { title: "Age", description: "Min. 21 yrs. Max. 65 yrs." },
          { title: "Profiles", description: "Salaried: 1 year. Self-Employed: 2 years." },
          { title: "Tenure", description: "Up to 5 Years." },
          { title: "Income", description: "See below for requirements." }
        ].map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-base md:text-xl font-semibold text-gray-700">{item.title}</h3>
            <p className="text-sm md:text-gray-600">{item.description}</p>
          </div>
        ))}
        
        <div className="mb-4 overflow-x-auto">
          <h3 className="text-base md:text-xl font-semibold text-gray-700">Income Requirements</h3>
          <table className="min-w-full mt-2 border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left text-sm md:text-base">Country/Employment</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm md:text-base">Monthly Income</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">GCC</td>
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">25,000.00 USD</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">Other Countries</td>
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">35,000.00 AED</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-4">
          <h3 className="text-base md:text-xl font-semibold text-gray-700">Rate of Interest</h3>
          <p className="text-sm md:text-gray-600">As per applicable guidelines.</p>
        </div>
      </section>

      <section className="mt-10 flex items-center justify-center text-center">
        <motion.h2
          className="text-lg md:text-2xl font-semibold mb-2 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: visibleSections[15] ? 1 : 0, y: visibleSections[15] ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          ref={el => sectionsRef.current[15] = el}
        >
          📄 Required Documents
        </motion.h2>
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
