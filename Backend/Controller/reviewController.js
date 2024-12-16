const Review = require('../models/review-model'); // Ensure this path is correct

// POST request to submit a review with an image
const submitReview = async (req, res) => {
  const { name, position, quote, rating } = req.body;
  const profileImage = req.file ? req.file.path : null; // Get image path from the upload

  if (!name || !position || !quote || rating === undefined) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newReview = new Review({
      name,
      position,
      quote,
      rating,
      status: 'pending',
      profileImage,
    });

    await newReview.save();

    res.status(201).json({
      message: 'Review submitted successfully',
      review: newReview,
    });
  } catch (error) {
    console.error('Error saving review:', error);
    res.status(500).json({ message: 'Failed to submit review', error });
  }
};

// GET request to fetch all reviews
const getAllReviews = async (req, res) => {
  try {
    const allReviews = await Review.find();

    if (allReviews.length === 0) {
      return res.status(200).json({ message: 'No reviews found' });
    }

    res.status(200).json({ reviews: allReviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Failed to fetch reviews', error });
  }
};

// POST request to update review status and upload the profile image
const updateReviewStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const profileImage = req.file ? req.file.path : null;

  if (status !== 'accepted') {
    return res.status(400).json({ message: 'Only accepted status is allowed here' });
  }

  try {
    const updateData = { status: 'accepted' };
    if (profileImage) {
      updateData.profileImage = profileImage;
    }

    const updatedReview = await Review.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json({ message: 'Review accepted successfully', review: updatedReview });
  } catch (error) {
    console.error('Error updating review status:', error);
    res.status(500).json({ message: 'Failed to update review status', error });
  }
};

// DELETE request to delete a review (Reject Review)
const deleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ message: 'Failed to delete review', error });
  }
};

module.exports = {
  submitReview,
  getAllReviews,
  updateReviewStatus,
  deleteReview,
};
