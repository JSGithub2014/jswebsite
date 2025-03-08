import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://jswebsite-ocj7.vercel.app/api/properties"
    : "http://localhost:3000/api/properties";

const AllBuyingOptions = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    minArea: 500,
    maxArea: 10000,
    bedrooms: "",
    minPrice: 1000000,
    maxPrice: 100000000,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(BACKEND_URL);
        const data = await response.json();
        setProperties(data);
        setFilteredProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  // Search function
  useEffect(() => {
    const results = properties.filter(
      (property) =>
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProperties(results);
  }, [searchQuery, properties]);

  // Apply Filters
  const applyFilters = () => {
    const filtered = properties.filter((property) => {
      const priceNum = parseInt(property.price.replace(/\D/g, "")) || 0;
      return (
        (!filters.location ||
          property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        property.area >= filters.minArea &&
        property.area <= filters.maxArea &&
        (!filters.bedrooms || property.bedrooms == filters.bedrooms) &&
        priceNum >= filters.minPrice &&
        priceNum <= filters.maxPrice
      );
    });

    setFilteredProperties(filtered);
  };

  // Reset Filters
  const resetFilters = () => {
    setFilters({
      location: "",
      minArea: 500,
      maxArea: 10000,
      bedrooms: "",
      minPrice: 1000000,
      maxPrice: 100000000,
    });
    setSearchQuery("");
    setFilteredProperties(properties);
  };

  // Format price in Lakhs or Crores
  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else {
      return `₹${(price / 100000).toFixed(1)} L`;
    }
  };

  return (
    <div className="flex flex-col pt-20 max-w-7xl mx-auto p-6 h-auto">
      {/* Heading */}
     

      <div className="flex ">
        {/* Fixed Sidebar Filters (For Large Screens) */}
        <div className="hidden lg:block w-1/4 ">
  <div className="fixed top-[4rem] left-0 w-1/4 mb-20 overflow-y-auto h-screen  shadow-xl rounded-xl p-6 border border-gray-200">
    {/* Search Bar */}
    <div className="relative mb-6">
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        placeholder="Search properties..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>

    {/* Title */}
    <h2 className="text-2xl font-bold text-gray-900 mb-4">🔍 Refine Your Search</h2>

    {/* Location Filter */}
    <label className="block text-gray-700 font-medium">Location:</label>
    <input
      type="text"
      placeholder="Enter location..."
      className="w-full mb-4 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
      value={filters.location}
      onChange={(e) => setFilters({ ...filters, location: e.target.value })}
    />

    {/* Area Filter */}
    <label className="block text-gray-700 font-medium">📏 Area (sq ft):</label>
    <input
      type="range"
      min="500"
      max="10000"
      step="100"
      value={filters.minArea}
      onChange={(e) => setFilters({ ...filters, minArea: Number(e.target.value) })}
      className="w-full accent-orange-500"
    />
    <p className="text-sm font-medium text-gray-600">{filters.minArea} - {filters.maxArea} sqft</p>

    {/* Price Filter */}
    <label className="block text-gray-700 font-medium mt-4">💰 Price Range:</label>
    <input
      type="range"
      min="1000000"
      max="100000000"
      step="100000"
      value={filters.minPrice}
      onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
      className="w-full accent-orange-500"
    />
    <p className="text-sm font-medium text-gray-600">{formatPrice(filters.minPrice)} - {formatPrice(filters.maxPrice)}</p>

    {/* Bedrooms Filter */}
    <label className="block text-gray-700 font-medium mt-4">🛏 Bedrooms:</label>
    <select
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
      value={filters.bedrooms}
      onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
    >
      <option value="">Any</option>
      <option value="1">1 BHK</option>
      <option value="2">2 BHK</option>
      <option value="3">3 BHK</option>
      <option value="4">4+ BHK</option>
    </select>

    {/* Buttons */}
    <div className="flex gap-4 mt-6">
      <button
        className="w-1/2 bg-orange-600 text-white py-3 rounded-lg shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105"
        onClick={applyFilters}
      >
        Apply
      </button>
      <button
        className="w-1/2 bg-gray-400 text-white py-3 rounded-lg shadow-lg hover:bg-gray-500 transition duration-300 transform hover:scale-105"
        onClick={resetFilters}
      >
        Reset
      </button>
    </div>
  </div>
</div>



        {/* Main Content */}
        <div className="w-full lg:w-3/4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6 ">
        🏡 Explore Your Dream Home - <span className="text-orange-600">All Available Properties</span>
      </h1>
          {/* Property Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <motion.div
                  key={property._id}
                  className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => navigate(`/property/${property._id}`, { state: property })}
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover rounded-lg"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold text-orange-600 mt-3">{property.title}</h3>
                  <p className="text-gray-600">{property.location}</p>
                  <p className="text-lg font-bold text-black">{property.price}</p>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-3 h-screen w-full">No properties found...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBuyingOptions;
