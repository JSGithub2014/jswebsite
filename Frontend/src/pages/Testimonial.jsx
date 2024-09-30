import React from 'react';
import TestimonialCard from '../components/TestimonialCards';
import { RiDoubleQuotesL } from "react-icons/ri";
import img1 from '../assets/testimonial-male.jpeg'; 
import img2 from '../assets/testimonial-male-2.jpeg'; 
import img3 from '../assets/testimonial-male-3.jpeg'; 

const testimonials = [
  {
    name: 'Sharad Dedhia',
    position: 'Client',
    quote: "“Practice makes the man perfect yes; it is a great line which shows how good they are with their products otherwise I won't have got loan at the age of 65 years on my ITR. Wonderful Product knowledge.”",
    photo: img1,
  },
  {
    name: 'Dinesh Suthar',
    position: 'Old Member',
    quote: '“What a doorstep service, even I m staying in Ahmedabad, my loan got sanctioned and disbursed from Mumbai and each time a person was coming to Ahmedabad from Mumbai for paperwork. Such a seriousness on their commitment. Great.”',
    photo: img2,
  },
  {
    name: 'Navnath Ghadge',
    position: 'Client',
    quote: '“Good with the services, will rate 5 of 5 but, there is a compulsion of taking the insurance and they say “it is mandatory”. Impress with the work and please make some changes in your policies as very few are only interested in insurance.”',
    photo: img3,
  },
];

function Testimonial() {
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
                `}
            </style>

      <div className="md:w-1/2 px-6 mb-8 md:mb-0 flex flex-col justify-center">
        <RiDoubleQuotesL className='text-8xl text-zinc-500 mb-[2vw]' aria-hidden="true" />
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-black heading-font tracking-wider" aria-label="What Our Clients Say">
          <span className='font-bold  text-[rgb(255,102,0)] heading-font'>W</span>hat <span className='font-semibold  text-[rgb(255,102,0)] heading-font tracking-wider'>Our</span><br /> Clients Say?
        </h1>
      </div>
      <div className="md:w-1/2 h-96 overflow-y-auto custom-scrollbar"> 
        <div className="flex flex-col space-y-6 p-4">
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
    </section>
  );
}

export default Testimonial;
