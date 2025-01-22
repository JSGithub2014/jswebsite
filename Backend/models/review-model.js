const mongoose = require('mongoose');

// Define the schema for reviews
const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quote: { type: String, required: true },
  rating: { type: Number, required: true },
  position: { type: String, required: true },
  profileImage: { type: String }, // Store the image path
  status: { type: String, default: 'pending' }, // Pending, accepted, rejected
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
