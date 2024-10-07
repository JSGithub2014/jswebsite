const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbgr = require("debug")("development:app.js");
const { loginRoute } = require("./routes/loginRoute");
const { contactRoute } = require("./routes/contactRoute");
require("dotenv").config();

app.use(cors({
    origin: 'https://www.jsasia.net',
    credentials: true, 
}));

const PORT = process.env.PORT || 8000;

// Allow preflight requests for all routes
app.options('*', cors()); 

// Middleware for logging requests
app.use((req, res, next) => {
    dbgr(`Received ${req.method} request for ${req.url}`);
    dbgr(`Origin: ${req.headers.origin}`);
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
