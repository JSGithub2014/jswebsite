// routes/review.js
const express = require('express');
const Review = require('../models/review-model');
const router = express.Router();

// POST request to submit a review
router.post('/', async (req, res) => {
  const { name, position, quote, rating } = req.body;

  if (!name || !position || !quote || rating === undefined) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create a new review document
    const newReview = new Review({
      name,
      position,
      quote,
      rating,
    });

    // Save to the database
    await newReview.save();
    res.status(201).json({ message: 'Review submitted successfully', review: newReview });
  } catch (error) {
    console.error('Error saving review:', error);
    res.status(500).json({ message: 'Failed to submit review', error });
  }
});

module.exports = router;
