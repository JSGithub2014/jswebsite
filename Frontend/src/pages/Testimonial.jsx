import React from 'react';
import TestimonialCard from '../components/TestimonialCards';
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
  {
    name: 'John Doe',
    position: 'CEO, Company A',
    quote: 'This service has transformed our business!',
    photo: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    name: 'Jane Smith',
    position: 'Manager, Company B',
    quote: 'Incredible support and amazing results!',
    photo: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    name: 'Alice Johnson',
    position: 'Founder, Company C',
    quote: 'Highly recommend this to anyone looking to grow!',
    photo: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

function Testimonial() {
  return (
    <div className="flex flex-col md:flex-row justify-between px-4 md:px-[5vw] items-center py-10 bg-[#fc7b0386] h-auto md:h-screen">
      <div className="md:w-1/2 px-6 mb-8 md:mb-0 flex flex-col justify-center">
        <RiDoubleQuotesL className='text-8xl text-zinc-500 mb-[2vw]' />
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-black">What Our <br /> Clients Say?</h1>
      </div>
      <div className="md:w-1/2 flex flex-col space-y-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            position={testimonial.position}
            quote={testimonial.quote}
            photo={testimonial.photo} // Pass the photo prop
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
