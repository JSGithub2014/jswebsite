const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const dbgr = require("debug")("development:reviewRoute.js");

// In-memory storage for reviews
let reviews = [];
let acceptedReviews = [];
let currentId = 1;

// GET route to confirm that the review route is working
router.get("/", (req, res) => {
    res.send("Review route is working!"); // Simple confirmation message
});

// POST route to submit a review
router.post("/", async (req, res) => {
    const { name, email, quote, rating, mobile } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Generate a new review ID and store the review
    const reviewId = currentId++;
    const newReview = { id: reviewId, name, email, quote, rating, mobile };
    reviews.push(newReview); // Store the review in memory

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Review Submitted by ${name}`,
        html: `
            <p>You have received a new review from ${name} (${email}, ${mobile}):</p>
            <blockquote>"${quote}"</blockquote>
            <p>Rating: ${rating}</p>
            <p>
                <a href="https://jswebsite-ocj7.vercel.app/api/review/${reviewId}/accept" style="padding: 10px; background-color: green; color: white; text-decoration: none; border-radius: 5px;">Accept</a>
                <a href="https://jswebsite-ocj7.vercel.app/api/review/${reviewId}/reject" style="padding: 10px; background-color: red; color: white; text-decoration: none; border-radius: 5px;">Reject</a>
            </p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        dbgr("Review email sent successfully");
        res.send("Review submitted successfully!");
    } catch (error) {
        dbgr("Error sending review email:", error.message);
        res.status(500).send("Failed to submit review.");
    }
});

// GET route to accept a review
router.get("/:id/accept", async (req, res) => {
    const reviewId = parseInt(req.params.id);
    const review = reviews.find(r => r.id === reviewId);
    if (!review) {
        return res.status(404).send("Review not found.");
    }

    const email = review.email; // Get email from the review

    const transporter = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your Review Has Been Accepted",
        text: `Thank you for your review! Your submission has been accepted.`,
    };

    try {
        await transporter.sendMail(mailOptions);
        dbgr(`Email sent to ${email} about acceptance of review ID: ${reviewId}`);

        // Move accepted review to acceptedReviews array
        acceptedReviews.push(review);
        reviews = reviews.filter(r => r.id !== reviewId); // Remove from original reviews
        res.send("Review accepted and email sent.");
    } catch (error) {
        dbgr("Error sending acceptance email:", error.message);
        res.status(500).send("Failed to send acceptance email.");
    }
});

// PATCH route to reject a review
router.patch("/:id/reject", async (req, res) => {
    const reviewId = parseInt(req.params.id);
    const { email } = req.body;

    // Find the review by ID (in-memory)
    const review = reviews.find(r => r.id === reviewId);
    if (!review) {
        return res.status(404).send("Review not found.");
    }

    const transporter = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your Review Has Been Rejected",
        text: `Thank you for your submission. Unfortunately, your review has been rejected.`,
    };

    try {
        await transporter.sendMail(mailOptions);
        dbgr(`Email sent to ${email} about rejection of review ID: ${reviewId}`);
        // Optionally, remove the rejected review from the array
        reviews = reviews.filter(r => r.id !== reviewId);
        res.send("Review rejected and email sent.");
    } catch (error) {
        dbgr("Error sending rejection email:", error.message);
        res.status(500).send("Failed to send rejection email.");
    }
});

// GET route to fetch accepted reviews
router.get("/accepted", (req, res) => {
    res.json(acceptedReviews);
});

// Export the review route
module.exports = { reviewRoute: router };
