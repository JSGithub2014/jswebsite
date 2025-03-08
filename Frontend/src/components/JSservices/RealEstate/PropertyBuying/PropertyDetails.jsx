import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PropertyDetails = () => {
  const { state: property } = useLocation();
  const navigate = useNavigate();
  const [fullImage, setFullImage] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);

  if (!property) {
    return <p className="text-center text-xl font-semibold">Property not found.</p>;
  }

  const {
    title,
    location,
    price,
    type,
    bedrooms,
    bathrooms,
    area,
    builtYear,
    images = [],
    amenities = [],
    details,
    latitude,
    longitude,
    contact = "+1-234-567-890",
  } = property;

  const displayedImages = images.slice(0, 3);
  const hiddenImages = images.slice(3);

  return (
    <div className="pt-20 min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 left-20 absolute px-5 py-2 bg-orange-500 text-gray-800 rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-300"
      >
        ⬅ Back to Listings
      </button>

      <h1 className="text-4xl font-bold text-orange-600 animate-fadeIn">{title}</h1>
      <p className="text-lg text-gray-600 mt-2">{location}</p>
      <p className="text-2xl font-semibold text-green-600 mt-2">{price}</p>

      {/* Property Images */}
      <div className="mt-6 flex flex-col items-center justify-center gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayedImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Property ${index}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setFullImage(img)}
            />
          ))}

          {hiddenImages.length > 0 && !showAllImages && (
            <div
              className="relative w-full h-64 rounded-lg shadow-lg cursor-pointer overflow-hidden hover:scale-105 transition-transform duration-300"
              onClick={() => setShowAllImages(true)}
            >
              <img src={hiddenImages[0]} alt="More Images" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-2xl font-bold">
                +{hiddenImages.length}
              </div>
            </div>
          )}
        </div>

        {/* Extra Images */}
        {showAllImages && hiddenImages.length > 0 && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
            {hiddenImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Extra Property ${index}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setFullImage(img)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Full Image Viewer */}
      {fullImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            onClick={() => setFullImage(null)}
            className="absolute top-5 right-5 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            ✕ Close
          </button>
          <img src={fullImage} alt="Full View" className="w-auto max-h-[90vh] rounded-lg shadow-lg" />
        </div>
      )}

      {/* Property Features */}
      <div className="mt-6 p-6 rounded-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">🏡 Property Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { label: "🏠 Type", value: type },
            { label: "🛏 Bedrooms", value: bedrooms },
            { label: "🛁 Bathrooms", value: bathrooms },
            { label: "📏 Area", value: area },
            { label: "📅 Built Year", value: builtYear },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 bg-orange-100 border-l-4 border-orange-500 rounded-lg shadow-sm hover:bg-orange-200 transition-all flex flex-col justify-center items-center transform hover:scale-105"
            >
              <span className="text-orange-600 font-semibold">{item.label}</span>
              <p className="text-gray-800 text-lg font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities Section */}
      {amenities.length > 0 && (
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            {amenities.map((amenity, index) => (
              <li key={index} className="flex items-center transition-all hover:text-orange-500">
                ✅ {amenity}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Google Maps Embed */}
      {latitude && longitude && (
        <div className="mt-10 w-full max-w-4xl transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Location</h2>
          <div className="w-full h-64 rounded-lg shadow-lg overflow-hidden">
            <iframe
              title="Property Location"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Call for More Details Button */}
      <button
        className="mt-6 px-6 py-3 bg-orange-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-orange-500 hover:scale-105 transition-all duration-300"
        onClick={() => alert(`Call us at ${contact}`)}
      >
        📞 Call for More Details
      </button>

      {/* Property Description */}
      {details && <p className="mt-6 max-w-2xl text-gray-700 text-center">{details}</p>}
    </div>
  );
};

export default PropertyDetails;
