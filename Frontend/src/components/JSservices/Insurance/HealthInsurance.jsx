import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaShieldAlt, FaUserNurse, FaHospital, FaCarCrash } from 'react-icons/fa';

const HealthInsurance = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [visibleElements, setVisibleElements] = useState(Array(10).fill(false)); // Adjust size based on number of animated elements

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
    <section className="w-full flex flex-col items-center my-10 bg-gray-50 p-6 rounded-lg shadow-lg" aria-labelledby="health-insurance-title">
      <header className="mb-6">
        <h2 className="text-4xl heading-font font-semibold tracking-wider text-[rgb(255,102,0)]">
          Comprehensive Health <span className='heading-font font-semibold tracking-wider text-black'>Insurance Solutions</span>
        </h2>
      </header>
      
      <article className="w-5/6 flex flex-col items-start">
        <motion.p
          className="fade-in text-lg mb-4"
          initial="hidden"
          animate={visibleElements[0] ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          At J&S Group, we offer a range of health insurance products designed to provide you and your family with essential coverage and peace of mind during medical emergencies.
        </motion.p>

        <motion.h3
          className="fade-in text-2xl font-semibold text-[rgb(255,102,0)] mb-4 text-center w-full"
          initial="hidden"
          animate={visibleElements[1] ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          👇 Our Health Insurance Coverage Includes 👇 
        </motion.h3>
        
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
                className="fade-in flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                data-index={index + 2} // Set index for visibility tracking
                initial="hidden"
                animate={visibleElements[index + 2] ? "visible" : "hidden"}
                variants={fadeInVariants}
              >
                <div className="text-4xl mb-2 text-[rgb(255,102,0)]">{item.icon}</div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.h3
          className="fade-in text-2xl font-semibold text-[rgb(255,102,0)] mb-4"
          initial="hidden"
          animate={visibleElements[6] ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          Why Choose Our Health Insurance?
        </motion.h3>
        
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
            <motion.li
              key={index}
              className="fade-in text-base md:text-lg"
              data-index={7 + index} // Set index for visibility tracking
              initial="hidden"
              animate={visibleElements[7 + index] ? "visible" : "hidden"}
              variants={fadeInVariants}
            >
              {benefit}
            </motion.li>
          ))}
        </ul>

        <motion.p
          className="fade-in text-lg mb-4"
          initial="hidden"
          animate={visibleElements[15] ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          Our dedicated team of health insurance specialists is here to help you find the right plan tailored to your needs and budget.
        </motion.p>
        
        <motion.p
          className="fade-in text-lg mb-4"
          initial="hidden"
          animate={visibleElements[16] ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          Contact us today to learn more about our health insurance solutions and how we can help you safeguard your health!
        </motion.p>

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
