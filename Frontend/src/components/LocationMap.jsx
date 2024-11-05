import React from 'react';

function LocationMap() {
  return (
    <div className='w-full h-[80vh] flex flex-col items-center '>
      {/* Subtle Orange Address Box */}
      <div className="relative flex justify-center w-full max-w-xl  text-black p-4 rounded-lg mb-5 transform transition-transform ">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-[rgb(255,102,0)] mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 17c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
            />
          </svg>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin text-center tracking-wider heading-font text-shadow"> <span className='text-[rgb(255,102,0)] heading-font'>Location</span> Address</h2>
        </div>
       
      </div>

      {/* Map iframe */}
      <div className='relative w-full h-full'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.8787586543474!2d72.88934345882566!3d19.118290732673582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c80f04f37535%3A0x5c19f51fed6e597!2sLodha%20Supremus%2C%20Saki%20Vihar%20Rd%2C%20Opposite%20Mtnl%20Off%2C%20Tunga%20Village%2C%20Chandivali%2C%20Powai%2C%20Mumbai%2C%20Maharashtra%20400072!5e0!3m2!1sen!2sin!4v1730722918276!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className='absolute top-0 left-0 w-full h-full'
        ></iframe>
      </div>
    </div>
  );
}

export default LocationMap;
