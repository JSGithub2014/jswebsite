import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../../firebase";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api/properties"
    : "https://jswebsite-ocj7.vercel.app/api/properties";

const AddProperty = () => {
  const [property, setProperty] = useState({
    title: "",
    location: "",
    latitude: "",
    longitude: "",
    price: "",
    image: "",
    images: [],
    details: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    builtYear: "",
    amenities: [],
  });

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        toast.error("Please log in to access this page");
        navigate("/login");
      } else if (user.email !== "admin1@gmail.com") {
        toast.warning("Access denied! Admins only.");
        navigate("/");
      } else {
        setUser(user);
      }
    });
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setProperty({ ...property, images: [...property.images, ...imageUrls] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(property),
    });

    if (response.ok) {
      toast.success("Property added successfully!");
    } else {
      toast.error("Failed to add property");
    }
  };

  return user ? (
    <div className="pt-20 max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Property</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required className="border p-2 rounded" />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} required className="border p-2 rounded" />
        <input type="number" name="latitude" placeholder="Latitude" onChange={handleChange} required className="border p-2 rounded" />
        <input type="number" name="longitude" placeholder="Longitude" onChange={handleChange} required className="border p-2 rounded" />
        <input type="text" name="price" placeholder="Price" onChange={handleChange} required className="border p-2 rounded" />
        <input type="text" name="image" placeholder="Main Image URL" onChange={handleChange} required className="border p-2 rounded" />
        <input type="number" name="bedrooms" placeholder="Bedrooms" onChange={handleChange} required className="border p-2 rounded" />
        <input type="number" name="bathrooms" placeholder="Bathrooms" onChange={handleChange} required className="border p-2 rounded" />
        <input type="number" name="area" placeholder="Area (sq. ft.)" onChange={handleChange} required className="border p-2 rounded" />
        <input type="number" name="builtYear" placeholder="Built Year" onChange={handleChange} required className="border p-2 rounded" />
        
        <div className="col-span-2">
          <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="border p-2 rounded w-full" />
          <div className="flex mt-2 gap-2">
            {property.images.map((image, index) => (
              <img key={index} src={image} alt={`Preview ${index}`} className="w-20 h-20 object-cover rounded" />
            ))}
          </div>
        </div>

        <button type="submit" className="col-span-2 bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          Add Property
        </button>
      </form>
      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  ) : null;
};

export default AddProperty;
