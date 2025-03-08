import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgvid from '../../../../assets/Buy-property/background/bgvid.mp4';
import { motion } from "framer-motion";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../../firebase";

const BACKEND_URL = process.env.NODE_ENV === "production"
  ? "https://jswebsite-ocj7.vercel.app/api/properties"
  : "http://localhost:3000/api/properties";

const Buying = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(BACKEND_URL);
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAdmin(user && user.email === "admin1@gmail.com");
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        const isEndReached = scrollLeft + clientWidth >= scrollWidth - 1;
        if (isEndReached) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="relative shadow-2xl py-6 w-full flex flex-col items-center px-4 md:px-10 my-10 bg-gray-100">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={bgvid} // Ensure this file is in the public folder
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay to darken the video for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

      {/* Title */}
      <motion.h2 className="relative z-10 text-3xl md:text-5xl font-bold tracking-wider text-orange-600 mb-6 drop-shadow-lg text-center">
        Find Your <span className="text-white">Dream Home</span>
      </motion.h2>

      {/* Property List (Horizontal Scrolling) */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto w-full max-w-6xl py-4 px-2 hide-scrollbar relative z-10"
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
      >
        {properties.length > 0 ? (
          properties.map((property) => (
            <motion.div
              key={property._id}
              className="inline-block min-w-[300px] bg-white backdrop-blur-lg bg-opacity-30 border border-gray-200 p-4 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => navigate(`/property/${property._id}`, { state: property })}
            >
              <img
                src={property.image || "https://via.placeholder.com/300"}
                alt={property.title}
                className="w-full h-48 object-cover rounded-lg"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-[rgb(255,102,0)] mt-3">{property.title}</h3>
              <p className="text-white">{property.location}</p>
              <p className="text-lg font-bold text-black">{property.price}</p>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500">Loading properties...</p>
        )}
      </div>

      {/* Buttons */}
      <div className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-lg justify-center items-center">
        <Link to="/buying-details" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:scale-105">
            View All Buying Options
          </button>
        </Link>

        {isAdmin && (
          <Link to="/add-property" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 text-lg font-semibold bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg transform hover:scale-105">
              Add Property
            </button>
          </Link>
        )}
      </div>

      {/* Hide scrollbar */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
};

export default Buying;
