const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbgr = require("debug")("development:app.js");
const db = require("./db/mongoConnection");
const { loginRoute } = require("./routes/loginRoute");
const { contactRoute } = require("./routes/contactRoute");
const reviewRoute = require("./routes/reviewRoute");
const propertyRoutes = require("./routes/propertyRoutes");
const authRoute = require("./routes/auth");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

// Ensure 'uploads' directory exists
const uploadDirectory = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory); // Create the 'uploads' directory if it doesn't exist
}

db();

// CORS configuration
app.use(
  cors({
    origin: [process.env.CORS_ORIGIN || "https://www.jsasia.net", "http://localhost:5173"],
    methods: ["GET", "POST", "OPTIONS", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Origin",
      "X-Requested-With",
      "Accept",
    ],
    credentials: true, // Allow credentials if needed
  })
);

app.options("*", cors()); // Pre-flight options for all routes

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

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify the directory for storing uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Add timestamp to avoid name collisions
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error("Only JPEG, JPG, and PNG files are allowed"));
  },
});

// Serve static files from 'uploads' folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/contact", contactRoute);
app.use("/api/auth", authRoute);
app.use("/api/review", reviewRoute); // Ensure this is correct
app.use("/api/user", loginRoute); // Assuming this is correct
app.use("/api/properties", propertyRoutes);

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
