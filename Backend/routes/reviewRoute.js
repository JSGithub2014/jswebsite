const express = require('express');
const multer = require('multer');
const path = require('path');
const reviewController = require('../Controller/reviewController'); // Import the review controller

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the directory for storing uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Add timestamp to file names to avoid collisions
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Only JPEG, JPG, and PNG files are allowed'));
  },
});

// POST request to submit a review with an image
router.post('/', upload.single('profileImage'), reviewController.submitReview);

// GET request to fetch all reviews
router.get('/all', reviewController.getAllReviews);

// POST request to update review status and upload the profile image
router.post('/update/:id', upload.single('profileImage'), reviewController.updateReviewStatus);

// DELETE request to delete a review (Reject Review)
router.delete('/delete/:id', reviewController.deleteReview);

module.exports = router;
