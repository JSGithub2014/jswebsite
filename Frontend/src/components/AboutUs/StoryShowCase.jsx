import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';

const MemberDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const member = location.state?.member;

  if (!member) {
    return <div>No member data available.</div>; // Fallback
  }

  const handleBackClick = () => {
    navigate('/about-us/our-team'); 
  };

  return (
    <div className="flex flex-col items-center justify-center pt-24 bg-gray-500">
      <button
        className="mb-4 text-[rgb(255,102,0)] hover:underline hover:scale-125 transition-transform duration-200"
        onClick={handleBackClick}
      >
        &larr; Back
      </button>
      <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-3xl mx-auto"> {/* Increased max-w to 3xl */}
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-48 object-contain rounded-lg mb-4"
        />
        <h2 className="text-xl sm:text-2xl font-semibold text-[rgb(255,102,0)]">{member.name}</h2>
        <p className="text-base sm:text-lg font-medium text-gray-600">{member.role}</p>
        <p className="text-gray-800 text-sm sm:text-md mt-4 text-justify">{member.description || 'No description available.'}</p>
        <div className="mt-4">
          <h3 className="font-semibold text-gray-700">Connect with {member.name}:</h3>
          <div className="flex space-x-4 mt-2">
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:underline"
              >
                <FaLinkedin className="mr-1" /> LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
