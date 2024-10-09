import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import whyUsImage from '../assets/why us.jpeg'; // Adjust the path as necessary

function WhyUs() {
  return (
    <main className='flex flex-col md:flex-row items-center justify-center min-h-[50vh] px-4 md:px-24 w-full'>
      <style>
        {`
          @font-face {
            font-family: 'Gendy';
            src: url('/assets/TTF/Gendy.ttf') format('truetype');
          }
          .heading-font {
            font-family: 'Gendy', sans-serif;
          }
        `}
      </style>

      <div className='flex flex-col md:flex-row w-full max-w-7xl mx-auto justify-center items-stretch md:gap-32'> {/* Changed items-center to items-stretch */}
        <div className='whyus-img md:w-1/2 mb-4 md:mb-0 flex justify-center'> 
        <img
    src={whyUsImage}
    alt="Why choose us for your needs"
    className='object-cover w-full h-full rounded-md' 
/>
        </div>

        <div className='whyus-text w-full md:w-1/2 mt-4 md:mt-0 flex justify-center items-center'> {/* Added items-center */}
          <div className='flex flex-col space-y-4 p-4'>
            <h1 className='text-3xl md:text-5xl font-thin heading-font tracking-wider text-center text-shadow'>
              <span className='tracking-wider heading-font'>W</span>hy <span className='text-[rgb(255,102,0)]'>Us</span>?
            </h1>
            {[ 
              'Proven Track Record of Success',
              'Tailored Solutions for Every Need',
              'Client-Centered Approach',
              'Long-Term Relationships',
            ].map((item, index) => (
              <div key={index} className='flex items-center'>
                <MdDone className='text-[#F3BA73]' />
                <p className='ml-2 text-base md:text-lg'>{item}</p>
              </div>
            ))}
            <div className='flex justify-center'>
              <a
                className='flex items-center text-[#F3BA73] transition duration-300 group'
                href="#learn-more" 
              >
                <span className='text-base md:text-lg'>Learn More</span>
                <span className='ml-2 flex items-center justify-center w-8 h-8 border-2 border-transparent rounded-full transition duration-300 transform group-hover:border-[#F3BA73] group-hover:bg-[#F3BA73] group-hover:scale-110'>
                  <FaArrowRight className='text-[#F3BA73] transition duration-300 transform group-hover:text-white' />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WhyUs;
