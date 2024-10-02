import React from 'react';
import contactShowcase from '../assets/contact-us.gif';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl md:text-5xl font-thin mb-6 text-center text-[rgb(255,102,0)] heading-font tracking-wider bg-gradient-to-r from-yellow-400 to-orange-400 py-3 w-full">
        <span>Contact</span>
        <span className='text-black heading-font tracking-wider'> Us</span>
      </h1>

      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        <img
          src={contactShowcase}
          alt="Illustration of contacting us"
          className="mb-8 md:mb-0 w-full md:w-1/2 rounded-lg"
          loading="lazy" // Improve SEO by lazy loading the image
        />

        <div className="rounded-lg p-8 w-full md:w-1/2 bg-white shadow-md">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                aria-required="true"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                aria-required="true"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                aria-required="true"
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[rgb(255,102,0)] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
