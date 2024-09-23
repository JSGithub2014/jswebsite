import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { MdDone } from "react-icons/md";



function WhyUs() {
  return (
    <React.Fragment>
        <main className='w-full h-screen flex justify-evenly  items-center'>
        <div>
            <img src="../src/assets/why us.jpeg" alt="" />
        </div>
        <div>
            <h1 className='text-4xl font-semibold'>Why Us?</h1>


            
            <p> <MdDone className='text-[#F3BA73]'/> Proven Track Record of Success</p>
            <p> <MdDone className='text-[#F3BA73]'/> Tailored Solutions for Every Need</p>
            <p> <MdDone className='text-[#F3BA73]'/> Client-Centered Approach</p>
            <p> <MdDone className='text-[#F3BA73]'/> Multi-Language Babysitters for International Families</p>
            <a className='text-[#F3BA73]' href="">Learn More <FaArrowRight /></a>
        </div>
        </main>
       
    </React.Fragment>
  )
}

export default WhyUs