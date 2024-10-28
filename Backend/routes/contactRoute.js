const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const dbgr = require("debug")("development:contactRoute.js");

// POST route to send email
router.post("/", async (req, res) => {
    const { name, email, message } = req.body;

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
        subject: `Contact Form Submission from ${name}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        dbgr("Email sent successfully");
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        dbgr("Error sending email:", error.message);
        res.status(500).json({ message: "Failed to send email." });
    }
});

module.exports = { contactRoute: router };