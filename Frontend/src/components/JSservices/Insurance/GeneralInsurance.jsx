import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaCar, FaPlane, FaShieldAlt, FaBriefcase, FaUserShield } from 'react-icons/fa';

const GeneralInsurance = () => {
  const [visibleElements, setVisibleElements] = useState(Array(10).fill(false)); // Adjust size based on number of animated elements
  const sectionRef = useRef(null);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const observeElement = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Number(entry.target.dataset.index);
        setVisibleElements(prev => {
          const newVisibleElements = [...prev];
          newVisibleElements[index] = true;
          return newVisibleElements;
        });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observeElement, {
      threshold: 0.2 // Trigger when 20% of the element is in view
    });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
      element.dataset.index = index; // Store index to identify which element is being observed
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <section
      className="w-full flex flex-col items-center my-10 bg-gray-50 p-6 rounded-lg shadow-lg"
      ref={sectionRef}
      aria-labelledby="general-insurance-title"
    >
      <motion.h2
        id="general-insurance-title"
        className="text-3xl md:text-4xl heading-font font-semibold tracking-wider text-[rgb(255,102,0)] mb-6 fade-in"
        initial="hidden"
        animate={visibleElements[0] ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        Comprehensive General <span className='heading-font font-semibold tracking-wider text-black'>Insurance Solutions</span>
      </motion.h2>

      <div className="w-11/12 md:w-5/6 flex flex-col items-start">
        <motion.p
          className="text-base md:text-lg mb-4 fade-in"
          initial="hidden"
          animate={visibleElements[1] ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ delay: 0.1 }}
        >
          At J&S Group, we offer a complete range of general insurance products designed to protect you from various risks and damages. Our policies cover all aspects of general insurance to ensure you and your assets are fully safeguarded.
        </motion.p>

        <motion.h3
          className="text-xl md:text-2xl font-semibold text-[rgb(255,102,0)] mb-4 text-center w-full fade-in"
          initial="hidden"
          animate={visibleElements[2] ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ delay: 0.2 }}
        >
          👇 Our General Insurance Coverage Includes 👇 
        </motion.h3>

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
                className="fade-in flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                data-index={index + 3} // Set index for visibility tracking
                initial="hidden"
                animate={visibleElements[index + 3] ? "visible" : "hidden"}
                variants={fadeInVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: 0.3 + index * 0.1 }} // Staggered delay
              >
                <div className="text-4xl mb-2 text-[rgb(255,102,0)]">{item.icon}</div>
                <h4 className="text-base md:text-lg font-semibold">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.h3
          className="text-xl md:text-2xl font-semibold text-[rgb(255,102,0)] mb-4 fade-in"
          initial="hidden"
          animate={visibleElements[9] ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ delay: 0.5 }}
        >
          Why Choose Our General Insurance?
        </motion.h3>

        <ul className="list-disc list-inside mb-6">
          {[
            "Comprehensive coverage against financial losses",
            "Peace of mind knowing you’re protected",
            "Access to a network of quality healthcare services (for health-related insurance)",
            "Legal protection to shield you from liabilities",
            "Robust asset protection for your property and vehicles"
          ].map((benefit, index) => (
            <motion.li
              key={index}
              className="fade-in text-base md:text-lg"
              data-index={10 + index} // Set index for visibility tracking
              initial="hidden"
              animate={visibleElements[10 + index] ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              {benefit}
            </motion.li>
          ))}
        </ul>

        <motion.p
          className="text-base md:text-lg mb-4 fade-in"
          initial="hidden"
          animate={visibleElements[15] ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ delay: 1.0 }}
        >
          Our team of experts is dedicated to helping you find the right policy that meets your unique needs. We understand that insurance can be complex, which is why we’re here to guide you every step of the way.
        </motion.p>

        <motion.p
          className="text-base md:text-lg mb-4 fade-in"
          initial="hidden"
          animate={visibleElements[16] ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ delay: 1.1 }}
        >
          Contact us today to learn more about our general insurance solutions and how we can help you secure your future!
        </motion.p>

        <div className="mt-4 flex flex-col md:flex-row items-center justify-center">
          <a href="tel:+918012091209" className="px-6 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500 transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default GeneralInsurance;
