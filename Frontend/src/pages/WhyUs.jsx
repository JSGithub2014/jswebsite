import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { MdDone } from "react-icons/md";

function WhyUs() {
  return (
    <React.Fragment>
      <main className='w-full h-screen flex justify-evenly items-center'>
        <div>
          <img src="../src/assets/why us.jpeg" alt="Why Us" />
        </div>
        <div className='flex flex-col space-y-4'>
          <h1 className='text-4xl font-semibold'>Why Us?</h1>
          <div className='flex items-center'>
            <MdDone className='text-[#F3BA73]' />
            <p className='ml-2'>Proven Track Record of Success</p>
          </div>
          <div className='flex items-center'>
            <MdDone className='text-[#F3BA73]' />
            <p className='ml-2'>Tailored Solutions for Every Need</p>
          </div>
          <div className='flex items-center'>
            <MdDone className='text-[#F3BA73]' />
            <p className='ml-2'>Client-Centered Approach</p>
          </div>
          <div className='flex items-center'>
            <MdDone className='text-[#F3BA73]' />
            <p className='ml-2'>Multi-Language Babysitters for International Families</p>
          </div>
          <div>
            <a
              className='flex items-center text-[#F3BA73] transition duration-300 group'
              href=""
            >
              <span>Learn More</span>
              <span className='ml-2 flex items-center justify-center w-8 h-8 border-2 border-transparent rounded-full transition duration-300 transform group-hover:border-[#F3BA73] group-hover:bg-[#F3BA73] group-hover:scale-110'>
                <FaArrowRight className='text-[#F3BA73] transition duration-300 transform group-hover:text-white' />
              </span>
            </a>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default WhyUs;
