const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbgr = require("debug")("development:app.js");
const { loginRoute } = require("./routes/loginRoute");
const { contactRoute } = require("./routes/contactRoute");

require("dotenv").config();

// Use the PORT from the environment variables set by Vercel
const PORT = process.env.PORT || 8000;

// CORS setup
app.use(cors({
    origin: "https://jswebsite-jsgroups-projects.vercel.app", // No trailing slash
    methods: ["GET", "POST"],
    credentials: true,
}));

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    console.log(`Origin: ${req.headers.origin}`);
    next();
});

// Cookie parser and body parsing middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handlers
app.use("/api/contact", contactRoute);
app.use("/api/user", loginRoute);

// Health check route
app.get("/", (req, res) => {
    res.status(200).send("Hello from server");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err); // Log the error for debugging
    res.status(500).send("Internal Server Error");
});

// Export the app for Vercel
module.exports = app;

// Start the server for local development
if (require.main === module) {
    app.listen(PORT, () => {
        dbgr(`Server is running on port ${PORT}`);
    });
}
