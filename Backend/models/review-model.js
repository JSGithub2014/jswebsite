const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  quote: { type: String, required: true },
  rating: { type: Number, required: true },
  status: { type: String, default: 'pending' },
  profileImage: { type: String, required: false }, // Store the image path
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
