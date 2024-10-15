import React, { useRef } from 'react';
import TestimonialCard from '../components/TestimonialCards';
import { RiDoubleQuotesL } from "react-icons/ri";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import img1 from '../assets/testimonial/testimonial-male.jpeg';
import img2 from '../assets/testimonial/testimonial-male-2.jpeg';
import img3 from '../assets/testimonial/testimonial-male-3.jpeg';
import img4 from '../assets/testimonial/testimonial-male-4.jpeg';
import img5 from '../assets/testimonial/testimonial-male-5.jpeg';
import img6 from '../assets/testimonial/testimonial-female-6.jpeg';
import img7 from '../assets/testimonial/testimonial-male-7.jpeg';


const testimonials = [
  {
    name: 'Nandkumar Pawar',
    position: 'Diamond Merchant',
    quote: "PASPL never quits, it is not in their blood, low ITR and low banking still a proud owner of 2 properties worth 8 crores. Loved to work with them.",
    photo: img1,
  },
  {
    name: 'Sharad Dedhia',
    position: 'Entrepreneur',
    quote: "Practice makes the man perfect yes; it is a great line which shows how good they are with their products otherwise I won't have got loan at the age of 65 years on my ITR. Wonderful Product knowledge.”",
    photo: img2,
  },
  {
    name: 'Hirji Jatrara',
    position: 'Entrepreneur',
    quote: "“I have seen the efforts and quickness at the same time. PASPL never like to stop for any reason and it is seen in their hard work. The loan amount provided was much higher than any other firm in the market.”",
    photo: img3,
  },
  // Add additional testimonials following the same structure
  {
    name: 'Sirtaj Shaikh',
    position: 'Chairman NGO',
    quote: "“Never lose hopes, as PASPL is still working on your file. A Home Loan of 2 crore on a total ITR of 10 lakhs. Yes, PASPL has succeeded in the same. Great Efforts.”",
    photo: img4, // Use different images as necessary
  },
  {
    name: 'Poonam Raut',
    position: 'Manager MNC',
    quote: "“The commitment is important than any other thing. As committed, I got a loan with lesser ROI as compared to other institutions and also got a discount in Processing Fees. Thank you PASPL.”",
    photo: img6,
  },
  {
    name: 'Dinesh Suthar',
    position: 'Entrepreneur',
    quote: "“What a doorstep service, even I m staying in Ahmedabad, my loan got sanctioned and disbursed from Mumbai and each time a person was coming to Ahmedabad from Mumbai for paperwork. Such a seriousness on their commitment. Great.”",
    photo: img5,
  },
  {
    name: 'Suresh Lohar',
    position: 'Interior Decorator',
    quote: "“Once with PASPL always with PASPL. They care for us and call us on timely basis asking for any issues with the repayments. These people even guided us in lockdown period for moratorium service. Now, PASPL is like our family member.”",
    photo: img7,
  },
  // Continue adding all other testimonials...
];

function Testimonial() {
  const scrollRef = useRef(null);

  // Function to scroll up
  const scrollUp = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: -100, behavior: 'smooth' });
    }
  };

  // Function to scroll down
  const scrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 100, behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col md:flex-row justify-between px-4 md:px-[5vw] items-center py-10 bg-[#fc7b0386]">
      <style>
        {`
          @font-face {
            font-family: 'Gendy';
            src: url('/assets/TTF/Gendy.ttf') format('truetype');
          }
          .heading-font {
            font-family: 'Gendy', sans-serif;
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgb(255, 102, 0);
            border-radius: 10px;
          }
        `}
      </style>

      <div className="md:w-1/2 px-6 mb-8 md:mb-0 flex flex-col justify-center">
        <RiDoubleQuotesL className='text-8xl text-zinc-500 mb-[2vw]' aria-hidden="true" />
        <h1 className="text-4xl md:text-6xl font-thin mb-4 text-black heading-font tracking-wider text-shadow" aria-label="What Our Clients Say">
          <span className='text-[rgb(255,102,0)] heading-font'>W</span>hat <span className='text-[rgb(255,102,0)] heading-font tracking-wider'>Our</span><br /> Clients Say?
        </h1>
      </div>

      <div className="md:w-1/2 h-96 relative">
        {/* Top scroll arrow */}
        <button 
          onClick={scrollUp} 
          className="absolute top-2 left-full transform -translate-x-[130%] z-10 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <FiArrowUp className="text-[rgb(255,102,0)]" size={24} />
        </button>

        <div ref={scrollRef} className="overflow-y-auto h-full w-full custom-scrollbar p-4 relative">
          <div className="flex flex-col space-y-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                position={testimonial.position}
                quote={testimonial.quote}
                photo={testimonial.photo}
              />
            ))}
          </div>
        </div>

        {/* Bottom scroll arrow */}
        <button 
          onClick={scrollDown} 
          className="absolute bottom-0 left-full transform -translate-x-[140%] z-10 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <FiArrowDown className="text-[rgb(255,102,0)]" size={24} />
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
