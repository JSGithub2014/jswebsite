import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800'>
      <h1 className='text-[8rem] text-[rgb(255,102,0)] font-bold'>404</h1>
      <h2 className='text-3xl font-semibold mb-4'>Oops! Page Not Found</h2>
      <p className='text-lg mb-6'>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to='/'
        className='px-6 py-3 bg-[rgb(255,102,0)] text-white rounded-lg transition duration-300 hover:bg-opacity-80'
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
