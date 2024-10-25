import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaShieldAlt, FaMoneyBillWave, FaHandHoldingHeart } from 'react-icons/fa';

const LifeInsurance = () => {
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
      aria-labelledby="life-insurance-title"
    >
      <motion.h2
        id="life-insurance-title"
        className="text-3xl md:text-4xl heading-font font-semibold tracking-wider text-[rgb(255,102,0)] mb-6 fade-in"
        initial="hidden"
        animate={visibleElements[0] ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        Comprehensive Life <span className='heading-font font-semibold tracking-wider text-black'>Insurance Solutions</span>
      </motion.h2>

      <div className="w-5/6 flex flex-col items-start">
        <motion.p
          className="text-base md:text-lg mb-4 fade-in"
          initial="hidden"
          animate={visibleElements[1] ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ delay: 0.1 }}
        >
          At J&S Group, we provide a range of life insurance products tailored to protect you and your loved ones. Our policies offer financial security during unforeseen circumstances, ensuring peace of mind.
        </motion.p>

        <motion.h3
          className="text-xl md:text-2xl font-semibold text-[rgb(255,102,0)] mb-4 text-center w-full fade-in"
          initial="hidden"
          animate={visibleElements[2] ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ delay: 0.2 }}
        >
          👇 Our Life Insurance Coverage Includes 👇 
        </motion.h3>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 max-w-4xl">
            {[
              { icon: <FaHeartbeat aria-hidden="true" />, title: "Term Life Insurance" },
              { icon: <FaShieldAlt aria-hidden="true" />, title: "Whole Life Insurance" },
              { icon: <FaMoneyBillWave aria-hidden="true" />, title: "Universal Life Insurance" },
              { icon: <FaHandHoldingHeart aria-hidden="true" />, title: "Endowment Plans" },
            ].map((item, index) => (
              <motion.article
                key={index}
                className="fade-in flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                data-index={index + 3} // Set index for visibility tracking
                initial="hidden"
                animate={visibleElements[index + 3] ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{ delay: 0.3 + index * 0.1 }} // Staggered delay
              >
                <div className="text-4xl mb-2 text-[rgb(255,102,0)]">{item.icon}</div>
                <h4 className="text-base md:text-lg font-semibold">{item.title}</h4>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.h3
          className="text-xl md:text-2xl font-semibold text-[rgb(255,102,0)] mb-4 fade-in"
          initial="hidden"
          animate={visibleElements[7] ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ delay: 0.5 }}
        >
          Why Choose Our Life Insurance?
        </motion.h3>

        <ul className="list-disc list-inside mb-6">
          {[
            "Financial security for your loved ones",
            "Flexible policy options to suit your needs",
            "Tax benefits on premiums paid",
            "Coverage for critical illnesses and disabilities",
            "Expert guidance to help you choose the right plan"
          ].map((benefit, index) => (
            <motion.li
              key={index}
              className="fade-in text-base md:text-lg"
              data-index={8 + index} // Set index for visibility tracking
              initial="hidden"
              animate={visibleElements[8 + index] ? "visible" : "hidden"}
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
          animate={visibleElements[13] ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ delay: 1.0 }}
        >
          Our dedicated team of experts is here to help you navigate through various life insurance options and find the best plan tailored to your needs.
        </motion.p>

        <motion.p
          className="text-base md:text-lg mb-4 fade-in"
          initial="hidden"
          animate={visibleElements[14] ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ delay: 1.1 }}
        >
          Contact us today to learn more about our life insurance solutions and how we can help you secure your family's future!
        </motion.p>

        <p className="mt-4">
          <a href="tel:+918012091209" className="px-6 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500 transition duration-300">
            Contact Us
          </a>
        </p>
      </div>
    </section>
  );
};

export default LifeInsurance;
