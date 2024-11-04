import React, { useEffect, useRef, useState } from 'react';
import { FaFileDownload, FaPhoneAlt } from 'react-icons/fa';
import RequiredDocument from '../../../assets/Services/LOD.pdf';
import { motion } from 'framer-motion';

function CashCredit() {
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
          💵 Cash Credit Facility <span className='text-black heading-font'>Simplified</span>
        </motion.h1>
        <motion.p
          className="text-sm md:text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: visibleSections[1] ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          ref={el => sectionsRef.current[1] = el}
        >
          Access flexible funding solutions tailored for your business needs.
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
          ✨ Why Choose Our Cash Credit?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-justify">
          {[
            { title: "Flexible Repayment Options🔄", description: "Just like Over Draft Facility, we have to pay the interest only on the amount utilized and the same is being deducted every month from the CC Account. It has to be renewed every year by providing latest financials, full details of Creditors and Debtors and details of stocks." },
            { title: "Instant Access to Funds 💳", description: "Same as Over Draft Facility, The facility will be linked directly to your bank account. You can easily access the required fund as per the limit provided to you without hesitation." },
            { title: "Quick Processing 🚀", description: "Our commitment to quick processing ensures that you can navigate financial challenges with ease. Don’t let slow approvals hold you back. With our Cash Credit Facility, you can enjoy rapid access to the funds you need to keep your business thriving. Apply today and experience the benefits of quick processing for yourself! " },
            { title: "Personalized Support🛠️", description: "A dedicated Relationship Manager is assigned to every client to take care of the documentation part and overlook the process till the facility is disbursed to see whether all the things are regular and there is no delay to complete the work. Further, at the time where the facility has to be renewed, the work has to be carried out by your Accounts team and the Bank Managers." }
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
          transition={{ duration: 0.5, delay: 1 }}
          ref={el => sectionsRef.current[7] = el}
        >
         <div className="text-left flex flex-col w-full md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-lg md:text-2xl font-semibold mb-4 text-gray-800">🚀 How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm md:text-gray-600">
            <li>Provide the checklist documents as shared by our Relationship Manager</li>
            <li>Upon analysis, all the documents will be provided to the concerned Bank to start the process.</li>
            <li>Legal & Technical will be initiated of the property provided as collateral.</li>
            <li>After receiving the Legal & Technical reports, sanction letter will be issued of the CC amount calculated.</li>
            <li>After signing the Loan Agreement, and CC account will be opened</li>
            <li>Once CC account is opened, disbursement will be done and post that the Facility Amount will be available for transaction</li>
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
          transition={{ duration: 0.5, delay: 1 }}
          ref={el => sectionsRef.current[12] = el}
        >
          Eligibility
        </motion.h2>
        {[
          { title: "Age", description: "Minimum 3 years (This facility is available only in the name of Company)" },
          { title: "Eligible Profiles", description: "Only Self-employed – Turnover above 2 Crores with profit margin of 8% to 12%" },
          { title: "Max Tenure", description: "CC Facility – 15 years with auto renewal every year" },
          { title: "Rate of Interest", description: "As per company profile ranging between 9% to 12%." }
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
