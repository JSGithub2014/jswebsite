import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaShieldAlt, FaUserNurse, FaHospital, FaCarCrash } from 'react-icons/fa';

const HealthInsurance = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section 
      className="w-full flex flex-col items-center my-10 bg-gray-50 p-6 rounded-lg shadow-lg"
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}
      viewport={{ once: false, amount: 0.2 }} 
    >
      <header className="mb-6">
        <h2 className="text-4xl heading-font font-semibold tracking-wider text-[rgb(255,102,0)]">
          Comprehensive Health <span className='heading-font font-semibold tracking-wider text-black'>Insurance Solutions</span>
        </h2>
      </header>
      
      <article className="w-5/6 flex flex-col items-start">
        <p className="text-lg mb-4">
          At J&S Group, we offer a range of health insurance products designed to provide you and your family with essential coverage and peace of mind during medical emergencies.
        </p>

        <h3 className="text-2xl font-semibold text-[rgb(255,102,0)] mb-4 text-center w-full">
          👇 Our Health Insurance Coverage Includes 👇 
        </h3>
        
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-4xl">
            {[
              { icon: <FaHeart aria-label="Individual Health Insurance" />, title: <>Individual Health Insurance <br /> Family Floater Plans</> },
              { icon: <FaCarCrash aria-label="Personal Accident" />, title: "Personal Accident" },
              { icon: <FaUserNurse aria-label="Critical Illness Insurance" />, title: "Critical Illness Insurance" },
              { icon: <FaHospital aria-label="Top-up Plans" />, title: "Top-up Plans" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                aria-labelledby={`coverage-${index}`}
              >

                <div className="text-4xl mb-2 text-[rgb(255,102,0)]">{item.icon}</div>
                <h4 id={`coverage-${index}`} className="text-lg font-semibold">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-[rgb(255,102,0)] mb-4">Why Choose Our Health Insurance?</h3>
        
        <ul className="list-disc list-inside mb-6">
          {[
            "Modern treatment",
            "Bonus benefits every year",
            "Maternity coverage included",
            "Free health check-ups",
            "Waiting time for existing conditions (30 days to 3 years)",
            "Unlimited SI options Available",
            "Cashless treatment at partner hospitals",
            "Easy claims process"
          ].map((benefit, index) => (
            <motion.li key={index} variants={fadeInVariants} whileHover={{ scale: 1.05 }} className="text-base md:text-lg">
              {benefit}
            </motion.li>
          ))}
        </ul>

        <p className="text-lg mb-4">
          Our dedicated team of health insurance specialists is here to help you find the right plan tailored to your needs and budget.
        </p>
        
        <p className="text-lg mb-4">
          Contact us today to learn more about our health insurance solutions and how we can help you safeguard your health!
        </p>

        <p className="mt-4">
        <a href="tel:+912245120755" className="px-6 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500 transition duration-300">
            Contact Us
          </a>
        </p>
      </article>
    </section>
  );
};

export default HealthInsurance;
