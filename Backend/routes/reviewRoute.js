const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const dbgr = require("debug")("development:reviewRoute.js");

// POST route to submit a review
router.post("/", async (req, res) => {
    const { name, email, quote, rating } = req.body; // Adjust as per your review schema

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
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Review Submitted by ${name}`,
        text: `You have received a new review from ${name} (${email}):\n\n"${quote}"\nRating: ${rating}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        dbgr("Review email sent successfully");
        res.send("Review submitted successfully!"); // Changed to res.send
    } catch (error) {
        dbgr("Error sending review email:", error.message);
        res.status(500).send("Failed to submit review."); // Changed to res.send
    }
});

// PATCH route to accept a review
router.patch("/review/:id/accept", async (req, res) => {
    const reviewId = req.params.id; // Get the review ID from the request
    const { email } = req.body; // Email of the reviewer to notify

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
        res.send("Review accepted and email sent."); // Changed to res.send
    } catch (error) {
        dbgr("Error sending acceptance email:", error.message);
        res.status(500).send("Failed to send acceptance email."); // Changed to res.send
    }
});

// PATCH route to reject a review
router.patch("/review/:id/reject", async (req, res) => {
    const reviewId = req.params.id; // Get the review ID from the request
    const { email } = req.body; // Email of the reviewer to notify

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
        res.send("Review rejected and email sent."); // Changed to res.send
    } catch (error) {
        dbgr("Error sending rejection email:", error.message);
        res.status(500).send("Failed to send rejection email."); // Changed to res.send
    }
});

// Export the review route
module.exports = { reviewRoute: router };
