import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import whyUsImage from '../assets/why us.jpeg'; // Adjust the path as necessary

function WhyUs() {
  return (
    <main className='flex flex-col md:flex-row items-center min-h-screen px-4 md:px-24 w-full'>
      <div className='flex flex-col md:flex-row w-full justify-between items-center md:gap-32'> {/* Use gap only for medium screens and larger */}
        <div className='whyus-img md:w-1/2 mb-4 md:mb-0 md:scale-110'> {/* Scale image on larger screens */}
          <img src={whyUsImage} alt="Why choose us for your needs" className='object-cover w-full h-auto rounded-md' />
        </div>
        <div className='whyus-text w-full md:w-1/2 mt-4 md:mt-0'>
          <div className='flex flex-col space-y-4 p-4'>
            <h1 className='text-3xl md:text-5xl font-semibold'>Why Us?</h1> {/* Larger text for larger screens */}
            <div className='flex items-center'>
              <MdDone className='text-[#F3BA73]' />
              <p className='ml-2 text-base md:text-lg'>Proven Track Record of Success</p>
            </div>
            <div className='flex items-center'>
              <MdDone className='text-[#F3BA73]' />
              <p className='ml-2 text-base md:text-lg'>Tailored Solutions for Every Need</p>
            </div>
            <div className='flex items-center'>
              <MdDone className='text-[#F3BA73]' />
              <p className='ml-2 text-base md:text-lg'>Client-Centered Approach</p>
            </div>
            <div className='flex items-center'>
              <MdDone className='text-[#F3BA73]' />
              <p className='ml-2 text-base md:text-lg'>Long-Term Relationships</p>
            </div>
            <div>
              <a
                className='flex items-center text-[#F3BA73] transition duration-300 group'
                href=""
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
