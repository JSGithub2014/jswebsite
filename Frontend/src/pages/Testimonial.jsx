// src/components/Testimonial.js
import React from 'react';
import TestimonialCard from '../components/TestimonialCards';

const testimonials = [
  {
    name: 'John Doe',
    position: 'CEO, Company A',
    quote: 'This service has transformed our business!',
  },
  {
    name: 'Jane Smith',
    position: 'Manager, Company B',
    quote: 'Incredible support and amazing results!',
  },
  {
    name: 'Alice Johnson',
    position: 'Founder, Company C',
    quote: 'Highly recommend this to anyone looking to grow!',
  },
];

function Testimonial() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-screen py-10 bg-[#fff4e6]"> {/* Full screen height */}
      <div className="md:w-1/2 px-6">
        <h1 className="text-4xl font-semibold mb-4 text-[#ff7c02]">What Our Clients Say</h1> {/* Orange heading */}
        <p className="text-gray-600">
          We take pride in the positive feedback from our clients. Here’s what they have to say about our services.
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center"> {/* Center testimonials vertically */}
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            position={testimonial.position}
            quote={testimonial.quote}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
