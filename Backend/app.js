const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbgr = require("debug")("development:app.js");
const { loginRoute } = require("./routes/loginRoute");
const { contactRoute } = require("./routes/contactRoute");

require("dotenv").config();

// Use the PORT from the environment variables set by Vercel
const PORT = process.env.PORT || 3000; // Default to 3000 for local development

// CORS setup
app.use(cors({
    origin: "https://www.jsasia.net",
    methods: ["GET", "POST"],
    credentials: true,
}));

// Middleware for debugging
app.use((req, res, next) => {
    dbgr("Middleware working");
    next();
});

// Cookie parser and body parsing middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handlers
app.use("/api/contact", contactRoute);
app.use("/api/user", loginRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
});

// Health check route
app.get("/", (req, res) => {
    res.status(200).send("Hello from server");
});

// Export the app for Vercel
module.exports = app;

// Start the server for local development
if (require.main === module) {
    app.listen(PORT, () => {
        dbgr(`Server is running on port ${PORT}`);
    });
}
