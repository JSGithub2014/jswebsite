import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaCar, FaPlane, FaShieldAlt, FaBriefcase, FaUserShield } from 'react-icons/fa';

const GeneralInsurance = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div 
      className="w-full flex flex-col items-center my-10 bg-gray-50 p-6 rounded-lg shadow-lg"
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}
      viewport={{ once: false, amount: 0.2 }} 
    >
      <h2 className="text-3xl md:text-4xl heading-font font-semibold tracking-wider text-[rgb(255,102,0)] mb-6">
        Comprehensive General <span className='heading-font font-semibold tracking-wider text-black'>Insurance Solutions</span>
      </h2>
      
      <div className="w-11/12 md:w-5/6 flex flex-col items-start">
        <p className="text-base md:text-lg mb-4">
          At J&S Group, we offer a complete range of general insurance products designed to protect you from various risks and damages. Our policies cover all aspects of general insurance to ensure you and your assets are fully safeguarded.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[rgb(255,102,0)] mb-4 text-center w-full">👇 Our General Insurance Coverage Includes 👇 </h3>
        
        <div className="w-full flex justify-center">
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 max-w-4xl">
    {[
      { icon: <FaHome aria-label="Property Insurance" />, title: "Property Insurance" },
      { icon: <FaCar aria-label="Vehicle Insurance" />, title: "Vehicle Insurance" },
      { icon: <FaPlane aria-label="Travel Insurance" />, title: "Travel Insurance" },
      { icon: <FaShieldAlt aria-label="Liability Insurance" />, title: "Liability Insurance" },
      { icon: <FaBriefcase aria-label="Business Insurance" />, title: "Business Insurance" },
      { icon: <FaUserShield aria-label="Home Insurance" />, title: "Home Insurance" },
    ].map((item, index) => (
      <motion.div
        key={index}
        variants={fadeInVariants}
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <div className="text-4xl mb-2 text-[rgb(255,102,0)]">{item.icon}</div>
        <h4 className="text-base md:text-lg font-semibold">{item.title}</h4>
      </motion.div>
    ))}
  </div>
</div>

        <h3 className="text-xl md:text-2xl font-semibold text-[rgb(255,102,0)] mb-4">Why Choose Our General Insurance?</h3>
        
        <ul className="list-disc list-inside mb-6">
          {[
            "Comprehensive coverage against financial losses",
            "Peace of mind knowing you’re protected",
            "Access to a network of quality healthcare services (for health-related insurance)",
            "Legal protection to shield you from liabilities",
            "Robust asset protection for your property and vehicles"
          ].map((benefit, index) => (
            <motion.li key={index} variants={fadeInVariants} whileHover={{ scale: 1.05 }} className="text-base md:text-lg">
              {benefit}
            </motion.li>
          ))}
        </ul>

        <p className="text-base md:text-lg mb-4">
          Our team of experts is dedicated to helping you find the right policy that meets your unique needs. We understand that insurance can be complex, which is why we’re here to guide you every step of the way.
        </p>
        
        <p className="text-base md:text-lg mb-4">
          Contact us today to learn more about our general insurance solutions and how we can help you secure your future!
        </p>

        <div className="mt-4 flex flex-col md:flex-row items-center justify-center">
          <a href="tel:+912245120755" className="px-6 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500 transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default GeneralInsurance;
