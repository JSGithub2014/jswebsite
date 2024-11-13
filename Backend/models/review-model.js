// models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  quote: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 }, // Rating between 1 and 5
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
