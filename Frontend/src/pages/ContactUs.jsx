import React, { useState } from 'react';
import contactShowcase from '../assets/contact-us.gif';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://jswebsite-y15h.vercel.app/api/contact', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        setStatus('Failed to send email.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setStatus('Failed to send email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h1 className="text-3xl md:text-5xl font-thin mb-6 text-center text-[rgb(255,102,0)] heading-font tracking-wider py-2 w-full">
        <span className='heading-font'>Contact</span>
        <span className='text-black heading-font tracking-wider'> Us</span>
      </h1>

      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        <img
          src={contactShowcase}
          alt="Illustration of contacting us"
          className="mb-8 md:mb-0 w-full md:w-1/2 rounded-lg"
          loading="lazy"
        />

        <div className="rounded-lg p-8 w-full md:w-1/2 bg-white shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
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
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                aria-required="true"
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className={`bg-[rgb(255,102,0)] ${loading ? 'opacity-50' : 'hover:bg-orange-600'} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {status && <p className="mt-4 text-green-500">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
