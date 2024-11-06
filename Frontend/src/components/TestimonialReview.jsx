import React, { useState, useEffect, useRef } from 'react';
import { MdPerson, MdEmail } from 'react-icons/md';
import { HiPhone } from 'react-icons/hi';
import { FaBriefcase } from 'react-icons/fa';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const TestimonialReview = ({ isOpen, onClose, onSubmit }) => {
  const [newReview, setNewReview] = useState({
    name: '',
    position: '',
    quote: '',
    email: '',
    mobile: ''
  });
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit({ ...newReview, rating });
      setIsSubmitted(true);
      setNewReview({ name: '', position: '', quote: '', email: '', mobile: '' });
    } catch (error) {
      console.error("Submission failed:", error);
      // Handle error (e.g., show a message to the user)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-300 z-50 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ transform: isOpen ? 'translateY(0)' : 'translateY(-100%)' }}>
      <div ref={formRef} className="bg-white p-4 rounded-lg shadow-lg w-11/12 sm:w-96 lg:w-[700px] xl:w-[900px]" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-3">Submit Your Review</h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex items-center border rounded p-2">
              <MdPerson className="text-gray-500 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={newReview.name}
                onChange={handleInputChange}
                required
                className="border-0 focus:outline-none w-full text-sm"
              />
            </div>
            <div className="flex items-center border rounded p-2">
              <MdEmail className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newReview.email}
                onChange={handleInputChange}
                required
                className="border-0 focus:outline-none w-full text-sm"
              />
            </div>
            <div className="flex items-center border rounded p-2">
              <HiPhone className="text-gray-500 mr-2" />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={newReview.mobile}
                onChange={handleInputChange}
                required
                className="border-0 focus:outline-none w-full text-sm"
              />
            </div>
            <div className="flex items-center border rounded p-2">
              <FaBriefcase className="text-gray-500 mr-2" />
              <input
                type="text"
                name="position"
                placeholder="Your Profession"
                value={newReview.position}
                onChange={handleInputChange}
                required
                className="border-0 focus:outline-none w-full text-sm"
              />
            </div>

            <div className="flex items-center mb-3">
              <span className="mr-2 text-sm">Rate Your Experience:</span>
              {[...Array(5)].map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setRating(index + 1)}
                  className="focus:outline-none"
                  aria-label={`Rate ${index + 1} star`}
                >
                  {index < rating ? (
                    <AiFillStar className="text-yellow-500" size={20} />
                  ) : (
                    <AiOutlineStar className="text-gray-400" size={20} />
                  )}
                </button>
              ))}
            </div>

            <textarea
              name="quote"
              placeholder="Enter your Review"
              value={newReview.quote}
              onChange={handleInputChange}
              required
              className="border p-2 w-full rounded h-20 text-sm"
            />
            <button
              type="submit"
              className="bg-[rgb(255,102,0)] text-white rounded py-2 px-5 text-sm"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="mb-2 text-sm">Review submitted successfully!</p>
            <button onClick={onClose} className="bg-[rgb(255,102,0)] text-white px-3 py-1 rounded text-sm">Close</button>
          </div>
        )}
        <button onClick={onClose} className="mt-2 text-gray-500 text-sm">Cancel</button>
      </div>
    </div>
  );
};

export default TestimonialReview;
