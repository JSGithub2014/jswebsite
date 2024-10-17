import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import OurStrength from '../components/OurStrength';

const OurStrengths = () => {
  const strengths = [
    {
      title: 'Governance',
      description: 'We ensure transparency, accountability, and strong leadership to guide you through every decision.',
      icon: '🛡️',
    },
    {
      title: 'Knowledge',
      description: 'Our deep expertise across industries ensures we provide accurate, insightful advice to all clients.',
      icon: '📚',
    },
    {
      title: 'Structure',
      description: 'We develop well-defined frameworks to keep processes efficient and organized, ensuring clarity.',
      icon: '🏗️',
    },
    {
      title: 'Time Bound',
      description: 'Our solutions are designed with precision, adhering to strict timelines for timely project delivery.',
      icon: '⏳',
    },
    {
      title: 'Cost Effective',
      description: 'We optimize costs while maximizing value, ensuring you get the best returns on your investments.',
      icon: '💰',
    },
    {
      title: 'Innovation',
      description: 'We leverage cutting-edge technology and creative thinking to provide innovative solutions that drive success.',
      icon: '🚀',
    },
  ];

  return (
    <section className="bg-gradient-to-b px-4 md:px-8 lg:px-16 w-full mb-10">
      <div className="-mx-4 md:-mx-8 lg:-mx-16">
        <h1 className="text-3xl md:text-5xl font-thin text-gray-900 mb-8 text-center heading-font tracking-wider py-4 my-5 text-shadow">
          The <span className="text-[rgb(255,102,0)] heading-font tracking-wider">Pillars</span> of <span className="text-[rgb(255,102,0)] heading-font">Success</span>
        </h1>
      </div>
      <OurStrength />
      <div className="container mx-auto my-4">
        <hr className="border-t border-zinc-300 opacity-70 h-10" />
      </div>

      <div className="container mx-auto text-center mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
              role="article"
              aria-labelledby={`strength-title-${index}`}
              aria-describedby={`strength-desc-${index}`}
              initial={{ opacity: 0, y: 10 }} // Reduced y offset for smoother entry
              whileInView={{ opacity: 1, y: 0 }} // Animate into view
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered transition
              viewport={{ once: true }} // Change to once to animate only on first view
            >
              <div className="text-4xl" aria-label={strength.title}>
                {strength.icon}
              </div>
              <h2 id={`strength-title-${index}`} className="text-lg md:text-xl font-bold text-gray-800 mb-5">{strength.title}</h2>
              <p id={`strength-desc-${index}`} className="text-sm md:text-base text-gray-600">{strength.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStrengths;
