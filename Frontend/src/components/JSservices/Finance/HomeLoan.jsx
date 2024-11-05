import React, { useState, useRef, useEffect } from 'react'; // Import useState and useRef
import { FaFileDownload, FaPhoneAlt } from 'react-icons/fa';
import RequiredDocument from '../../../assets/Services/LOD.pdf';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function HomeLoan() {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionsRef = useRef([]);

  // Handle the scroll event to determine section visibility
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

  // Add scroll event listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="max-w-7xl mx-auto p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl md:text-5xl heading-font mb-4 text-orange-600" role="heading" aria-level="1">
          🏡 Home Loans <span className="text-black heading-font">Made Easy</span>
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
            { title: "Competitive Interest Rates 💰", description: "We have a wide range of Banks, NBFCs and Credit Societies, hence depending upon your financial documents, we can help get you the best possible Rate of Interest suiting your profile." },
            { title: "Flexible Repayment Terms 🔄", description: "Choose a repayment term that fits your budget and lifestyle." },
            { title: "Quick and Easy Application 🖥️", description: "Our experts will help you get your file login quickly and easily. We have specially dedicated sales coordinators in the backend taking care of all the loan process starting from Login to Disbursement." },
            { title: "Personalized Support 🤝", description: "A dedicated Relationship Manager is assigned to every client to take care of the documentation part and overlook the process to see whether all the things are regular and there is no delay to complete the work." }
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

      {/* How It Works Section */}
      <section className="mt-10 flex flex-col md:flex-row justify-center">
        <motion.div
          className="text-left flex flex-col w-full md:w-2/3 mb-6 md:mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: visibleSections[7] ? 1 : 0, y: visibleSections[7] ? 0 : -20 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          ref={el => sectionsRef.current[7] = el}
        >
          <div className="text-left flex flex-col w-full md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-lg md:text-2xl font-semibold mb-4 text-gray-800">🚀 How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm md:text-gray-600 ">
            <li>Provide all the required documents as per the check list provided.</li>
            <li>Our dedicated Relationship Manager will be assigned who will complete all the workings and documentation process.</li>
            <li>Your completed file will be forwarded to the bank for processing, which we call it as login.</li>
            <li>Post login, we will proceed for Sanctioning of the loan.</li>
            <li>Finalize your dream home</li>
            <li>Finalize your loan and move in</li>
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



      {/* Eligibility Section */}
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
          <p className="text-sm md:text-gray-600">Home Loan – 30 Years</p>
        </div>
        {[
          { title: "Rate of Interest", description: "Base Rate as per RBI guidelines and Margin as per guidelines of the Bank / NBFC." }
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

      {/* Required Documents Section */}
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
