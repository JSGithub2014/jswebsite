import React, { useState } from 'react';
import contactShowcase from '../assets/contact-us.gif';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const response = await fetch('https://jswebsite-ocj7.vercel.app/api/contact', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            toast.success('Email sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } else {
            const errorData = await response.json();
            console.error('Error response:', errorData);
            toast.error('Failed to send email.');
        }
    } catch (error) {
        console.error('Fetch error:', error);
        toast.error('Failed to send email.');
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full md:h-screen py-10">
      {/* Heading Section */}
      <h1 className="text-3xl md:text-5xl font-thin mb-6 text-center text-[rgb(255,102,0)] heading-font tracking-wider py-2 w-full text-shadow">
        <span className="heading-font">Contact</span>
        <span className="text-black heading-font tracking-wider"> Us</span>
      </h1>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row w-full h-full max-w-6xl mx-auto gap-6">
        {/* Left Section with GIF and Map */}
        <div className="w-full md:w-1/2 h-full flex flex-col">
          {/* GIF Section (Top Half) */}
          <div className="w-full h-1/2 flex justify-center items-center mb-4">
            <img
              src={contactShowcase}
              alt="Illustration of contacting us"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Map Section (Bottom Half) */}
          <div className="w-full h-1/2 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.8787586543474!2d72.88934345882566!3d19.118290732673582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c80f04f37535%3A0x5c19f51fed6e597!2sLodha%20Supremus%2C%20Saki%20Vihar%20Rd%2C%20Opposite%20Mtnl%20Off%2C%20Tunga%20Village%2C%20Chandivali%2C%20Powai%2C%20Mumbai%2C%20Maharashtra%20400072!5e0!3m2!1sen!2sin!4v1730722918276!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Right Section with Contact Form */}
        <div className="w-full md:w-1/2 h-full overflow-y-auto rounded-lg p-8 bg-white shadow-md">
          <form onSubmit={handleSubmit} className="h-full flex flex-col">
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
              ></textarea>
            </div>

            <div className="flex items-center justify-between md:mt-auto ">
              <button
                type="submit"
                className={`bg-[rgb(255,102,0)] ${loading ? 'opacity-50' : 'hover:bg-orange-600'} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer /> {/* Add ToastContainer to display toasts */}
    </div>
  );
};

export default ContactUs;
