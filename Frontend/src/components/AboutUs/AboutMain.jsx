import React from 'react';
import meetOurTeam from '../../assets/ourTeam/meet-our-team.png';

function AboutMain() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, // Adjust this value based on where you want to scroll
      behavior: 'smooth'
    });
  };

  return (
    <div className='flex flex-col md:flex-row w-full h-[calc(100vh-60px)]'>
      <div className='relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center bg-cover bg-center'>
        <img src={meetOurTeam} alt="Meet Our Team" className='max-w-full max-h-full object-contain mt-28' />
      </div>
      <div className='flex flex-col justify-center items-center w-full md:w-1/2 p-6 md:p-10 font-semibold text-center'>
        <h1 className='text-3xl md:text-5xl font-bold mb-4 text-[rgb(255,102,0)] mt-8'>Welcome to Our Team</h1>
        <p className='text-md md:text-lg text-gray-600 mb-8'>
          Meet the talented <br />
          individuals driving innovation <br />
          and excellence at our <br />
          company.
        </p>
        <div className='flex flex-col items-center justify-center h-1/3 mt-8'>
          <p className='text-gray-400 mb-2 text-xl cursor-pointer' onClick={handleScroll}>
            Scroll down to explore more
          </p>
          <div className='animate-bounce cursor-pointer' onClick={handleScroll}>
            <svg className='w-10 h-10 text-[rgb(255,102,0)] rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 5.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 3z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M10 10a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 12.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 10z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div className="h-screen bg-gray-200">
        {/* Additional content can go here */}
      </div>
    </div>
  );
}

export default AboutMain;
