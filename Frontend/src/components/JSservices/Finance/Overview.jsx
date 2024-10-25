import React from 'react';
import { FaHome, FaMoneyBillWave, FaChartLine } from 'react-icons/fa'; // Importing icons

function Overview() {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg mt-5 border border-gray-300 transition-transform transform duration-300 md:hover:scale-105">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-6 heading-font tracking-wider" role="heading" aria-level="1">
        🌟 More Ideas for Your <span className='text-gray-800 heading-font'>Money</span> 💰
      </h1>
      <div className="flex flex-col items-center md:flex-row justify-around mb-6">
        <div className="flex flex-col items-center text-center mb-4 md:mb-0">
          <FaHome className="text-orange-600 text-3xl mb-2" />
          <h2 className="font-semibold text-lg md:text-xl">Dream Home</h2>
          <p className="text-sm md:text-gray-800">Buy or refinance your dream home 🏡.</p>
        </div>
        <div className="flex flex-col items-center text-center mb-4 md:mb-0">
          <FaMoneyBillWave className="text-orange-600 text-3xl mb-2" />
          <h2 className="font-semibold text-lg md:text-xl">Investment Options</h2>
          <p className="text-sm md:text-gray-800">Explore smart investment options 📈.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaChartLine className="text-orange-600 text-3xl mb-2" />
          <h2 className="font-semibold text-lg md:text-xl">Expert Guidance</h2>
          <p className="text-sm md:text-gray-800">Make informed financial decisions 🚀.</p>
        </div>
      </div>

      <p className="text-base md:text-lg text-gray-800 mb-6 leading-relaxed text-justify">
        With our expert guidance, you can make informed decisions that align with your financial goals. Let’s make your money work for you! 🚀
      </p>
      <p className="text-base md:text-lg text-gray-800 mb-6 leading-relaxed text-justify">
        Don’t hesitate to reach out for a consultation—together, we can unlock the potential of your financial future! 🔑✨
      </p>
      <p className="text-base md:text-lg text-gray-800 mb-6 leading-relaxed text-justify">
        Investing in your future has never been easier. Let's talk about how you can make the most of your hard-earned ₹! 💸
      </p>
    </div>
  );
}

export default Overview;
