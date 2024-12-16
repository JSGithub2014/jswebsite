import React, { useEffect, useState } from 'react';

const AdminReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedRating, setSelectedRating] = useState(''); // State to manage selected rating filter

  useEffect(() => {
    // Fetch all reviews from the server
    fetch('http://localhost:3000/api/review/all')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        return response.json();
      })
      .then(data => {
        setReviews(data.reviews || []);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  const handleAcceptReview = (id) => {
    const formData = new FormData();
    formData.append('status', 'accepted');
    if (selectedImage) {
      formData.append('profileImage', selectedImage);
    }

    fetch(`http://localhost:3000/api/review/update/${id}`, {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to accept review');
        }
        return response.json();
      })
      .then(() => {
        alert('Review accepted');
        setReviews((prevReviews) => prevReviews.filter(review => review._id !== id)); // Remove accepted review
      })
      .catch(error => {
        console.error('Error accepting review:', error);
        alert('Failed to accept review');
      });
  };

  const handleRejectReview = (id) => {
    fetch(`http://localhost:3000/api/review/delete/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to reject review');
        }
        return response.json();
      })
      .then(() => {
        alert('Review deleted');
        setReviews((prevReviews) => prevReviews.filter(review => review._id !== id)); // Remove rejected review
      })
      .catch(error => {
        console.error('Error rejecting review:', error);
        alert('Failed to reject review');
      });
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  // Function to display stars based on the rating
  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      if (i < filledStars) {
        stars.push(<span key={i} className="text-yellow-500">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    return <div className="flex">{stars}</div>;
  };

  // Handle the rating filter change
  const handleRatingFilterChange = (e) => {
    setSelectedRating(e.target.value);
  };

  // Filter reviews based on the selected rating and exclude accepted ones
  const filteredReviews = selectedRating
    ? reviews.filter((review) => review.rating === parseInt(selectedRating) && review.status !== 'accepted')
    : reviews.filter((review) => review.status !== 'accepted'); // Exclude 'accepted' reviews

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-28">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">All Reviews</h2>

        {/* Rating Filter Dropdown */}
        <div className="mb-4">
          <label htmlFor="ratingFilter" className="mr-2 font-medium">Filter by Rating:</label>
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

                {/* Display the profile image if it exists */}
                {review.profileImage && (
                  <div>
                    <img
                      src={`http://localhost:3000/uploads/${review.profileImage}`}
                      alt="Profile" 
                      className="w-32 h-32 object-cover rounded-full mt-2"
                    />
                  </div>
                )}

                <div className="mt-2">
                  {review.status === 'pending' && (
                    <>
                      <input
                        type="file"
                        onChange={handleImageChange}
                        className="mb-2"
                      />
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
    