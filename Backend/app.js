const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbgr = require("debug")("development:app.js");
const db = require("./db/mongoConnection");
const { loginRoute } = require("./routes/loginRoute");
const { contactRoute } = require("./routes/contactRoute");
const { reviewRoute } = require("./routes/reviewRoute");
require("dotenv").config();

const app = express();

// Uncomment this if you need to establish a DB connection
db()

// CORS configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'https://www.jsasia.net', // Ensure this matches your frontend URL
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'],
    credentials: true, // Allow credentials if needed
}));

app.options('*', cors()); // Pre-flight options for all routes

const PORT = process.env.PORT || 8000;

// Middleware for logging requests
app.use((req, res, next) => {
    dbgr(`Received ${req.method} request for ${req.url}`);
    dbgr(`Headers: ${JSON.stringify(req.headers)}`);
    next();
});

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handlers
app.use("/api/contact", contactRoute);
app.use("/api/review", reviewRoute); // Ensure this is correct
app.use("/api/user", loginRoute); // Assuming this is correct

// Health check route
app.get("/", (req, res) => {
    res.status(200).send("Hello from server");
});

// Error handling middleware
app.use((err, req, res, next) => {
    dbgr(err);
    res.status(500).send("Internal Server Error");
});

// Start the server
if (require.main === module) {
    app.listen(PORT, () => {
        dbgr(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
