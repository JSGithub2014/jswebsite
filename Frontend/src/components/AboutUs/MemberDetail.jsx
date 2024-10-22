import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';

const MemberDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const member = location.state?.member;

  if (!member) {
    return <div>No member data available.</div>;
  }

  const handleBackClick = () => {
    navigate('/about-us/our-team'); 
  };

  // Function to style the first word of the name
  const styledName = (name) => {
    if (!name) return '';
    const words = name.split(' ');
    return (
      <span>
        <span style={{ color: 'rgb(255,102,0)' }}>{words[0]} </span>
        {words.slice(1).join(' ')}
      </span>
    );
  };

  return (
    <section className="flex flex-col items-center justify-center pt-20 p-4 h-screen bg-gray-100">
      <button
        className="mb-4 text-[rgb(255,102,0)] hover:underline hover:scale-125 transition-transform duration-200"
        onClick={handleBackClick}
        aria-label="Go back to team page" 
      >
        &larr; Back
      </button>
      <article className="bg-white rounded-lg shadow-lg w-full max-w-3xl mx-auto flex flex-col md:flex-row p-6">
        <div className="flex justify-center items-center md:w-1/2 mb-4 md:mb-0">
          <img
            src={member.image}
            alt={`Image of ${member.name}`} // Descriptive alt text
            className="h-96 w-auto object-contain rounded-xl" 
          />
        </div>
        <div className="flex flex-col justify-center md:w-1/2 md:ml-4">
          <h2 className="text-xl sm:text-2xl font-semibold">
            {styledName(member.name)} {/* Apply styled name function */}
          </h2>
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
                  aria-label={`Connect with ${member.name} on LinkedIn`} // Accessible label
                >
                  <FaLinkedin className="mr-1" /> LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default MemberDetail;
