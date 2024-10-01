import React from 'react';

const ScrollToTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button 
            onClick={handleScrollToTop} 
            className="fixed flex items-center justify-center text-2xl font-semibold bottom-4 right-4 bg-gradient-to-r from-[rgb(255,102,0)] to-[rgb(255,160,0)] text-white p-3 rounded-full w-12 h-12 shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl active:scale-95"
            aria-label="Scroll to top" // Accessibility enhancement
            title="Scroll to top" // Tooltip on hover
        >
            {/* Bolder Upward Arrow SVG */}
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-8 h-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2.5} // Make the stroke bolder
                aria-hidden="true" // Hides the SVG from screen readers
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 4v16m-8-8l8-8 8 8" 
                />
            </svg>
        </button>
    );
};

export default ScrollToTop;
