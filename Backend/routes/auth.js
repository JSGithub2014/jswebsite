const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user-model"); // Adjust path as needed
const router = express.Router();
const dbgr = require("debug")("development:authRoutes.js");

// Middleware to check for authentication
const authenticate = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Forbidden" });
        }
        req.user = user; // Attach user to request
        next();
    });
};

// Register Route
router.post("/register", async (req, res) => {
    const { name, email, password, gender } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, gender });
        await user.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        dbgr(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Email doesn't exsist" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Create and send JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'None', // Adjust based on your requirements
        });
        res.status(200).json({ message: "Login successful!" });
    } catch (err) {
        dbgr(err.message);
        res.status(500).json({ message: "Server error" });
    }
});

// Logout Route
router.post("/logout", authenticate, (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful!" });
});

module.exports = router;
