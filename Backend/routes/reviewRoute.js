const express = require('express');
const nodemailer = require('nodemailer');
const Review = require('../models/review-model');
const router = express.Router();

// POST request to submit a review
router.post('/', async (req, res) => {
  const { name, position, quote, rating } = req.body;

  // Validate input fields
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

    // Email setup
    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // HTML content with buttons
    const mailOptions = {
      from: process.env.EMAIL_USER, // Use the email configured in .env
      to: process.env.EMAIL_USER,   // The recipient email
      subject: `New Review Submitted by ${name}`,
      html: `
        <h2>A new review has been submitted:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Quote:</strong> ${quote}</p>
        <p><strong>Rating:</strong> ${rating}</p>
        <br>
        <p>Please review the submission:</p>
        <a href="#" style="background-color: green; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-right: 10px;">btn 1</a>
        <a href="#" style="background-color: red; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">btn 2</a>
      `,
    };

    // Send email notification with review details
    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: 'Review submitted successfully',
      review: newReview,
    });

  } catch (error) {
    console.error('Error saving review or sending email:', error);
    res.status(500).json({ message: 'Failed to submit review or send email', error });
  }
});

module.exports = router;
