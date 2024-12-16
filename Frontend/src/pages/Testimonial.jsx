import React, { useRef, useState, useEffect } from 'react';
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
import TestimonialReview from '../components/TestimonialReview';

const testimonials = [
  {
    name: 'Nandkumar Pawar',
    position: 'Diamond Merchant',
    quote: "PASPL never quits, it is not in their blood, low ITR and low banking still a proud owner of 2 properties worth 8 crores. Loved to work with them.",
    photo: img1,
    rating: 5,
  },
  {
    name: 'Sharad Dedhia',
    position: 'Entrepreneur',
    quote: "Practice makes the man perfect yes; it is a great line which shows how good they are with their products otherwise I won't have got loan at the age of 65 years on my ITR. Wonderful Product knowledge.",
    photo: img2,
    rating: 4,
  },
  {
    name: 'Hirji Jatrara',
    position: 'Entrepreneur',
    quote: "I have seen the efforts and quickness at the same time. PASPL never like to stop for any reason and it is seen in their hard work. The loan amount provided was much higher than any other firm in the market.",
    photo: img3,
    rating: 5,
  },
  {
    name: 'Sirtaj Shaikh',
    position: 'Chairman NGO',
    quote: "Never lose hopes, as PASPL is still working on your file. A Home Loan of 2 crore on a total ITR of 10 lakhs. Yes, PASPL has succeeded in the same. Great Efforts.",
    photo: img4,
    rating: 5,
  },
  {
    name: 'Poonam Raut',
    position: 'Manager MNC',
    quote: "The commitment is important than any other thing. As committed, I got a loan with lesser ROI as compared to other institutions and also got a discount in Processing Fees. Thank you PASPL.",
    photo: img6,
    rating: 4,
  },
  {
    name: 'Dinesh Suthar',
    position: 'Entrepreneur',
    quote: "What a doorstep service, even I m staying in Ahmedabad, my loan got sanctioned and disbursed from Mumbai and each time a person was coming to Ahmedabad from Mumbai for paperwork. Such a seriousness on their commitment. Great.",
    photo: img5,
    rating: 5,
  },
  {
    name: 'Suresh Lohar',
    position: 'Interior Decorator',
    quote: "Once with PASPL always with PASPL. They care for us and call us on timely basis asking for any issues with the repayments. These people even guided us in lockdown period for moratorium service. Now, PASPL is like our family member.",
    photo: img7,
    rating: 5,
  },
];

const Testimonial = () => {
  const [acceptedReviews, setAcceptedReviews] = useState([]);
  const scrollRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Fetch accepted reviews from the server (Admin's accepted reviews)
    fetch('http://localhost:3000/api/review/all') // Change URL to fetch accepted reviews
      .then((response) => response.json())
      .then((data) => {
        const accepted = data.reviews.filter((review) => review.status === 'accepted');
        setAcceptedReviews(accepted);
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });

    // Auto scroll functionality
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

        if (scrollTop + clientHeight >= scrollHeight) {
          scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ top: 200, behavior: 'smooth' });
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const scrollUp = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: -100, behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 100, behavior: 'smooth' });
    }
  };

  // Handle submitting new review
  const handleSubmit = async (newReview) => {
    try {
      const response = await fetch('https://jswebsite-ocj7.vercel.app/api/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
      });

      if (response.ok) {
        // Optionally, refresh testimonials or show a success message
        setModalOpen(false);
      } else {
        console.error("Failed to submit review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row justify-between px-4 md:px-[5vw] items-center py-10 bg-[#fc7b0386]">
      <div className="md:w-1/2 px-6 mb-8 md:mb-0 flex flex-col justify-center">
        <RiDoubleQuotesL className="text-8xl text-zinc-500 mb-[2vw]" aria-hidden="true" />
        <h1 className="text-4xl md:text-6xl font-thin mb-4 text-black heading-font tracking-wider text-shadow" aria-label="What Our Clients Say">
          <span className="text-[rgb(255,102,0)] heading-font">W</span>hat <span className="text-[rgb(255,102,0)] heading-font tracking-wider">Our</span><br /> Clients Say?
        </h1>
        <button
          onClick={() => setModalOpen(true)}
          className="mt-4 w-1/2 sm:w-1/3 bg-[rgb(255,102,0)] text-white px-3 py-1 rounded text-sm sm:text-base"
          aria-label="Add Review"
        >
          Add Review
        </button>
      </div>

      <div className="md:w-1/2 h-96 relative">
        <button
          onClick={scrollUp}
          className="absolute top-2 left-full transform -translate-x-[130%] z-10 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200"
          aria-label="Scroll up"
        >
          <FiArrowUp className="text-[rgb(255,102,0)]" size={24} />
        </button>

        <div ref={scrollRef} className="overflow-y-auto h-full w-full custom-scrollbar p-4 relative">
          <div className="flex flex-col space-y-6">
            {/* Display accepted reviews */}
            {acceptedReviews.map((review, index) => (
              <TestimonialCard
                key={index}
                name={review.name}
                position={review.position}
                quote={review.quote}
                photo={review.profileImage || img1} // Fallback to img1 if no profileImage
                rating={review.rating}
              />
            ))}

            {/* Display static testimonials */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                position={testimonial.position}
                quote={testimonial.quote}
                photo={testimonial.photo}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>

        <button
          onClick={scrollDown}
          className="absolute bottom-0 left-full transform -translate-x-[140%] z-10 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200"
          aria-label="Scroll down"
        >
          <FiArrowDown className="text-[rgb(255,102,0)]" size={24} />
        </button>
      </div>

      {/* Modal to add a review */}
      <TestimonialReview
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default Testimonial;
