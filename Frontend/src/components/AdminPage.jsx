import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useFirebaseContext } from "../context/Firebase";

const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://jswebsite-ocj7.vercel.app/api"
    : "http://localhost:3000/api";

const AdminReviewPage = () => {
  const firebase = useFirebaseContext();
  const [reviews, setReviews] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedRating, setSelectedRating] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user === null) {
        firebase.Logout();
        navigate("/login");
      } else if (user.email !== "admin1@gmail.com") {
        setUser(null);
        navigate("/");
        alert("You are not an admin");
      }
      setUser(user);
    });
  }, [user]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/review/all`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch reviews");
        return response.json();
      })
      .then((data) => {
        setReviews(data.reviews || []);
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  const handleAcceptReview = (id) => {
    const formData = new FormData();
    formData.append("status", "accepted");
    if (selectedImage) {
      formData.append("profileImage", selectedImage);
    }

    fetch(`${API_BASE_URL}/review/update/${id}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to accept review");
        return response.json();
      })
      .then(() => {
        alert("Review accepted");
        setReviews((prev) => prev.filter((review) => review._id !== id));
      })
      .catch((error) => alert("Failed to accept review"));
  };

  const handleRejectReview = (id) => {
    fetch(`${API_BASE_URL}/review/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to reject review");
        return response.json();
      })
      .then(() => {
        alert("Review deleted");
        setReviews((prev) => prev.filter((review) => review._id !== id));
      })
      .catch((error) => alert("Failed to reject review"));
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  const handleRatingFilterChange = (e) => {
    setSelectedRating(e.target.value);
  };

  const filteredReviews = selectedRating
    ? reviews.filter(
        (review) => review.rating === parseInt(selectedRating) && review.status !== "accepted"
      )
    : reviews.filter((review) => review.status !== "accepted");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-28">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">All Reviews</h2>

        <div className="mb-4">
          <label htmlFor="ratingFilter" className="mr-2 font-medium">
            Filter by Rating:
          </label>
          <select
            id="ratingFilter"
            value={selectedRating}
            onChange={handleRatingFilterChange}
            className="border p-2 rounded"
          >
            <option value="">All Ratings</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>

        {filteredReviews.length > 0 ? (
          <div className="space-y-4">
            {filteredReviews.map((review) => (
              <div key={review._id} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <h3 className="text-xl font-medium mb-2">{review.name}</h3>
                <p><strong>Position:</strong> {review.position}</p>
                <p><strong>Quote:</strong> {review.quote}</p>
                <p><strong>Rating:</strong> {renderStars(review.rating)}</p>
                <p><strong>Status:</strong> {review.status}</p>

                {review.profileImage && (
                  <img
                    src={`${API_BASE_URL}/uploads/${review.profileImage}`}
                    alt="Profile"
                    className="w-32 h-32 object-cover rounded-full mt-2"
                  />
                )}

                <div className="mt-2">
                  {review.status === "pending" && (
                    <>
                      <input type="file" onChange={handleImageChange} className="mb-2" />
                      <button
                        className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 mr-2"
                        onClick={() => handleAcceptReview(review._id)}
                      >
                        Accept
                      </button>
                      <button
                        className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
                        onClick={() => handleRejectReview(review._id)}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminReviewPage;
