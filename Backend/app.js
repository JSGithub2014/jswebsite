const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbgr = require("debug")("development:app.js");
const { loginRoute } = require("./routes/loginRoute");
const { contactRoute } = require("./routes/contactRoute");

require("dotenv").config();

const PORT = process.env.PORT || 8000;

// CORS setup
app.use(cors({
    origin: "https://www.jsasia.net",
    methods: ["GET", "POST"],
    credentials: true,
}));

app.use((req, res, next) => {
    dbgr("Middleware working");
    next();
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
    app.use("/api/contact", contactRoute);
    app.use("/api/user", loginRoute);
} catch (err) {
    dbgr(err.message);
}

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
    next();
});

// Health check
app.get("/", (req, res) => {
    res.status(200).send("Hello from server");
});

// Server listening
app.listen(PORT, () => {
    dbgr(`Server is running on port ${PORT}`);
});
