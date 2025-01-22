// reviewController.js
const Review = require('../models/review-model'); // Assuming you have a Review model for MongoDB

// Controller function to submit a new review
exports.submitReview = async (req, res, next) => {
  try {
    const { name, quote, rating, position } = req.body;
    const profileImage = req.file ? req.file.path : null; // Save the image path

    const newReview = new Review({
      name,
      quote,
      rating,
      position,
      profileImage,
      status: 'pending', // Default status
    });

    await newReview.save();
    res.status(200).json({ message: 'Review submitted successfully', review: newReview });
  } catch (err) {
    next(err);
  }
};

// Controller function to get all reviews
exports.getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    res.status(200).json({ reviews });
  } catch (err) {
    next(err);
  }
};

// Controller function to update review status
exports.updateReviewStatus = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, {
      status: 'accepted',
    }, { new: true });

    if (req.file) {
      review.profileImage = req.file.path; // Update profile image if uploaded
    }

    await review.save();
    res.status(200).json({ message: 'Review accepted', review });
  } catch (err) {
    next(err);
  }
};

// Controller function to delete a review (reject review)
exports.deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Review deleted', review });
  } catch (err) {
    next(err);
  }
};
