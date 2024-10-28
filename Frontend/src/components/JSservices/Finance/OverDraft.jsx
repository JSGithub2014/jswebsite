import React, { useEffect, useRef, useState } from 'react';
import { FaFileDownload, FaPhoneAlt } from 'react-icons/fa';
import RequiredDocument from '../../../assets/Services/LOD.pdf';
import { motion } from 'framer-motion';

function OverDraft() {
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
    <main className="max-w-7xl mx-auto p-6">
      <header className="text-center py-10">
        <motion.h1
          className="text-3xl md:text-5xl heading-font mb-4 text-orange-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: visibleSections[0] ? 1 : 0, y: visibleSections[0] ? 0 : -20 }}
          transition={{ duration: 0.5 }}
          ref={el => sectionsRef.current[0] = el}
        >
          💳 Overdraft Services <span className='text-black heading-font'>Made Easy</span>
        </motion.h1>
        <motion.p
          className="text-sm md:text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: visibleSections[1] ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          ref={el => sectionsRef.current[1] = el}
        >
          Access funds whenever you need with our flexible overdraft options.
        </motion.p>
      </header>

      <section className="mt-8">
        <motion.h2
          className="text-lg md:text-2xl font-semibold mb-4 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: visibleSections[2] ? 1 : 0, y: visibleSections[2] ? 0 : -20 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          ref={el => sectionsRef.current[2] = el}
        >
          ✨ Why Choose Our Overdraft Services?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Instant Access to Funds 🚀", description: "Get immediate access to cash when you need it most." },
            { title: "Flexible Repayment Options 🔄", description: "Repay as per your convenience without any stress." },
            { title: "No Hidden Charges 🔍", description: "Transparent terms with no surprises." },
            { title: "Competitive Interest Rates 💸", description: "Benefit from some of the best rates in the market." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
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
          transition={{ duration: 0.5, delay: 0.6 }}
          ref={el => sectionsRef.current[7] = el}
        >
          <div className="text-left flex flex-col w-full md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-lg md:text-2xl font-semibold mb-4 text-gray-800" role="heading" aria-level="2">🚀 How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm md:text-gray-600">
            <li>Reach out to us to apply for an overdraft facility.</li>
            <li>Get your application approved quickly.</li>
            <li>Access funds directly from your bank account.</li>
            <li>Repay as per your convenience! 🎉</li>
          </ol>
        </div>
        </motion.div>

        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-sm md:text-lg font-semibold mb-2">Need Assistance? 📞</h3>
          <a href="tel:+918012091209" className="flex items-center justify-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 whitespace-nowrap">
            <FaPhoneAlt className="mr-2" /> Connect Now!!
          </a>
        </div>
      </section>

      <section className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <motion.h2
          className="text-lg md:text-3xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: visibleSections[12] ? 1 : 0, y: visibleSections[12] ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          ref={el => sectionsRef.current[12] = el}
        >
          Eligibility
        </motion.h2>
        {[
          { title: "Age", description: "Minimum 24 years" },
          { title: "Eligible Profiles", description: <p>Salaried Individual – Min Salary 18K with 2 years of job continuation proof <br />
Self-employed – Min ITR 3 lakhs and above with at least 3 years of business continuation proof</p> },
          { title: "Limit", description: "Up to 50% of your monthly income." },
          { title: "Rate of Interest", description: "As per applicable guidelines." }
        ].map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-base md:text-xl font-semibold text-gray-700">{item.title}</h3>
            <p className="text-sm md:text-gray-600">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 flex items-center justify-center text-center">
        <motion.h2
          className="text-lg md:text-2xl font-semibold mb-2 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: visibleSections[16] ? 1 : 0, y: visibleSections[16] ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          ref={el => sectionsRef.current[16] = el}
        >
          📄 Required Documents
        </motion.h2>
        <a
          href={RequiredDocument}
          download
          className="flex items-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 ml-3"
          aria-label="Download Required Documents for Overdraft Services"
        >
          <FaFileDownload className="mr-2" />
          Download Document
        </a>
      </section>
    </main>
  );
}

export default OverDraft;
