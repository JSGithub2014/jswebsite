const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const dbgr = require("debug")("development:reviewRoute.js");

let reviews = []; // Store unapproved reviews
let testimonials = []; // Store approved testimonials
let currentId = 1;

// Mock current testimonials (replace with your database or persistent storage)
testimonials = [
    { name: "Existing User", position: "Client", quote: "Great service!", rating: 5 },
    // Add more existing testimonials as needed
];

router.get("/", (req, res) => {
    res.send("Review route is working!");
});

// Endpoint to get all testimonials
router.get("/testimonials", (req, res) => {
    res.json(testimonials); // Return current testimonials
});

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

    const reviewId = currentId++;
    const newReview = { id: reviewId, name, email, quote, rating, mobile };
    reviews.push(newReview);

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

router.patch("/:id/accept", async (req, res) => {
    const reviewId = parseInt(req.params.id);
    const reviewIndex = reviews.findIndex(r => r.id === reviewId);
    if (reviewIndex === -1) {
        return res.status(404).send("Review not found.");
    }

    const review = reviews[reviewIndex];
    testimonials.push({
        name: review.name,
        position: "Client",
        quote: review.quote,
        rating: review.rating
    });

    reviews.splice(reviewIndex, 1); // Remove from unapproved list

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: review.email,
        subject: "Your Review Has Been Accepted",
        text: `Thank you for your review! Your submission has been accepted.`,
    };

    try {
        await transporter.sendMail(mailOptions);
        dbgr(`Email sent to ${review.email} about acceptance of review ID: ${reviewId}`);
        res.json({ message: "Review accepted successfully." });
    } catch (error) {
        dbgr("Error sending acceptance email:", error.message);
        res.status(500).send("Failed to send acceptance email.");
    }
});

router.patch("/:id/reject", async (req, res) => {
    const reviewId = parseInt(req.params.id);
    const reviewIndex = reviews.findIndex(r => r.id === reviewId);
    if (reviewIndex === -1) {
        return res.status(404).send("Review not found.");
    }

    const review = reviews[reviewIndex];
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: review.email,
        subject: "Your Review Has Been Rejected",
        text: `Thank you for your submission. Unfortunately, your review has been rejected.`,
    };

    try {
        await transporter.sendMail(mailOptions);
        dbgr(`Email sent to ${review.email} about rejection of review ID: ${reviewId}`);
        reviews.splice(reviewIndex, 1); // Remove from unapproved list
        res.json({ message: "Review rejected successfully." });
    } catch (error) {
        dbgr("Error sending rejection email:", error.message);
        res.status(500).send("Failed to send rejection email.");
    }
});

module.exports = { reviewRoute: router };
