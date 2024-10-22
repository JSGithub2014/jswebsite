import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaShieldAlt, FaMoneyBillWave, FaHandHoldingHeart } from 'react-icons/fa';

const LifeInsurance = () => {
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
      <h2 className="text-4xl heading-font font-semibold tracking-wider text-[rgb(255,102,0)] mb-6">
        Comprehensive Life <span className='heading-font font-semibold tracking-wider text-black'>Insurance Solutions</span>
      </h2>
      
      <div className="w-5/6 flex flex-col items-start">
        <p className="text-lg mb-4">
          At J&S Group, we provide a range of life insurance products tailored to protect you and your loved ones. Our policies offer financial security during unforeseen circumstances, ensuring peace of mind.
        </p>

        <h3 className="text-2xl font-semibold text-[rgb(255,102,0)] mb-4 text-center w-full">
          👇 Our Life Insurance Coverage Includes 👇 
        </h3>
        
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 gap-6 mb-6 max-w-4xl">
            {[
              { icon: <FaHeartbeat />, title: "Term Life Insurance" },
              { icon: <FaShieldAlt />, title: "Whole Life Insurance" },
              { icon: <FaMoneyBillWave />, title: "Universal Life Insurance" },
              { icon: <FaHandHoldingHeart />, title: "Endowment Plans" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-2 text-[rgb(255,102,0)]">{item.icon}</div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-[rgb(255,102,0)] mb-4">Why Choose Our Life Insurance?</h3>
        
        <ul className="list-disc list-inside mb-6">
          {[
            "Financial security for your loved ones",
            "Flexible policy options to suit your needs",
            "Tax benefits on premiums paid",
            "Coverage for critical illnesses and disabilities",
            "Expert guidance to help you choose the right plan"
          ].map((benefit, index) => (
            <motion.li key={index} variants={fadeInVariants} whileHover={{ scale: 1.05 }}>
              {benefit}
            </motion.li>
          ))}
        </ul>

        <p className="text-lg mb-4">
          Our dedicated team of experts is here to help you navigate through various life insurance options and find the best plan tailored to your needs.
        </p>
        
        <p className="text-lg mb-4">
          Contact us today to learn more about our life insurance solutions and how we can help you secure your family's future!
        </p>

        <p className="mt-4">
          <a href="tel:+912245120755" className="px-6 py-2 bg-[rgb(255,102,0)] text-white rounded-full hover:bg-orange-600 transition duration-300">
            Call Now: +91 2245120755
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default LifeInsurance;
